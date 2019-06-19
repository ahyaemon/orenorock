<svelte:head>
	<title>俺のロックまとめ</title>
</svelte:head>

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
	<label>
		<a on:click="{transition_random}"class="button button-red">RANDOM</a>
	</label>
	<br>
	<br>
	<p>管理人：あひゃえもん</p>
	<p>mail : iamahyaemon&lt;＠&gt;gmail.com</p>
	<p>twitter : @ahyaemon</p>
</div>
