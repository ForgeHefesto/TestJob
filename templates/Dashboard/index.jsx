import Styled from '.';
import { useEffect, useState } from 'react';
import Table from '../../src/components/Table';

function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    init()
    },[]
  );

  const init = async () =>{
    const raw = await fetch('https://jsonplaceholder.typicode.com/posts')
    const response = await raw.json();
    setUsers(response)
  }

  return (
    <div>
      <Table id="id" description="descriçao" title="title" children={users}></Table>
    </div>
  )
}

export default Dashboard;
