export default class Anime {
    constructor(
        public readonly name: string,
        public readonly year: number | null = null,
        public readonly previewUrl: string | null = null,
        public readonly id: number = 0,
    ) {}
}
