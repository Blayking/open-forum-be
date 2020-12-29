import express from 'express';

/**
 * @returns {Express.Application}
 */
function bootstrap() {
    const app = express();
    
    app.use(express.json());

    // add any additional parsing middleware here

    return app;
}

export { bootstrap };