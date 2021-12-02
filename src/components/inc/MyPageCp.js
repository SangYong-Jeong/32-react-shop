import React from 'react'
import {
  Search,
  FavoriteBorder,
  ShoppingCartOutlined,
} from '@mui/icons-material'

import styled from '../../style'

const MyPageCp = () => {
  return (
    <div>
      <Search />
      <FavoriteBorder />
      <ShoppingCartOutlined />
    </div>
  )
}

export default React.memo(MyPageCp)
