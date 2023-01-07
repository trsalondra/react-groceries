import './App.css';
import { useState } from 'react';
import GroceryItem from './components/Item';
import groceries from './groceries'

function App() {
  
// setting up and using state, state's initial value is the array of groceries
  const [grList, setGrList] = useState(groceries)
 
  const addItem = e => {
    e.preventDefault()
    setGrList(grList.concat([
      {
      item: document.querySelector('input[name="item"]').value,
      brand: document.querySelector('input[name="brand"]').value,
      units: document.querySelector('input[name="units"]').value,
      quantity: document.querySelector('input[name="quantity"]').value,
      isPurchased:false
      
    }
  ])
  )
  console.log(grList)}

  return (
    
    <div className="App">
      <h1> My Grocery List</h1>
    {grList.map((ele, idx) => {
  
  return( !ele.isPurchased && <GroceryItem ele={ele} key={idx}/>  )

})}

    <form onSubmit={addItem}>
            <h3>Add an item to your list</h3>
            <p>Item:</p> <input type='text' name="item"></input> <br/>
            <p>Brand:</p> <input type='text' name="brand"></input><br/>
            <p>Units:</p> <input type='text' name="units"></input>
            <br/>
            <p>Quantity:</p> <input type='number' name="quantity"></input><br/>
            <input type='submit' value='submit'></input>
        </form>

      </div>
  );
}

export default App