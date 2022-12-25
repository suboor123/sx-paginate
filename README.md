# sx-paginate

[![NPM](https://img.shields.io/npm/v/sx-paginate.svg)](https://www.npmjs.com/package/sx-paginate) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save sx-paginate
```

## Usage

```tsx
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
```

## License

MIT © [suboor123](https://github.com/suboor123)
# sx-paginate
