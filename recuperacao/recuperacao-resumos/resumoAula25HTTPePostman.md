# HTTPS e Postman

## O que veremos hoje:
- Backend e APIs
- HTTP e HTTPS
- Postman (é um programa para fazer requisições)

# Backend e APIs
(HTTP é o conceito e o postmam é um ferramenta)

Backend é a a camada de trás do fluxo de infomação, a parte responsável por gerenciar as informações e persistir os dados, chamado também de servidor.

Responsabilidades do Backend 
Guardar e fornecer as informações presentes em um banco de dados, estrutura a parte lógica e gerenciar os serviços.

Protocolos de Comunicação
Contexto
Frontend e o Backend precisam se comunicar ou seja, trocar informações/dados e para que esse processo aconteça foram criados protocolos de comunicação. Existem vários tipos de protocolos,os procotolos são um conjunto de regras que permite que duas ou mais entidades façam a troca de informações entre si.
Eles determinam: formatos das mensagens, os tipos de mensagens

Protocolos - Exemplos
FTP (File Transfer Protocol)
usado, majoritariamente, para trocar arquivos

IMAP (Internet Message Access Protocol)
protocolo que permite receber e-mails

SMTP (Simple Mail Transfer Protocol)
Protocolo que permite enviar e-mails

SSH
acessar uma máquina remotamente exige login (usuário e senha)

ICMP (Internet Control Message Protocol)
usado para fazer sanity-check (verificar a saude)

## HTTP (HTTP: Hypertext Transfer Protocol)
O front-end e o back-end vão se cominicar usando o HTTP, permite troca de diversos tipos de mensagem
como: texto, documentos, arquivos, scripts, etc.

HTTP - Entidades
HTTP determina a comunicação entre duas entidades: o client e o server
Client (cliente): aquele que inicia a comunicação,
fazendo um pedido (requests ou requisições) para o
server.
Server (servidor): recebe os pedidos dos clients, os
processa e obrigatoriamente provê uma resposta (ou
response)

Formato de uma mensagem HTTP
possui regras de como devem ser as mensagens como por exemplo definir o
destinatário, o tipo, o formato e outros parâmetros somente assim a mensagem pode ser entregue e interpretada pelo servidor.


HTTP - Endereço
O endereço representa a localização do destinatário
ou seja, a URL (Uniform Resource Location) exemplo: http://minha-api.com/

Path 
é o que vem depois da primeira barra no
endereço http://minha-api.com/usuario

HTTP - Endereço - Query
A query é uma parte adicional ao endereço
http://minha-api.com/usuario?nome=Mafalda&idade=20

Método (também chamado de verbo)
método representa o tipo de operação que irá
ocorrer, é o tipo de mensagem sendo enviada,mais usados: GET, POST, PUT e DELETE

Headers 
guardam as informações sobre a própria requisição e podem ter qualquer finalidade
Formato/tipo do conteúdo,identificação do remetente, tamanho da mensagem.Existem alguns headers os mais comuns:
Authorization: indica quem é o remetente da
mensagem

Content-type: define o tipo e formato do
conteúdo

**Body**
guarda o conteúdo da mensagem, quando
ele existir.Formatos comuns:XML, Form-data, Raw e JSON, sendo JSON o formato padrão.

**Body - JSON**
JSON (Javascript Object Notation) é uma maneira
de representar informações e é um dos principais
padrões para comunicação HTTP, parecido com objetos do Javascript e garante estrutura e hierarquia de informações.
A principal diferença é que as chaves devem estar
todas entre aspas,números, strings, arrays, null, undefined ou outros objetos são aceitos como valores

**Conversão:**
Objeto JSON: JSON.stringify(meuObjeto)
JSON Objeto: JSON.parse(meuJson)

Status 
representação numérica e padronizada do que aconteceu com a requisição:
exemplos de status:
200: sucesso
300: redirecionado
400: erro
500: erro não programado
###### This is a Heading h6

## HTTPS
é a versão mais segura do HTTP, pois ultilizam mensagens criptografadas

API(Application Programming Interface)

Para estabelecer comunicação entre o Backend e o Frontend isso é feito por meio de uma API


Mas o que é uma API?
Conjunto de funções disponibilizadas pelo backend da
aplicação. Portanto, é o back que constrói a API.

Cada API tem uma documentação explicitando as
funcionalidades existentes

**Como usar uma API?**
Toda API deve ter uma documentação descrevendo
as funcionalidades.Usamos ferramentas para criar as requisições. Para testar e observar o funcionamento de APIs,usamos o Postman

**REST**
API em que as mensagens seguem o protocolo de
comunicação HTTP.Isso impõe um padrão a ser seguido. Esse padrão é
chamado de REST

**API REST** - Estrutura 
O REST se baseia no método e no path, ao conjunto do método + path, damos o nome de
endpoint.

**GET**
método GET é usado para pegar informações,e não deve receber um body,Podemos usar a estrutura de query ou path parameters para passar informações extras

**REST - POST**
usado para criar recursos, informações do recurso criado são enviadas no body

**REST - PUT**
é usado para editar recursos,informações do recurso criado são enviadas no body
e o id do recurso como path parameter

**REST - DELETE**
é usado para deletar recursos, id do recurso deve ser passado como path parameter assim como o GET, não possui body

### Dúvidas
Sinceramente não sei nem o que perguntar (risos), é muita coisa, foi uma aula grande de conteúdo denso, mas acredito que "peguei a ideia do negocio" gente!