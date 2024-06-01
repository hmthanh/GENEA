class LikertScale {
  constructor(responseConfig, prefix, initDisabled, callback) {
    this.responseConfig = responseConfig
    this.prefix = prefix
    this.initDisabled = initDisabled
    this.callback = callback
    this.group = null
    this.elements = null
  }

  enable() {
    $(`input[name=${this.prefix}_response]`).checkboxradio("enable")
  }

  render(parent) {
    this.group = $(
      "<fieldset data-role='controlgroup' data-type='horizontal'></fieldset>"
    )
    parent.append(this.group)

    this.elements = []
    if (this.responseConfig !== null) {
      this.responseConfig.forEach((responseValueConfig, i) => {
        const img = responseValueConfig.img
          ? `<img id='${this.prefix}_response_img_${i}' src='${responseValueConfig.img}'/><br/>`
          : ""
        const element = $(
          `<input type='radio' data-mini='false' value='${responseValueConfig.value}' name='${this.prefix}_response' id='${this.prefix}_response_${i}'/> \
          <label for='${this.prefix}_response_${i}'><center>${img}${responseValueConfig.label}</center></label>`
        )
        this.elements.push(element)
        this.group.append(element)
      })

      this.group.change(() => {
        let set = false
        this.elements.forEach((element, i) => {
          if (set) {
            $(`#${this.prefix}_response_img_${i}`).attr(
              "src",
              this.responseConfig[i].img
            )
          } else {
            const isChecked = $(`#${this.prefix}_response_${i}:checked`).val()
            if (isChecked) {
              set = true
              $(`#${this.prefix}_response_img_${i}`).attr(
                "src",
                this.responseConfig[i].imgSelected
              )
            } else {
              $(`#${this.prefix}_response_img_${i}`).attr(
                "src",
                this.responseConfig[i].imgHigherResponseSelected
              )
            }
          }
        })

        if (this.callback) {
          this.callback(this.prefix)
        }
      })
    }

    if (this.initDisabled) {
      this.group.children().attr("disabled", "disabled")
    }
  }
}

export default LikertScale
