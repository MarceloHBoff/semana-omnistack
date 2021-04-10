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

  it('should be able to create a new ong', async () => {
    const response = await createOng();

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });

  it('should be able to list ongs', async () => {
    await createOng();
    const response = await request(app).get('/ongs');

    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('name');
    expect(response.body[0]).toHaveProperty('email');
    expect(response.body[0]).toHaveProperty('whatsapp');
    expect(response.body[0]).toHaveProperty('city');
    expect(response.body[0]).toHaveProperty('uf');
  });
});
