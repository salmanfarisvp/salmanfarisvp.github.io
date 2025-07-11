import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

export default function About() {
  const {siteConfig} = useDocusaurusContext();

  const skills = [
    'Hardware Prototyping',
    'Software Development',
    'Technical Writing',
    'Open Source Contribution',
    'Communities Management',
    'TinyML',
    'Arduino',
    'Raspberry Pi',
    'ESP32',
    'ESP8266',
  ];

  return (
    <Layout
      title="About Me"
      description="About Salman Faris">
      {/* Hero Section */}
      <section className="hero hero--dark" style={{
        background: `var(--ifm-color-primary)`,
        padding: '4rem 0',
        marginBottom: '3rem'
      }}>
        <div className="container">
          <div className="row">
            <div className="col col--8 col--offset-2 text--center">
              <div style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                margin: '0 auto 2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
                border: '3px solid rgba(255,255,255,0.2)'
              }}>
                <img src="https://github.com/salmanfarisvp.png" alt="Salman Faris" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} />
              </div>
              <Heading as="h1" style={{color: 'white', fontSize: '3rem', marginBottom: '1rem'}}>
                Hi, I'm Salman Faris! 👋
              </Heading>
              <p style={{color: 'rgba(255,255,255,0.9)', fontSize: '1.3rem', maxWidth: '600px', margin: '0 auto'}}>
                Passionate technologist and maker who loves building things that make a difference
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--10 col--offset-1">

            {/* About Card */}
            <div style={{
              background: 'var(--ifm-background-color)',
              borderRadius: '12px',
              padding: '2rem',
              marginBottom: '2rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              border: '1px solid var(--ifm-color-emphasis-200)'
            }}>
              <Heading as="h2" style={{color: 'var(--ifm-color-content)', marginBottom: '1rem'}}>
                About Me
              </Heading>
              <p style={{fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--ifm-color-content-secondary)'}}>
              I'm passionate about technology and deeply involved in hardware product development and prototyping using a variety of platforms. I actively contribute to maker communities and always enjoy exploring new tools, ideas, and emerging technologies.
              </p>
            </div>

            {/* Skills Card */}
            <div style={{
              background: 'var(--ifm-background-color)',
              borderRadius: '12px',
              padding: '2rem',
              marginBottom: '2rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              border: '1px solid var(--ifm-color-emphasis-200)'
            }}>
              <Heading as="h2" style={{color: 'var(--ifm-color-content)', marginBottom: '1.5rem'}}>
                Skills & Expertise
              </Heading>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    style={{
                      background: `var(--ifm-color-primary)`,
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '25px',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                      transition: 'transform 0.2s ease',
                      cursor: 'default'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience Card */}
            <div style={{
              background: 'var(--ifm-background-color)',
              borderRadius: '12px',
              padding: '2rem',
              marginBottom: '2rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              border: '1px solid var(--ifm-color-emphasis-200)'
            }}>
              <Heading as="h2" style={{color: 'var(--ifm-color-content)', marginBottom: '1.5rem'}}>
                What I Do
              </Heading>
              <div className="row">
                <div className="col col--6">
                  <div style={{marginBottom: '1rem'}}>
                    <h4 style={{color: 'var(--ifm-color-primary)', marginBottom: '0.5rem'}}>🚀 Hardware Prototyping</h4>
                    <p style={{color: 'var(--ifm-color-content-secondary)', fontSize: '0.95rem'}}>
                      Building hardware prototypes using a variety of platforms.
                    </p>
                  </div>
                  <div style={{marginBottom: '1rem'}}>
                    <h4 style={{color: 'var(--ifm-color-primary)', marginBottom: '0.5rem'}}>🔧 Software Development</h4>
                    <p style={{color: 'var(--ifm-color-content-secondary)', fontSize: '0.95rem'}}>
                      Developing software systems for hardware prototypes
                    </p>
                  </div>
                  <div style={{marginBottom: '1rem'}}>
                    <h4 style={{color: 'var(--ifm-color-primary)', marginBottom: '0.5rem'}}>👥 Communities Management</h4>
                    <p style={{color: 'var(--ifm-color-content-secondary)', fontSize: '0.95rem'}}>
                      Managing communities and projects
                    </p>
                  </div>
                </div>
                <div className="col col--6">
                  <div style={{marginBottom: '1rem'}}>
                    <h4 style={{color: 'var(--ifm-color-primary)', marginBottom: '0.5rem'}}>✍️ Technical Writing</h4>
                    <p style={{color: 'var(--ifm-color-content-secondary)', fontSize: '0.95rem'}}>
                      Sharing knowledge through blogs and documentation
                    </p>
                  </div>
                  <div style={{marginBottom: '1rem'}}>
                    <h4 style={{color: 'var(--ifm-color-primary)', marginBottom: '0.5rem'}}>🌟 Open Source</h4>
                    <p style={{color: 'var(--ifm-color-content-secondary)', fontSize: '0.95rem'}}>
                      Contributing to the developer community
                    </p>
                  </div>
                  <div style={{marginBottom: '1rem'}}>
                    <h4 style={{color: 'var(--ifm-color-primary)', marginBottom: '0.5rem'}}>🎯 Problem Solving</h4>
                    <p style={{color: 'var(--ifm-color-content-secondary)', fontSize: '0.95rem'}}>
                      Tackling complex challenges with innovative solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div style={{
              background: `var(--ifm-color-primary)`,
              borderRadius: '12px',
              padding: '2rem',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
              <Heading as="h2" style={{color: 'white', marginBottom: '1rem'}}>
                Let's Connect! 🤝
              </Heading>
              <p style={{color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', marginBottom: '1.5rem'}}>
                I'm always interested in connecting with fellow developers and technologists.
                Feel free to reach out to me for collaborations, discussions, or just to say hi!
              </p>
              <div style={{display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap'}}>
                <Link
                  className="button button--lg"
                  href="mailto:mail@salmanfarisvp.com"
                  style={{
                    background: 'white',
                    color: 'var(--ifm-color-primary)',
                    borderRadius: '25px',
                    padding: '0.75rem 1.5rem',
                    textDecoration: 'none',
                    fontWeight: '600',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                  }}
                >
                  📧 Email Me
                </Link>
                <Link
                  className="button button--lg"
                  href="/projects"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    border: '2px solid rgba(255,255,255,0.3)',
                    borderRadius: '25px',
                    padding: '0.75rem 1.5rem',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.2)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.1)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  🌐 Portfolio
                </Link>
              </div>
            </div>

          </div>
        </div>
      </main>
    </Layout>
  );
}
