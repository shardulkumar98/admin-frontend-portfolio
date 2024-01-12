import { useState } from 'react'
import { toast } from 'react-toastify'
import { useFieldArray, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from 'components/Button/Button'
import SelectField from 'components/Select'
import UploadButton from 'components/UploadButton'
import usePost from 'hooks/usePost'
import { APIS } from 'constant/apis'
import DeleteIcon from 'assets/svg/delete'
import AddMoreIcon from 'assets/svg/addMore'
import {
  MainContainer,
  FormContainer,
  FormWrapper,
  AddMoreWrapper,
  TextWrapper,
  FileTitle,
  ImagesWrapper,
} from 'styles/pages/dashboard'
import { UploadSchema } from 'validation'

interface FormValues {
  images: {
    category: string
    subCategory: string
  }[]
}

const Dashboard = () => {
  const [files, setFiles] = useState([{}])
  const { mutateAsync } = usePost()
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      images: [{ category: '', subCategory: '' }],
    },
    mode: 'onBlur',
    resolver: yupResolver(UploadSchema),
  })

  errors
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'images',
  })

  const customRequest = async (evt: any) => {
    const formData = new FormData()
    formData.append('image', evt?.file)

    const supportedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'video/mp4']
    const isFileTypeSupported = supportedTypes.includes(evt?.file?.type)

    if (isFileTypeSupported) {
      try {
        const response = await mutateAsync({
          url: APIS.UPLOAD,
          payload: formData,
        })

        const newUrl = response?.data
        setFiles((pre) => [...pre, ...newUrl])
      } catch (err) {
        err
      }
    } else {
      toast.error(
        !isFileTypeSupported ? (
          <div className="capitalize-first-letter">{`${evt?.file?.type.split('/')[1]} format is not supported`}</div>
        ) : (
          'File size is too large'
        ),
      )
    }
  }

  const onSubmitUpload = async (data: FormValues) => {
    const customPayload = data?.images.map((ele: any) => {
      return {
        category: ele.category,
        files: [
          {
            subCategory: ele.subCategory,
            fileDetails: files.slice(1),
          },
        ],
      }
    })

    try {
      const response = await mutateAsync({
        url: `${APIS.UPLOAD_IMAGES_DETAILS}`,
        payload: {
          images: customPayload,
        },
      })
      if (response) {
        reset()
        setFiles([{}])
      }
    } catch (error) {
      error
    }
  }

  return (
    <MainContainer>
      <AddMoreWrapper>
        <AddMoreIcon onClick={() => append({ category: '', subCategory: '' })} />
      </AddMoreWrapper>
      <FormContainer>
        <FormWrapper onSubmit={handleSubmit(onSubmitUpload)}>
          {fields.map((item, index) => (
            <TextWrapper key={item?.id}>
              <SelectField
                options={[
                  { value: 'image', label: 'Image' },
                  { value: 'video', label: 'Video' },
                ]}
                placeholder="Select Category"
                control={control}
                name={`images.${index}.category` as const}
              />

              <SelectField
                options={[
                  { value: 'potrait', label: 'Potrait' },
                  { value: 'landscape', label: 'Landscape' },
                  { value: 'nature', label: 'Nature' },
                ]}
                placeholder="Select Subcategory"
                control={control}
                name={`images.${index}.subCategory` as const}
              />

              <UploadButton customRequest={customRequest} multiple={true} />

              <ImagesWrapper>
                {!files.slice(1).length ? (
                  <div>File Details</div>
                ) : (
                  <ul>
                    {files.slice(1).map((e: any, index) => {
                      return <FileTitle key={index}>{e?.fileName}</FileTitle>
                    })}
                  </ul>
                )}
              </ImagesWrapper>
              <DeleteIcon onClick={() => remove(index)} />
            </TextWrapper>
          ))}
          <Button label="upload" type="submit" />
        </FormWrapper>
      </FormContainer>
    </MainContainer>
  )
}

export default Dashboard
