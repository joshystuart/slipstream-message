# Message interface for Slipstream

![Slipstream: X-Men](https://s3-ap-southeast-2.amazonaws.com/pixy-marketing/github/slipstream.jpg)

A common [Slipstream](https://github.com/crimsonronin/slipstream) message to be used by Slipstream queue providers like [slipstream-sqs](https://github.com/crimsonronin/slipstream-sqs)

```javascript
var message = new Message(id, data, meta);
```

### Install

If you are creating a new [Slipstream](https://github.com/crimsonronin/slipstream) queue provider (like [slipstream-sqs](https://github.com/crimsonronin/slipstream-sqs)), you will be required to use a Message.

```
npm install slipstream-message --save
```

### Tests

```
npm test
```