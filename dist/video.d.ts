import type { Playable, Describable } from "./interfaces.js";
export declare class Video implements Playable, Describable {
    private id;
    private title;
    private duration;
    private author;
    private views;
    private currentTime;
    constructor(id: number, title: string, duration: number, author: string, views: number);
    play(): void;
    pause(): void;
    stop(): void;
    info(): string;
    getId(): number;
    getTitle(): string;
}
export declare class AdVideo extends Video {
    private advertiser;
    private skippableAfter;
    constructor(id: number, title: string, duration: number, author: string, views: number, advertiser: string, skippableAfter: number);
    play(): void;
    info(): string;
}
export declare class LiveStream extends Video {
    private concurrentViewers;
    constructor(id: number, title: string, author: string, views: number, concurrentViewers: number);
    play(): void;
    info(): string;
}
//# sourceMappingURL=video.d.ts.map