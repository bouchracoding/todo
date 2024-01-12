import React,{Component} from 'react'
import TodoItemss from './components/TodoItemss/TodoItemss';
import AddItems from './components/AddItems/AddItems';



class App extends Component{
  state={
    items:[
      {id:1,name:'Aya',age:16},
      {id:1,name:'Sara',age:17},
      {id:1,name:'Fati',age:25}
    ]
  }
    deleteItem=(id)=>{
      let items=this.state.items.filter(item=>{
        return item.id !==id
      })
      // this.setState({items:items}) si key = value  on va écrire seulement ({items})au lieu de ({items:items})
      
        this.setState({items})
  }
    addItem=(item)=>{
      item.id=Math.random();
      let items = this.state.items;
      items.push(item);
      this.setState({items})

    }


render(){
  return(
    <div className='App contaier'>
       <h1 className='text-center'>Todo List</h1>
     < TodoItemss items={this.state.items} deleteItem={this.deleteItem}/>
     < AddItems addItem={this.addItem}/>
    </div>
  );
}
}

export default App;
