# Anotações

## JSX / TSX

- JSX significa JavaScript XML.
- JSX permite escrever HTML no React.
- JSX facilita a gravação e adição de HTML no React.
- Sintaxe de XML dentro do JavaScript.
- TSX significa TypeScript XML.

```jsx
const element = <h1>Hello, world!</h1>;
```

O JSX nos permite escrever elementos HTML em JavaScript e colocá-los no DOM sem nenhum `createElement()`  e / ou `appendChild()` método.

## Componentes

Componentes permitem você dividir a UI em partes independentes, reutilizáveis, ou seja, trata cada parte da aplicação como um bloco isolado, livre de outras dependências externas. 

Componentes são como funções JavaScript. Eles aceitam entradas e retornam elementos React que descrevem o que deve aparecer na tela.

## Props

Props, que é uma abreviação de propriedades, são informações que podem ser passadas para um componente. Pode ser uma string, um número, até mesmo uma função. Este valor pode então ser utilizado pelo componente que a recebe.

## Estados

Estados são informações mantidas pelo próprio componente.

Sempre que cria um estado para um array ou um objeto, precisa manualmente informar o tipo da variavel

## SPA - Single Page Application (Aplicativo de página única)

Um aplicativo de página única é uma aplicação web ou site que consiste de uma única página web com o objetivo de fornecer uma experiência do usuário similar à de um aplicativo desktop.

## Comandos utilizados no projeto

#### dependencies

```
npm install react-icons
npm install react-router-dom
npm install leaflet react-leaflet
npm install axios
```
- [Leaflet](https://leafletjs.com/)
- [React Leaflet](https://react-leaflet.js.org/)
> O **Leaflet** é a principal biblioteca JavaScript de código aberto para mapas interativos

#### devDependencies

```
npm install @types/react-router-dom -D
npm install @types/react-leaflet
```