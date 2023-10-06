import {
  Button,
  FeatureItem,
  IndustrialItem,
  ProsItem,
  QAItem,
  Slider,
  Title,
} from "@src/components";
import {
  type IQA,
  type ICustomer,
  type IFeature,
  type IStrength,
} from "@src/types/home";
import { type FC } from "react";
import {
  CUSTOMER_IMAGES,
  FEATURE_IMAGES,
  INDUSTRY_IMAGE,
  STRENGTH_IMAGE,
} from "@src/constants/home";
import featureImage1 from "@src/assets/images/feature-1.svg";
import featureImage2 from "@src/assets/images/feature-2.svg";
import qaImage from "@src/assets/images/qa-image.svg";
import Image from "next/image";
import classNames from "classnames";
import {
  customer,
  feature,
  industry,
  qa,
  strength,
} from "@src/services/feature/homepage";
import { useAppSelector } from "@src/hooks";

interface Props {
  strengthList: IStrength[];
  industryList: string[];
  featureList: IFeature[];
  customerList: ICustomer[];
  qaList: IQA[];
}
const Home: FC<Props> = ({
  customerList,
  featureList,
  industryList,
  qaList,
  strengthList,
}) => {
  const FEATURE_IMAGE: string[] = [featureImage1, featureImage2];
  const count = useAppSelector((state) => state.auth.token);
  console.log(count);

  return (
    <>
      <section>
        <div className="container">
          <Title
            color="zinc-800"
            size="5xl"
            align="center"
            className="mt-[5.06rem] mb-[1.19rem]"
          >
            WIFOSELL
            <br /> Giải pháp hỗ trợ bán hàng đa kênh
          </Title>
          <p className="text-center text-zinc-800 text-2xl font-normal leading-[2.09375rem] tracking-tight mb-[0.63rem]">
            Nền tảng quản lý và bán hàng đa kênh giúp bạn tăng trưởng kinh doanh
            <br />
            <br />
          </p>
          <Button className="mx-auto">Dùng thử miễn phí</Button>
        </div>
        <div className="h-[31.9rem] w-full bg-banner bg-center bg-no-repeat relative -top-[2.44rem] mb-[6.71rem]"></div>
      </section>

      <section>
        <div className="container">
          <Title
            size="4xl"
            color="zinc-800"
            align="center"
            className="mb-[4.25rem]"
          >
            Phần mềm quản lý bán hàng Wifosell
          </Title>
          <div className="grid xl:grid-cols-3 grid-cols-1 gap-[1.94rem] h-full mb-[10rem] xl:px-[10.38rem]">
            {strengthList.map((value, index) => (
              <ProsItem
                className="mx-auto"
                key={index}
                value={{ ...value, strengthLogo: STRENGTH_IMAGE[index] }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="shadow-inner pb-[10rem]">
        <div className="container">
          <Title
            size="4xl"
            color="zinc-800"
            align="center"
            className="pb-[5.25rem] pt-[9rem]"
          >
            Wifosell là giải pháp tối ưu cho từng ngành hàng
          </Title>
          <div className="grid xl:grid-cols-5 grid-cols-2 gap-[1.94rem] w-full h-full xl:px-[10.38rem]">
            {industryList.map((value, index) => (
              <IndustrialItem
                className="mx-auto"
                key={index}
                industrialItem={{
                  industrialLogo: INDUSTRY_IMAGE[index],
                  industrialDescription: value,
                }}
              />
            ))}
          </div>
          <Title
            size="4xl"
            color="zinc-800"
            align="center"
            className="pb-[2.81rem] pt-[7.75rem]"
          >
            Đăng ký dùng thử miễn phí 10 ngày!
          </Title>
          <Button className="mx-auto">Dùng thử miễn phí</Button>
        </div>
      </section>

      <section>
        <div className="container mb-[10rem]">
          <Title
            size="4xl"
            color="zinc-800"
            align="center"
            className="pb-[5.25rem] pt-[9rem]"
          >
            Phần mềm quản lý bán hàng online hiệu quả
          </Title>
          {featureList.map((value, index) => (
            <div
              key={index}
              className={classNames(
                index === 1
                  ? "xl:gap-[9.06rem] gap-[4.44rem] items-center"
                  : "gap-[4.44rem]",
                "grid xl:grid-cols-2 grid-cols-1 xl:px-[10.38rem] mb-[5.19rem]"
              )}
            >
              <div
                className={classNames(
                  "flex flex-col gap-[2rem]",
                  index % 2 ? "xl:order-2 order-1" : ""
                )}
              >
                <Title size="4xl" color="blue" align="left">
                  {value.featureBigHeader}
                </Title>
                <div
                  className={classNames(
                    "grid gap-[2.31rem] w-full",
                    value.featureContent.length > 1
                      ? "grid-cols-2"
                      : "grid-cols-1"
                  )}
                >
                  {value.featureContent.map((content, key) => (
                    <FeatureItem
                      key={key}
                      featureItem={{
                        ...content,
                        featureLogo: FEATURE_IMAGES[key],
                      }}
                    />
                  ))}
                </div>
              </div>
              <Image
                src={FEATURE_IMAGE[index]}
                alt="Sale Management"
                className={classNames(
                  "mx-auto",
                  index % 2 ? "xl:order-1 order-2" : ""
                )}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-blue pb-[10rem]">
        <div className="container">
          <Title
            size="4xl"
            color="white"
            align="center"
            className="pt-[7.75rem]"
          >
            Khách hàng của Wifosell
          </Title>
          <Slider
            customerItem={customerList.map((value, index) => ({
              ...value,
              customerLogo: CUSTOMER_IMAGES[index],
            }))}
            className="py-[4rem]"
          />
        </div>
      </section>

      <section className="mt-[8rem] mb-[10rem]">
        <Title size="4xl" color="zinc-800" align="center" className="pb-[4rem]">
          Q&A
        </Title>
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-[4.75rem] container xl:px-[10.38rem] items-center">
          <Image src={qaImage} alt="Question & Answer" />
          <div className="flex flex-col gap-[0.75rem]">
            {qaList.map((value, index) => (
              <QAItem key={index} qAItem={value} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-100">
        <div className="container pt-[5.75rem] pb-[4.31rem]">
          <Title size="4xl" className="mb-[1.75rem]">
            Wifosell - Tất cả những gì bạn cần để quản lý cửa hàng
          </Title>
          <p className="text-center text-zinc-800 text-lg font-normal font-['Mulish'] leading-[1.375rem] tracking-tight mb-[1.75rem]">
            Chúc mừng bạn có 7 ngày dùng thử miễn phí. Nhanh tay đăng ký ngay !
          </p>
          <Button className="mx-auto">Dùng thử miễn phí</Button>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps() {
  const data = await Promise.allSettled([
    strength.list(),
    industry.list(),
    feature.list(),
    customer.list(),
    qa.list(),
  ]);

  let hasErrors = false;
  const results = data.map((result) => {
    if (result.status === "fulfilled") {
      return result.value;
    } else {
      hasErrors = true;
      console.log(result.reason);
    }
  });

  if (hasErrors) {
    return {
      notFound: true, // 404 status code
      // or
      // serverError: true, // 500 status code
    };
  } else {
    // form has errors, do not submit it
    return {
      props: {
        strengthList: results[0],
        industryList: results[1],
        featureList: results[2],
        customerList: results[3],
        qaList: results[4],
      },
    };
  }
}
export default Home;
