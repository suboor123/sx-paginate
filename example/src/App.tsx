import React, { useState, useEffect } from 'react'

import { SxPaginate } from 'sx-paginate'
import 'sx-paginate/dist/index.css'

const App = () => {
  const [posts, setPosts] = useState<any[]>([])
  const [paginatedPosts, setPaginatedPosts] = useState([])

  const onPaginate = (pageNumber: number) => {
    console.log(pageNumber)
  }

  useEffect(() => {
    ;(async () => {
      const res = await fetch('https://dummyjson.com/posts')
      const data = await res.json()
      setPosts(data.posts)
    })()
  }, [])

  useEffect(() => {
    console.log(paginatedPosts)
  }, [paginatedPosts])

  return (
    <>
      {paginatedPosts.map((post: any) => (
        <div key={post.id}>{post.title}</div>
      ))}

      <SxPaginate
        recordsPerPage={10}
        onPaginate={onPaginate}
        records={posts}
        setRecords={setPaginatedPosts}
        activeColor={'#157af6'}
        ellipses={true}
        activeBtnStyle={{ color: 'white' }}
      />
    </>
  )
}

export default App
