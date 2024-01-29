<script lang="ts">
  import WorkExperience from '$lib/components/WorkExperience.svelte';

  const techStack = ['React Native', 'JavaScript', 'AWS Lambda'];
</script>

<WorkExperience isLast>
  <svelte:fragment slot="title">Trust Science</svelte:fragment>
  <svelte:fragment slot="role">Summer Intern</svelte:fragment>
  <svelte:fragment slot="duration">May 2018 - Aug. 2018</svelte:fragment>
  <ul slot="tasks" class="tasks">
    <li>
      Assisted in refactoring the mobile application to approximately 60% of its
      original size
    </li>
    <li>Improved the sign up process through UI/UX improvements</li>
    <li>Created a text message sign up verification process via AWS Lambda</li>
  </ul>
  <ul class="techStack" slot="techStack">
    {#each techStack as tech}
      <li>{tech}</li>
    {/each}
  </ul>
</WorkExperience>
