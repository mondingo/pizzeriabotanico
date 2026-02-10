#!/bin/bash

echo "🍕 Desplegando Pizzería Botánico a GitHub Pages..."

# Verificar que estamos en un repositorio git
if [ ! -d .git ]; then
    echo "❌ Error: No estás en un repositorio git"
    echo "Ejecuta: git init"
    exit 1
fi

# Verificar que node_modules existe
if [ ! -d node_modules ]; then
    echo "📦 Instalando dependencias..."
    npm install
fi

# Construir el proyecto
echo "🔨 Construyendo el proyecto..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Error al construir el proyecto"
    exit 1
fi

# Desplegar a GitHub Pages
echo "🚀 Desplegando a GitHub Pages..."
npm run deploy

if [ $? -eq 0 ]; then
    echo "✅ ¡Despliegue exitoso!"
    echo "Tu sitio estará disponible en unos minutos en:"
    echo "https://TU-USUARIO.github.io/pizzeriabotanico/"
else
    echo "❌ Error al desplegar"
    exit 1
fi
