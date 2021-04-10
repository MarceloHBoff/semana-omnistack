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

describe('Session', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to login', async () => {
    const ong = await createOng();

    const response = await request(app).post('/session').send({
      id: ong.body.id,
    });

    expect(response.body).toHaveProperty('name');
  });
});
