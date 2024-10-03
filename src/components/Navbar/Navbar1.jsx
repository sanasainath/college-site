import Twitter from "@mui/icons-material/Twitter"
import Facebook from "@mui/icons-material/Facebook"
import Google from "@mui/icons-material/Google"
import YouTube from "@mui/icons-material/YouTube"
import Instagram from "@mui/icons-material/Instagram"

const Navbar1 = () => {
	return (
		<div className="w-[100%] h-[37px] bg-[#211D1E] flex flex-row items-center justify-between px-[70px]">
			<div className="w-auto h-[100%] flex flex-row items-center justify-between gap-[10px]">
				<a href="#">{<Twitter style={{ color: "white", opacity: "0.5" }} />}</a>
				<a href="#">{<Facebook style={{ color: "white", opacity: "0.5" }} />}</a>
				<a href="#">{<Google style={{ color: "white", opacity: "0.5" }} />}</a>
				<a href="#">{<YouTube style={{ color: "white", opacity: "0.5" }} />}</a>
				<a href="#">{<Instagram style={{ color: "white", opacity: "0.5" }} />}</a>
			</div>
			<div className="w-auto h-[100%] flex flex-row items-center justify-between gap-[10px] text-[white] text-[75%]">
				<p className="font-bold">Email: kushmainstitutions09@gmail.com</p>
				<p className="font-bold">0836-2002321 / 22, Mob: 9916197799</p>
			</div>
		</div>
	)
}

export default Navbar1