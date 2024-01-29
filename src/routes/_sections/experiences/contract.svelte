<script lang="ts">
  import WorkExperience from '$lib/components/WorkExperience.svelte';

  const techStack = [
    'React.js',
    'Next.js',
    'Firebase',
    'TypeScript',
    'HTML',
    'Svelte',
    'Sveltekit',
    'SCSS',
  ];
</script>

<WorkExperience>
  <svelte:fragment slot="title">Contract Work</svelte:fragment>
  <svelte:fragment slot="role">
    Creating websites for local businesses
  </svelte:fragment>
  <svelte:fragment slot="duration">2020 - present</svelte:fragment>
  <ul slot="tasks" class="tasks">
    <li>
      <a href="https://www.jyoupsychology.ca">https://www.jyoupsychology.ca</a>
    </li>

    <li>
      <a href="https://www.bbrosfinishing.ca">https://www.bbrosfinishing.ca</a>
    </li>
  </ul>
  <ul class="techStack" slot="techStack">
    {#each techStack as tech}
      <li>{tech}</li>
    {/each}
  </ul>
</WorkExperience>

<style lang="scss">
  a {
    color: $purple;
    text-decoration: underline;

    &:hover {
      color: $darkGreen;
    }
  }
</style>
