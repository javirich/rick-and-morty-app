
export const getAllCharacters = async ({ page, name }) => {

    const query = (name === '')
        ? `?page=${page}`
        : `?page=${page}&name=${name}`;

    const url = `https://rickandmortyapi.com/api/character/${query}`;

    const resp = await fetch(url);
    if (resp.status == '200') {

        const { info, results } = await resp.json();
        const characters = results.map(character => {

            return {
                id: character.id,
                name: character.name,
                image: character.image,
                status: character.status,
                species: character.species,
                gender: character.gender,
            }
        })

        return {
            pagination: {
                pages: info.pages,
                next: (info.next != null),
                prev: (info.prev != null),
            },
            characters: characters
        };
    }

    return {
        pagination: null,
        characters: []
    };

}


export const getCharacterById = async ({ id }) => {

    const url = `https://rickandmortyapi.com/api/character/${id}`;
    const resp = await fetch(url);
    const character = await resp.json();

    if (character.error) {
        return null;
    }

    return character;

}