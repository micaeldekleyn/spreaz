export interface ButtonInterface {
  round: boolean
}

export interface SpreazInterface {
  Button: ButtonInterface,
}

declare const spreaz: SpreazInterface;

export default spreaz;