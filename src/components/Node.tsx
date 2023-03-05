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
				return <div >
					<div className="Node">{Array.isArray(item.element) ? "[ " : ""}{`"${item.key}"`}{Array.isArray(item.element) ? " ]" : ""}</div>
					{Array.isArray(item.element) ? <div className="Level">{(item.element as Array<any>).map((subitem) => (typeof subitem === 'object') ? <div ><div className="Node">{Array.isArray(subitem) ? "[ " : "{ "}{"_"}{Array.isArray(subitem) ? " ]" : " }"}</div><Node jsonObj={subitem} /></div> : <div className="Node">{typeof subitem === "string" ? `"${subitem}"` : subitem}</div>)}</div> : <Node jsonObj={item.element} />}
				</div>;
			} else {
				const element = typeof item.element === "string" ? `"${item.element}"` : item.element;
				return <div className="Node">{`"${item.key}"` + " : " + element}</div>;
			}
		})
	}</div >;


}
