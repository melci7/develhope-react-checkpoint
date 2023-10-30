import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Home() {
    const [id, setId] = useState('');
    const [address, setAdress] = useState([]);
    const [details, setDetails] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                const data = await response.json()
                console.log(data.address)
                setAdress(data.address)
                setDetails(data.details)
            }
            catch (error) {
                console.log("error", error);
            }
        }
      fetchData();
    }, [id])
  
    function handleChange(event) {
        setId(event.target.value)
    }

    return (
      <div> 
        <input type="text" name='id' value={id} onChange={handleChange}/>
        <Link to={`/address/${id}`}>
        <button>Address</button>
        </Link>
        <Link to={`/details/${id}`}>
        <button>Details</button>
        </Link>
      </div>
    )
  }
  
  export default Home