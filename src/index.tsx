import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  postsPerPage: number
  totalPosts: number
  paginate: (page: number) => void
}

export const SxPaginate = ({ postsPerPage, totalPosts, paginate }: Props) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className={styles.pagination}>
        {pageNumbers.map((number) => (
          <a onClick={() => paginate(number)} className='page-link'>
            {number}
          </a>
        ))}
      </ul>
    </nav>
  )
}
