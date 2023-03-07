import "./css/Node.css";
import { useState } from "react";

interface NodeProps {
	jsonObj: JSON | null;
	expand: boolean;
	keyless: boolean;
}

const defaultProps: NodeProps = {
	jsonObj: null,
	expand: true,
	keyless: false,
}

Node.defaultProps = defaultProps;

export default function Node(props: NodeProps) {
	const { jsonObj } = props;
	const [expandState, setExpandState] = useState(props.expand);

	const onNodeClick = () => {
		setExpandState((prev: boolean) => !prev)
	}
	if (jsonObj === null) {
		return <div className="Node">NULL</div>;
	}

	if (props.keyless) {
		return <div>
			<div className="Node" onClick={onNodeClick}>{Array.isArray(jsonObj) ? `[ ` : `{ `}{`_`}{Array.isArray(jsonObj) ? ` ]` : ` }`}</div>
			<div className="Level">
				{!expandState ? null : Object.entries(jsonObj).map(([key, value]) => {
					if (typeof value === 'object') {
						return <div>
							<div className="Node" onClick={onNodeClick}>{Array.isArray(value) ? "[ " : "{ "}{`"${key}"`}{Array.isArray(value) ? " ]" : " }"}</div>
							{!expandState ? null : Array.isArray(value) ? <div className="Level">{(value as Array<any>).map((subitem) => (typeof subitem === 'object') ? <Node jsonObj={subitem} keyless={true} /> : <div className="Node Leaf">{typeof subitem === "string" ? `${subitem}` : subitem}</div>)}</div> : <Node jsonObj={value} />}
						</div>
					} else {
						const displayValue = typeof value === "string" ? `"${value}"` : value;
						return <div className="Node Leaf">{`"${key}" : ` + displayValue}</div>
					}
				})}
			</div>
		</div>
	}

	let level = Object.entries(jsonObj)
	return <div className="Level">{
		level.map(([key, value]) => {
			if (typeof value === 'object') {
				return <div >
					<div className="Node" onClick={onNodeClick}>{Array.isArray(value) ? "[ " : ""}{`"${key}"`}{Array.isArray(value) ? " ]" : ""}</div>
					{!expandState ? null : Array.isArray(value) ? <div className="Level">{(value as Array<any>).map((subitem) => (typeof subitem === 'object') ? <Node jsonObj={subitem} keyless={true} /> : <div className="Node Leaf">{typeof subitem === "string" ? `"${subitem}"` : subitem}</div>)}</div> : <Node jsonObj={value} />}
				</div>;
			} else {
				const displayValue = typeof value === "string" ? `"${value}"` : value;
				return <div className="Node Leaf">{`"${key}" : ` + displayValue}</div>;
			}
		})
	}</div >;


}
