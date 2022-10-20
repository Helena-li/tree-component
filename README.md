### Run the application: `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# tree-component

This repository is to create a tree component with specific data structure. It uses Reactjs with Typescript.

there's several folders:
1. MockData - the test data 
2. Services - get the test data
3. Utils - transfer the give data to expected data structure
4. Models - models
5. Component/FamilyTreeComponent - tree component

inside component:
- the index file is the access point
- the FamilyTree is rendered by recursion method
- member is the node in the tree, which includes a couple or a person.

Some data issue is ignored though, for instance, child not existed in the data.