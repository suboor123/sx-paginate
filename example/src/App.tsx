import React, { useState, useEffect } from 'react'

import { SxPaginate } from 'sx-paginate'
import 'sx-paginate/dist/index.css'

const App = () => {
  const [posts, setPosts] = useState([])
  const [paginatedPosts, setPaginatedPosts] = useState([])

  const onPaginate = (pageNumber: number) => {
    console.log(pageNumber)
  }

  useEffect(() => {
    ;(async () => {
      const res = await fetch('https://dummyjson.com/products')
      const data = await res.json()
      setPosts(data.products)
    })()
  }, [])

  useEffect(() => {
    console.log(paginatedPosts)
  }, [paginatedPosts])

  return (
    <>
      {paginatedPosts.map((p: any) => (
        <div key={p.id}>{p.title}</div>
      ))}

      <SxPaginate
        recordsPerPage={10}
        onPaginate={onPaginate}
        records={posts}
        setRecords={setPaginatedPosts as any}
        activeBtnStyle={{background: 'red'}}
      />
    </>
  )
}

export default App
