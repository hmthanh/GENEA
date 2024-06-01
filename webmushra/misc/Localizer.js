class Localizer {
  constructor() {
    this.nlsFragments = {}
  }

  initializeNLSFragments(nlsFragments) {
    this.nlsFragments = nlsFragments
  }

  addFragment(languageCode, id, fragment) {
    if (!this.nlsFragments[languageCode]) {
      this.nlsFragments[languageCode] = {}
    }
    this.nlsFragments[languageCode][id] = fragment
  }

  getFragment(languageCode, id) {
    return this.nlsFragments[languageCode][id]
  }

  checkLocalization() {
    let numFragments = null
    for (const element in this.nlsFragments) {
      if (numFragments === null) {
        numFragments = element.length
      }

      if (numFragments !== element.length) {
        return false
      }
    }
    return true
  }
}

export default Localizer
