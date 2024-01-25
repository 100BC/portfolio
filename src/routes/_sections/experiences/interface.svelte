<script lang="ts">
  import WorkExperience from '$lib/components/WorkExperience.svelte';

  const techStack = [
    'React.js',
    'JavaScript',
    'TypeScript',
    'Material-UI',
    'JSX',
    'CSS',
    'GraphQL',
  ];
</script>

<WorkExperience>
  <svelte:fragment slot="title">Interface Fluidics</svelte:fragment>
  <svelte:fragment slot="role">React Developer</svelte:fragment>
  <svelte:fragment slot="duration">Oct. 2021 - Jan. 2022</svelte:fragment>
  <ul slot="tasks" class="tasks">
    <li>
      Collaborated with the tech lead to refactor the internal React portal
    </li>
    <ul>
      <li>
        Improved performance by eliminating unnecessary re-rendering on state
        changes
      </li>
      <li>
        Enhanced code readability by consolidating duplicate code into modular
        web components
      </li>
      <li>
        Overhauled Material UI code to align accurately with documentation
        standards
      </li>
      <li>
        Improved the user experience by combining numerous routes into one
      </li>
    </ul>
    <li>
      Spearheaded the creation of a sophisticated internal portal tailored for
      scientific research of the company's chemists and engineers
    </li>
  </ul>
  <ul class="techStack" slot="techStack">
    {#each techStack as tech}
      <li>{tech}</li>
    {/each}
  </ul>
</WorkExperience>
