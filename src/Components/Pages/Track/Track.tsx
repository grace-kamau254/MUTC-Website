
import './Track.css'

const tracks = [
  {
    title: "Cyber Security",
    colorClass: "cyber-security",
    description:
      "Learn to protect systems, networks, and data from cyber threats. Dive into ethical hacking, encryption techniques, and more.",
    link: "#",
  },
  {
    title: "UI/UX Design",
    colorClass: "ui-ux",
    description:
      "Explore the principles of user-centered design and learn how to create intuitive user interfaces and experiences.",
    link: "#",
  },
  {
    title: "Web Development",
    colorClass: "web-development",
    description:
      "Gain comprehensive knowledge of both front-end and back-end development using HTML, CSS, JavaScript, and Node.js.",
    link: "#",
  },
  {
    title: "Mobile Apps Development",
    colorClass: "mobile-apps",
    description:
      "Design and build high-performance mobile applications for Android and iOS using Kotlin, Swift, and Dart.",
    link: "#",
  },
  {
    title: "Cloud Engineering",
    colorClass: "cloud-engineering",
    description:
      "Learn to build scalable cloud infrastructures using AWS, Google Cloud, and Azure. Dive into containerization and DevOps practices.",
    link: "#",
  },
  {
    title: "Power Platform",
    colorClass: "power-platform",
    description:
      "Explore Microsoft’s Power Platform to build no-code applications, automate workflows, and create data-driven solutions.",
    link: "#",
  },
];

const TracksPage: React.FC = () => {
  return (
    <div className="tracks-container">
      <h1>Our Specialized Tracks</h1>
      <p>Choose from a variety of specialized tracks to enhance your tech skills:</p>

      <div className="track-cards-container">
        {tracks.map((track, index) => (
          <div key={index} className={`track-card ${track.colorClass}`}>
            <div className="track-card-header">{track.title}</div>
            <div className="track-card-body">
              <p>{track.description}</p>
            </div>
            <div className="track-card-footer">
              <a href={track.link}>Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default TracksPage;




