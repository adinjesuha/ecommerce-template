import React from 'react'
import { Link } from 'gatsby'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

import { PaginationWrapper } from './styles'

const Pagination = ({isFirst, isLast, prevPage, numPages, handle, currentPage, nextPage}) => (
  <PaginationWrapper>
    <ul>
      {!isFirst && (
        <li>
          <Link className="pagination__item" to={prevPage} rel="prev">
            <span>
              <MdKeyboardArrowLeft />
            </span>
            Anterior
          </Link>
        </li>
      )}
      {Array.from({ length: numPages }, (_, i) => {
        let pageNum = i + 1
        if(pageNum === currentPage){
          return (
            <li>
              <span className="current-item">{i + 1}</span>
            </li>
          )
        } 
        return (
          <li key={`pagination-number${i + 1}`}>
            <Link
              to={`/${handle}/${i === 0 ? '' : i + 1}`}
              className={currentPage === i + 1 ? "pagination__item is-active" : "pagination__item"}
            >
              {i + 1}
            </Link>
          </li>
        )
      }
      )}
      <li className="pagination__list-item">
      {!isLast && (
        <Link className="pagination__item" to={nextPage} rel="next">
          Siguiente
          <span>
            <MdKeyboardArrowRight />
          </span>
        </Link>
      )}
      </li>
    </ul>
  </PaginationWrapper>
)

export default Pagination