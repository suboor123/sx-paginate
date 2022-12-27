import * as React from 'react'
import { useState } from 'react'
import styles from './styles.module.css'

interface Props {
  recordsPerPage: number
  onPaginate?: (pageNumber: number) => void
  records: any[]
  setRecords: (records: any[]) => any
  buttonStyle?: React.CSSProperties
  activeBtnStyle?: React.CSSProperties
  ellipses?:boolean
  color?:string
}

export const SxPaginate = ({
  recordsPerPage = 10,
  records = [],
  setRecords,
  buttonStyle = {},
  onPaginate,
  activeBtnStyle,
  color='blue',
  
}: Props) => {
  const [currentPage, setCurrentPage] = useState(1)
  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
  const currentRecords = records.slice(indexOfFirstRecord, indexOfLastRecord)
  document.documentElement.style.setProperty('--mainColor',color)
  React.useEffect(() => {
    setRecords(currentRecords)
  
  }, [currentPage, records.length])

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    if (onPaginate) onPaginate(pageNumber)
  }
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(records.length / recordsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className={styles.pagination}>
        <a style={buttonStyle} onClick={()=> paginate(currentPage-1)} className={`${styles.pageBtn} ${styles.prev} ${currentPage == 1 ? styles.disabled : ""}`}>Previous</a>
        {pageNumbers.map((number) => (
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
        ))}
        <a style={buttonStyle} onClick={()=> paginate(currentPage+1)} className={`${styles.pageBtn}  ${styles.next} ${currentPage == pageNumbers.length ? styles.disabled : ""}`}>Next</a>
      </ul>
    </nav>
  )
}
