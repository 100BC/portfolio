<script lang="ts">
  import WorkExperience from '$lib/components/WorkExperience.svelte';

  const techStack = [
    'Ruby on Rails',
    'JavaScript',
    'TypeScript',
    'jQuery',
    'CouchDB',
    'SQL',
    'RSpec',
    'HTML',
    'SCSS',
    'Svelte',
    'Sveltekit',
    'CouchDB',
    'React.js',
    'Docker',
    'Gitlab CI/CD',
    'Google Cloud Platform',
  ];
</script>

<WorkExperience isFirst>
  <svelte:fragment slot="title">Igniter Tickets</svelte:fragment>
  <svelte:fragment slot="role">Software Developer</svelte:fragment>
  <svelte:fragment slot="duration">Feb. 2022 - Nov. 2023</svelte:fragment>
  <ul slot="tasks" class="tasks">
    <li>
      Led a small team to replace a legacy product resulting in a significant
      reduction of the company's operational costs by eliminating vendor lock-in
      and the improvement of UI/UX.
      <ul>
        <li>
          Conducted a successful field test of the beta product, receiving
          positive feedback from the client
        </li>
        <li>
          Coached a Junior Developer on software development best practices.
        </li>
      </ul>
    </li>
    <li>
      Completed the creation of a new client requested feature meeting the set
      deadline, leading to a new client acquisition in a key market.
    </li>
    <li>
      Enhanced the email delivery system, significantly improving the delivery
      rate.
    </li>
    <li>
      Resolved N+1 performance issues through extensive SQL query optimizations,
      reducing time to first byte on key pages by upwards of 300ms.
    </li>
    <li>
      Created tailored website themes to match the unique brand aesthetics for
      new clients.
    </li>
  </ul>
  <ul class="techStack" slot="techStack">
    {#each techStack as tech}
      <li>{tech}</li>
    {/each}
  </ul>
</WorkExperience>
