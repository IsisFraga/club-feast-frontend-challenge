export interface IMovieMenuItem {
  id: number,
  title: string,
  items: MenuItemOption[]
}

export type MenuItemOption = {
  label: string,
  number: number | null,
  subitems?: Subitem[]
}

export type Subitem = {
  label: string,
  number: number | null
}

export const movieMenuItems: IMovieMenuItem[] = [
  {
    id: 0,
    title: "Overview",
    items: [
      {
        label: "Main",
        number: null,
      },
      {
        label: "Alternative Titles",
        number: null,
      },
      {
        label: "Cast & Crew",
        number: null,
      },
      {
        label: "Release Dates",
        number: null,
      },
      {
        label: "Translations",
        number: null,
      },
      {
        label: "Changes",
        number: null,
      },
    ]

  },
  {
    id: 1,
    title: "Media",
    items: [
      {
        label: "Backdrops",
        number: 21,
      },
      {
        label: "Logos",
        number: 22,
      },
      {
        label: "Posters",
        number: 223,
      },
      {
        label: "Videos",
        number: null,
        subitems: [
          {
            label: "Featurettes",
            number: 13,
          },
          {
            label: "Trailers",
            number: 3,
          },
          {
            label: "Clips",
            number: 5,
          },
          {
            label: "Behind the Scenes",
            number: 2,
          },
          {
            label: "Teasers",
            number: 21,
          },
        ]
      },

    ]
  },
  {
    id: 2,
    title: "Fandom",
    items: [
      {
        label: "Discussions",
        number: null,
        subitems: [
          {
            label: "Overview",
            number: null,
          },
          {
            label: "General",
            number: 4,
          },
          {
            label: "Content Issues",
            number: 2,
          },
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Share",
    items: [
      {
        label: "Share Link",
        number: null,
      },
      {
        label: "Facebook",
        number: null,
      },
      {
        label: "Twitter",
        number: null,
      },
    ]
  }
]