const URL = 'https://last-airbender-api.herokuapp.com';

export const findCharacters = () => {
  return fetch(`${URL}/api/v1/characters?perPage=10`)
    .then((res) => res.json())
    .then((result) =>
      result.map((result) => ({
        id: result._id,
        name: result.name,
        image: result.photoUrl,
      }))
    );
};
export const findCharacterById = (id) => {
  return fetch(`${URL}/api/v1/characters/${id}`)
    .then((res) => res.json())
    .then((json) => ({
      id: json.id,
      name: json.name,
      image: json.photoUrl,
    }));
};
