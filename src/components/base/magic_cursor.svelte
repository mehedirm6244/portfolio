<script>
  import { onMount } from 'svelte';

  let magicCursor;
  let hideCursor = false;

  function updatePosition(event) {
    magicCursor.animate({
      left: `${event.clientX}px`,
      top: `${event.clientY}px`
    }, { duration: 750, fill: "forwards" });
  }

  function simulateClick() {
    magicCursor.animate([
      { scale: 1 },
      { scale: .5 }, 
      { scale: 1 },
    ], { duration: 100, fill: "forwards" });
  }

  onMount(() => {
    if ("ontouchstart" in document.documentElement) {
      console.log('Touch input detected. Disabling magic cursor');
    } else {
      document.addEventListener("mousemove", (e) => { updatePosition(e) });
      document.addEventListener("click", () => { simulateClick() });
      document.addEventListener("contextmenu", () => { simulateClick() });
      document.body.addEventListener("mouseenter", () => { hideCursor = false; });
      document.body.addEventListener("mouseleave", () => { hideCursor = true; });
    }
  });

</script>

<div class="fixed -top-6 -left-6 -mx-3 -my-3 h-6 w-6 rounded-full bg-gray/30 z-[9999] pointer-events-none duration-500" class:opacity-0={hideCursor} bind:this={magicCursor}></div>