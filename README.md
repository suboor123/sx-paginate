# sx-paginate

[![NPM](https://img.shields.io/npm/v/sx-paginate.svg)](https://www.npmjs.com/package/sx-paginate) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![Screenshot 2022-12-29 at 5 18 48 AM](https://user-images.githubusercontent.com/39632489/209886070-26795c0b-01df-4fe8-a516-8c6043bfedd4.png)

DEMO - https://stackblitz.com/edit/react-hctxyq?file=src/App.js


## Install

```bash
npm install --save sx-paginate
```

## Usage

```tsx
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
    (async () => {
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
        setRecords={setPaginatedPosts as any}
        activeBtnStyle={{ background: 'coral' }}
      />
    </>
  )
}

export default App

```

## License

MIT © [suboor123](https://github.com/suboor123)
# sx-paginate
