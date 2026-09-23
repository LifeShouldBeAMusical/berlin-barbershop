<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t, availableLocales } = useI18n()

const languages = computed(() =>
	availableLocales.map((loc: string) => ({ title: t(`locale.lang_${loc}`), value: loc })),
)
</script>

<template>
	<header class="site-header">
		<nav class="site-nav" aria-label="Main navigation">
			<router-link to="/">{{ t('home.menu') }}</router-link>
			<router-link to="/bash">{{ t('bash.menu') }}</router-link>
			<router-link to="/chorus">{{ t('chorus.menu') }}</router-link>
			<router-link to="/event">{{ t('event.menu') }}</router-link>
		</nav>
		<div class="language-switcher" role="group" aria-label="Language">
			<button
				v-for="lang in languages"
				:key="lang.value"
				type="button"
				:aria-pressed="locale === lang.value"
				@click="locale = lang.value"
			>
				{{ lang.title }}
			</button>
		</div>
	</header>
</template>
