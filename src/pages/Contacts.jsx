export default function Contact() {
  return (
    <div
      className="fade-in contact-section"
      style={{
        backgroundImage: "url('/Background/Contacts.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        padding: "80px 20px"
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "60px",
          flexWrap: "wrap",
          maxWidth: "1000px",
          margin: "0 auto"
        }}
      >
        {/* LEFT COLUMN */}
        <div
          style={{
            flex: "1",
            minWidth: "300px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            color: "white"
          }}
        >
          <h2 style={{ marginBottom: "5px" }}>Get In Touch</h2>
          <p style={{ marginBottom: "20px", opacity: 0.8 }}>
            Have a question or want to work together?
          </p>

          <div
            className="contact-info"
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <a
                href="mailto:arcayanathantimothy@gmail.com"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                arcayanathantimothy@gmail.com
              </a>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <a
                href="https://www.linkedin.com/in/nathan-arcaya-a86541327/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                LinkedIn: Nathan Arcaya
              </a>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <a
                href="https://github.com/NatDeCocoaaa"
                target="_blank"
                rel="noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                GitHub: Nathan Arcaya
              </a>
            </div>
          </div>

          <a
            href="https://asiapacificcollege-my.sharepoint.com/:b:/g/personal/nsarcaya_student_apc_edu_ph/IQD2O4bo3MJJSYw9e1YRyWOvAZoYl2a6JAVwVU9hwJZ5HfY"
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
            style={{
              textDecoration: "none",
              display: "inline-block",
              marginTop: "30px"
            }}
          >
            View Resume
          </a>
        </div>

        {/* RIGHT COLUMN */}
        <div
          style={{
            flex: "1",
            minWidth: "300px",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <img
            src="/GIFS/Minecraft_GIF_Loop.gif"
            alt="Minecraft Scenery GIF"
            style={{
              width: "100%",
              maxWidth: "450px",
              height: "auto",
              borderRadius: "12px",
              boxShadow: "0 12px 40px rgba(0,0,0,0.7)",
              border: "1px solid rgba(255,255,255,0.05)"
            }}
          />
        </div>
      </div>
    </div>
  );
}
