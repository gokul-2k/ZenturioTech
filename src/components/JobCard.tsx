'use client';

import { Button } from "@once-ui-system/core";

interface JobCardProps {
  title: string;
  description: string;
  link?: string; // Add optional link prop
}

export default function JobCard({ title, description, link }: JobCardProps) {
  const handleOpenJobSearch = () => {
    const url = link || 'https://technopark.in/job-search?search=zenturiotech&type=';
    window.open(url, '_blank');
  };

  return (
    <div style={{
      background: "#0a2c52",
      border: "1.5px solid #1976d2",
      padding: "1.5rem 2rem 1.5rem 1.5rem",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      gap: 8,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 28, fontWeight: 600, color: "#1da1f2" }}>
        <span style={{ fontSize: 18, color: "#60a5fa", marginRight: 8, marginTop: 2 }}>●</span> {title}
      </div>
      <div style={{ fontSize: 16, opacity: 0.93, marginBottom: 8 }}>
        {description}
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button 
          onClick={handleOpenJobSearch}
          style={{ 
            background: "#1976d2", 
            color: "#fff", 
            borderRadius: 8, 
            fontWeight: 500, 
            fontSize: 14, 
            padding: "0.5rem 1.2rem",
            cursor: "pointer"
          }}
        >
          View Openings
        </Button>
      </div>
    </div>
  );
} 