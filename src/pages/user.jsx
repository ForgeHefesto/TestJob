import Dashboard from '../templates/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import useSWR from 'swr'
import Head from 'next/head';
import { Heading } from '../components/Heading'
import { Button, Spinner } from 'react-bootstrap';

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Users() {
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher)

  if (error) return <div>Failed to load</div>

  if (!data)
  return (
    <div>
      <Heading>JobTest</Heading>
      <div className="container">
        <Button variant="dark" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      <Heading>JobTest</Heading>
      <Dashboard children={data} type={true} url="users"></Dashboard>
    </div>
  )
}
