'use strict';

/**
 * @author Josh Stuart <joshstuartx@gmail.com>
 */

/**
 * A common message format for Slipstream providers.
 *
 * @constructor
 */
function Message(id, data, meta) {
    this.id = id;
    this.data = data;
    this.meta = meta;
}

module.exports = Message;
