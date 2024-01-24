<script lang="ts">
  export let fn: () => void;
</script>

<button type="button" on:click={fn}>
  <h3><slot name="title" /></h3>
  <i><slot name="role" /></i>
  <time><slot name="duration" /></time>
  <span class="readMore">Read more</span>
</button>

<style lang="scss">
  button {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: 100%;
    min-height: 150px;
    padding: 2rem;
    color: black;
    text-align: start;
    background: 0;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px #fff;

    &:hover {
      @include linearGradient(45deg);

      color: white;

      > h3 {
        font-size: 3rem;
      }

      > .readMore {
        color: inherit;
      }
    }
  }

  i {
    font-size: 2rem;
  }

  h3 {
    margin: 0;
    font-size: 2.4rem;
    transition: font-size 0.2s;
  }

  .readMore {
    position: absolute;
    right: 5px;
    bottom: 5px;
    font-style: italic;
    color: #636363;
  }
</style>
