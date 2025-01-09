import { create } from 'zustand';

export const useGuessNumber = create((set) => ({
	goalNumber: '',
	setGoalNumber: (goalNumber: string) => set({goalNumber}),
}));