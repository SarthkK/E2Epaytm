import { create } from "zustand";

export interface BalanceState {
    balance: number;
    deposit: (amount: number) => void;
    withdraw: (amount: number) => void;
}

const useBalance = create<BalanceState>((set)=>({
    balance: 0,
    deposit: (amount: number) => set((state) => ({balance: state.balance + amount})),
    withdraw: (amount: number) => set((state) => ({balance: state.balance - amount}))
}))

export default useBalance;