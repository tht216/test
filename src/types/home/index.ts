export interface IProsItem {
  strengthLogo: string;
  strengthTitle: string;
  strengthDescription: string;
}

export interface IStrength {
  strengthDescription: string;
  strengthTitle: string;
}

export interface IIndustrialItem {
  industrialLogo: string;
  industrialDescription: string;
}

export interface IFeatureItem {
  featureLogo: string;
  featureHeader?: string;
  featureDescription: string;
}

export interface IFeature {
  featureBigHeader: string;
  featureContent: IFeatureContent[];
}

export interface IFeatureContent {
  featureHeader?: string;
  featureDescription: string;
}

export interface ICustomerItem {
  customerBrand: string;
  customerLogo: string;
  customerDescription: string;
  customerRepresentative: string;
}

export interface ICustomer {
  customerBrand: string;
  customerDescription: string;
  customerRepresentative: string;
}

export interface IQA {
  question: string;
  answer: string;
}
