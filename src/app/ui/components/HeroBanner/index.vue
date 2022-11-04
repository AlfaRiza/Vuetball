<template>
  <div class="hero-body">
    <div class="left-section">
      <div v-if="isLoading" class="py-8 bg-gray-300 animate-pulse">
      </div>
      <h1 class="text-heading">
        {{ title }}
      </h1>
      <div v-if="isLoading" class="py-4 bg-gray-300 animate-pulse mt-5">
        </div>
      <p v-else class="text-body">
        {{ subtitle }}
      </p>
      <slot name="left" />
    </div>
    <div class="right-section">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  title: {
    type: String,
    required: false,
    default: ''
  },
  subtitle: {
    type: String,
    required: false,
    default: ''
  },
  isLoading: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<style scoped lang="scss" src="./style.scss"></style>
