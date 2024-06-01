class Stimulus {
  constructor(id, filepath) {
    this.id = id
    this.filepath = filepath
    this.audioBuffer = null
  }

  getId() {
    return this.id
  }

  getAudioBuffer() {
    return this.audioBuffer
  }

  setAudioBuffer(audioBuffer) {
    this.audioBuffer = audioBuffer
  }

  getFilepath() {
    return this.filepath
  }
}

export default Stimulus
