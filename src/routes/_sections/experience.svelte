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
</script>

<section aria-label="Work Experience" id="experience" class="fullPage">
  <h2>Work Experience</h2>

  {#if cardOpen}
    <header
      aria-label="Work Experience"
      class="headerNav"
      in:fade={{ delay: 200 }}
      out:fade={{ duration: 200 }}
    >
      <ul>
        <li class:selected={cardOpen === 'igniter'}>
          <a href="?exp=igniter#experience">Igniter Tickets</a>
        </li>
        <li class:selected={cardOpen === 'interface'}>
          <a href="?exp=interface#experience">Interface Fluidics</a>
        </li>
        <li class:selected={cardOpen === 'buddytree'}>
          <a href="?exp=buddytree#experience">Buddytree</a>
        </li>
        <li class:selected={cardOpen === 'contract'}>
          <a href="?exp=contract#experience">Contract</a>
        </li>
        <li>
          <a href=".#experience">Card View</a>
        </li>
      </ul>
    </header>
    <header
      class="headerSelect"
      in:fade={{ delay: 200 }}
      out:fade={{ duration: 200 }}
    >
      <label for="select">Filter:</label>
      <select
        bind:value={cardOpen}
        id="select"
        on:change={() =>
          goto(cardOpen ? `?exp=${cardOpen}#experience` : '.#experience')}
      >
        <option value="igniter"> Igniter Tickets </option>
        <option value="interface"> Interface Fluidics </option>
        <option value="buddytree">Buddytree</option>
        <option value="contract">Contract</option>
        <option value={null}>Card View</option>
      </select>
    </header>
  {/if}

  {#if !cardOpen}
    <ol class="grid" out:scale={{ duration: 200 }} in:scale={{ delay: 200 }}>
      <li>
        <ExperienceCard href="?exp=igniter#experience">
          <svelte:fragment slot="title">Igniter Tickets</svelte:fragment>
          <svelte:fragment slot="role">Software Developer</svelte:fragment>
          <svelte:fragment slot="duration">
            Feb. 2022 - Nov. 2023
          </svelte:fragment>
        </ExperienceCard>
      </li>
      <li>
        <ExperienceCard href="?exp=interface#experience">
          <svelte:fragment slot="title">Interface Fluidics</svelte:fragment>
          <svelte:fragment slot="role">React Developer</svelte:fragment>
          <svelte:fragment slot="duration">
            Oct. 2021 - Jan. 2022
          </svelte:fragment>
        </ExperienceCard>
      </li>
      <li>
        <ExperienceCard href="?exp=buddytree#experience">
          <svelte:fragment slot="title">Buddytree</svelte:fragment>
          <svelte:fragment slot="role">Software Developer</svelte:fragment>
          <svelte:fragment slot="duration">
            Feb. 2021 - Sept 2022
          </svelte:fragment>
        </ExperienceCard>
      </li>
      <li>
        <ExperienceCard href="?exp=contract#experience">
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
    width: 100ch;
    max-width: 90%;
    margin: auto;

    > ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-left: 0;
      list-style: none;

      > li {
        flex: 1;
        border-radius: $borderRadius;
        transition: background-color 1s;

        > a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          padding: 1rem;
          font-weight: bold;
          color: $theme400;
          text-align: center;
          background: none;

          &:hover {
            color: $theme600;
          }
        }

        &.selected {
          background-color: $theme400;

          > a {
            color: #000;
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
        color: rgb(0, 0, 0);
        text-align: center;
        background-color: $theme400;
        border: 0;
        border-radius: $borderRadius;
      }
    }
  }
</style>
