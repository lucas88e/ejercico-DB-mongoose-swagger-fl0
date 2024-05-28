const express = require('express');
const app = express();
const PORT = process.env.PORT||8000;
const { dbConnection } = require('./config/config');
const routes = require('./routes');
const swaggerUI = require('swagger-ui-express');
const basicInfo = require("./basicInfo");
const components = require('./docs/components');
const swaggerOptions = require('./basicInfo');
const task = require("./docs/users")


app.use(express.json());


app.use('/', routes,);
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerOptions))


dbConnection();

app.listen(PORT, () => console.log(`Server started on port http://localhost:${PORT}`));

module.exports={...basicInfo,...components,...task}
