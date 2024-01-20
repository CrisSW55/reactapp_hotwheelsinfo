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
    <img src= {hwlogo} alt="hwlogo" width="10%" height={80} />
  </div>
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">
            Disabled
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
            width="100%"
            height="100%"
          />
        </div>
        <p>
          <i>The hotwheels logo made 1968.</i>
        </p>
        <h3 className="mt-4">Some Links</h3>
        <p>Lorem ipsum dolor sit ame.</p>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
        <hr className="d-sm-none" />
      </div>
      <div className="col-sm-8">
        <h2>Hotwheel series</h2>
        <div className="img-with-text">
          <img
            src={grandprixcars}
            alt="grandprixcars"
            width="100%"
            height={400}
          />
        </div>
        <p>
          <i>Hotwheel sets started in 1968.</i>
        </p>
        <p>
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
        <div className="mt-5 p-4 bg-dark text-white text-center">
          <p className='small'>©️ 2024
          HotWheelsInfo</p>
        </div>
        
        
      </header>






   
        );
}
  


export default App;
