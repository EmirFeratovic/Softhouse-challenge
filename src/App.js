import React, {useState, useEffect} from "react";
import GridLoader from "react-spinners/GridLoader";
import {ReactComponent as Logo} from './logo.svg';
import './logo.svg';
import './App.css';

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 4000)
    }, [])
    return (
        <div className="App">
            {
                loading ? (<GridLoader color={'#2e9cca'} loading={loading} size={12}/>)
                    : (
                        <header className="App-header">
                            <h1>
                                <Logo></Logo>
                                LOADERS
                            </h1>
                        </header>
                    )
            }
        </div>
    )
        ;
}

export default App;
