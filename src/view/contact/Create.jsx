import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "../../axios";

function Create() {
   const [name, setName] = useState();
   const [nomor, setNomor] = useState();
   const [loading, setLoading] = useState(false);

   const navigate = useNavigate();

   const handleSubmit = (e) => {
      // loading true saat proses insert data
      setLoading(true);

      e.preventDefault();
      const contact = {
         name,
         nomor,
      };

      axios
         .post("/contact", contact)
         .then(() => {
            navigate("/");
         })
         .catch((error) => {
            console.log(error);
         });
   };

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <div className="mb-3">
               <label htmlFor="name" className="form-label">
                  Nama
               </label>
               <input
                  type="text"
                  className="form-control"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
               />
            </div>
            <div className="mb-3">
               <label htmlFor="nomor" className="form-label">
                  No Handphone
               </label>
               <input
                  type="text"
                  className="form-control"
                  id="nomor"
                  onChange={(e) => setNomor(e.target.value)}
               />
            </div>

            <button type="button" className="btn btn-sm btn-danger me-1">
               Batal
            </button>
            <button type="submit" className="btn btn-sm btn-success me-1">
               {loading ? "Proses...." : "Submit"}
            </button>
         </form>
      </div>
   );
}

export default Create;
