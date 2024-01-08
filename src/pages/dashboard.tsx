import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { LoginRoute } from 'constant/routes'
import Button from 'components/Button/Button'
import { MainContainer, Heading, FormContainer, FormWrapper, Title, TextWrapper } from 'styles/pages/dashboard'
import { UserContext } from 'context/userInfo'
import SelectField from 'components/Select'
import UploadButton from 'components/UploadButton'
import usePost from 'hooks/usePost'
import { APIS } from 'constant/apis'

const Dashboard = () => {
  // const [first, setfirst] = useState(second)
  const { mutateAsync } = usePost()
  const { userInfo } = useContext(UserContext)
  const navigate = useNavigate()

  const { control, handleSubmit } = useForm()

  const customRequest = async (evt: any, keyName: string) => {
    keyName
    // const urlKeyName = `${keyName}`

    // if (values?.[urlKeyName]) {
    //   handleRemove(keyName)
    // }

    const formData = new FormData()
    formData.append('image', evt?.file)

    // const fileSizeInBytes = evt?.file?.size
    // const fileSizeInMB = fileSizeInBytes / 1048576

    const supportedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'video/mp4']
    const isFileTypeSupported = supportedTypes.includes(evt?.file?.type)

    if (isFileTypeSupported) {
      try {
        // evt.onProgress({ percent: 0 })
        const response = await mutateAsync({
          url: APIS.UPLOAD,
          payload: formData,
        })
        response

        // console.log('response', response)

        // evt.onProgress({ percent: 100 })
        // setValue(keyName, response?.data?.data?.url)
        // clearErrors(keyName)

        // const newUrl = { [urlKeyName]: response?.data?.data?.url }

        // setUrls([...urls, newUrl])
        // setIsPreviewed((prevState) => ({
        //   ...prevState,
        //   [keyName]: true,
        // }))
      } catch (err) {
        err
      }
    } else {
      // toast.error(
      //   !isFileTypeSupported ? (
      //     <ErrorMessageWrapper className="capitalize-first-letter">{`${evt?.file?.type.split(
      //       '/',
      //     )[1]} format is not supported`}</ErrorMessageWrapper>
      //   ) : (
      //     'File size is too large'
      //   ),
      // )
    }
  }

  const onSubmitUpload = (data: any) => {
    // console.log('data', data)
    data
  }

  const handleLogOut = () => {
    localStorage.removeItem('token')
    navigate(`${LoginRoute.path}`)
  }

  return (
    <MainContainer>
      <Heading>
        <div style={{ color: '#2D3250' }}>{userInfo?.username}</div>
        <div style={{ color: '#2D3250' }} onClick={handleLogOut}>
          Log Out
        </div>
      </Heading>
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
            <UploadButton customRequest={(e: any) => customRequest(e, 'test')} />
          </TextWrapper>
          <Button label="upload" type="submit" />
        </FormWrapper>
      </FormContainer>
    </MainContainer>
  )
}

export default Dashboard
