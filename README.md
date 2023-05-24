Instructions:
1) cd ./strapi-todo
2) npm install
3) npm strapi --version
4) create file .env in root direcotory
5) add the following code into .env file 

HOST=0.0.0.0
PORT=1337
APP_KEYS=9XytPwtm4EkOA85ftNMXsg==,pITKdAgbuF2wg0GHYaj9Ww==,hQiaXtMNBjaPYda88MFf2g==,1KnYy9G8nfSP5fTo5wuP+g==
API_TOKEN_SALT=zXRiZNIF9TEWBZH3WUfCYg==
ADMIN_JWT_SECRET=hChgkOyEzpBahRg/dPZqsw==
TRANSFER_TOKEN_SALT=gPK+Pbg6GXZmTs6Ry1JkVA==
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=A2TeVqYa2PkSriARE5mZ9Q==


6) npm run build
7) npm run strapi develop --watch-admin
