const Koa = require('koa');

const router = require('koa-router')();

const bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(bodyParser());

const controller = require('./controller.js');

app.use(controller());
app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000...');