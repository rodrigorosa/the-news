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
