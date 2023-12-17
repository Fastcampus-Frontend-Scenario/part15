import React from 'react'

import list from './IconList'
import Image from 'next/image';

interface IIconProps {
  type: keyof typeof list
  alt?: string;
  [x: string]: any;
}

const Icon = ({ type, alt = '', ...restProps }: IIconProps) => {
  let src = list?.[type]

  if (!src) {
    throw new Error('지원되는 아이콘 이미지가 없습니다.')
  }

  return <Image src={src} alt={alt} {...restProps} />
}

export default Icon