<script>
  import { onMount } from 'svelte';
  import toast from 'svelte-french-toast'

  let contextMenu;
  let clickTarget;
  let clipboard = navigator.clipboard;
  let showContextMenu = false;
  let onTextInput = false;
  let onLink = false;

  let clickPosition = { x:0, y:0 };

  const commonItems = [
    {
      text: 'Copy selection',
      action: () => {
        if (clipboard) {
          clipboard.writeText(window.getSelection().toString());
          toast.success("Copied to clipboard");
        } else {
          toast.error("Failed to copy");
        }
      }
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
        if (clipboard) {
          clipboard.writeText(window.getSelection().toString());
          window.getSelection().deleteFromDocument();
          toast.success("Cut to clipboard");
        } else {
          toast.error("Failed to cut");
        }
      }
    },
    {
      text: 'Paste',
      action: async () => {
        if (clipboard) {
          const text = await navigator.clipboard.readText();
          clickTarget.value += text;
        } else {
          toast.error("Failed to paste");
        }
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
      action: () => {
        if (clipboard) {
          clipboard.writeText(clickTarget.href)
          toast.success("Copied to clipboard");
        } else {
          toast.error("Failed to copy");
        }
      }
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
    // Check if clipboard permission exists for enabling to paste
    navigator.permissions.query({name:'clipboard-read'}).then((result) => {
      if (result.state == 'denied' || result.state == 'prompt') {
        toast.error("Reading from clipboard is denied. Pasting will not work.", { duration: 5000 });
      }
    });

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

<div bind:this={contextMenu} class="z-50 bg-bg-100 w-56 shadow-md p-2 rounded-lg select-none fixed" class:hidden={!showContextMenu} style="top:{clickPosition.y}px; left:{clickPosition.x}px">
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