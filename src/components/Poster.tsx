import React from 'react'

interface PosterProps {
  posterUrl: string;
}

const Poster:React.FC<PosterProps> = ({ posterUrl }) => {
	return (
		<div className="relative overflow-hidden">
      <img src={posterUrl} alt="" className="w-auto object-cover" />
    </div>
	)
}

export default Poster
