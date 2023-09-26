import type { IProsItem } from "@src/types/home";
import prosLogo1 from "@src/assets/icons/home/pros-1.svg";
import prosLogo2 from "@src/assets/icons/home/pros-2.svg";
import prosLogo3 from "@src/assets/icons/home/pros-3.svg";

export const PROS_ITEMS: Array<IProsItem> = [
  {
    prosLogo: prosLogo1,
    prosHeader: "Đơn giản và dễ sử dụng",
    prosDescription:
      "Nhân viên bán hàng chỉ mất 15 phút làm quen để bắt đầu bán hàng với Wifosell. Giao diện đơn giản, thân thiện, thông minh giúp bạn triển khai quản lý bán hàng thật dễ dàng và nhanh chóng.",
  },
  {
    prosLogo: prosLogo2,
    prosHeader: "Đầy đủ các chức năng cơ bản",
    prosDescription:
      "Chúng tôi khảo sát, nghiên cứu, thiết kế phần mềm phù hợp cho các ngành hàng phổ biến hiện nay, với các chức năng đi từ cơ bản đến nâng cao, đáp ứng nhu cầu của người sử dụng",
  },
  {
    prosLogo: prosLogo3,
    prosHeader: "Tiết kiệm chi phí",
    prosDescription:
      "Miễn phí cài đặt và phí triển khai, nâng cấp, hỗ trợ. Giá thành hợp lý cho cửa hàng quy mô nhỏ và vừa, tạo điều kiện để bạn có thể áp dụng công nghệ vào quản lý cửa hàng.",
  },
];
