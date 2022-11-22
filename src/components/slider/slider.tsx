import { SliderProps } from "./slider.props";
import styles from './slider.module.scss';
import cn from 'classnames';
import { useState } from "react";
import  Arrow from './arrow.svg';

const FADE_DURATION = 330;

export const Slider = ({reviews}: SliderProps) => {
    const [slide, setSlide] = useState<number>(0);
    const [fadeState, setFadeState] = useState<'fade-in' | 'fade-out'> ('fade-in');
    const [currentTimer, setCurrentTimer]= useState<NodeJS.Timeout>();

    const handlerClick = (move:number) => {
        const timer = setTimeout(() => {
            setSlide(s => s + move);
            setFadeState('fade-in');
        }, FADE_DURATION);
        clearTimeout(currentTimer);
        setFadeState ('fade-out');
        setCurrentTimer(timer);
    };


    return <div className= {styles.slider}>
        <div className= {cn(styles.slide, styles[fadeState])}
        style={{transitionDuration: `${FADE_DURATION}ms`}}
        >
            <div className= {styles.left}>
                <div className= {styles.text}>{reviews[slide].text}</div>
                <div className= {styles.name}>{reviews[slide].name}</div>
                <div className= {styles.jobPosition}>{reviews[slide].jobPosition}</div>
            </div>
            <div className= {styles.right} style={{backgroundImage: `url(${reviews[slide].image})` }} ></div>
        </div>
        {slide > 0 && (
        <button className= {cn(styles.arrow, styles.arrowLeft)} 
        onClick={() => handlerClick(-1)}>
        <img src={Arrow} alt="Arrow" />
            </button>)}
           {slide <reviews.length - 1 &&(
           <button className= {cn(styles.arrow, styles.arrowRight)} 
           onClick={() => handlerClick(1)}>
            <img src={Arrow} alt="Arrow" />
            </button>)}
    </div>
}