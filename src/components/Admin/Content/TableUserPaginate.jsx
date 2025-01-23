
import ReactPaginate from 'react-paginate'
import { useState, useEffect } from 'react'
const tableUserPaginate = (props) => {
  const { listUser, setShowUpdateUser, handleClickViewUser, handleClickDeleteUser, fetchListUserWithPaginate, pageCount, currentPage, setCurrentPage } = props
  const handlePageClick = (event) => {
    fetchListUserWithPaginate(+event.selected + 1)
    setCurrentPage(+event.selected + 1)
  }
  return (
    <>
      <div>
        <table className="table table-hover table-bordered" key={12}>
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Email</th>
              <th scope="col">Name</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          {listUser&&listUser.length >0 && listUser.map((list, idex) => {
            return (
              <>
                <tbody>
                  <tr key={idex}>
                    <th scope="row">{list.id}</th>
                    <td>{list.email}</td>
                    <td>{list.username}</td>
                    <td>{list.role}</td>
                    <td><button className='btn btn-primary' onClick={() => handleClickViewUser(list)}>View</button>
                      <button className='btn btn-warning mx-3'onClick={() => setShowUpdateUser(list)}>Update</button>
                      <button className='btn btn-danger' onClick={() => handleClickDeleteUser(list)}>Delete</button></td>
                  </tr>
                </tbody>
              </>
            )})}
          {listUser&&listUser.length === 0 &&

    <tr>
      <td colSpan={4}>Not found data</td>
    </tr>}
        </table>
        <div className='d-flex justify-content-center'>
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={currentPage-1}
          />
        </div>
      </div>
    </>
  )
}
export default tableUserPaginate