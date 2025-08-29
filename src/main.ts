import { Video, AdVideo, LiveStream } from "./video.js";
import { Playlist } from "./playlist.js";
import { Player } from "./player.js";

const playlist = new Playlist();

const v1 = new Video(1, "Aula TypeScript", 300, "Marco", 1200);
const v2 = new AdVideo(2, "Anúncio TS", 30, "Publicidade", 500, "TechBrand", 5);
const v3 = new LiveStream(3, "Live de Programação", "Marco", 3000, 120);

playlist.add(v1);
playlist.add(v2);
playlist.add(v3);

const player = new Player(playlist);

player.play();
player.next();
player.next();
player.setLoop(false);
player.next();
player.setShuffle(false);
player.next();
console.log("Histórico:", player.getHistory());
