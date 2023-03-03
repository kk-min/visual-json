import create from 'zustand';

export const useFileStore = create((set: any) => ({
	file: null,
	setFile: (file: File) => set({ file }),
}));
