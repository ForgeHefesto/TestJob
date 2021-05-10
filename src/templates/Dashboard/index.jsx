import Table from '../../components/Table';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dashboard({
  children = [],
  type,
  url,
}) {
  if (type) {
    return (
      <div>
        <Head>
          <title>JobTest</title>
        </Head>
        <Table
          id="ID"
          url={url}
          description="DESCRIÇÃO"
          title="TITULO"
          children={children}
          type={false}
        ></Table>
      </div>
    );
  } else {
    return (
      <div>
        <Head>
          <title>JobTest</title>
        </Head>
        <Table
          id="ID"
          url={url}
          description="DESCRIÇÃO"
          title="NOME"
          children={children}
          type={true}
        ></Table>
      </div>
    );
  }
}
