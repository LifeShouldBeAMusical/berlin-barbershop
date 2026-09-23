<script setup lang="ts">
import MenuBar from '@/component/MenuBar.vue'
</script>

<template>
	<v-app>
		<menu-bar />
		<v-main>
			<v-container class="page-container">
				<router-view />
			</v-container>
		</v-main>
	</v-app>
</template>
