import React, { useState } from 'react'

import { SxPaginate } from 'sx-paginate'
import 'sx-paginate/dist/index.css'

const App = () => {
  let p = []
  for (let i = 0; i < 100; i++) {
    p.push(i)
  }

  const [posts, setPosts] = useState(p)
  const [paginatedPosts, setPaginatedPosts] = useState([] as any[])

  const onPaginate = (pageNumber: number) => {
    console.log(pageNumber)
  }
  return (
<>
{paginatedPosts.map((p) => (
  <span key={p}>{p}</span>
))}

<SxPaginate
      recordsPerPage={10}
      onPaginate={onPaginate}
      records={posts}
      setRecords={setPaginatedPosts}
    /></>
  )
}

export default App
