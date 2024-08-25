<script>
  export let href;
</script>

<a {href}>
  <button class="text-sm px-4 py-2.5 rounded-full font-semibold duration-100 bg-lightGray text-bg-500 hover:bg-white" {...$$restProps}>
    <slot />
  </button>
</a>