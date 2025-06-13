# [![Purinton Dev](https://purinton.us/logos/brand.png)](https://discord.gg/QSBxQnX7PF)

## @purinton/rabbitmq [![npm version](https://img.shields.io/npm/v/@purinton/rabbitmq.svg)](https://www.npmjs.com/package/@purinton/rabbitmq)[![license](https://img.shields.io/github/license/purinton/rabbitmq.svg)](LICENSE)[![build status](https://github.com/purinton/rabbitmq/actions/workflows/nodejs.yml/badge.svg)](https://github.com/purinton/rabbitmq/actions)

> A simple, testable RabbitMQ client for Node.js supporting both ESM and CommonJS.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [ESM Example](#esm-example)
  - [CommonJS Example](#commonjs-example)
- [API](#api)
- [TypeScript](#typescript)
- [License](#license)

## Features

- Publish and consume messages with RabbitMQ using a simple API
- Supports both ESM and CommonJS
- Testable: allows injection of amqplib and logger for mocking
- TypeScript type definitions included
- Minimal dependencies

## Installation

```bash
npm install @purinton/rabbitmq
```

## Usage

### ESM Example

```js
import rabbitmq from '@purinton/rabbitmq';

// Publish a message
await rabbitmq.publish('myqueue', 'direct', { hello: 'world' });

// Consume messages
await rabbitmq.consume('myqueue', 'direct', (msg) => {
  console.log('Received:', msg);
});
```

### CommonJS Example

```js
const rabbitmq = require('@purinton/rabbitmq');

// Publish a message
rabbitmq.publish('myqueue', 'direct', { hello: 'world' });

// Consume messages
rabbitmq.consume('myqueue', 'direct', (msg) => {
  console.log('Received:', msg);
});
```

## API

### publish(queue, type, message, options?, { amqplibLib, logger }?)

Publishes a message to a RabbitMQ exchange.

- `queue` (string): The exchange/queue name
- `type` (string): The exchange type (e.g., 'direct', 'fanout', 'topic')
- `message` (any): The message payload (will be JSON-stringified)
- `options` (object, optional): Exchange options
- `{ amqplibLib, logger }` (object, optional): For dependency injection/testing

### consume(queue, type, onMessage, options?, { amqplibLib, logger }?)

Consumes messages from a RabbitMQ queue.

- `queue` (string): The queue name
- `type` (string): The exchange type
- `onMessage` (function): Callback for each message (receives parsed message)
- `options` (object, optional): Queue/exchange options
- `{ amqplibLib, logger }` (object, optional): For dependency injection/testing

### _resetRabbitMQTestState()

Closes any open connections/channels (for test cleanup).

## TypeScript

Type definitions are included:

```ts
import rabbitmq, { publish, consume, _resetRabbitMQTestState } from '@purinton/rabbitmq';

await publish('myqueue', 'direct', { foo: 'bar' });
await consume('myqueue', 'direct', async (msg) => {
  // handle message
});
```

## Support

For help, questions, or to chat with the author and community, visit:

[![Discord](https://purinton.us/logos/discord_96.png)](https://discord.gg/QSBxQnX7PF)[![Purinton Dev](https://purinton.us/logos/purinton_96.png)](https://discord.gg/QSBxQnX7PF)

**[Purinton Dev on Discord](https://discord.gg/QSBxQnX7PF)**

## License

[MIT © 2025 Russell Purinton](LICENSE)

## Links

- [GitHub](https://github.com/purinton/rabbitmq)
- [npm](https://www.npmjs.com/package/@purinton/rabbitmq)
- [Discord](https://discord.gg/QSBxQnX7PF)
