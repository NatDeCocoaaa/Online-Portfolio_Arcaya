export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built with Vite, React, and modern UI practices.",
      status: "Finished",
      date: "January 2026",
      people: ["Nathan Arcaya"],
      link: "",
      imgSrc: "/Project_SS/Portfolio_Website_Project.jpg"
    },
    {
      title: "CLEANI UI/UX Design",
      desc: "A UI/UX design project focused on creating a user-centered website through the development of detailed user personas. The design was built in Figma, informed by insights from a teammate’s prior projects, and iteratively refined through multiple revisions based on interviews and usability feedback.",
      status: "Finished",
      date: "October 2025",
      people: ["Nathan Arcaya", "Ashley May Barisoro", "Gwyneth Cataylo", "Ariana May Saromo"],
      link: "",
      imgSrc: "/Project_SS/CLEANI_UI_UX_Design_Project.jpg"
    },
    {
      title: "Enhancing Transportation and Delivery Efficiency through Dijkstra's Algorithm",
      desc: "A coded system that visualizes and computes optimal delivery routes using Dijkstra’s Algorithm. Built to demonstrate shortest-path optimization for transportation and logistics scenarios.",
      status: "Finished",
      date: "October 2025",
      people: ["Nathan Arcaya", "Charrise Keira Tarog", "Japhet Melquisdec Gonzales"],
      link: "",
      imgSrc: "/Project_SS/Transportation_Dijkstra_Project.jpg"
    },
    {
      title: "Proposed Database Design for TRJ CCTV",
      desc: "A database design project for a real CCTV services business, involving business rule analysis, schema design, SQL image handling, and system implementation in a XAMPP environment.",
      status: "Finished",
      date: "October 2025",
      people: ["Nathan Arcaya", "Francis Emmanuel Anciro", "Emmanuel Jamir Paje", "Ethan Edgar Francisco"],
      link: "",
      imgSrc: "/Project_SS/Proposed_Database_Design_Project.jpg"
    },
    {
      title: "Python & OOP Aid Distribution System",
      desc: "A Python-based aid distribution management system designed using Object-Oriented Programming.",
      status: "Finished",
      date: "June 2025",
      people: ["Nathan Arcaya"],
      link: "",
      imgSrc: "/Project_SS/Python_OOP_Aid_Distribution_System_Project.jpg"
    },
    {
      title: "Exposing Vulnerabilities: DDoS on IoT Devices",
      desc: "A cybersecurity research project analyzing how Distributed Denial-of-Service (DDoS) attacks exploit IoT device vulnerabilities.",
      status: "Finished",
      date: "November 2024",
      people: ["Nathan Arcaya", "Prince Jabez Reyes", "Rafael Kenneth Mercado"],
      link: "",
      imgSrc: "/Project_SS/DDoS_IoT_Project.jpg"
    },
    {
      title: "Life OS",
      desc: "A personal knowledge and productivity system designed to organize tasks, learning resources, journaling, and personal development workflows.",
      status: "Ongoing",
      date: null,
      people: ["Nathan Arcaya"],
      link: "",
      imgSrc: "/Project_SS/Life_OS_Project.jpg"
    },
    {
      title: "Second Brain",
      desc: "A structured digital knowledge system focused on capturing, organizing, and retrieving information efficiently.",
      status: "Ongoing",
      date: null,
      people: ["Nathan Arcaya"],
      link: "",
      imgSrc: "/Project_SS/Second_Brain_Project.jpg"
    },
    {
      title: "Local-based Note-Taking App with AI",
      desc: "A planned note-taking application that prioritizes local data storage while integrating an AI assistant.",
      status: "Planned",
      date: null,
      people: ["Nathan Arcaya"],
      link: "",
      imgSrc: "/Project_SS/Note_Taking_App_Project.jpg"
    }
  ];

  return (
    <div
      className="fade-in projects-page"
      style={{
        backgroundImage: "url('/Background/Projects.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        padding: "60px 20px"
      }}
    >
      <h2>My Projects</h2>

      <div className="projects-list">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            
            {/* Image Preview */}
            <div className="project-image-container">
              <img
                src={proj.imgSrc || "https://via.placeholder.com/400x200?text=Preview+Coming+Soon"}
                alt={proj.title}
              />
            </div>

            <div className="project-info">
              <div className="project-header">
                <h4>{proj.title}</h4>
                <span className={`status ${proj.status.toLowerCase()}`}>
                  {proj.status}
                </span>
              </div>

              <p className="project-desc">{proj.desc}</p>

              <div className="project-meta">
                <span>👥 {proj.people.join(", ")}</span>
                <span>📅 {proj.date || "—"}</span>
              </div>

              {proj.link && proj.link !== "#" && (
                <a
                  href={proj.link}
                  className="view-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
