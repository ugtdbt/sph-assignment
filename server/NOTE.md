## Aditional Added Scripts

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
