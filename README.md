# ProduceX

ProduceX is an ecommerce mern webapp that sells organic local grown produces in season. 

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install ProduceX.

```bash
npm i
```

## Features 
 User | Admin product management
 -----|------
 Checkout process | user's features
 Database seeder | Admin user management
 login| update user to admin
 logout| delete user
 register| delete order
 rate and review the products| view users
 pay with paypal| mark orders as delivered option
 search products| 
 delete orders|
 view order | 
 update profile|
 shopping cart|


## Working on Features
 User | Admin
 -----|------
 forgotpassword| reset user
 confirm registration|

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