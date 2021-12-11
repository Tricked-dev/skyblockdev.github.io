<script>
  export let links;
</script>

{#each links as link}
  <div class="">
    <a href={link.route} class="lg:text-2xl text-lg btn btn-ghost rounded-btn ">
      {link.name}
    </a>
  </div>
{/each}
