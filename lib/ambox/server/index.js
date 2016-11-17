//-----------------------------------------------------------------------------
// stdlib
//-----------------------------------------------------------------------------
const fs = require('fs');
const path = require('path');
const http = require('http');
const debug = require('debug')('ambox:dispatcher');
const { EventEmitter } = require('events');


//-----------------------------------------------------------------------------
//
// Server
//
//-----------------------------------------------------------------------------
class Server extends EventEmitter {
  /**
   *
   */
  constructor() {
    super();
  }

  /**
   * The `requestListener` is a function which is automatically added to the
   * `request` event.
   */
  requestListener(...rest) {
    debug('request listener');
    return ((request, response) => {
      response.statusCode = 404;
    }).bind(this);
  }

  /**
   * Listen for connections.
   * @see https://nodejs.org/api/http.html
   */
  listen(...rest) {
    debug('listen');
    return http.createServer(this.requestListener(...rest)).listen(...rest);
  }

  /**
   *
   */
  use(...rest) {
    return this;
  }

  /**
   *
   */
  static toString() {
    return null;
  }

  /**
   *
   */
  static toJSON() {
    return null;
  }
}

//-----------------------------------------------------------------------------
// expose
//-----------------------------------------------------------------------------
module.exports = Server;
