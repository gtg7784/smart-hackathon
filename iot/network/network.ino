
#include <SoftwareSerial.h>

SoftwareSerial mySerial(2, 3); //블루투스의 Tx, Rx핀을 2번 3번핀으로 설정

char connection[] = 'o';
void setup() {
  // 시리얼 통신의 속도를 9600으로 설정
  Serial.begin(9600);
  while (!Serial) {
    ; //시리얼통신이 연결되지 않았다면 코드 실행을 멈추고 무한 반복
  }
  
  Serial.println("Hello World!");

  //블루투스와 아두이노의 통신속도를 9600으로 설정
  mySerial.begin(9600);
}

void loop() { //코드를 무한반복합니다.
  if (Serial.available()) {    //시리얼모니터에 입력된 데이터가 있다면
    mySerial.write(connection);  //블루투스를 통해 입력된 데이터 전달
    connection = connection == "o" ? "n" : "o";
    delay(300000);
  }
}
