<script lang='ts'>
	import { fly } from "svelte/transition";
    import { isSideOpen } from "../../stores/store";
    import 'iconify-icon'
</script>

{#if $isSideOpen}
        <aSide transition:fly={{duration : 300, x : 300}} class="w-screen h-screen pt-8 fixed top-0 left-0 bg-stone-900 z-10 flex flex-col justify-around items-center">
            <a  on:click={() => isSideOpen.set(!$isSideOpen)} class="text-3xl text-stone-300 text-center" href="#home">Home</a>
            <a on:click={() => isSideOpen.set(!$isSideOpen)}  class="text-3xl text-stone-300 text-center" href="#work">Work</a>
            <a  on:click={() => isSideOpen.set(!$isSideOpen)} class="text-3xl text-stone-300 text-center" href="#contact">Contact</a>
            <div class="flex justify-around items-center gap-2">
                <a href="https://github.com/petersahanaya" referrerpolicy="no-referrer" rel="noreferrer" target="_blank">
                    <iconify-icon icon=mdi:github width="50" height="50" class="text-stone-200"/>
                </a>
                <a href="https://linkedin.com/in/peter-sahanaya" target="_blank" rel="noreferrer">
                    <iconify-icon icon=mdi:linkedin width="50" height="50" class="text-stone-200"/>
                </a>
            </div>
    </aSide>
{/if}