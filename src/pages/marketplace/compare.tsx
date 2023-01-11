import React from "react";
import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Styles from "../../../styles/Home.module.css";
import CompareStyles from "../../../styles/Compare.module.css";
import Swipe,{Switem} from '../../components/Swipe';
type CompareGoodsType = {
  goodsName: string;
  goodsDesc: string[];
  goodsPrice: number;
};
export default function Compare() {
  const [compareGoods, setCompareGoods] = React.useState<
    Array<CompareGoodsType>
  >([
    {
      goodsName: "ALBERT HEIJN",
      goodsDesc: [
        "Hummus Natural ",
        "VENCO Drop",
        "Roamboter Stroapwafels",
        "Natural Chips",
      ],
      goodsPrice: 11.74,
    },
    {
      goodsName: "JUMBO",
      goodsDesc: [
        "Hummus Natural ",
        "VENCO Drop",
        "Roamboter Stroapwafels",
        "Natural Chips",
      ],
      goodsPrice: 9.75,
    },
    {
      goodsName: "LOCAL SHOP",
      goodsDesc: [
        "Hummus Natural ",
        "VENCO Drop",
        "Roamboter Stroapwafels",
        "Natural Chips",
      ],
      goodsPrice: 9.38,
    },
  ]);
  const [swipe, setSwipe] = React.useState<Switem[]>([
    {
      src: "https://images.pexels.com/photos/942320/pexels-photo-942320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      isShow: true,
    },
    {
      src: "https://images.pexels.com/photos/358167/pexels-photo-358167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      isShow: true,
    },
    {
      src: "https://images.pexels.com/photos/426862/pexels-photo-426862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      isShow: true,
    },
    {
      src: "https://images.pexels.com/photos/5782535/pexels-photo-5782535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      isShow: true,
    },
    {
      src: "https://images.pexels.com/photos/4662018/pexels-photo-4662018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      isShow: true,
    },
    {
      src: "https://images.pexels.com/photos/4662046/pexels-photo-4662046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      isShow: true,
    },
    {
      src: "https://images.pexels.com/photos/867452/pexels-photo-867452.jpeg?auto=compress&cs=tinysrgb&w=1600",
      isShow: true,
    },
    {
      src: "https://images.pexels.com/photos/11570705/pexels-photo-11570705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      isShow: true,
    },
  ]);
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const CompareDom = compareGoods.map((item, index) => (
    <div
      className={CompareStyles["compare-page-goods-box-single"]}
      key={`key${index}`}
    >
      <div className={CompareStyles["goods-top-box"]}>
        <div className={CompareStyles["goods-name"]}>{item.goodsName}</div>
        <div className={CompareStyles["goods-desc-box"]}>
          {item.goodsDesc.map((descItem, descIndex) => (
            <div
              className={CompareStyles["goods-desc"]}
              key={`descKey${descIndex}`}
            >
              <div className={CompareStyles["goods-desc-key"]}>{descItem}</div>
              <div>1x</div>
            </div>
          ))}
        </div>
      </div>
      <div className={CompareStyles["goods-price"]}>${item.goodsPrice}</div>
    </div>
  ));
  const leftArrowClick = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(currentIndex);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const rightArrowClick = () => {
    if (currentIndex >= swipe.length - 1) {
      setCurrentIndex(swipe.length - 1);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <>
      <Head>
        <title>Evercheap</title>
        <meta name="description" content="Evercheap" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-tertiary isolate">
        <Header />
        <main className={`${Styles.main} ${CompareStyles["compare-page-box"]}`}>
          <div className={CompareStyles["compare-page-exit"]}>Exit</div>
          <div className={CompareStyles["compare-page-wrap"]}>{CompareDom}</div>  
          <div className={CompareStyles["compare-other-goods"]}>
            <Swipe swipeData={swipe} currentIndex={currentIndex} leftArrowClick={leftArrowClick} rightArrowClick={rightArrowClick} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
