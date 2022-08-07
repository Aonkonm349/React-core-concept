// import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
  const OStudent = ['Nur','Akash','robin','zakir']
  const products = [{name: 'Photoshop',price: '$99.23'},
                    {name: 'phots',price: '$99.23'}, 
                    {name: 'phots',price: '$99.23'}, 
]

  const productNames= products.map(product=>product.name)

  return (
   
    <div className="App">
      <header className="App-header">
        <h1>hello man</h1>

        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            OStudent.map(s => <li>{s}</li>)
          }
        </ul>
        <ul>
          {
            products.map(p=> <li>{p.name}</li>)
          }
         
        </ul>

        {
          products.map(pd => <Product product={pd}></Product>)
        }
        {/* <Product product={products[0]}></Product> */}
        <Person name="munna" job="janina"></Person>
        <Person name="zakir" job="hobeAkta"></Person>
        
      </header>
    </div>
  );
}




//next include
//hook

function Counter(){
  const [count, setCount] = useState(10);
  // const handleIncrease = () => {
  //   //const newCount = count + 1;
  //   //setCount(newCount);
  // }
  return(
    <div>
      <h2>count: {count }</h2>
      <button onClick={()=> setCount(count-1)}>Discrease</button>
      <button onClick={()=> setCount(count+1)}>Increase</button>
    </div>
  )
}
//After and finish

//last moudule

function Users(){
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

//finish last module




// at first or module first

function Product(props){
  const productStyle={

    boder:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'250px',
    width: '200px',
    float: 'left',
    color: 'black',
    margin: '10px'
  }
  const {name,price} = props.product;
  return(
    <div style={productStyle}>

      <h4>{name}</h4>
      {/* <h4>{props.product.name}</h4> */}
      <h5>{price}</h5>
      {/* <h5>{props.product.price}</h5> */}
      <button>Buy now</button>
    </div>
  )
}





function Person(props) {
  var Design={
    color:'white',
    border:'2px solid red',
    margin: '10px',
    padding: '10px'
  }
  return (
    <div style={Design}>
      <h5>My name: {props.name}</h5>
      <p>My Profession: {props.job}</p>
    </div>
  );
}


  export default App;
