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
	)
    const shuffle = <T>(array: T[]) => { 
        for (let i = array.length - 1; i > 0; i--) { 
            const j = Math.floor(Math.random() * (i + 1)); 
            [array[i], array[j]] = [array[j], array[i]]; 
        }
        return array; 
    };
    const reShuffle = <T>(array: T[]) => { 
        return array.map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value); 
    };

    let cardElements = []
    $ : showingCards
    // $ : visibilityValue
    let showingCards = [false, false, false, false, false]
    onMount(() => {
    // This runs after the component is mounted to the DOM
    // cardElement.style.visibility = "hidden"
    // console.log(cardElement)
    });
    const showAndHide = (i) => {  
        // beforeUpdate(() => {
            showingCards[i] ? cardElements[i].style.visibility = "hidden" : cardElements[i].style.visibility = "visible"
            showingCards[i] = !showingCards[i]
            console.log(cardElements)
        // });
    }

    const imagesDeck = Object.entries(imageModules)
    let shuffledDeckArray = shuffle(reShuffle(imagesDeck))
    let shuffledDeck = Object.fromEntries(shuffledDeckArray)
    // console.log(shuffledImages);

    let deck : number[] = [0, 1, 5, 7, 78];


</script>

<body>
    <section>
        {#each Object.entries(shuffledDeck) as [_path, module], z}
            {#if (z<5)}
                <button on:click={() => showAndHide(z)}>
                    <enhanced:img bind:this={cardElements[z]} src={module.default} class="hide" alt="card" id={"card" + z} />
                </button>
            {/if}
        {/each}
    </section>
</body>

<style>
    body {
        margin-top: 8vh;
    }
    img {
        display: block;
        margin: 0 -1rem;
        background-color: none;
        border: 3px solid goldenrod;
        transition: all .5s ease-in;
        padding: 1rem;
    }
    img:hover {
        transform: scale(1.2);
        background-color: azure;
    }
    img.hide {
        visibility: hidden;
    }
</style>