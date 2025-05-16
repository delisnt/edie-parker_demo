export function titleToId(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Sostituisce tutti gli spazi con "-"
    .replace(/[^a-z0-9\-]/g, "") // Rimuove tutto tranne lettere, numeri e trattini
    .replace(/\-+/g, "-") // Rimpiazza trattini multipli con uno solo
    .replace(/^-+|-+$/g, ""); // Rimuove trattini iniziali e finali
}

export function titleToString(str: string): string {
  return str
    .replace(/-/g, " ") // Sostituisce i trattini con spazi
    .toUpperCase(); // Converte tutto in maiuscolo
}

export const cutAfterSlash = (str: string):string => {
  return str.split('/')[0];
}

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

import { useDispatch, useSelector, useStore } from 'react-redux'
import type { AppDispatch, AppStore, RootState } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()