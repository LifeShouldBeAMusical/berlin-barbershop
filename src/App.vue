<script setup lang="ts">
import MenuBar from '@/component/MenuBar.vue'
</script>

<template>
	<v-app>
		<menu-bar />
		<v-container class="router">
			<h1>Berlin Barbershop</h1>
			<p>Welcome, dear barbershopper, to Berlin!</p>
		</v-container>
	</v-app>
</template>

<style lang="scss">
.router {
	margin: 4em 0 0 0;
	h1 {
		text-align: center;
	}
}
</style>
