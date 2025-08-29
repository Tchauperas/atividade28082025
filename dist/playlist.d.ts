import { Video } from "./video.js";
export declare class Playlist {
    private videos;
    private currentIndex;
    add(video: Video): void;
    remove(id: number): void;
    getCurrent(): Video | null;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): Video | null;
    previous(): Video | null;
    getAll(): Video[];
}
//# sourceMappingURL=playlist.d.ts.map