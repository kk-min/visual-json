import { create } from 'zustand';

const fileReader = new FileReader();
export const useFileStore = create((set: any) => ({
	json: null,
	fileName: "",
	setFile: (file: File) => {
		fileReader.readAsText(file, 'UTF-8');
		fileReader.onload = (e: any) => {
			const content = e.target.result;
			const json = JSON.parse(content);
			set({ json: json, fileName: file.name })
		}
	},
}));
