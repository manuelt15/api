# 📊 API de Gastos

API REST construida con **Node.js**, **Express** y **MongoDB** para la gestión de gastos.  
La arquitectura incluye **controllers**, **middlewares**, **models** y un **router** centralizado.  

---

## 🚀 Características
- Conexión a **MongoDB** mediante **Mongoose**.  
- Manejo de **CORS**.  
- Middleware para **JSON** y **URL-encoded**.  
- Rutas organizadas en un router modular.  
- Separación en capas: **controllers**, **middlewares**, **models**, **router**.  

---

## 📂 Estructura del Proyecto
```bash
.
├── controllers/      # Lógica de negocio
├── middlewares/      # Funciones intermedias
├── models/           # Esquemas de Mongoose
├── router/           # Definición de rutas
├── index.js          # Punto de entrada de la aplicación
└── package.json

⚙️ Instalación
git clone https://github.com/usuario/api-gastos.git
cd api-gastos
npm install

▶️ Uso
npm run dev
npm start

🛠️ Tecnologías

Node.js

Express

MongoDB

Mongoose

CORS

📌 Notas

Asegúrate de que MongoDB esté corriendo antes de iniciar la API.

Usa herramientas como Postman o Insomnia para probar los endpoints.
