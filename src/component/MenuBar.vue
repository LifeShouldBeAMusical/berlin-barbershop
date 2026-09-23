<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
	<v-app-bar flat>
		<v-toolbar-title>
			<v-btn href="/">Home</v-btn>
			<v-btn href="/bash">{{ t('bash.menu') }}</v-btn>
			<v-btn href="/chorus">{{ t('chorus.menu') }}</v-btn>
			<v-btn href="/event">{{ t('event.menu') }}</v-btn>
		</v-toolbar-title>
	</v-app-bar>
</template>

<style lang="scss"></style>
