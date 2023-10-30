import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
function Details({props}) {
    const [details, setDetails] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${props.id}`)
                const data = await response.json();
                setDetails(data.address)
            }
            catch (error) {
                console.log("error", error);
            }
        }
      fetchData();
    }, [props.id])

    return (
        <div>
            <p>{details}</p>
        </div>
    )
}

export default Details;