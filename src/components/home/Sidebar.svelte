<script lang='ts'>
	import { fly } from "svelte/transition";
    import { isSideOpen } from "../../stores/store";
    import 'iconify-icon'
	import { onMount } from "svelte";

    let match = false
    onMount(() => {
        match = window.matchMedia("(min-width : 700px)").matches
    })

</script>

{#if $isSideOpen}
        <aSide transition:fly={{duration : 300, x : 300}} class="w-screen h-screen pt-8 fixed top-0 left-0 bg-stone-900 z-10 flex flex-col justify-around items-center">
            <a  on:click={() => isSideOpen.set(!$isSideOpen)} class="text-3xl text-stone-300 text-center md:text-5xl" href="#home">Home</a>
            <a on:click={() => isSideOpen.set(!$isSideOpen)}  class="text-3xl text-stone-300 text-center md:text-5xl" href="#work">Work</a>
            <a  on:click={() => isSideOpen.set(!$isSideOpen)} class="text-3xl text-stone-300 text-center md:text-5xl" href="#contact">Contact</a>
            <div class="flex justify-around items-center gap-2">
                <a href="https://github.com/petersahanaya" referrerpolicy="no-referrer" rel="noreferrer" target="_blank">
                    <iconify-icon icon=mdi:github width={`${match ? "60" : "40"}`} height={`${match ? "60" : "40"}`} class="text-stone-200"/>
                </a>
                <a href="https://linkedin.com/in/peter-sahanaya" target="_blank" rel="noreferrer">
                    <iconify-icon icon=mdi:linkedin width={`${match ? "60" : "40"}`} height={`${match ? "60" : "40"}`} class="text-stone-200"/>
                </a>
            </div>
    </aSide>
{/if}