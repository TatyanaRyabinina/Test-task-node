import koa from 'koa';
import koaBody from 'koa-body';
import cors from 'koa2-cors';
import swagger from 'swagger-injector';
import path from 'path';
import config from './config';
import { configurePublic, configurePrivate } from './routing';

const app = new koa();

app.use(cors());
app.use(
  swagger.koa({
    path: path.join(__dirname, './swagger.json'),
  }),
);
app.use(koaBody());
app.use(configurePublic());
app.use(configurePrivate());

app.listen(config.port, () => console.log(`App listening on ${config.port} port`));