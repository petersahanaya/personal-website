<script lang="ts">
	import emailjs from '@emailjs/browser';
	import { fly, type EasingFunction, type TransitionConfig } from 'svelte/transition';
	import { backOut, quadOut } from 'svelte/easing';
	import { onDestroy } from 'svelte';

	let success = '';
	let error = '';
	let loading = false;
	let parent: Element;
	let modals = false;
	let inView = false;

	type ModalParams = { duration?: number; easing?: EasingFunction };
	type ModalTransition = (node: Element, params?: ModalParams) => TransitionConfig;

	const modal: ModalTransition = (node, { duration = 300, easing = quadOut } = {}) => {
		const transform = getComputedStyle(node).transform;

		return {
			duration,
			easing,
			css: (t, u) => {
				return `transform:
				scale(${t})
				translateY(${u * 200}%)
				`;
			}
		};
	};

	const observer = new IntersectionObserver(
		(entries) => {
			inView = entries[0].isIntersecting;
		},
		{ threshold: 0.7 }
	);

	$: if (parent) {
		observer.observe(parent);
	}

	onDestroy(() => {
		observer.disconnect();
	});

	const sendEmail = async (e: any) => {
		loading = true;
		try {
			const res = await emailjs.sendForm(
				'service_1r0xt8t',
				'template_6k3lrhf',
				e.target,
				'tWDas_H0Jb4j3tzPT'
			);

			if (res.status === 200) {
				loading = false;
				success = 'Message Sended';

				setTimeout(() => {
					success = '';
				}, 2000);
			}
		} catch (e) {
			console.error(e);
			loading = false;
			error = 'Error cannot Sended..';
			setTimeout(() => {
				error = '';
			}, 2000);
		}
	};
</script>

<main
	bind:this={parent}
	id="contact"
	class="p-3p pt-32 w-screen relative bg-stone-900 md:pt-[20rem] lg:pt-[20rem]"
>
	{#if inView}
		<article class="w-full lg:pl-20 pl-8 p-3">
			<h3
				transition:fly={{ y: -100, opacity: 0, easing: backOut }}
				class="text-4xl inline-block overflow-hidden md:text-6xl text-orange-50 pb-8 font-[800] tracking-wide selection:text-stone-700 selection:bg-orange-50"
			>
				Contact 📧
			</h3>
			<span class="">
				<p class="text-stone-200 font-[500] text-sm">Hey my georgous friend.</p>
				<p class="text-stone-400 text-[.8rem] mt-3">
					if you have a project in your mind or would like to me make your project? you simple
					select this option.
				</p>
			</span>
			<div
				on:click={() => (modals = !modals)}
				class="text-sm text-stone-800 bg-orange-50 font-[500] inline-block p-3 rounded-full mt-3 cursor-pointer transition-[200ms] hover:bg-stone-600 hover:text-orange-50"
			>
				<p>👨‍🦳 i do like to say hello</p>
			</div>
		</article>
	{/if}
	{#if success}
		<p
			transition:fly={{ y: -200, easing: backOut, opacity: 0, duration: 800 }}
			class="bg-stone-800 text-center text-stone-100 p-2 rounded-xl w-[80vw] fixed top-[50px] right-[10%] z-40"
		>
			{success}
		</p>
	{/if}
	{#if error}
		<p
			transition:fly={{ y: -200, easing: backOut, opacity: 0, duration: 800 }}
			class="bg-stone-800 text-center text-stone-100 p-2 rounded-xl w-[80vw] fixed top-[50px] right-[10%] z-40"
		>
			{error}
		</p>
	{/if}
	{#if loading}
		<p
			transition:fly={{ y: -200, easing: backOut, opacity: 0, duration: 800 }}
			class="bg-stone-800 text-center text-stone-100 p-2 rounded-xl w-[80vw] fixed top-[50px] right-[10%] z-40"
		>
			Loading...
		</p>
	{/if}
	{#if modals}
		<nav
			transition:modal
			class="absolute bottom-[50px] m-auto right-[10%] lg:right-[25%] w-[80vw] md:w-[75vw] lg:w-[50vw] bg-stone-50 shadow-md shadow-stone-100 rounded-xl p-5 flex flex-col justify-center"
		>
			<form
				on:submit|preventDefault={sendEmail}
				class="flex flex-col justify-center gap-4 relative"
			>
				<section class="flex flex-col justify-center gap-4">
					<label class="text-sm font-[500] text-stone-700" for="from_name">Username</label>
					<input
						class="text-sm bg-stone-500 rounded-xl p-3  placeholder:text-stone-200 text-stone-100"
						type="text"
						name="from_name"
						placeholder="Merry Watson"
					/>
				</section>
				<section class="flex flex-col justify-center gap-4">
					<label class="text-sm  font-[500] text-stone-700" for="email">Email</label>
					<input
						class="text-sm bg-stone-500 rounded-xl p-3  placeholder:text-stone-200 text-stone-100"
						type="email"
						placeholder="merry@gmail.com"
					/>
				</section>
				<section class="flex flex-col justify-center gap-4">
					<label class="text-sm font-[500] text-stone-700" for="message">message</label>
					<input
						class="text-sm bg-stone-500 rounded-xl p-3  placeholder:text-stone-200 text-stone-100"
						name="message"
						placeholder="this is really cool!"
					/>
				</section>
				<button
					class="p-3 mt-3 rounded-full bg-stone-700 text-orange-50 inline-block px-5 m-auto w-max  text-sm"
					>Send Message</button
				>
			</form>
			<button
				disabled={loading}
				class="absolute top-[10px] right-[20px] text-stone-700 text-xl"
				on:click={() => (modals = false)}>X</button
			>
		</nav>
	{/if}
</main>
