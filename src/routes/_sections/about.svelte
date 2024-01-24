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
        titleText = titleText.slice(0, -1);
        if (titleText.length === 0) {
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
    <div>I am a</div>
    <h2>
      <span use:typing>{titleText}</span><span use:blinking>|</span>
      <noscript>Software Developer</noscript>
    </h2>
  </div>
  <div>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
      quidem error distinctio numquam id, expedita nulla excepturi quasi
      assumenda nam delectus rem sed similique quae vitae animi esse qui quam,
      quod inventore maiores maxime dolores. Aspernatur iste ducimus eum qui
      laboriosam necessitatibus excepturi id assumenda maxime tenetur, in
      placeat a quas quis consequatur neque nobis, dolor laudantium, aliquam
      inventore. Deserunt eos dolorum pariatur magni, odio consequatur qui amet
      nihil sed explicabo cum nesciunt non officia consequuntur. Nobis iusto
      officiis iure aut neque quisquam veniam, eveniet vel ab quas? Temporibus
      ducimus ad, quis iste eum tenetur velit, libero repellat, laudantium
      eligendi cumque itaque repudiandae. Odio minima voluptas explicabo
      cupiditate facere, molestias provident aspernatur debitis sapiente
      architecto ea delectus, eum placeat tenetur dolor numquam perspiciatis
      reiciendis inventore tempora accusantium esse id vel. Rem, sapiente eum
      adipisci sequi enim in consequuntur, ipsam cupiditate perferendis debitis
      voluptatibus delectus culpa! Facilis ad praesentium sequi amet magnam
      consequatur recusandae fugit sapiente.
    </p>
  </div>
</section>

<style lang="scss">
  section {
    display: grid;
    grid-template-columns: minmax(200px, 30%) 1fr;
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

    > h2 {
      margin: 0;
    }
  }
</style>
