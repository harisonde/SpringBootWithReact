import React from 'react';
import {Table} from 'semantic-ui-react';

export default (props) =>{
  return(
       <Table.Row>
           <Table.Cell>
             {props.studentData.firstName}
           </Table.Cell>

           <Table.Cell>
             {props.studentData.lastName}
           </Table.Cell>

           <Table.Cell>
             {props.studentData.id}
           </Table.Cell>
       </Table.Row>
  );

}
