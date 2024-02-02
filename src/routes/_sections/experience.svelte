<script lang="ts">
  import ExperienceCard from '$lib/components/ExperienceCard.svelte';
  import { fly, scale } from 'svelte/transition';
  import WorkExperience from '$lib/components/WorkExperience.svelte';
  import {
    buddytree,
    contract,
    igniter,
    interfaceFluidics,
    trustScience,
  } from '$lib/data/experience';

  export let urlParam: string | null;
  const validUrls = [
    'igniter',
    'interface',
    'buddytree',
    'contract',
    'trustScience',
  ];
  $: validUrl = validUrls.includes(urlParam || '');

  const baseUrl = '.#experience';
  const igniterUrl = '?exp=igniter#experience';
  const interfaceUrl = '?exp=interface#experience';
  const buddytreeUrl = '?exp=buddytree#experience';
  const contractUrl = '?exp=contract#experience';
  const trustScienceUrl = '?exp=trustScience#experience';
</script>

<section aria-label="Work Experience" id="experience" class="fullPage">
  <h2 class:small={!!urlParam}>
    {#if urlParam}
      <a
        href={baseUrl}
        class="back"
        in:fly={{ x: 100, duration: 500, opacity: 100 }}
      >
        Work Experience
      </a>
    {:else}
      <div in:fly={{ x: -100, duration: 500, opacity: 100 }}>
        Work Experience
      </div>
    {/if}
  </h2>

  {#if validUrl}
    <header aria-label="Work Experience">
      <nav>
        <ul class="headerNav">
          <li class:selected={urlParam === 'igniter'}>
            <a href={igniterUrl}>Igniter Tickets</a>
          </li>
          <li class:selected={urlParam === 'interface'}>
            <a href={interfaceUrl}>Interface Fluidics</a>
          </li>
          <li class:selected={urlParam === 'buddytree'}>
            <a href={buddytreeUrl}>Buddytree</a>
          </li>
          <li class:selected={urlParam === 'contract'}>
            <a href={contractUrl}>Contract</a>
          </li>
          <li class:selected={urlParam === 'trustScience'}>
            <a href={trustScienceUrl}>Trust Science</a>
          </li>
        </ul>
      </nav>
    </header>
    {#if urlParam === 'igniter'}
      <WorkExperience experience={igniter} isFirst />
    {:else if urlParam === 'interface'}
      <WorkExperience experience={interfaceFluidics} />
    {:else if urlParam === 'buddytree'}
      <WorkExperience experience={buddytree} />
    {:else if urlParam === 'contract'}
      <WorkExperience experience={contract} />
    {:else if urlParam === 'trustScience'}
      <WorkExperience experience={trustScience} isLast />
    {/if}
  {:else}
    <ol class="grid" in:scale={{ delay: 200 }}>
      <li>
        <ExperienceCard href={igniterUrl} experience={igniter} />
      </li>
      <li>
        <ExperienceCard href={interfaceUrl} experience={interfaceFluidics} />
      </li>
      <li>
        <ExperienceCard href={buddytreeUrl} experience={buddytree} />
      </li>
      <li>
        <ExperienceCard href={contractUrl} experience={contract} />
      </li>
      <li>
        <ExperienceCard href={trustScienceUrl} experience={trustScience} />
      </li>
    </ol>
  {/if}
</section>

<style lang="scss">
  section {
    max-width: $laptop;
    padding: 4rem;
    margin: auto;
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
    > nav > ul {
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

  .back {
    display: block;
    text-align: start;

    &:hover {
      color: $green;
    }

    &::before {
      content: '<< ';
    }
  }

  @media screen and (width <= $phone) {
    .small {
      font-size: 3rem;
    }

    .headerNav {
      display: none;
    }
  }
</style>
