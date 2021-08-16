import Element from './index'
import { inlineParsers } from '../parser/inline'

export default
class ComplexElement extends Element {
  setContent(content: string) {
    inlineParsers.forEach(parser => {
      content = parser.parse(content)
    })
    super.setContent(content)
  }
}