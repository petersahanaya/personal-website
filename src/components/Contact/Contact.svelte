<script lang="ts">
    import emailjs from '@emailjs/browser' 
    import { PUBLIC_KEY, PUBLIC_SERVICE_ID, PUBLIC_TEMPLATE_ID } from "$env/static/public"
	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';

    let success = ""
    let error = ""
    let loading = false

    const sendEmail = async (e : any) => {
        loading = true
        try {
            const res = await emailjs.sendForm(PUBLIC_SERVICE_ID, PUBLIC_TEMPLATE_ID, e.target, PUBLIC_KEY)
            console.log({res})

            if(res.status === 200) {
                loading = false
                success = "Message Sended"

                setTimeout(() => {
                    success = ""
                } , 2000)
            }
        }catch(e) {
            loading = false
            error = "Error cannot Sended.."
            setTimeout(() => {
                error = ""
            }, 2000)
        }
    }
</script>

<main id="contact" class="p-3 bg-stone-900 md:pt-[40rem]">
<h3 class="text-3xl md:text-6xl text-orange-50 font-[800] tracking-wide">Contact 📧</h3>
    <form on:submit|preventDefault={sendEmail} class="w-full flex flex-col justify-center items-center gap-2 mt-4">
            <input name="from_name" class="p-3 md:text-lg lg:w-[34rem] md:p-5 text-stone-100 outline-none text-sm bg-stone-700 w-[75vw] rounded-xl" type="text" placeholder="e.g john doe"/>
            <input name="email_id" class="p-3 md:text-lg lg:w-[34rem] md:p-5 text-stone-100 outline-none text-sm bg-stone-700 w-[75vw] rounded-xl" type="text" placeholder="e.g johndoe@example.com"/>
            <input name="message" class="p-3 md:text-lg lg:w-[34rem] md:p-5 text-stone-100 outline-none text-sm bg-stone-700 w-[75vw] rounded-xl" type="text" placeholder="e.g this is really cool!"/>
            <button disabled={loading} class={`w-[9rem] lg:w-[15rem] lg:text-xl md:text-2xl md:w-[18rem] md:p-4  bg-slate-50 hover:scale-90 transition-[200ms] text-stone-700 rounded-full p-2 px-3 mt-2`}>Send</button>
        </form>
        {#if success}
        <p transition:fly={{y : -200, easing : backOut, opacity : 0, duration : 800}} class="bg-stone-800 text-center text-stone-100 p-2 rounded-xl w-[80vw] fixed top-[50px] right-[10%] z-40">{success}</p>
        {/if}
        {#if error}
        <p transition:fly={{y : -200, easing : backOut, opacity : 0, duration : 800}} class="bg-stone-800 text-center text-stone-100 p-2 rounded-xl w-[80vw] fixed top-[50px] right-[10%] z-40">{error}</p>
        {/if}
        {#if loading}
        <p transition:fly={{y : -200, easing : backOut, opacity : 0, duration : 800}} class="bg-stone-800 text-center text-stone-100 p-2 rounded-xl w-[80vw] fixed top-[50px] right-[10%] z-40">Loading...</p>
        {/if}
</main>