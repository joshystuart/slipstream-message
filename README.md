# Message interface for Slipstream

[![Shippable](https://img.shields.io/shippable/557f6d30edd7f2c05219256f.svg)](https://app.shippable.com/projects/557f6d30edd7f2c05219256f)

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