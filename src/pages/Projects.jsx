/**
 * PROJECTS COMPONENT
 * Displays a collection of projects with status labels (Finished, Ongoing, Planned).
 */

import PortfolioImg from "../assets/Project_SS/Portfolio_Website_Project.jpg"; 
import CLEANIImg from "../assets/Project_SS/UX_Design_Project.jpg";
import DijkstraImg from "../assets/Project_SS/Transportation_Dijkstras_Algorithm_Project.jpg";
import TRJDBImg from '../assets/Project_SS/Proposed_Database_Design_Project.jpg';
import AidImg from '../assets/Project_SS/Python_&_OOP_Aid_Distribution_System_Project.jpg';
import DDoSImg from '../assets/Project_SS/Exposing_Vulnerabilities_DDoS_on_IoT_Devices_Project.jpg';
import LifeOSImg from '../assets/Project_SS/Life_OS_Project.jpg';
import SecondBrainImg from '../assets/Project_SS/Second_Brain_Project.jpg';
import NoteAppImg from '../assets/Project_SS/Note-Taking_Application_Cover_Project.jpg';

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built with Vite, React, and modern UI practices.",
      status: "Finished",
      date: "January 2026",
      people: ["Nathan Arcaya"],
      link: "",
      imgSrc: PortfolioImg
    },
    {
      title: "CLEANI UI/UX Design",
      desc: "A UI/UX design project focused on creating a user-centered website through the development of detailed user personas. The design was built in Figma, informed by insights from a teammate’s prior projects, and iteratively refined through multiple revisions based on interviews and usability feedback.",
      status: "Finished",
      date: "October 2025",
      people: ["Nathan Arcaya", "Ashley May Barisoro", "Gwyneth Cataylo", "Ariana May Saromo"],
      link: "",
      imgSrc: CLEANIImg
    },
    {
      title: "Enhancing Transportation and Delivery Efficiency through Dijkstra's Algorithm",
      desc: "A coded system that visualizes and computes optimal delivery routes using Dijkstra’s Algorithm. Built to demonstrate shortest-path optimization for transportation and logistics scenarios.",
      status: "Finished",
      date: "October 2025",
      people: ["Nathan Arcaya", "Charrise Keira Tarog", "Japhet Melquisdec Gonzales"],
      link: "",
      imgSrc: DijkstraImg
    },
    {
      title: "Proposed Database Design for TRJ CCTV",
      desc: "A database design project for a real CCTV services business, involving business rule analysis, schema design, SQL image handling, and system implementation in a XAMPP environment.",
      status: "Finished",
      date: "October 2025",
      people: ["Nathan Arcaya", "Francis Emmanuel Anciro", "Emmanuel Jamir Paje", "Ethan Edgar Francisco"],
      link: "",
      imgSrc: TRJDBImg
    },
    {
      title: "Python & OOP Aid Distribution System",
      desc: "A Python-based aid distribution management system designed using Object-Oriented Programming.",
      status: "Finished",
      date: "June 2025",
      people: ["Nathan Arcaya"],
      link: "",
      imgSrc: AidImg
    },
    {
      title: "Exposing Vulnerabilities: DDoS on IoT Devices",
      desc: "A cybersecurity research project analyzing how Distributed Denial-of-Service (DDoS) attacks exploit IoT device vulnerabilities.",
      status: "Finished",
      date: "November 2024",
      people: ["Nathan Arcaya", "Prince Jabez Reyes", "Rafael Kenneth Mercado"],
      link: "",
      imgSrc: DDoSImg
    },
    {
      title: "Life OS",
      desc: "A personal knowledge and productivity system designed to organize tasks, learning resources, journaling, and personal development workflows.",
      status: "Ongoing",
      date: null,
      people: ["Nathan Arcaya"],
      link: "",
      imgSrc: LifeOSImg
    },
    {
      title: "Second Brain",
      desc: "A structured digital knowledge system focused on capturing, organizing, and retrieving information efficiently.",
      status: "Ongoing",
      date: null,
      people: ["Nathan Arcaya"],
      link: "",
      imgSrc: SecondBrainImg
    },
    {
      title: "Local-based Note-Taking App with AI",
      desc: "A planned note-taking application that prioritizes local data storage while integrating an AI assistant.",
      status: "Planned",
      date: null,
      people: ["Nathan Arcaya"],
      link: "",
      imgSrc: NoteAppImg
    }
  ];

  return (
    <div className="fade-in projects-page">
      <h2>My Projects</h2>

      <div className="projects-list">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
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