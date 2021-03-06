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
            <SongArtist artist={bio.artists[0]}/> 
          : 
            <Message msg={`No se encontro el artista ${search.artist}`} bgColor='#dc3545'/>
      }
      {
        lyric.err || lyric.name === 'AbortError' 
          ? 
            <Message msg={`Error: no existe la cancion: ${search.song} en la BD`} bgColor='#dc3545'/> 
          : 
            <SongLyric lyric={lyric} title={search.song}/>
      }
      
    </>
  )
}
