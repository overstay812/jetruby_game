import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Tile from './tile/Tile';
import { connect } from 'react-redux';

function App({ tileArr, roundCounter }) {
    const [title, setTile] = useState(true)

    let arrayIsActive = []
    tileArr.map(item => {
        arrayIsActive.push(item.isActive)
    })

    useEffect(() => {
        let result = arrayIsActive.reduce((acc, next) => acc + next)
        if (result === 16) {
            setTile(false)
        }
    }, [roundCounter])


    return (
        <div className="App"> {title ? <span> ROUND : {roundCounter} </span> : <span>CONGRATULATION!!! <br /> score {roundCounter} </span>}
            <div className="container" >
                {tileArr.map((item, index) => < Tile {...item} key={item.id} index={index} />)}
            </div>
            {title ? null : <button className="button" type="button" onClick={() => window.location.reload()} > TRY AGAIN </button>}
        </div>);
}

const mapStateToProps = state => {
    return {
        tileArr: state.mainReducer.tileArr,
        roundCounter: state.mainReducer.roundCounter
    }
}


export default connect(mapStateToProps)(App);