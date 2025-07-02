import { Column, Flex, Button } from "@once-ui-system/core";

export default function Careers() {
  return (
    <>
    <div style={{ minHeight: "100vh", width: "100%", background: "transparent" }}>
      {/* TOP HERO SECTION - Girl with Laptop Overlapping Box */}
      <div style={{
        width: "100%",
        maxWidth: 1200,
        margin: "0 auto",
        position: "relative",
        marginTop: 120,
        marginBottom: 40,
        minHeight: 380,
      }}>
        {/* Large white 'Careers' heading */}
        <div style={{
          textAlign: "center",
          fontSize: 64,
          fontWeight: 400,
          color: "#fff",
          marginBottom: 18,
          letterSpacing: 0.5,
        }}>
          Careers
        </div>
        {/* Blue rounded box with image inside on the left */}
        <div className="careers-hero-box" style={{
          background: "rgba(62, 90, 122, 0.84)",
          borderRadius: "2.2rem",
          boxShadow: "0 8px 40px 0 rgba(7, 37, 73, 0.5), 0 0 0 2pxrgba(25, 118, 210, 0) inset",
          minHeight: 260,
          maxHeight: 400,
          display: "flex",
          alignItems: "center",
          position: "relative",
          marginBottom: 100,
          zIndex: 1,
          overflow: "visible",
        }}>
          {/* Girl with Laptop - inside the box, left side, vertically centered */}
          <img
            src="/images/girllap.png"
            alt="Careers Hero"
            className="careers-hero-img"
            style={{
              height: 620,
              width: "auto",
              objectFit: "contain",
              borderRadius: "2rem",
              marginRight: -35,
              flexShrink: 0,
              paddingBottom: 108,
              paddingLeft: 0,
            }}
          />
          {/* Text Content */}
          <div className="careers-hero-text" style={{ color: "#fff", maxWidth: 800, fontSize: 17, lineHeight: 1.7, wordBreak: "break-word", whiteSpace: "pre-line", marginLeft: 0 ,marginRight: 50}}>
            <div style={{ fontSize: 35, fontWeight: 500, marginBottom: 12, color: "#fff" }}>
              Why work at <span style={{ color: "#60a5fa" }}>Zenturiotech</span>
            </div>
            <div style={{ fontSize: 20, opacity: 0.97, lineHeight: 1.7, textAlign: "justify" }}>
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
        minHeight: 350,
        borderRadius: "2.2rem",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 4px 32px 0 rgba(7,37,73,0.18)",
        display: "flex",
        alignItems: "center",
        background: "none",
        marginBottom: 120,
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
          height: 350,
          maxWidth: "90%",
          background: "rgba(255, 255, 255, 0.77)",
          borderRadius: "4rem",
          boxShadow: "0 2px 16px 0 rgba(96,165,250,0.13)",
          padding: "2.2rem 2.2rem 2.2rem 2.2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <div style={{ fontSize: 26, fontWeight: 600, marginBottom: 10, color: "#222", textAlign: "center" }}>
            What can you <span style={{ color: "#60a5fa" }}>Expect</span>
          </div>
          <div style={{ fontSize: 17, color: "#222", textAlign: "center" }}>
            Environment of collaboration, inclusion and celebration. A chance to design a clear, growing career path. Learning with a team of go-getters. A variety of benefit programs and competitive compensation. Exposure to international work opportunities.
          </div>
        </div>
      </div>

      {/* CURRENT OPENINGS */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2vw" }}>
        <div style={{ fontSize: 34, fontWeight: 500, color: "#fff", margin: "2.5rem 0 1.5rem 0" }}>
          Current Openings
        </div>
        {/* Job Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Card 1 */}
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
              <span style={{ fontSize: 18, color: "#60a5fa", marginRight: 8, marginTop: 2 }}>●</span> Technical Trainer
            </div>
            <div style={{ fontSize: 16, opacity: 0.93, marginBottom: 8 }}>
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
            padding: "1.5rem 2rem 1.5rem 1.5rem",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 28, fontWeight: 600, color: "#1da1f2" }}>
              <span style={{ fontSize: 16, color: "#60a5fa", marginRight: 8, marginTop: 2 }}>●</span> Ui/UX Intern
            </div>
            <div style={{ fontSize: 16, opacity: 0.93, marginBottom: 8 }}>
              Are you passionate about sharing knowledge and enhancing the skills of others? Join our Knowledge Management and Talent Development team at Zenturiotech as a Trainer. As a Trainer, you will play a crucial role in delivering comprehensive training programs to both new hires and existing employees, focusing on Technical and Functional aspects. You will have the opportunity to stay updated with the latest technologies, be a knowledge champion within the organization, and contribute to the overall growth of our team.
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button style={{ background: "#1976d2", color: "#fff", borderRadius: 8, fontWeight: 500, fontSize: 14, padding: "0.5rem 1.2rem" }}>View Openings</Button>
            </div>
          </div>
        </div>
        {/* View More Button */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 24 }}>
          <Button style={{ background: "transparent", color: "#60a5fa", borderRadius: 8, fontWeight: 500, fontSize: 15, padding: "0.7rem 2.2rem"}}>
            View More &gt;&gt;
          </Button>
        </div>
      </div>
    </div>
    <style>{`
      @media (max-width: 1070px) {
        .careers-hero-box {
          flex-direction: column !important;
          align-items: center !important;
          max-height: none !important;
          padding: 1.2rem 1.2rem 1.2rem 1.2rem !important;
        }
        .careers-hero-img {
          height: 180px !important;
          width: 100% !important;
          max-width: 320px !important;
          margin: 0 auto 18px auto !important;
          display: block !important;
          padding-bottom: 0 !important;
        }
        .careers-hero-text {
          margin: 0 !important;
          max-width: 100% !important;
          font-size: 15px !important;
          text-align: center !important;
        }
        .careers-glass-section {
          flex-direction: column !important;
          min-height: 220px !important;
          margin-bottom: 48px !important;
        }
        .careers-glass-card {
          width: 100% !important;
          margin: 0 !important;
          height: auto !important;
          border-radius: 2rem !important;
          padding: 1.2rem !important;
        }
        .careers-openings {
          padding: 0 1vw !important;
        }
        .careers-job-card {
          font-size: 15px !important;
          padding: 1rem !important;
        }
      }
    `}</style>
    </>
  );
}