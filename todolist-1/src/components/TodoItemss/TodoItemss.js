import React from 'react'
import './TodoItemss.css'

const TodoItemss=(props)=>{
    const {items,deleteItem}= props;
    let length = items.length;
    //const {deleteItem}=props; au lieu de faire plusieurs lignes on va le faire avec const {items}=props;
    const listItems=length ?(
     items.map(item=>{
        return(
         <div key={item.id}>
            <span className='name'>{item.name}</span>
            <span className='age'>{item.age}</span>
            <span className='action icon' onClick={()=>  deleteItem(item.id)}>&times;</span>
        


         </div>

        )
    })
    ):(
        <p className='para'> there is no item to show</p>
    )
    return(
     <div className='listItems'>
        <div >
           <span className='name title'>Name</span>
            <span className='age title'>Age</span>
          <span className='action title'>Action</span>
        </div>
            {listItems}
     </div> 

    )
}
export default TodoItemss