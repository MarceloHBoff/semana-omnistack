import request from 'supertest';
import app from '../../src/app';
import connection from '../../src/database/connection';

async function createOng() {
  const response = await request(app).post('/ongs').send({
    name: 'APAE',
    email: 'email@email.com',
    whatsapp: '999999999999',
    city: 'Campo Bom',
    uf: 'RS',
  });

  return response;
}

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new incident in a ong', async () => {
    const ong = await createOng();

    const response = await request(app)
      .post('/incidents')
      .set('Authorization', ong.body.id)
      .send({
        title: 'Caso 1',
        description: 'Caso 1..;',
        value: 120,
      });

    expect(response.body).toHaveProperty('id');
  });

  it('should be able to list incidents', async () => {
    const ong = await createOng();

    await request(app)
      .post('/incidents')
      .set('Authorization', ong.body.id)
      .send({
        title: 'Caso 1',
        description: 'Caso 1..;',
        value: 120,
      });

    const response = await request(app).get('/incidents');

    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('title');
    expect(response.body[0]).toHaveProperty('description');
    expect(response.body[0]).toHaveProperty('value');
  });
});
