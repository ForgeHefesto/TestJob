import Dashboard from '../templates/Dashboard'
import useSWR from 'swr'
import { Heading } from '../components/Heading'
import { Button, Spinner } from 'react-bootstrap';


const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Index() {
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

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
      <Dashboard children={data} type={true} url="posts"></Dashboard>
    </div>
  )
}
