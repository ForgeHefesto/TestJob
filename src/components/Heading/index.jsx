import P from 'prop-types'
import * as Styled from './styles'

export const Heading = ({children}) =>{
  return (
    <Styled.Navbar>
      <div>
        <Styled.Title>{children}</Styled.Title>
      </div>
      <Styled.NavBody>
        <Styled.Text>Lista de Usuarios</Styled.Text>
      </Styled.NavBody>
    </Styled.Navbar>

  )
}

Heading.propTypes ={
  children: P.node.isRequired
}
