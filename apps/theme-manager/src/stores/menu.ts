import { defineStore } from 'pinia'
import { MenuItem } from '@/classes/MenuItem'


interface IMenuStore {
  items: MenuItem[]
  pendingStateChanges: 0
}

export const useMenuStore = defineStore('menu', {
  state: (): IMenuStore => ({
    items: [] as MenuItem[],
    pendingStateChanges: 0,
  }),
  getters: {
    getLoading: (state: IMenuStore): boolean =>
      state.pendingStateChanges > 0,
    getItems: (state: IMenuStore): MenuItem[] =>
      state.items,
    getSelectedItem: (state: IMenuStore) => (name: string): MenuItem | undefined => { console.log(name);return state.items.find(x => x.to.name === name) },
  },
  actions: {
    async loadMenuItems() {
      try {
        this.pendingStateChanges++
        this.items = [
          {
            key: 'eights',
            value: 'eights',
            to: { name: 'cards.eights' },
            description: 'play a game of eights with your friend or a computer'

          },
          {
            key: 'rummy',
            value: 'rummy',
            to: { name: 'cards.rummy' },
            description: 'play a game of rummy with your friend or a computer'
          },
          {
            key: 'war',
            value: 'war',
            to: { name: 'cards.war' },
            description: 'play a game of war with your friend or a computer'
          },
          {
            key: 'theme',
            value: 'theme-manager',
            to: { name: 'manage.themes' },
            description: 'manage your themes'
          }

        ]
        this.pendingStateChanges--
      } catch (err) {
        console.error(err)
        console.log('Error loading Menu Items')
      }
    },
  }
})
