<script>
  export let href;
  export let extendedClass;
</script>

<a {href}>
  <button class="text-sm px-4 py-2.5 rounded-full font-semibold duration-100 bg-lightGray text-bg-500 shadow-sm hover:bg-white {extendedClass}" {...$$restProps}>
    <slot />
  </button>
</a>