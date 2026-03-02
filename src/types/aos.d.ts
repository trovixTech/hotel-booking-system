declare module 'aos' {
  interface AOSOptions {
    duration?: number;
    once?: boolean;
    delay?: number;
    offset?: number;
    easing?: string;
    mirror?: boolean;
    anchorPlacement?: string;
  }

  interface AOS {
    init(options?: AOSOptions): void;
    refresh(): void;
    refreshHard(): void;
  }

  const AOS: AOS;
  export default AOS;
}
