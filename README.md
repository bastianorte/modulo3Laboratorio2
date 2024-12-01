# Evaluacion m2 t3

## 📖 Descripción
En esta fase del proyecto, el enfoque estará en la implementación del preprocesador SASS
para gestionar los estilos de forma más eficiente, modularizando correctamente el código y
utilizando metodologías como BEM para organizar los estilos. Además, se integrará el
framework Bootstrap para mejorar la estructura visual y la responsividad del sitio web del
hospital.

Para este proyecto use el patron de organizacion 7-1 dividiendo una carpeta scss(sass) en 7 carpetas(Abtracts, Component, Core, layout, pages, themes, vendor) y el archivo styles.scss

Para la responsividad de este proyecto use Media Queries y Bootstrap


## 👁️ Acceso al proyecto
  Para visualizar el archivo HTML y poder modificar el archivo SASS

  Si tienes Git instalado en tu máquina, puedes clonar el repositorio usando el siguiente comando en tu terminal o línea de comandos:

  ```
  git clone https://github.com/bastianorte/modulo2e3.git
  ```

  Puedes ver los archivos HTML en un navegador
  
  Para modificar los archivos SASS, abre la carpeta descargada en Visual Studio Code

  Utiliza la extension "Live SASS Compiler" para modificar los archivos SCSS

  Tambien puedes visualizar la pagina en el siguiente link:
  https://bastianorte.github.io/modulo2e3/index.html

## 📁 Proyecto 
```
├── assets      
│   ├── scss (Organización SASS 7-1.)
│   │     ├── abstracts
│   │     │     ├── _mixins.scss
│   │     │     └── _variables.scss
│   │     ├── component
│   │     │     ├── _buttons.scss
│   │     │     ├── _cart.scss
│   │     │     └── _slider.scss
│   │     ├── core
│   │     │     ├── _reset.scss
│   │     │     └── _typography.scss
│   │     ├── layout
│   │     │     ├── _banner.scss
│   │     │     ├── _footer.scss
│   │     │     └── _header.scss
│   │     ├── pages
│   │     │     ├── _contacto.scss
│   │     │     ├── _equipo.scss
│   │     │     └── _home.scss
│   │     ├── themes
│   │     │     └── _dark.scss
│   │     ├── vendors
│   │     │     └── carpeta bootstrap
│   │     └── styles.scss
│   ├── css
│   │     ├── styles.css
│   │     └── styles.css.map
│   ├── images
│   │     └── ..images.jpg
│   └──  js    
│         └── main.js       
│
├── contacto.html  
├── equipo.html 
├── index.html 
├── readme.md                  
```

## 🔧 Tecnologías utilizadas
* Bootstrap
* BoxIcons
* GoogleFonts
* Sass


## :pencil2: Autor
Bastian Ortega Fuenzalida