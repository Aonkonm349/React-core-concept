// import logo from './logo.svg';
import './App.css';

function App() {
  const OStudent = ['Nur','Akash','Rabbi']
  const products = [{name: 'Photoshop',price: '$99.23'}]
  return (
   
    <div className="App">
      <header className="App-header">
        <h1>hello man</h1>
        <Product product={products[0]}></Product>
        <Person name="munna" job="janina"></Person>
        <Person name="zakir" job="hobeAkta"></Person>
        
      </header>
    </div>
  );
}

function Product(props){
  const productStyle={

    boder:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'250px',
    width: '200px',
    float: 'left',
    color: 'black'
  }
  const {name,price} = props.product;
  return(
    <div style={productStyle}>
      <h4>{name}</h4>
      <h5>{price}</h5>
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
