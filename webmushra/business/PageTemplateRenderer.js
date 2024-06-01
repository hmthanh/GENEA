class PageTemplateRenderer {
  constructor(pageManager, showButtonPreviousPage, language) {
    this.progressbarId = null
    this.headerId = null
    this.navigationId = 0
    this.showButtonPreviousPage = showButtonPreviousPage
    this.language = language
    this.pageManager = pageManager
    this.lockNextButtonQueued = false
    this.callbacksEventRefreshed = []
  }

  addCallbackEventRefreshed(callback) {
    this.callbacksEventRefreshed.push(callback)
  }

  eventRefreshed() {
    this.callbacksEventRefreshed.forEach((callback) => callback())
  }

  renderProgressBar(parentId) {
    this.progressbarId = parentId
    TolitoProgressBar(this.progressbarId)
      .setOuterTheme("a")
      .setInnerTheme("b")
      .isMini(true)
      .setMax(100)
      .setStartFrom(0)
      .setInterval(0)
      .showCounter(false)
      .build()
  }

  renderHeader(parentId) {
    this.headerId = parentId
    document.getElementById(this.headerId).textContent = this.pageManager
      .getCurrentPage()
      .getName()
  }

  renderNavigation(parentId) {
    this.navigationId = parentId
    let renderedSomething = false

    if (
      this.pageManager.getPageIndex() > 0 &&
      this.showButtonPreviousPage &&
      this.pageManager.getPageIndex() < this.pageManager.getNumPages() - 1
    ) {
      const buttonPrevious = document.createElement("button")
      buttonPrevious.setAttribute("data-role", "button")
      buttonPrevious.setAttribute("data-inline", "true")
      buttonPrevious.textContent = this.pageManager
        .getLocalizer()
        .getFragment(this.language, "previousButton")
      buttonPrevious.addEventListener("click", () =>
        this.pageManager.previousPage()
      )
      document.getElementById(this.navigationId).appendChild(buttonPrevious)
      renderedSomething = true
    }

    if (this.pageManager.getPageIndex() < this.pageManager.getNumPages() - 1) {
      const buttonNext = document.createElement("button")
      buttonNext.setAttribute("id", "__button_next")
      buttonNext.setAttribute("data-role", "button")
      buttonNext.setAttribute("data-inline", "true")
      buttonNext.textContent = this.pageManager
        .getLocalizer()
        .getFragment(this.language, "nextButton")
      buttonNext.addEventListener("click", () => this.pageManager.nextPage())
      if (this.lockNextButtonQueued) {
        buttonNext.setAttribute("disabled", "disabled")
      }
      document.getElementById(this.navigationId).appendChild(buttonNext)
      renderedSomething = true
    }

    if (!renderedSomething) {
      document.getElementById(this.navigationId).remove()
    }
    this.lockNextButtonQueued = false
  }

  lockNextButton() {
    const nextButton = document.getElementById("__button_next")
    if (nextButton) {
      nextButton.setAttribute("disabled", "disabled")
    } else {
      this.lockNextButtonQueued = true
    }
  }

  unlockNextButton() {
    const nextButton = document.getElementById("__button_next")
    if (nextButton) {
      nextButton.removeAttribute("disabled")
    }
  }

  refresh() {
    const pageIndex = this.pageManager.getPageIndex()
    const numPages = this.pageManager.getNumPages()
    const progressValue = (pageIndex / (numPages - 1)) * 100
    const header = document.getElementById(this.headerId)
    const navigation = document.getElementById(this.navigationId)

    if (header) {
      header.textContent = this.pageManager.getCurrentPage().getName()
    }

    if (navigation) {
      navigation.innerHTML = ""
      this.renderNavigation(this.navigationId)
    }

    if ($.mobile.activePage) {
      $.mobile.activePage.trigger("create")
    }
    setTimeout(() => this.eventRefreshed(), 1)
  }

  clear() {
    if (this.headerId) {
      document.getElementById(this.headerId).innerHTML = ""
    }

    if (this.navigationId) {
      document.getElementById(this.navigationId).innerHTML = ""
    }
  }
}

export default PageTemplateRenderer
