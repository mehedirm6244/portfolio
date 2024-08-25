<script>
  import { onMount } from 'svelte';

  let preloader;

  onMount(() => {
    preloader.style.display = 'none';
  });
</script>

<div class="fixed h-full w-full top-0 left-0 z-[1010] bg-bg-600 flex align-middle items-center justify-center" bind:this={preloader}>
  <div class="loader"></div>
</div>

<style lang="postcss">
  .loader {
    width: 50px;
    aspect-ratio: 1;
    display: grid;
    border: 4px solid #0000;
    border-radius: 50%;
    border-right-color: theme("colors.white");
    animation: l15 1s infinite linear;
  }
  .loader::before,
  .loader::after {    
    content: "";
    grid-area: 1/1;
    margin: 2px;
    border: inherit;
    border-radius: 50%;
    animation: l15 2s infinite;
  }
  .loader::after {
    margin: 8px;
    animation-duration: 3s;
  }
  @keyframes l15 { 
    100% { transform: rotate(1turn) }
  }
</style>