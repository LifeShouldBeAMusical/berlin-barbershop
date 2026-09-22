import App from '@/App.vue'
import router from '@/router'
import { createApp } from 'vue'

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import { md2 } from 'vuetify/blueprints'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import 'vuetify/styles'

const vuetify = createVuetify({
	components,
	directives,
	defaults: {
		// global: { FontFace: 'Sofia Sans' },
	},
	icons: {
		defaultSet: 'mdi',
		aliases,
		sets: { mdi },
	},
	blueprint: md2,
})

const app = createApp(App)

app.use(vuetify)
app.use(router)

app.mount('#app')
