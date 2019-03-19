const Cva = require('./cva/src');

/**
  * Raspberry PI adapter
  * @namespace adapter
  * @prop {object} info
  */
module.exports = {
  /**
    * Descriptive information about adapter
    * @namespace info
    * @prop {String} name - Name of adapter used as context for bot
    */
  info: {
    name: 'raspberry'
  },
  /**
    * Client configuration
    * @namespace client
    * @prop {Client} instance - API class instance
    * @prop {Object} methods - Login method used to invoke authentication
    */
  client: {
    instance: null,
    methods: {
      login: null
    }
  },
  /**
    * Input configuration
    * @namespace input
    */
  input: {
    /**
      * Computer vision algorithms
      */
    cva: {support: true, algorithms: ['capture'], src: Cva},
  },
  /**
    * Output configuration
    * @namespace output
    * @param {String} format - File format for outputting content
    * @param {String} target - Type of client that handles response
    */
  output: {
    format: 'filesytem', // Straight to file
    target: 'device', // Raspberry PI only
    persona: false // No persona support
  },
  /**
    * Variable configuration
    * @namespace vars
    * @param {String} token - Token used to authenticate
    */
  vars: {
    streamDuration: 'PI_STREAM_DURATION' // Stream duration (Human readable unit)
  }
};
