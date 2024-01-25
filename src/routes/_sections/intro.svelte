<script lang="ts">
  import linkedIn from '$lib/images/LinkedIn.png';
  import github from '$lib/images/Github.png';
</script>

<section aria-labelledby="name" class="fullPage">
  <div>
    <div class="title">
      <div>Hello my name is</div>
      <h1 id="name">Otman Maoued</h1>
      <i>(ot-man maow-WED)</i>
    </div>
    <nav aria-label="external">
      <ul class="externalLinks">
        <li>
          <a href="https://www.linkedin.com/in/otman-dev/">
            <img src={linkedIn} alt="LinkedIn" />
          </a>
        </li>
        <li>
          <a href="https://github.com/100BC">
            <img src={github} alt="GitHub" />
          </a>
        </li>
      </ul>
    </nav>
    <nav class="internalNav" aria-label="internal">
      <h2>Web and Software Developer</h2>
      <ol>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Work Experience</a></li>
        <li><a href="#skills">Skills & Tech Stack</a></li>
        <li><a href="#contact">Contact</a></li>
      </ol>
    </nav>
  </div>
  <img src="/images/otman.webp" alt="Otman Maoued" />
</section>

<style lang="scss">
  section {
    display: flex;
    flex-wrap: wrap;
    flex-wrap: wrap-reverse;
    gap: 5rem;
    place-content: center center;
    align-items: center;

    > img {
      width: 256px;
      height: 256px;
      border-radius: 20px;
      object-fit: cover;
    }
  }

  .title {
    margin-bottom: 2rem;

    > h1 {
      @include linearGradient;

      margin: 0;
      color: transparent;
      background-clip: text;
    }
  }

  .internalNav {
    > h2 {
      margin-bottom: 0;
    }

    > ol {
      > li {
        width: fit-content;
        margin-top: 2rem;
        color: $purple;
        text-decoration: underline;

        &:first-of-type {
          margin-top: 0;
        }

        &:hover {
          color: $green;
        }
      }
    }
  }

  .externalLinks {
    display: flex;
    gap: 2rem;
    padding: 0;
    list-style: none;

    a {
      display: block;
      width: 26px;
      height: 26px;
    }
  }
</style>
