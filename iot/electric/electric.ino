 #include <SoftwareSerial.h>

SoftwareSerial mySerial(2, 3);

bool type = true;
 
void setup() {
  Serial.begin(9600);
  while (!Serial) {
    ;
  }
  Serial.println("Hello World!");
  mySerial.begin(9600);
  
  pinMode (13, OUTPUT);
}
 
void loop() {
  Serial.println((char)mySerial.read());
  char myChar = (char)mySerial.read();

  if(myChar == 'o') {
    type = true;
  } else if(myChar =='n') {
    type = false;
  }
  
  digitalWrite(13, type);
  delay(5000);
}
