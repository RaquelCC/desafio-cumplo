# SOBRE ESTE PROYECTO

### DEPLOY DEL PROYECTO

Disponible en el siguiente [Link](https://RaquelCC.github.io/desafio-cumplo).

### SOBRE EL PROYECTO

Este proyecto fué desarrollado para cumplir con la siguiente funcionalidad:

> Permitir al usuario utilizar la API de la SBIF(Superintendencia de Bancos e Instituciones Financieras) para calcular la variación del dolar entre dos fechas, y graficar dicha variación.

> Adicionalmente debe mostrar el promedio, mínimo y máximo del valor del dolar para el período seleccionado por el usuario.

### TECNOLOGÍAS UTILIZADAS

- HTML5 - CSS3 - SASS.
- JavaScript - React.
- [API SBIF](http://api.sbif.cl/documentacion/index.html).

Adicionalmente se utilizó lo siguiente:

- Para el DatePicker, se utilizó [react-dates](https://github.com/airbnb/react-dates).
- Para el gráfico, se utilizó [CanvasJS](https://canvasjs.com/react-charts/).

### FUNCIONAMIENTO

Este proyecto es accesible a través de su despliegue en el siguiente [Link](https://RaquelCC.github.io/desafio-cumplo)

Inicialmente muestra un solo punto en el gráfico, correspondiente al valor del dolar con fecha de hoy.

Para utilizarla el usuario debe:

1. Ingresar el rango de fechas que desea graficar, seleccionandolas a través del *datepicker* que indica *Desde Hasta*.

2. Hacer Click al botón *Graficar*.