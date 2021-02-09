import styles from '../styles/pages/experience.module.scss';

export const WorkExperience = () => (
  <>
    <h1>Mooseical</h1>
    <hr />
    <div className={styles.descriptor}>
      <h3 className={styles.title}>Personal Project</h3>
      <h3 className={styles.date}>Oct.&nbsp;2020 -&nbsp;Present</h3>
    </div>
    <h3 className={styles.location}>Canadian Music Blog and Database</h3>
    <ul>
      <li>Mooseical is a music blog and database specifically targeting Canadian Musicians</li>
      <li>Front-End built with NextJS, TypeScript, and SCSS</li>
      <li>Google Firestore serves as the project&apos;s NoSQL database</li>
      <li>Went live in Feb. 2021</li>
      <li>More improvements and features are in development</li>
      <li>Ensured responsive design, image and code optimizations to reduce time to first byte</li>
      <li>SEO optimizations including Open Graph Protocol</li>
    </ul>
    <a
      className={styles.link}
      href="https://www.mooseical.com"
      target="_blank"
      rel="noopener noreferrer">
      <i className="fas fa-fw fa-link" />
      Website
    </a>
    <br />
    <h1>Freelance</h1>
    <hr />
    <div className={styles.descriptor}>
      <h3 className={styles.title}>Web Developer</h3>
      <h3 className={styles.date}>Sep.&nbsp;2020</h3>
    </div>
    <h3 className={styles.location}>Edmonton, AB</h3>
    <ul>
      <li>Created websites for local businesses</li>
      <li>Ensured basic SEO</li>
      <li>Websites follow responsive design</li>
    </ul>
    <a
      className={styles.link}
      href="https://bbrosfinishing.ca"
      target="_blank"
      rel="noopener noreferrer">
      <i className="fas fa-fw fa-link" />
      Example
    </a>
    <br />
    <h1>Portfolio</h1>
    <hr />
    <div className={styles.descriptor}>
      <h3 className={styles.title}>Personal Project</h3>
      <h3 className={styles.date}>Jun.&nbsp;2019 -&nbsp;Present</h3>
    </div>
    <h3 className={styles.location}>This Website</h3>
    <ul>
      <li>Built with NextJS and TypeScript</li>
      <li>Created to better show my skills in usability, design, and programming</li>
      <li>Conducted user evaluations during development process to gather improvement ideas</li>
      <li>
        Follows Responsive Web Design, functions perfectly on different web browsers and mobile
      </li>
      <li>This website receives continuous updates to improve usability and update technology</li>
      <li>Originally built with create-react-app</li>
    </ul>
    <a
      className={styles.link}
      href="https://github.com/100BC/portfolio"
      target="_blank"
      rel="noopener noreferrer">
      <i className="fab fa-fw fa-github" />
      GitHub
    </a>
    <br />
    <h1>Trust Science</h1>
    <hr />
    <div className={styles.descriptor}>
      <h3 className={styles.title}>Summer Intern</h3>
      <h3 className={styles.date}>May&nbsp;-&nbsp;Aug.&nbsp;2018</h3>
    </div>
    <h3 className={styles.location}>Edmonton, AB</h3>
    <ul>
      <li>Mobile App development using React Native and JSX</li>
      <li>Web Portal development using C#, jQuery, HTML, CSS and ReactJS</li>
      <li>Assisted in refactoring the Mobile App to approximately 60% of its original size</li>
      <li>Created a Serverless package to AWS connecting the App, Portal and Databases together</li>
      <li>Identified and corrected UI/UX problems in both the Portal and App</li>
      <li>Traced and fixed bugs in large codebases of 12,000+ lines of code</li>
    </ul>
  </>
);

export const UniProjects = () => (
  <>
    <h1>this.node.app</h1>
    <hr />
    <div className={styles.descriptor}>
      <h3 className={styles.title}>Developer</h3>
      <h3 className={styles.date}>Jan.&nbsp;2020 -&nbsp;Apr.&nbsp;2020</h3>
    </div>
    <h3 className={styles.location}>CMPUT 404 - Web Applications and Architecture</h3>
    <ul>
      <li>Created a Social Media Web App, this.node.app, as part of the class project</li>
      <li>this.node.app was developed in a team of 5 with ReactJS and Django</li>
      <li>Contributed to the Front-End Code</li>
      <li>Implemented React Redux and many API calls to the database</li>
    </ul>
    <a
      className={styles.link}
      href="https://github.com/CMPUT404W20-Wed/CMPUT404-project-socialdistribution"
      target="_blank"
      rel="noopener noreferrer">
      <i className="fab fa-fw fa-github" />
      GitHub
    </a>
    <br />
    <h1>Indigenous AR Learning Experience</h1>
    <hr />
    <div className={styles.descriptor}>
      <h3 className={styles.title}>Creator / Researcher</h3>
      <h3 className={styles.date}>Sep.&nbsp;2019 -&nbsp;Apr.&nbsp;2020</h3>
    </div>
    <h3 className={styles.location}>CMPUT 399 - Independent Study</h3>
    <ul>
      <li>Enrolled in a independent study/research with Dr.Demmans Epp</li>
      <li>Created an Augmented Reality Tour via the app izi.Travel</li>
      <li>The tour highlights Indigenous art and landmarks on University of Alberta</li>
      <li>
        Followed a participatory design approach to ensure that the Indigenous culture is properly
        represented
      </li>
      <li>Improved the tour based on user feedback of 45 individuals</li>
    </ul>
    <br />
    <h1>MyAdvisor</h1>
    <hr />
    <div className={styles.descriptor}>
      <h3 className={styles.title}>Designer</h3>
      <h3 className={styles.date}>Jan.&nbsp;-&nbsp;Apr.&nbsp;2019</h3>
    </div>
    <h3 className={styles.location}>CMPUT 302 - Human Computer Interaction</h3>
    <ul>
      <li>Studied the basics of UI/UX in lectures, including UX Research</li>
      <li>Final project consisted of creating a medium-fidelity prototype of an advisory system</li>
      <li>Worked in a team of 5 to create MyAdvisor in Adobe XD</li>
      <li>Conducted heuristic and user evaluations while prototyping</li>
      <li>Maintained the style and theme presented by other university websites</li>
    </ul>
    <a
      className={styles.link}
      href="https://drive.google.com/file/d/1tlBIiTXrjc9vt8YGXc7kL5np5CscnuzA/view"
      target="_blank"
      rel="noopener noreferrer">
      <i className="fas fa-fw fa-link" />
      Video Demo
    </a>
    <a
      className={styles.link}
      href="https://imgur.com/a/YhpUo2L"
      target="_blank"
      rel="noopener noreferrer">
      <i className="fas fa-fw fa-link" />
      UI Gallery
    </a>
    <br />
    <h1>Alexandria</h1>
    <hr />
    <div className={styles.descriptor}>
      <h3 className={styles.title}>Developer / Designer</h3>
      <h3 className={styles.date}>Jan.&nbsp;-&nbsp;Apr.&nbsp;2019</h3>
    </div>
    <h3 className={styles.location}>CMPUT 301 - Introduction to Software Engineering</h3>
    <ul>
      <li>Created an Android App, Alexandria, as part of the class project</li>
      <li>Alexandria was developed with Java in Android Studio</li>
      <li>Worked in a team of 6, following scrum practices</li>
      <li>Lead the creation of the UI with Adobe XD</li>
      <li>Opted for a cozy theme to match the book sharing aspect of the App</li>
      <li>Programmed the majority of the Front-End code</li>
    </ul>
    <a
      className={styles.link}
      href="https://github.com/cmput301w19t02/Alexandria"
      target="_blank"
      rel="noopener noreferrer">
      <i className="fab fa-fw fa-github" />
      GitHub
    </a>
    <a
      className={styles.link}
      href="https://github.com/cmput301w19t02/Alexandria/wiki/Interface"
      target="_blank"
      rel="noopener noreferrer">
      <i className="fas fa-fw fa-link" />
      UI Gallery
    </a>
    <br />
    <h1>Canned</h1>
    <hr />
    <div className={styles.descriptor}>
      <h3 className={styles.title}>Producer / Developer</h3>
      <h3 className={styles.date}>Jan.&nbsp;-&nbsp;Apr.&nbsp;2017</h3>
    </div>
    <h3 className={styles.location}>CMPUT 250 - Computer and Games</h3>
    <ul>
      <li>Created ‘Canned’, a stealth video game in a team of six as part of the class project</li>
      <li>Built with GameMaker Studio using GML, a C and JavaScript like language </li>
      <li>Recipient of the Game of the Year, and the Technical Achievement Award</li>
      <li>Scripted player controls and the behavioural AI of enemies</li>
      <li>Organized tasks and deadlines for team members</li>
      <li>Ensured the completion and quality of each milestone</li>
    </ul>
    <a
      className={styles.link}
      href="https://drive.google.com/file/d/1HRMVdFSU6mh71yW10tTI6SQA3tWcnzGF/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer">
      <i className="fas fa-fw fa-link" />
      Video Demo
    </a>
    <a
      className={styles.link}
      href="https://sites.google.com/ualberta.ca/cmput250/9th-ceremony-2017"
      target="_blank"
      rel="noopener noreferrer">
      <i className="fas fa-fw fa-link" />
      Award Page
    </a>
  </>
);
