# Study Topics

## Streaming in NodeJs

- Readable
- Writable
- Transform
- Duplex

## Buffer in NodeJs

This study Module was covered, how Streaming and Buffer works and how Node uses it with the http server.

Was developed a basic API that create and list users, initially just in memory than we persisted it in a local file, covered the concept of middleware and code splitting.

## Data transfer

- URL: !! don't use this for sensitive data

  - Query Parameters: URL Stateful => Filters, Pagination, not required;
    -- http://localhost:3333/users?userId=25&name=Luiz

  - Route Parameters:
    -- http://localhost:3333/users/25

- Request Body: usually used to pass formulary data to the server, and they are encrypted when using HTTP(s) protocol

## Routes

- handling router params with RegExp with groups to get the route parameters
