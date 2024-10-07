<script lang="ts">
  import ExperienceCard from '$lib/components/ExperienceCard.svelte';
  import { fly, scale } from 'svelte/transition';
  import WorkExperience from '$lib/components/WorkExperience.svelte';
  import {
    buddytree,
    igniter,
    interfaceFluidics,
    stealthStartup,
    trustScience,
  } from '$lib/data/experience';
  import { goto } from '$app/navigation';

  export let urlParam: string | null;

  const experiences = {
    stealthStartup,
    igniter,
    interfaceFluidics,
    buddytree,
    trustScience,
  };
  type Experience = keyof typeof experiences;

  const expOrdered = Object.keys(experiences) as ReadonlyArray<Experience>;
  const expUrls = Object.fromEntries(
    expOrdered.map((exp) => [exp, `?exp=${exp}#experience`])
  ) as Readonly<Record<Experience, string>>;

  const baseUrl = '.#experience';
  $: currentExp = expOrdered.find((v) => v === urlParam);

  function handleNext() {
    if (!currentExp) {
      goto(baseUrl);
      return;
    }

    const next =
      expOrdered[(expOrdered.indexOf(currentExp) + 1) % expOrdered.length]!;
    goto(expUrls[next] || baseUrl);
  }

  function handlePrev() {
    if (!currentExp) {
      goto(baseUrl);
      return;
    }

    const i = expOrdered.indexOf(currentExp) - 1;
    const prev = expOrdered[i < 0 ? expOrdered.length - 1 : i]!;
    goto(expUrls[prev]);
  }
</script>

<section aria-label="Work Experience" id="experience" class="fullPage">
  {#if currentExp}
    <h2 class="small" in:fly={{ x: 100, duration: 500, opacity: 100 }}>
      <a href={baseUrl} class="back"> Work Experience </a>
    </h2>
    <header aria-label="Work Experience">
      <nav class="desktopNav">
        <ol>
          {#each expOrdered as exp}
            <li class:selected={currentExp === exp}>
              <a href={expUrls[exp]}>{experiences[exp].title}</a>
            </li>
          {/each}
        </ol>
      </nav>
      <nav class="mobileNav">
        <button type="button" on:click={() => handlePrev()}>Previous</button>
        <button type="button" on:click={() => handleNext()}>Next</button>
      </nav>
    </header>
    <WorkExperience
      experience={experiences[currentExp]}
      isFirst={currentExp === expOrdered[0]}
      isLast={currentExp === expOrdered[expOrdered.length - 1]}
    />
  {:else}
    <h2 in:fly={{ x: -100, duration: 500, opacity: 100 }}>Work Experience</h2>
    <ol class="grid" in:scale={{ delay: 200 }}>
      {#each expOrdered as exp}
        <li>
          <ExperienceCard href={expUrls[exp]} experience={experiences[exp]} />
        </li>
      {/each}
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
    font-size: 5rem;
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

  .mobileNav {
    display: none;
    justify-content: space-between;

    > button {
      font-size: 2rem;
      font-weight: bold;
      color: $purple;
      background: 0;

      &:hover {
        color: $green;
      }
    }
  }

  header {
    > .desktopNav > ol {
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
    text-decoration: underline;

    &:hover {
      color: $green;
    }

    &::before {
      content: '<< ';
    }
  }

  @media screen and (width <= $tablet) {
    .small {
      font-size: 3rem;
    }

    .desktopNav {
      display: none;
    }

    .mobileNav {
      display: flex;
    }
  }
</style>
