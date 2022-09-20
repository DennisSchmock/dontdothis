<template>
  <div class="about">
    <div class="container">
      <h1>Styling og renskuret</h1>
      <div>
        <textarea v-model="text"></textarea>

        <!-- Sonarqube brokker sig heldigvis her -->
        <div v-html="sanitizedText"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import DOMPurify from "dompurify";
const text = ref<string>("");

const sanitizedText = computed(() => {
  return DOMPurify.sanitize(text.value);
});
</script>

<style scoped>
@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: flex-start;
  }
}
.container {
  display: flex;
  flex-direction: column;
}

textarea {
  width: 400px;
  height: 400px;
}
</style>
