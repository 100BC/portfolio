<div class="card">
  <h3><slot name="title" /></h3>
  <h4><slot name="role" /></h4>
  <time><slot name="duration" /></time>
  <slot name="tasks" />

  <h4>Tech Stack</h4>
  <slot name="techStack" class="techStack" />
</div>

<style lang="scss">
  .card {
    padding: 2rem;
    margin: auto;
    color: #000;
    background-color: #fff;
    border-radius: $borderRadius;
  }

  :global(ul.tasks) {
    max-width: 80ch;
    margin-top: 1rem;
  }

  :global(ul.techStack) {
    display: flex;
    flex-wrap: wrap;
    gap: 1ch;
    padding: 0;
    list-style: none;

    > :global(li) {
      &:not(:last-of-type) {
        &::after {
          content: ' |';
        }
      }
    }
  }
</style>
