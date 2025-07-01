import { Button } from "@once-ui-system/core";

export default function ChatbotButton() {
  return (
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
        background: "#072549",
        boxShadow: "0 4px 24px 0 rgba(7,37,73,0.25)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
      }}
      aria-label="Open chat"
      data-border="rounded"
      weight="default"
      href="#"
    >
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="18" fill="#072549"/>
        <path d="M11 14.5C11 13.1193 12.1193 12 13.5 12H22.5C23.8807 12 25 14.5V21.5C25 22.8807 23.8807 24 22.5 24H15L11 27V14.5Z" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="15" cy="18" r="1" fill="#fff"/>
        <circle cx="18" cy="18" r="1" fill="#fff"/>
        <circle cx="21" cy="18" r="1" fill="#fff"/>
      </svg>
    </Button>
  );
} 