<script lang="ts">
  import ExperienceCard from '$lib/components/ExperienceCard.svelte';
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
        <li class:selected={cardOpen === 'contract'}>
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
        <ExperienceCard fn={() => (cardOpen = 'igniter')}>
          <svelte:fragment slot="title">Igniter Tickets</svelte:fragment>
          <svelte:fragment slot="role">Software Developer</svelte:fragment>
          <svelte:fragment slot="duration">
            Feb. 2022 - Nov. 2023
          </svelte:fragment>
        </ExperienceCard>
      </li>
      <li>
        <ExperienceCard fn={() => (cardOpen = 'interface')}>
          <svelte:fragment slot="title">Interface Fluidics</svelte:fragment>
          <svelte:fragment slot="role">React Developer</svelte:fragment>
          <svelte:fragment slot="duration">
            Oct. 2021 - Jan. 2022
          </svelte:fragment>
        </ExperienceCard>
      </li>
      <li>
        <ExperienceCard fn={() => (cardOpen = 'buddytree')}>
          <svelte:fragment slot="title">Buddytree</svelte:fragment>
          <svelte:fragment slot="role">Software Developer</svelte:fragment>
          <svelte:fragment slot="duration">
            Feb. 2021 - Sept 2022
          </svelte:fragment>
        </ExperienceCard>
      </li>
      <li>
        <ExperienceCard fn={() => (cardOpen = 'contract')}>
          <svelte:fragment slot="title">Contract Work</svelte:fragment>
          <svelte:fragment slot="role">Web Developer</svelte:fragment>
          <svelte:fragment slot="duration">2020-present</svelte:fragment>
        </ExperienceCard>
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
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    justify-content: center;
    max-width: 800px;
    padding-left: 0;
    margin: auto;
    list-style: none;
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

  @media screen and (width <= $phone) {
    .grid {
      display: flex;
      flex-direction: column;
    }
  }
</style>
