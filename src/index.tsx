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
}

export const SxPaginate = ({
  recordsPerPage = 10,
  records = [],
  setRecords,
  buttonStyle = {},
  onPaginate,
  activeBtnStyle
}: Props) => {
  const [currentPage, setCurrentPage] = useState(1)
  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
  const currentRecords = records.slice(indexOfFirstRecord, indexOfLastRecord)

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
        <a
          style={buttonStyle}
          className={ styles.pageBtn}
        >
          {'Previous'}
        </a>
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
                <a
          style={buttonStyle}
          className={ styles.pageBtn}
        >
          {'Next'}
        </a>
      </ul>
    </nav>
  )
}
