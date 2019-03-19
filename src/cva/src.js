const { StreamCamera, Codec } = require('pi-camera-connect');
const HumanToMilliseconds = require('human-to-milliseconds')

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
      streamDuration: '60s'
    };
  }

  get duration()
  {
    return 30000;
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
