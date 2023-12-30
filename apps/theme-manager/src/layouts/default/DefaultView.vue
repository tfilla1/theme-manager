<script lang="ts" setup>
import Loader from './DefaultLoader.vue'
</script>

<template>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Transition mode="out-in">
        <KeepAlive>
          <Suspense>
            <!-- main content -->
            <div class="content" id="content">
              <component :is="Component"></component>
            </div>

            <!-- loading state -->
            <template #fallback>
              <Loader />
            </template>
          </Suspense>
        </KeepAlive>
      </Transition>
    </template>
  </RouterView>
</template>
