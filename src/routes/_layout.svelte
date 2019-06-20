<script>
	import Drawer from '../components/Drawer.svelte'
	import BottomNav from '../components/BottomNav.svelte'
	import { mobile_breakpoint } from '../const'

	import { fly } from 'svelte/transition'
	import { quintOut} from 'svelte/easing'

	let width;
	let mobile_drawer_active = false;
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

	.mask {
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.3);
		position: absolute;
		z-index: 998;
	}

	.drawer-mobile {
		position: fixed;
		background-color: white;
		height: 100%;
		z-index: 999;
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
	<!-- TODO: pc と mobile で完全に分離しても良いかもしれない -->
	{#if mobile_drawer_active}
		<div class="mask" transition:fly="{{delay: 100, duration: 500, opacity: 0, easing: quintOut}}" on:click="{() => {mobile_drawer_active = false}}"></div>
		<div class="drawer-mobile"  transition:fly="{{delay: 100, duration: 300, x: -300, opacity: 1, easing: quintOut}}">
			<Drawer on:change_page="{() => {mobile_drawer_active = false}}"/>
		</div>
	{/if}

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
			<BottomNav on:menu_clicked="{() => {mobile_drawer_active = true}}"/>
		</div>
	{/if}
</div>
