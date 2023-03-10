import * as React from 'react'
import { useState } from 'react'
import styles from './styles.module.css'

interface Props {
  recordsPerPage: number
  onPaginate?: (pageNumber: number) => void
  records: any[]
  setRecords: any | ((records: any[]) => void)
  buttonStyle?: React.CSSProperties
  activeBtnStyle?: React.CSSProperties
  ellipses?: boolean
  activeColor?: string
}

export const SxPaginate = ({
  recordsPerPage = 10,
  records = [],
  setRecords,
  buttonStyle = {},
  onPaginate,
  activeBtnStyle,
  activeColor = 'blue',
  ellipses = false
}: Props) => {
  const [currentPage, setCurrentPage] = useState(1)
  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
  const currentRecords = records.slice(indexOfFirstRecord, indexOfLastRecord)
  document.documentElement.style.setProperty('--mainColor', activeColor)
  React.useEffect(() => {
    setRecords(currentRecords)
  }, [currentPage, records.length])

  const paginate = (pageNumber: number | string) => {
    if (typeof pageNumber == 'string') {
      return
    }
    setCurrentPage(pageNumber)

    if (onPaginate) onPaginate(pageNumber)
  }

  const ellipsesPaginate = (currentPage: number) => {
    let current = currentPage,
      last = records.length / recordsPerPage,
      delta = 2,
      left = current - delta,
      right = current + delta + 1,
      range = [],
      l

    for (let i = 1; i <= last; i++) {
      if (i == 1 || i == last || (i >= left && i < right)) {
        range.push(i)
      }
    }

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          pageNumbers.push(l + 1)
        } else if (i - l !== 1) {
          pageNumbers.push('...')
        }
      }
      pageNumbers.push(i)
      l = i
    }
  }
  const pageNumbers = []
  if (ellipses) {
    ellipsesPaginate(currentPage)
  } else {
    for (let i = 1; i <= Math.ceil(records.length / recordsPerPage); i++) {
      pageNumbers.push(i)
    }
  }

  return (
    <nav>
      <ul className={styles.pagination + ' ' + 'sg-pagination'}>
        <a
          style={buttonStyle}
          onClick={() => paginate(currentPage - 1)}
          className={`${styles.pageBtn} ${styles.prev} ${
            currentPage == 1 ? styles.disabled : ''
          } sx-pagination-prev-btn`}
        >
          Previous
        </a>
        {pageNumbers.map((number, index) => {
          if (typeof number == 'string') {
            return (
              <a
                key={index + '...'}
                style={buttonStyle}
                className={`${styles.pageBtn} ${styles.disabled} sx-pagination-btn`}
                
              >
                ...
              </a>
            )
          } else {
            return (
              <a
                key={number}
                style={
                  currentPage === number
                    ? activeBtnStyle || buttonStyle
                    : buttonStyle
                }
                onClick={() => paginate(number)}
                className={
                  currentPage === number ? styles.pageBtnActive : styles.pageBtn
                }
              >
                {number}
              </a>
            )
          }
        })}
        <a
          style={buttonStyle}
          onClick={() => paginate(currentPage + 1)}
          className={`${styles.pageBtn}  ${styles.next} ${
            currentPage == pageNumbers.length ? styles.disabled : ''
          } sx-pagination-next-btn`}
        >
          Next
        </a>
      </ul>
    </nav>
  )
}
