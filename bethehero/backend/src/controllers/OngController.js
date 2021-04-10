import generateUniqueId from '../util/generateUniqueId';

import connection from '../database/connection';

class OngController {
  async index(req, res) {
    const ongs = await connection('ongs').select('*');

    return res.json(ongs);
  }

  async store(req, res) {
    const id = generateUniqueId();

    await connection('ongs').insert({
      id,
      ...req.body,
    });

    return res.json({ id });
  }
}

export default new OngController();
