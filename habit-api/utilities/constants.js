'use strict';
module.exports = {
    DB: {
        NAME: "habit-app",
        CONNECTION_STRING: "mongodb+srv://ayushi:ayushi1234@cluster0-jvytf.mongodb.net/ayushi?retryWrites=true&w=majority",
    },
    COLLECTIONS: {
        USER_COLLECTION: 'user',
    },
    API_ENDPOINTS: {
        USER_ENDPOINT: '/user',
    },
}