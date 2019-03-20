const { StreamCamera, Codec } = require('pi-camera-connect');
const humanInterval = require('human-interval');

class Src
{

  /**
    * Declare video sourcing
    */
  constructor(opts = {})
  {
    this.streamCamera = new StreamCamera({
      codec: Codec.H264
    });
    this.settings = {...this.defaults, ...opts};
  }

  get defaults()
  {
    return {
      streamDuration: '1 minute'
    };
  }

  /**
    * Duration of stream (in ms)
    */
  get duration()
  {
    return humanInterval(this.settings.streamDuration);
  }

  /**
   * Get video stream from sourcing (triggered by 'capture' algorithm)
   */
   getVideoStream()
   {
     return this.streamCamera.createStream();
   }

   /**
     * Initialise video source (commence video output)
     */
   init()
   {
     return this.streamCamera.startCapture();
   }

   /**
     * Terminate video source (stop video output)
     */
   terminate()
   {
     this.streamCamera.stopCapture();
   }
}

module.exports = Src;
