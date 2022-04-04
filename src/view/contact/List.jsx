import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../axios";

const List = () => {
   // state contact
   const [contacts, setContacts] = useState([]);

   // state error
   const [error, setError] = useState("");

   // state loading di set true
   const [loading, setLoading] = useState(true);

   // get contact
   const getContact = () => {
      axios
         .get("/contact")
         .then((res) => {
            // masukkan value yg di dapatkan dari API kedalam state contact
            setContacts(res.data);
         })
         .catch((e) => {
            // masukkan value error kedalam state error
            setError(e.message);
         })
         // jika axios sudh selesai di jalankan
         .finally(() => {
            // loading false saat data belum di temukan
            setLoading(false);
         });
   };

   // handler delete
   const handleDelete = (id) => {
      axios
         .delete(`/contact/${id}`)
         .then(() => {
            // refresh data contact
            getContact();
         })
         .catch((e) => {
            // masukkan value error kedalam state error
            setError(e.response.statusText);
         });
   };

   // function akan di jalankan ketika halaman di render
   useEffect(() => {
      getContact();
   }, []);

   // parsing state contact & event handler ke Child component yaitu contactlist.jsx
   return (
      <div>
         {error ?? { error }}
         {loading ? "Loading..." : ""}

         <ul className="list-group list-group-flush">
            {/* menampilkan data contact */}
            {contacts.map((value) => (
               //key sebagai kode unik untuk setiap element nya
               <li className="list-group-item align-items-start" key={value.id}>
                  {value.name} - {value.nomor}
                  <div className="d-flex justify-content-end">
                     <Link
                        to={`/edit/${value.id}`}
                        className="badge btn bg-primary rounded-pill me-1"
                     >
                        Edit
                     </Link>
                     <button
                        className="badge btn bg-danger rounded-pill"
                        onClick={() => handleDelete(value.id)}
                     >
                        Delete
                     </button>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default List;
