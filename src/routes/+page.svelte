<script>
  import { onMount } from 'svelte';
  import { reveal } from 'svelte-reveal';

  import RepoCard from '../components/github_repo.svelte';
  import PillButton from '../components/base/pill_button.svelte'

  const skills = ['Arch Linux', 'C', 'C++', 'Bash', 'HTML5', 'CSS3', 'TailwindCSS', 'SCSS', 'Javascript', 'Svelte'];
  const githubRepos = ['sysfex', 'Miserable_Xfce', 'jash', 'mehedirm6244.github.io'];
  const twContent = ['student at morning', 'learner at noon', 'coder at midnight']; // Typewriter content

  let typewriter;
  let twContentIdx = 0, twContentLen = 0;

  let contactForm;

  function sendMail() {
    let subject = contactForm.title;
    let body = contactForm.content;

    location.href = `mailto:mehedirm6244@protonmail.com?subject=${subject}&body=${body}`;
  }

  function typeWriterWrite() {
    if (twContentLen < twContent[twContentIdx].length) {
      typewriter.textContent += twContent[twContentIdx].charAt(twContentLen++);
      setTimeout(typeWriterWrite, 100);
    } else {
      twContentIdx = (twContentIdx + 1) % twContent.length;
      setTimeout(typeWriterErase, 2000);
    }
  }

  function typeWriterErase() {
    typewriter.textContent = typewriter.textContent.slice(0, -1);
    setTimeout((twContentLen-- == 0)? typeWriterWrite : typeWriterErase, 50);
  }

  onMount(() => {
    typeWriterWrite();
  });
</script>

<main>

  <!-- Header -->
  <header class="h-screen flex align-middle justify-center items-center bg-bg-400" use:reveal={{ transition: "fly", y:20 }}>
    <div>
      <p class="text-3xl md:text-4xl font-semibold">Mehedi Rahman Mahi</p>
      <p class="text-xl md:text-2xl">
        I'm a <span bind:this={typewriter} class="text-green"></span>
        <span class="animate-blink">_</span>
      </p>
      <div class="mt-4 space-x-2">
        <PillButton href="#project"><i class="fa-solid fa-box mr-2"></i>Projects</PillButton>
        <PillButton href="/blogs"><i class="fa-solid fa-pen mr-2"></i>Blogs</PillButton>
      </div>
    </div>
  </header>


  <!-- My info -->  
  <section class="px-[5%] py-12 md:px-[10%] md:py-20" use:reveal={{ transition: "fly", y:20 }}>
    <div class="bg-bg-500 p-8 md:p-16 rounded-2xl md:mx-[7%]">
      <h1 class="text-2xl mb-3 font-semibold">About Me</h1>
      <p class="">
        I'm interested in frontend, competitive programming and computer science. I've been a passionate linux user since 2020 (<span class="text-blue">Arch</span> btw). I often code when relaxed, just to destroy my sanity. I'm looking forward to learning more geeky stuff and contributing to FOSS.
      </p>
      <p class="">
        Throughout my academic life, I've gained some ECAs through participating in different olympiads related to math, physics and programming. I've also contributed to several non-profit science based organizations through actively volunteering. I'm now preparing for entrance exams.
      </p>
    </div>
  </section>

  <!-- My Projects -->  
  <section class="px-[5%] py-12 md:px-[10%] md:py-20 bg-bg-500" id="project">
    <h1 class="text-2xl text-center font-semibold">My projects</h1>
    <p class="text-center">About which I tell <i>her mother</i>.</p>
    <div class="mt-8 space-y-3 sm:space-y-0 sm:flex flex-wrap align-middle items-center justify-center gap-5">
      {#each githubRepos as githubRepo, idx}
        <RepoCard repo="mehedirm6244/{githubRepo}" useReveal={{ transition: "fly", y:20, delay: 75*idx }} />
      {/each}
    </div>
  </section>

  <!-- Stuffs I'm used to -->  
  <section class="px-[5%] py-12 md:px-[10%] md:py-20" use:reveal={{ transition: "fly", y:20 }}>
    <div class="bg-bg-500 p-8 md:p-16 rounded-2xl md:mx-[7%]">
      <p class="text-2xl font-semibold">A set of things I'm used to</p>
      <p class="mb-6">Including operating systems, languages and frameworks</p>
      <div class="flex flex-row flex-wrap gap-2">
        {#each skills as skill, idx}
          <div class="bg-blue/5 text-blue px-3 py-1.5 rounded-lg font-semibold text-sm duration-100 hover:bg-blue/10" use:reveal={{ transition: "fly", y:20, delay: 75*idx }}>
            {skill}
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- E-mail form -->
  <section class="px-[5%] py-12 md:px-[10%] md:py-20" use:reveal={{ transition: "fly", y:20 }}>
    <h1 class="text-2xl text-center font-semibold">Want to contact me?</h1>
    <p class="text-center">
      Use this form below or mail to <a href="mailto:mehedirm6244@protonmail.com" class="text-blue hover:underline">mehedirm6244@protonmail.com</a>
    </p>
    <div class="mx-auto w-10/12 md:w-2/3 mt-8">
      <form action=”mailto:mehedirm6244@protonmail.com” autocomplete="off" bind:this={contactForm} on:submit|preventDefault={sendMail}>
        <p class="text-xl font-semibold">Title</p>
        <input placeholder="Title" class="block w-full bg-bg-500 px-6 py-4 rounded-xl my-4">

        <p class="text-xl font-semibold mb-2">Content</p>
        <textarea placeholder="Content" class="block w-full resize-none bg-bg-500 px-6 py-4 rounded-xl my-4"></textarea>

        <div class="flex justify-center mt-8">
          <input type="submit" value="Send as Email" class="text-sm px-4 py-2.5 rounded-full font-semibold duration-100 bg-lightGray text-bg-500 hover:bg-white hover:cursor-pointer">
            
        </div>
      </form>
    </div>
  </section>

</main>