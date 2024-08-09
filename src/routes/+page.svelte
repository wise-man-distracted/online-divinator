<p>{deck}</p>
{#each Object.entries(imageModules) as [_path, module]}
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

    // let imagesJSON = JSON.parse(images);
    console.log(images.cards[1]);

    let deck : number[] = [0, 1, 5, 7, 78];


</script>