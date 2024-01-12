import * as yup from 'yup'

export const loginSchema = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required()

const ImageSchema = yup.object().shape({
  category: yup.string().required(),
  subCategory: yup.string().required(),
})

export const UploadSchema = yup.object().shape({
  images: yup.array().of(ImageSchema).required(),
})
