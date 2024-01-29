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
  $h3FontSize: 2.4rem;

  a {
    container-type: inline-size;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: 100%;
    min-height: 15rem;
    padding: 2rem;
    color: $black;
    text-align: start;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px #fff;

    &:hover,
    &:focus-visible {
      @include linearGradient(45deg);

      color: $white;

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
    font-size: $h3FontSize;
    transition: font-size 0.2s;
  }

  .readMore {
    position: absolute;
    right: 5px;
    bottom: 5px;
    font-style: italic;
    color: #636363;
  }

  @container (max-width: 200px) {
    a:hover > h3 {
      font-size: $h3FontSize;
    }

    i {
      display: none;
    }

    h3 {
      margin-bottom: 0;
    }
  }
</style>
