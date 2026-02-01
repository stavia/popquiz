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

## Personalización

### Modificar el tiempo de espera
En la pantalla del quiz puedes ajustar **“Tiempo para responder”**.

### Añadir más vocabulario
Edita el TSV correspondiente dentro de `data/tsv/` y añade nuevas líneas con el formato:
```
Palabra española	English word
```

## Funcionalidades

### Controles Disponibles
- **Mostrar Respuesta**: Revela la traducción inmediatamente
- **Siguiente Palabra**: Pasa a una palabra aleatoria diferente
- **Modo Automático**: Cambia automáticamente entre palabras cada 5 segundos
- **Modo Auditivo**: Practica sin leer
- **Modo Repaso**: Repasa 25 palabras
- **Guardar palabras falladas**: Guarda una palabra fallada para repasarla más tarde
- **Vaciar Falladas**: Vacía la lista de palabras falladas
- **Modo Pantalla Activa**: Evita que se apague la pantalla en dispositivos móviles


## Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.
