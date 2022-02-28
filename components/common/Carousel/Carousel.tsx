import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "../../../styles/globals.css";

// import required modules
import { Pagination } from "swiper";
import { Section } from "./styles";

const Carousel = () => {
	return (
		<Section>
			<Swiper
				scrollbar={{ draggable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log("slide change")}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className="mySwiper"
			>
				<SwiperSlide>
					<img
						height={350}
						width={550}
						src={
							"https://mir-s3-cdn-cf.behance.net/project_modules/fs/e00581138253807.621998f6c9fff.png"
						}
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						height={350}
						width={550}
						src={
							"https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/c010fd133177789.61c95d7a0f822.jpg"
						}
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						height={350}
						width={550}
						src={
							"https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/a9d410133177789.61ca81d34da42.jpg"
						}
						alt=""
					/>
				</SwiperSlide>
			</Swiper>
		</Section>
	);
};

export default Carousel;
