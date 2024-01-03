import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useForm } from 'react-hook-form'
// import TextInput from "components/FormElements/Input"
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { message, Upload } from 'antd'
import type { UploadChangeParam } from 'antd/es/upload'
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface'
import { LoginRoute } from 'constant/routes'
import Button from 'components/Button/Button'
import { MainContainer, Heading, FormContainer, FormWrapper, Title, TextWrapper } from 'styles/pages/dashboard'

// eslint-disable-next-line no-unused-vars
const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result as string))
  reader.readAsDataURL(img)
}

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!')
  }
  // const isLt2M = file.size / 1024 / 1024 < 2;
  // if (!isLt2M) {
  //   message.error('Image must smaller than 2MB!');
  // }

  // return isJpgOrPng && isLt2M
  return isJpgOrPng
}

const Dashboard = () => {
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState<string>()
  // const { control } = useForm()

  const navigate = useNavigate()

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }

    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false)
        setImageUrl(url)
      })
    }
  }

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  )

  const handleLogOut = () => {
    localStorage.removeItem('token')
    navigate(`${LoginRoute.path}`)
  }

  return (
    <MainContainer>
      <Heading>
        <div style={{ color: '#2D3250' }}>TITLE</div>
        <div style={{ color: '#2D3250' }} onClick={handleLogOut}>
          Log Out
        </div>
      </Heading>
      <FormContainer>
        <FormWrapper>
          <TextWrapper>
            <Title>Add Files</Title>
            {/* <TextInput name="image" type="file" control={control} /> */}
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
          </TextWrapper>
          <Button label="upload" />
        </FormWrapper>
      </FormContainer>
    </MainContainer>
  )
}

export default Dashboard
