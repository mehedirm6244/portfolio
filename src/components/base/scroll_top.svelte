<script>
  import { onMount } from 'svelte';

  let hidden = true;

  onMount(() => {
    document.addEventListener("scroll", ()=> {
      const scrolled = document.body.scrollTop || document.documentElement.scrollTop;
      const threshold = window.innerHeight;
      hidden = (scrolled <= threshold);
    })
  });
</script>

<button class="fixed bottom-6 right-6 h-9 w-9 rounded-full bg-cyan text-bg-500 text-center leading-8 {hidden ? 'translate-x-[100px]' : 'translate-x-0'} duration-500 hover:cursor-pointer shadow-md hover:shadow-white/20 active:-translate-y-2 " on:click={() => { window.scrollTo(0, 0); }}>
  <i class="fa fa-arrow-up"></i>
</button>