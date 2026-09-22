<script setup lang="ts">
import EventCard from '@/component/EventCard.vue'
</script>

<template>
	<div id="event-view">
		<h1>Upcoming Events</h1>
		<v-container class="event-container">
			<event-card title="Berlin Barbershop Bash 2027" />
		</v-container>
	</div>
</template>

<style lang="scss">
#event-view {
	h1 {
		text-align: center;
	}
	.event-container {
		margin: 0;
		padding: 0;
		display: flex;
		flex-flow: row wrap;
		gap: 8px;
	}
}
</style>
