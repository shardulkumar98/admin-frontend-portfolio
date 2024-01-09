import React from 'react'
import { UploadOutlined } from '@ant-design/icons'
import { Button, Upload } from 'antd'

export interface UploadButtonProps {
  customRequest: any
  onRemove?: any
  onPreview?: any
  multiple: boolean
}

const UploadButton: React.FC<UploadButtonProps> = ({ customRequest, onRemove, onPreview, ...rest }) => (
  <Upload customRequest={customRequest} onRemove={onRemove} onPreview={onPreview} showUploadList={false} {...rest}>
    <Button icon={<UploadOutlined />}>Upload</Button>
  </Upload>
)

export default UploadButton
