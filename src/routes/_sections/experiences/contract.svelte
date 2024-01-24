<script lang="ts">
  import WorkExperience from '$lib/components/WorkExperience.svelte';
</script>

<WorkExperience>
  <svelte:fragment slot="title">Contract Work</svelte:fragment>
  <svelte:fragment slot="role">Web Developer</svelte:fragment>
  <svelte:fragment slot="duration">2020 - present</svelte:fragment>
  Creating Website for local businesses
  <ul slot="tasks" class="tasks">
    <li>
      <a href="https://www.jyoupsychology.ca">https://www.jyoupsychology.ca</a>
    </li>

    <li>
      <a href="https://www.bbrosfinishing.ca">https://www.bbrosfinishing.ca</a>
    </li>
  </ul>
  <ul class="techStack" slot="techStack">
    <li>React.js</li>
    <li>Next.js</li>
    <li>Firebase</li>
    <li>TypeScript</li>
    <li>HTML</li>
    <li>Svelte</li>
    <li>Sveltekit</li>
    <li>SCSS</li>
  </ul>
</WorkExperience>
