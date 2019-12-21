labels = ["identity_attack","insult","obscene","severe_toxicity","sexual_explicit","threat","toxicity"]
enums = {
    PENDING: "PENDING",
    CLASSIFIED: "CLASSIFIED",
    // turn this down so you don't have type very obscene things
    THRESHOLD: 0.6
}
sentenceRegex = /["’]?[A-Z][^.?!]+((?![.?!][’"]?\s["’]?[A-Z][^.?!]).)+[.?!’"]+/