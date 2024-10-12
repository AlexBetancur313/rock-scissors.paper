# Piedra, Papel o Tijera

Este proyecto es una implementación simple del juego clásico "Piedra, Papel o Tijera" usando **Angular** y **TypeScript**. El juego permite a los usuarios jugar contra la máquina, mostrando el resultado visualmente, y lleva un registro de los puntajes tanto de la máquina como del jugador humano.

## Características

- **Selección de Opciones**: Se puede elegir entre las tres opciones clásicas: piedra, papel, o tijera.
- **Juego contra la Máquina**: El resultado se compara con una acción aleatoria de la máquina.
- **Contador de Puntos**: Un marcador que actualiza los puntajes de la máquina y del jugador a medida que avanza la partida.
- **Sistema de Reinicio**: Al salirse o recargar la pagina, el contador se reinicia automáticamente.

## Tecnologías Utilizadas

- **Angular**: Framework de JavaScript para desarrollar aplicaciones web.
- **TypeScript**: Lenguaje de programación basado en JavaScript.
- **CSS**: Para el estilo y diseño de la interfaz.
- **HTML**: Para la estructura de la página.

## Estructura del Proyecto

- **main-page.component.ts**: Componente encargado de la lógica principal del juego, que maneja la interacción del usuario, el conteo de segundos antes de que la mauina muestre su elección, y la determinación del ganador.
- **counter.component.ts**: Componente encargado de ir acumulando los puntos de la maquina y el usuario segun vayan ganando.
- **app-cards**: Componente encargado de mostrar las opciones del juego (piedra, papel, tijera) que el usuario podra seleccionar.
- **welcome**: Componente encargado de mostrar la bienvenida del juego piedra, papel y tijera.
- **no-found**: Componente encargado de mostrar que la pagina no fue hallada en caso de que le link este mal escrito.

## Uso

### Iniciar una partida

1. El usuario debera dar click en "PLAY" para entrar en el juego.
2. El usuario debera seleccionar una de las opciones disponibles (piedra, papel o tijera) haciendo clic en la imagen correspondiente.
3. El juego mostrará una cuenta regresiva y luego la máquina seleccionará su opción.
4. El resultado se mostrará y el contador actualizará los puntajes, solo se actualizara dicho contador si uno de los dos gana si empatan no habra punto para ninguno.

### Reiniciar el juego

Al terminar una partida, el usuario podra reiniciar el juego haciendo clic en el enlace "TRY AGAIN" que aparece después de mostrar los resultados.

## Código Importante

### main-page.component.ts

Este archivo contiene la lógica principal del juego:

- **Método `play`**: Inicia el juego y gestiona la cuenta regresiva antes de mostrar el resultado.
- **Método `determineWinner`**: Determina el ganador entre el usuario y la máquina.
- **Método `resetGame`**: Reinicia el juego para permitir una nueva partida.

### counter.component.ts

Este componente se encarga de manejar el marcador de la máquina y el usuario. Los métodos importantes incluyen:

- **`incrementHumanScore`**: Incrementa el puntaje del jugador usuario.
- **`incrementMachineScore`**: Incrementa el puntaje de la máquina.

## Estilos y Diseño

- La aplicación utiliza estilos CSS personalizados para mantener una estética limpia y amigable.
- Los puntajes se presentan en una tabla y las opciones de juego se muestran mediante imágenes que representan piedra, papel o tijera.
