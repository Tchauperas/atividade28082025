import { Playlist } from "./playlist.js";
import { Video } from "./video.js";

export class Player {
  private state: "stopped" | "playing" | "paused" = "stopped";
  private loop: boolean = false;
  private shuffle: boolean = false;
  private shuffleOrder: number[] = [];
  private shuffleIndex: number = 0;
  private history: string[] = [];

  constructor(private playlist: Playlist) {}

  private logHistory(video: Video) {
    this.history.push(video.getTitle());
  }

  play(): void {
    const video = this.playlist.getCurrent();
    if (video) {
      this.state = "playing";
      video.play();
      this.logHistory(video);
    }
  }

  pause(): void {
    const video = this.playlist.getCurrent();
    if (video) {
      this.state = "paused";
      video.pause();
    }
  }

  stop(): void {
    const video = this.playlist.getCurrent();
    if (video) {
      this.state = "stopped";
      video.stop();
    }
  }

  next(): void {
    let video: Video | null = null;

    if (this.shuffle) {
      if (this.shuffleIndex < this.shuffleOrder.length) {
        const index = this.shuffleOrder[this.shuffleIndex++];
        const allVideos = this.playlist.getAll();
        if (index !== undefined && allVideos[index]) {
          video = allVideos[index];
        }
      } else if (this.loop) {
        this.shuffleOrder = this.generateShuffleOrder();
        this.shuffleIndex = 0;
        return this.next();
      }
    } else {
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

  previous(): void {
    const video = this.playlist.previous();
    if (video) this.play();
  }

  setLoop(on: boolean): void {
    this.loop = on;
  }

  setShuffle(on: boolean): void {
    this.shuffle = on;
    if (on) {
      this.shuffleOrder = this.generateShuffleOrder();
      this.shuffleIndex = 0;
    }
  }

  private generateShuffleOrder(): number[] {
    const arr = this.playlist.getAll().map((_, i) => i);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i]!, arr[j]!] = [arr[j]!, arr[i]!];
    }
    return arr;
  }

  getHistory(): string[] {
    return [...this.history];
  }
}
