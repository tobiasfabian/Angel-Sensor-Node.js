/*
Name: Body Sensor Location
Type: org.bluetooth.characteristic.body_sensor_location
Assigned Number: 0x2A38

https://developer.bluetooth.org/gatt/characteristics/Pages/CharacteristicViewer.aspx?u=org.bluetooth.characteristic.body_sensor_location.xml

*/



var bodySensorLocations = {
  0: 'Other',
  1: 'Chest',
  2: 'Wrist',
  3: 'Finger',
  4: 'Hand',
  5: 'Ear Lobe',
  6: 'Foot'
};



function bodySensorLocation(characteristic) {

  characteristic.read(function(error, data) {
    var key = data.readUInt8(0);
    var type = bodySensorLocations[key];
    console.log('Body Sensor Location: ' + type);
  });

}



module.exports = bodySensorLocation;
