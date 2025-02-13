import React from 'react'
import ItemList from './ItemList'
import { artistArray } from '../assets/database/artists'
import { songsArray } from '../assets/database/songs'

const Main = ({ type }) => {
  return (
    <div className='main'>
        { /* Artists ItemList */}
        {type === "artists" || type === undefined ? (
          <ItemList
            title="Artists"
            items={5}
            itemsArray={artistArray}
            path="/artists"
            idPath="/artist"
          />
        ) : (
          <></>
        )}

        { /* Songs ItemList */}
        {type === "songs" || type === undefined ? (
          <ItemList
            title="Songs"
            items={10}
            itemsArray={songsArray}
            path="/songs"
            idPath="/song"
          />
        ) : (
          <></>
        )}
    </div>
  )
}

export default Main