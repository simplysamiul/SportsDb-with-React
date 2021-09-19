import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Blogs></Blogs>
    </div>
  );
}


function Blogs () {
  const [blogs, setBlogs] = useState([]);
  useEffect( () =>{
    fetch(`https://www.thesportsdb.com/api/v1/json/1/all_sports.php`)
    .then(res => res.json())
    .then(data =>setBlogs(data.sports))
  },[])
  return (
    <div>
      <h1 style = {{textAlign: 'center', backgroundColor: 'purple', padding: '20px'}}> Sports Is the Best Excersice To Your Body</h1>
      <div className="blogStyle">
      {
        blogs.map(blog=> <Blog blog ={blog} key = {blog.idSport}></Blog>)
      }
      </div>
    </div>
  );
}


function Blog (props) {
  const [count, setCount] = useState(0);
  const buttonIncrease = () =>{
    setCount(count + 1) ;
  };
  const buttonDecrease = () =>{
    if(count > 0){
      setCount(count - 1);
    }
  };
  const {strSportThumb, strSport, strFormat, strSportDescription} = props.blog;
  const description = strSportDescription.slice(0, 300);
  return (
      <div style = {{border: "2px solid lightgrey", backgroundColor: "lightgrey"}}>
      <img style ={{width : "100%"}} src={strSportThumb} alt="" />
     <div className="blog-info" style = {{padding: "10px"}}>
     <h2>Sports : {strSport}</h2>
      <h4>Sports Formate : {strFormat}</h4>
      <p style = {{textAlign : "justify"}}>{description}</p>
      <div className="button-area">
        <button onClick = {buttonIncrease}> Increase + </button>
      <h5>Number : {count}</h5>
      <button onClick = {buttonDecrease}>Decrease - </button>
      </div>
     </div>
      </div>
  );
}
export default App;
