<script>
  import { onMount } from 'svelte';
  import { reveal } from 'svelte-reveal';

  import toast from 'svelte-french-toast'
  import RepoCard from '../components/index/github_repo.svelte';
  import PillButton from '../components/base/pill_button.svelte'

  import { Box } from "lucide-svelte";

  const skills = ['Linux', 'C', 'C++', 'BASH', 'HTML5', 'CSS3', 'TailwindCSS', 'SCSS', 'Javascript', 'Svelte'];
  const githubRepos = [
    'mehedirm6244/sysfex', 'mehedirm6244/Miserable_Xfce', 'mehedirm6244/jash', 'mehedirm6244/mehedirm6244.github.io'
  ];
  const twContent = ['a student', 'an enthusiast', 'a programmer']; // Typewriter content

  let typewriter;
  let twContentIdx = 0, twContentLen = 0;

  let contactForm;

  function sendMail() {
    let subject = contactForm.title.value;
    let body = contactForm.content.value;

    if (subject == '' || body == '') {
      toast.error("Please fill out the form correctly");
    } else {
      location.href = `mailto:mehedirm6244@protonmail.com?subject=${subject}&body=${body}`;
    }
  }

  function typeWriterWrite() {
    if (twContentLen < twContent[twContentIdx].length) {
      typewriter.textContent += twContent[twContentIdx].charAt(twContentLen++);
      setTimeout(typeWriterWrite, 100);
    } else {
      twContentIdx = (twContentIdx + 1) % twContent.length;
      setTimeout(typeWriterErase, 3000);
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
  <header class="h-screen -mt-20 flex align-middle justify-center items-center bg-bg-400">
    <div use:reveal={{ transition: "slide", x: -80, easing: 'easeOutBack', reset: true }}>
      <p class="text-3xl md:text-4xl font-medium">Mehedi Rahman Mahi</p>
      <p class="text-xl md:text-2xl">
        I'm <span bind:this={typewriter} class="text-green"></span>
        <span class="animate-blink">_</span>
      </p>
      <div class="mt-4 space-x-2" use:reveal={{ transition: "slide", x:-10, delay: 100 }}>
        <PillButton href="#project"><Box size={16} class="inline-block mr-1 -mt-0.5"/>Projects</PillButton>
      </div>
    </div>
  </header>

  <!-- About Me -->  
  <section class="px-[5%] py-12 md:px-[10%] md:py-20">
    <div class="bg-bg-500 p-12 md:p-16 rounded-2xl md:mx-[7%]" use:reveal={{ transition: "slide", x: -80, easing: 'easeOutBack' }}>
      <h1 class="text-2xl mb-1 font-medium">About Me</h1>
      <p>
        I'm a high schooler and linux enthusiast (<span class="text-blue font-medium">Arch</span> btw) from Dhaka, Bangladesh. I'm looking forward to learning more geeky stuff and contributing to FOSS. Throughout my academic life, I've gained some ECAs through participating in different olympiads related to math, physics and programming. I've also contributed to several non-profit science based organizations through actively volunteering. Currently I'm preparing for entrance exams.
      </p>
    </div>
  </section>

  <!-- My Projects -->  
  <section class="px-[5%] py-12 md:px-[10%] md:py-20 bg-bg-500" id="project">
    <h1 class="text-2xl text-center font-medium">My works</h1>
    <p class="text-center">Because actions speak louder than words</p>
    <div class="mt-8 space-y-3 sm:space-y-0 sm:flex flex-wrap align-middle items-center justify-center gap-5">
      {#each githubRepos as githubRepo, idx}
        <RepoCard repo={githubRepo} useReveal={{ transition: "fly", y:20, duration: 500, delay: 75*idx }} />
      {/each}
    </div>
  </section>

  <!-- Stuffs I'm used to -->  
  <section class="px-[5%] py-12 md:px-[10%] md:py-20">
    <div class="bg-bg-500 p-12 md:p-16 rounded-2xl md:mx-[7%]" use:reveal={{ transition: "slide", x: -80, easing: 'easeOutBack' }}>
      <p class="text-2xl font-medium">A set of things I'm used to</p>
      <p class="mb-6">Including operating systems, languages and frameworks</p>
      <div class="flex flex-row flex-wrap gap-2">
        {#each skills as skill, idx}
          <div class="bg-blue/5 text-blue px-3 py-1.5 rounded-lg font-medium text-sm duration-100 hover:bg-blue/10" use:reveal={{ transition: "spin fly", rotate: -5, y:-20, duration: 500, delay: 50*idx }}>
            {skill}
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- E-mail form -->
  <section class="px-[5%] pt-6 pb-16 md:px-[10%]" use:reveal={{ transition: "fly", y: 50 }}>
    <h1 class="text-2xl text-center font-medium">Get in touch</h1>
    <p class="text-center">
      Use this form below or mail to <a href="mailto:mehedirm6244@protonmail.com" class="text-blue hover:underline">mehedirm6244@protonmail.com</a>
    </p>
    <div class="mx-auto w-10/12 md:w-2/3 mt-8">
      <form action=”mailto:mehedirm6244@protonmail.com” autocomplete="off" bind:this={contactForm} on:submit|preventDefault={sendMail}>
        <p class="text-xl font-medium">Title</p>
        <input name="title" placeholder="Title" class="block w-full bg-bg-500 px-6 py-4 rounded-xl my-4 placeholder:text-gray">

        <p class="text-xl font-medium mb-2">Content</p>
        <textarea name="content" placeholder="Content" rows="4" class="block w-full resize-none bg-bg-500 px-6 py-4 rounded-xl my-4 placeholder:text-gray"></textarea>

        <div class="flex justify-center mt-8">
          <input type="submit" value="Send as Email" class="text-sm px-4 py-2.5 rounded-full font-medium duration-100 bg-gray text-bg-500 hover:bg-white hover:cursor-pointer active:scale-90">
        </div>

      </form>
    </div>
  </section>

</main>