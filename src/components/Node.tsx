import "./css/Node.css";

interface NodeProps {
	jsonObj: JSON | null;
}

export default function Node(props: NodeProps) {
	const { jsonObj } = props;
	if (jsonObj === null) {
		return <div className="Node">NULL</div>;
	}
	let level = Object.entries(jsonObj)
	return <div className="Level">{
		level.map(([key, value]) => {
			if (typeof value === 'object') {
				return <div >
					<div className="Node">{Array.isArray(value) ? "[ " : ""}{`"${key}"`}{Array.isArray(value) ? " ]" : ""}</div>
					{Array.isArray(value) ? <div className="Level">{(value as Array<any>).map((subitem) => (typeof subitem === 'object') ? <div ><div className="Node">{Array.isArray(subitem) ? "[ " : "{ "}{"_"}{Array.isArray(subitem) ? " ]" : " }"}</div><Node jsonObj={subitem} /></div> : <div className="Node">{typeof subitem === "string" ? `"${subitem}"` : subitem}</div>)}</div> : <Node jsonObj={value} />}
				</div>;
			} else {
				const displayValue = typeof value === "string" ? `"${value}"` : value;
				return <div className="Node">{`"${key}"` + " : " + displayValue}</div>;
			}
		})
	}</div >;


}
