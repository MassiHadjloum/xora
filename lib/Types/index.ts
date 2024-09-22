export type TButton = {
  icon: string;
  title: string;
};

export type TFeature = {
  id: string;
  icon: string;
  caption: string;
  title: string;
  text: string;
  button: TButton;
};

export type TPlan = {
  id: string;
  title: string;
  priceMonthly: number,
  priceYearly: number,
  caption: string;
  features: string[],
  icon: string;
  logo: string;

}