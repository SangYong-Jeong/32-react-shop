import React from 'react'
import styled from '../style/index'
import { useSearchParams } from 'react-router-dom'

import TestNavi from '../components/TestNavi'

const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
`

const MyCart = () => {
  // const location = useLocation();
  // console.log(location);
  // console.log(query.getAll('page')); // 배열리턴
  const [query] = useSearchParams()
  return (
    <Wrapper>
      <TestNavi />
      <h1>Cart {query.get('page')}</h1>
    </Wrapper>
  )
}

export default React.memo(MyCart)
