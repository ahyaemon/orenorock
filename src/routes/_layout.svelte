<script>
	import Drawer from '../components/drawer.svelte'
</script>

<style>
	.parent {
		display: flex;
		width: auto;
	}

	.drawer {
		order: 1;
	}

	.main {
		order: 2;
		width: 100%;
	}
</style>

<div class="parent">
	<div class="drawer">
		<Drawer/>
	</div>
	<main class="main">
		<slot></slot>
	</main>
</div>
