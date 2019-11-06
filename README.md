Aplicação para consulta de endereço através do CEP, utilizando a API de Geolocalização do Google Maps.

## Tecnologias Utilizadas

```npx create-react-app consulta-cep-react --typescript```

- React.js;
- TypeScript;
- styled.components;
- Redux;
- Hooks;
- Jest;
- Enzyme;

## Scripts

Após clonar o projeto e instalar as dependências com ``npm i``, você poderá digitar os comandos:

### `npm start`

Inicia a aplicação no modo de desenvolvimento.<br />
Acesse o endereço [http://localhost:3000](http://localhost:3000) pelo navegador para visualizar a aplicação.

### `npm run test`

Roda dos testes da aplicação, com o auxílio do [Enzyme](https://airbnb.io/enzyme).<br />

## API de Geolocalização

Para utilizar a API, é necessário utilizar um chave de API cedida pela Google Console. Após gerar sua chave, altere o arquivo ``API_KEY`` no diretório raiz do projeto.

Temporariamente, estou deixando minha key acessível. Mas logo terei que alterar, por questões de segurança e faturamento da Google Console.