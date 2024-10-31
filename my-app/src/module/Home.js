import { Link } from 'react-router-dom';

function Home() {
  return (
    <div id='root' className="App">
      <h1>White River Valley Farms</h1>
      <nav>
        <Link to='/'>Home</Link>  
        <Link to='/product'>Our Product</Link>
        <Link to='/join'>Join Us</Link>
        <Link to='/CSA'>What is a CSA</Link>
      </nav>
      <p>hello we are in home page</p>
    </div>
  );
}

export default Home;