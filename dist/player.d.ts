import { Playlist } from "./playlist.js";
export declare class Player {
    private playlist;
    private state;
    private loop;
    private shuffle;
    private shuffleOrder;
    private shuffleIndex;
    private history;
    constructor(playlist: Playlist);
    private logHistory;
    play(): void;
    pause(): void;
    stop(): void;
    next(): void;
    previous(): void;
    setLoop(on: boolean): void;
    setShuffle(on: boolean): void;
    private generateShuffleOrder;
    getHistory(): string[];
}
//# sourceMappingURL=player.d.ts.map