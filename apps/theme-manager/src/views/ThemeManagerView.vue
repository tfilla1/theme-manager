<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { Ref } from 'vue';
import { useThemeStore } from '@/stores/theme';
import { getTextColor } from '@/utils/lumineers';
import { generateTheme } from '@/utils/colorApi';
import type { ThemeItem } from '@/classes/ThemeItem';

const themeStore = useThemeStore();

const themeName = ref('theme'); // dictionary random theme name generator
const pickerColor = ref('#ff00aa'); // Ref<ColorItem> = ref({} as ColorItem)
const showConfirm = ref(false);

watch(themeName, () => {
  showConfirm.value = false
});

const addColorTheme = () => {
  generateTheme(themeName.value, pickerColor.value)
    .then((theme: ThemeItem) => {
      console.log(theme);
      themeStore.addCustomThemeItem(theme);
      console.log(themeStore.items);
    })
    .catch((e: Error) => console.error(e.message));
};
const generateButtonClicked = () => {
  showConfirm.value = themeStore.getItems.filter((t: ThemeItem) => t.name === themeName.value).length > 0
  if (!showConfirm.value) {
    addColorTheme();
  }
};

const confirmColorTheme = () => {
  addColorTheme();
  showConfirm.value = false;
}
</script>

<template>
  <div>
    <div style="text-align: center">a space for managing your theme</div>
    <div class="d-flex flex-column pa-4 align-items-center">
      <div class="pa-4">
        <div>pick a name</div>
        <input type="text" v-model="themeName" />
      </div>
      <div>
        <span>choose a color</span>
        <div class="d-flex">
          <input type="color" v-model="pickerColor" />
          <input type="text" v-model="pickerColor" />
        </div>
      </div>
      <div class="pa-4">
        <button @click="generateButtonClicked">Create Theme!</button>
      </div>
      <div v-if="showConfirm">
        <p>
          Oh no! A theme named "{{ themeName }}" already exists;
        </p>
        <button @click="confirmColorTheme">Continue Anyway!</button>
      </div>
    </div>
  </div>
</template>
