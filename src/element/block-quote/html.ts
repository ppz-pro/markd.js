import Abstract from '../base/html'

export default
class BlockQuoteElement extends Abstract {
  constructor(content: string) {
    super('blockquote', content)
  }
}