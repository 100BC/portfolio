<script lang="ts">
  import WorkExperience from '$lib/components/WorkExperience.svelte';

  const techStack = ['React.js', 'Next.js', 'TypeScript', 'JSX', 'SCSS'];
</script>

<WorkExperience>
  <svelte:fragment slot="title">Buddytree</svelte:fragment>
  <svelte:fragment slot="role">Web Developer</svelte:fragment>
  <svelte:fragment slot="duration">Feb. 2021 - Sept. 2021</svelte:fragment>
  <ul slot="tasks" class="tasks">
    <li>
      Assisted and then led the creation and design of a social media website
      for a startup, resulting in the successful launch of the Minimum Viable
      Product (MVP)
    </li>
    <ul><li>Coached a university intern on React best practices</li></ul>
    <li>
      Collaborated closely with the CEO to create new features based on Figma
      designs.
    </li>
  </ul>
  <ul class="techStack" slot="techStack">
    {#each techStack as tech}
      <li>{tech}</li>
    {/each}
  </ul>
</WorkExperience>
