<script lang="ts">
  import type { WorkExperience } from '$lib/types';

  export let experience: WorkExperience;

  export let isLast = false;
  export let isFirst = false;
</script>

<!-- eslint-disable svelte/no-at-html-tags -->
<div class="card" class:isLast class:isFirst>
  <h3>{experience.title} - {experience.role}</h3>
  <div class="info">
    <time>{experience.time}</time>
    <address>{experience.location}</address>
  </div>
  <ul class="tasks">
    {#each experience.duties as duty}
      {#if typeof duty === 'object'}
        <li>
          {@html duty.task}
          <ul>
            {#each duty.subTasks as subTask}
              <li>{@html subTask}</li>
            {/each}
          </ul>
        </li>
      {:else}
        <li>{@html duty}</li>
      {/if}
    {/each}
  </ul>

  <h4>Tech Stack</h4>
  <ul class="techStack">
    {#each experience.tech as tech}
      <li>{tech}</li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .card {
    padding: 2rem;
    margin: auto;
    color: #000;
    background-color: #fff;
    border-radius: $borderRadius;

    > h3 {
      margin: 0 0 0.5em;
      font-size: 2.4rem;
    }

    > h4 {
      display: inline-block;
      margin: 0;
      font-size: 2rem;
    }
  }

  .info {
    display: flex;
    justify-content: space-between;
  }

  .tasks {
    :global(a) {
      color: $purple;
      text-decoration: underline;

      &:hover {
        color: $darkGreen;
      }
    }

    li {
      margin-top: 1rem;

      > ul {
        padding-inline-start: 1.5rem;
        list-style: circle;
      }
    }
  }

  .techStack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8ch;
    padding: 0;
    list-style: none;

    > :global(li) {
      &:not(:last-of-type)::after {
        color: $purple;
        content: ' |';
      }
    }
  }

  @media screen and (width > $phone) {
    .isLast {
      border-top-right-radius: 0;
    }

    .isFirst {
      border-top-left-radius: 0;
    }
  }
</style>
