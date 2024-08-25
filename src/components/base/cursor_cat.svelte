<script>
  import { onMount } from 'svelte';

  let cursorCat;
  let hideCat = true;

  onMount(() => {
    document.addEventListener("mousemove", (e)=> {
      cursorCat.animate({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`
      }, { duration: 750, fill: "forwards" })
    })

    document.body.addEventListener("mouseenter", () => {
      hideCat = false;
    });

    document.body.addEventListener("mouseleave", () => {
      hideCat = true;
    });
  });

</script>

<div class="fixed -top-6 -left-6 -mx-3 -my-3 h-6 w-6 rounded-full bg-lightGray/30 z-[999] pointer-events-none duration-500" class:opacity-0={hideCat} bind:this={cursorCat}></div>