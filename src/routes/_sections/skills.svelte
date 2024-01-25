<section class="fullPage" aria-labelledby="techStack" id="skills">
  <h2 id="techStack">Skills and Tech Stack</h2>

  <div class="container">
    <div>
      <h3>Frameworks</h3>
      <ul>
        <li>Next.js</li>
        <li>Sveltekit</li>
        <li>Ruby on Rails</li>
      </ul>
    </div>
    <div>
      <h3>Libraries</h3>
      <ul>
        <li>React.js</li>
        <li>Svelte</li>
        <li>Redux</li>
        <li>Material UI</li>
      </ul>
    </div>
    <div>
      <h3>Languages</h3>
      <ul>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Ruby</li>
        <li>SQL</li>
        <li>NoSQL</li>
        <li>GraphQL</li>
        <li>Python</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>SCSS</li>
      </ul>
    </div>
    <div>
      <h3>Services</h3>
      <ul>
        <li>Linux</li>
        <li>Node.js</li>
        <li>NGINX</li>
        <li>Github Actions</li>
        <li>Gitlab CI/CD</li>
        <li>Cloudinary</li>
        <li>Firebase</li>
      </ul>
    </div>
    <div>
      <h3>Skills</h3>
      <ul>
        <li>UI/UX</li>
        <li>Software Optimization</li>
        <li>Search Engine Optimization (SEO)</li>
        <li>Responsive Web Design</li>
        <li>Progressive Web Apps</li>
        <li>Web Content Accessibility Guidelines (WCAG)</li>
      </ul>
    </div>
  </div>
</section>

<style lang="scss">
  section {
    padding: 4rem;
  }

  h2 {
    font-size: 3rem;
    text-align: center;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: space-between;

    > div {
      flex: 1;

      > h3 {
        margin-bottom: 0;
        border-bottom: 2px solid $purple;
      }

      > ul > li {
        margin-top: 1rem;
      }
    }
  }

  @media screen and (width <= $tablet) {
    section {
      font-size: 1.9rem;
    }
  }
</style>
