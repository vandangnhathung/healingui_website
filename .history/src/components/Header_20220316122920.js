import React from "react";
import styled from "styled-components";
const Header = () => {
  const StyledHeader = styled.div`
    background-color: #222120;
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");
    font-family: "DM Sans", sans-serif;
  `;
  const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 168px;
  `;
  const ListNav = styled.div`
    color: #faf5ef;
    opacity: 0.4;
    font-weight: 400;
    font-size: 18px;
    line-height: 0.6;
  `;
  return (
    <StyledHeader>
      <Header>
        <div>
          <svg
            width="97"
            height="61"
            viewBox="0 0 97 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.241098 20.6943L1.38631 20.9951C5.56534 20.9951 8.05669 20.9349 8.86035 20.8146C11.1106 15.6009 13.8832 10.1667 17.1782 4.51183C17.4595 4.23109 18.1426 4.09073 19.2276 4.09073C20.3125 4.09073 20.855 4.35141 20.855 4.87278L17.9618 9.50493C15.5508 13.5957 13.5618 17.3254 11.9946 20.6943L21.9399 20.213C23.4267 20.1328 25.5162 19.8922 28.2085 19.4911C29.856 16.2827 31.6039 13.2147 33.4523 10.287C35.3008 7.3192 36.4661 5.8353 36.9483 5.8353C37.4305 5.8353 37.9327 5.95562 38.4551 6.19625C39.0177 6.39678 39.299 6.61736 39.299 6.85799C38.8569 7.45956 38.3547 8.14135 37.7921 8.90335C37.2697 9.66535 36.7272 10.4274 36.1647 11.1893C30.1372 19.2104 27.1235 25.1861 27.1235 29.1164C27.1235 30.9211 27.8468 31.8235 29.2934 31.8235L31.3427 31.5227C31.4633 31.5227 31.5236 31.5628 31.5236 31.643C31.5236 31.8435 31.1619 32.0641 30.4386 32.3047C29.7153 32.5855 29.1528 32.7258 28.7509 32.7258C27.8267 32.7258 27.0632 32.3248 26.4605 31.5227C25.8979 30.7206 25.6167 29.7179 25.6167 28.5148C25.6167 26.2288 26.2998 23.6621 27.666 20.8146C21.1563 22.3787 15.5508 23.1607 10.8494 23.1607C7.91605 29.6177 6.44937 34.4303 6.44937 37.5986C6.44937 38.5611 6.56992 39.263 6.81102 39.7041C7.05211 40.1453 7.17266 40.406 7.17266 40.4862C7.17266 40.5664 7.07221 40.6065 6.87129 40.6065C5.4247 40.6065 4.70141 39.1026 4.70141 36.0947C4.70141 33.0868 5.74617 28.8757 7.83568 23.4615C5.50507 23.622 3.87766 23.7022 2.95345 23.7022C0.984483 23.7022 0 22.7597 0 20.8748C0 20.7544 0.0803659 20.6943 0.241098 20.6943Z"
              fill="#FAF5EF"
            />
            <path
              d="M46.2833 24.1834C46.5244 24.1834 46.6449 24.2837 46.6449 24.4842C46.6449 24.6446 46.6047 24.8051 46.5244 24.9655C42.3052 31.1016 38.8092 34.1696 36.0366 34.1696C32.6211 34.1696 30.9133 32.5855 30.9133 29.4172C30.9133 26.9707 32.1188 24.003 34.5297 20.5138C36.9809 17.0247 39.3517 15.2801 41.6421 15.2801C42.6065 15.2801 43.4504 15.6009 44.1737 16.2426C44.9371 16.8442 45.3189 17.5861 45.3189 18.4684C45.3189 19.9924 44.3746 21.4964 42.486 22.9803C40.5974 24.4642 38.7691 25.2061 37.001 25.2061C36.6394 25.2061 36.4585 25.1259 36.4585 24.9655L36.6394 24.6647C41.2604 23.2209 43.5709 20.8547 43.5709 17.5661C43.5709 17.0848 43.4102 16.8442 43.0887 16.8442C42.6065 16.8442 41.8029 17.3054 40.6777 18.2278C38.7088 19.832 37.001 21.8373 35.5544 24.2436C34.1078 26.6499 33.3845 28.6752 33.3845 30.3195C33.3845 31.9638 34.0074 32.786 35.253 32.786C36.6594 32.786 38.2467 32.044 40.0147 30.5602C41.1398 29.5174 42.4458 28.1939 43.9326 26.5897C45.4595 24.9855 46.2431 24.1834 46.2833 24.1834Z"
              fill="#FAF5EF"
            />
            <path
              d="M49.0196 33.0868L49.984 32.786C50.1849 32.786 50.2854 32.8863 50.2854 33.0868C50.2854 33.7285 49.5822 34.0493 48.1758 34.0493C46.247 34.0493 45.2826 32.4451 45.2826 29.2367C45.2826 27.1111 45.9255 23.7423 47.2114 19.1302C48.4973 14.478 50.1247 10.1266 52.0936 6.07593C54.0626 2.02531 55.8307 0 57.3978 0C58.2818 0 59.1658 0.300787 60.0499 0.902364C60.9339 1.46384 61.3759 2.08547 61.3759 2.76726C61.3759 5.65483 57.1165 12.0717 48.5977 22.0177C47.9146 24.9855 47.573 27.5723 47.573 29.7781C47.573 31.9839 48.0552 33.0868 49.0196 33.0868ZM59.9293 2.58678C59.9293 2.10552 59.7887 1.86489 59.5074 1.86489C58.3019 1.86489 56.5539 4.01052 54.2635 8.30177C51.9731 12.5529 50.2251 16.6035 49.0196 20.4536C56.2928 10.9487 59.9293 4.9931 59.9293 2.58678Z"
              fill="#FAF5EF"
            />
            <path
              d="M64.165 6.73767C64.2454 6.73767 64.2856 6.83793 64.2856 7.03846L63.9842 8.78304C63.3814 11.2696 62.4572 12.5128 61.2116 12.5128C60.2873 12.5128 59.5641 12.2722 59.0417 11.7909C60.5686 10.7482 62.2764 9.06377 64.165 6.73767ZM61.0307 16.6035C59.7851 18.7291 58.5997 21.4362 57.4745 24.7248C56.3494 27.9734 55.7869 30.2193 55.7869 31.4625C55.7869 32.7058 56.048 33.3274 56.5704 33.3274C56.9321 33.3274 57.3942 33.1068 57.9567 32.6657C58.5193 32.2245 58.8609 31.9438 58.9814 31.8235C59.102 31.7032 59.2426 31.5828 59.4033 31.4625C59.5641 31.4625 59.6444 31.5427 59.6444 31.7032C59.6444 32.1844 59.0618 32.7459 57.8965 33.3876C56.7713 34.0694 55.9476 34.4103 55.4252 34.4103C53.8983 34.4103 53.1348 33.3074 53.1348 31.1016C53.1348 27.8129 54.3403 23.4214 56.7512 17.927C56.7512 17.7666 56.8517 17.4658 57.0526 17.0247C57.2937 16.5835 57.4745 16.3028 57.5951 16.1824C57.8764 15.9017 58.2581 15.7613 58.7403 15.7613C60.1467 15.7613 60.9102 16.0421 61.0307 16.6035Z"
              fill="#FAF5EF"
            />
            <path
              d="M78.0084 16.3629C78.0084 16.2025 77.9079 16.3028 77.707 16.6637C76.5819 18.7091 75.5773 21.1755 74.6933 24.0631C73.8092 26.9507 73.3672 28.8356 73.3672 29.7179C73.3672 32.1644 73.8092 33.3876 74.6933 33.3876C74.9745 33.3876 75.3362 33.187 75.7782 32.786C76.2604 32.425 76.4613 32.2446 76.381 32.2446C76.5015 32.2446 76.5618 32.405 76.5618 32.7258C76.5618 33.7686 75.959 34.2899 74.7535 34.2899C73.548 34.2899 72.6238 33.7485 71.9809 32.6657C71.338 31.6229 71.0165 30.119 71.0165 28.1538C71.0165 26.1887 71.5389 23.6019 72.5837 20.3935C73.6284 17.145 74.633 15.5207 75.5974 15.5207H75.8988C77.3052 15.5207 78.0084 15.8014 78.0084 16.3629ZM73.307 16.9645C73.3471 17.0046 73.3672 17.0848 73.3672 17.2051C73.3672 17.2853 73.2065 17.526 72.885 17.927C68.5453 23.1808 65.5315 27.6726 63.8439 31.4024L63.3014 32.9665C63.0603 33.4076 62.7589 33.6282 62.3973 33.6282C62.0356 33.6282 61.6338 33.5279 61.1918 33.3274C60.7498 33.1269 60.5288 32.8863 60.5288 32.6055C60.5288 31.9237 61.1918 29.5174 62.5178 25.3866C63.8439 21.2156 64.5069 18.0874 64.5069 16.002C64.5069 15.4405 64.3662 15.0996 64.085 14.9793C63.8037 14.859 63.5224 14.8189 63.2411 14.859C62.9598 14.859 62.8192 14.7587 62.8192 14.5582C62.8192 14.1972 63.1206 14.0168 63.7233 14.0168C66.4156 14.0168 67.7617 15.1197 67.7617 17.3254C67.7617 18.1676 66.7973 21.4362 64.8685 27.1312C66.6366 24.3639 68.3444 21.9776 69.9919 19.9724C71.6394 17.9671 72.7444 16.9645 73.307 16.9645Z"
              fill="#FAF5EF"
            />
            <path
              d="M86.7293 30.3797C87.3321 31.5026 87.6334 33.0066 87.6334 34.8915C87.6334 35.2926 87.6134 35.6736 87.5732 36.0345C89.2207 36.7163 90.5869 37.5986 91.6718 38.6815C92.797 39.7643 93.3595 40.787 93.3595 41.7495C93.3595 42.7521 93.1184 43.2534 92.6362 43.2534C92.5157 43.2534 92.4152 43.1331 92.3349 42.8925C92.6563 42.4513 92.817 42.0302 92.817 41.6292C92.817 40.787 92.2746 39.9448 91.1896 39.1026C90.1047 38.2604 88.9193 37.6387 87.6334 37.2377C87.1512 41.3685 85.6042 45.2587 82.9923 48.9083C80.4206 52.598 77.1658 55.5256 73.2278 57.6913C69.2899 59.8971 65.2515 61 61.1127 61C58.2999 61 55.9692 60.2179 54.1208 58.6538C52.2322 57.0897 51.2879 54.9241 51.2879 52.1568C51.2879 49.4296 52.835 46.6824 55.9291 43.9152C59.0232 41.188 62.8606 39.0223 67.4415 37.4181C71.9822 35.8139 76.4425 35.0118 80.8224 35.0118C82.8718 35.0118 84.6197 35.1923 86.0663 35.5533C86.227 35.072 86.3074 34.6308 86.3074 34.2298C86.3074 32.8662 86.1467 31.9037 85.8252 31.3422C84.2581 32.786 82.8316 33.5079 81.5457 33.5079C80.2599 33.5079 79.1347 32.8863 78.1704 31.643C77.206 30.3997 76.7238 29.0763 76.7238 27.6726C76.7238 24.8652 78.2708 21.9576 81.3649 18.9497C81.3649 16.6637 81.606 15.1197 82.0882 14.3176C82.6106 13.5154 83.5549 13.1144 84.9211 13.1144C86.3275 13.1144 87.8545 14.4379 89.502 17.0848C92.3951 17.6062 93.8417 18.669 93.8417 20.2732C93.8417 20.6341 93.7212 21.0151 93.4801 21.4162C93.2792 21.7771 93.0581 21.9576 92.817 21.9576C92.5759 21.9576 92.4554 21.8774 92.4554 21.717C92.8572 21.4362 93.0581 21.1154 93.0581 20.7544C93.0581 19.5513 92.0938 18.9497 90.165 18.9497C90.2052 19.2705 90.2253 19.6916 90.2253 20.213C90.2253 24.0631 89.0599 27.452 86.7293 30.3797ZM86.6691 16.784C86.1065 15.4605 85.2627 14.7988 84.1375 14.7988C83.0124 14.7988 82.4498 15.8817 82.4498 18.0473V18.1075C83.7759 17.2252 85.0216 16.784 86.1869 16.784H86.6691ZM88.2362 22.0177C88.2362 20.8948 88.0554 19.8922 87.6937 19.0099C87.0106 19.2505 86.0261 19.7117 84.7403 20.3935C83.4946 21.0352 82.8718 21.4964 82.8718 21.7771C82.8718 22.098 83.9366 24.4842 86.0663 28.9359C87.5129 26.8504 88.2362 24.5444 88.2362 22.0177ZM79.0745 29.6578C79.0745 31.7433 79.8781 32.786 81.4854 32.786C82.8918 32.786 84.2179 31.8034 85.4636 29.8383L82.3293 22.3787C81.4854 23.2209 80.722 24.3639 80.0389 25.8077C79.3959 27.2515 79.0745 28.5348 79.0745 29.6578ZM81.8471 36.5759C78.0297 36.5759 74.2726 37.0572 70.5758 38.0197C66.8789 39.0224 63.7246 40.2656 61.1127 41.7495C58.5008 43.2735 56.3912 44.9379 54.7838 46.7426C53.1765 48.5473 52.3729 50.3721 52.3729 52.217C52.3729 54.1019 53.0962 55.6058 54.5428 56.7288C55.9492 57.8918 57.9382 58.4734 60.5099 58.4734C66.0552 58.4734 71.3192 56.2676 76.3018 51.856C81.2443 47.4845 84.4188 42.4914 85.8252 36.8767C84.8608 36.6762 83.5348 36.5759 81.8471 36.5759Z"
              fill="#FAF5EF"
            />
            <path
              d="M95.1315 30.5C95.6137 30.5 96.0356 30.6604 96.3973 30.9813C96.7991 31.262 97 31.5828 97 31.9438C97 32.3448 96.7991 32.6857 96.3973 32.9665C96.0356 33.2472 95.674 33.3876 95.3123 33.3876C94.0265 33.3876 93.3835 32.8462 93.3835 31.7633C93.3835 30.9211 93.9662 30.5 95.1315 30.5Z"
              fill="#FAF5EF"
            />
          </svg>
        </div>
        <ListNav>
          <li>Home</li>
          <li>Projects</li>
          <li>Designers</li>
          <li>Articles</li>
        </ListNav>
        <h3>Contact</h3>
      </Header>
    </StyledHeader>
  );
};

export default Header;
