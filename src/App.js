import logo from './logo.svg';
import hwlogo from './images/hwlogo.png'
import grandprixcars from './images/grandprixcars.png'
import manycars from './images/manycars.png'
import './App.css';

function App() {
  return (
    <header className="App-header">
      <>
  <div className="container-sm">
    <img src= {hwlogo} alt="hwlogo" width="10%" height={100} />
  </div>
  <nav className="navbar navbar-expand-sm col-12 bg-dark navbar-dark">
    <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" href="">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/collaborations">
          Collaborations
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Collectors
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <div className="container mt-5">
    <div className="row">
      <div className="col-sm-4">
        <div className="image-with-text">
          <img
            src={hwlogo}
            alt="hotwheels logo"
            width="250px"
            height="100%"
          />
        </div>
        <p style={{ color: "black" }}>
          <i>The hotwheels logo made 1968.</i>
        </p>
        <hr className="d-sm-none" />
      </div>
      <div className="col-sm-6">
        <h2 style={{ color: "black" }}>Hotwheel series</h2>
        <div className="img-with-text">
          <img
            src={grandprixcars}
            alt="grandprixcars"
            width="100%"
            height={400}
          />
        </div>
        <p style={{ color: "black" }}>
          <i>Hotwheel sets started in 1968.</i>
        </p>
        <p style={{ color: "black" }}>
          Some Hotwheel series overtime were Grand Prix, Hot Birds, Hot Line,
          and Ultra Hots. The Grand Prix contained 8 cars and came out 1969.
          Both Ferrari 312p and Porsche 917 cars were added in 1970 to the
          series. The Ford J-Car was added over from 1968 to this series. Grand
          Prix cars were The Ford Mark IV(1969), Ferrari 312P(1970), Lotus
          Turbine(1969),Brabham RepcoF1(1969),Chapparal 2G(1969), Indy
          Eagle(1969),Ford J-Car(1968),Lola GT70(1969),Lotus Turbine(1969),
          McLaren M6A(1969),Porsche 917(1970), and Shelby Turbine(1969)
        </p>
      </div>
    </div>
  </div>
</>
        <div className="mt-5 p-4 col-sm-12 bg-dark text-white text-center">
         <p className='small' style={{ color: "white" }}>
         <i>HotWheelsInfo website is only to inform 
          <br/>people about Hotwheels cars and is not used 
          <br/>for selling any products related to Hotwheels. 
          <br/>This website is made only to inform people.</i>
        </p>
         
        </div>
        <p className='small' style={{ color: "black" }}>©️ 2024
          HotWheelsInfo </p>
        
         
      </header>






   
        );
}
  


export default App;
