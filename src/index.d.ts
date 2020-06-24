export interface ButtonInterface {
  round?: boolean;
}

export declare const Button: React.ComponentType<ButtonInterface>;

export type TitleLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TitleInterface extends Component {
  level?: TitleLevel;
  centered?: boolean;
}

export declare const Title: React.ComponentType<TitleInterface>;

export interface SpreazInterface {
  Button: Button;
  Title: Title;
}

declare const spreaz: SpreazInterface;

export default spreaz;