import styles from '../styles/pages/experience.module.scss';
import Layout from '../components/Layout';

const professional = `I am a Junior UI and Front-End Developer. My passion lies in ensuring that websites and apps are user friendly. While writing code I try to think of potential bugs that can occur and subsequently fix them. When creating user interfaces, I try to empathize with what makes sense with the user rather than what makes sense to me. I always ask for feedback on my designs to create the best UI/UX.

Currently most of my personal development time is consumed by Mooseical, my music blog and database focused on Canadian artists. As it's my passion project I am always seeking ways to enhance it. Currently I am working on general fixes, populating the database and adding in small features. In the future I hope to move the project off of Google Firebase and create my own backend for the project. More info and link in the Experience Tab.`;

const personal = `To no ones surprise I am a huge music enthusiast and you can usually find me with headphones on. Every week I try to find a new artist, album, or genre to listen to. Yearly I listen to approximately 100,000 minutes of music. I will provide excellent music recommendations, guaranteed!

Since I was a child, I have thoroughly enjoyed learning about paleontology. In my spare time I watch documentaries on dinosaurs, mammals and evolution. I have a lot of dinosaur facts! 

I also perform at comedic open mic nights, however that is currently on hold due to COVID-19.

Finally, like many I enjoy video games, TV, and movies.`;

const About = () => (
  <Layout>
    <h1>Professional</h1>
    <hr />
    <pre>{professional}</pre>
    <h1>Personal</h1>
    <hr />
    <pre>{personal}</pre>
    <a
      className={styles.link}
      href="https://open.spotify.com/playlist/1GPCQfyt6DaOUVicnUnuda?si=W9xo9KmBQh2ZZFE3sxrlZg">
      <i className="fas fa-fw fa-link" />
      Spotify Playlist: Favourite Songs of 2019
    </a>
    <a
      className={styles.link}
      href="https://open.spotify.com/playlist/0Bfqb3R1cIYa7KRaSxRD9r?si=oRX-0u7qRZ6Io5Llq3nzlg">
      <i className="fas fa-fw fa-link" />
      Spotify Playlist: Favourite Songs of 2020
    </a>
  </Layout>
);

export default About;
