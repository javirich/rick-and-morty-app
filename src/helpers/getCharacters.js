
export const getAllCharacters = async (page) => {

    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    const resp = await fetch(url);
    const { info, results } = await resp.json();

    const characters = results.map(character => {

        return {
            id: character.id,
            name: character.name,
            image: character.image,
            status: character.status,
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


export const getCharacterById = async ( id = '' ) => {

    const url = `https://rickandmortyapi.com/api/character/${id}`;
    const resp = await fetch(url);
    const character = await resp.json();

    return character;

}