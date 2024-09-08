<script context="module">
  import { toast } from 'svelte-french-toast';

  export async function Cut() {
    try {
      const selectedText = window.getSelection().toString();
      if (selectedText) {
        await navigator.clipboard.writeText(selectedText);
        document.execCommand('delete');
        toast.success('Cut to clipboard');
      } else {
        toast.error('Nothing to cut!');
      }
    } catch (error) {
      toast.error('Failed to cut');
    }
  }

  export async function Copy(text) {
    try {
      if (text) {
        await navigator.clipboard.writeText(text);
        toast.success('Copied to clipboard');
      } else {
        toast.error('Nothing to copy!');
      }
    } catch (error) {
      toast.error('Failed to copy');
    }
  }

  export async function Paste() {
    try {
      const text = await navigator.clipboard.readText();
      if (document.activeElement && 'value' in document.activeElement) {
        document.activeElement.value += text;
        toast.success('Pasted from clipboard');
      } else {
        toast.error('No input field focused');
      }
    } catch (error) {
      toast.error('Failed to paste. Does this site have access to reading clipboard?');
    }
  }
</script>
