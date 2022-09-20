<template>
  <div class="about">
    <div class="container">
      <h1>Sikkert - men hvor er min styling?</h1>
      <div>
        <textarea v-model="text"></textarea>
        <div>
          {{ text }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const text = ref<string>("");
</script>
<style>
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
