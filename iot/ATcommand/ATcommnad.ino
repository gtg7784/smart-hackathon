#include <softwareserial.h>;

SoftwareSerial BTSerial(2, 3); // RX, TX


void setup() {
  Serial.begin(9600);
  BTSerial.begin(9600);

  Serial.println("AT cammand mode");
}

void loop() {
  if (BTSerial.available())
    Serial.write(BTSerial.read());

  if (Serial.available())
    BTSerial.write(Serial.read());
}
