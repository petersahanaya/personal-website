<script lang="ts">
	import * as Threlte from '@threlte/core';
	import * as Extra from '@threlte/extras';
	import { fade, fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import { isSideOpen } from '../../stores/store';
	let titles = ['Front', 'End', 'Developer'];
</script>

<main class="pt-28">
    {#if !$isSideOpen}
	<section id="home">
		<div class="w-[60vw] flex flex-wrap justify-around items-center m-auto">
				{#each titles as title, i}
					<h3
						transition:fly={{ y: 100, duration: 500, opacity: 0, easing: backOut, delay: i * 100 }}
						class="text-4xl font-[800] text-orange-50 tracking-wide text-center mt-2"
					>
						{title}
					</h3>
				{/each}
		</div>
		<article transition:fade|local class="mt-3 px-5">
			<div>
				<p class="text-stone-300 text-[.8rem] text-justify">
					front-end developer that responsible for designing and implementing the user interface of
					a website or application.
				</p>
			</div>
		</article>
	</section>
	<section transition:fade|local class="w-[70vw] m-auto h-[60vh]">
		<Threlte.Canvas rendererParameters={{ antialias: true }}>
			<Threlte.PerspectiveCamera position={{ x: 20, y: 20, z: 0 }} fov={60}>
				<Threlte.OrbitControls enableZoom={false} autoRotate />
			</Threlte.PerspectiveCamera>
			<Threlte.AmbientLight color="white" intensity={0.4} />
			<Threlte.DirectionalLight color="white" intensity={2} position={{ x: 50, y: 20 }} />
			<Extra.GLTF url="/cartoon_plane.glb" scale={8} />
		</Threlte.Canvas>
	</section>
	{/if}
</main>
