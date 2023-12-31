<script setup lang="ts">
import { computed, ref } from 'vue';

import { useRouter } from 'vue-router';
import { useThemeStore } from '@/stores/theme';

const router = useRouter();
const themeStore = useThemeStore();

const primaryHexColor = computed(() => themeStore.getSelectedMainColor.hex);

const title = ref('welcome');
const description = computed(
  () => 'wanna play ' + router.currentRoute.value.name?.toString().split('.')[1] + '?'
);
</script>

<template>
  <div>
    <h1 style="text-align: center">{{ title }}</h1>
    <h3>{{ description }}</h3>
    <div class="cards">
      <div class="cards-button">
        <button id="playButton" class="play-button" :style="{ color: primaryHexColor }">
          play
        </button>
      </div>
      <div class="cards-results">
        <!-- <div id="results"></div> -->
      </div>
    </div>
  </div>
</template>

<style>
/* cards.css */
.play-button {
  border: none;
  width: 100px;
  height: 50px;
  font-size: 20px;
  border-radius: 25px;
  color: #f0a;
  /* color: #000000; */

  background-color: #333;
  /* background-color: #c08; */
  /* background-color: var(--button-bg-color); */
  border-bottom: solid 1px #111;
  /* border-bottom: solid 1px #f6c; */
  /* border-bottom: solid 1px var(--button-border-shadow-color); */
  box-shadow: 1px 2px 4px #111;
  /* box-shadow: 1px 2px 4px #f6c; */
  /* box-shadow: 1px 2px 4px var(--button-border-shadow-color); */
  /* 
    background-color: #9b61ec;
    border-bottom: solid 1px rgba(141,74,233,0.5);
    box-shadow: 1px 2px 4px rgba(141,74,233,0.5);
    */
  outline: none;
}

.play-button:active {
  background-color: var(--button-active-bg-color);
  border-bottom: solid 1px var(--button-active-bg-color);
  box-shadow: 1px 2px 4px var(--button-active-bg-color);
}
.cards-button {
  grid-area: cardsButton;
  margin: auto;
}
.cards-results {
  grid-area: cardsResults;
}
.cards {
  display: grid;
  grid-template-columns: 12fr;
  grid-template-rows: 6fr 6fr;
  grid-template-areas:
    'cardsButton'
    'cardsResults';
}
</style>
