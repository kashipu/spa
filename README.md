# Curso de Single Page Application con JavaScript Vanilla

## Introducción a SPA

SPA Son aplicaciones construidas con JavaScript que nos permiten cargar nuestro contenido una sóla vez, es decir, se envían los archivos HTML, CSS y JS una sóla vez al navegador y ahí es donde va a vivir toda nuestra aplicación, de tal forma que la aplicación no necesita ser recargada, por ello, si se necesita navegar en la aplicación, se navega entre secciones y no páginas.

- ### Ventajas

Son fáciles de debuggear.
Son fáciles de crear.
Desventajas

- ### Desventajas

No es tan compatible con el SEO.
No es recomendable aplicarlas para grandes aplicaciones (Aplicación grande => más de 1000 usuarios y más de 50 secciones en la página).

## Inicio del proyecto 

- Iniciar GIT 

    $ git init

- Iniciar NPM 

    $ npm init

### Definicion de arquitectura de carpetas
```
- src --> archivos  
    - routes --> las rutas de la aplicacion  
    - utils --> utilerias
	- styles --> estilos
    - pages --> paginas que va a tener nuestro proyecto
    - index.js --> archivo principal
- public --> lo que mandamos a produccion
    - index.html --> template
```

## Configurar dependencias babel y webpack

- Instalarlas 

    - npm install @babel/core babel-loader html-webpack-plugin webpack webpack-cli webpack-dev-server --save-dev

## Configurar webpack y babel 

En la raíz del proyecto crear un archivo webpack.config.js
toda la info siguiente en el archivo dentro de esta carpeta 

## Una vez configurado, configurar los scripts

```javascript
"scripts": {
    "build":"webpack --mode production", // Crear Archivos de producción
    "start": "webpack-dev-server --open --mode development" // Abre un server en desarrollo
  },
```

