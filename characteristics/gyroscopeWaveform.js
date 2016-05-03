/*
GYROSCOPE WAVEFORM

Unfortunately no documentation...
*/

var bufferpack = require('bufferpack');

var angleX = 0;
var angleY = 0;
var angleZ = 0;

function rotateX(angle) {
  angleX += angle;
}
function rotateY(angle) {
  angleY += angle;
}
function rotateZ(angle) {
  angleZ += angle;
}
function convertGyro(gyro) {
  var sampling_rate = 105;
  var sensitivity = 500;
  var half_range = 2 << 15;
  var result = Math.round(gyro * sensitivity / half_range / sampling_rate * 10) / 10;;

  return result;
}
function unpack(byte1, byte2) {
  var byteArray = new Uint8Array(2);
  byteArray[0] = byte1;
  byteArray[1] = byte2;
  var unpacked = bufferpack.unpack('<h', byteArray);

  return unpacked[0];
}

function accelerationWaveform(characteristic) {

  characteristic.on('read', function(data, isNotification) {
    while (data.length >= 6) {
      // Unpack
      var x = unpack(data[0], data[1]);
      var y = unpack(data[2], data[3]);
      var z = unpack(data[4], data[5]);
      // Convert gyro
      rotateX(convertGyro(x));
      rotateY(convertGyro(y));
      rotateZ(convertGyro(z));

      data = data.slice(6);

      console.log('GYRO:\t' + x + ' ' + y + ' ' + z);
    }

  });

  characteristic.notify(true, function(error) {
    console.log('Gyroscope Waveform notification on');
  });

}

module.exports = accelerationWaveform;
