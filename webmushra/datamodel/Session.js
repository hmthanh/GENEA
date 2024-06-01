import { Participant } from "./Participant"

class Session {
  constructor() {
    /*
    this.startTime = null;
    this.endTime = null;
    NOTE: not yet
    */
    this.testId = null
    this.participant = new Participant()
    this.trials = []
  }

  getTrial(type, id) {
    return (
      this.trials.find((trial) => trial.type === type && trial.id === id) ||
      null
    )
  }
}

export default Session
