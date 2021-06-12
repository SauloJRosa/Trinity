import { Jogo } from './jogo';

export interface Content {

  content: Array<Jogo>[],

  pageable: {
    sort: {
      sorted: boolean,
      unsorted: boolean,
      empty: boolean
    }
    offset: number,
    pageNumber: number,
    pageSize: number,
    paged: boolean,
    unpaged: boolean
  },

  sort: {
    sorted: boolean,
    unsorted: boolean,
    empty: boolean
  }

  totalPages: number,
  totaElements: number,
  last: boolean,
  size: number,
  number: number,
  first: boolean,
  numberOfElements: number,
  empty: boolean

}
