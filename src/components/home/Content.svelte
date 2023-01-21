<script lang="ts">
	import * as Threlte from '@threlte/core';
	import * as Extra from '@threlte/extras';
	import { fade, fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import { onDestroy } from 'svelte';

	let titles = ['Front', 'End', 'Developer'];
	let parent: Element;
	let inView = false;

	let observer = new IntersectionObserver(
		(entries) => {
			inView = entries[0].isIntersecting;
		},
		{ threshold: 0.4 }
	);

	$: if (parent) {
		observer.observe(parent);
	}

	onDestroy(() => {
		observer.disconnect();
	});
</script>

<main bind:this={parent} class="pt-28 md:pt-36 relative lg:flex lg:pl-5">
	{#if inView}
		<section id="home">
			<article transition:fade|local class="mt-3 px-5 flex flex-col justify-center">
				<div class="w-[60vw] lg:w-[40vw] flex flex-wrap justify-around items-center m-auto">
					{#each titles as title, i}
						<h3
							transition:fly={{
								y: 100,
								duration: 500,
								opacity: 0,
								easing: backOut,
								delay: i * 100
							}}
							class="text-5xl md:text-8xl font-[800] text-orange-50 tracking-wide text-center mt-2 selection:text-stone-700 selection:bg-orange-50"
						>
							{title}
						</h3>
					{/each}
				</div>
				<div class="lg:mt-3">
					<p
						class="text-stone-400 mt-2 md:text-2xl md:mt-9 text-[.8rem] text-justify lg:w-[40vw] lg:m-auto font-[500] antialiased lg:text-sm selection:text-stone-700 selection:bg-orange-50"
					>
						front-end developer that responsible for designing and implementing the user interface
						of a website or application. you'll find me using modern frontend technologies that
						bring the creative
					</p>
				</div>
				<a
					href="https://linkedin.com/in/peter-sahanaya"
					rel="noreferrer"
					target="_blank"
					class="px-4 p-4 mt-4 w-full transition-[200ms] text-stone-800 font-[500] bg-orange-50 rounded-full text-sm inline-block lg:w-[40vw] lg:p-4
						hover:text-stone-200 hover:bg-stone-700 hover:font-[500]">Let's work together 🤝</a
				>
			</article>
		</section>
		<section transition:fade|local class="w-[70vw] m-auto h-[60vh] ">
			<Threlte.Canvas rendererParameters={{ antialias: true }}>
				<Threlte.PerspectiveCamera position={{ x: 20, y: 20, z: 0 }} fov={60}>
					<Threlte.OrbitControls enableZoom={false} autoRotate />
				</Threlte.PerspectiveCamera>
				<Threlte.AmbientLight color="white" intensity={0.4} />
				<Threlte.DirectionalLight color="white" intensity={2} position={{ x: 50, y: 20 }} />
				<Extra.GLTF url="/cartoon_plane.glb" scale={8} />
			</Threlte.Canvas>
		</section>
		<div
			class="absolute hidden lg:inline-block bottom-[-60px] left-[40px] selection:bg-orange-50 selection:text-stone-800"
		>
			<p class="text-stone-400 text-sm">
				Find me at <a
					class="underline underline-offset-1 text-stone-100 selection:font-[600]"
					href="https://github.com/petersahanaya"
					rel="noreferrer">Github</a
				>
				and
				<a
					class="underline underline-offset-1 text-stone-100 selection:font-[600]"
					href="https://linkedin.com/in/peter-sahanaya"
					rel="noreferrer">Linkedin</a
				>.
			</p>
		</div>
	{/if}
</main>
