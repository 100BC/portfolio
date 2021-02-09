import { useState, useEffect } from 'react';

import styles from '../styles/pages/experience.module.scss';
import Layout from '../components/Layout';
import { WorkExperience, UniProjects } from '../components/Experiences';

const Experience = () => {
  const [pageRender, setPageRender] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageRender]);

  return (
    <Layout>
      <nav className={styles.nav}>
        <button
          className={`${styles.button} ${pageRender === 0 ? styles.active : ''}`}
          type="button"
          onClick={() => setPageRender(0)}>
          Work Experience
        </button>
        <button
          className={`${styles.button} ${pageRender === 1 ? styles.active : ''}`}
          type="button"
          onClick={() => setPageRender(1)}>
          University Projects
        </button>
      </nav>
      <section className={styles.render}>
        {pageRender === 0 ? <WorkExperience /> : <UniProjects />}
      </section>
    </Layout>
  );
};

export default Experience;
