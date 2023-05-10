import React from "react";
import { Link } from "react-router-dom";

function Menu(){
    return(
        <>

          <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top bg-dark">
            <a class="navbar-brand" href="#"><h3 className=" font-weight-bold text-light">My React</h3></a>
            <button class="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon "></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link to="/" className=" nav-link active  text-light">HelloWorld</Link>/
                 <Link to="/congrats" className=" nav-link active  text-light">Congrats card</Link>
                 <Link to="/cricket" className=" nav-link active   text-light">Super League</Link>
                 <Link to="/social" className=" nav-link active  text-light">Social Button</Link>
                 <Link to="/notification" className=" nav-link active  text-light">Notification</Link>
                 <Link to="/login" className=" nav-link active  text-light">LOGIN</Link>
                 <Link to="/technology" className=" nav-link active  text-light">Technologies</Link>
                 <Link to="/hooks" className=" nav-link active  text-light">Hooks</Link>
                 <Link to="/fruitcounter" className=" nav-link active  text-light">Fruit Counter</Link>
                 <Link to="/feedbackapp" className=" nav-link active  text-light">FeedBack App</Link>
                 <Link to="/json" className=" nav-link active  text-light">Local json</Link>
                 <Link to="/fakeapi" className=" nav-link active  text-light">Fakeapi</Link>
                 <Link to="/database" className=" nav-link active  text-light">Database json</Link>

                 <Link to="/protfolio" className=" nav-link active  text-light">Protfolio</Link>

                 
                 
                
                    
                 

              </div>
            </div>
          </nav>
        </>
    )
}
export default Menu;