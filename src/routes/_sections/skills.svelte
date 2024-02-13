<script lang="ts">
  import {
    frameworks,
    languages,
    programmingLanguages,
    services,
    skills,
  } from '$lib/data/skills';
  import SkillsAccordion from '$lib/components/SkillsAccordion.svelte';

  let openSec = 0;

  function handleOpen(sec: number) {
    openSec = sec;
  }
</script>

<section class="fullPage" aria-labelledby="techStack" id="skills">
  <h2 id="techStack">Skills and Tech Stack</h2>

  <SkillsAccordion
    isOpen={openSec === 0}
    handleOpen={() => handleOpen(0)}
    skills={frameworks}
  >
    Frameworks & Libraries
  </SkillsAccordion>
  <SkillsAccordion
    isOpen={openSec === 1}
    handleOpen={() => handleOpen(1)}
    skills={programmingLanguages}
  >
    Programming Languages
  </SkillsAccordion>
  <SkillsAccordion
    isOpen={openSec === 2}
    handleOpen={() => handleOpen(2)}
    {skills}
  >
    Skills
  </SkillsAccordion>
  <SkillsAccordion
    isOpen={openSec === 3}
    handleOpen={() => handleOpen(3)}
    skills={services}
  >
    Services
  </SkillsAccordion>
  <SkillsAccordion
    isOpen={openSec === 4}
    handleOpen={() => handleOpen(4)}
    skills={languages}
  >
    Languages
  </SkillsAccordion>
</section>

<style lang="scss">
  section {
    padding: 4rem;
  }

  h2 {
    font-size: 6rem;
    text-align: center;
  }
</style>
