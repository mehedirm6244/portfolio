<script>
  import { onMount } from 'svelte';

  let hidden = true;

  onMount(() => {
    const threshold = window.innerHeight / 2;
    document.addEventListener("scroll", ()=> {
      const scrolled = document.body.scrollTop || document.documentElement.scrollTop;
      hidden = (scrolled <= threshold);
    })
  });
</script>

<button class="fixed bottom-6 right-6 h-9 w-9 rounded-full bg-bg-100 text-cyan text-center leading-8 duration-500 shadow hover:cursor-pointer active:-translate-y-2" class:translate-x-[100px]={hidden} on:click={() => { window.scrollTo(0, 0); }}>
  <i class="fa fa-arrow-up"></i>
</button>