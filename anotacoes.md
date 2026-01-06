## NVM - Node Version Manager

nvm list
nvm install lts/hydrogen
nvm alias default lts/hydrogen

touch .nvrmrc  (rc: run commands)

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

* `git add .` **inclui apenas arquivos novos e modificados**
  ❌ **não inclui arquivos excluídos**

* Para incluir **arquivos excluídos**, é necessário:

  * `git add -u` → (*update*: arquivos modificados **ou removidos*)
  * ou `git add -A` → (*all*: novos, modificados **e removidos*)

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

* Remove o diretório do **working directory**
* Remove do **controle de versão**
* Já adiciona a remoção à *staged area*

---

### Remover do repositório, mas manter localmente

Para remover o diretório **apenas do Git**, mantendo-o no *working directory*:

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

* O `.gitignore` impede **novos rastreamentos**
* Mas o diretório **continua existindo no repositório remoto**

✅ Solução correta:

```bash
git rm -r --cached .next/
git commit -m "Remove .next do versionamento"
```

Resultado:

* O diretório some do repositório
* Continua existindo localmente
* Passa a ser ignorado pelo Git

## Client/Server, hospedagem e Continuos Integration
### Hospedagem de Sites - Vercel
- Acessa o site da vercel e faz login com github
- Depois de logado vai em Add / New Project / Import Github Repository
- É possível dar acesso a toda a conta ou somente a um repositório, optei por este último (Principle of Least Privilege/Princípio do Menor Privilégio)
- É necessário dar as devidas permissões
- E depois basta clicar em efetuar deploy