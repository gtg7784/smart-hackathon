// ID: avocado_slave
// mac_addr: 98-D3-51-FD-98-2E

#include <SoftwareSerial.h>

SoftwareSerial BTSerial(2, 3);

void setup() {
  pinMode(13, OUTPUT);
  
  Serial.begin(9600);
  while (!Serial) {
    ;
  }
  
  Serial.println("Serial Start");

  BTSerial.begin(9600);
}

void loop() {
  if (BTSerial.available()) {
    Serial.write(BTSerial.read());
    if(mySerial.read() == 'true'){
      digitalWrite(13, HIGH);
    } else {
  
  digitalWrite(13, LOW);
    }
  }
}
