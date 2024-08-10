{#each Object.entries(shuffledDeck) as [_path, module], z}
    {#if (z<4)}
        <enhanced:img src={module.default} alt="card" />
    {/if}
{/each}

<script lang="ts">
    import images from '../tarot-json/tarot-images.json';
    
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


    const imagesDeck = Object.entries(imageModules)
    let shuffledDeckArray = shuffle(imagesDeck)
    let shuffledDeck = Object.fromEntries(shuffledDeckArray)
    // console.log(shuffledImages);

    let deck : number[] = [0, 1, 5, 7, 78];


</script>