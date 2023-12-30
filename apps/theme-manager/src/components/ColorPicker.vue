<script lang="ts" setup>
import type { ColorItem } from '@/classes/ThemeItem';
import { useThemeStore } from '@/stores/theme';
import { computed } from 'vue';

const themeStore = useThemeStore();

const mainColor = computed(() => themeStore.getSelectedMainColor)


const emits = defineEmits<{
  (e: 'pickColor', color: ColorItem): void
}>()
const chooseColor = () => {
    emits('pickColor', mainColor.value)
}
</script>

<template>
  <div>
    <span>choose a color</span>
    <div class="d-flex">
      <input type="color" v-model="mainColor.hex" />
      <input type="text" v-model="mainColor.hex" />
    </div>
    <button @click="chooseColor">choose color</button>
  </div>
</template>
