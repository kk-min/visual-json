interface NodeProps {
	jsonObj: JSON | null;
}

export default function Node(props: NodeProps) {
	const { jsonObj } = props;
	if (jsonObj === null) {
		return <div>NULL</div>;
	}
	let level = [];
	for (const key in jsonObj) {
		if (jsonObj.hasOwnProperty(key)) {
			let element = jsonObj[key as keyof JSON]!;
			level.push(element);
		}
	}
	return <div>{
		level.map((element) => {
			if (typeof element === 'object') {
				return <Node jsonObj={element} />;
			} else {
				return <div>{element as string}</div>;
			}
		})
	}</div>;


}
