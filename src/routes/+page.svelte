<script lang="ts">
	import Contact from "../components/Contact/Contact.svelte";
    import Content from "../components/home/Content.svelte";
    import Header from "../components/home/Header.svelte";
	import Sidebar from "../components/home/Sidebar.svelte";
	import Skills from "../components/Skills/Skills.svelte";
</script>

<main class="w-screen h-screen bg-stone-900">
    <Header/>
    <Content/>
    <Sidebar/>
</main>
<main class="w-screen h-screen bg-stone-900">
    <Skills/>
</main>
<main class="w-screen pb-8 bg-stone-900">
    <Contact/>
</main>