export interface ButtonInterface {
  round?: boolean;
}

export type TitleLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TitleInterface {
  level?: TitleLevel;
  centered?: boolean;
}

export interface SpreazInterface {
  Button: ButtonInterface;
  Title: TitleInterface
}

declare const spreaz: SpreazInterface;

export default spreaz;