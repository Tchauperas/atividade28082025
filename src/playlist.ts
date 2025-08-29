import { Video } from "./video.js";

export class Playlist {
  private videos: Video[] = [];
  private currentIndex: number = 0;

  add(video: Video) {
    this.videos.push(video);
  }

  remove(id: number) {
    this.videos = this.videos.filter((v) => v.getId() !== id);
  }

  getCurrent(): Video | null {
    return this.videos[this.currentIndex] || null;
  }

  hasNext(): boolean {
    return this.currentIndex < this.videos.length - 1;
  }

  hasPrevious(): boolean {
    return this.currentIndex > 0;
  }

  next(): Video | null {
    if (this.hasNext()) {
      this.currentIndex++;
      return this.getCurrent();
    }
    return null;
  }

  previous(): Video | null {
    if (this.hasPrevious()) {
      this.currentIndex--;
      return this.getCurrent();
    }
    return null;
  }

  getAll(): Video[] {
    return [...this.videos];
  }
}
