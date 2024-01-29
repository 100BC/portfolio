<script lang="ts">
  import { fly } from 'svelte/transition';

  export let isLast = false;
</script>

<div
  class="card"
  in:fly={{ delay: 200, x: -200 }}
  out:fly={{ duration: 100, x: 200 }}
  class:isLast
>
  <h3><slot name="title" /></h3>
  <h4><slot name="role" /></h4>
  <time><slot name="duration" /></time>
  <slot name="tasks" />

  <h4>Tech Stack</h4>
  <slot name="techStack" class="techStack" />
</div>

<style lang="scss">
  .card {
    max-width: 100ch;
    padding: 2rem;
    margin: auto;
    color: #000;
    background-color: #fff;
    border-radius: $borderRadius;

    > h3 {
      margin-top: 0;
      font-size: 2.4rem;
    }

    > h4 {
      display: inline-block;
      margin: 0;
      font-size: 2rem;
    }
  }

  .isLast {
    border-top-right-radius: 0 !important;
  }

  :global(ul.tasks) {
    :global(li) {
      max-width: 80ch;
      margin-top: 1rem;
    }
  }

  :global(ul.techStack) {
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
</style>
