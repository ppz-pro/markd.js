export interface LiRegExp {
  regExp: RegExp
  preLength: number
}

export const space4 = {
  regExp: /^(    )*\+ (.+)/,
  preLength: 4
}
export const space2 = {
  regExp: /^(  )*\+ (.+)/,
  preLength: 2
}
export const tab = {
  regExp: /^(\t)*\+ (.+)/,
  preLength: 1
}