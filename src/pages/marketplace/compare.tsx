import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Styles from "../../../styles/Home.module.css";
import CompareStyles from "../../../styles/Compare.module.css";
import Swipe, { Switem } from "../../components/Swipe";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Link from "next/link";
import { PdfDocument } from "./pdfgenerator/product";

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
  const CompareDom = compareGoods.map((item:any, index) => (
    <div
      className={CompareStyles["compare-page-goods-box-single"]}
      key={`key${index}`}
    >
      <div className={CompareStyles["goods-top-box"]}>
        <div className={CompareStyles["goods-name"]}>{item.mallName}</div>
        <div className={CompareStyles["goods-desc-box"]}>
          {item.mallProducts?item.mallProducts.map((descItem:any, descIndex:number) => (
            <div
              className="border-b-2 border-[#FFFFFF] rounded-tl-lg rounded-tr-lg p-2 flex justify-between items-center max-w-[95%]"
              key={`descKey${descIndex}`}
            >
              <Link
                href={`/products/${descItem.id}`}
                key={descItem.id}
                className={CompareStyles["goods-desc-key"]}
              >
                - {descItem.name}
              </Link>
              <div>1x</div>
            </div>
          )):''}
        </div>
      </div>
      <PDFDownloadLink
          document={<PdfDocument allPrice={item.allPrice} goods={item.mallProducts} storeName={item.mallName} />}
          fileName="shopping-list.pdf"
      >
        {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : <div
                className={CompareStyles["goods-price"]}
                style={{
                  width: "100px",
                  padding: "2px 10px",
                  textAlign: "center",
                  color: item.isLow ? "#ff7676" : "white",
                  backgroundColor: item.isLow ? "rgb(59 130 246 / 0.5)" : "#777575",
                }}
            >
              €{item.allPrice}
            </div>
        }
      </PDFDownloadLink>

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
  const router = useRouter();
  console.log(router);
  React.useEffect(() => {
    if (router.query.id) {
      fetch(`http://localhost:3022/mallById?id=${router.query.id}`)
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          let serverData = result && result[0] && result[0].mallData && result[0].mallData || [];
          let minPrice = Math.min.apply(
            null,
            serverData.map((item:any) => item.mallAllPrice)
          );
          let useData = serverData.map((item:any) => ({
            ...item,
            isLow: item.mallAllPrice === minPrice,
          }));
          let endData = useData.map((item:any) => ({ ...item, goods: item.mallData }));
          setCompareGoods(endData);
        });
    }
  }, [router]);
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
          <Link href="/marketplace">
            <div className={CompareStyles["compare-page-exit"]}>Exit</div>
          </Link>
          <div className={CompareStyles["compare-page-wrap"]}>{CompareDom}</div>
          <div className={CompareStyles["compare-other-goods"]}>
            <Swipe
              swipeData={swipe}
              currentIndex={currentIndex}
              leftArrowClick={leftArrowClick}
              rightArrowClick={rightArrowClick}
            />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}