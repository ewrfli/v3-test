import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'mian',
  state: () =>({
    name: 'name-来自pinia'
  }),
  // getters
  getters: {
    nameLength: (state) => state.name.length,
  },
  actions: {
    async insertPost(data:string){
      // 可以做异步
      // await doAjaxRequest(data);
      this.name = data;
    }
  }
})
