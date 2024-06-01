class VideoVisualizer {
  constructor(_parent, _conditions) {
    this.parent = _parent
    this.eventListeners = []
    this.currentVideo = null
    this.currentVideoIndex = null
    this.conditions = _conditions

    const mainDiv = $(`<div id="main-video-frame"></div>`)

    const _videoElements = []

    this.videoPlaceholder = $(
      `<div id="video-placeholder">When you press play on one of the buttons below, a video will appear here</div>`
    )
    mainDiv.append(this.videoPlaceholder)

    this.conditions.forEach((condition, i) => {
      const videoElement = $(
        `<div id="vimeo_video_player_${i}" class="video-element"></div>`
      ).get(0)

      videoElement.style.border = `5px solid ${condition.color}`
      mainDiv.append(videoElement)
      _videoElements.push(videoElement)

      const player = new Vimeo.Player(videoElement, {
        url: condition.getFilepath(),
        height: 400,
        dnt: true,
      })

      player.on("pause", (e) => {
        this.sendEvent({
          name: "pauseTriggered",
          index: this.currentVideoIndex,
          conditionLength: this.conditions.length,
          seconds: e.seconds,
        })
      })

      player.on("play", (e) => {
        const event = {
          name: "playConditionTriggered",
          index: this.currentVideoIndex,
          length: this.conditions.length,
          seconds: e.seconds,
        }
        this.sendEvent(event)
      })
    })

    this.videoElements = _videoElements

    this.parent.append(mainDiv)
  }

  playCondition(_index) {
    this.videoPlaceholder.get(0).style.display = "none"
    this.videoElements.forEach((videoElement, i) => {
      if (i == _index) {
        videoElement.style.display = "block"
      } else {
        const player = new Vimeo.Player(videoElement)
        player.getPaused().then((paused) => {
          if (!paused) {
            player.pause()
            player.setCurrentTime(0)
          }
        })
        videoElement.style.display = "none"
      }
    })
    this.currentVideo = this.videoElements[_index]
    this.currentVideoIndex = _index

    new Vimeo.Player(this.currentVideo).play()
  }

  pause() {
    new Vimeo.Player(this.currentVideo).pause()
  }

  getConditions() {
    return this.conditions
  }

  removeEventListener(_index) {
    this.eventListeners[_index] = null
  }

  addEventListener(_listenerFunction) {
    this.eventListeners.push(_listenerFunction)
    return this.eventListeners.length - 1
  }

  sendEvent(_event) {
    this.eventListeners.forEach((listener, i) => {
      if (listener === null) {
        return
      }
      listener(_event)
    })
  }
}

export default VideoVisualizer
