<script lang="ts">
  export let href: string;
</script>

<a {href}>
  <h3><slot name="title" /></h3>
  <i><slot name="role" /></i>
  <time><slot name="duration" /></time>
  <span class="readMore">Read more</span>
</a>

<style lang="scss">
  a {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: 100%;
    min-height: 15rem;
    padding: 2rem;
    color: black;
    text-align: start;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px #fff;

    &:hover {
      @include linearGradient(45deg);

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
