const request = require('supertest');
const app = require('../../src/app');
const taskController = require('../../src/controller//task-controller');

describe('/task', () => {
    beforeEach(() => {
      taskController.clean();
    });

    afterEach(() => {
      taskController.clean();
    });

    it('test should create task successfully', async () => {
        const response = await request(app)
          .post('/tasks')
          .send({title: 'Foo', description: 'Bar', status: 'pending'});

          expect(response.statusCode).toBe(201);
          expect(response.body).toHaveProperty('id');
    });

    it('test should list only pending tasks', async () => {
      const creationPendingResponse = await request(app)
        .post('/tasks')
        .send({title: 'Clean the house', description: 'Bar', status: 'pending'});

        const creationDoneResponse = await request(app)
        .post('/tasks')
        .send({title: 'Clean the garden', description: 'Bar', status: 'done'});

        const response = await request(app)
        .get('/tasks?status=pending');

        expect(creationPendingResponse.statusCode).toBe(201);
        expect(creationDoneResponse.statusCode).toBe(201);
        expect(response.body.length).toBe(1);
        expect(response.body[0].title).toBe('Clean the house');
  });

  it('test should list only done tasks', async () => {
    const creationPendingResponse = await request(app)
      .post('/tasks')
      .send({title: 'Clean the house', description: 'Bar', status: 'pending'});

      const creationDoneResponse = await request(app)
      .post('/tasks')
      .send({title: 'Clean the garden', description: 'Bar', status: 'done'});

      const response = await request(app)
      .get('/tasks?status=done');

      expect(creationPendingResponse.statusCode).toBe(201);
      expect(creationDoneResponse.statusCode).toBe(201);
      expect(response.body.length).toBe(1);
      expect(response.body[0].title).toBe('Clean the garden');
});
});