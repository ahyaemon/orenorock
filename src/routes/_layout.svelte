<script>
	import Drawer from '../components/Drawer.svelte'
	import BottomNav from '../components/BottomNav.svelte'
	import { mobile_breakpoint } from '../const'

	let width;
</script>

<style>
	.wrapper {
		min-height: 100vh;
		position: relative;
	}

	.parent {
		display: flex;
		width: auto;
		height: 100%;
	}

	.drawer {
		order: 1;
		height: 100%;
		position: fixed;
		z-index: 999;
		background-color: white;
	}

	.main {
		order: 2;
		width: 100%;
		min-height: 92vh;
	}

	.bottom-nav {
		position: fixed;
		bottom: 0;
		width: 100%;
	}

	.bottom-nav-dummy {
		height: 60px;
	}

	.pc-main {
		margin-left: 300px;
	}
</style>

<svelte:window bind:innerWidth="{width}"/>

<div class="wrapper">
	<div class="parent">
		{#if width > mobile_breakpoint}
			<div class="drawer">
				<Drawer/>
			</div>
		{/if}
		<main class="main" class:pc-main="{width > mobile_breakpoint}">
			<slot></slot>
		</main>
	</div>
	{#if width <= mobile_breakpoint}
		<div class="bottom-nav-dummy">kokoga mietya ikenaiyo</div><!-- bottom-nav 分の位置調整用 -->
		<div class="bottom-nav">
			<BottomNav/>
		</div>
	{/if}
</div>
