class GenericPage {
  constructor(_pageManager, _pageConfig) {
    this.pageManager = _pageManager
    this.title = _pageConfig.name
    this.content = _pageConfig.content
    this.language = _pageConfig.language
  }

  getName() {
    return this.title
  }

  render(_parent) {
    _parent.append(this.content)
  }

  save() {
    // Implement save logic if needed
  }
}

export default GenericPage
