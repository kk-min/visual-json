import { useFileStore } from '../data/filestore';
import Node from './Node';

export default function Visualizer() {
	const { json, fileName } = useFileStore((state: any) => state);
	if (!json) return null;
	return <div><h1>{fileName}</h1> <Node jsonObj={json} /></div>
}
