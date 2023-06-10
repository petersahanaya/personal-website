<script lang="ts">
	import 'iconify-icon';
	import { onMount } from 'svelte';
	import { backOut, quadInOut, quadOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	let match = false;
	let parent: Element;
	let inView = false;

	let observer = new IntersectionObserver(
		(entries) => {
			inView = entries[0].isIntersecting;
		},
		{ threshold: 0.2 }
	);

	$: if (parent) {
		observer.observe(parent);
	}

	onMount(() => {
		match = window.matchMedia('(min-width : 700px)').matches;

		return () => observer.disconnect();
	});

	let SkillArr = [
		{
			id: 1,
			title: 'E-Commerce App 🛒',
			description:
				'Built and launched a fully-featured e-commerce web application using Next Js - Typescript & PostgreSQL.',
			icon: 'iconoir:user-cart',
			link: 'https://p3das.vercel.app',
			hovering: false
		},
		{
			id: 2,
			title: 'Social Media App 📱',
			description:
				'Design system and website that implemented post, like & comment. With Next Js & MongoDB.',
			icon: 'akar-icons:people-group',
			link: 'https://p3social.vercel.app',
			hovering: false
		}
	];

	const MouseIn = (id: number) => {
		SkillArr = SkillArr.map((skill) => {
			if (skill.id === id && skill.hovering === false) {
				return {
					...skill,
					hovering: true
				};
			} else {
				return skill;
			}
		});
	};
	const MouseOut = (id: number) => {
		SkillArr = SkillArr.map((skill) => {
			if (skill.id === id && skill.hovering) {
				return {
					...skill,
					hovering: false
				};
			} else {
				return skill;
			}
		});
	};
</script>

<div bind:this={parent}>
	{#if inView}
		<main
			transition:fade={{ duration: 300, easing: quadOut }}
			id="work"
			class="p-3 md:pt-64 w-screen "
		>
			<h3
				in:fly={{ y: -100, opacity: 0, easing: backOut, delay: 200 }}
				class="text-5xl inline-block overflow-hidden md:text-6xl lg:pl-20 pl-10 text-orange-50 font-[800] tracking-wide selection:text-stone-700 selection:bg-orange-50"
			>
				Project's 🤙
			</h3>
			<div
				class="w-full lg:flex lg:justify-center 
    lg:items-center lg:gap-6"
			>
				{#each SkillArr as skill (skill.id)}
					<a href={skill.link}>
						<section
							on:mouseenter={() => MouseIn(skill.id)}
							on:mouseleave={() => MouseOut(skill.id)}
							in:fly={{ y: 200, opacity: 0, easing: quadOut, delay: 300 }}
							class="mt-3 m-auto overflow-hidden w-[80vw] h-[150px] md:h-[250px] bg-stone-700 rounded-xl transition-[200ms] lg:w-[40vw] flex flex-col justify-center items-center relative"
						>
							<iconify-icon icon={skill.icon} width={40} height={40} style="color:white" />
							{#if skill.hovering}
								<span
									transition:fade={{ easing: quadInOut }}
									class="bg-orange-50 w-full rounded-xl pt-6 p-3 h-full absolute top-0 right-0 z-10"
								>
									<p class="text-stone-700 text-base font-[500]">{skill.title}</p>
									<p class="text-stone-600 text-sm pt-5">{skill.description}</p>
								</span>
							{/if}
						</section>
					</a>
				{/each}
			</div>
		</main>
	{/if}
</div>
