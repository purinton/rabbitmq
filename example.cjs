const rabbitmq = require('@purinton/rabbitmq');

// Example publish
rabbitmq.publish('myqueue', 'direct', { hello: 'world' });

// Example consume
rabbitmq.consume('myqueue', 'direct', (msg) => {
  console.log('Received:', msg);
});
