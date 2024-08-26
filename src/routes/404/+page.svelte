<script>
  import PillButton from '../../components/base/pill_button.svelte';
  import { reveal } from 'svelte-reveal';
</script>

<div class="h-screen -mt-20 flex align-middle items-center justify-center">
  <div class="flex flex-col items-center gap-2" use:reveal={{ transition: "fly", y:20 }}>
    <h1 class="text-6xl font-medium">404</h1>
    <h3 class="text-xl">
      <a href="https://en.wikipedia.org/wiki/List_of_HTTP_status_codes" class="text-blue hover:underline">
        What do these codes mean?
      </a>
    </h3>
    <PillButton href="/" extendedClass="mt-6"><i class="fa fa-angle-left mr-2"></i>Return Home</PillButton>
  </div>
</div>