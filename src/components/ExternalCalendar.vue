<template>
  <div class="external-calendar">
    <div class="calendar-header">
      <button @click="prevMonth">이전</button>
      <h2>{{ currentYear }}년 {{ currentMonth + 1 }}월</h2>
      <button @click="nextMonth">다음</button>
    </div>
    <vc-calendar
      :attributes="attributes"
      is-expanded
      @dayclick="handleDayClick"
      @update:month="handleMonthChange"
    />
    <div v-if="showModal" class="modal">
      <!-- 모달 내용 -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useDrinkStatusStore } from '@/pinia/stores/drinkStatusStore';

const store = useDrinkStatusStore();
const today = new Date();
const currentYear = ref(today.getFullYear());
const currentMonth = ref(today.getMonth());
let currentStart = ref('');
let currentEnd = ref('');
const attributes = ref([] as any);
const showModal = ref(false);

function formatDate(date: Date): string {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}${mm}${dd}`;
}

async function loadCalendar() {
  currentStart.value = formatDate(new Date(currentYear.value, currentMonth.value, 1));
  currentEnd.value = formatDate(new Date(currentYear.value, currentMonth.value + 1, 0));
  await store.fetchStatuses(currentStart.value, currentEnd.value);
}

onMounted(loadCalendar);
function prevMonth() { /* ... */ }
function nextMonth() { /* ... */ }
function handleDayClick(day: any) { /* ... */ }
function handleMonthChange(m: any) { /* ... */ }
</script>

<style scoped>
.external-calendar { max-width: 700px; margin: auto; }
</style>