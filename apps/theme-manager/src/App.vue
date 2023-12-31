<script lang="ts" setup>
import { onMounted } from 'vue'
import DefaultLayout from './layouts/default/DefaultLayout.vue'

import { useThemeStore } from './stores/theme'
import { ThemeItem } from './classes/ThemeItem'

const themeStore = useThemeStore()

// import appMessages from '@/components/app-messages.vue'

onMounted(async () => {
  // let primaryTheme = themeStore.getItems.find((i) => i.name === 'warble');
  await themeStore.loadThemeItems()
  themeStore.setSelectedItem()
})
</script>

<template>
  <DefaultLayout>
    <RouterView></RouterView>
  </DefaultLayout>
</template>
