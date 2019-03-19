const fs = require('fs');
const adapter = require('./index');
const bn = require('st-basename');

// Setup camera and streaming
let video = new adapter.input.cva.src({streamDuration: '30s'});
let videoStream = video.getVideoStream();

// Add pipelines
let mainStream = fs.createWriteStream( bn('h264') );
let backupStream =  fs.createWriteStream('backup.h264');
videoStream.pipe(mainStream);
videoStream.pipe(backupStream);

// Run and capture
video.init().then( () => {
  setTimeout(() => video.terminate(), video.duration);
});
