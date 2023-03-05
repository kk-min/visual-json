# Visual JSON
The JSON data format is a great way to store hierarchical and nested data, but it becomes difficult to read and analyze when the nested layers start to increase. Visual JSON aims to display complex JSON files in a top-down tree approach for easier and quicker analysis of a JSON object's structure.

# Features
- Key value pairs are displayed in a `key : value` format in a node
- Nested objects are represented by a node with its key value, with subnodes that represent its contents
- JSON arrays are distinguished via the `[ "key"  ]` format in a node, with its elements represented as its subnodes
- Nested objects without a key (e.g. an object in a list) are displayed under a root node with a key of "_"
- String values are distinguished via quotations ("") while numbers and booleans have no quotations. Null values are represented as NULL.

# Example

The following data:
```JSON
{
	"sample_object": {
		"sample_key": "sample_value"
	},
	"sample_value_top": 3,
	"sample_list": [
		"sample_value_1",
		"sample_value_2",
		"sample_value_3"],
	"nested_list" : [
		"nested_value",
		{
			"deeper_key": "deeper_value",
			"another_key": "another_value"
		}],
		"nested_object": {
			"nested_key": "nested_value",
			"nested_key_2": {
				"nested_key_2_1": "nested_value_2_1",
				"nested_key_2_2": "nested_value_2_2",
				"boolean_key" : true
			}
		}, 
		"null_key" : null
}

```

Will be represented as:

![example](https://user-images.githubusercontent.com/76023265/222946209-f50c7d39-4bbd-4852-a5ce-c5e6d4880938.png)

