/*
PROTOCOL REVISION CHARACTERISTIC

Characteristic UUID: 3b8e7983-133a-4a0f-90fc-82006ed55505

This characteristic defines the revision number of the current service specification. Its value is increased whenever this protocol is updated. Ensure the software implementation deals correctly with different revisions of this protocol. This GATT characteristic is a constant value.

http://angelsensor.com/protocols/seraphim-sense/blood-oxygen-saturation-service/

*/



function protocolRevision(characteristic, service) {

  characteristic.read(function(error, data) {
    // console.log('Protocol Revision of ' + service.name + ': ' + data.readUInt8(0));
  });

}



module.exports = protocolRevision;
