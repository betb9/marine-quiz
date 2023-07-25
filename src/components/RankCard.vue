<template>
  <div class="item">
    <figure>
      <img width="75" height="140" :src="image" :alt="rankModel.name" />
      <figcaption v-if="!quizMode">{{ rankModel.name }}</figcaption>
    </figure>
  </div>
</template>

<script setup lang="ts">
import {type Rank} from '@/models/Rank';
import {computed} from "vue";

const props = defineProps<{
  rankModel: Rank;
  quizMode: boolean;
}>();
const image = computed(() => `/img/${props.rankModel.imageName}`);

</script>

<style scoped>
</style>
