import { useFileStore } from '../data/filestore';

function Visualizer() {
	const file = useFileStore((state: any) => state.file);
}
