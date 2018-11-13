import * as Yup from 'yup';

const validateMiddlware = validationSchema => {
  return (ctx, next) => {
    try {
      const { body } = ctx.request;
      validationSchema.validateSync(body, { returnError: true });
      return next();
    } catch (error) {
      throw error;
    }
  };
};

export default validateMiddlware;