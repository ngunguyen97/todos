import { createServer, Model } from 'miragejs';

export const setupServer = () => {
  return createServer({
    models: {
      todo: Model,
    },
    routes() {
      this.namespace = 'api';

      this.get('/todos', (schema, request) => {
        return schema.todos.all();
      });

      this.post('todos', (schema, request) => {
        const payload = JSON.parse(request.requestBody);

        return schema.todos.create(payload);
      });

      this.patch('/todos/:id', (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody);
        let id = request.params.id;
        let todo = schema.todos.find(id);

        return todo.update(newAttrs);
      });
    },
    seeds(server) {
      server.create('todo', { name: 'Learn Yoga', completed: false, priority: 'Medium' });
    },
  });
};
