import { useFileStore } from '../data/filestore';
import Node from './Node';

const fileReader = new FileReader();
export default function Visualizer() {
	const file = useFileStore((state: any) => state.file);
	if (!file) return null;
	fileReader.readAsText(file, 'UTF-8');
	fileReader.onload = (e: any) => {
		const content = e.target.result;
		const json = JSON.parse(content);
		return (<Node {...json} />)
	}
	return null;
}
