// props = variable yang menampung data pasting dari parent component yaitu List.jsx
function ContactList(props) {
   return (
      <ul className="list-group list-group-flush">
         {/* menampilkan data contact */}
         {props.contacts.map((value) => (
            //key sebagai kode unik untuk setiap element nya
            <li
               className="list-group-item d-flex justify-content-between align-items-start"
               key={value.id}
            >
               {value.name} - {value.number}
               <button
                  className="badge btn bg-danger rounded-pill"
                  onClick={() => props.handleDelete(value.id)}
               >
                  Delete
               </button>
            </li>
         ))}
      </ul>
   );
}

export default ContactList;
