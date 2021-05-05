import {Table} from '.'
import mock from './mock'


export default {
  title: 'Table',
  component: Table,
  args: mock,
}
export const Template = (args) => {
  const date = args.children.map((resp) =>{
    return Object.keys(resp).map((key) =>{
      return resp[key]
    })
  })
  return (
    <div>
      <Table id={args.id} title={args.title} description={args.description} children={date}/>
    </div>
  )
}
