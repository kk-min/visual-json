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
				return <div key={item.key}>
					<div className="Node">{Array.isArray(item.element) ? "[ " : ""}{item.key as string}{Array.isArray(item.element) ? " ]" : ""}</div>
					{Array.isArray(item.element) ? <div className="Level">{(item.element as Array<any>).map((subitem) => (typeof subitem === 'object') ? <div key={subitem.uniqueId}><div className="Node">{"JSON OBJECT"}</div><Node jsonObj={subitem} /></div> : <div key={subitem.uniqueId} className="Node">{subitem}</div>)}</div> : <Node jsonObj={item.element} />}
				</div>;
			} else {
				return <div key={item.key} className="Node">{item.key + " : " + item.element as string}</div>;
			}
		})
	}</div >;


}
