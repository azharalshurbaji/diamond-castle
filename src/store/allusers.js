// Utilities
import { axios } from '@/plugins/axios'
import { defineStore } from 'pinia'

export const useAllUsers = defineStore('allusers', {
  persist: true,

  state: () => ({
    users: [],
    // token: null,
}),

  getters: {
    usersCount (state) {
      return state.users.length
    }
  },

  actions: {
    
        
    
      
  },
    logout() {
      this.users = {}
      delete axios.defaults.headers.common.Authorization
    }

  })
