import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useFieldArray, useForm } from 'react-hook-form'
import Button from 'components/Button/Button'
import SelectField from 'components/Select'
import UploadButton from 'components/UploadButton'
import usePost from 'hooks/usePost'
import { APIS } from 'constant/apis'
import {
  MainContainer,
  FormContainer,
  FormWrapper,
  Title,
  TextWrapper,
  FileTitle,
  ImagesWrapper,
} from 'styles/pages/dashboard'
import DeleteIcon from 'assets/svg/delete'

const Dashboard = () => {
  const [files, setFiles] = useState([{}])
  const { mutateAsync } = usePost()
  const { control, handleSubmit, reset } = useForm()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'admin',
  })

  useEffect(() => {
    append({ category: '', subCategory: '' })
  }, [])

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

  const onSubmitUpload = async (data: any) => {
    try {
      const response = await mutateAsync({
        url: `${APIS.UPLOAD_IMAGES_DETAILS}`,
        payload: {
          category: data.category,
          files: [
            {
              subCategory: data.subCategory,
              fileDetails: files.slice(1),
            },
          ],
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
      <Title onClick={() => append({ category: '', subCategory: '' })}>Add More</Title>
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
                name={`admin.${index}.category`}
              />

              <SelectField
                options={[
                  { value: 'potrait', label: 'Potrait' },
                  { value: 'landscape', label: 'Landscape' },
                  { value: 'nature', label: 'Nature' },
                ]}
                placeholder="Select Subcategory"
                control={control}
                name={`admin.${index}.subCategory`}
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
        </FormWrapper>
        <Button label="upload" type="submit" />
      </FormContainer>
    </MainContainer>
  )
}

export default Dashboard
