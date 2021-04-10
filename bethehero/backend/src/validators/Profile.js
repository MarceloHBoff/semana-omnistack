import { celebrate, Segments, Joi } from 'celebrate';

export const ProfileGet = celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
});
