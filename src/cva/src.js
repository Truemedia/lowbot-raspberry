const fs = require('fs');
const { StreamCamera, Codec } = require('pi-camera-connect');
const HumanToMilliseconds = require('human-to-milliseconds')
const bn = require('st-basename');

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
   * Set video stream from sourcing (triggered by 'capture' algorithm)
   */
   setVideoStream()
   {
     let filename = bn('h264');
     const writeStream = fs.createWriteStream(filename);

     const videoStream = this.streamCamera.createStream();

     videoStream.pipe(writeStream);
     return videoStream;
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
