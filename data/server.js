/* eslint-disable no-undef */
// server.js
import { create, router as _router, defaults } from 'json-server';
const server = create();
const router = _router('data.json');
const middlewares = defaults();

const PORT = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
