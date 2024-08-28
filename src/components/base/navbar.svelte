<script>
  import { onMount } from 'svelte';
  import { reveal } from 'svelte-reveal';

  import pfp from '../../assets/pfp.png';

  const navbarLinks = [
    {
      link: '/',
      caption: 'Home'
    },
    {
      link: '/#project',
      caption: 'Projects'
    },
  ];

  let scrolledState = false;
  let navMenuToggled = false;

  onMount(() => {
    document.addEventListener("scroll", ()=> {
      let scrolled = document.body.scrollTop || document.documentElement.scrollTop;
      scrolledState = (scrolled > 50);
    })
  });
</script>

<nav class="sticky h-20 px-6 top-0 left-0 right-0 z-40 flex align-middle items-center justify-between bg-bg-400 duration-300" class:shadow-lg={scrolledState}>

  <!-- Left section -->
  <div class="flex items-center align-middle justify-between space-x-2" use:reveal={{ transition: "fly", y:-20 }}>
    <a href="/" class="duration-100 rounded-md hover:bg-white/5">
      <div class="flex align-middle items-center space-x-2 px-3 py-2">
        <img class="h-[32px] rounded-full" src={pfp} alt="Profile Picture">
        <div class="text-md font-semibold">mehedirm6244</div>
      </div>
    </a>
  </div>

  <!-- Right section -->
  <div class="pr-2" use:reveal={{ transition: "fly", y:-20, delay: 200 }}>
    <!-- Show this button on small screens only -->
    <button class="block md:hidden h-8 w-8 rounded-md hover:bg-bg-300 text-center leading-7" class:bg-bg-200={navMenuToggled} on:click={() => { navMenuToggled = !navMenuToggled }}>
      <i class="fa {navMenuToggled ? 'fa-xmark' : 'fa-bars'}"></i>
    </button>

    <div class="fixed top-16 right-6 px-6 py-4 w-52 bg-bg-100 rounded-lg flex gap-2 flex-col md:flex-row md:static md:items-center md:top-0 md:right-0 md:p-0 md:w-auto md:gap-4 md:bg-transparent {!navMenuToggled ? 'hidden md:flex' : ''}">

      {#each navbarLinks as navbarLink}
        <a href={navbarLink.link} class="font-medium hover:underline">
          {navbarLink.caption}
        </a>
      {/each}

      <div class="mt-2 md:m-0">
        <a href="https://github.com/mehedirm6244" target="_blank">
          <button class="h-10 w-10 bg-lightGray/10 md:shadow-sm rounded-md text-center hover:bg-white/15">
            <i class="fa-brands fa-github text-lg mt-1"></i>
          </button>
        </a>
      </div>

    </div>
  </div>
</nav>