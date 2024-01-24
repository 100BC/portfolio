<script lang="ts">
  import Buddytree from './experiences/buddytree.svelte';
  import Contract from './experiences/contract.svelte';
  import Igniter from './experiences/igniter.svelte';
  import Interface from './experiences/interface.svelte';

  let cardOpen: string | null = null;
</script>

<section aria-label="Work Experience" id="experience" class="fullPage">
  <h2>Work Experience</h2>

  {#if cardOpen}
    <header aria-label="Work Experience" class="headerNav">
      <ul>
        <li class:selected={cardOpen === 'igniter'}>
          <button type="button" on:click={() => (cardOpen = 'igniter')}>
            Igniter Tickets
          </button>
        </li>
        <li class:selected={cardOpen === 'interface'}>
          <button type="button" on:click={() => (cardOpen = 'interface')}>
            Interface Fluidics
          </button>
        </li>
        <li class:selected={cardOpen === 'buddytree'}>
          <button type="button" on:click={() => (cardOpen = 'buddytree')}>
            Buddytree
          </button>
        </li>
        <li>
          <button type="button" on:click={() => (cardOpen = 'contract')}>
            Contract
          </button>
        </li>
        <li>
          <button type="button" on:click={() => (cardOpen = null)}>
            Close
          </button>
        </li>
      </ul>
    </header>
  {/if}

  {#if cardOpen === null}
    <ol class="grid">
      <li>
        <button type="button" on:click={() => (cardOpen = 'igniter')}>
          <h3>Igniter Tickets</h3>
          <i>Software Developer</i>
          <time>Feb. 2022 - Nov. 2023</time>
        </button>
      </li>
      <li>
        <button type="button" on:click={() => (cardOpen = 'interface')}>
          <h3>Interface Fluidics</h3>
          <i>Software Developer</i>
          <time>Oct. 2021 - Jan. 2022</time>
        </button>
      </li>
      <li>
        <button type="button" on:click={() => (cardOpen = 'buddytree')}>
          <h3>Buddytree</h3>
          <i>Software Developer</i>
          <time>Feb. 2021 - Sept 2022</time>
        </button>
      </li>
      <li>
        <button type="button" on:click={() => (cardOpen = 'contract')}>
          <h3>Contract Work</h3>
          <i>Web Developer</i>
          <time>2020-present</time>
        </button>
      </li>
    </ol>
  {:else if cardOpen === 'igniter'}
    <Igniter />
  {:else if cardOpen === 'interface'}
    <Interface />
  {:else if cardOpen === 'buddytree'}
    <Buddytree />
  {:else if cardOpen === 'contract'}
    <Contract />
  {/if}
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
    gap: 2rem;
    justify-content: center;
    padding-left: 0;
    list-style: none;

    > li {
      min-height: 200px;

      > button {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        height: 100%;
        min-height: 200px;
        padding: 2rem;
        color: black;
        text-align: start;
        background: 0;
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
  }

  .headerNav {
    max-width: 90%;
    margin: auto;

    > ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-left: 0;
      list-style: none;

      > li {
        flex: 1 1;

        > button {
          width: 100%;
          padding: 1rem;
          font-weight: bold;
          color: $theme400;
          background: none;

          &:hover {
            color: $theme600;
          }
        }

        &.selected {
          border-bottom: 2px solid $theme400;
        }
      }
    }
  }
</style>
