import Base from '../base/html/complex'

export type level = 1|2|3|4|5

export default class HElement extends Base {
  constructor(level: level, content: string) {
    super('h' + level, content)
  }
}