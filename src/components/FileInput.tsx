import { useFileStore } from '../data/filestore'

export default function FileInput() {
	const setFile = useFileStore((state: any) => state.setFile);
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			setFile(file);
		}
	};

	return (<input type="file" accept=".json" onChange={handleFileChange} />);
}
