# Guía rápida de Git - Documentación estática

Este proyecto es una **página HTML estática** pensada para practicar Git mientras construyes una pequeña documentación con los comandos más usados.

## Contenido del proyecto

- `index.html`: página principal con secciones sobre instalación, flujo básico, ramas, remotos y un ejemplo de flujo completo.
- `assets/css/styles.css`: estilos básicos para que la página se vea agradable.
- `assets/img/git-diagrama-basico.svg`: diagrama muy simple para ilustrar commits y ramas.

## Cómo ver la página

La página es completamente estática, así que basta con abrir `index.html` en tu navegador:

1. Abre tu explorador de archivos.
2. Navega hasta la carpeta del proyecto.
3. Haz doble clic en `index.html`.

O desde la terminal, si estás en la carpeta del proyecto:

```bash
# En Windows (Git Bash / WSL puede variar)
open index.html  # o
start index.html # o
explorer.exe index.html
```

## Flujo básico de Git que puedes practicar con este proyecto

Desde la carpeta del proyecto (`git-docs-site`):

```bash
# 1. Inicializar el repositorio (solo una vez)
git init

# 2. Ver el estado de los archivos
git status

# 3. Añadir archivos al área de staging
git add index.html assets/css/styles.css assets/img/git-diagrama-basico.svg README.md
# o simplemente
git add .

# 4. Crear un commit
git commit -m "feat: estructura inicial de documentación"

# 5. Ver historial de commits
git log --oneline --graph --decorate --all
```

## Ejercicio con ramas

Prueba este flujo para entender mejor las ramas:

```bash
# Crear una nueva rama para añadir una sección nueva
git switch -c feature/nueva-seccion

# Edita index.html y añade una sección extra, por ejemplo "Comandos avanzados"
# Luego añade y commitea cambios

git add index.html
git commit -m "feat: seccion de comandos avanzados"

# Volver a la rama principal (main)
git switch main

# Unir los cambios de la rama de feature a main
git merge feature/nueva-seccion
```

## Próximos pasos

- Publicar esta página en GitHub Pages.
- Añadir más ejemplos de comandos (rebase, stash, tags, etc.).
- Añadir capturas de pantalla de `git log`, `git status`, etc., en una carpeta `assets/img` adicional.
