# ENERPY - Transformando Residuos en Energía Sostenible

ENERPY es líder en tecnología de transformación de residuos en energía sostenible a través de su tecnología RMO® patentada. Soluciones innovadoras para un futuro más verde.

## 🚀 Tecnologías

Este proyecto está construido con:

- **Vite** - Build tool y dev server
- **TypeScript** - Lenguaje de programación
- **React** - Biblioteca de UI
- **shadcn/ui** - Componentes de UI
- **Tailwind CSS** - Framework de CSS
- **Framer Motion** - Animaciones
- **GSAP** - Animaciones avanzadas
- **React Router** - Enrutamiento

## 🛠️ Instalación y Desarrollo

### Requisitos previos

- Node.js >= 18.0.0
- npm >= 8.0.0

### Instalación

```bash
# Clonar el repositorio
git clone <YOUR_GIT_URL>

# Navegar al directorio del proyecto
cd enerpy

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

## 📝 Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run build:dev` - Construye en modo desarrollo
- `npm run build:prod` - Construye en modo producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter
- `npm run lint:fix` - Corrige automáticamente los errores de linting
- `npm run type-check` - Verifica los tipos de TypeScript
- `npm run test` - Ejecuta los tests
- `npm run test:coverage` - Ejecuta tests con cobertura

## 🏗️ Estructura del proyecto

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes de UI base
│   └── environmental/ # Componentes específicos del medio ambiente
├── hooks/              # Custom hooks
├── lib/                # Utilidades y configuraciones
└── pages/              # Páginas de la aplicación
    ├── index/          # Página principal
    ├── tecnologia/     # Página de tecnología
    ├── historia/       # Página de historia
    ├── que-hacemos/    # Página "Qué hacemos"
    ├── contribuir/     # Página de contribución
    └── contacto/       # Página de contacto
```

## 🌍 Variables de entorno

Crea un archivo `.env` basado en `env.example` para configurar las variables de entorno necesarias.

## 📦 Build y Deploy

### Build para producción

```bash
npm run build:prod
```

### Previsualizar build

```bash
npm run preview
```

Los archivos de build se generarán en la carpeta `dist/`.

## 🧪 Testing

```bash
# Ejecutar tests
npm run test

# Ejecutar tests con cobertura
npm run test:coverage
```

## 📋 Linting y Formato

```bash
# Verificar código
npm run lint

# Corregir automáticamente
npm run lint:fix

# Verificar tipos
npm run type-check
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es propiedad de ENERPY. Todos los derechos reservados.
