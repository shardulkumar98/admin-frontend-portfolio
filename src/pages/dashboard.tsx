import { useState } from 'react'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import Button from 'components/Button/Button'
import SelectField from 'components/Select'
import UploadButton from 'components/UploadButton'
import usePost from 'hooks/usePost'
import { APIS } from 'constant/apis'
import { MainContainer, FormContainer, FormWrapper, Title, TextWrapper, FileTitle } from 'styles/pages/dashboard'

const Dashboard = () => {
  const [files, setFiles] = useState([{}])
  const { mutateAsync } = usePost()
  const { control, handleSubmit, reset } = useForm()

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
      <FormContainer>
        <FormWrapper onSubmit={handleSubmit(onSubmitUpload)}>
          <TextWrapper>
            <SelectField
              options={[
                { value: 'image', label: 'Image' },
                { value: 'video', label: 'Video' },
              ]}
              placeholder="Select Category"
              control={control}
              name="category"
            />

            <SelectField
              options={[
                { value: 'potrait', label: 'Potrait' },
                { value: 'landscape', label: 'Landscape' },
                { value: 'nature', label: 'Nature' },
              ]}
              placeholder="Select Subcategory"
              control={control}
              name="subCategory"
            />

            <Title>Add Files</Title>
            {/* <UploadButton customRequest={(e: any) => customRequest(e)} multiple={true} /> */}

            <UploadButton customRequest={customRequest} multiple={true} />
          </TextWrapper>

          {files.slice(1).map((e: any, index) => {
            return <FileTitle key={index}>{e?.fileName}</FileTitle>
          })}

          <Button label="upload" type="submit" />
        </FormWrapper>
      </FormContainer>
    </MainContainer>
  )
}

export default Dashboard
