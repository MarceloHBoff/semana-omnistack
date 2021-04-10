import Dev from '../models/Dev';
import api from '../services/api';

import { findConnections, sendMessage } from '../websocket';

export default {
  async index(req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  },

  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ github_username });

    if (dev) {
      return res.json(dev);
    }

    const response = await api.get(
      `https://api.github.com/users/${github_username}`
    );

    const { name = login, avatar_url, bio } = response.data;

    const techArray = techs.split(',').map(tech => tech.trim());

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };

    dev = await Dev.create({
      github_username,
      name,
      avatar_url,
      bio,
      techs: techArray,
      location,
    });

    const sendSocketMessageTo = findConnections(
      { latitude, longitude },
      techArray
    );

    sendMessage(sendSocketMessageTo, 'newdev', dev);

    return res.json(dev);
  },
};
