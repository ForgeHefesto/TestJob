import Head from 'next/head'
import styled from 'styled-components'
import { Heading } from '../components/Heading'
import Dashboard from '../../templates/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <div>
      <Heading>JobTest</Heading>
      <Dashboard />
    </div>
  )
}
