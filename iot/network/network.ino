#include <ESP8266WiFi.h>
int touch = D6; // 터치센서 핀 지정
int led = D5;  // LED 핀 지정
 
const char* ssid     = "avocado"; // 사용 중 인 와이파이 이름
const char* password = "avocadoistasteless"; // 와이파이 패스워드
 
WiFiServer server(80);
 
void setup() {
  pinMode(touch, INPUT); // 터치센서 INPUT 설정
  pinMode(led, OUTPUT); // LED 출력으로 설정
  Serial.begin(115200); // 시리얼 통신, 속도 115200
  delay(10);
  Serial.println();
 
  // Connect to WiFi network
  WiFi.mode(WIFI_STA);
  Serial.println();
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);
 
  WiFi.begin(ssid, password);
 
  while (WiFi.status() != WL_CONNECTED) {
    delay(100);
    Serial.print(".");
  }
  
  Serial.println("");
  Serial.println("WiFi connected");
 
  // Start the server
  server.begin();
  Serial.println("Server started");
 
  // Print the IP address
  Serial.println(WiFi.localIP());
}
 
void loop() {
  int val = digitalRead(touch); // 터치센서 신호값 val에 저장
 
  WiFiClient client = server.available();
  client.println("HTTP/1.1 200 OK");
  client.println("Content-Type: text/html");
  client.println("Connection: close");
  client.println("Refresh: 1");  // 자동으로 웹페이지 새로고침 (1초 설정)
  client.println();
  client.println("<!DOCTYPE html>");
  client.println("<html xmlns='http://www.w3.org/1999/xhtml'>");
  client.println("<head>\n<meta charset='UTF-8'>");
  client.println("<title>Welcome EDUINO</title>"); // 웹 서버 페이지 제목 설정
  client.println("</head>\n<body>");
  client.println("<center>");
  client.println("<H1>Node MCU & Touch Sensor</H1>"); // 페이지 내용 설정
 
 
 
  if (val == 1) {                      // 터치센서 신호값이 '1' 이면 (터치 감지)
    client.print("<H2>Touch !</H2> ");  // 웹 서버 페이지에 'Touch !' 이라고 출력
    client.println("<br>");
    client.println("<H3>안녕하세요. 에듀이노 입니다.</H3>");    
    client.println("<H3>터치가 확인되었습니다.</H3>");
    digitalWrite(led, HIGH);            // LED ON
  }
  else                                         // 터치센서 신호값이 '0' 이면 (터치 비 감지)
  {
    client.print("<H2>Detecting... </H2>");    // 웹 서버 페이지에 'Detecting...' 이라고 출력
    client.println("<br>");
    client.print("<H3>터치센서에 손가락을 올려주세요.</H3>");
    digitalWrite(led, LOW);                   // LED OFF
  }
  client.println("<br>");
  client.println("<br>");
 
  client.println("<H1> eduino.co.kr </H1>"); // 페이지 내용 설정
  client.println("<pre>");
  client.print("</body>\n</html>");
 
}
