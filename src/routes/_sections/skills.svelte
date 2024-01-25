<script lang="ts">
  import { frameworks, languages, services, skills } from './skills';
</script>

<section class="fullPage" aria-labelledby="techStack" id="skills">
  <h2 id="techStack">Skills and Tech Stack</h2>

  <div class="container">
    <div>
      <h3>Frameworks & Libraries</h3>
      <ul>
        {#each frameworks as fw}
          <li>{fw}</li>
        {/each}
      </ul>
    </div>

    <div>
      <h3>Languages</h3>
      <ul>
        {#each languages as lang}
          <li>{lang}</li>
        {/each}
      </ul>
    </div>
    <div>
      <h3>Skills</h3>
      <ul>
        {#each skills as sk}
          <li>{sk}</li>
        {/each}
      </ul>
    </div>
    <div>
      <h3>Services</h3>
      <ul>
        {#each services as sv}
          <li>{sv}</li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<style lang="scss">
  section {
    padding: 4rem;
  }

  h2 {
    font-size: 5rem;
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
