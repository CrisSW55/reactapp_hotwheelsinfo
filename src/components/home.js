import t_hwlogo from '../images/t_hwlogo.png'
import t_grandprixcars from '../images/t_grandprixcars.png'
import Copyright from './copyright';
function Home() {
    return (
    <>
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-4">
          <div className="image-with-text">
            <img
              src={t_hwlogo}
              alt="t_hwlogo"
              width="250px"
              height="100%"
            />
          </div>
          <p style={{ color: "white" }}>
            <i>The Hot Wheels logo made 1968.</i>
          </p>
          <hr className="d-sm-none" />
        </div>
        <div className="col-sm-6">
          <h2 className = "header_font" >Hot Wheels series</h2>
          <div className="img-with-text">
            <img
              src={t_grandprixcars}
              alt="t_grandprixcars"
              width="100%"
              height={400}
            />
          </div>
          <p style={{ color: "white" }}>
            <i>Hot Wheels sets started in 1968.</i>
          </p>
          <p style={{ color: "white" }}>
            Some Hot Wheels series overtime were Grand Prix, Hot Birds, Hot Line,
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
  
          <div className="websummary mt-5 p-4 col-sm-12 text-white text-center">
           <p className='small' style={{ color: "white" }}>
           <i>Hot Wheels info website is only to inform 
            <br/>people about Hot Wheels cars and is not used 
            <br/>for selling any products related to Hot Wheels. 
            <br/>This website is made only to inform people.</i>
          </p>
           
          </div>
      <Copyright></Copyright>
  </>
  );
}
    
  
  
  export default Home;