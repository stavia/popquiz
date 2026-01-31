# PopQuiz - Aplicación para Aprender Inglés

Una aplicación web **estática (HTML/CSS/JS)** para aprender vocabulario en inglés de manera interactiva (apta para **GitHub Pages**).

## Características

- **Interfaz moderna**: Diseño atractivo con gradientes y efectos visuales
- **Sistema de tiempo**: Muestra la palabra en español y después de 3 segundos aparece la traducción en inglés
- **Modo automático**: Cambia automáticamente entre palabras
- **Barra de progreso**: Muestra visualmente el tiempo restante
- **Controles manuales**: Botones para mostrar respuesta inmediatamente o pasar a la siguiente palabra
- **Estadísticas**: Muestra el total de palabras y la palabra actual

## Archivos del Proyecto

- `index.html` - Página de inicio (selección de nivel)
- `quiz.html` - Página del quiz (HTML/JS; no requiere PHP en servidor)
- `data/tsv/` - Dataset TSV por defecto (formato TSV)
- `data/popquiz-data/` - (Opcional) Repo externo con los TSV (clonado como carpeta o submódulo)
- `README.md` - Este archivo de documentación

## Formato del Archivo TSV

Los archivos TSV contienen el vocabulario en formato TSV (Tab-Separated Values):

```
Palabra en español	Traducción en inglés
Hola	Hello
Adiós	Goodbye
```

- **Primera columna**: Palabra o frase en español
- **Segunda columna**: Traducción en inglés
- **Separador**: Tabulación (TAB)

## Instalación y Uso

1. **Instalación**:
   - Descarga o clona los archivos del proyecto

2. **Ejecución**:
   - Abre `index.html` en tu navegador

3. **Servidor local (recomendado)**:
   ```bash
   python3 -m http.server 8000
   ```
   Luego visita: `http://localhost:8000`

## Publicar en GitHub Pages

1. Sube el repo a GitHub.
2. Ve a **Settings → Pages**.
3. En **Build and deployment**, elige:
   - Source: **Deploy from a branch**
   - Branch: tu rama (p. ej. `main` o `develop`) y carpeta `/root`
4. Abre la URL que te da GitHub Pages (servirá `index.html`).

## Personalización

### Modificar el tiempo de espera
En la pantalla del quiz puedes ajustar **“Tiempo para responder”**. El valor se guarda en `localStorage` (`popquiz_responseTime`).

### Añadir más vocabulario
Edita el TSV correspondiente dentro de `data/tsv/` y añade nuevas líneas con el formato:
```
Palabra española	English word
```

## Usar el repo `popquiz-data` para los TSV

Si quieres separar los datos del código, puedes clonar el repo `stavia/popquiz-data` dentro de este proyecto.

- **Opción A (recomendada)**: clónalo en `data/popquiz-data/`
- **Opción B**: añádelo como submódulo en `data/popquiz-data/`

La app intentará cargar automáticamente los TSV desde (en este orden):

- (Opcional) `popquiz_dataset_base` (configurable en `localStorage`, puede ser una URL)
- `https://raw.githubusercontent.com/stavia/popquiz-data/...` (por defecto si está accesible)
- `data/tsv/` (fallback local)
- `data/popquiz-data/tsv/`
- `data/popquiz-data/data/tsv/`

Mientras el repo externo mantenga la misma estructura de ficheros (`book/beginner.tsv`, `vocabulary.tsv`, etc.), no necesitas cambiar nada más.

### Configurar una URL base (opcional)

Si quieres cargar los TSV desde una URL (por ejemplo, el “raw” de GitHub), puedes definir:

- clave: `popquiz_dataset_base`
- valor: una ruta/URL que apunte al directorio base de los TSV (terminando o no en `/`)

Ejemplo (en la consola del navegador):

```js
localStorage.setItem('popquiz_dataset_base', 'https://raw.githubusercontent.com/stavia/popquiz-data/main/tsv/');
```

### Personalizar la apariencia
Modifica la sección `<style>` en `index.html` / `quiz.html` para cambiar colores, fuentes, tamaños, etc.

## Funcionalidades

### Controles Disponibles
- **Mostrar Respuesta**: Revela la traducción inmediatamente
- **Siguiente Palabra**: Pasa a una palabra aleatoria diferente
- **Modo Automático**: Cambia automáticamente entre palabras cada 5 segundos

### Características Técnicas
- **Responsive**: Se adapta a diferentes tamaños de pantalla
- **Sin dependencias externas**: Solo usa HTML, CSS y JavaScript
- **Carga aleatoria**: Selecciona palabras aleatoriamente del archivo TSV
- **Validación de datos**: Verifica que el archivo TSV tenga el formato correcto

## Estructura del Código

### JavaScript (Frontend)
- Controla el temporizador
- Maneja la interacción del usuario
- Actualiza la interfaz dinámicamente

### CSS (Estilos)
- Diseño moderno con gradientes
- Efectos de transición suaves
- Interfaz responsive

## Solución de Problemas

### Error: "No se pudo cargar el archivo de vocabulario"
- Verifica que existe el dataset TSV en alguna de estas ubicaciones:
  - `data/tsv/` (por defecto)
  - `data/popquiz-data/tsv/`
  - `data/popquiz-data/data/tsv/`
- Asegúrate de que el archivo tiene permisos de lectura

### Las palabras no se muestran correctamente
- Verifica que el archivo TSV usa tabulaciones (TAB) como separador
- Asegúrate de que cada línea tiene exactamente dos columnas

### El temporizador no funciona
- Verifica que JavaScript está habilitado en tu navegador
- Revisa la consola del navegador para errores

## Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.
