import * as yup from 'yup'

export const loginSchema = yup
  .object({
    email: yup.string().required(),
    password: yup.number().positive().integer().required(),
  })
  .required()
