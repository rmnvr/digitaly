interface YT {
  Player: {
    new(elementId: HTMLElement | string, options: {
      videoId: string;
      playerVars?: {
        autoplay?: number;
        mute?: number;
        loop?: number;
        controls?: number;
        modestbranding?: number;
        showinfo?: number;
        rel?: number;
        playsinline?: number;
        playlist?: string;
        disablekb?: number;
        iv_load_policy?: number;
        fs?: number;
        enablejsapi?: number;
      };
      events?: {
        onReady?: (event: {
          target: {
            playVideo: () => void;
            getIframe: () => HTMLIFrameElement;
          }
        }) => void;
      };
    }): YT.Player;
  } & {
    prototype: {
      playVideo: () => void;
      pauseVideo: () => void;
    };
  };
}

declare global {
  interface Window {
    YT: YT;
    onYouTubeIframeAPIReady: () => void;
  }
}

export { }; 