import styles from '../styles/pages/experience.module.scss';
import Layout from '../components/Layout';

const professional = `I am a UI and Front-End Developer. My passion lies in ensuring that websites and apps are user friendly. While coding I try to think of potential bugs that can occur and subsequently fix them. When designing user interfaces, I try to empathize with what makes sense with the user rather than what makes sense to me. I always ask for feedback on my designs to create the best UI/UX.

Since graduation I have been expanding my expertise in web development. I spend a lot of my time learning the current best practices for developing the best website possible. I spent many hours researching web optimization include code, image, and search engine optimizations. I also partook in learning new tools such as TypeScript, SCSS, and Next.js and improving my fundamental skills, for example, HTML and not wrapping every element in a <div> tag. When it comes to web development I still have a lot more to learn since the technology is updating very quickly, but I am very eager learn.

Currently, most of my personal development time is consumed by Mooseical. It is a music blog and database focused on underground Canadian artists. I am always looking for ways to improve the site with web development best practices. Mooseical was launched in early February and now I am working on general fixes, populating the database and adding in small features. In the future I hope to move the project off of Google Firebase and create my own backend for the project. More info on Mooseical is available in the Experience Tab.`;

const personal = `I am a huge music enthusiast and you can usually find me with headphones on. Every week I try to find a new artist, album, or genre to listen to. Yearly, I listen to approximately 70,000 - 90,000 minutes of music. I provide excellent music recommendations, guaranteed!

Since I was a child, I have loved paleontology. In my spare time I watch documentaries on dinosaurs, mammals and evolution. I have a lot of dinosaur facts! 

I am an outgoing person and I love telling stories to people around me. I also want to perform at comedic open mic nights. I performed once, and I loved it but I couldn't perform again due to COVID-19 lockdowns.

Finally, like many I enjoy video games, TV, and movies.`;

const About = () => (
  <Layout>
    <h2>Professional</h2>
    <hr />
    <pre>{professional}</pre>
    <h2>Personal</h2>
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
