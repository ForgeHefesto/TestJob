import useSWR from "swr"
import { useRouter } from 'next/router'
import Dashboard from "../../templates/Dashboard"
import Head from 'next/head';
import { Heading } from '../../components/Heading';
import { Button, Spinner } from 'react-bootstrap';


const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}



export default function Posts() {
  const { query } = useRouter()
  console.log(query.id)
  const { data, error } = useSWR(`https://jsonplaceholder.typicode.com/posts/${query.id}/comments`,
    fetcher
  )

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
      <Dashboard children={data} type={false}></Dashboard>
    </div>
    )
}


