const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`);// 打印URL
    await next();//调用下一个middlerware
});

app.use(async (ctx, next) => {
    const start = new Date().getTime();//当前时间
    await next(); //调用下一个middlerware
    const ms = new Date().getTime() - start; // 耗费时间
    console.log(`Time: ${ms}ms`); //打印耗费时间
});

app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2222222!</h1>';
});
app.listen(3000);
console.log('app started at port 3000....')