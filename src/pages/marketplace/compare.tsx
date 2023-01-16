import React from "react";
import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Styles from "../../../styles/Home.module.css";
import CompareStyles from "../../../styles/Compare.module.css";
import Swipe, { Switem } from '../../components/Swipe';
type Product = {
  id: number;
  name: string;
  deal: boolean;
};
type CompareGoodsType = {
  storeName: string;
  goods: Product[];
  allPrice: number;
  isLow?: boolean;
};

const SHAPPING_CAR_KEY = "SHAPPING_CAR_KEY";
export default function Compare() {
  const [compareGoods, setCompareGoods] = React.useState<
    Array<CompareGoodsType>
  >([]);
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
        <div className={CompareStyles["goods-name"]}>{item.storeName}</div>
        <div className={CompareStyles["goods-desc-box"]}>
          {item.goods.map((descItem, descIndex) => (
            <div
              className={CompareStyles["goods-desc"]}
              key={`descKey${descIndex}`}
            >
              <div className={CompareStyles["goods-desc-key"]}>{descItem.name}</div>
              <div>1x</div>
            </div>
          ))}
        </div>
      </div>
      <div className={CompareStyles["goods-price"]} style={{ color: item.isLow ? "#ff7676" : "white", backgroundColor: item.isLow ? "rgb(59 130 246 / 0.5)" : "#777575" }}>€{item.allPrice}</div>
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
  React.useEffect(() => {
    const allStoreData = [{storeName:"ALBERT HEIJN",goods:[],allPrice:11.70},{storeName:"JUMBO",goods:[],allPrice:9.75},{storeName:"LOCAL SHOP",goods:[],allPrice:9.38}];
    const shoppingData = JSON.parse(window.localStorage.getItem(SHAPPING_CAR_KEY) || "[]") ||[];
    let minPrice = Math.min.apply(null, allStoreData.map((item) => item.allPrice));
    let useData = allStoreData.map((item) => ({ ...item, isLow: item.allPrice === minPrice }));
    setCompareGoods(useData.map((item)=>({...item,goods:shoppingData})));
  }, [])
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
