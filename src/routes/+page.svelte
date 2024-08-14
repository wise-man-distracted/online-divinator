<script lang="ts">
	import images from '../tarot-json/tarot-images.json';
	import { fromEvent } from 'rxjs';
	import { onMount, beforeUpdate } from 'svelte';
	const imageModules = import.meta.glob(
		'/src/tarot-json/cards/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	);
	const shuffle = <T,>(array: T[]) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};
	const reShuffle = <T,>(array: T[]) => {
		return array
			.map((a) => ({ sort: Math.random(), value: a }))
			.sort((a, b) => a.sort - b.sort)
			.map((a) => a.value);
	};
	const showAndHide = (i: number) => {
		showingCards[i] ? (cardElements[i].style.opacity = '0') : (cardElements[i].style.opacity = '1');
		showingCards[i] = !showingCards[i];
		// console.log(shuffledDeckArray);
	};
	const showAll = () => {
		cardElements.forEach((card) => {
			card.style.opacity = '1';
		});
	};
	const hideAll = () => {
		cardElements.forEach((card) => {
			card.style.opacity = '0';
		});
	};
	const reloadSpread = () => {
		shuffledDeckArray = shuffle(reShuffle(imagesDeck));
		shuffledDeck = Object.fromEntries(shuffledDeckArray);
	};
	const onKeyDown = (e) => {
		switch (e.keyCode) {
			case 49:
			case 97:
				showAndHide(0);
				break;
			case 50:
			case 98:
				showAndHide(1);
				break;
			case 51:
			case 99:
				showAndHide(2);
				break;
			case 52:
			case 100:
				showAndHide(3);
				break;
			case 53:
			case 101:
				showAndHide(4);
				break;
			case 54:
			case 102:
				showAndHide(5);
				break;
			case 32:
				reloadSpread();
				break;
			case 40:
				hideAll();
				break;
			case 38:
				showAll();
				break;
		}
	};

	const imagesDeck = Object.entries(imageModules);
	let cardElements: HTMLElement[] = [];
	let showingCards = [false, false, false, false, false];
	let shuffledDeckArray = shuffle(reShuffle(imagesDeck));
	let shuffledDeck = Object.fromEntries(shuffledDeckArray);
</script>

<body>
	<section>
		{#each Object.entries(shuffledDeck) as [_path, module], z}
			{#if z < 5}
				<button on:click={() => showAndHide(z)}>
					<enhanced:img
						bind:this={cardElements[z]}
						src={module.default}
						class="hide"
						alt="card"
						id={'card' + z}
					/>
				</button>
			{/if}
		{/each}
	</section>
</body>
<svelte:window on:keydown|preventDefault={onKeyDown} />

<style>
	body {
		margin-top: 8vh;
	}
	img {
		display: block;
		margin: 0 -1rem;
		background-color: none;
		border: 3px solid goldenrod;
		transition: all 0.2s ease-in-out;
		padding: 1rem;
	}
	img:hover {
		transform: scale(1.2);
		background-color: azure;
	}
	img.hide {
		opacity: 0;
	}
</style>
