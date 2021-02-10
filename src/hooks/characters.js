import { useState, useEffect } from 'react';
import { findCharacters, findCharacterById } from '../services/avatar';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    findCharacters().then((characters) => {
      setCharacters(characters);
      setLoading(false);
      console.log(characters);
    });
  }, []);

  return {
    loading,
    characters,
  };
};

export const useCharacterById = (id) => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    findCharacterById(id).then((character) => {
      setCharacter(character);
      setLoading(false);
    });
  }, [id]);

  return {
    loading,
    character,
  };
};
