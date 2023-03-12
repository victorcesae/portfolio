declare module "react-tilt" {
  import { Component, HTMLProps } from "react";

  interface TiltOptions {
    max?: number;
    perspective?: number;
    scale?: number;
    speed?: number;
    transition?: boolean;
    axis?: string;
    reset?: boolean;
    easing?: string;
    glare?: boolean;
    "max-glare"?: number;
    "glare-prerender"?: boolean;
    gyroscope?: boolean;
    gyroscopeMinAngleX?: number;
    gyroscopeMaxAngleX?: number;
    gyroscopeMinAngleY?: number;
    gyroscopeMaxAngleY?: number;
    gyroscopeSamples?: number;
  }

  export interface TiltProps extends HTMLProps<HTMLDivElement> {
    options?: TiltOptions;
  }

  export default class Tilt extends Component<TiltProps> {}
}
