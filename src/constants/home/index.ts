import type {
  ICustomerItem,
  IFeatureItem,
  IIndustrialItem,
  IProsItem,
} from "@src/types/home";
import prosLogo1 from "@src/assets/icons/home/pros-1.svg";
import prosLogo2 from "@src/assets/icons/home/pros-2.svg";
import prosLogo3 from "@src/assets/icons/home/pros-3.svg";
import industrialLogo1 from "@src/assets/icons/home/industry-1.svg";
import industrialLogo2 from "@src/assets/icons/home/industry-2.svg";
import industrialLogo3 from "@src/assets/icons/home/industry-3.svg";
import industrialLogo4 from "@src/assets/icons/home/industry-4.svg";
import industrialLogo5 from "@src/assets/icons/home/industry-5.svg";
import industrialLogo6 from "@src/assets/icons/home/industry-6.svg";
import industrialLogo7 from "@src/assets/icons/home/industry-7.svg";
import industrialLogo8 from "@src/assets/icons/home/industry-8.svg";
import industrialLogo9 from "@src/assets/icons/home/industry-9.svg";
import industrialLogo10 from "@src/assets/icons/home/industry-10.svg";
import featureLogo1 from "@src/assets/icons/home/features-1.svg";
import featureLogo2 from "@src/assets/icons/home/features-2.svg";
import featureLogo3 from "@src/assets/icons/home/features-3.svg";
import featureLogo4 from "@src/assets/icons/home/features-4.svg";
import googleLogo from "src/assets/logos/google.svg";
import netflixLogo from "src/assets/logos/netflix.svg";

export const PROS_ITEMS: Array<IProsItem> = [
  {
    strengthLogo: prosLogo1,
    strengthTitle: "Đơn giản và dễ sử dụng",
    strengthDescription:
      "Nhân viên bán hàng chỉ mất 15 phút làm quen để bắt đầu bán hàng với Wifosell. Giao diện đơn giản, thân thiện, thông minh giúp bạn triển khai quản lý bán hàng thật dễ dàng và nhanh chóng.",
  },
  {
    strengthLogo: prosLogo2,
    strengthTitle: "Đầy đủ các chức năng cơ bản",
    strengthDescription:
      "Chúng tôi khảo sát, nghiên cứu, thiết kế phần mềm phù hợp cho các ngành hàng phổ biến hiện nay, với các chức năng đi từ cơ bản đến nâng cao, đáp ứng nhu cầu của người sử dụng",
  },
  {
    strengthLogo: prosLogo3,
    strengthTitle: "Tiết kiệm chi phí",
    strengthDescription:
      "Miễn phí cài đặt và phí triển khai, nâng cấp, hỗ trợ. Giá thành hợp lý cho cửa hàng quy mô nhỏ và vừa, tạo điều kiện để bạn có thể áp dụng công nghệ vào quản lý cửa hàng.",
  },
];

export const STRENGTH_IMAGE: string[] = [prosLogo1, prosLogo2, prosLogo3];

export const INDUSTRIAL_ITEMS: Array<IIndustrialItem> = [
  {
    industrialLogo: industrialLogo1,
    industrialDescription: "Thời trang",
  },
  {
    industrialLogo: industrialLogo2,
    industrialDescription: "Mỹ Phẩm",
  },
  {
    industrialLogo: industrialLogo3,
    industrialDescription: "Thực phẩm",
  },
  {
    industrialLogo: industrialLogo4,
    industrialDescription: "Cửa hàng tạp hóa & Siêu thị mini",
  },
  {
    industrialLogo: industrialLogo5,
    industrialDescription: "Mẹ và Bé",
  },
  {
    industrialLogo: industrialLogo6,
    industrialDescription: "Đồ chơi & Quà tặng",
  },
  {
    industrialLogo: industrialLogo7,
    industrialDescription: "Linh kiện & Thiết bị điện tử",
  },
  {
    industrialLogo: industrialLogo8,
    industrialDescription: "Sách & Văn phòng phẩm",
  },
  {
    industrialLogo: industrialLogo9,
    industrialDescription: "Nội thất & Đồ gia dụng",
  },
  {
    industrialLogo: industrialLogo10,
    industrialDescription: "Ngành hàng khác",
  },
];

export const INDUSTRY_IMAGE: string[] = [
  industrialLogo1,
  industrialLogo2,
  industrialLogo3,
  industrialLogo4,
  industrialLogo5,
  industrialLogo6,
  industrialLogo7,
  industrialLogo8,
  industrialLogo9,
  industrialLogo10,
];

export const FEATURE_ITEMS: Array<IFeatureItem> = [
  {
    featureDescription: "Kiểm soát chính xác số lượng mặt hàng trong kho",
    featureHeader: "Quản lý tồn kho",
    featureLogo: featureLogo1,
  },
  {
    featureDescription: "Các đơn hàng đều được quản lý tập trung trên phần mềm",
    featureHeader: "Quản lý đơn hàng",
    featureLogo: featureLogo2,
  },
  {
    featureDescription:
      "Thiết lập giá, số lượng, cách hiển thị của từng sản phẩm",
    featureHeader: "Quản lý sản phẩm",
    featureLogo: featureLogo3,
  },
  {
    featureDescription: "Dễ dàng theo dõi báo cáo doanh thu chi tiết",
    featureHeader: "Báo cáo bán hàng",
    featureLogo: featureLogo4,
  },
];

export const FEATURE_IMAGES: string[] = [
  featureLogo1,
  featureLogo2,
  featureLogo3,
  featureLogo4,
];

export const CUSTOMER_ITEMS: Array<ICustomerItem> = [
  {
    customerBrand: "Google",
    customerLogo: googleLogo,
    customerDescription:
      "Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet.",
    customerRepresentative: "Connie Robertson",
  },
  {
    customerBrand: "Netflix",
    customerLogo: netflixLogo,
    customerDescription:
      "Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet.",
    customerRepresentative: "Connie Robertson",
  },
  {
    customerBrand: "Google",
    customerLogo: googleLogo,
    customerDescription:
      "Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet.",
    customerRepresentative: "Connie Robertson",
  },
  {
    customerBrand: "Netflix",
    customerLogo: netflixLogo,
    customerDescription:
      "Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet.",
    customerRepresentative: "Connie Robertson",
  },
];

export const CUSTOMER_IMAGES: string[] = [
  googleLogo,
  netflixLogo,
  googleLogo,
  netflixLogo,
];
