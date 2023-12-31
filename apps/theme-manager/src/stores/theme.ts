import { defineStore } from 'pinia'
import { ThemeItem, ColorItem } from '@/classes/ThemeItem'
import { black, primary, simple, warble } from '@/classes/themes'


interface IThemeStore {
    items: ThemeItem[]
    pendingStateChanges: number
    selectedItem: ThemeItem
}

export const useThemeStore = defineStore('theme', {
    state: (): IThemeStore => ({
        items: [warble, primary, simple, black],
        pendingStateChanges: 0,
        selectedItem: warble
    }),
    getters: {
        getLoading: (state: IThemeStore): boolean =>
            state.pendingStateChanges > 0,
        getItems: (state: IThemeStore): ThemeItem[] =>
            state.items,
        getSelectedItem: (state: IThemeStore): ThemeItem | undefined => state.selectedItem,
        getSelectedMainColor: (state: IThemeStore): ColorItem => state.selectedItem.main,
        getSelectedHeaderColor: (state: IThemeStore): ColorItem => state.selectedItem.header,
        getSelectedSidebarColor: (state: IThemeStore): ColorItem => state.selectedItem.sidebar,
    },
    actions: {
        async loadThemeItems() {
            try {
                this.pendingStateChanges++
                this.items = [
                    warble,
                    primary,
                    simple,
                    black,
                ]
                this.pendingStateChanges--
            } catch (err) {
                console.error(err)
                console.log('Error loading Theme Items')
            }
        },
        setSelectedItem() {
            let cIndex = this.items.findIndex((t) => t.name === this.selectedItem.name) ?? 1; //this.items.length;
            if (++cIndex >= this.items.length) {
                cIndex = 0;
            }
            this.selectedItem = this.items[cIndex];
        },
        addCustomThemeItem(theme: ThemeItem, setActive: boolean = true) {
            this.items.push(theme);
            if (setActive) {
                this.selectedItem = this.items[this.items.length - 1];
            }
        }
    }
})
