import React from "react";

export const SongArtist = ({ artist }) => {
  const {
    strArtist,
    strArtistThumb,
    intBornYear,
    intDiedYear,
    strCountry,
    strGenre,
    strStyle,
    strWebsite,
    strBiographyES,
  } = artist;
  return (
    <div>
      <h3>{strArtist}</h3>
      <p>
        {intBornYear} - {intDiedYear || "Present"}
      </p>
      <img src={strArtistThumb} alt={strArtist} width="300" />
      <p>{strCountry}</p>
      <p>{`${strGenre} - ${strStyle}`}</p>
      <a href={`http://${strWebsite}`} target="_blank">Website</a>
      <p>{strBiographyES}</p>
    </div>
  );
};
