import "./css/Node.css";

interface NodeProps {
	jsonObj: JSON | null;
}

export default function Node(props: NodeProps) {
	const { jsonObj } = props;
	if (jsonObj === null) {
		return <div className="Node">NULL</div>;
	}
	let level = [];
	for (const key in jsonObj) {
		if (jsonObj.hasOwnProperty(key)) {
			let element = jsonObj[key as keyof JSON]!;
			level.push({ key, element });
		}
	}
	return <div className="Level">{
		level.map((item) => {
			if (typeof item.element === 'object') {
				return <div>
					<div className="Node">{item.key as string}</div>
					{Array.isArray(item.element) ? <div className="Node">{JSON.stringify(item.element)}</div> : <Node jsonObj={item.element} />}</div>;
			} else {
				return <div className="Node">{item.key + " : " + item.element as string}</div>;
			}
		})
	}</div>;


}
