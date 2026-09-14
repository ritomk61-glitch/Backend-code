import { useState } from "react";
import axios from "axios";

function App() {
  const [datas, setdatas] = useState([]);
  const [another, setanother] = useState("")


  const calling = async () => {
    const response = await axios.get(
      "https://dummyjson.com/products"
    );

    // console.log(response.data);
    setdatas(response.data.products);
  };

function details(){
  setanother(!another)
  // sethide(...!another)
 
}
   

  return (
    <div className="p-5">

      <button
        className="bg-white border text-black text-2xl px-5 py-2"
        onClick={calling}
      >
        Get Products
      </button>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

  {datas.map(function (elem, idx) {

    return (
      <div
        className="bg-white border border-gray-200 rounded-2xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-400"
        key={idx}
      >

        <div className="w-full h-56 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
          <img
            src={elem.images[0]}
            alt={elem.title}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="mt-5">

          <p className="text-sm text-gray-500">
            Product ID: {elem.id}
          </p>

          <h2 className="text-xl font-bold text-gray-800 mt-1">
            {elem.title}
          </h2>

          <p className="text-gray-500 mt-2 line-clamp-2">
            {elem.description}
          </p>

          <div className="flex justify-between items-center mt-4">

            <h3 className="text-2xl font-bold text-green-600">
              ${elem.price}
            </h3>

            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
               {elem.rating}
            </span>

          </div>

          <div className="flex justify-between mt-4 text-sm">

            <span className="text-gray-600">
              Category: {elem.category}
            </span>

            <span className="text-gray-600">
              Stock: {elem.stock}
            </span>

          </div>

          <button className="w-full mt-5 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition" onClick={details} key={idx}>
            View Product
          </button>
{another && <h1 className="text-2xl text-red-400 flex items-center mt-3 ml-9">Sorry currently it's unavailable</h1>}

     

        </div>

      </div>
    );

  })}

</div>
  );
</div>
  )}



export default App;