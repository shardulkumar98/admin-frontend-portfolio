import React from 'react'
import { Image } from 'antd'

interface IImage {
  src: string
}

const ImageComponent = ({ src, ...rest }: IImage) => <Image src={src} {...rest} />

export default ImageComponent
