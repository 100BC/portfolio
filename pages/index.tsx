import styles from '../styles/pages/index.module.scss';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <h1>Otman Maowed</h1>
    <hr />
    <section className={styles.container}>
      <img className={styles.img} alt="Otman's Headshot" src="/images/headshot.png" />
      <div className={styles.info}>
        <p className={styles.descriptor}>
          <i className="fas fa-fw fa-code" />
          UI and Front-End Developer
        </p>
        <p className={styles.descriptor}>
          <i className="fas fa-fw fa-building" />
          Freelancer Seeking Permanent&nbsp;Position
        </p>
        <p className={styles.descriptor}>
          <i className="fas fa-fw fa-graduation-cap" />
          University&nbsp;of&nbsp;Alberta, B.Sc.Computing&nbsp;Science, Class of 2020
        </p>
        <p className={styles.descriptor}>
          <i className="fas fa-fw fa-map-marker-alt" />
          Edmonton&nbsp;AB,&nbsp;Canada, Willing&nbsp;to&nbsp;Relocate
        </p>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
