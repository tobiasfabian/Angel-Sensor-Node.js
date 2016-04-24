/*
Name: Temperature Type
Type: org.bluetooth.characteristic.temperature_typeDownload / View
Assigned Number: 0x2A1D
Abstract:
The Temperature Type characteristic is an enumeration that indicates where the temperature was measured.

Summary:
These Temperature Type values correspond to the Temperature Type descriptions used in ISO/IEEE 11073-10408-2008.

*/



var temperatureTypes = {
  1: 'Armpit',
  2: 'Body',
  3: 'Ear',
  4: 'Finger',
  5: 'Gastro-intestinal Tract',
  6: 'Mouth',
  7: 'Rectum',
  8: 'Toe',
  9: 'Tympanum'
};



function temperatureType(characteristic) {

  characteristic.read(function(error, data) {
    var key = data.readUInt8(0);
    var type = temperatureTypes[key];
    console.log('Temperature Type: ' + type);
  });

}



module.exports = temperatureType;
