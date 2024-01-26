<script lang="ts">
  import ExperienceCard from '$lib/components/ExperienceCard.svelte';
  import { fade, scale } from 'svelte/transition';
  import Buddytree from './experiences/buddytree.svelte';
  import Contract from './experiences/contract.svelte';
  import Igniter from './experiences/igniter.svelte';
  import Interface from './experiences/interface.svelte';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';

  $: cardOpen = $page.url.searchParams.get('exp');

  const baseUrl = '.#experience';
  const igniterUrl = '?exp=igniter#experience';
  const interfaceUrl = '?exp=interface#experience';
  const buddytreeUrl = '?exp=buddytree#experience';
  const contractUrl = '?exp=contract#experience';
</script>

<section aria-label="Work Experience" id="experience" class="fullPage">
  <h2 class:small={!!cardOpen}>Work Experience</h2>

  {#if cardOpen}
    <header
      aria-label="Work Experience"
      in:fade={{ delay: 200 }}
      out:fade={{ duration: 200 }}
    >
      <ul class="headerNav">
        <li>
          <a href={baseUrl}>Card View</a>
        </li>
        <li class:selected={cardOpen === 'igniter'}>
          <a href={igniterUrl}>Igniter Tickets</a>
        </li>
        <li class:selected={cardOpen === 'interface'}>
          <a href={interfaceUrl}>Interface Fluidics</a>
        </li>
        <li class:selected={cardOpen === 'buddytree'}>
          <a href={buddytreeUrl}>Buddytree</a>
        </li>
        <li class:selected={cardOpen === 'contract'}>
          <a href={contractUrl}>Contract</a>
        </li>
      </ul>
      <div class="headerSelect">
        <label for="select">Filter:</label>
        <select
          bind:value={cardOpen}
          id="select"
          on:change={() =>
            goto(cardOpen ? `?exp=${cardOpen}#experience` : baseUrl)}
        >
          <option value={null}>Card View</option>
          <option value="igniter"> Igniter Tickets </option>
          <option value="interface"> Interface Fluidics </option>
          <option value="buddytree">Buddytree</option>
          <option value="contract">Contract</option>
        </select>
      </div>
    </header>
  {/if}

  {#if cardOpen === 'igniter'}
    <Igniter />
  {:else if cardOpen === 'interface'}
    <Interface />
  {:else if cardOpen === 'buddytree'}
    <Buddytree />
  {:else if cardOpen === 'contract'}
    <Contract />
  {:else}
    <ol class="grid" out:scale={{ duration: 200 }} in:scale={{ delay: 200 }}>
      <li>
        <ExperienceCard href={igniterUrl}>
          <svelte:fragment slot="title">Igniter Tickets</svelte:fragment>
          <svelte:fragment slot="role">Software Developer</svelte:fragment>
          <svelte:fragment slot="duration">
            Feb. 2022 - Nov. 2023
          </svelte:fragment>
        </ExperienceCard>
      </li>
      <li>
        <ExperienceCard href={interfaceUrl}>
          <svelte:fragment slot="title">Interface Fluidics</svelte:fragment>
          <svelte:fragment slot="role">React Developer</svelte:fragment>
          <svelte:fragment slot="duration">
            Oct. 2021 - Jan. 2022
          </svelte:fragment>
        </ExperienceCard>
      </li>
      <li>
        <ExperienceCard href={buddytreeUrl}>
          <svelte:fragment slot="title">Buddytree</svelte:fragment>
          <svelte:fragment slot="role">Software Developer</svelte:fragment>
          <svelte:fragment slot="duration">
            Feb. 2021 - Sept 2022
          </svelte:fragment>
        </ExperienceCard>
      </li>
      <li>
        <ExperienceCard href={contractUrl}>
          <svelte:fragment slot="title">Contract Work</svelte:fragment>
          <svelte:fragment slot="role">Web Developer</svelte:fragment>
          <svelte:fragment slot="duration">2020-present</svelte:fragment>
        </ExperienceCard>
      </li>
    </ol>
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
    max-width: $tablet;
    padding-left: 0;
    margin: auto;
    list-style: none;
  }

  header {
    width: 100ch;
    max-width: 100%;
    margin: auto;

    > ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;

      > li {
        flex: 1;
        border-top-left-radius: $borderRadius;
        border-top-right-radius: $borderRadius;
        transition: background-color 1s;

        > a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          padding: 1rem;
          font-weight: bold;
          color: $purple;
          text-align: center;
          background: none;

          &:hover {
            color: $green;
          }
        }

        &.selected {
          background-color: $purple;

          > a {
            color: $black;
          }
        }
      }
    }
  }

  .headerSelect {
    display: none;
  }

  @media screen and (width <= $phone) {
    .grid {
      display: flex;
      flex-direction: column;
    }

    .small {
      font-size: 3rem;
      text-align: start;
    }

    .headerNav {
      display: none;
    }

    .headerSelect {
      display: block;
      font-size: 1.8rem;

      > select {
        width: 100%;
        margin: 0 0 2rem;
        font-size: 2rem;
        font-weight: bold;
        color: $white;
        text-align: center;
        background-color: $purple;
        border: 0;
        border-radius: $borderRadius;
      }
    }
  }
</style>
