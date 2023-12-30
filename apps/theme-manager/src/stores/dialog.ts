import { defineStore } from 'pinia'

interface IDialogStore {
    visible: boolean,
    pendingStateChanges: number
}

export const useDialog = defineStore('dialog', {
    state: (): IDialogStore => ({
        visible: true,
        pendingStateChanges: 0
    }),
    getters: {
        getLoading: (state: IDialogStore) => state.pendingStateChanges > 0
    },
    actions: {
        toggle() {
            this.visible = !this.visible
        }
    }
})
