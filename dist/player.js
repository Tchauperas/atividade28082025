import { Playlist } from "./playlist.js";
import { Video } from "./video.js";
export class Player {
    playlist;
    state = "stopped";
    loop = false;
    shuffle = false;
    shuffleOrder = [];
    shuffleIndex = 0;
    history = [];
    constructor(playlist) {
        this.playlist = playlist;
    }
    logHistory(video) {
        this.history.push(video.getTitle());
    }
    play() {
        const video = this.playlist.getCurrent();
        if (video) {
            this.state = "playing";
            video.play();
            this.logHistory(video);
        }
    }
    pause() {
        const video = this.playlist.getCurrent();
        if (video) {
            this.state = "paused";
            video.pause();
        }
    }
    stop() {
        const video = this.playlist.getCurrent();
        if (video) {
            this.state = "stopped";
            video.stop();
        }
    }
    next() {
        let video = null;
        if (this.shuffle) {
            if (this.shuffleIndex < this.shuffleOrder.length) {
                const index = this.shuffleOrder[this.shuffleIndex++];
                const allVideos = this.playlist.getAll();
                if (index !== undefined && allVideos[index]) {
                    video = allVideos[index];
                }
            }
            else if (this.loop) {
                this.shuffleOrder = this.generateShuffleOrder();
                this.shuffleIndex = 0;
                return this.next();
            }
        }
        else {
            video = this.playlist.next();
            if (!video && this.loop) {
                this.stop();
                this["playlist"]["currentIndex"] = 0; // reset simples
                video = this.playlist.getCurrent();
            }
        }
        if (video) {
            this.play();
        }
    }
    previous() {
        const video = this.playlist.previous();
        if (video)
            this.play();
    }
    setLoop(on) {
        this.loop = on;
    }
    setShuffle(on) {
        this.shuffle = on;
        if (on) {
            this.shuffleOrder = this.generateShuffleOrder();
            this.shuffleIndex = 0;
        }
    }
    generateShuffleOrder() {
        const arr = this.playlist.getAll().map((_, i) => i);
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
    getHistory() {
        return [...this.history];
    }
}
//# sourceMappingURL=player.js.map