import { createServer, Model } from 'miragejs';

createServer({
  models: {
    article: Model,
  },
  seeds(server) {
    server.db.loadData({
      articles: [
        {
          id: 1,
          title: `What was the trend in 2020 and you didn't use it`,
        },
      ],
    });
  },
  routes() {
    this.namespace = 'api';

    this.get('/articles', () => {
      return this.schema.all('article');
    });
  },
});
