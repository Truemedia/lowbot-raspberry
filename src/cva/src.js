const { StreamCamera, Codec } = require('pi-camera-connect');
const HumanToMilliseconds = require('human-to-milliseconds')
const fs = require('fs');

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
  }

  /**
   * Set video stream from sourcing (triggered by 'capture' algorithm)
   */
   setVideoStream()
   {
     let filename = 'video-stream.h264';
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
     HumanToMilliseconds('30s', (err, ms) => {
       this.streamCamera.startCapture().then(() => {
         setTimeout(() => streamCamera.stopCapture(), ms);
       });
     });
   }
}

module.exports = Src;
