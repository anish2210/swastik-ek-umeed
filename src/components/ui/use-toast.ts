import { Toast, ToasterToast } from "@/components/ui/toast"
import { create } from "zustand"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterStore = {
  toasts: ToasterToast[]
  addToast: (toast: Toast) => void
  dismissToast: (toastId: string) => void
  removeToast: (toastId: string) => void
}

export const useToast = create<ToasterStore>((set, get) => ({
  toasts: [],
  addToast: (toast: Toast) => {
    set((state) => {
      const { toasts } = state

      const nextToasts = [...toasts]

      const existingToast = nextToasts.find((t) => t.id === toast.id)

      if (existingToast) {
        return state
      }

      if (nextToasts.length >= TOAST_LIMIT) {
        nextToasts.shift()
      }

      nextToasts.push({
        ...toast,
        id: toast.id || String(Math.random()),
        title: toast.title,
        description: toast.description,
        action: toast.action,
      })

      return {
        ...state,
        toasts: nextToasts,
      }
    })
  },
  dismissToast: (toastId: string) => {
    set((state) => ({
      ...state,
      toasts: state.toasts.map((t) =>
        t.id === toastId
          ? {
              ...t,
              dismissed: true,
            }
          : t
      ),
    }))
  },
  removeToast: (toastId: string) => {
    set((state) => ({
      ...state,
      toasts: state.toasts.filter((t) => t.id !== toastId),
    }))
  },
}))

export { TOAST_REMOVE_DELAY } 