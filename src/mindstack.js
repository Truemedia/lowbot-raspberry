const adapter = require('./index');

let video = new adapter.input.cva.src({streamDuration: '30s'});
video.init().then( () => {
  setTimeout(() => video.terminate(), video.duration);
});
