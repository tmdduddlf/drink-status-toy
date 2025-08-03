import { defineStore } from 'pinia';

type StatusRecord = {
  id: number;
  statusDate: string;
  drank: string;
  notes: string;
};

export const useDrinkStatusStore = defineStore('drinkStatus', {
  state: () => ({
    statuses: [] as StatusRecord[]
  }),
  actions: {
    async fetchStatuses(_start?: string, _end?: string) {
      this.statuses = [
        { id: 1, statusDate: '20250301 08:00', drank: 'Y', notes: '파티에서 음주' },
        { id: 2, statusDate: '20250302 09:30', drank: 'N', notes: '금주 유지' },
        { id: 3, statusDate: '20250303 10:15', drank: 'Y', notes: '점심에 한 잔' },
        { id: 4, statusDate: '20250304 12:00', drank: 'N', notes: '완전 금주' }
      ];
    },
    async createStatus(record: StatusRecord) {
      record.id = this.statuses.length + 1;
      this.statuses.push(record);
    },
    async updateStatus(id: number, record: StatusRecord) {
      const idx = this.statuses.findIndex(r => r.id === id);
      if (idx !== -1) this.statuses.splice(idx, 1, record);
    }
  }
});