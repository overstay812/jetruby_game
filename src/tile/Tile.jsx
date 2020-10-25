import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getFinishedFirstTile, getFinishedSecondTile, getFirstTileColor, getFirstTileIndex, getIsActiveFirstTile, getIsActiveSecondTile, getSecondTileColor, getSecondTileIndex, startRoundCounter } from '../Redux/actions'
import './Tile.css'
import PropTypes from 'prop-types'

const Tile = ({
    index,
    color,
    getFirstTileColor,
    getSecondTileColor,
    firstTileColor,
    secondTileColor,
    getIsActiveFirstTile,
    getIsActiveSecondTile,
    isActive,
    getFirstTileIndex,
    getSecondTileIndex,
    getFinishedFirstTile,
    getFinishedSecondTile,
    startRoundCounter,
    finished
}) => {

    const getCurrentColor = () => {
        if (firstTileColor === "") {
            getFirstTileIndex(index)
            getFirstTileColor(color)
            getIsActiveFirstTile(true)
        } else {
            getSecondTileIndex(index)
            getSecondTileColor(color)
            getIsActiveSecondTile(true)
            startRoundCounter()
        }
    }

    useEffect(() => {
        if (firstTileColor === secondTileColor) {
            setTimeout(() => {
                getFinishedFirstTile()
                getFinishedSecondTile()
                getFirstTileColor("")
                getSecondTileColor("")
                getFirstTileIndex(null)
                getSecondTileIndex(null)
            }, 100)
        }
        else {
            setTimeout(() => {
                getIsActiveFirstTile(false)
                getIsActiveSecondTile(false)
                getFirstTileColor("")
                getSecondTileColor("")
                getFirstTileIndex(null)
                getSecondTileIndex(null)
            }, 100)

        }
    }, [secondTileColor])

    return (
        <div className={finished ? 'hidden tile' : isActive ? `tile active ${color}` : 'tile'} onClick={() => {
            if (isActive === true) {
                return null
            } else if (secondTileColor !== "") {
                return null
            } else {
                getCurrentColor()
            }
        }}>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        firstTileColor: state.mainReducer.firstTileColor,
        secondTileColor: state.mainReducer.secondTileColor,
    }
}

const mapDispatchToProps = {
    getFirstTileColor,
    getSecondTileColor,
    getIsActiveFirstTile,
    getIsActiveSecondTile,
    getFirstTileIndex,
    getSecondTileIndex,
    getFinishedFirstTile,
    getFinishedSecondTile,
    startRoundCounter
}

Tile.propTypes = {
    isActive: PropTypes.bool,
    finished: PropTypes.bool,
    color: PropTypes.string,
    firstTileColor: PropTypes.string,
    secondTileColor: PropTypes.string,
}

export default connect(mapStateToProps, mapDispatchToProps)(Tile)