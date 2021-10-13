# ProduceX

ProduceX is an ecommerce mern webapp that sells organic local grown produces in season. 

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install ProduceX.

```bash
npm i
```
## Dependecies
```
# create a .env in the root dir and add the following vars 
NODE_ENV = xxxxx
PORT = 5000 # or which ever you want 
MONGO_URL =xxxxxxxxxxxxxx
JWT_TOKEN_SECRET = xxxxxxxxxx
PAYPAL_CLIENT_ID=xxxxxxxxxxxx
```
## Usage

```bash
# to start the app
npm run dev
```

```bash
# to seed data 
npm run data:import
```
```bash
# to destroy data 
data:destroy
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)