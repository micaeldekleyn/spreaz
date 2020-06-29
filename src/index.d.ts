/*
  Button component
*/
export interface ButtonInterface {
  round?: boolean;
}

export declare const Button: React.ComponentType<ButtonInterface>;

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
  Title component
*/
export type TitleLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TitleInterface extends Component {
  level?: TitleLevel;
  centered?: boolean;
}

export declare const Title: React.ComponentType<TitleInterface>;

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
  Spreaz Declaration
*/
export interface SpreazInterface {
  Button: Button;
  Title: Title;
}

declare const spreaz: SpreazInterface;

export default spreaz;