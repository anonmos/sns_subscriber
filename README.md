# SNS Subscriber

Super simple (think hello world) Express app that has two endpoints:
- /
- /last

POSTing to `/` will store the request body in a local variable in-memory.
GETing from `/last` will get the last value stored.

This has been made so that a proper test endpoint could verify the content
that is being output from SNS.