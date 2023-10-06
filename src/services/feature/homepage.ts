import type { ICustomer, IFeature, IQA, IStrength } from "@src/types/home";
import { axiosCustom } from "../axios";

export const strength = {
  list: () => axiosCustom.get<IStrength[]>("/home/strength"),
};

export const customer = {
  list: () => axiosCustom.get<ICustomer[]>("/home/customer"),
};

export const industry = {
  list: () => axiosCustom.get<string[]>("/home/industry"),
};

export const feature = {
  list: () => axiosCustom.get<IFeature[]>("/home/feature"),
};

export const qa = {
  list: () => axiosCustom.get<IQA[]>("/home/qa"),
};
