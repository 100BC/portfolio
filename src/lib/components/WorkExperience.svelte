<script lang="ts">
  import type { WorkExperience } from '$lib/types';
  import { fly } from 'svelte/transition';

  export let experience: WorkExperience;

  export let isLast = false;
  export let isFirst = false;
</script>

<div
  class="card"
  in:fly={{ delay: 200, x: -200 }}
  out:fly={{ duration: 100, x: 200 }}
  class:isLast
  class:isFirst
>
  <h2>{experience.title}</h2>
  <h3>{experience.role}</h3>
  <time>{experience.time}</time>
  <ul class="tasks">
    {#each experience.duties as duty}
      {#if typeof duty === 'object'}
        <li>
          {duty.task}
          <ul>
            {#each duty.subTasks as subTask}
              <li>{subTask}</li>
            {/each}
          </ul>
        </li>
      {:else}
        <li>{duty}</li>
      {/if}
    {/each}
  </ul>

  <h3>Tech Stack</h3>
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

    > h2 {
      margin-top: 0;
      font-size: 2.4rem;
    }

    > h3 {
      display: inline-block;
      margin: 0;
      font-size: 2rem;
    }
  }

  .tasks {
    li {
      max-width: 80ch;
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
