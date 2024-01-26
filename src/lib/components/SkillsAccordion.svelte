<script lang="ts">
  import { slide } from 'svelte/transition';

  export let handleOpen: () => void;
  export let skills: string[];
  export let isOpen: boolean;
</script>

<div class="container">
  <button type="button" on:click={() => handleOpen()}>
    <h3><slot /></h3>
    <div class="arrow">
      {#if isOpen}
        ▲
      {:else}
        ▼
      {/if}
    </div>
  </button>
  {#if isOpen}
    <ul transition:slide>
      {#each skills as sk}
        <li>{sk}</li>
      {/each}
    </ul>
  {/if}
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    max-width: $laptop;
    margin: auto;
    border: 1px solid $purple;

    &:not(:last-of-type) {
      border-bottom: 0;
    }
  }

  button {
    position: relative;
    color: $black;
    background-color: $white;

    &:hover {
      @include linearGradient;

      color: $white;
    }
  }

  .arrow {
    position: absolute;
    top: 50%;
    right: 10px;
    margin: auto 0;
    transform: translateY(-50%);
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1ch;
    justify-content: center;
    padding-left: 0;
    text-align: center;
    list-style: none;

    > :global(li:not(:last-of-type)::after) {
      color: $purple;
      content: ' |';
    }
  }

  @media screen and (width <= $tablet) {
    h3 {
      font-size: 2.6rem;
    }

    ul {
      font-size: 1.9rem;
    }
  }
</style>
