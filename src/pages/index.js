import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} >
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons} style={{display: 'flex', gap: '10px'}}>
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/salmanfarisvp">
             GitHub
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://www.linkedin.com/in/salmanfarisvp/">
            LinkedIn
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://x.com/0xSalFar">
            Twitter
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Salman Faris`}
      description="Salman Faris"
      wrapperClassName="homepage-wrapper">
      <HomepageHeader />

      {/* <main>
        { <HomepageFeatures /> }
      </main> */}
    </Layout>
  );
}
