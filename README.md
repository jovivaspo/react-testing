# Testing en React.js

## Tipos de test

### Test unitarios

Los test unitarios son pruebas unitarias que verifican el funcionamiento de pequeñas funciones o componentes de forma aislada. Para ello empleamos Jest.

### Test de integración

Verifican que los componentes funcionen correctamente cuando interactuan entre sí. Para ello empleamos React Testing Library.

### Test end-to-end

Verifican que el funcionamiento de la aplicación es el que se espera empleando PlayWright.

## Jest

- Permite hacer snapshot de componentes
- Permite hacer coverage, informes sobre % de de código testeado
- Mocky, simulaicón de funciones y módulos

Métodos típicos de jest:  describe, test y expect

## React Testing library

- Se centra en los test de integración
- Permite hacer queries
- Testing cercano al comportamiento del usuario

Métodos típicos: render, screen, fireEvent

## Instalación: https://gist.github.com/Klerith/b2eafa2a5fb9f09d6d043781be976e06

```
npm i -D jest babel-jest @babel/preset-env @babel/preset-react @testing-library/jest-dom
npm i -D @testing-library/react @types/jest jest-environment-jsdom
```

Si empleamos fetch:
```
npm i -D whatwg-fetch
```

Añadimos el script en packge.json
```
"scripts": {

  "test": "jest --watchAll"}
```

Configuramos babel --> babel.config.js o .cjs. ¡Ojo es posible que haya que cambiar el module.export por export default

```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```

Para componentes que importen CSS, crear un archivo llamado: tests/mocks/styleMock.js
```
module.exports = {};
```

Opcional, pero eventualmente necesario, crear Jest config y setup:

jest.config.js
```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    transformIgnorePatterns: [],
    
    // ModuleNameMapper sólo si ocupamos importar CSS en nuestros componentes para el testing
    moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/tests/mocks/styleMock.js',
    },
}
```
jest.setup.js
```
// En caso de necesitar la implementación del FetchAPI
// yarn add -D whatwg-fetch
// import 'whatwg-fetch'; 

// En caso de encontrar paquetes que lo requieran 
// yarn add -D setimmediate
// import 'setimmediate';

// En caso de tener variables de entorno y aún no soporta el import.meta.env
// yarn add -D dotenv
// require('dotenv').config({
//     path: '.env.test'
// });

// Realizar el mock completo de las variables de entorno
// jest.mock('./src/helpers/getEnvVariables', () => ({
//     getEnvVariables: () => ({ ...process.env })
// }));
```
