
//SWAGGER

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Produce Market',
            version: '1.0.0',
            description: 'A simple API for managing products and users'  
        },
        servers: [
            { 
            url: `http://localhost:${process.env.PORT ?? 5000}`,
            description: 'Development server',
        }
    ],
       
    },
    apis: ["../backend/**/*.js"]
}

export default options;