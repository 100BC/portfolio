import { useState, useEffect } from 'react';

import styles from '../styles/pages/experience.module.scss';
import Layout from '../components/Layout';
import { WorkExperience, SchoolProjects } from '../components/Experiences';

const Experience = () => {
  const [pageRender, setPageRender] = useState(<WorkExperience />);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageRender]);

  return (
    <Layout>
      <div className={styles.nav}>
        <button
          className={`${styles.button} ${
            pageRender.type.name === 'WorkExperience' ? styles.active : ''
          }`}
          type="button"
          onClick={() => setPageRender(<WorkExperience />)}>
          Work Experience
        </button>
        <button
          className={`${styles.button} ${
            pageRender.type.name === 'SchoolProjects' ? styles.active : ''
          }`}
          type="button"
          onClick={() => setPageRender(<SchoolProjects />)}>
          School Projects
        </button>
      </div>
      <div className={styles.render}>{pageRender}</div>
    </Layout>
  );
};

export default Experience;
