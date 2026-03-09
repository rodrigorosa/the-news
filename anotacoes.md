## NVM - Node Version Manager

nvm list
nvm install lts/hydrogen
nvm alias default lts/hydrogen

touch .nvrmrc (rc: run commands)

//conteudo do .nvmrc é a versão seguido de enter/nova linha
lts/hydrogen

e com isso o nvm install vai pegar automaticamente esse

## Instalar o Next.js

### Criar o package.json

```bash
npm init
```

### Adicionar dependências

```bash
npm install next@13.1.6
npm install react@18.2.0
npm install react-dom@18.2.0
```

Curiosidade: `npm audit` lista as vulnerabilidades

### Rodar o next localmente

Adicionar ao package.json o atalho

```
  "scripts": {
    "dev": "next dev"
  }
```

E para executar rodar o comando
`npm run <atalho>`

No caso
`npm run dev`

### Criando as páginas do projeto

Next usa File Based Routing, roteamento baseado em arquivos (php feelings).

Mas agora o next.js tem dois diretórios, a partir do 13 ele usa app. Antigamente usava pages.

Ou seja, vamos criar a pasta "pages" e depois um index.js com um componente react Home nela.
Mas ao rodar, da erro! Porque o package.json, por algum motivo, estava configurado com "type": "commonjs" ou invés de
"type": "module". Mas foi só mudar que funcionou.

DICA: No vs code clicar no "espaço vazio" no terminal com o botão direito do mouse e abre menu com Panel Position e pode posicionar o termina na lateral.

## Git

git log --stat
git log --oneline

Git commits são imutáveis! Um git commit --amend, por exemplo, na verdade cria um novo commit (novo hash) e "viaja no tempo" adicionando no lugar do anterior.

### Inclusão e exclusão de arquivos no Git

- `git add .` **inclui apenas arquivos novos e modificados**
  ❌ **não inclui arquivos excluídos**

- Para incluir **arquivos excluídos**, é necessário:
  - `git add -u` → (_update_: arquivos modificados \*_ou removidos_)
  - ou `git add -A` → (_all_: novos, modificados \*_e removidos_)

---

### Exclusão de diretórios

#### Usando `rm` do sistema

Ao excluir um diretório manualmente, é necessário atualizar o índice do Git:

```bash
rm -rf dir/
git add -u
git commit -m "Remove dir"
```

É necessário usar a flag `-u` ou `-A`, ou a exclusão **não entra no commit**.

---

#### Usando `git rm` (recomendado)

```bash
git rm -r dir/
git commit -m "Remove dir"
```

- Remove o diretório do **working directory**
- Remove do **controle de versão**
- Já adiciona a remoção à _staged area_

---

### Remover do repositório, mas manter localmente

Para remover o diretório **apenas do Git**, mantendo-o no _working directory_:

```bash
git rm -r --cached dir/
git commit -m "Remove dir do versionamento"
```

---

### Caso de uso comum

Um diretório de trabalho de framework (ex: `.next/`) foi:

1. Commitado por engano
2. Enviado para o `origin`
3. Adicionado posteriormente ao `.gitignore`

Nesse cenário:

- O `.gitignore` impede **novos rastreamentos**
- Mas o diretório **continua existindo no repositório remoto**

✅ Solução correta:

```bash
git rm -r --cached .next/
git commit -m "Remove .next do versionamento"
```

Resultado:

- O diretório some do repositório
- Continua existindo localmente
- Passa a ser ignorado pelo Git

## Client/Server, hospedagem e Continuos Integration

### Hospedagem de Sites - Vercel

- Acessa o site da vercel e faz login com github
- Depois de logado vai em Add / New Project / Import Github Repository
- É possível dar acesso a toda a conta ou somente a um repositório, optei por este último (Principle of Least Privilege/Princípio do Menor Privilégio)
- É necessário dar as devidas permissões
- E depois basta clicar em efetuar deploy

## Modelo Orgânico x Impressora 3D

A programação do tipo "Orgânica" e a do tipo "Impressora 3D" são duas abordagens para o processo de desenvolvimento de um software.

De modo bem simples e objetivo:

Na programação Orgânica as funcionalidades do programa vão sendo adicionadas uma a uma, conforme a necessidade vai surgindo. E as próprias funcionalidades não são adicionadas de modo 100% pronto, mas vão sendo melhoradas gradualmente também. É entregar o mínimo necessário.

Na já no modo Impressora 3D busca-se entregar todas as funcionalidades do programa 100% prontas e de uma vez. Ou seja, é tudo ou nada. O projeto só é entregue quando todas as features que imaginamos que ele deve ter estão funcionando.

O modelo Impressora 3D acaba travando a gente em muitos casos, enquanto desenvolver de forma orgânica é uma experiência bem menos estressante e ajuda a destravar o desenvolvimento dos projetos, dando um passo de cada vez.

## Moral x Prática

O lixo de um homem é o tesouro de outro.

## Organização de Tarefas

- Fazer muito com pouco!
- Cérebro calcula o saldo

### Nivel 1: Ser lembrado individualmente (o que precisa fazer)

- Menor custo de produção possível
- Menor tempo de aquecimento possível
- Exemplo: todo list

### Nível 2: Ser lembrado em grupo

- kanban
- visível para todos
- marcar o progresso

### Nível 3: Expandir conhecimnento

- Desenvolver de forma detalhada o que e como deve ser feito
- Trello, Github

### Nìvel 4: Gerar métricas

- Jira

## Github Issues

- Issue de Inception
- Quebrar em pedaçoes menores: Issues / Milestones

### Estágios da dopamina

- Estágio 1 - Início
- Estágio 2 - Progresso
- Estágio 3 - Conclusão

## Estilização de Código e Configuração do Editor

Issue: Definir estilização do código e configurar editor

Editar e adicionar "tarefas" no formato md:

- [ ] Ligar sincronização do editor
- [ ] Configurar o EditorConfig
- [ ] Configurar o Prettier

Ou seja: Milestone > Issue > Tarefas

🔗 Relação entre eles

- Uma Issue é uma unidade de trabalho (Executar algo concreto)
  - pode pertencer a 1 Milestone
  - pode ter 0 ou várias Sub-issues

- Uma Sub-issue é uma issue ligada a outra issue (Quebrar tarefas grandes)
  - é apenas uma Issue com vínculo hierárquico

- Um Milestone é um agrupador de Issues no tempo (Planejar Entregas, versões ou sprints)
  - agrupa muitas Issues (pais ou filhas)

📌 Exemplo realista (projeto de software)

- Milestone: Release v1.0
  - Issue: Autenticação
    - Sub-issue: Criar JWT
    - Sub-issue: Endpoint de login
  - Issue: Cadastro de usuários
    - Sub-issue: Model
    - Sub-issue: Validações
  - Issue: Infraestrutura
    - Sub-issue: Docker
    - Sub-issue: CI/CD

### Ligar sincronização do editor

E aqui estamos nos referindo ao CodeSpaces do GH usando Settings Sync. Para isso no Code Spaces:

- Clicar no botão Perfil (Pessoa) no lado equerdo embaixo e selecionar a opção Configurações de Backup e Sincronização e confirmar.
- Concluir a tarefa da issue!

### Configurar o Editor Config

- Através do arquivo .editorconfig
- Alguns editores, entre eles o VS Code, já tem suporte nativo a Editor Config, outros precisa instalar/configurar
  Quando existe conflito entre:
  settings.json do VS Code
  .editorconfig
  👉 o .editorconfig tem prioridade para os arquivos que ele cobre.
- No CodeSpaces vamos criar o arquivo .editorconfig no raiz do projeto

### Configurar o Prettier

Prettier é um formatador de códigos que aplica um conjunto de regras. A grande difernça é que ele faz isso APÓS escrever o código, quanto o editorconfig faz durante a escrita. Ou seja, o prettier roda depois e aplica a todo o código do arquivo.
É necessário instalar o pacote npm e instalar a extensão do VS Code.

`npm install prettier -D` (-D é equivalente a --save-dev, ou seja, dependência de desenvolvimento)

E depois vamos adicionar mais um script ao nosso package.json

```
  "scripts": {
  "dev": "next dev",
  "lint:check": "prettier --check .",
  "lint:fix": "prettier --write ."
},

```

Para executar no terminal usamos: `npm run lint:check` e `npm run lint:fix`

E, por fim, configurar a extensão do VC Code para usar o prettier ao salvar o arquivo:

Configuraçõe (Engrenagem na esquerda) / Settings / (procurar por formatter no search)
Em Editor Formatter selecionar o Prettier

Depois procurar por "format on save" e habilitar

Depois procurar por "auto save" e setar para off (acho que é o default)

PS: também é possível adicionar o arquivo `prettierignore` à raiz do projeto para ignorar aquivos e pastas que não queremos que sejam analisados, tal como faz o arquivo `.gitignore`. Inclusive, na documetação do prettier diz que algumas pastas, como node_modules e o arquivo .gitignore já são ignorados por padrão. No nosso caso queremos ignorar a pasta .next que é gerada automaticamente ao executar e não temos interesse.

Criamos o arquivo e adicionamos o conteúdo na mesma sintaxe que o arquivo .gitignore:

```
.next/
```

PS: O prettier a partir da versão 3.0.0 mudou o seu comportamento e por padrão está utilizando o conteúdo dentro .gitignore para também ignorar o linting de estilização 🎉 Isto foi anunciado neste comunicado. Ou seja, só precisamos de um prettierignore para ignorar algo que não está no gitignore. 🫶

## Idéia McDonnalds

Uma ideia inútil para deslanchar as ideias boas!

## Status Pages, SLA, Uptime x Downtime

SLA: Service Level Agreement, define o UpTime esperado: 99,9%

Ex: vercel status

## Resolução de DNS

Computador > [Recursive Resolver] > [Root Server A] > [TDL .br] > [Authoritative Server]

// TLD - Top Level Domain (br por exemplo)
// Authoritavie Server possui os DNS Records (A, CName, TXT)
// TTL - Time to Live (cache)

## Registrar dominio br e Configurar DNS

Ao registrar o domínio no registro.br precisamos apontar o Authoritative Server, ou seja, quem vai resolver efetivamente o nome para o IP.

No Registro.br, o NS (Nameserver) ou authoritative server é chamado simplesmente de Servidores DNS ou, mais especificamente, divididos em Master (Primário) e Slave (Secundário). Ao configurar um domínio, o painel do Registro.br solicita o preenchimento de pelo menos dois servidores DNS para garantir a autoridade sobre o domínio (ex: ns1.provedor.com.br e ns2.provedor.com.br). Aqui poderia ser o NS da Vercel, por exemplo.

## Milestone 1 - Fundação

- Propostas de Arquitetura e Pastas
  📦root/
  ├──📂pages/
  │ └──📄index.js
  ├──📂models/
  │ ├──📄users.js
  │ ├──📄content.js
  │ └──📄password.js
  ├──📂infra/
  │ ├──📄database.js
  │ ├──📂migrations/
  │ └──📂provisioning/
  │ ├──📂staging/
  │ └──📂production/
  └──📂tests/
- Testes Automatizados
- Banco de dados (Local)
- Migrations
- Continuous Integration
- Linter de código
- Linter de commits
- Banco de dados (Homologação e Produção)
- Tipo de Licença

## Testes automatizados

### Instalar Test Runner (Jest)

```
npm install --save-dev jest@29.6.2
```

E adicionar o script

```
"test": "jest",
"test:watch": "jest --watch"
```

- Criar um diretório tests
- Criar o arquivo tests/calculadora.test.js

- Dica dos comentários, instalar esse pacote para o IntelliSense nos ajudar com code complete e doc

```
npm install --save-dev @types/jest
```

### Criar teste (calculadora)

### Testes? Unit x Integration (service) x E2E (UI)

### Criar o endpoint `/status`

Dentro do projeto, na pasta pages criar sub-pasta api e um arquivo status.js
`pages/api/status.js`

Com o conteúdo

```
function status(request, response) {
  response.status(200).send("Tudo parece bem!");
}

export default status
```

O que pode ser acessado na url http://localhost:3000/api/status

Note que aqui o json() assume o charset utf-8, o que pode ser comprovado usando curl

```➜ the-news git:(main) ✗ curl localhost:3000/api/status --verbose
* Host localhost:3000 was resolved.
* IPv6: ::1
* IPv4: 127.0.0.1
*   Trying [::1]:3000...
* Connected to localhost (::1) port 3000
> GET /api/status HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/8.5.0
> Accept: */*
>
< HTTP/1.1 200 OK
< Content-Type: application/json; charset=utf-8
< ETag: "mtcwvrbq7nv"
< Content-Length: 31
< Vary: Accept-Encoding
< Date: Wed, 28 Jan 2026 00:57:46 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
<
* Connection #0 to host localhost left intact
{"mensagem":"Tudo parece bem!"}%
```

## Banco de dados (local)

### Escolhas

- DBMS (Database Management System): Postgres
- Query - módulo pg (sem ORM, que poderia ser o sequelize ou o drizzle)
- Migrations - módulo node-pg-migrate

### Docker e containers

- Instalação direto na máquina, depende de:
  - Hardware
  - Sistema operacional
  - Patches de segurança
  - Softwares satélites (anti-vírus, firewall)
  - Linguagem do SO
  - Timezone
- Máquina Virtual (Virtual Box da Oracle) - 2007
  - Ainda precisa definir configuração, instalaçao
- Vagrant(Hashicorp) - 2010
  - Melhora o setup inicial, mas ainda tem o problema de usar muito espaço e processamento
- Docker (containers)
  - Namespaces: gera uma área isolada, processos ali dentro só enxergam eles mesmo (2002)
  - CGroups: controle granular sobre a alocação de recursos no sistema (limitar memória e processamento) (2007)
  - PID Namespaces
  - Com o tempo novos recursos foram adicionados o tornando padrão de mercado e tendo uma adoção muito rápida

  ### Subir o banco local usando docker
  - Criar na raiz do projeto o arquivo `compose.yaml` (versão moderna do docker-compose.yml)

    ```
    services:
      database:
        image: "postgres:16.0-alpine3.18"
        environment:
          POSTGRES_PASSWORD: "local_password"
        ports:
          - "5432:5432"

    ```

`docker compose up -d`
`docker ps (process list)`
`docker ps -a // lista todos e mostra o último Exit Code`

Exit Codes

- 0 Tudo bem
- > 0 Erro

`docker logs container_name`

Agora instalamos o client `psql` do postgres no linux

```
sudo apt update
sudo apt install postgresql-client
```

E vamos testar a conexão

`psql --host=localhost --username=postgres --port=5432`

PS: se for alterada alguma config no compose file pode ser necessário recriar o container com

`docker compose up -d --force-recreate` (equivalente a down && up)

PS2: para sair do psql é necessário usar o comando `\q`

`docker compose down` para destruir o container

Mas antes de finalizar vamos criar uma pasta `infra` e mover o compose.yaml para lá.
Porém para executar o docker compose a partir do raiz se torna necessário informar o lugar do arquivo.

`docker compose -f infra/compose.yaml up -d`

## Criar módulo `database.js`

Começamos instalando o módulo `pg` usado para conversar com o postgres programaticamente

`npm install pg@8.11.3`

Então adicionamos mais um script ao package.json, o `jest watch` observa somente os arquivos alterados e agora queremos observar todos, então adicionei a linha

`"test:watchAll": "jest --watchAll"`

Que na verdade é um pouco diferente do que o Filipe faz, ele somente alterou o `test:watch` mas eu prefiro ter os dois.
Detalhe que ainda vai falhar porque um dos testes de integração executa um fetch, então é necessário ter um `npm run dev` rodando em outro terminal, certamente ajustaremos isso futuramente.

E agora bora subir o banco de dados dockerizado apontando para o nosso arquivo compose com:

`docker compose -f infra/compose.yaml up -d`

Adicionamos então o código em `infra/database.js` e o seu uso em `page/api/v1/status/index.js` e com a ajuda dos testes vamos ajustando até funcionar. Nessa versão ainda usamos as infos de banco hardcoded.

### Variáveis de ambiente

um processo herda as variáveis de ambiente do seu processo pai.
No caso, o nosso servidor roda um processo node que é filho do terminal e no terminal já existem as vars de ambiente que podem ser lidas com o comando `env`

É curioso que aqui citamos o `processo` e as `env` e é justamente assim que acessamos as variáveis de ambiente: `process.env.NOME_VAR`

Para demonstrar isso vamos alterar o módulo database.js e e ao invés de usar o valor da `password` hardcoded, vamos usar uma var de ambiente

```
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: process.env.POSTGRES_PASSWORD,
    database: "postgres",
  });
```

E vamos definir essa var de ambiente ao executar o servidor assim:

`POSTGRES_PASSWORD=local_password npm run dev`

Isso define o valor somente para essa execução

OBS: se digitar isso no terminal vai ficar a senha no history! Porém, existe um trick para isso não acontecer, basta adicionar um ESPAÇO EM BRANCO no início do comando e ele não será gravado ho histórico!

Mas ao invés de ficar declarando no terminal o melhor mesmo é usar o módulo `dotenv`.
Via de regra seria necessário instalar, mas o next.js já vem com o módulo pré-instalado, então basta criar o arquivo `.env`e adicionar as vars.

`POSTGRES_PASSWORD=local_password`

E pronto, rodar novamente e vai passar! Ok, vamos fazer para todas as vars!

E agora vamos fazer o `docker compose` usar o arquivo `.env` para inicializar o valor da senha do banco da mesma forma.

Para isso vamos substituir o bloco que define a var dentro do `compose.yaml`

```environment:
      POSTGRES_PASSWORD: "local_password"
```

E, ao invés disso, declarar o arquivo `.env`

```
    env_file:
      - ../.env
```

Mas agora vamos ajustar os nomes de user e db para usar o prefixo `local_`

```
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=local_user
POSTGRES_PASSWORD=local_password
POSTGRES_DB=local_db
```

Mas isso só é executado ao criar o container, então precisamos parar o container do banco e subir novamente, tanto o container quando o server

`docker compose -f infra/compose.yaml down && docker compose -f infra/compose.yaml up -d`

`npm run dev`

### Opa, nós comitamos o arquivo `.env`- e agora?

Na verdade a doc da vercel orienta a commitar mesmo, enquanto a doc do package .env considera errado!
De qualquer forma, commitar o `.env` serve para informar os defaults dos valores, até porque no ambiente de produção, leia-se vercel, a plataforma injeta as env vars no `process.env` quando nós cadastramos via inteface web e isso tem precedência.
Mas fica mais semântico usar uma variação do `.env` chamada `.env.development` que foi feito justamente para isso.

Então, vamos renomear o arquivo commitado usando `git mv`

`git mv .env .env.development`

e renomear no meu `compose.yaml`

Obs: Na maioria dos casos, `git mv` é só um atalho conveniente para dois comandos:

```
mv arquivo_antigo arquivo_novo
git add arquivo_novo
git rm arquivo_antigo
```

### Root Path (caminho raiz)

Node.js não sabe ou não se importa muito com a pasta onde está sendo rodado, pra ele é um script que importa outra e assim vai.
Mas isso nos causa problemas, porque a importação é sempre relativa ao arquivo atual e as vezes precisamos fazer aquelas aberrações

`import database from "../../../../infra/database.js";`

Então, como fazer para definir um `rooth path` e fazer importação absoluta ao invés de relativa?

No VSCode a MS padronizou a utilização do arquivo `jsconfig.json` (ou `tsconfig.json` para TS) como arquivo de configuração.
"The presence of `jsconfig.json` file in a directory indicates that the directory is the root of a Javascript Project."

E, segundo a doc, o next.js respeita isso.

Então criamos na raiz do projeto o arquivo `jsconfig.json` com o conteúdo:

```
{
  "compilerOptions": {
    "baseUrl": "."
  }
}
```

PS: no next, por default, já reconhece o caminho absoluto se ele começar com `/` mas isso depende do node ter sido iniciado como `run dev` para usar como base path do arquivo. Em prod pode acontecer algo diferente, então via de regra o mais seguro é configurar o `jsconfig.json` mesmo.

### Adicionando scripts para iniciar o serviço com o container de banco junto

PS: fuzzy search (o control P) no VS Code permite procurar pelo bloco dentro arquivo!
`Control P e digita pack (de package) e @script`

## Finalizar o endpoint de /status

## Análise de Erros

- Passo 1 é sempre isolar o erro!

### Erro intermitente vs Erro permanente

### Análise de Logs

A Origem Marítima do termo "log"

Antigamente, os marinheiros mediam a velocidade de seus navios usando um "chip log" — um pedaço de madeira (em inglês, log) amarrado a uma corda com nós. Ao lançar a madeira ao mar, eles contavam quantos nós passavam pelas mãos em um intervalo de tempo (daí o termo "nós" para velocidade náutica).

Os registros desses dados eram anotados diariamente em um livro chamado logbook (diário de bordo). Com o tempo, o termo passou a significar qualquer registro cronológico de eventos.

Arquivos de Log: São os descendentes digitais dos antigos diários de bordo, armazenando erros, acessos e operações realizadas por um software ou sistema operacional.

### Configuração de banco de dados, na verdade de provedor de postgres, externos:

- ElephantSQL (descontinuado)
- Supabase (requer usar pool pq conexão direta não suporta ipv4)
- Neon
- Digital Ocean

A conexão no Supabase funcionou somente usando pool, que habilita SSL.
A conexão com Neon precisou da config `{ rejectUnauthorized: false }`.
A conexão com Digital Ocean precisou baixar o certificado da DO e adicionar como var de ambiente POSTGRES_CA.
