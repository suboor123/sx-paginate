import React from 'react'

import { SxPaginate } from 'sx-paginate'
import 'sx-paginate/dist/index.css'

const App = () => {
  return <SxPaginate postsPerPage={10} totalPosts={100} paginate={(page: number) => {}} />
}

export default App
