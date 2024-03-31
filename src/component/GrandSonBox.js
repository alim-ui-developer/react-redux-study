import React from 'react'
import { useSelector } from 'react-redux'

const GrandSonBox = () => {
  let count = useSelector(state => state.count)
  return (
    <div>Box컴포넌트 안의 Box에서도 볼 수 있는 <em>{count}</em></div>
  )
}

export default GrandSonBox