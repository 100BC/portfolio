<script lang="ts">
  let isTyping = true;
  let titleText = 'Software Developer';
  let titleIndex = 0;
  const titles = [
    'Software Developer',
    'Full Stack Developer',
    'Front End Developer',
    'Web Developer',
  ];

  $: fullyTyped = titleText === titles[titleIndex];

  $: if (fullyTyped) {
    setTimeout(() => {
      isTyping = false;
    }, 5000);
  }

  function typing(_element: HTMLElement) {
    const interval = setInterval(() => {
      if (isTyping === false) {
        titleText = titleText.slice(0, -2);

        if (titleText.length <= 0) {
          if (titleIndex === titles.length - 1) {
            titleIndex = 0;
          } else {
            titleIndex += 1;
          }
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
      <div>I am a</div>
      <h2 aria-label="Software Developer">
        <span use:typing>{titleText}</span><span use:blinking>|</span>
        <noscript>Software Developer</noscript>
      </h2>
    </div>
  </div>
  <div>
    <p>
      I am a Software Developer and Web Developer. I am primarily focused on
      Front End Development, due to my background in Human Computer interaction.
      This encompasses advanced knowledge in UI/UX, Semantic HTML, and Web
      Accessibility Guidelines. I am also skilled in creating mobile friendly
      websites through Responsive Web Design, SEO, and optimizing software to
      reduce time-to-first byte.
    </p>
    <p>
      While Front End Development is my forte, I am no stranger to backend
      development, having created API routes, developed GraphQL servers,
      optimized SQL queries and much more.
    </p>
  </div>
</section>

<style lang="scss">
  section {
    display: grid;
    grid-template-columns: minmax(180px, 30%) 1fr;
    gap: 2rem;
    align-items: center;
    padding-right: 2rem;
  }

  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 2rem 4rem 2rem 2rem;
    clip-path: polygon(0 0, 100% 0, 70% 100%, 0 100%);
    color: black;
    background-color: white;
  }

  .title {
    > h2 {
      margin: 0;
    }
  }

  p {
    max-width: 80ch;
    font-size: 1.8rem;
    line-height: 1.5;
  }
</style>
