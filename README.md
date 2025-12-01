# Guía rápida de Git - Documentación estática

Este proyecto es una **página HTML estática** pensada para practicar Git mientras construyes una pequeña documentación con los comandos más usados y un flujo real de trabajo con ramas, remotos y deploy.

> Demo online: **https://codedevcoder.github.io/git-docs-site/**

## Contenido del proyecto

- `index.html`: página principal con secciones sobre instalación, flujo básico, ramas, remotos, comandos avanzados, atajos útiles, glosario y deploy con GitHub Pages.
- `assets/css/styles.css`: estilos para el layout tipo documentación (sidebar, hero, pasos, bloques de código con botón de copia, etc.).
- `assets/img/git-diagrama-basico.svg`: diagrama básico para ilustrar commits y ramas.
- `assets/img/git-flujo-ramas.svg`: diagrama simple del flujo de una rama `feature` que se fusiona en `main`.

## Cómo ver la página

### Opción 1: GitHub Pages (recomendada)

Simplemente visita:

- https://codedevcoder.github.io/git-docs-site/

### Opción 2: abrir el archivo localmente

La página es completamente estática, así que basta con abrir `index.html` en tu navegador:

1. Abre tu explorador de archivos.
2. Navega hasta la carpeta del proyecto.
3. Haz doble clic en `index.html`.

O desde la terminal, si estás en la carpeta del proyecto:

```bash
# En Windows (Git Bash / WSL puede variar)
start index.html      # o
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

## Comandos avanzados y atajos

En la página encontrarás ejemplos prácticos de:

- `git stash`: guardar cambios sin commit.
- `git rebase`: reaplicar commits sobre otra rama.
- `git tag`: marcar versiones importantes.
- Alias útiles (`git lg`, `git st`, etc.) configurados con `git config --global alias...`.

## Deploy con GitHub Pages

Este repo está preparado para deploy estático con GitHub Pages usando la rama `main` como fuente.

Pasos principales:

1. Crear un repositorio vacío en GitHub.
2. Configurar el remoto y hacer el primer push:

   ```bash
   git remote add origin https://github.com/codedevcoder/git-docs-site.git
   git push -u origin main
   ```

3. En GitHub, ir a **Settings → Pages** y configurar:
   - Source: **Deploy from a branch**.
   - Branch: `main` y carpeta `/ (root)`.

4. Esperar unos segundos y abrir la URL generada.

## Recursos útiles

- Página oficial de Git: https://git-scm.com/
- Repo de este proyecto: https://github.com/codedevcoder/git-docs-site
- Añadir capturas de pantalla de `git log`, `git status`, etc., en una carpeta `assets/img` adicional.
