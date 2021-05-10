import useSWR from 'swr';
import { useRouter } from 'next/router';
import { Button, Spinner } from 'react-bootstrap';
import Head from 'next/head';
import { Heading } from '../../components/Heading';
import FormUser from '../../components/FormUser';

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Posts() {
  const { query } = useRouter();
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/users/${query.id}`,
    fetcher,
  );

  if (!data)
    return (
      <div>
        <Heading>JobTest</Heading>
        <div className="container">
          <Button variant="dark" disabled >
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
      <Head>
        <title>JobTest-User-form</title>
      </Head>
      <Heading>JobTest</Heading>
      <FormUser children={data}/>
    </div>
  );
}
