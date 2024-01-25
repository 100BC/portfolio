<div class="loader"></div>

<style lang="scss">
  $var:
    conic-gradient(#0000 10%, #000),
    linear-gradient(#000 0 0) content-box;

  .loader {
    width: 50px;
    aspect-ratio: 1;
    padding: 8px;
    background: $theme400;
    border-radius: 50%;
    mask: $var;
    mask-composite: source-out;
    mask-composite: subtract;
    animation: l3 1s infinite linear;
  }

  @keyframes l3 {
    to {
      transform: rotate(1turn);
    }
  }
</style>
