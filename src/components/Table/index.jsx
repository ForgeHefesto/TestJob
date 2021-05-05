import P from 'prop-types'
import * as Styled from './styles'
import { useEffect, useState } from 'react';


export const Table = ({id,title,description,children}) => {

  return (
    <div className="container mt-4">
      <table className="table table-striped">
          <thead className="thead-dark">
              <tr>
                  <th>{id}</th>
                  <th>{title}</th>
                  <th>{description}</th>
                  <th></th>
              </tr>
          </thead>
          <tbody>
            {children.map((user,index) => (
              <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.title}</td>
                  <td>{user.body}</td>
                  <td><button className='btn btn-primary'>Infor</button></td>
              </tr>

            ))}
          </tbody>
      </table>
  </div>
  )
}

export default Table;

