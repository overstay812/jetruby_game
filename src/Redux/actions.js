export const getFirstTileColor = color => {
  return {
    type: "GET_FIRS_TILE_COLOR",
    payload: {
      color
    }
  }
}

export const getSecondTileColor = color => {
  return {
    type: "GET_SECOND_TILE_COLOR",
    payload: {
      color
    }
  }
}

export const getFirstTileIndex = index => {
  return {
    type: "GET_FIRS_TILE_INDEX",
    payload: {
      index
    }
  }
}

export const getSecondTileIndex = index => {
  return {
    type: "GET_SECOND_TILE_INDEX",
    payload: {
      index
    }
  }
}

export const getIsActiveFirstTile = boolean => {
  return {
    type: "GET_IS_ACTIVE_FIRST_TILE",
    payload: {
      boolean
    }
  }
}

export const getIsActiveSecondTile = boolean => {
  return {
    type: "GET_IS_ACTIVE_SECOND_TILE",
    payload: {
      boolean
    }
  }
}

export const getFinishedFirstTile = index => {
  return {
    type: "GET_FINISHED_FIRST_TILE",
    payload: {
      index
    }
  }
}

export const getFinishedSecondTile = index => {
  return {
    type: "GET_FINISHED_SECOND_TILE",
    payload: {
      index
    }
  }
}
export const startRoundCounter = index => {
  return {
    type: "START_ROUND_COUNTER",
  }
}

