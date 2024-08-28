<script>
  import { onMount } from 'svelte';

  let contextMenu;
  let clickTarget;
  let showContextMenu = false;
  let onTextInput = false;
  let onLink = false;

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

  const inputItems = [
    {
      text: 'Cut',
      action: () => {
        navigator.clipboard.writeText(window.getSelection().toString());
        window.getSelection().deleteFromDocument();
      }
    },
    {
      text: 'Paste',
      action: async () => {
        const text = await navigator.clipboard.readText();
        clickTarget.value += text;
      }
    }
  ]

  const linkItems = [
    {
      text: 'Open in new tab',
      action: () => window.open(clickTarget.href, '_blank')
    },
    {
      text: 'Copy link',
      action: () => navigator.clipboard.writeText(clickTarget.href)
    }
  ]

  function positionContextMenu(event) {
    clickPosition.x = event.clientX || event.touches?.[0].clientX;
    clickPosition.y = event.clientY || event.touches?.[0].clientY;
  }

  function isWithinAnchor(element) {
    if (element.tagName.toLowerCase() === 'a') {
      clickTarget = element;
      return true;
    } else if (element.parentElement) {
      return isWithinAnchor(element.parentElement);
    } else {
      return false;
    }
  }

  onMount(() => {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      clickTarget = e.target;
      let targetTag = clickTarget.tagName.toLowerCase();

      onTextInput = (targetTag === 'input' || targetTag === 'textarea');
      onLink = isWithinAnchor(clickTarget);

      positionContextMenu(e);
      showContextMenu = true;
    });

    document.addEventListener("click", function(e) {
      showContextMenu = false;
    });
  });
</script>

<div bind:this={contextMenu} class="z-50 bg-bg-100 w-56 shadow-lg p-2 rounded-lg select-none fixed" class:hidden={!showContextMenu} style="top:{clickPosition.y}px; left:{clickPosition.x}px">
  {#if onLink}
    {#each linkItems as linkItem}
      <button class="px-4 py-1 font-base block w-full text-left rounded hover:bg-white/10" on:click={linkItem.action}>
        {linkItem.text}
      </button>
    {/each}
  {/if}
  {#if onTextInput}
    {#each inputItems as inputItem}
      <button class="px-4 py-1 font-base block w-full text-left rounded hover:bg-white/10" on:click={inputItem.action}>
        {inputItem.text}
      </button>
    {/each}
  {/if}
  {#each commonItems as commonItem}
    <button class="px-4 py-1 font-base block w-full text-left rounded hover:bg-white/10" on:click={commonItem.action}>
      {commonItem.text}
    </button>
  {/each}
</div>