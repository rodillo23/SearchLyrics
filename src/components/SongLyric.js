import React from 'react'

export const SongLyric = ({title, lyric}) => {
  const {lyrics} = lyric
  console.log(lyrics);
  return (
    <div>
      <h3>{title}</h3>
      <blockquote style={{whiteSpace:"pre-wrap"}}>{lyrics}</blockquote>
    </div>
  )
}
