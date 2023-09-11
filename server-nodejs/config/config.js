require('dotenv').config();
module.exports = {
    // for production process
    NODE_PORT: process.env.NODE_PORT,
    CHAT_ENGINE_PROJECT_ID: process.env.CHAT_ENGINE_PROJECT_ID,
    CHAT_ENGINE_PRIVATE_KEY: process.env.CHAT_ENGINE_PRIVATE_KEY,

    // for development process

    // NODE_PORT: process.env.NODE_PORT || "3001",
    // CHAT_ENGINE_PROJECT_ID: process.env.CHAT_ENGINE_PROJECT_ID || "04b533d6-d05a-4825-9d4a-ca32b8bb35a4",
    // CHAT_ENGINE_PRIVATE_KEY: process.env.CHAT_ENGINE_PRIVATE_KEY || "ea660016-5b3b-4603-9667-64f31f2eadd4",
};