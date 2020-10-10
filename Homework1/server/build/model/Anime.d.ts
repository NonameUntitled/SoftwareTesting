export default class Anime {
    readonly id: number;
    readonly name: string;
    readonly previewUrl: string | null;
    readonly year: number | null;
    constructor(id: number, name: string, previewUrl?: string | null, year?: number | null);
}
