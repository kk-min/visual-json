import { useFileStore } from '../data/filestore';
import Node from './Node';

export default function Visualizer() {
	const json = useFileStore((state: any) => state.file);
	if (!json) return null;
	return <Node jsonObj={json} />;
}
