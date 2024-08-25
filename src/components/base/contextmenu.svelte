<script>
  import { onMount } from 'svelte';
  import { reveal } from 'svelte-reveal';

  let contextMenu;
  let showContextMenu = false;
  let clickPosition = { x:0, y:0 };

  const commonItems = [
    {
      text: 'Copy selection',
      action: () => navigator.clipboard.writeText(window.getSelection().toString())
    },
    {
      text: 'Source repository',
      action: () => window.open('https://github.com/mehedirm6244/mehedirm6244.github.io', '_blank')
    }
  ];

  onMount(() => {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      const mouseX = e.clientX || e.touches?.[0].clientX;
      const mouseY = e.clientY || e.touches?.[0].clientY;
      const { height: menuHeight, width: menuWidth } = contextMenu.getBoundingClientRect();
      const { innerWidth: width, innerHeight: height } = window;
      clickPosition.x = (width - mouseX <= menuWidth) ? width - menuWidth - 20 : mouseX;
      clickPosition.y = (height - mouseY <= menuHeight) ? mouseY - menuHeight - 20 : mouseY;
      showContextMenu = true;
    });

    document.addEventListener("click", function(e) {
      showContextMenu = false;
    });
  });
</script>

<div bind:this={contextMenu} class="z-50 bg-bg-100 w-56 shadow-lg p-2 rounded-lg select-none fixed" class:hidden={!showContextMenu} style="top:{clickPosition.y}px; left:{clickPosition.x}px">
  {#each commonItems as commonItem}
    <button class="px-4 py-1 font-base block w-full text-left rounded hover:bg-white/10" on:click={commonItem.action}>
      {commonItem.text}
    </button>
  {/each}
</div>