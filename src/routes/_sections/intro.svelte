<section aria-labelledby="name">
  <div>
    <div class="title">
      <div>Hello my name is</div>
      <h1 id="name">Otman Maoued</h1>
      <i>(ot-man maow-WED)</i>
    </div>
    <nav>
      <h2>Web and Software Developer</h2>
      <ul>
        <li><a href="#work">About</a></li>
        <li><a href="#work">Tech Stack</a></li>
        <li><a href="#work">Work Experience</a></li>
        <li><a href="#work">Contact</a></li>
      </ul>
    </nav>
  </div>
  <img src="/images/otman.webp" alt="Otman Maoued" />
</section>

<style lang="scss">
  section {
    display: flex;
    flex-wrap: wrap;
    gap: 5rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;

    > img {
      border-radius: 20px;
    }
  }

  .title {
    margin-bottom: 2rem;

    > h1 {
      margin: 0;
      color: transparent;
      background-image: linear-gradient(
        90deg,
        $theme400 0%,
        $theme500 60%,
        $theme600 100%
      );
      background-clip: text;
    }
  }

  nav {
    > h2 {
      margin-bottom: 0;
    }

    > ul {
      padding: 0;
      list-style-type: none;

      > li {
        width: fit-content;
        margin-top: 2rem;
        color: $theme400;
        text-decoration: underline;

        &:first-of-type {
          margin-top: 0;
        }

        &:hover {
          color: $theme600;
        }
      }
    }
  }
</style>
