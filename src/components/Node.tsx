import "./css/Node.css";
import { useState } from "react";

interface NodeProps {
	jsonObj: JSON | null;
	expand: boolean;
	keyText: string | null;
}

const defaultProps: NodeProps = {
	jsonObj: null,
	expand: true,
	keyText: "",
}

Node.defaultProps = defaultProps;

export default function Node(props: NodeProps) {
	const { jsonObj, keyText } = props;
	const [expandState, setExpandState] = useState(props.expand);

	const onNodeClick = () => {
		setExpandState((prev: boolean) => !prev)
	}

	if ((jsonObj === null) || (typeof jsonObj !== "object")) {
		const displayValue = typeof jsonObj === "string" ? `"${jsonObj}"` : jsonObj;
		return <div className="Node Leaf">{`"${keyText}" : ` + displayValue}</div>;
	}

	let level = Object.entries(jsonObj)
	return <div>
		<div className="Node" onClick={onNodeClick}>
			<div className={"Arrow" + (expandState ? "Open" : "")}>▶</div><div className="NodeText">{`${keyText}`}</div><div className="Arrow" />
		</div>
		{expandState ? <div className="Level">{
			level.map(([key, value]) => {
				if ((typeof value === "object") && (value !== null)) {
					return <div>
						<div className="Level"><Node keyText={(Array.isArray(value) ? "[ " : "{ ") + (Array.isArray(jsonObj) ? "_" : key) + (Array.isArray(value) ? " ]" : " }")} jsonObj={value} />
						</div>
					</div>
				}
				else {
					const displayValue = typeof value === "string" ? `"${value}"` : value;
					return <div className="Node Leaf">{(Array.isArray(jsonObj) ? "" : (`"${key}" : `)) + displayValue}</div>;
				}
			})
		}</div > : null}</div>
}
