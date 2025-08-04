"use client"
import { Button } from "@once-ui-system/core";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

type Message = { from: 'user' | 'bot'; text: string };

export default function ChatbotButton() {
  // Add an enabled flag - set to false to hide the button
  const CHATBOT_ENABLED = false;

  // If chatbot is disabled, return null to hide the component
  if (!CHATBOT_ENABLED) return null;

  const [open, setOpen] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  // Check if component is mounted to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Check mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (open && chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [open, messages]);

  // Auto-greet when chat opens and no messages
  useEffect(() => {
    if (open && messages.length === 0) {
      // Show loading bot message
      setMessages([{ from: "bot", text: "..." }]);
      (async () => {
        const response = await fetch("/api/chatbot", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: "Hello" }),
        });
        if (!response.body) {
          setMessages([{ from: "bot", text: "Sorry, I couldn't get a response. Please try again later." }]);
          return;
        }
        const reader = response.body.getReader();
        let botText = "";
        let done = false;
        const decoder = new TextDecoder();
        setMessages([]); // Remove loading
        while (!done) {
          const { value, done: doneReading } = await reader.read();
          done = doneReading;
          if (value) {
            const chunk = decoder.decode(value);
            const lines = chunk.split('\n');
            for (const line of lines) {
              if (line.startsWith('data:')) {
                try {
                  const json = JSON.parse(line.replace('data: ', '').trim());
                  const content = json.choices?.[0]?.delta?.content;
                  if (content) {
                    botText += content;
                    setMessages(msgs => {
                      if (msgs.length && msgs[msgs.length - 1].from === "bot") {
                        return [...msgs.slice(0, -1), { from: "bot", text: botText }];
                      } else {
                        return [...msgs, { from: "bot", text: botText }];
                      }
                    });
                  }
                } catch (e) {}
              }
            }
          }
        }
      })();
    }
  }, [open]);

  const handleSend = async () => {
    if (input.trim() === "") return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
    // Show loading bot message
    setMessages(msgs => [...msgs, { from: "bot", text: "..." }]);

    // Call the API route
    const response = await fetch("/api/chatbot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    if (!response.body) {
      setMessages(msgs => [
        ...msgs.slice(0, -1),
        { from: "bot", text: "Sorry, I couldn't get a response. Please try again later." }
      ]);
      return;
    }

    // Stream the response
    const reader = response.body.getReader();
    let botText = "";
    let done = false;
    const decoder = new TextDecoder();
    // Remove the loading message
    setMessages(msgs => msgs.slice(0, -1));
    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      if (value) {
        const chunk = decoder.decode(value);
        // Split by newlines in case multiple SSE events are in one chunk
        const lines = chunk.split('\n');
        for (const line of lines) {
          if (line.startsWith('data:')) {
            try {
              const json = JSON.parse(line.replace('data: ', '').trim());
              const content = json.choices?.[0]?.delta?.content;
              if (content) {
                botText += content;
                setMessages(msgs => {
                  if (msgs.length && msgs[msgs.length - 1].from === "bot") {
                    return [...msgs.slice(0, -1), { from: "bot", text: botText }];
                  } else {
                    return [...msgs, { from: "bot", text: botText }];
                  }
                });
              }
            } catch (e) {
              // Ignore lines that aren't valid JSON
            }
          }
        }
      }
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  // Chat window content
  const chatWindow = (
    <>
      {/* Blurred overlay background */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 2147483646,
          background: 'rgba(10,34,64,0.18)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
        }}
      />
      {/* Chat window */}
      <div
        style={{
          position: "fixed",
          bottom: isMobile ? 100 : 130,
          right: isMobile ? 16 : 48,
          width: 370,
          maxWidth: '95vw',
          height: 650,
          maxHeight: '80vh',
          background: 'rgba(255,255,255,0.98)',
          borderRadius: 28,
          boxShadow: '0 12px 48px 0 rgba(7,37,73,0.22)',
          zIndex: 2147483647,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Header with Exit Button */}
        <div
          style={{
            width: '100%',
            height: 60,
            background: 'linear-gradient(90deg, #1976d2 0%, #2ea6ff 100%)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 24px',
            fontWeight: 400,
            fontSize: 20,
            position: 'relative',
            letterSpacing: 0.2,
            boxShadow: '0 2px 12px 0 rgba(25,118,210,0.08)',
          }}
        >
          <span style={{letterSpacing:1}}>Zenturio</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#fff',
              fontSize: 28,
              fontWeight: 400,
              cursor: 'pointer',
              position: 'absolute',
              right: 25,
              top: 15,
              lineHeight: 1,
              padding: 0,
            }}
          >
            x
          </button>
        </div>
        {/* Chat Body with sample conversation */}
        <div
          ref={chatBodyRef}
          style={{
            flex: 1,
            background: 'linear-gradient(135deg, #f4f8fb 60%, #e3f2fd 100%)',
            padding: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            overflowY: 'auto',
            scrollbarWidth: 'thin',
          }}
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              style={{
                alignSelf: msg.from === 'user' ? 'flex-end' : 'flex-start',
                background: msg.from === 'user' ? 'linear-gradient(90deg, #1976d2 0%, #2ea6ff 100%)' : '#e3f2fd',
                color: msg.from === 'user' ? '#fff' : '#1976d2',
                borderRadius: msg.from === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                padding: '11px 20px',
                maxWidth: '80%',
                fontSize: 16.5,
                fontWeight: 500,
                boxShadow: '0 2px 8px 0 rgba(25,118,210,0.08)',
                marginBottom: 2,
                marginTop: 2,
                wordBreak: 'break-word',
                border: msg.from === 'user' ? '1.5px solid #1976d2' : '1.5px solid #e3f2fd',
                transition: 'background 0.2s',
              }}
            >
              {msg.text}
            </div>
          ))}
        </div>
        {/* Input area */}
        <div
          style={{
            width: '100%',
            background: '#f4f8fb',
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            borderTop: '1.5px solid #e3f2fd',
          }}
        >
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleInputKeyDown}
            placeholder="Type your message..."
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              borderRadius: 18,
              padding: '12px 16px',
              fontSize: 16,
              background: '#fff',
              boxShadow: '0 1px 4px 0 rgba(25,118,210,0.06)',
              color: '#1976d2',
              fontWeight: 500,
              transition: 'box-shadow 0.2s',
            }}
          />
          <button
            onClick={handleSend}
            style={{
              background: 'linear-gradient(90deg, #1976d2 0%, #2ea6ff 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: 16,
              padding: '10px 22px',
              fontSize: 16,
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 2px 8px 0 rgba(25,118,210,0.10)',
              transition: 'background 0.2s',
              outline: 'none',
              letterSpacing: 0.2,
            }}
            aria-label="Send message"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Chat Window rendered in portal */}
      {open && isMounted && createPortal(chatWindow, document.body)}
      {/* Floating Chat Button with click animation */}
      {!open && (
        <Button
          onClick={() => setOpen(true)}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          onMouseLeave={() => setIsPressed(false)}
          style={{
            position: "fixed",
            bottom: isMobile ? 90 : 90,
            right: isMobile ? 24 : 48,
            width: isMobile ? 48 : 80,
            height: isMobile ? 48 : 80,
            borderRadius: "50%",
            background: "linear-gradient(90deg, #1976d2 0%, #2ea6ff 100%)",
            boxShadow: isPressed
              ? "0 2px 8px 0 rgba(25,118,210,0.18)"
              : "0 8px 28px 0 rgba(25,118,210,0.28)",
            border: "none",
            cursor: "pointer",
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s ease",
            transform: isPressed ? "scale(0.94)" : "scale(1)",
            zIndex: 2147483646,
          }}
        >
          <img
            src="/images/chat.png"
            alt="Chat"
            style={{
              width: isMobile ? 42 : 78,
              height: isMobile ? 42 : 78,
              objectFit: "contain",
              transition: "all 0.2s ease",
              transform: isPressed ? "scale(0.94)" : "scale(1)",
            }}
          />
        </Button>
      )}
    </>
  );
} 