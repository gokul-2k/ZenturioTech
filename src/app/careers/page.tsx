import { Column, Flex, Button } from "@once-ui-system/core";

export default function Careers() {
  return (
    <div style={{ minHeight: "100vh", width: "100%", background: "transparent" }}>
      {/* TOP HERO SECTION - Girl with Laptop Overlapping Box */}
      <div style={{
        width: "100%",
        maxWidth: 1200,
        margin: "0 auto",
        position: "relative",
        marginTop: 60,
        marginBottom: 40,
        minHeight: 380,
      }}>
        {/* Large white 'Careers' heading */}
        <div style={{
          textAlign: "center",
          fontSize: 44,
          fontWeight: 700,
          color: "#fff",
          marginBottom: 18,
          letterSpacing: 0.5,
        }}>
          Careers
        </div>
        {/* Girl with Laptop - Absolutely positioned, outside and overlapping the box */}
        <img
          src="/images/girllap.png"
          alt="Careers Hero"
          style={{
            position: "absolute",
            left: 0,
            top: 80,
            height: 320,
            width: "auto",
            objectFit: "contain",
            borderRadius: "2rem",
            boxShadow: "0 8px 32px 0 rgba(7,37,73,0.18)",
            zIndex: 2,
          }}
        />
        {/* Blue rounded box with text, shifted right to make space for image */}
        <div style={{
          background: "rgba(10,44,82,0.98)",
          borderRadius: "2.2rem",
          boxShadow: "0 8px 40px 0 rgba(7,37,73,0.28), 0 0 0 2px #1976d2 inset",
          minHeight: 260,
          display: "flex",
          alignItems: "center",
          position: "relative",
          marginLeft: 220,
          marginBottom: 100,
          padding: "2.8rem 2.8rem 2.8rem 2.8rem",
          zIndex: 1,
          border: "2px solid #1976d2",
          overflow: "visible",
        }}>
          {/* Text Content */}
          <div style={{ color: "#fff", maxWidth: 800, fontSize: 17, lineHeight: 1.7, wordBreak: "break-word", whiteSpace: "pre-line" }}>
            <div style={{ fontSize: 28, fontWeight: 700, marginBottom: 12, color: "#fff" }}>
              Why work at <span style={{ color: "#60a5fa" }}>Zenturiotech</span>
            </div>
            <div style={{ fontSize: 17, opacity: 0.97, lineHeight: 1.7 }}>
              With an outstanding team driving us forward, we're confident in our path and committed to offering the best opportunities for learning, growth, and innovation. Collaborating with some of the world's top service providers, we foster a culture that's diverse, dynamic, and driven by purpose. If you're looking for a workplace with energy, and big ambitions you're in the right place.
            </div>
          </div>
        </div>
      </div>

      {/* HERO SECTION 2 - Two Girls as Background, Glass Card Overlay */}
      <div style={{
        
        width: "100%",
        maxWidth: 1200,
        margin: "0 auto 2.5rem auto",
        minHeight: 260,
        borderRadius: "2.2rem",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 4px 32px 0 rgba(7,37,73,0.18)",
        display: "flex",
        alignItems: "center",
        background: "none",
      }}>
        {/* Background image with dark overlay */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          borderRadius: "2.2rem",
          overflow: "hidden",
        }}>
          <img
            src="/images/2girls.jpg"
            alt="Teamwork"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "2.2rem",
              display: "block",
            }}
          />
          {/* Dark overlay for contrast */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(10,44,82,0.28)",
            borderRadius: "2.2rem",
          }} />
        </div>
        {/* Glass Card Overlay */}
        <div style={{
          position: "relative",
          zIndex: 2,
          marginLeft: "auto",
          marginRight: 40,
          width: 420,
          height: 260,
          maxWidth: "90%",
          background: "rgba(255,255,255,0.93)",
          borderRadius: "2rem",
          boxShadow: "0 2px 16px 0 rgba(96,165,250,0.13)",
          padding: "2.2rem 2.2rem 2.2rem 2.2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <div style={{ fontSize: 26, fontWeight: 700, marginBottom: 10, color: "#222", textAlign: "center" }}>
            What can you <span style={{ color: "#60a5fa" }}>Expect</span>
          </div>
          <div style={{ fontSize: 17, color: "#222", textAlign: "center" }}>
            Environment of collaboration, inclusion and celebration. A chance to design a clear, growing career path. Learning with a team of go-getters. A variety of benefit programs and competitive compensation. Exposure to international work opportunities.
          </div>
        </div>
      </div>

      {/* CURRENT OPENINGS */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2vw" }}>
        <div style={{ fontSize: 28, fontWeight: 600, color: "#fff", margin: "2.5rem 0 1.5rem 0" }}>
          Current Openings
        </div>
        {/* Job Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Card 1 */}
          <div style={{
            background: "#0a2c52",
            border: "1.5px solid #1976d2",
            borderRadius: "1.2rem",
            padding: "1.5rem 2rem 1.5rem 1.5rem",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            boxShadow: "0 2px 16px 0 rgba(96,165,250,0.13)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 22, fontWeight: 600, color: "#1da1f2" }}>
              <span style={{ fontSize: 16, color: "#60a5fa", marginRight: 8, marginTop: 2 }}>●</span> Technical Trainer
            </div>
            <div style={{ fontSize: 14, opacity: 0.93, marginBottom: 8 }}>
              Are you passionate about sharing knowledge and enhancing the skills of others? Join our Knowledge Management and Talent Development team at Zenturiotech as a Trainer. As a Trainer, you will play a crucial role in delivering comprehensive training programs to both new hires and existing employees, focusing on Technical and Functional aspects. You will have the opportunity to stay updated with the latest technologies, be a knowledge champion within the organization, and contribute to the overall growth of our team.
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button style={{ background: "#1976d2", color: "#fff", borderRadius: 8, fontWeight: 500, fontSize: 14, padding: "0.5rem 1.2rem" }}>View Openings</Button>
            </div>
          </div>
          {/* Card 2 */}
          <div style={{
            background: "#0a2c52",
            border: "1.5px solid #1976d2",
            borderRadius: "1.2rem",
            padding: "1.5rem 2rem 1.5rem 1.5rem",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            boxShadow: "0 2px 16px 0 rgba(96,165,250,0.13)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 22, fontWeight: 600, color: "#1da1f2" }}>
              <span style={{ fontSize: 16, color: "#60a5fa", marginRight: 8, marginTop: 2 }}>●</span> Ui/UX Intern
            </div>
            <div style={{ fontSize: 14, opacity: 0.93, marginBottom: 8 }}>
              Are you passionate about sharing knowledge and enhancing the skills of others? Join our Knowledge Management and Talent Development team at Zenturiotech as a Trainer. As a Trainer, you will play a crucial role in delivering comprehensive training programs to both new hires and existing employees, focusing on Technical and Functional aspects. You will have the opportunity to stay updated with the latest technologies, be a knowledge champion within the organization, and contribute to the overall growth of our team.
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button style={{ background: "#1976d2", color: "#fff", borderRadius: 8, fontWeight: 500, fontSize: 14, padding: "0.5rem 1.2rem" }}>View Openings</Button>
            </div>
          </div>
        </div>
        {/* View More Button */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 24 }}>
          <Button style={{ background: "#072549", color: "#60a5fa", borderRadius: 8, fontWeight: 500, fontSize: 15, padding: "0.7rem 2.2rem", border: "1.5px solid #60a5fa" }}>
            View More &gt;&gt;
          </Button>
        </div>
      </div>
    </div>
  );
}
