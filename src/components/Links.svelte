<script>
  export let links;
</script>

{#each links as link}
  <li>
    <a href={link.route} class="btn btn-ghost btn-sm rounded-btn">
      {link.name}
    </a>
  </li>
{/each}
