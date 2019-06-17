<script>
	import Drawer from '../components/drawer.svelte'
</script>

<div style="display: flex;">
	<div style="order: 1;">
		<Drawer/>
	</div>
	<main style="order: 2;">
		<slot></slot>
	</main>
</div>

