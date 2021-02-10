import React, { useState } from 'react';
import CharacterList from '../components/Characters/CharactersList';
import Loading from '../components/Loading/Loading';
import { useCharacters } from '../hooks/characters.js';

export default function CharactersPages() {
  const { loading, characters } = useCharacters();

  if (loading) return <Loading />;

  return <CharacterList characters={characters} />;
}
