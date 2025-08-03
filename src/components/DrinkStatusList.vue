<template>
  <div class="status-list">
    <h3>음주/금주 기록 목록</h3>
    <ul>
      <li
        v-for="r in sortedStatuses" :key="r.id"
        :class="['item', r.drank==='Y'? 'drank':'not-drank']"
      >
        <div class="date">{{ formatDate(r.statusDate) }}</div>
        <div class="status">{{ r.drank==='Y'? '음주':'금주' }}</div>
        <div class="notes">{{ r.notes }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDrinkStatusStore } from '@/pinia/stores/drinkStatusStore';
const store = useDrinkStatusStore();
const sortedStatuses = computed(() =>
  store.statuses.slice().sort((a,b)=> b.statusDate.localeCompare(a.statusDate))
);
function formatDate(s: string) {
  return s.slice(0,4)+'-'+s.slice(4,6)+'-'+s.slice(6,8)+' '+s.slice(9);
}
</script>

<style scoped>
.status-list { margin-top:2rem; background:#fafafa; padding:1rem; border-radius:8px; }
.status-list ul { list-style:none; padding:0; margin:0; }
.status-list .item { display:grid; grid-template-columns:2fr 1fr 3fr; align-items:center; padding:0.75rem; border-bottom:1px solid #e0e0e0; }
.status-list .item.drank { border-left:4px solid #e74c3c; }
.status-list .item.not-drank { border-left:4px solid #3498db; }
.status-list .date { font-weight:500; color:#555; }
.status-list .status { text-align:center; font-weight:600; color:#333; }
.status-list .notes { color:#666; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
</style>