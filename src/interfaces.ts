export interface Playable {
  play(): void;
  pause(): void;
  stop(): void;
}

export interface Describable {
  info(): string;
}
