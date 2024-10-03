import { Divider } from "@mui/material"

const Navbar3 = () => {
	return (
		<div className="w-[100%] h-[40px] bg-[rgba(0,0,0,0.9)] backdrop-blur-[4px] flex flex-row items-center justify-start px-[150px]">
			<div className="w-auto h-[100%] gap-[10px] flex items-center justify-center text-[white]">
				<a className="cursor-pointer" onClick={() => { document.getElementById("home").scrollIntoView() }}>HOME</a>
				<Divider orientation="vertical" style={{ color: "white", backgroundColor: "white" }} />
				<a>ABOUT</a>
				<Divider orientation="vertical" style={{ color: "white", backgroundColor: "white" }} />
				<a>COURSES</a>
				<Divider orientation="vertical" style={{ color: "white", backgroundColor: "white" }} />
				<a>FACILITIES</a>
				<Divider orientation="vertical" style={{ color: "white", backgroundColor: "white" }} />
				<a>GALLERY</a>
				<Divider orientation="vertical" style={{ color: "white", backgroundColor: "white" }} />
				<a>CONTACT US</a>
			</div>
		</div>
	)
}

export default Navbar3