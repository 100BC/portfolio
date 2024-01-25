<script lang="ts">
  import { PUBLIC_WEB3FORM_KEY } from '$env/static/public';
  import Spinner from '$lib/components/Spinner.svelte';

  let submitting = 0;
  let error: unknown;
  let form: HTMLFormElement;

  async function handleSubmit() {
    submitting = 1;
    error = null;
    const formData = new FormData(form);
    const obj = Object.fromEntries(formData);
    const json = JSON.stringify(obj);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      });
      const data = await res.json();
      if (res.ok) {
        submitting = 2;
      } else {
        submitting = 0;
        error = data.message;
      }
    } catch (err) {
      error = err;
      submitting = 0;
    }
  }
</script>

<section aria-label="contact" class="fullPage" id="contact">
  <h2>Contact</h2>

  {#if submitting === 1}
    <div class="spinner">
      <Spinner />
    </div>
  {:else if submitting === 2}
    <b class="submitted">
      Message Sent
      <br />
      I'll reply as soon as possible!
    </b>
  {:else}
    <form on:submit|preventDefault={handleSubmit} bind:this={form}>
      {#if error}
        <b class="error">{error}</b>
      {/if}
      <input
        type="checkbox"
        name="botcheck"
        class="hidden"
        style="display: none;"
      />
      <input type="hidden" name="access_key" value={PUBLIC_WEB3FORM_KEY} />
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Message:
        <textarea name="message" required rows="4" maxlength="500"></textarea>
      </label>
      <button type="submit">Message</button>
    </form>
  {/if}
</section>

<style lang="scss">
  section {
    padding: 4rem;
  }

  h2 {
    font-size: 6rem;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 600px;
    margin: auto;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    border: 0;

    &:focus-within {
      outline: 2px solid $theme400;
    }
  }

  label {
    font-size: 2rem;
    font-weight: bold;
  }

  button {
    width: fit-content;
    min-width: 140px;
    padding: 1rem;
    font-weight: bold;
    color: #000;
    background-color: $theme400;
    border-radius: $borderRadius;

    &:hover {
      background-color: $theme600;
    }
  }

  .spinner {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .submitted {
    display: block;
    font-size: 2.4rem;
    color: greenyellow;
    text-align: center;
  }

  .error {
    padding: 1rem;
    font-size: 1.8rem;
    color: black;
    background-color: $theme300;
  }
</style>
