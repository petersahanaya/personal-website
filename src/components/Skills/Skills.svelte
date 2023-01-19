<script lang="ts">
    import "iconify-icon"
	import { onMount } from "svelte";
    let match = false

    onMount(() => {
        match = window.matchMedia("(min-width : 700px)").matches
    })
</script>

<main id="work" class="p-3 md:pt-64 w-screen">
    <h3 class="text-3xl md:text-6xl text-orange-50 font-[800] tracking-wide">Work 🤙</h3>
    <div class="w-full lg:flex lg:justify-center lg:items-center lg:gap-6">
        <section class="mt-3 transition-[200ms] lg:inline-block lg:w-[40vw] hover:scale-90">
            <a href="https://p3tr.netlify.app" rel="noreferrer">
                <div class="w-[80vw] h-[200px] md:h-[400px] relative m-auto lg:w-[40vw] lg:inline-block">
                    <img class="w-full h-full object-cover m-auto mt-2 rounded-xl" src="/e-commerce.webp" alt="e-commerce app"/>
                    <span class=" absolute bottom-0 right-0 w-[80vw] h-[200px] md:h-[400px] bg-gradient-to-b from-transparent to-stone-800 lg:w-full lg:h-[500px]">
                        <p class="text-md text-center md:text-2xl w-full pl-6 mt-4 text-stone-200 tracking-wide absolute bottom-0 lg:text-xl">Fullstack E-Commerce App </p>
                    </span>
                </div>
            </a>
        </section>
    <section class="mt-3 transition-[200ms] lg:inline-block lg:w-[40vw] hover:scale-90">
        <a href="https://p3social.vercel.app" rel="noreferrer">
            <div class="w-[80vw] h-[200px] md:h-[400px] relative m-auto lg:w-[40vw] lg:inline-block">
                <img class="w-full h-full object-cover m-auto mt-2 rounded-xl" src="/social-media.png" alt="e-commerce app"/>
                <span class=" absolute bottom-0 right-0 w-[80vw] h-[200px] md:h-[400px] bg-gradient-to-b from-transparent to-stone-800 lg:w-full lg:h-[500px]">
                    <p class="text-md pl-6 mt-4 md:text-2xl w-full text-center text-stone-200 tracking-wide absolute bottom-0 lg:text-xl">Fullstack Social Media App </p>
                </span>
            </div>
        </a>
    </section>
</div>
    <nav class="flex justify-around flex-wrap items-center mt-5 p-3 lg:w-[50vw] lg:m-auto lg:mt-10">
        <iconify-icon icon="mdi:language-typescript" width={`${match ?  "60" : "40"}`} height={`${match ?  "60" : "40"}`} class="text-stone-700 bg-stone-200 rounded-full md:w-[60px] md:h-[60px]"/>
        <iconify-icon icon="vscode-icons:file-type-next" width={`${match ?  "60" : "40"}`} height={`${match ?  "60" : "40"}`} />
        <iconify-icon icon="mdi:react" width={`${match ?  "60" : "40"}`} height={`${match ?  "60" : "40"}`} class="text-stone-700 rounded-full bg-stone-200 md:w-[60px] md:h-[60px] "/>
            <iconify-icon icon="skill-icons:expressjs-light" width={`${match ?  "60" : "40"}`} height={`${match ?  "60" : "40"}`} class="text-stone-700 rounded-full bg-stone-200 md:w-[60px] md:h-[60px] "/>
            <iconify-icon icon="simple-icons:mongodb" width={`${match ?  "60" : "40"}`} height={`${match ?  "60" : "40"}`} class="text-stone-700 rounded-full bg-stone-200 md:w-[60px] md:h-[60px] "/>
            <iconify-icon icon="tabler:brand-redux" width={`${match ?  "60" : "40"}`} height={`${match ?  "60" : "40"}`} class="text-stone-700 bg-stone-200 rounded-full md:w-[60px] md:h-[60px]"/>
    </nav>
</main>