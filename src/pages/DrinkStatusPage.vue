<template>
  <div class="drink-status-page">
    <h2>금주 현황 체크</h2>
    <ExternalCalendar />
    <DrinkStatusList />
  </div>
</template>

<script setup lang="ts">
import ExternalCalendar from '@/components/ExternalCalendar.vue';
import DrinkStatusList from '@/components/DrinkStatusList.vue';
</script>

<style scoped>
.drink-status-page { max-width:800px; margin:auto; padding:1rem; }
</style>