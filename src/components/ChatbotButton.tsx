"use client"
import { Button } from "@once-ui-system/core";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function ChatbotButton() {
  const [open, setOpen] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi there! 👋 How can I help you today?" },
    { from: "user", text: "I want to know more about your AI services." },
    { from: "bot", text: "Absolutely! We offer custom AI solutions for businesses. Would you like details or a demo?" },
    { from: "user", text: "Show me a demo." },
    { from: "bot", text: "Here's a quick demo: Our AI can automate tasks, analyze data, and provide insights in real time! 🚀" },
    { from: "user", text: "How do I get started?" },
    { from: "bot", text: "Just let us know your requirements, and our team will reach out to you with a tailored solution!" },
  ]);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [open, messages]);

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
    // Simulate bot response
    setTimeout(() => {
      setMessages(msgs => [...msgs, { from: "bot", text: "Thank you for your message! Our team will get back to you soon." }]);
    }, 900);
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
          bottom: 130,
          right: 48,
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
          <span style={{letterSpacing:1}}>💬 Zenturio Chat</span>
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
      {open && typeof window !== 'undefined' && createPortal(chatWindow, document.body)}
      {/* Floating Chat Button with click animation */}
      <Button
        id="chat-float"
        style={{
          position: "fixed",
          bottom: "90px",
          right: "48px",
          zIndex: 1000,
          width: 80,
          height: 80,
          minWidth: 80,
          minHeight: 80,
          borderRadius: "50%",
          background: "rgba(25, 118, 210, 0.34)",
          boxShadow: "0 4px 24px 0 rgba(7,37,73,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          transition: 'transform 0.12s cubic-bezier(.4,2,.6,1)',
          transform: isPressed ? 'scale(0.92)' : 'scale(1)',
        }}
        aria-label="Open chat"
        data-border="rounded"
        weight="default"
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
        onClick={() => setOpen(true)}
      >
        <img
          src="/images/chat.png"
          alt="Open chat"
          style={{ width: 78, height: 78, objectFit: 'contain', display: 'block' }}
        />
      </Button>
    </>
  );
} 