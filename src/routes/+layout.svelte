<script lang="ts">
	import '../app.css';
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	let tabSet: number = 0;
</script>

<TabGroup
	justify="justify-center"
	active="variant-filled-primary"
	hover="hover:variant-soft-primary"
	flex="flex-1 lg:flex-none"
	rounded=""
	border=""
	class="bg-surface-100-800-token w-full"
>
	<TabAnchor href="/" selected={$page.url.pathname === '/'} bind:group={tabSet} name="tab1" value={0}>
		<svelte:fragment slot="lead"><i class="fa-xl fa-solid fa-wand-magic-sparkles"></i></svelte:fragment>
		<span>Vanilla 4-Card</span>
	</TabAnchor>
	<TabAnchor href="/modern5" selected={$page.url.pathname === '/modern5'} bind:group={tabSet} name="tab2" value={1}>
		<svelte:fragment slot="lead"><i class="fa-xl fa-solid fa-wand-sparkles"></i></svelte:fragment>
		<span>Modern 5-Card</span>
	</TabAnchor>
	<TabAnchor href="/mystic6" selected={$page.url.pathname === '/mystic6'} bind:group={tabSet} name="tab3" value={2}>
		<svelte:fragment slot="lead"><i class="fa-xl fa-solid fa-hand-sparkles"></i></svelte:fragment>
		<span>Lenormand 6-Card</span>
	</TabAnchor>
	<!-- Tab Panels --->
	<svelte:fragment slot="panel">
		{#if tabSet === 0}
			<slot />
		{:else if tabSet === 2}
			(tab panel 3 contents)
		{/if}
	</svelte:fragment>
</TabGroup>
