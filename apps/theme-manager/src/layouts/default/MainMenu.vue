<script lang="ts" setup>
import { useMenuStore } from '@/stores/menu';
import { useThemeStore } from '@/stores/theme';
import { getTextColor } from '@/utils/lumineers';
import { computed, onMounted, ref, watch } from 'vue';

const menuStore = useMenuStore();
const themeStore = useThemeStore();

const items = computed(() => menuStore.getItems);

const menuBgColor = computed(() => themeStore.getSelectedSidebarColor.hex);
const menuBoxShadow = ref(`4px 2px 4px ${menuBgColor.value}`)
const menuTextColor = computed(() => getTextColor(menuBgColor.value));

watch(menuBgColor, (val, old) => {
  console.log({val, old})
  menuBoxShadow.value = `4px 2px 4px ${val}`
})
onMounted(async () => {
  menuStore.loadMenuItems();

  await themeStore.loadThemeItems()
  themeStore.setSelectedItem();
});
</script>

<template>
  <div class="menu" :style="{ color: menuTextColor, backgroundColor: menuBgColor, boxShadow: menuBoxShadow }">
    <div v-for="(i, index) in items" :key="index">
      <router-link :to="{ name: i.to.name }"> {{ i.value }} </router-link>
    </div>
  </div>
</template>
