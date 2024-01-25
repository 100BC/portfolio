<script lang="ts">
  import Head from '$lib/components/Head.svelte';
  import About from './_sections/about.svelte';
  import Contact from './_sections/contact.svelte';
  import Experience from './_sections/experience.svelte';
  import Intro from './_sections/intro.svelte';
  import Skills from './_sections/skills.svelte';
</script>

<Head
  noIndex
  image={{
    alt: 'Logo',
    height: 192,
    width: 192,
    url: 'https://www.otman.dev/android-chrome-192x192.png',
  }}
/>
<Intro />
<About />
<Experience />
<Skills />
<Contact />
