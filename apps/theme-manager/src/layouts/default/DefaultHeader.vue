<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useDialog } from '@/stores/dialog';
import { useThemeStore } from '@/stores/theme';
import generateName from '@/utils/generateName';
import { generateTheme } from '@/utils/colorApi';
import { getTextColor } from '@/utils/lumineers';
import WarbleCard from '@/components/WarbleCard.vue';
import ColorPicker from '@/components/ColorPicker.vue';
import type { ColorItem, ThemeItem } from '@/classes/ThemeItem';

const themeStore = useThemeStore();

const currentTheme = computed(() => themeStore.getSelectedItem);

const primaryHexColor = computed(() => themeStore.getSelectedMainColor.hex);
const primaryTextColor = computed(() => getTextColor(themeStore.getSelectedMainColor.hex));

// const primaryColor = computed(() => currentTheme.value?.colors.find((c) => c.isPrimary));
const headerBgColor = computed(() => themeStore.getSelectedHeaderColor.hex)
const headerTextColor = ref(getTextColor(themeStore.getSelectedSidebarColor.hex))
const headerBoxShadow = ref(`4px 4px 4px ${headerBgColor.value}`)

const changeTheme = () => {
  themeStore.setSelectedItem();
};

const pickColor = (color: ColorItem) => {
  console.log({ color });
  const themeName = generateName(8);

  generateTheme(themeName, color.hex)
    .then((theme: ThemeItem) => {
      console.log(theme);
      themeStore.addCustomThemeItem(theme);
      console.log(themeStore.items);
    })
    .catch((e: Error) => console.error(e.message));
};

watch(headerBgColor, (val, old) => {
  console.log({val, old})
  headerBoxShadow.value = `4px 2px 4px ${val}`
  headerTextColor.value = getTextColor(val);
})
onMounted(async () => {
  await themeStore.loadThemeItems();
  themeStore.setSelectedItem();
});
</script>

<template>
  <header
    class="header-container"
    :style="{ backgroundColor: headerBgColor, 
      color: headerTextColor, 
      borderBottomColor: primaryTextColor,
      boxShadow: headerBoxShadow
    }"
  >
    <div class="header-menu"></div>
    <div class="header-title">
      <h1><a href="#">Cards</a></h1>
      <h2>play games;</h2>
      <h3>Headeer Hex Color: {{ headerBgColor }}</h3>
      <h3>Header Text Color: {{ headerTextColor }}</h3>
      <h3>Primary Hex Color: {{ primaryHexColor }}</h3>
      <h3>Primary Text Color: {{ primaryTextColor }}</h3>
    </div>
    <div class="header-sidebar">
      <div class="d-flex flex-column align-items-end">
        <div class="py-4">
          <button id="changeTheme" @click="changeTheme">
            {{ currentTheme?.name }}: {{ primaryHexColor }}
          </button>
        </div>
        <div class="py-4">
          <WarbleCard>
            <ColorPicker @pick-color="pickColor"></ColorPicker>
          </WarbleCard>
        </div>
      </div>
    </div>
  </header>
</template>
