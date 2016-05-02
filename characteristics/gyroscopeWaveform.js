/*
GYROSCOPE WAVEFORM

Unfortunately no documentation...
*/

function accelerationWaveform(characteristic) {

  characteristic.on('read', function(data, isNotification) {
    if (data.length >= 12) {
      var x = data[0] + data[1] * 255;
      var y = data[2] + data[3] * 255;
      var z = data[4] + data[5] * 255;

      //console.log(x + ' ' + y + ' ' + z);
    }

  });

  characteristic.notify(true, function(error) {
    console.log('Gyroscope Waveform notification on');
  });

}



module.exports = accelerationWaveform;
