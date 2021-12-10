<script>
  export let links;
</script>

{#each links as link}
  <a href={link.route} class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-lg">
    {link.name}
  </a>
{/each}
