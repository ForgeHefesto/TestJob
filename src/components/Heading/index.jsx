import P from 'prop-types'
import Link from 'next/link';
import * as Styled from './styles'

export const Heading = ({children}) =>{

  return (
    <Styled.Navbar>
      <div>
        <Styled.Title>{children}</Styled.Title>
      </div>
      <Styled.NavBody>
        <Link href='/' passHref>
          <Styled.Text>Lista de Post</Styled.Text>
        </Link>
        <Link  href='/user' passHref >
          <Styled.Text>Lista de Usuarios</Styled.Text>
        </Link>
      </Styled.NavBody>
    </Styled.Navbar>

  )
}

Heading.propTypes ={
  children: P.node.isRequired
}
