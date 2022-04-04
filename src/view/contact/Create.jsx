import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "../../axios";

function Create() {
   const [name, setName] = useState("");
   const [nomor, setNomor] = useState("");
   const [loading, setLoading] = useState(false);

   // redirect halaman
   const navigate = useNavigate();

   // get param from url
   const { param } = useParams();

   const handleSubmit = (e) => {
      // loading true saat proses insert data
      setLoading(true);

      e.preventDefault();
      const contact = {
         name,
         nomor,
      };

      // kondisi untuk insert dan update
      if (param) {
         updateContact(contact);
      } else {
         insertContact(contact);
      }
   };

   const insertContact = (contact) => {
      axios
         .post("/contact", contact)
         .then(() => {
            navigate("/");
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const updateContact = (contact) => {
      axios
         .put(`/contact/${param}`, contact)
         .then(() => {
            navigate("/");
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const editContact = () => {
      axios
         .get(`/contact/${param}`)
         .then((res) => {
            setName(res.data.name);
            setNomor(res.data.nomor);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   useEffect(() => {
      if (param) {
         editContact();
      }
   }, [param]);

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
                  value={name} // menampilkan value ketika edit
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
                  value={nomor}
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
