<script>
  import { onMount } from 'svelte';
  import { reveal } from 'svelte-reveal';

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

<div class="bg-bg-400 p-6 md:p-8 rounded-lg w-screen shadow-sm sm:w-80 duration-100 hover:shadow-lg" use:reveal={useReveal}>
  <h3 class="text-lg font-semibold truncate hover:underline">
    <a href="https://github.com/{repo}" target="_blank">{repo}</a>
  </h3>
  <p class="text-md h-12 md:h-14 overflow-auto">{repoDesc}</p>
  <div class="mt-2 space-x-4 text-sm text-white">
    <button><i class="fa-solid fa-code mr-1 text-blue"></i> {repoLang}</button>
    <button><i class="fa-solid fa-star mr-1 text-yellow"></i> {repoStars}</button>
    <button><i class="fa-solid fa-code-fork mr-1 text-magenta"></i> {repoForks}</button>
  </div>
</div>