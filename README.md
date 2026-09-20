# PopQuiz - Aplicación para Aprender Inglés

Una aplicación web **estática (HTML/CSS/JS)** para aprender vocabulario en inglés de manera interactiva.

Aprende vocabulario español-inglés de forma interactiva
- Modo auditivo para practicar sin leer
- Pronunciación automática en inglés
- Modo automático para repetición continua
- Adaptado a tu nivel de inglés

## Formato del Archivo TSV

Los archivos TSV contienen el vocabulario en formato TSV (Tab-Separated Values):

```
español	inglés
Hola	Hello
Adiós	Goodbye
```

- **Primera columna**: Palabra o frase en español
- **Segunda columna**: Traducción en inglés
- **Separador**: Tabulación (TAB)

Las líneas sin tabulador se ignoran al cargar el quiz (revisa la consola del navegador si sospechas entradas perdidas).

## Personalización

### Modificar el tiempo de espera
En la pantalla del quiz puedes ajustar **“Tiempo para responder”**.

### Añadir más vocabulario
Edita el TSV correspondiente dentro de `data/tsv/` y añade nuevas líneas con el formato:
```
Palabra española	English word
```

## Funcionalidades

### Controles disponibles
- **Mostrar Respuesta**: Revela la traducción inmediatamente
- **Siguiente Palabra**: Pasa a una palabra aleatoria diferente
- **Modo Automático**: Cambia automáticamente entre palabras tras reproducir el audio
- **Modo Auditivo**: Practica sin leer (la preferencia se guarda en el navegador)
- **Modo Repaso**: Repasa listados de 25 palabras
- **Guardar palabras falladas**: Guarda una palabra fallada para repasarla más tarde
- **Vaciar Falladas**: Vacía la lista de palabras falladas

En móviles compatibles, la app intenta mantener la pantalla activa con Wake Lock mientras usas el quiz.

## Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.
