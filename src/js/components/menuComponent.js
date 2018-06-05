import React from 'react';
import { Menu } from 'semantic-ui-react';
export default () =>{
  return(
    <Menu style={{marginTop:'10px'}}>
     <a className='item'><span>Home</span></a>
      <Menu.Item name='Add Student'/>
      <Menu.Item name='Search Student'/>
    </Menu>
  );
}
