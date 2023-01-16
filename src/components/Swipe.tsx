/* eslint-disable @next/next/no-img-element */
import React, { ReactEventHandler } from "react";
import SwipeStyle from "../../styles/Swipe.module.css";
export type Switem = {
  src: string;
  isShow: boolean;
};

export type SwipeProps = {
    rightArrowClick:ReactEventHandler;
    leftArrowClick:ReactEventHandler;
    currentIndex:number;
    swipeData:Switem [];
    children?:React.ReactElement

}
export default function Swipe(props:SwipeProps) {
  return (
    <div className={SwipeStyle["swipe-box"]}>
      <div className={SwipeStyle["swipe-title"]}>DAILY DEALS</div>
      <div className={SwipeStyle["swipe-item-box"]}>
        {/* <div className={SwipeStyle["swipe-item-left-arrow"]}></div> */}
        <svg
          className={SwipeStyle["swipe-item-left-arrow"]}
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2672"
          width="200"
          height="200"
          onClick={props.leftArrowClick}
        >
          <path
            fill="white"
            d="M210.4 511.1 641.3 80.2c22.8-22.8 59.8-22.8 82.6 0 22.8 22.8 22.8 59.8 0 82.6L375.7 511.1l348.3 348.3c22.8 22.8 22.8 59.8 0 82.6-22.8 22.8-59.8 22.8-82.6 0L210.4 511.1 210.4 511.1zM210.4 511.1"
            p-id="2673"
          ></path>
        </svg>
        <div className={SwipeStyle["swipe-item-inside-box-wrap"]}>
            <div className={SwipeStyle["swipe-item-inside-box"]}>
            {props.swipeData.map((item:Switem, index:number) => {
                return (
                <div
                    className={`${SwipeStyle["swipe-item"]} ${
                    index === props.currentIndex ? SwipeStyle["big-level-1"] : ""
                    } ${
                    index === props.currentIndex - 1 || index === props.currentIndex + 1
                        ? SwipeStyle["big-level-2"]
                        : ""
                    }`}
                    key={`key${index}`}
                    style={{
                    display:
                        index >= props.currentIndex - 2 && index <= props.currentIndex + 2
                        ? "flex"
                        : "none",
                    }}
                >
                    <img src={item.src} alt="" />
                    <div className={SwipeStyle["swipe-item-view"]}>View</div>
                </div>
                );
            })}
            </div>
            <div className={SwipeStyle["swipe-item-circ-box"]}>
                {props.swipeData.map((item:Switem,index:number)=>{
                    return (<div className={`${SwipeStyle["swipe-item-circ"]} ${index === props.currentIndex ? SwipeStyle["selected"]:''}`} key={`key${index}`}></div>)

                })}
            </div>
        </div>
        <svg
          className={SwipeStyle["swipe-item-right-arrow"]}
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2672"
          width="200"
          height="200"
          onClick={props.rightArrowClick}
        >
          <path
            fill="white"
            d="M210.4 511.1 641.3 80.2c22.8-22.8 59.8-22.8 82.6 0 22.8 22.8 22.8 59.8 0 82.6L375.7 511.1l348.3 348.3c22.8 22.8 22.8 59.8 0 82.6-22.8 22.8-59.8 22.8-82.6 0L210.4 511.1 210.4 511.1zM210.4 511.1"
            p-id="2673"
          ></path>
        </svg>
      </div>
    </div>
  );
}
