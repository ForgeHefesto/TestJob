import P from 'prop-types'
import * as Styled from './styles'
import { useEffect, useState } from 'react';
import Link from 'next/link';


export const Table = ({id,url,title,description,children,type}) => {

  return (
    <div className="container mt-4">
      <table className="table table-striped">
          <thead className="thead-dark">
              <tr>
                  <th>{id}</th>
                  <th>{children[0].title != undefined ? title : "Name"}</th>
                  <th>{children[0].body != undefined ? description : 'Email'}</th>
                  {!type ? <th></th> : <span></span>}
              </tr>
          </thead>
          <tbody>
            {children.map((user,index) => (
              <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.title || user.name}</td>
                  <td>{user.body || user.email}</td>
                  { !type ?
                    <Link href={`/${url}/[id]`} as={`/${url}/${user.id}`} passHref>
                      <td><button className='btn btn-primary'>Infor</button></td>
                    </Link> : <span></span>
                  }
              </tr>
            ))
          }
          </tbody>
      </table>
  </div>
  )
}

export default Table;

