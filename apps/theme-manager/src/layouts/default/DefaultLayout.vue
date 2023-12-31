<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import DefaultMenu from './MainMenu.vue';
import DefaultView from './DefaultView.vue';
import DefaultHeader from './DefaultHeader.vue';
// import appMessages from '@/components/app-messages.vue'

import { useThemeStore } from '@/stores/theme';

import { getTextColor } from '@/utils/lumineers';

const themeStore = useThemeStore();

const bgColor = computed(() => themeStore.getSelectedMainColor.hex);
const primaryTextColor = computed(() => getTextColor(bgColor.value));

onMounted(async () => {
  await themeStore.loadThemeItems();
  themeStore.setSelectedItem();
});
</script>

<template>
  <main class="container warble" :style="{ backgroundColor: bgColor, color: primaryTextColor }">
    <DefaultHeader></DefaultHeader>
    <DefaultMenu></DefaultMenu>
    <DefaultView />
  </main>
  <!-- <default-bar />
  <default-loader /> -->

  <!-- <app-messages></app-messages> -->
</template>
