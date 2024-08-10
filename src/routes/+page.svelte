<p>{deck}</p>
{#each Object.entries(shuffledImages) as [_path, module]}
	<enhanced:img src={module.default} alt="card" />
{/each}
<p>{JSON.stringify(images.cards, null, 2)}</p>

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

    // let imagesJSON = JSON.parse(images);
    console.log(shuffle(imagesDeck));
    let shuffledImages = Object.fromEntries(imagesDeck)
    console.log(shuffledImages);

    let deck : number[] = [0, 1, 5, 7, 78];


</script>