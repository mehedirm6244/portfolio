<script>
  import "../app.css";
  import '@fortawesome/fontawesome-free/css/all.min.css'

  import PreLoader from '../components/base/preloader.svelte';
  import NavBar from '../components/base/navbar.svelte';
  import MagicCursor from '../components/base/magic_cursor.svelte';
  import ScrollTop from '../components/base/scroll_top.svelte';
  import ContextMenu from '../components/base/contextmenu.svelte';
  import Footer from '../components/base/footer.svelte'
</script>

<PreLoader />
<ContextMenu />
<NavBar />
<MagicCursor />

<slot />

<ScrollTop />
<Footer />