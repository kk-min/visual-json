import { useFileStore } from '../data/filestore';
import Node from './Node';

export default function Visualizer() {
	const file = useFileStore((state: any) => state.file);
	const json = file ? JSON.parse(file) : null;

	return (<Node {...json} />)
}
