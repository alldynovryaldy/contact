import "./App.css";

const FuncNama = (props) => {
   console.log(props);
   return (
      <div>
         <p>Hello</p>
         <p>Ini dari function nama</p>
      </div>
   );
};

const App = () => {
   const nama = "Alldy Novryaldy";
   return (
      <div className="App">
         <h1>{nama}</h1>
         <FuncNama />
      </div>
   );
};

export default App;
