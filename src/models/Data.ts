export class Data {
  image: string
  infos: string[]
  title: string
  note: string
  description: string
  key: number

  constructor(
    image: string,
    infos: string[],
    title: string,
    description: string,
    key: number,
    note: string
  ) {
    this.image = image
    this.infos = infos
    this.title = title
    this.note = note
    this.description = description
    this.key = key
  }
}
