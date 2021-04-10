import { celebrate, Segments, Joi } from 'celebrate';

export const SessionPost = celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required(),
  }),
});
