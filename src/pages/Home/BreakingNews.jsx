import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex bg-[#F3F3F3] p-4 font-semibold mt-5">
            <button className="btn text-white rounded-none px-6 bg-[#D72050] text-lg">Latest</button>
            <Marquee pauseOnHover={true} speed={120}>
                <Link to='/' className="mr-12">I can be a React component, multiple React components.....</Link>
                <Link to='/' className="mr-12 ">I can be a React component, multiple React components.....</Link>
                <Link to='/' className="mr-12">I can be a React component, multiple React components.....</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;