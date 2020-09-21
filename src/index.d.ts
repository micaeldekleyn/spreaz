/*
  Button component
*/
export interface ButtonInterface {
  round?: boolean;
}

export declare const Button: React.ComponentType<ButtonInterface, React.Component>;

/*
  RoundButton component
*/
export interface RoundButtonInterface<T> {
  href: string;
  active: boolean;
  as?: T;
  text?: string;
  icon?: Element<"img"> | React.Component;
  iconHover?: Element<"img"> | React.Component;
  iconActive?: Element<"img"> | React.Component;
}

export declare const RoundButton: React.ComponentType<RoundButtonInterface>;

/*
  SubmitButton component
*/
export interface SubmitButtonInterface {
  round?: boolean;
}

export declare const SubmitButton: React.ComponentType<SubmitButtonInterface, React.Component>;

/*
  Title component
*/
export type TitleLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TitleInterface extends Component {
  level?: TitleLevel;
  centered?: boolean;
}

export declare const Title: React.ComponentType<TitleInterface, React.Component>;

/*
  Link component
*/
export interface LinkInterface extends Component {
  cancel?: boolean;
}

export declare const Link: React.ComponentType<LinkInterface, React.Component>;

/*
  Text component
*/
export interface TextInterface extends Component {
  level?: "normal" | "medium" | "small";
  centered?: boolean;
  bold?: boolean;
}

export declare const Text: React.ComponentType<TextInterface, React.Component>;

/*
  LeftMenu component
*/
export interface LeftLink {
  href?: string;
  active?: boolean;
  text?: string;
  icon?: React.Element<"img">;
  iconHover?: React.Element<"img">;
  iconActive?: React.Element<"img">;
  component?: React.Element<any>;
}

export interface LeftMenuInterface {
  logo?: string;
  logoHeight?: number;
  appName?: string;
  leftLinks: LeftLink[];
  rightContentTitle: string;
  rightLinks: object[];
  headerButtons?: React.Element[];
}

export declare const LeftMenu: React.ComponentType<LeftMenuInterface>;

/*
  PageHeader component
*/
export interface PageHeaderInterface {
  title: string;
  buttons?: object[];
}

export declare const PageHeader: React.ComponentType<PageHeaderInterface>;

/*
  MenuLink component
*/

export interface MenuLinkInterface<T> {
  href: string;
  active: boolean;
  as: T;
  className: string;
}

export declare const MenuLink: React.ComponentType<MenuLinkInterface>;

/*
  Row component
*/

export interface RowInterface<T> extends React.HTMLAttributes {
  outterMargin?: boolean;
  fullHeight?: boolean;
  as?: T;
}

export declare const Row: React.ComponentType<RowInterface>;

/*
  Col component
*/

export interface ColInterface {
  span: number;
}

export declare const Col: React.ComponentType<ColInterface, React.Component>;

/*
  Input component
*/

export interface InputInterface {
  id: string;
  className?: string;
  label: string;
  error?: string;
}

export declare const Input: React.ComponentType<InputInterface, React.Component>;

/*
  Spreaz Declaration
*/
export interface SpreazInterface {
  Button: Button;
  Title: Title;
}

declare const spreaz: SpreazInterface;

export default spreaz;