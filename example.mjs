import rabbitmq from '@purinton/rabbitmq';

// Example publish
await rabbitmq.publish('myqueue', 'direct', { hello: 'world' });

// Example consume
await rabbitmq.consume('myqueue', 'direct', (msg) => {
  console.log('Received:', msg);
});
