import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import { useState } from 'react';

// Project categories/tags for filtering
const ProjectTags = {
  ALL: 'All',
  TinyML: 'TinyML',
  LoRa: 'LoRa',
  EdgeImpulse: 'EdgeImpulse',
  WiFi: 'WiFi',
  Web: 'Web',
  AI: 'AI/ML',
  Contest: 'Contest',
  DevelopmentBoard: 'Development Board',
  IoT: 'IoT',
  diy: 'DIY'
};

const ProjectList = [
  {
    title: 'Build a Environmental Monitoring System with Thingy:91x',
    image: 'https://hackster.imgix.net/uploads/attachments/1854063/_q649rKmKuZ.blob?auto=compress%2Cformat&w=900&h=675&fit=min',
    description: 'As part of the MakerTrain 2025 contest, I built a Environmental Monitoring System with Thingy:91x',
    link: 'https://www.hackster.io/Salmanfarisvp/build-a-environmental-monitoring-system-with-thingy91x-c8c2fd',
    tags: [ProjectTags.WiFi, ProjectTags.Contest, ProjectTags.DevelopmentBoard, ProjectTags.IoT]
  },
  {
    title: 'TinyML Forest Ranger: Illegal Logging Detection and Alert 🪵',
    image: 'https://hackster.imgix.net/uploads/attachments/1834520/_wsK0ikV6em.blob?auto=compress%2Cformat&w=900&h=675&fit=min',
    description: 'TinyML Forest Ranger detects illegal logging using TinyML and LoRa on the Helium Network, enabling real-time alerts for forest protection.',
    link: 'https://www.hackster.io/Salmanfarisvp/tinyml-forest-ranger-illegal-logging-detection-and-alert-c8c2fd',
    tags: [ProjectTags.TinyML, ProjectTags.DevelopmentBoard, ProjectTags.LoRa, ProjectTags.EdgeImpulse, ProjectTags.IoT]
  },
  {
    title: 'Setting Up Anthias on Raspberry Pi for Digital Signage 🖥️',
    image: 'https://hackster.imgix.net/uploads/attachments/1661112/_8w5gX2JzAj.blob?auto=compress%2Cformat&w=900&h=675&fit=min',
    description: 'Transform your Raspberry Pi into a powerful digital signage hub with Anthias! This step-by-step guide helps you to install Anthias on Pi.',
    link: 'https://www.hackster.io/Salmanfarisvp/setting-up-anthias-on-raspberry-pi-for-digital-signage-9f6a1b',
    tags: [ProjectTags.Web, ProjectTags.DevelopmentBoard, ProjectTags.IoT]
  },
  {
    title: 'Fight Fire 🔥 - Wild Fire Prediction using TinyML 🧠',
    image: 'https://hackster.imgix.net/uploads/attachments/1834520/_wsK0ikV6em.blob?auto=compress%2Cformat&w=900&h=675&fit=min',
    description: 'Fight Fire is a wildfire prediction device that will help the firefighting authority to respond quickly to the wildfire, Co-Developed with Zain Muhammed',
    link: 'https://www.hackster.io/user102774/fight-fire-wild-fire-prediction-using-tinyml-df7572',
    tags: [ProjectTags.TinyML, ProjectTags.DevelopmentBoard, ProjectTags.LoRa, ProjectTags.EdgeImpulse, ProjectTags.IoT]
  },
  {
    title: 'Speech Recognition Using Wio Terminal & Codecraft + Edge Impulse',
    image: 'https://hackster.imgix.net/uploads/attachments/1834520/_wsK0ikV6em.blob?auto=compress%2Cformat&w=900&h=675&fit=min',
    description: 'A simple voice recognition project using Codecraft graphical programming, Wio Terminal and Edge Impulse.',
    link: 'https://www.hackster.io/Salmanfarisvp/speech-recognition-using-wio-terminal-codecraft-ei-f1c4a1',
    tags: [ProjectTags.TinyML, ProjectTags.DevelopmentBoard, ProjectTags.EdgeImpulse,]
  },
  {
    title: 'Play Chrome\'s Dino Game Physically 🦕',
    image: 'https://hackster.imgix.net/uploads/attachments/1323340/powered_by_(1)_THUZrCwShJ.gif',
    description: 'Learn how to play Chrome\'s dino game physically using Edge Impulse and Seeed Studio Wio Terminal',
    link: 'https://www.hackster.io/Salmanfarisvp/play-chrome-s-dino-game-physically-db42c2',
    tags: [ProjectTags.TinyML, ProjectTags.DevelopmentBoard, ProjectTags.EdgeImpulse, ProjectTags.IoT]
  },
  {
    title: 'Color Terminal 🎨',
    image: 'https://hackster.imgix.net/uploads/attachments/1238245/_npJUL2x9lm.blob?auto=compress%2Cformat&w=900&h=675&fit=min',
    description: 'The Color Terminal can be used to pick color from physical things by scanning its surface with Seeed Wio Terminal and TCS34725.',
    link: 'https://www.hackster.io/Salmanfarisvp/color-terminal-7d6650',
    tags: [ProjectTags.DevelopmentBoard, ProjectTags.IoT]
  },
  {
    title: 'Air Quality Monitoring Station with Wio Terminal',
    image: 'https://hackster.imgix.net/uploads/attachments/1187753/_VE42v6NhvT.blob?auto=compress%2Cformat&w=900&h=675&fit=min',
    description: 'The Air Quality Terminal can be used as an indoor air quality meter to monitor VOCs, CO, NO2, C2H5CH, Temp and Humidity.',
    link: 'https://www.hackster.io/Salmanfarisvp/air-quality-monitoring-station-with-wio-terminal-6ef85f',
    tags: [ProjectTags.DevelopmentBoard, ProjectTags.IoT]
  },
  {
    title: 'MQTT on Wio Terminal',
    image: 'https://hackster.imgix.net/uploads/attachments/1169821/_XdV9WsbGAX.blob?auto=compress%2Cformat&w=900&h=675&fit=min',
    description: 'This project shows how to use MQTT on Wio Terminal to send and receive messages from a broker.',
    link: 'https://www.hackster.io/Salmanfarisvp/mqtt-on-wio-terminal-4ea8f8',
    tags: [ProjectTags.DevelopmentBoard, ProjectTags.IoT]
  },
  {
    title: 'Malaria Detection using Open Microscope and Deep learning',
    image: 'https://hackster.imgix.net/uploads/attachments/1073012/_aQNauZVfuQ.blob?auto=compress%2Cformat&w=900&h=675&fit=min',
    description: 'An open-source microscope that can detect disease like malaria, the main goal is to give quality health checkup to poor people.',
    link: 'https://www.hackster.io/makergram/malaria-detection-using-open-microscope-and-deep-learning-7af1d8',
    tags: [ProjectTags.DevelopmentBoard, ProjectTags.IoT, ProjectTags.AI]
  },
  {
    title: 'Burglar Alarm',
    image: 'https://hackster.imgix.net/uploads/attachments/589337/burglar-unpleasant-surprise-thief-vector-illustration-cartoon-_JN4MGhRlln.jpg?auto=compress%2Cformat&w=900&h=675&fit=min',
    description: 'A simple burglar alarm built using an ATtiny45. You can attach it anywhere and will it will inform when someone tries to steal something.',
    link: 'https://www.hackster.io/Salmanfarisvp/burglar-alarm-ae894a',
    tags: [ProjectTags.DevelopmentBoard, ProjectTags.IoT]
  },
  {
    title: 'SIGHT: For the Blind',
    image: 'https://hackster.imgix.net/uploads/attachments/370758/untitled-2_plvVJydOrd.png?auto=compress%2Cformat&w=900&h=675&fit=min',
    description: 'A pair of smart glasses for the blind. Powered by Android Things and TensorFlow.',
    link: 'https://www.hackster.io/makergram/sight-for-the-blind-c1e1b9',
    tags: [ProjectTags.DevelopmentBoard, ProjectTags.IoT, ProjectTags.AI, ProjectTags.Contest]
  },
  {
    title: 'SEBi: Smart Electric Bin',
    image: 'https://hackster.imgix.net/uploads/attachments/355533/wastebin_rmui9iFi1E.png?auto=compress%2Cformat&w=900&h=675&fit=min',
    description: 'Smart and efficient way to monitor your waste bin and help you to dispose of it at the correct time.',
    link: 'https://www.hackster.io/Salmanfarisvp/sebi-smart-electric-bin-c97e05',
    tags: [ProjectTags.DevelopmentBoard, ProjectTags.IoT]
  },
  {
    title: 'Getting Started in Android Things with Raspberry Pi',
    image: 'https://hackster.imgix.net/uploads/attachments/295531/photo_2017-04-24_23-41-19_tOHI53ONzX.jpg?auto=compress%2Cformat&w=900&h=675&fit=min',
    description: 'Let\'s get started in Android Things with Raspberry Pi by blinking an LED.',
    link: 'https://hackster.imgix.net/uploads/attachments/353780/image1_x9K9v9VM3t.png?auto=compress%2Cformat&w=900&h=675&fit=min',
    tags: [ProjectTags.DevelopmentBoard, ProjectTags.IoT]
  },
  {
    title: 'GooglePi - Google Assistant on Raspberry Pi',
    image: 'https://hackster.imgix.net/uploads/attachments/300998/raspberrygoogle_EqeBkOAuqj.png?auto=compress%2Cformat&w=900&h=675&fit=min',
    description: 'A DIY Google Home using your Raspberry Pi.',
    link: 'https://www.hackster.io/Salmanfarisvp/googlepi-google-assistant-on-raspberry-pi-9f3677',
    tags: [ProjectTags.DevelopmentBoard, ProjectTags.IoT, ProjectTags.Web]
  },
  {
    title: 'DIY - Audio Amplifier',
    image: 'https://hackster.imgix.net/uploads/attachments/295531/photo_2017-04-24_23-41-19_tOHI53ONzX.jpg?auto=compress%2Cformat&w=900&h=675&fit=min',
    description: 'Simple Audio Amplifier based on LM386.',
    link: 'https://www.hackster.io/Salmanfarisvp/diy-audio-amplifier-462fc7',
    tags: [ProjectTags.diy]
  },
  {
    title: 'Jarvis - Personal Assistant',
    image: 'https://hackster.imgix.net/uploads/attachments/272294/20170313_130951_ZIuNHVci0S.jpg?auto=compress%2Cformat&w=900&h=675&fit=min',
    description: 'A personal assistant powered by Linklt Smart 7688 Duo and Telegram Bot for a smart office and smart home.',
    link: 'https://www.hackster.io/Salmanfarisvp/jarvis-personal-assistant-ef7392',
    tags: [ProjectTags.DevelopmentBoard, ProjectTags.IoT, ProjectTags.Web, ProjectTags.AI]
  },
  {
    title: 'Telegram Bot With Raspberry Pi',
    image: 'https://hackster.imgix.net/uploads/attachments/248116/fhpjmp0i4orkojo_jcstvhtw3c_cF1uvjz004.jpg?auto=compress%2Cformat&w=900&h=675&fit=min',
    description: 'Host a Telegram Bot on your Raspberry Pi and chat with your brand new IoT device!',
    link: 'https://www.hackster.io/Salmanfarisvp/telegram-bot-with-raspberry-pi-f373da',
    tags: [ProjectTags.DevelopmentBoard, ProjectTags.IoT, ProjectTags.Web]
  },
  {
    title: 'Particle + Raspberry Pi',
    image: 'https://hackster.imgix.net/uploads/attachments/248116/fhpjmp0i4orkojo_jcstvhtw3c_cF1uvjz004.jpg?auto=compress%2Cformat&w=900&h=675&fit=min',
    description: 'The world\'s favorite low-cost computer now connects to the world\'s most popular IoT platform!',
    link: 'https://www.hackster.io/Salmanfarisvp/particle-raspberry-pi-caa234',
    tags: [ProjectTags.DevelopmentBoard, ProjectTags.IoT]
  },
  {
    title: 'WebServerBlink Using NodeMCU',
    image: 'https://hackster.imgix.net/uploads/attachments/246103/back_dgFuHjElID.jpg?auto=compress%2Cformat&w=900&h=675&fit=min',
    description: 'NodeMCU is an open source IoT platform. It includes firmware which runs on the ESP8266 Wi-Fi SoC. It\'s a simple Blink using Webserver.',
    link: 'https://www.hackster.io/Salmanfarisvp/webserverblink-using-nodemcu-26e1ed',
    tags: [ProjectTags.DevelopmentBoard, ProjectTags.IoT, ProjectTags.Web]
  },

];

function ProjectCard({title, image, description, link, tags}) {
  return (
    <div className={clsx('col col--4 margin-bottom--lg')}>
      <div className="modern-card">
        <div className="card-image-container">
          <img
            src={image}
            alt={title}
            className="card-image"
          />
          <div className="card-overlay">
            <div className="card-tags">
              {tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="card-content">
          <Heading as="h3" className="card-title">{title}</Heading>
          <p className="card-description">{description}</p>
          <Link
            className="modern-button"
            to={link}>
            <span>View Project</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1 8h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

function FilterButton({ tag, isActive, onClick }) {
  return (
    <button
      className={clsx('filter-button', isActive && 'filter-button--active')}
      onClick={() => onClick(tag)}
    >
      {tag}
    </button>
  );
}

export default function Projects() {
  const {siteConfig} = useDocusaurusContext();
  const [activeFilter, setActiveFilter] = useState(ProjectTags.ALL);

  const filteredProjects = ProjectList.filter(project =>
    activeFilter === ProjectTags.ALL || project.tags.includes(activeFilter)
  );

  return (
    <Layout
      title="Projects"
      description="My Projects Portfolio">
      <main className="container margin-vert--lg">
        <div className="text--center margin-bottom--xl">
          <Heading as="h1" className="hero-title"> 🛠️ Projects</Heading>
          <p className="hero__subtitle">List of projects I was involved in</p>
        </div>

        {/* Filter Buttons */}
        <div className="filter-container margin-bottom--xl">
          {Object.values(ProjectTags).map((tag) => (
            <FilterButton
              key={tag}
              tag={tag}
              isActive={activeFilter === tag}
              onClick={setActiveFilter}
            />
          ))}
        </div>

        {/* Projects Grid */}
        <div className="row projects-grid">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text--center margin-top--xl">
            <p>No projects found for the selected filter.</p>
          </div>
        )}
      </main>

      <style jsx>{`
        .modern-card {
          background: var(--ifm-background-color);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid var(--ifm-color-emphasis-300);
          height: 100%;
        }

        .modern-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .card-image-container {
          position: relative;
          aspect-ratio: 4/3;
          overflow: hidden;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .modern-card:hover .card-image {
          transform: scale(1.05);
        }

        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: flex-end;
          padding: 1rem;
        }

        .modern-card:hover .card-overlay {
          opacity: 1;
        }

        .card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tag {
          background: var(--ifm-background-color);
          color: var(--ifm-color-primary);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          border: 1px solid var(--ifm-color-primary);
        }

        .card-content {
          padding: 1.5rem;
        }

        .card-title {
          margin-bottom: 0.75rem;
          color: var(--ifm-font-color-base);
          font-weight: 700;
        }

        .card-description {
          color: var(--ifm-color-emphasis-600);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .modern-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--ifm-color-primary);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .modern-button:hover {
          background: var(--ifm-color-primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(55, 171, 216, 0.3);
          color: white;
          text-decoration: none;
        }

        .filter-container {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .filter-button {
          background: var(--ifm-color-emphasis-100);
          border: 2px solid var(--ifm-color-emphasis-300);
          color: var(--ifm-font-color-base);
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .filter-button:hover {
          background: var(--ifm-color-emphasis-200);
          transform: translateY(-2px);
        }

        .filter-button--active {
          background: var(--ifm-color-primary);
          color: white;
          border-color: var(--ifm-color-primary);
        }

        .filter-button--active:hover {
          background: var(--ifm-color-primary-dark);
        }

        .projects-grid {
          opacity: 1;
          transition: opacity 0.3s ease;
        }

        .hero-title {
          color: var(--ifm-color-primary);
          margin-bottom: 1rem;
        }

        @media (max-width: 768px) {
          .filter-container {
            gap: 0.5rem;
          }

          .filter-button {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
          }

          .card-content {
            padding: 1rem;
          }
        }
      `}</style>
    </Layout>
  );
}
