<script lang='ts'>
    import { isSideOpen } from "../../stores/store";
</script>

<header class="w-screen bg-stone-900 h-[12vh] flex justify-around items-center fixed top-0 z-20 right-0">
    <div class="flex justify-around items-center gap-2">
        <img class="w-[50px] h-[50px] shadow-md shadow-white/10 rounded-full object-cover" width="40" height="40" src="/profile.jpg" alt="peter sahanaya photo profile" />
        <p class="text-[.8rem] text-stone-200">Peter Sahanaya</p>
    </div>
    <div on:click={() => isSideOpen.set(!$isSideOpen)} class={`w-[2rem] flex flex-col justify-center gap-2 relative z-20 transition-[200ms] ${!$isSideOpen && "hover:gap-3"}`}>
        <span class={`w-full h-[3px] bg-stone-200 transition-[200ms] rounded-xl ${$isSideOpen ? "rotate-[45deg]" : ""}`}></span>
        <span class={`w-full h-[3px] bg-stone-200 rounded-xl ${$isSideOpen ? "rotate-[-45deg] transition-[200ms] translate-y-[-10px]" : ""}`}></span>
    </div>
</header>