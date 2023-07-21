<script lang="ts">
    import squee from '../assets/squee.wav';
    export let img: string;
    let audio = new Audio(squee);
    let i = 0;
    setInterval(() => {
        i = ((++i) % 3);
        if (!audio.paused)
            i += 3;
    }, 100);
</script>

<button class="grumpus" style="background: url({img}); background-position: {-i*128}px 0;" on:click={() => audio.play()}>
</button>

<style>
    .grumpus {
        width: 128px;
        height: 128px;
        border: 0px;
        outline: none;
        /* border: 1px solid white; */
    }
</style>
