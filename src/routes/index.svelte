<svelte:head>
	<title>俺のロックまとめ</title>
</svelte:head>

<style>
	button {
		border: none;
		border-radius: 2px;
		background-color: rgba(255, 3, 0, 0.71);
		color: white;
		box-shadow: 1px 1px 1px grey;
		padding: 8px 40px;
	}
</style>

<script>
	function transition_random() {
		location.href = "/random"
	}
</script>

<div>
	<h1>このサイトについて</h1>
	<p>独断と偏見で選んだ邦楽ロックをまとめる。</p>
	<br>
	<p>↓とりあえず押してみそ</p>
	<button on:click={transition_random}>RANDOM</button>
	<br>
	<br>
	<p>管理人：あひゃえもん</p>
	<p>mail : iamahyaemon&lt;＠&gt;gmail.com</p>
	<p>twitter : @ahyaemon</p>
</div>
