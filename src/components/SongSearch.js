import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { Loader } from "./Loader";
import { SongDetails } from "./SongDetails";
import { SongForm } from "./SongForm";

export const SongSearch = () => {
  //busqueda
  const [search, setSearch] = useState(null);
  //biografia artista
  const [bio, setBio] = useState(null);
  //cancion
  const [lyric, setLyric] = useState(null);  
  //loader
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(search === null) return

    const fetchData = async ()=>{
      const {artist, song} = search
    
      const artistUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`
      const songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`

      setLoading(true)
      
      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl)
      ])
      console.log(artistRes);
      console.log(songRes);
      setBio(artistRes)
      setLyric(songRes)
      
      setLoading(false)
    }
    fetchData()

  }, [search])

  const handleSearch = (data) => {
    setSearch(data)
  };

  return (
    <div>
      <h2>Song Search</h2>
      {loading && <Loader />}
      <SongForm handleSearch={handleSearch} />
      {search && !loading && (
        <SongDetails search={search} lyric={lyric} bio={bio} />
      )}
    </div>
  );
};
