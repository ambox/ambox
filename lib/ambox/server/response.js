//-----------------------------------------------------------------------------
// stdlib
//-----------------------------------------------------------------------------
const { EventEmitter } = require('events');


//-----------------------------------------------------------------------------
//
// Response
//
//-----------------------------------------------------------------------------
class Response extends EventEmitter {
  constructor() {
    super();
  }
}

//-----------------------------------------------------------------------------
// expose
//-----------------------------------------------------------------------------
module.exports = Response;
