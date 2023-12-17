import React from 'react'

// =================================================
// FIXME: 장기적으로 추가되면 길어지므로써, 코드 병목을 야기할 수 있음.
// 또한 아이콘의 변경으로 여러 컴포넌트 디펜던시가 많아질 수 있음.
import letterPath from './images/shape=letter.svg';
import lockPath from './images/shape=lock.svg';
import showPath from './images/shape=show.svg';
import hidePath from './images/shape=hide.svg';
// =================================================
import Image from 'next/image';

interface IIconProps {
  // =================================================
  // FIXME: 아이콘 제공 타입과 import 된 아이콘의 매칭이 안되서 빠지는 컴포넌트가 존재할 수 있음.
  type: 'letter' | 'lock' | 'show' | 'hide';
  // =================================================
  alt?: string;
  [x: string]: any;
}

const Icon = ({ type, alt = '', ...restProps }: IIconProps) => {
  let src = '';

  // =================================================
  // FIXME: 장기적으로 추가되면 길어지므로써, 코드 병목을 야기할 수 있음.
  // 또한 아이콘의 변경으로 여러 컴포넌트 디펜던시가 많아질 수 있음.
  switch (type) {
    case 'letter':
      src = letterPath
      break;
    case 'lock':
      src = lockPath
      break;
    case 'show':
      src = showPath
      break;
    case 'hide':
      src = hidePath
      break;
    default:
      throw new Error('지원하는 아이콘 타입이 존재하지 않습니다.');
  }
  // ===================================================

  return <Image src={src} alt={alt} {...restProps} />
}

export default Icon