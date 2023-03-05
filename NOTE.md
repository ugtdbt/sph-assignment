# Mysql docker-compose

To run mysql servers. run below comand in dockerfiles folder

`docker-compose up -d`

# Express server 

- Run unit test

`npm run test`
`npm run test:coverage`

- Code Formatter

`npm run format`
`npm run format:check`

## Unit Test Coverage

`npm run test:coverage`

```
----------------|---------|----------|---------|---------|-------------------
File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------------|---------|----------|---------|---------|-------------------
All files       |    94.8 |      100 |     100 |   93.84 |
 controller     |   91.11 |      100 |     100 |   88.57 |
  note.ts       |   91.11 |      100 |     100 |   88.57 | 33,47,68,83
 db             |     100 |      100 |     100 |     100 |
  config.ts     |     100 |      100 |     100 |     100 |
  testconfig.ts |     100 |      100 |     100 |     100 |
 models         |     100 |      100 |     100 |     100 |
  note.ts       |     100 |      100 |     100 |     100 |
 routes         |     100 |      100 |     100 |     100 |
  note.ts       |     100 |      100 |     100 |     100 |
 utils          |     100 |      100 |     100 |     100 |
  server.ts     |     100 |      100 |     100 |     100 |
----------------|---------|----------|---------|---------|-------------------
Test Suites: 5 passed, 5 total
Tests:       8 passed, 8 total
Snapshots:   0 total
Time:        7.075 s
```

# Reactjs client


## Available Scripts

In the project directory, you can run:

- Runs the app in the development mode

`npm start`

- Builds the app for production to the `build` folder.\

`npm run build`

## Aditional Added Scripts

- Run unit test

`npm run test`

`npm run test:coverage`



### Unit Test Coverage

`yarn test:coverage`

```
PASS  src/components/Input/Input.test.tsx
 PASS  src/components/TextArea/TextArea.test.tsx
--------------------------|---------|----------|---------|---------|-------------------
File                      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--------------------------|---------|----------|---------|---------|-------------------
All files                 |    6.33 |     2.81 |    9.58 |    6.48 |                   
 src                      |       0 |        0 |       0 |       0 |                   
  MainLayout.tsx          |       0 |      100 |       0 |       0 | 4-17              
  index.tsx               |       0 |      100 |     100 |       0 | 9-23              
  reportWebVitals.ts      |       0 |        0 |       0 |       0 | 3-10              
  routes.tsx              |       0 |        0 |       0 |       0 |                   
 src/components           |       0 |        0 |       0 |       0 |                   
  IFormField.ts           |       0 |        0 |       0 |       0 |                   
  index.ts                |       0 |        0 |       0 |       0 |                   
 src/components/Input     |     100 |       50 |     100 |     100 |                   
  Input.tsx               |     100 |       50 |     100 |     100 | 27                
  index.ts                |       0 |        0 |       0 |       0 |                   
 src/components/TextArea  |     100 |       50 |     100 |     100 |                   
  TextArea.tsx            |     100 |       50 |     100 |     100 | 24                
  index.ts                |       0 |        0 |       0 |       0 |                   
 src/config               |       0 |      100 |     100 |       0 |                   
  config.ts               |       0 |      100 |     100 |       0 | 1                 
 src/pages                |       0 |        0 |       0 |       0 |                   
  AddNotespage.tsx        |       0 |        0 |       0 |       0 | 18-117            
  EditNotePage.tsx        |       0 |        0 |       0 |       0 | 18-133            
  ListNotesPage.tsx       |       0 |        0 |       0 |       0 | 15-117            
  index.ts                |       0 |        0 |       0 |       0 |                   
  validationSchema.ts     |       0 |        0 |       0 |       0 |                   
 src/state                |       0 |      100 |     100 |       0 |                   
  index.ts                |       0 |        0 |       0 |       0 |                   
  store.ts                |       0 |      100 |     100 |       0 | 5                 
 src/state/actionCreators |       0 |      100 |       0 |       0 |                   
  noteActionCreator.ts    |       0 |      100 |       0 |       0 | 8-154             
 src/state/actionTypes    |       0 |        0 |       0 |       0 |                   
  noteActionTypes.ts      |       0 |        0 |       0 |       0 |                   
 src/state/reducers       |       0 |        0 |       0 |       0 |                   
  index.ts                |       0 |      100 |     100 |       0 | 8                 
  noteAddReducer.ts       |       0 |        0 |       0 |       0 | 5-50              
  noteByIdReducer.ts      |       0 |        0 |       0 |       0 | 5-53              
  noteDeleteReducer.ts    |       0 |        0 |       0 |       0 | 5-50              
  noteEditReducer.ts      |       0 |        0 |       0 |       0 | 5-50              
  noteReducer.ts          |       0 |        0 |       0 |       0 | 5-41              
 src/utils                |   66.66 |      100 |      50 |   66.66 |                   
  Interfaces.ts           |       0 |        0 |       0 |       0 |                   
  matchMedia.js           |   66.66 |      100 |      50 |   66.66 | 3,27              
  types.ts                |       0 |        0 |       0 |       0 |                   
--------------------------|---------|----------|---------|---------|-------------------

Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        5.007 s
```