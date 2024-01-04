export interface ICharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export const characterInitValue: ICharacter  = {
    "id": 1,
    "name": "",
    "status": "",
    "species": "",
    "type": "",
    "gender": "",
    "origin": {
      "name": "",
      "url": ""
    },
    "location": {
      "name": "",
      "url": ""
    },
    "image": "",
    "episode": [],
    "url": "",
    "created": ""
}