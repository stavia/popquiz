# TODO

## Repetición espaciada en lugar de azar

Hoy `nextWord()` elige la siguiente palabra con `Math.random()`, así que una frase rara vez vuelve en el momento útil para recordarla.

- [ ] Tras "Mostrar respuesta", sustituir la autoevaluación implícita por tres botones: **No lo sabía** / **Me costó** / **Fácil**.
- [ ] Guardar por tarjeta en `localStorage` el estado de repaso (intervalo, facilidad, próxima fecha) con un SM-2 simplificado o cajas de Leitner.
- [ ] Elegir como siguiente palabra la más "vencida"; si no hay ninguna pendiente, introducir tarjetas nuevas.
- [ ] Absorber "Guardar palabras falladas" y "Repaso 25 palabras" en este sistema (las falladas pasan a ser tarjetas con intervalo corto).

## Hablar con reconocimiento de voz

Usar la Web Speech API (`SpeechRecognition`) para que el usuario diga la respuesta en voz alta y compararla con la esperada. Encaja con el modo auditivo, que ya es "sin manos".

- [ ] Botón de micrófono que escucha la respuesta en inglés (`lang = 'en-US'`).
- [ ] Comparación tolerante con la respuesta esperada (sin mayúsculas ni puntuación, aceptando contracciones como `it's` = `it is`).
- [ ] Mostrar lo que se ha reconocido junto a la respuesta correcta.
- [ ] Integración opcional con el modo auditivo/automático: escuchar tras la pregunta y avanzar solo.
- [ ] Mejora progresiva: si el navegador no soporta `SpeechRecognition`, ocultar la opción.

## Motivación y feedback

- [ ] Racha de días consecutivos practicando.
- [ ] Contador de tarjetas pendientes para hoy.
- [ ] Porcentaje de tarjetas dominadas por nivel.
- [ ] Velocidad de TTS ajustable (p. ej. 0.8x para frases largas del nivel avanzado).
