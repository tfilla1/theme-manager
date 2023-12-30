<script setup lang="ts">
import { useDialog } from '@/stores/dialog';
import { computed } from 'vue';

const dialog = useDialog();

const visible = computed(() => dialog.visible);
</script>
<template>
  <div v-if="visible" class="dialog">
    <div class="dialog-content">
      <slot />
    </div>
  </div>
  <!-- <teleport to="body">
    <transition name="dialog">
    </transition>
  </teleport> -->
</template>

<style>
/* Dialog styles */
.dialog {
  background-color: #f0a;
}

.dialog-content {
  background-color: #0af;
}
</style>
