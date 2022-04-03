import Router from "../../router";
import { Link } from "react-router-dom";

const Card = () => {
   return (
      <div className="container col-ms-6">
         <div className="card">
            <h5 className="card-header">
               {/* Link adalah link yang akan tampil di view aplikasi */}
               <Link to="/">List Contact</Link>
               <Link to="/create" className="btn btn-primary float-end">
                  Add
               </Link>
            </h5>
            <div className="card-body">
               {/* Router adalah tempat halaman yg akan di render */}
               <Router />
            </div>
         </div>
      </div>
   );
};

export default Card;
