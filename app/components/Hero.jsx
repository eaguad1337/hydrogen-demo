import React from "react";
import Slider from "react-slick";
import { Image } from '@shopify/hydrogen';

export function Hero() {
    let settings = {
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000
    }
    return (
        <div className="hero">
            <Slider {...settings} className="home-slider">
                <div className="slide">
                    <h2 class="title mb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Lorem ipsum dolor sit<span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600"> accusamus eum</span></h2>
                    <a href="#" className="link text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-10 py-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Ver más</a>
                </div>
                <div className="slide">
                    <h2 class="title mb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Lorem ipsum dolor sit<span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600"> accusamus eum</span></h2>
                    <div className="flex gap-4">
                        <a href="#" className="link blue text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-10 py-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Ver más</a>
                        <a href="#" className="link px-10 py-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Contacto</a>
                    </div>
                </div>
                <div className="slide">
                    <h2 class="title mb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Lorem ipsum dolor sit<span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600"> accusamus eum</span></h2>
                    <a href="#" className="link text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-10 py-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Ver más</a>
                </div>
            </Slider>
        </div>
    )
}