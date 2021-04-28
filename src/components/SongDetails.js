import React from 'react'
import { Message } from './Message'
import { SongArtist } from './SongArtist'
import { SongLyric } from './SongLyric'

export const SongDetails = ({search, bio, lyric}) => {
  if(!bio || !lyric) return null
  
  return (
    <>
      {
        bio.artists 
          ? 
            <SongArtist/> 
          : 
            <Message/>
      }
      {
        lyric.err || lyric.name === 'AbortError' 
          ? 
            <Message msg={`Error: no existe la cancion: ${search.song} en la BD`}/> 
          : 
            <SongLyric/>
      }
      
    </>
  )
}
