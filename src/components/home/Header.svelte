<script lang='ts'>
    import { isSideOpen } from "../../stores/store";
</script>

<header class="w-screen bg-stone-900 h-[12vh] flex justify-around items-center fixed top-0 z-20 right-0">
    <div class="flex justify-around items-center gap-2">
        <img class="w-[50px] h-[50px] md:w-[80px] md:h-[80px] shadow-md shadow-white/10 rounded-full object-cover" width="40" height="40" src="/profile.webp" alt="peter sahanaya photo profile" />
        <p class="text-[.8rem] md:text-xl text-stone-200">Peter Sahanaya</p>
    </div>
    <div on:click={() => isSideOpen.set(!$isSideOpen)} class={`w-[2rem] md:w-[3rem] lg:hidden flex flex-col justify-center gap-2 relative z-20 transition-[200ms] ${!$isSideOpen && "hover:gap-3 md:hover:gap-5"}`}>
        <span class={`w-full h-[3px] bg-stone-200 transition-[200ms] rounded-xl ${$isSideOpen ? "rotate-[45deg]" : ""}`}></span>
        <span class={`w-full h-[3px] bg-stone-200 rounded-xl ${$isSideOpen ? "rotate-[-45deg] transition-[200ms] translate-y-[-10px]" : ""}`}></span>
    </div>
    <section class="hidden lg:flex justify-around items-center w-[50vw]">
        <a href="#home" class="text-stone-400 hover:text-stone-200 transition-[200ms] text-xl">Home</a>
        <a href="#work" class="text-stone-400 hover:text-stone-200 transition-[200ms] text-xl">Work</a>
        <a href="#contact" class="text-stone-400 hover:text-stone-200 transition-[200ms] text-xl">Contact</a>
    </section>
</header>