<script lang="ts">
  export let noIndex = false;
  export let canonicalUrl = 'https://www.otman.dev';

  // Defaults
  export let title = 'Otman Maoued | Software Developer';
  export let description =
    'Online CV for Otman Maoued, a Software and Web Developer based in Canada';
  const siteName = 'Otman Maoued CV';

  // Social Media
  export let ogType = 'website'; // see https://ogp.me/#types
  export let twitterCard: 'summary' | 'summary_large_image' | 'app' | 'player' =
    'summary';

  // Image
  export let image:
    | { url: string; width: number; height: number; alt: string }
    | undefined = undefined;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonicalUrl} />
  {#if noIndex}
    <meta name="robots" content="noindex" />
  {/if}
  <!-- Open Graph -->
  <meta property="og:type" content={ogType} />
  <meta property="og:site_name" content={siteName} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonicalUrl} />
  <!-- Twitter -->
  <meta name="twitter:card" content={twitterCard} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <!-- Image -->
  {#if image}
    <meta property="og:image" content={image.url} />
    <meta property="og:image:alt" content={image.alt} />
    <meta property="og:image:width" content={image.width.toString()} />
    <meta property="og:image:height" content={image.height.toString()} />
    <meta name="twitter:image" content={image.url} />
    <meta name="twitter:image:alt" content={image.alt} />
  {/if}
</svelte:head>
