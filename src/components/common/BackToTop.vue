<template>
<div class="back-to-top">
	<button class="pl2 pr2 pt1 pb1 mb2 mt1 rounded">Top</button>
</div>
</template>

<script>
export default {
	name: 'BackToTop',
	components: {

	}
}
</script>

<style>
.back-to-top button {
	/* ===style format=== */
	border-top-style: none;
	border-right-style: none;
	border-bottom-style: none;
	border-left-style: none;
	outline: none;
	/* ===color=== */
	background-color: #00B4FF;
	color: white;
	font-size: 0.8rem;
	box-shadow: 0px 0px 20px #dbdada;
	/* ===size and position=== */
	position: fixed;
	right: 1rem;
	bottom: 1rem;
}
</style>
