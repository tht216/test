import type { IColumnsTableType } from "@src/types/common";
import { Input, Table } from "@src/components";
import { type FC } from "react";
import { CART_LIST } from "@src/constants/CRM";
import { type ICart } from "@src/types/CRM";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formatNumber } from "@src/utils";
import classNames from "classnames";

type IFormInputs = {
  [K in `${ICart["productName"]}-price`]: string;
} & { [K in `${ICart["productName"]}-amount`]: string };

const TableCartList: FC = () => {
  const validationSchema = yup.object().shape(
    CART_LIST.reduce(
      (schema, field) => {
        return {
          ...schema,
          [`${field.productName}-price`]: yup
            .number()
            .required("This field is required"),
          [`${field.productName}-amount`]: yup
            .number()
            .required("This field is required"),
        };
      },
      {} as Record<string, yup.Schema>
    )
  );

  const handleDelete = (item: string) => {
    console.log(item);
  };

  const {
    register,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(validationSchema),
    defaultValues: CART_LIST.reduce(
      (item, value) => {
        return {
          ...item,
          [`${value.productName}-price`]: formatNumber(value.price),
          [`${value.productName}-amount`]: value.amount + "",
        };
      },
      {} as Record<string, string>
    ),
  });

  const X_STYLE_MAPPING = {
    before:
      "before:content[''] before:h-[0.0625rem] before:w-full before:bg-zinc-300 before:absolute before:top-1/2 before:left-0",
    after:
      "after:content[''] after:w-[0.0625rem] after:h-full after:bg-zinc-300 after:absolute after:top-0 after:left-1/2",
  };

  const COLUMNS: IColumnsTableType<ICart, keyof ICart>[] = [
    {
      title: "Mã",
      key: "productId",
      render: (item) => {
        return (
          <p className="text-black text-sm font-normal leading-normal">
            {item.productId}
          </p>
        );
      },
    },
    {
      title: "Tên sản phẩm",
      key: "productName",
      render: (item) => {
        return (
          <p className="text-black text-sm font-normal leading-normal">
            {item.productName}
          </p>
        );
      },
    },
    {
      title: "Số lượng",
      render: (item) => {
        return (
          <Input
            type="number"
            id={`${item.productName}-amount`}
            disabled={false}
            {...register(`${item.productName}-amount`)}
            isError={errors[`${item.productName}-amount`] ? true : false}
            errorMessage={errors[`${item.productName}-amount`]?.message}
            color="white"
            align="right"
            className="w-[59px] pt-[0.44rem] pb-[0.5rem] px-[0.75rem]"
          />
        );
      },
      key: "amount",
    },
    {
      title: "Đơn giá",
      render: (item) => {
        return (
          <Input
            type="text"
            id={`${item.productName}-price`}
            disabled={true}
            {...register(`${item.productName}-price`)}
            isError={errors[`${item.productName}-price`] ? true : false}
            errorMessage={errors[`${item.productName}-price`]?.message}
            color="white"
            align="center"
            className="w-[93px] pt-[0.44rem] pb-[0.5rem] "
            size="lg"
          />
        );
      },
      key: "price",
    },
    {
      title: "Thành tiền",
      render: (item) => {
        return (
          <p className="text-black text-sm font-normal font-['Helvetica Neue']">
            {formatNumber(item.amount * item.price)}
          </p>
        );
      },
      key: "price",
    },
    {
      title: "",
      render: (item) => {
        return (
          <div
            className={classNames(
              X_STYLE_MAPPING["before"],
              X_STYLE_MAPPING["after"],
              "w-[1rem] h-[1rem] rotate-45 relative cursor-pointer"
            )}
            onClick={() => handleDelete(item.productName)}
          ></div>
        );
      },
      key: "price",
    },
  ];

  return <Table type="none" columns={COLUMNS} dataSource={CART_LIST} />;
};

export default TableCartList;
