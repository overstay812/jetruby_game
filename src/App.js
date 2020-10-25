import React, { useEffect, useState } from 'react';
import './App.css';
import Tile from './tile/Tile';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

function App({ tileArr, roundCounter }) {
    const [title, setTile] = useState(true)

    let arrayIsActive = []
    tileArr.map(item => arrayIsActive.push(item.isActive))
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

App.propTypes = {
    tileArr: PropTypes.arrayOf(PropTypes.object),
    roundCounter: PropTypes.number
}

export default connect(mapStateToProps)(App);