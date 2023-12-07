// require('dotenv').config(); 

module.exports = {
    // for production process
    REACT_APP_BACKEND_URL: process.env.REACT_APP_BACKEND_URL || "http://localhost:3001",
    REACT_APP_CHAT_ENGINE_PROJECT_ID: process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID || "98496bbc-176c-49b0-98dc-1d6d44334e0c",

    // for development process

    // BACKEND_URL: process.env.BACKEND_URL || "http://localhost:3001",
    // REACT_APP_CHAT_ENGINE_PROJECT_ID: process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID || "04b533d6-d05a-4825-9d4a-ca32b8bb35a4",
};