# Proyecto del segundo parcial: Sitio Web de Automax

Sitio web para **"Automax"**, una empresa de renta de autos.

El proyecto incluye:

- Una **landing page** que presenta a la empresa y los vehículos disponibles.
- Una **página de contacto** con los datos para ubicar a la empresa, incluyendo un mapa.
- Una **página "Acerca de"** con información institucional como misión, visión y valores.
- Una **página de detalle** con la descripción de los tres primeros vehículos.

El sitio fue desarrollado con **HTML** y **CSS**, y se utiliza un servidor básico en **Node.js** para mostrar (servir) el contenido de forma local a través del puerto `8888`.

---
## Getting Started

Estas instrucciones te permitirán ejecutar el sitio en tu máquina local con fines de desarrollo y prueba.

### Prerequisites

Necesitas tener instalado **Node.js** en tu sistema.  
Puedes instalarlo así (en Ubuntu):

```
sudo apt update
sudo apt install nodejs 
```

### Installing

Instrucciones:

* 1. Clonar el repositorio

```
git clone https://github.com/Remrez/proyectofinalDBP.git
```

* 2. Entra al directorio del servidor:

```
cd proyectofinalDBP
```

* 3. Ejecuta el servidor:

```
node app.js
```

* 4. Abre tu navegador y visita:

```
http://localhost:8888
```

Instrucciones para ejecutar con Docker:

Puedes ejecutar este sitio directamente con Docker, sin necesidad de instalar Node.js.

* 1. Asegúrate de tener Docker instalado


Descarga e instala Docker desde [docker.com](https://www.docker.com)


* 2. Ejecutar la imagen desde Docker Hub

```
docker run -p 8888:8888 dave1220/proyectofinaldbp:v1
```

* 3. Abre tu navegador y visita:

```
http://localhost:8888
```
### Link DockerHub

[Link de imagen de docker](https://hub.docker.com/r/dave1220/proyectofinaldbp/tags)

## Built With

* [HTML] - Estructura del sitio web.
* [CSS] - Estilos personalizados para la apariencia del sitio.
* [Node.js] - Servidor básico para servir los archivos de forma local.

## Authors

* **Hernández Hernández Luisa Fernanda** - *368068* - [LuFer25](https://github.com/LuFer25)
* **Ledezma Diaz Ana Sofia** - *367897* [anaLedezma7](https://github.com/anaLedezma7)
* **Moreno Reza Ana Rebeca** - ** [Remrez](https://github.com/Remrez)
* **Pérez González David Alejandro** - *367759* - [David-1220](https://github.com/David-1220)
* **Torres Alanís Evelyn Oyuky** - *367868* [a367868](https://github.com/a367868)
