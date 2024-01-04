const root = "/rick-and-morty/"

export const paths = {
    main: root,
    characterDetail: root + "character/:id",
    characterDetailNavigate: (id: number) => root + "character/" + id,
    locations: root + "location",
    locationDetail: root + "location/:id",
    locationDetailNavigate: (id: number) => root + "location/" + id,
}