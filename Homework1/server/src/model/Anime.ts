export default class Anime {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly previewUrl: string | null = null,
    public readonly year: number | null = null
  ) {}
}
