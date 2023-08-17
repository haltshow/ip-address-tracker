import { IpInformation } from "@/app/server"

export default function IpDetails({ details } : {details: IpInformation}) {
    return (
        <div className="bg-white text-black rounded-xl gap-4 p-2 
            lg:grid lg:grid-cols-4 lg:h-[150px]
            flex flex-col justify-center items-center h-[450px]"
        >
            <div className="lg:border-r-2 lg:border-gray-400 lg:my-4 my-2 px-4 text-center lg:text-left">
                <p className="text-gray-400 text-[14px] font-medium"> IP ADDRESS  </p>
                <p className="text-[24px] font-medium"> {details?.ip} </p>
            </div>
            <div className="lg:border-r-2 lg:border-gray-400 lg:my-4 my-2 px-4 text-center lg:text-left">
                <p className="text-gray-400 text-[14px] font-medium"> LOCATION </p>
                <p className="text-[24px] font-medium"> {details?.location?.city}, {details?.location?.region} </p>
            </div>
            <div className="lg:border-r-2 lg:border-gray-400 lg:my-4 my-2 px-4 text-center lg:text-left">
                <p className="text-gray-400 text-[14px] font-medium"> TIMEZONE </p>
                <p className="text-[24px] font-medium"> UTC {details?.location?.timezone} </p>
            </div>
            <div className="lg:my-4 px-4 my-2 text-center lg:text-left">
                <p className="text-gray-400 text-[14px] font-medium"> ISP </p>
                <p className="text-[24px] font-medium">  {details.isp} </p>
            </div>
        </div>
    )
}