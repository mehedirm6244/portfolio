<script>
  import { onMount } from 'svelte';
  import { reveal } from 'svelte-reveal';

  import pfp from '../../assets/pfp.png';

  let scrolledState = false;
  let navMenuToggled = false;

  const navbarLinks = [
    {
      link: '/',
      caption: 'Home'
    },
    {
      link: '/#project',
      caption: 'Projects'
    },
    {
      link: '/blogs',
      caption: 'Blogs'
    }
  ];

  onMount(() => {
    document.addEventListener("scroll", ()=> {
      let scrolled = document.body.scrollTop || document.documentElement.scrollTop;
      scrolledState = (scrolled > 50);
    })
  });
</script>

<nav class="sticky h-20 px-6 top-0 left-0 right-0 z-40 flex align-middle items-center justify-between bg-bg-400 duration-300" class:shadow-lg={scrolledState}>

  <!-- Left section -->
  <div class="flex items-center align-middle justify-between space-x-2">
    <a href="/" class="duration-100 rounded-md hover:bg-white/5">
      <div class="flex align-middle items-center space-x-2 px-3 py-2">
        <img class="h-[32px] rounded-full" src={pfp} alt="Pfp">
        <div class="text-md font-semibold">mehedirm6244</div>
      </div>
    </a>
  </div>

  <!-- Right section -->
  <div class="pr-2">
    <!-- Show this button only on small screens -->
    <button class="block md:hidden h-8 w-8 rounded-md hover:bg-bg-300 text-center leading-7" class:bg-bg-200={navMenuToggled} on:click={() => { navMenuToggled = !navMenuToggled }}>
      <i class="fa {navMenuToggled ? 'fa-xmark' : 'fa-bars'}"></i>
    </button>

    <div class="absolute top-16 right-6 p-2 w-52 bg-bg-100 rounded-lg md:static md:flex md:align-middle md:justify-center md:items-center md:top-0 md:right-0 md:p-0 md:w-auto md:block md:space-x-3 md:bg-transparent" class:hidden={!navMenuToggled}>
      {#each navbarLinks as navbarLink, idx}
        <a href={navbarLink.link} class="block px-4 py-1 font-medium md:inline-block md:p-0 hover:underline" use:reveal={{ transition: "fly", y:-20, delay: 150*idx }}>
          {navbarLink.caption}
        </a>
      {/each}
    </div>
  </div>
</nav>