import { Video } from "./video.js";
export class Playlist {
    videos = [];
    currentIndex = 0;
    add(video) {
        this.videos.push(video);
    }
    remove(id) {
        this.videos = this.videos.filter((v) => v.getId() !== id);
    }
    getCurrent() {
        return this.videos[this.currentIndex] || null;
    }
    hasNext() {
        return this.currentIndex < this.videos.length - 1;
    }
    hasPrevious() {
        return this.currentIndex > 0;
    }
    next() {
        if (this.hasNext()) {
            this.currentIndex++;
            return this.getCurrent();
        }
        return null;
    }
    previous() {
        if (this.hasPrevious()) {
            this.currentIndex--;
            return this.getCurrent();
        }
        return null;
    }
    getAll() {
        return [...this.videos];
    }
}
//# sourceMappingURL=playlist.js.map