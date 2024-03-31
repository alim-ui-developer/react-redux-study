import React from 'react';
import { useSelector } from 'react-redux';
import GrandSonBox from './GrandSonBox';


const Box = () => {
  let count = useSelector(state => state.count)
  return (
    <div>
      <p>여기서도 불러올 수 있다 <em>{count}</em></p>
      <GrandSonBox />
    </div>
  )
}

export default Box