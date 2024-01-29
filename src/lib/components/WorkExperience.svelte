<script lang="ts">
  import { fly } from 'svelte/transition';

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
  <h2><slot name="title" /></h2>
  <h3><slot name="role" /></h3>
  <time><slot name="duration" /></time>
  <slot name="tasks" />

  <h4>Tech Stack</h4>
  <slot name="techStack" class="techStack" />
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

  .isLast {
    border-top-right-radius: 0;
  }

  .isFirst {
    border-top-left-radius: 0;
  }

  :global(ul.tasks) {
    :global(li) {
      max-width: 80ch;
      margin-top: 1rem;

      > :global(ul) {
        padding-left: 15px;
        list-style: circle;
      }
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
