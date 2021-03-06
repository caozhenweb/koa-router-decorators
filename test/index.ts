import * as assert from 'assert';
import 'mocha';
import * as request from 'supertest';
import server from '../sample/src/index';

describe('正确收集路由', () => {
    'GET,PUT,POST,DELETE,PATCH'.split(',').forEach((method) => {
        const name = method.toLowerCase();
        it(`${method} /api/method`, (done) => {
            request(server)
                [name]('/api/method')
                .expect('Content-Type', /application\/json/)
                .expect('X-Response-Time', /\d+/)
                .expect((res) => assert.equal(res.body.method, method))
                .end(done);
        });
    });
});
