import React, { useRef, useState } from 'react';
import styles from './Plays.module.scss';
import spurs from '../../assets/images/plays/spurs.mp4';
import pistons from '../../assets/images/plays/pistons.mp4';
import okc from '../../assets/images/plays/okc.mp4';
import lamelo from '../../assets/images/plays/lamelo.mp4';
import blazers from '../../assets/images/plays/blazers.mp4';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { motion } from 'framer-motion';
import { Trans, useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation } from 'swiper/modules';

const Plays = () => {
    const { t } = useTranslation();
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const videoRefs = useRef([]);

    const [playVideo, setPlayVideo] = useState(Array(5).fill(false));
    const [endVideo, setEndVideo] = useState(Array(5).fill(false));
    const videos = [spurs, okc, pistons, lamelo, blazers];
    const [activeVideo, setActiveVideo] = useState(0);

    const togglePlayVideo = (index) => {
        const video = videoRefs.current[index];
        if (!video) return;

        if (video.paused) {
            video.play();
            setPlayVideo((prev) => prev.map((val, i) => (i === index ? true : val)));
            setEndVideo((prev) => prev.map((val, i) => (i === index ? false : val)));
        } else {
            video.pause();
            setPlayVideo((prev) => prev.map((val, i) => (i === index ? false : val)));
        }
    };

    const restartVideo = (index) => {
        const video = videoRefs.current[index];
        if (!video) return;

        video.currentTime = 0;
        video.play();
        setEndVideo((prev) => prev.map((val, i) => (i === index ? false : val)));
        setPlayVideo((prev) => prev.map((val, i) => (i === index ? true : val)));
    };

    const handleVideoEnd = (index) => {
        restartVideo(index);
    };

    return (
        <motion.section  id="plays" className={styles.plays} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className={styles.playsContent}>
                <motion.div className={styles.playsContent__text} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <h1>{t('plays.title')}</h1>
                <h2><Trans i18nKey="plays.subtitle" components={[<br/>]}/></h2>
                <p><Trans i18nKey="plays.description" components={[<br/>]}/></p>
                </motion.div>

                <motion.div className={styles.playsContent__plays}>
                    <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} loop={true} slidesPerView={3} coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }} navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }} modules={[EffectCoverflow, Navigation]}className={styles.swiper__container} onSlideChange={(swiper) => {
                        const newActiveVideo = swiper.realIndex;

                        videoRefs.current.forEach((video, index) => {
                            if (video && index !== newActiveVideo && !video.paused) {
                                video.pause();
                                setPlayVideo((prev) => prev.map((val, i) => (i === index ? false : val)));
                            }
                        });

                        const newVideo = videoRefs.current[newActiveVideo];

                        if (newVideo && newVideo.paused && !endVideo[newActiveVideo]) {
                            newVideo.play();
                            setPlayVideo((prev) => prev.map((val, i) => (i === newActiveVideo ? true : val)));
                        }
                            setActiveVideo(newActiveVideo);
                        }}

                        onSwiper={(swiper) => { setTimeout(() => { 
                            swiper.params.navigation.prevEl = prevRef.current; 
                            swiper.params.navigation.nextEl = nextRef.current; 
                            swiper.navigation.init(); 
                            swiper.navigation.update()
                            })}}>
                        {videos.map((videoSrc, index) => (
                            <SwiperSlide key={index}>
                                <div className={styles.playContent__wrapper}>
                                    <video className={styles.playContent__wrapper__video} ref={(el) => (videoRefs.current[index] = el)} onEnded={() => handleVideoEnd(index)} onClick={() => togglePlayVideo(index)}>
                                        <source src={videoSrc} type="video/mp4"/>
                                    </video>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                        <div className={styles.slider__controller}>
                            <div ref={prevRef} className={styles.btnPrev}><MdKeyboardArrowLeft /></div>
                            <div ref={nextRef} className={styles.btnNext}><MdKeyboardArrowRight /></div>
                            <div className={styles.swiperPagination}></div>
                        </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Plays;