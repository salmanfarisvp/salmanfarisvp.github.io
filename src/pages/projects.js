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
  nRF52840: 'nRF52840',
  LoRa: 'LoRa',
  EdgeImpulse: 'EdgeImpulse',
  WEB: 'Web Development',
  AI: 'AI/ML'
};

const ProjectList = [
  {
    title: 'TinyML Forest Ranger: Illegal Logging Detection and Alert 🪵',
    image: 'https://hackster.imgix.net/uploads/attachments/1834520/_wsK0ikV6em.blob?auto=compress%2Cformat&w=900&h=675&fit=min',
    description: 'TinyML Forest Ranger detects illegal logging using TinyML and LoRa on the Helium Network, enabling real-time alerts for forest protection.',
    link: 'https://www.hackster.io/Salmanfarisvp/tinyml-forest-ranger-illegal-logging-detection-and-alert-c8c2fd',
    tags: [ProjectTags.TinyML, ProjectTags.nRF52840, ProjectTags.LoRa, ProjectTags.EdgeImpulse]
  },
  {
    title: 'TinyML Forest Ranger: Illegal Logging Detection and Alert 🪵',
    image: 'https://hackster.imgix.net/uploads/attachments/1834520/_wsK0ikV6em.blob?auto=compress%2Cformat&w=900&h=675&fit=min',
    description: 'TinyML Forest Ranger detects illegal logging using TinyML and LoRa on the Helium Network, enabling real-time alerts for forest protection.',
    link: 'https://www.hackster.io/Salmanfarisvp/tinyml-forest-ranger-illegal-logging-detection-and-alert-c8c2fd',
    tags: [ProjectTags.TinyML, ProjectTags.nRF52840, ProjectTags.LoRa, ProjectTags.EdgeImpulse]
  },
  {
    title: 'TinyML Forest Ranger: Illegal Logging Detection and Alert 🪵',
    image: 'https://hackster.imgix.net/uploads/attachments/1834520/_wsK0ikV6em.blob?auto=compress%2Cformat&w=900&h=675&fit=min',
    description: 'TinyML Forest Ranger detects illegal logging using TinyML and LoRa on the Helium Network, enabling real-time alerts for forest protection.',
    link: 'https://www.hackster.io/Salmanfarisvp/tinyml-forest-ranger-illegal-logging-detection-and-alert-c8c2fd',
    tags: [ProjectTags.TinyML, ProjectTags.nRF52840, ProjectTags.LoRa, ProjectTags.EdgeImpulse]
  },
  {
    title: 'TinyML Forest Ranger: Illegal Logging Detection and Alert 🪵',
    image: 'https://hackster.imgix.net/uploads/attachments/1834520/_wsK0ikV6em.blob?auto=compress%2Cformat&w=900&h=675&fit=min',
    description: 'TinyML Forest Ranger detects illegal logging using TinyML and LoRa on the Helium Network, enabling real-time alerts for forest protection.',
    link: 'https://www.hackster.io/Salmanfarisvp/tinyml-forest-ranger-illegal-logging-detection-and-alert-c8c2fd',
    tags: [ProjectTags.TinyML, ProjectTags.nRF52840, ProjectTags.LoRa, ProjectTags.EdgeImpulse]
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
