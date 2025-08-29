import type { Playable, Describable } from "./interfaces.js";

export class Video implements Playable, Describable {
  private currentTime: number = 0;

  constructor(
    private id: number,
    private title: string,
    private duration: number,
    private author: string,
    private views: number
  ) {}

  play(): void {
    console.log(`▶️ Reproduzindo vídeo: ${this.title}`);
  }

  pause(): void {
    console.log(`⏸️ Pausado: ${this.title}`);
  }

  stop(): void {
    this.currentTime = 0;
    console.log(`⏹️ Parado: ${this.title}`);
  }

  info(): string {
    return `${this.title} (${this.duration}s) - ${this.author}, views: ${this.views}`;
  }

  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }
}

export class AdVideo extends Video {
  constructor(
    id: number,
    title: string,
    duration: number,
    author: string,
    views: number,
    private advertiser: string,
    private skippableAfter: number
  ) {
    super(id, title, duration, author, views);
  }

  play(): void {
    console.log(`📢 Anúncio de ${this.advertiser}. Skippable após ${this.skippableAfter}s`);
  }

  info(): string {
    return `Ad: ${super.info()} - Anunciante: ${this.advertiser}`;
  }
}

export class LiveStream extends Video {
  constructor(
    id: number,
    title: string,
    author: string,
    views: number,
    private concurrentViewers: number
  ) {
    super(id, title, 0, author, views);
  }

  play(): void {
    console.log(`🔴 Transmissão ao vivo: ${this.info()}`);
  }

  info(): string {
    return `${this.getTitle()} (LIVE) - ${this.concurrentViewers} assistindo agora`;
  }
}
