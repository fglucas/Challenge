#include <ArduinoJson.h>

int TermistorPin = A0; // Simula sensor de temperatura DHT22
int SensorUV = A5; // Simula sensor UV de raios ultravioleta UVM-30A
int Vo, Vout, valorUV; // valor UV, referente a variavel recebidos do sensor
float R1 = 10000; //Resistor
float logR2, R2, T, Tc, Tf, temp, templast, Rldr, L, expo, expolast, Rdark; //Variaveis
float c1 = 1.009249522e-03, c2 = 2.378405444e-04, c3 = 2.019202697e-07; //valores constante para calculo

const int TAMANHO = 200;

void setup() {
  Serial.begin(115200);
  pinMode(TermistorPin, INPUT);
  pinMode(SensorUV, INPUT);
}

void loop() {
  Serial.println(" ");

  //Temperatura
  temp = readTemp(TermistorPin);
  printTemp(temp);

  //UV
  expo = readUV(SensorUV);
  printLDR(expo);

  //tempo pra loop
  delay(2000);



// Area JSON
  StaticJsonDocument<TAMANHO> json;

  int JsensorUV = readUV(SensorUV); 
  int JsensorTemp = readTemp(TermistorPin);



  json["exposicaoUV"] = JsensorUV; // data para JSON


  json["TempGraus"] = JsensorTemp; // data para JSON


  serializeJson(json, Serial);
  Serial.println();


}




// função para leitura de Luminosidade
float readUV(int ShensorUV){
  Vout = analogRead(ShensorUV);
  Rdark = 127410;
  Rldr = 10000 * (1023.0 / (float)Vout -1.0);
  L =  pow ((Rdark / Rldr),  1 / 0.8582); // valor de luz significativa


  //indices definidos por estudos 	
  
  if(L<200)
  {                
      Serial.println("Indice: Fraco");
      Serial.print("Recomendacao: ");
      Serial.println("Passe o protetor solar");
  }
  else if(L>200 && L<400)
  {                
      Serial.println("Indice: Moderado");
      Serial.print("Recomendacao: ");
      Serial.println("Passe o protetor solar e se proteja");
  }
  else if(L>400 && L<600)
  {                
      Serial.println("Indice: Alto");
      Serial.print("Recomendacao: ");
      Serial.println("Passe o protetor solar com fator alto e se proteja");
  }
  else if(L>600 && L<800)
  {                
      Serial.println("Indice: Muito Alto");
      Serial.print("Recomendacao: ");
      Serial.println("Passe o protetor solar com fator alto, proteja o corpo e os olhos");
  }
  else if(L>800)
  {
     Serial.println("Indice: Extremo");
     Serial.print("Recomendacao: ");
     Serial.println("Se possivel nao se exponhe ao Sol.");  
  }

  return L;
}

//função que faz leitura da temperatura e retorna o valor em graus celcius
float readTemp(int ThermistorPin){
  
  Vo = analogRead(ThermistorPin);
  R2 = R1 * (1023.0 / (float)Vo - 1.0); //calculo R2, demonstração no arquivo pdf da aula
  logR2 = log(R2);
  T = (1.0 / (c1 + c2*logR2 + c3*logR2*logR2*logR2));// Equação de Steinhart–Hart 
  Tc = T - 273.15; //temp em Graus celcius
  //Tf = (Tc * 9.0)/ 5.0 + 32.0; // temp em fahrenheit
  return Tc;
}

//função que printa o valor da temperatura na serial
void printTemp(float Tc){
  Serial.println(" ");
  Serial.print("Temperatura: ");
  Serial.print(Tc);
  Serial.println(" C");   

}

//função que printa o valor da temperatura na serial
void printLDR(float L) {

  Serial.print("Exposicao UV: ");
  Serial.println(L);
  Serial.println(" ");
}

