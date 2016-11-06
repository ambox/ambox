interface Ambox {
  (): Ambox;
}

declare const ambox: Ambox;

declare module 'ambox' {
  export = ambox;
}
