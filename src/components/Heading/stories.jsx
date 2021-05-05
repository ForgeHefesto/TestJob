import {Heading} from '.'

export default {
  title: 'Heading',
  component: Heading,
  args:{
    children:'JobTest'
  },
  argTypes:{
    children: { type:'string'}
  }
}
export const Template = (args) => <Heading {...args}/>
