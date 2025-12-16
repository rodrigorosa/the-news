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




