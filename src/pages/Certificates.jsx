export default function Certificates() {
  const certs = [
    {
      title: "Programming Foundations: Databases",
      date: "2025",
      link: "https://asiapacificcollege-my.sharepoint.com/:b:/g/personal/nsarcaya_student_apc_edu_ph/IQBvqF7-1T8UTq7ifbCX1EH7AQVxJgnBCKLO0jrDa048TLY?e=Lqxnuu"
    },
    {
      title: "Electronics Foundations: Fundamentals",
      date: "2025",
      link: "https://asiapacificcollege-my.sharepoint.com/:b:/g/personal/nsarcaya_student_apc_edu_ph/IQBEbCjc-SPISLgAl1GeHz5eAZqLtKoS3VD_O3SpfxDhieI?e=ukWEY4"
    },
    {
      title: "Learning Arduino: Foundations",
      date: "2025",
      link: "https://asiapacificcollege-my.sharepoint.com/:b:/g/personal/nsarcaya_student_apc_edu_ph/IQD_Uua5QTHNQbBFHJC-sMnYAZ_xOr1AHIP7L6DFaVrDCEc?e=abX2ro"
    },
    {
      title: "Notion Academy: Essentials",
      date: "2025",
      link: "https://asiapacificcollege-my.sharepoint.com/:b:/g/personal/nsarcaya_student_apc_edu_ph/IQB2gA3BagrlQa-WzeFCRcadAWA1m_WE8vBQ14E1TLW9XGE?e=mROgMx"
    },
    {
      title: "Networking Basics",
      date: "2025",
      link: "https://www.credly.com/badges/0f643339-c8db-4c97-809a-8252c692c6a0"
    },
    {
      title: "Transition from Java to Python",
      date: "2025",
      link: "https://www.linkedin.com/learning/certificates/a44c2eed15811141853238fba912b28742671ddd0b6f1123429c1e0b1b7f22c2?u=35279340"
    },
    {
      title: "Computer Science Principles: Digital Information",
      date: "2025",
      link: "https://www.linkedin.com/learning/certificates/45909133804569a81ac7df31a431a2b1fe2b94ca53fc9b95ce6dd99058e75d50?u=35279340"
    },
    {
      title: "Entrepreneurship Foundations",
      date: "2025",
      link: "https://www.linkedin.com/learning/certificates/28e51c5eb5c3694e14a63fc6d7e1baf10830a4887d939f9ed65d7e8b7e68950a?u=35279340"
    },
    {
      title: "Start a Design Business",
      date: "2025",
      link: "https://www.linkedin.com/learning/certificates/3dc174942dfa75e6ec074af1f658b5427b3a5b033549ae407ecfaf8ae3820b05?u=35279340"
    },
    {
      title: "Mastering Microsoft Teams",
      date: "2024",
      link: "https://www.linkedin.com/learning/certificates/470bb7fc3ad9358e1d2d6a88b6372e308b0367bb709aef3a850167be1690401f?u=35279340" 
    },
    {
      title: "Exploring Emerging Tech",
      date: "2024",
      link: "https://www.credly.com/badges/e29526ff-92e8-411d-b898-e43048c6ffd2"
    },
    {
      title: "National Certificate II in Computer System Servicing (TESDA)",
      date: "2024",
      link: "https://asiapacificcollege-my.sharepoint.com/:b:/g/personal/nsarcaya_student_apc_edu_ph/IQBc8yQ7LnUBR6MEREf5UxJDAbU94JZZv6E6CTzuZ9cWAwc?e=hf6euA"
    },
  ];

  return (
    <div className="fade-in cert-layout">
      <h2 className="section-title">Professional Certifications</h2>
      <div className="cert-grid">
        {certs.map((cert, index) => (
          <a 
            key={index} 
            href={cert.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cert-card"
          >
            <div className="cert-info">
              <span className="cert-date">{cert.date}</span>
              <h3 className="cert-name">{cert.title}</h3>
            </div>
            <div className="cert-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}