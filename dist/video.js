export class Video {
    id;
    title;
    duration;
    author;
    views;
    currentTime = 0;
    constructor(id, title, duration, author, views) {
        this.id = id;
        this.title = title;
        this.duration = duration;
        this.author = author;
        this.views = views;
    }
    play() {
        console.log(`▶️ Reproduzindo vídeo: ${this.title}`);
    }
    pause() {
        console.log(`⏸️ Pausado: ${this.title}`);
    }
    stop() {
        this.currentTime = 0;
        console.log(`⏹️ Parado: ${this.title}`);
    }
    info() {
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
    advertiser;
    skippableAfter;
    constructor(id, title, duration, author, views, advertiser, skippableAfter) {
        super(id, title, duration, author, views);
        this.advertiser = advertiser;
        this.skippableAfter = skippableAfter;
    }
    play() {
        console.log(`📢 Anúncio de ${this.advertiser}. Skippable após ${this.skippableAfter}s`);
    }
    info() {
        return `Ad: ${super.info()} - Anunciante: ${this.advertiser}`;
    }
}
export class LiveStream extends Video {
    concurrentViewers;
    constructor(id, title, author, views, concurrentViewers) {
        super(id, title, 0, author, views);
        this.concurrentViewers = concurrentViewers;
    }
    play() {
        console.log(`🔴 Transmissão ao vivo: ${this.info()}`);
    }
    info() {
        return `${this.getTitle()} (LIVE) - ${this.concurrentViewers} assistindo agora`;
    }
}
//# sourceMappingURL=video.js.map