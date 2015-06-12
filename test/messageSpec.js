'use strict';

var should = require('should');
var Message = require('../lib/message');

describe('Slipstream Message', function() {
    it('should create a message with the passed params', function(done) {
        var id = 'some-message-id';
        var data = {
            prop: 1,
            body: 'more stuff'
        };
        var meta = {
            date: new Date(),
            server: 'aws-2-1'
        };

        var message = new Message(id, data, meta);

        should(message.id).be.equal(id);
        should(message.data).be.equal(data);
        should(message.meta).be.equal(meta);

        done();
    });
});