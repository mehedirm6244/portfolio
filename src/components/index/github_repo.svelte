<script>
  import { onMount } from 'svelte';
  import { reveal } from 'svelte-reveal';

  import { Star } from "lucide-svelte";
  import { Code } from "lucide-svelte";
  import { GitFork } from "lucide-svelte";

  export let repo;
  export let useReveal;
  let repoDesc = '';
  let repoForks = '';
  let repoLang = '';
  let repoStars = '';
  onMount(async () => {
    let resp = await fetch(`https://api.github.com/repos/${repo}`);
    let info = await resp.json();
    repoStars = info.stargazers_count;
    repoDesc = info.description;
    repoForks = info.forks_count;
    repoLang = info.language;
  });
</script>

<div class="bg-bg-400 p-6 md:p-8 rounded-lg shadow-sm sm:w-80 duration-100 hover:shadow-lg" use:reveal={useReveal}>
  <h3 class="text-lg font-medium truncate hover:underline">
    <a href="https://github.com/{repo}" target="_blank">{repo}</a>
  </h3>
  <p class="text-md h-12 md:h-14 overflow-auto text-gray">{repoDesc}</p>
  <div class="mt-2 space-x-4 text-sm text-white">
    <button class="hover:cursor-default">
      <Code size={16} strokeWidth={2.5} class="inline-block mr-1 -mt-0.5 text-blue" />{repoLang}
    </button>
    <button class="hover:cursor-default">
      <Star size={16} class="inline-block mr-1 -mt-0.5 text-yellow fill-yellow" />{repoStars}
    </button>
    <button class="hover:cursor-default">
      <GitFork size={16} class="inline-block mr-1 -mt-0.5 text-magenta" />{repoForks}
    </button>
  </div>
</div>