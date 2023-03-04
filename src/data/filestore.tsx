import { create } from 'zustand';

const fileReader = new FileReader();
export const useFileStore = create((set: any) => ({
	file: null,
	setFile: (file: File) => {
		fileReader.readAsText(file, 'UTF-8');
		fileReader.onload = (e: any) => {
			const content = e.target.result;
			const json = JSON.parse(content);
			set({ file: json })
		}
	},
}));
