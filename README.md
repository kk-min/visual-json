# Visual JSON
_Copyright © 2023 kk-min_  

The JSON data format is a great way to store hierarchical and nested data, but it becomes difficult to read and analyze when the nested layers start to increase. Visual JSON aims to display complex JSON files in a top-down tree approach for easier and quicker analysis of a JSON object's structure.

## Requirements

- [Node.js](https://nodejs.org/en/) installed

## Usage

1. Change directory to project root directory in CLI
2. Run `npm install` to install dependencies
3. Run `npm start`

## Features
- Key value pairs are displayed in a `key : value` format in a node
- Nested objects are represented by a node with its key value, with subnodes that represent its contents
- JSON arrays are distinguished via the `[ "key" ]` format in a node, with its elements represented as its subnodes
- Nested objects and lists without keys (e.g. an object/list in a list) are displayed and differentiated under a root node with keys of "{ _ }" and "[ _ ]"
- String values are distinguished via quotations (" ") while number and boolean values have no quotations. Null values are represented as NULL.

## Example

The following data:
```JSON
{
   "sample_object":{
      "sample_key":"sample_value"
   },
   "nested_list":[
      "nested_value",
      {
         "deeper_key":"deeper_value",
         "another_key":"another_value"
      }
   ],
   "nested_object":{
      "nested_key":"nested_value",
      "nested_key_2":{
         "nested_key_2_1":"nested_value_2_1",
         "nested_key_2_2":"nested_value_2_2",
         "boolean_key":true,
         "nested_object_2":{
            "nested_key_3":"nested_value_3",
            "nested_list_2":[
               "nested_value_1",
               "nested_value_2",
               "nested_value_3",
               [
                  "nested_value_4",
                  "nested_value_5",
                  "nested_value_6"
               ],
               {
                  "nested_key_4":"nested_value_4",
                  "nested_key_5":"nested_value_5"
               }
            ]
         }
      }
   },
   "null_key":null
}
```

Will be represented as:
![example](https://user-images.githubusercontent.com/76023265/222950563-16b0076b-0993-468a-8afa-2f9e8011d2ae.png)


