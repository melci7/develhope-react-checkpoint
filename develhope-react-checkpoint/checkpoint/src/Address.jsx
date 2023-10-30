import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
function Address({props}) {
    const [address, setAdress] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${props.id}`)
                const data = await response.json();
                setAdress(data.address)
            }
            catch (error) {
                console.log("error", error);
            }
        }
      fetchData();
    }, [props.id])

    return (
        <div>
            <p>{address}</p>
        </div>
    )
}

export default Address;