import _57T_Bird_hw_78 from './images/_57T_Bird_hw_78.png'
import mcd_hw from './images/mcd_hw.png'
import CamaroZ_28_white from './images/CamaroZ_28_white.png'

export default function collaborations(){
    return(
    <>
  
    <div className="col-sm-12 text-center">
      <h1 className='myheaderfont col-sm-6 mx-auto'>HotWheels Collaborations</h1>
      <p style={{ color: "white" }} className='col-sm-6 mx-auto'>
      Overtime, hotwheels has had many collaborations

      with different known companies and forms of pop culture.
  
      Some of which involved food, videogames, and television.
 
     McDonald's, DC Universe, and Nintendo are some of the many
   
     HotWheels' collaborations. These collaborations gave HotWheels
  
      improved revenue,new forms of innovation, and further expanding market
      reach.
      </p>
    </div>
   
   

   <div className="col-sm-12 text-center" >
  <h3 className='myheaderfont col-sm-6 mx-auto'>Collaborating with McDonalds</h3>
  <img 
      src={mcd_hw}
      alt="McDonalds and HotWheels"
      width="50%" height="{200}"
    />
   

  <p style={{ color: "white" }} className='col-sm-6 mx-auto'>
    
    A type of food collaboration was the McDonald collaboration.

    Both McDonald's and HotWheels were family oriented products, which mainly
   
    focused on kids. McDonald's Happy Meal started in 1979, and used the same
   
    approach with Hotwheels to sell its happy meals. In 1991, both companies
   
    merged products to better sell to both families and kids.
    
    The year 1991, the first ever Happy Meals were sold with Hotwheel toys
    inside.
   
    The Hotwheels Blue Card Series were the cars mostly found in the Happy
    Meals.
    
    Some of these included the Camaro Z-28 white and the 57 T-Bird(1978).
    
    </p>
    <div className="d-flex flex-row">
      <div className="col-sm-6 text_center">
      <img 
        src={CamaroZ_28_white}
        alt="Camaro Z-28 white" width="50%" height="200"
        />
        <p style={{ color: "white" }}>The Camaro Z-28 were of the model from 1978 to 1981.</p>
      </div>
      <div className="col-sm-6 text_center">
        <img 
          src={_57T_Bird_hw_78}
          alt="57 T-Bird(1978)" width="50%" height="200"
        />
        <p style={{ color: "white" }}>The '57 T-Bird came out 1978 and first placed in the Flying Colors series.</p>
        
      </div>

    </div>

    </div>
  
    <div/>
    
   
    
  
   </>
   

    
  )}


 