class PageManager {
  constructor(variableName, htmlParentElementId, localizer) {
    this.pages = []
    this.pagesIndex = -1
    this.parentElementId = htmlParentElementId
    this.varName = variableName
    this.callbacksPageEventChanged = []
    this.localizer = localizer
  }

  addCallbackPageEventChanged(callback) {
    this.callbacksPageEventChanged.push(callback)
  }

  addPage(page) {
    this.pages.push(page)
  }

  getNextPage() {
    return this.pages[this.pagesIndex + 1]
  }

  getPageIndex() {
    return this.pagesIndex
  }

  getNumPages() {
    return this.pages.length
  }

  getPage(index) {
    return this.pages[index]
  }

  getCurrentPage() {
    return this.pages[this.pagesIndex]
  }

  async nextPage() {
    this.pagesIndex++

    if (this.pagesIndex <= this.pages.length) {
      let postCheck = Promise.resolve()

      if (
        this.pages[this.pagesIndex - 1] &&
        this.pages[this.pagesIndex - 1].postCheck
      ) {
        postCheck = this.pages[this.pagesIndex - 1].postCheck()
      }

      await postCheck

      if (
        this.pages[this.pagesIndex - 1] &&
        this.pages[this.pagesIndex - 1].save
      ) {
        this.pages[this.pagesIndex - 1].save()
      }

      if (
        this.pagesIndex >= this.pages.length - 1 &&
        this.getCurrentPage() instanceof FinishPage
      ) {
        // last page will be rendered
        for (let i = 0; i < this.pages.length; ++i) {
          if (this.pages[i].store) {
            this.pages[i].store()
          }
        }
      }

      const id = this.parentElementId
      document.getElementById(id).innerHTML = ""
      this.pages[this.pagesIndex].render(document.getElementById(id))
      this.pageEventChanged()

      if (this.getCurrentPage().load) {
        const script = document.createElement("script")
        script.textContent = `${this.getPageVariableName(this.getCurrentPage())}.load();`
        document.getElementById(id).appendChild(script)
      }

      window.scrollTo(0, 0)
    } else {
      this.pagesIndex--
    }
  }

  previousPage() {
    this.pagesIndex--
    if (this.pagesIndex <= this.pages.length) {
      if (
        this.pages[this.pagesIndex + 1] &&
        this.pages[this.pagesIndex + 1].save
      ) {
        this.pages[this.pagesIndex + 1].save()
      }
      const id = this.parentElementId
      document.getElementById(id).innerHTML = ""
      this.pages[this.pagesIndex].render(document.getElementById(id))
      this.pageEventChanged()
      if (this.getCurrentPage().load) {
        const script = document.createElement("script")
        script.textContent = `${this.getPageVariableName(this.getCurrentPage())}.load();`
        document.getElementById(id).appendChild(script)
      }
      window.scrollTo(0, 0)
    } else {
      this.pagesIndex++
    }
  }

  start() {
    for (let i = 0; i < this.pages.length; ++i) {
      if (this.pages[i].init) {
        this.pages[i].init()
      }
    }
    this.nextPage()
  }

  restart() {
    this.pagesIndex = -1
    this.start()
  }

  getPageVariableName(page) {
    const index = this.pages.indexOf(page)
    if (index !== -1) {
      return `${this.varName}.pages[${index}]`
    }
    return false
  }

  getPageManagerVariableName() {
    return this.varName
  }

  pageEventChanged() {
    this.callbacksPageEventChanged.forEach((callback) => callback())
  }

  getLocalizer() {
    return this.localizer
  }
}

export default PageManager
