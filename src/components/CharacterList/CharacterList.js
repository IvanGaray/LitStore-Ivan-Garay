import React, { useState, useEffect } from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import axios from 'axios';
import './CharacterList.css';
//LINK ROUTER DOM
import { Link } from 'react-router-dom';

const CharacterList = () => {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		axios('https://breakingbadapi.com/api/characters').then((json) =>
			setCharacters(json.data)
		);
	}, []);

	return (
		<div className='CharacterList-container'>
			{characters.map((char) => {
				return (
					<div key={char.char_id}>
						<Link to={`/detail/${char.char_id}`}>
							<CharacterCard data={char} />
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default CharacterList;