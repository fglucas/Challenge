 # Challenge
 
 
 ## PONTO E VIRGULA
Nome dos Alunos:
- Bianca Nunes Ferraz Cabral
- Lennyk Macedo dos Santos
- Lucas Ferreira Gonçalves
- Micaela Mota Santos
- Nalita Tsu Kao


## Nome do projeto - SkinSight

**Turma:2TDSG**

**Ano:2021**

## Objetivo / descrição do Projeto

Buscando uma solução que ajude as pessoas a se manterem saudáveis na pandemia, juntamos a tecnologia de IoT (Internet das Coisas) com o problema atual e pensamos no SKINSIGHT. A ideia se baseia em uma pulseira com sensores que captam a incidência solar e índice de radiação UV que o usuário entra em contato, dessa forma, processaremos os dados para indicar quanto tempo de exposição ao sol o usuário deve ficar para obter o nível de vitamina D necessária e regular sua exposição ao Sol. Os dados poderão ser vistos em uma interface gráfica desenvolvida com o objetivo de trazer insights para o usuário, o software poderá ser instalado em dispositivos mobile com o objetivo de garantir a melhor usabilidade do produto.

## PRINCIPAIS FUNCIONALIDADES

O dispositivo contará com as seguintes funcionalidades:
- Cálculo do índice de radiação UV.
- Detecção do nível de incidência solar diário e o tempo de exposição;
- Identificação da temperatura ambiente;
Com os dados que forem coletados, o aplicativo mobile irá calcular e informar ao usuário:
- A medida de intensidade luminosa a qual ele está exposto naquele momento;
- De acordo com o tempo de exposição ao sol capturado, o sistema irá informar ao usuário se a meta de vitamina D diária foi atingida. Essa informação considera também o horário e a temperatura ambiente no momento em que o usuário se expôs ao sol, dependendo desses fatores, o tempo de incidência solar pode ser menor ou maior.
- A partir da obtenção de todos esses dados, o aplicativo indicará ao usuário a necessidade de hidratação e proteção solar.


## Como Funciona?

O fluxo se inicia a partir do smartphone do usuário, tentando a conexão com o aplicativo SkinSight por meio do Active Directory, que realiza o gerenciamento da entrada de usuários na aplicação. Após a autenticação, o dispositivo consegue acessar o aplicativo, que está hospedado no Azure App Services.
A comunicação entre os sensores via arduino e aplicativo no App Services e o banco de dados MySQL do Azure é bidirecional, ou seja, a aplicação consome os dados do banco ao mesmo tempo que envia.
O dispositivo mobile está conectado via Bluetooth com a pulseira inteligente. A pulseira disponibiliza todos os seus dados coletados pelos sensores na porta serial, permitindo que o script Python, executado no Function Apps, leia os dados da porta serial e escreva-os no banco de dados MySQL.
   

## Link de vídeo demonstração

[Link para demonstração em video no YouTube](https://youtu.be/jncwQjtEKkE)


### Referências 

* [mastering-markdown](https://guides.github.com/features/mastering-markdown/)
* [Basic writing and formatting syntax](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
