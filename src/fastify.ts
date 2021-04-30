import Fastify from 'fastify';
const fastify = Fastify({ logger: false });
import { readFileSync } from 'fs';
import { join } from 'path';
import { green } from 'chalk';
import './parseMd';
const port = 3001;
fastify.register(import('fastify-static'), {
	root: join(__dirname, '..'),
});
fastify.get('/', (req, res) => {
	const bufferIndexHtml = readFileSync(join(__dirname, '..', 'index.html'));
	res.type('text/html').send(bufferIndexHtml);
});
fastify.get('/projects', (req, res) => {
	const bufferIndexHtml = readFileSync(join(__dirname, '..', 'projects.html'));
	res.type('text/html').send(bufferIndexHtml);
});

console.time(green(`http://localhost:${port} `));
fastify.listen(port, '0.0.0.0', () =>
	console.timeEnd(green(`http://localhost:${port} `))
);
