const nls = {
  en: {},
  de: {},
  fr: {},
}

// Buttons
nls.en.nextButton = "Next"
nls.en.previousButton = "Previous"
nls.en.playButton = "Play"
nls.en.stopButton = "Stop"
nls.en.pauseButton = "Pause"
nls.en.sendButton = "Submit results"

nls.de.nextButton = "Nächste Seite"
nls.de.previousButton = "Vorherige Seite"
nls.de.playButton = "Start"
nls.de.stopButton = "Stopp"
nls.de.pauseButton = "Pause"
nls.de.sendButton = "Ergebnisse senden"

nls.fr.nextButton = "Suivant"
nls.fr.previousButton = "Précédent"
nls.fr.playButton = "Play"
nls.fr.stopButton = "Stop"
nls.fr.pauseButton = "Pause"
nls.fr.sendButton = "Envoyer les résultats"

// Captions MUSHRA
const captions = {
  excellent: "Excellent",
  good: "Good",
  fair: "Fair",
  poor: "Poor",
  bad: "Bad",
  reference: "Reference",
  cond: "Video",
  35: "Anchor35",
  75: "Anchor75",
}

Object.keys(nls).forEach((lang) => {
  Object.keys(captions).forEach((key) => {
    nls[lang][key] = captions[key]
  })
})

// Captions finishPage
nls.en.results = "Your results:"
nls.de.results = "Die Ergebnisse:"
nls.fr.results = "Vos résultats:"
nls.en.attending = "Thank you for attending!"
nls.de.attending = "Vielen Dank für die Teilnahme!"
nls.fr.attending = "Merci pour votre participation!"

export default nls
