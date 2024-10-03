import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Carousal = () => {
	return (
		<div className="w-[100%] h-[500px]">
			<Swiper
				modules={[Autoplay, Pagination, EffectFade]}
				autoplay={{ delay: 2500, disableOnInteraction: false }}
				effect="fade"
				slidesPerView={1}
				pagination={{ clickable: true }}
				loop={true} // Enable infinite loop
				speed={2000}
				style={{ width: "100%", height: "100%" }}
			>
				<SwiperSlide>
					<div className="w-[100%] h-[100%] flex items-center justify-center border">
						<img src="images/infinimove/1.JPG" className="" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="w-[100%] h-[100%] flex items-center justify-center border">
						<img src="images/infinimove/2.JPG" className="" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="w-[100%] h-[100%] flex items-center justify-center border">
						<img src="images/infinimove/3.JPG" className="" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="w-[100%] h-[100%] flex items-center justify-center border">
						<img src="images/infinimove/4.JPG" className="" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="w-[100%] h-[100%] flex items-center justify-center border">
						<img src="images/infinimove/5.JPG" className="" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="w-[100%] h-[100%] flex items-center justify-center border">
						<img src="images/infinimove/6.JPG" className="" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="w-[100%] h-[100%] flex items-center justify-center border">
						<img src="images/infinimove/7.JPG" className="" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="w-[100%] h-[100%] flex items-center justify-center border">
						<img src="images/infinimove/8.JPG" className="" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="w-[100%] h-[100%] flex items-center justify-center border">
						<img src="images/infinimove/9.JPG" className="" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="w-[100%] h-[100%] flex items-center justify-center border">
						<img src="images/infinimove/10.JPG" className="" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="w-[100%] h-[100%] flex items-center justify-center border">
						<img src="images/infinimove/11.JPG" className="" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="w-[100%] h-[100%] flex items-center justify-center border">
						<img src="images/infinimove/13.JPG" className="" />
					</div>
				</SwiperSlide>


			</Swiper>
		</div >
	)
}

export default Carousal