import React,{useState} from 'react';
import styles from './SearchAddr.module.css';

function SearchAddr(){

    const [address,setAddress] = useState("");
    const [forecast,setForecast] = useState("");

    function inputHandler(event){
        setAddress(event.target.value);
    }

    function formSubmitionHandler(event){
        event.preventDefault();
        fetchForecast(address);
        console.log(address)
        setAddress("");
    }

    async function fetchForecast(address){
        const data = await(await fetch(`https://weatherappbackend-qyz4.onrender.com/getForecast?address=${address}`)).json();
        console.log(data);
        setForecast(data.forecast);
    }

    return (
        <div className={styles.formCentralizer}>
            <form onSubmit={formSubmitionHandler}>
                {forecast === ""  && <input placeholder='Busque por uma cidade' className={styles.formInput} value={address} onChange={inputHandler}></input>}
                <div className={styles.forecast}>{forecast}</div>
            </form>
        </div>
        
    )
}

export default SearchAddr