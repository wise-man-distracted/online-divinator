
<h1>Welcome to {name}</h1>
<p>{deck}</p>
<p></p>
<p>{JSON.stringify(images.cards, null, 2)}</p>
<!-- <img alt="Card" src="./tarot-json/cards/{images.cards[1].img}"> -->

<script lang="ts">
    
    import images from '../../static/tarot-json/tarot-images.json';
    // let imagesJSON = JSON.parse(images);
    console.log(images.cards[1]);
	let name : string = 'Svelte';
    let deck : number[] = [0, 1, 5, 7, 78];


</script>