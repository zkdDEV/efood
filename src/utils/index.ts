export function setDescriptionSize(text: string) {
  if (text.length > 120) {
    return text.slice(0, 117) + '...'
  }
  return text
}
