<script lang="ts">
  let tab = 0;
  let isTyping = true;
  let titleIndex = 0;
  const titles = [
    'Software Developer',
    'Full Stack Developer',
    'Front End Developer',
    'Web Developer',
  ];
  let titleText = titles[titleIndex] || '';

  $: fullyTyped = titleText === titles[titleIndex];

  $: if (fullyTyped) {
    setTimeout(() => {
      isTyping = false;
    }, 3000);
  }

  function typing(_element: HTMLElement) {
    const interval = setInterval(() => {
      if (isTyping === false) {
        titleText = titleText.slice(0, -2);

        if (titleText.length <= 0) {
          titleIndex = (titleIndex + 1) % titles.length;
          isTyping = true;
        }
      } else {
        if (!fullyTyped) {
          titleText = titleText + titles[titleIndex]![titleText.length];
        }
      }
    }, 75);

    return {
      destroy() {
        clearInterval(interval);
      },
    };
  }

  function blinking(element: HTMLElement) {
    element.innerText = '|';

    element.animate([{ opacity: 0 }, { opacity: 100 }, { opacity: 0 }], {
      duration: 1200,
      iterations: Infinity,
      easing: 'ease-in-out',
    });
  }
</script>

<section aria-label="about" class="fullPage" id="about">
  <div class="left">
    <div class="title">
      <div class="prefix">I am a</div>
      <h2 aria-label="Software Developer">
        <span use:typing>{titleText}</span><span use:blinking />
      </h2>
    </div>
  </div>
  <div class="right">
    <div class="buttons">
      <button
        type="button"
        on:click={() => (tab = 0)}
        class:selected={tab === 0}
      >
        About
      </button>
      <button
        type="button"
        on:click={() => (tab = 1)}
        class:selected={tab === 1}
      >
        Education
      </button>
    </div>
    {#if tab === 1}
      <div class="education tabContent">
        <h3>Bachelor of Science: <em>Computer Science</em></h3>
        <ul>
          <li>University of Alberta, Class of <time>2020</time></li>
          <li>Sociology Minor</li>
          <li>Dean's Honour Roll <time>2020</time></li>
          <li>CMPUT 250 Game of the Year <time>2017</time></li>
        </ul>
      </div>
    {:else}
      <div class="tabContent">
        <p>
          I am a Software Developer and Web Developer. I have deep knowledge in
          Front End Development, due to my background in Human Computer
          Interaction. This encompasses advanced knowledge in UI/UX, Semantic
          HTML, and Web Accessibility Guidelines. I am also skilled in creating
          mobile friendly websites through Responsive Web Design, SEO, and
          optimizing software to reduce time-to-first byte.
        </p>
        <p>
          However, I am no stranger to Back End development, as I have
          experience developing in Model View Controller (MVC) environments,
          creating API routes, and optimizing SQL queries.
        </p>
        <p>I am currently based in Toronto, ON.</p>
      </div>
    {/if}
  </div>
</section>

<style lang="scss">
  section {
    display: grid;
    grid-template-columns: 20ch 1.8fr;
    gap: 2rem;
    align-items: center;
    padding-right: 2rem;
    font-size: 3.5rem;
  }

  .left,
  .right {
    font-size: 1.6rem;
  }

  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 2rem 4rem 2rem 2rem;
    clip-path: polygon(0 0, 100% 0, 70% 100%, 0 100%);
    color: $black;
    background-color: white;
  }

  .title {
    > h2 {
      margin: 0;
      font-size: 3rem;
    }

    > .prefix {
      font-size: 1.6rem;
    }
  }

  p {
    max-width: 80ch;
    font-size: 1.8rem;
    line-height: 1.5;
  }

  .buttons {
    > button {
      font-size: 2.4rem;
      font-weight: bold;
      color: $purple;
      background: none;

      &:hover {
        color: $green;
      }

      &:focus-visible {
        outline: 3px solid;
      }
    }

    .selected {
      border-bottom: 2px solid;
    }
  }

  .education {
    > h3 {
      margin-top: 18px;
      font-size: 3rem;
    }

    > ul {
      font-size: 2rem;
      list-style: none;

      > li:not(:first-child) {
        margin-top: 2rem;
      }
    }
  }

  .right {
    width: 100%;
    max-height: 80%;
    overflow-y: auto;
  }

  .tabContent,
  .title {
    min-height: 300px;
  }

  @media screen and (width <= $tablet) {
    section {
      display: flex;
      flex-direction: column;
      padding: 0;
    }

    .tabContent,
    .title {
      min-height: initial;
    }

    .title > h2 {
      font-size: 3.5rem;
    }

    .left {
      width: 100%;
      height: initial;
      clip-path: initial;
    }

    .right {
      padding: 0 2rem;
    }

    p,
    .education > ul {
      font-size: 2.4rem;
    }
  }
</style>
