<section aria-label="Work Experience" id="experience" class="fullPage">
  <h2>Work Experience</h2>
  <ol class="grid">
    <li>
      <h3>Igniter Tickets</h3>
      <i>Software Developer</i>
      <time>Feb. 2022 - Nov. 2023</time>
    </li>
    <li>
      <h3>Interface Fluidics</h3>
      <i>Software Developer</i>
      <time>Oct. 2021 - Jan. 2022</time>
    </li>
    <li>
      <h3>Buddytree</h3>
      <i>Software Developer</i>
      <time>Feb. 2021 - Sept 2022</time>
    </li>
    <li>
      <h3>Contract Work</h3>
      <i>Web Developer</i>
      <time>2020-present</time>
    </li>
  </ol>
</section>

<style lang="scss">
  section {
    padding: 4rem;
  }

  h2 {
    font-size: 6rem;
    text-align: center;
  }

  .grid {
    display: grid;
    grid-template-columns: minmax(200px, 400px) minmax(200px, 400px);
    justify-content: center;
    padding-left: 0;
    list-style: none;

    > li {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      min-height: 200px;
      padding: 2rem;
      margin: 1rem;
      color: black;
      background-color: white;
      border-radius: 10px;

      > h3 {
        margin: 0;
        font-size: 2.4rem;
      }

      > i {
        font-size: 2rem;
      }

      &:hover {
        transform: translate(2px, 2px);
      }
    }
  }
</style>
