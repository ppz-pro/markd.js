import Base from '../base/html/complex'

export default class PElement extends Base {
  constructor(content: string) {
    super('p', content)
  }
}