<script setup lang="ts"></script>

<template>
	<v-app>
		<v-app-bar flat>
			<v-toolbar-title>
				<v-btn href="/">Home</v-btn>
			</v-toolbar-title>
		</v-app-bar>
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
