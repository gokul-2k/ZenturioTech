'use client';

import { Button } from "@once-ui-system/core";

export default function ViewMoreButton() {
  const handleOpenJobSearch = () => {
    window.open('https://technopark.in/job-search?search=zenturiotech&type=', '_blank');
  };

  return (
    <Button 
      onClick={handleOpenJobSearch}
      style={{ 
        background: "transparent", 
        color: "#60a5fa", 
        borderRadius: 8, 
        fontWeight: 500, 
        fontSize: 15, 
        padding: "0.7rem 2.2rem",
        cursor: "pointer"
      }}
    >
      View More &gt;&gt;
    </Button>
  );
} 