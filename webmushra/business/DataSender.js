class DataSender {
  constructor(config) {
    this.target = config.remoteService
  }

  async send(session) {
    const sessionJSON = JSON.stringify(session)
    const params = new URLSearchParams()
    params.append("sessionJSON", sessionJSON)

    try {
      const response = await fetch(this.target, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params,
      })

      if (!response.ok) {
        const errorMessage = await response.text()
        console.error(errorMessage)
        return false
      }

      return await response.text()
    } catch (error) {
      console.error(error)
      return false
    }
  }
}

export default DataSender
