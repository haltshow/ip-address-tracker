import { IpInformation } from "@/app/server"

export default function IpDetails({ details } : {details: IpInformation}) {
    return (
        <div className="bg-white text-black grid grid-cols-4 rounded-lg gap-4 p-4">
            <div className="border-r-2 border-gray-400 my-4 px-4">
                <p className="text-gray-400 text-[13px]"> <b> IP ADDRESS </b> </p>
                <p className="text-[20px]"> <b> {details?.ip} </b> </p>
            </div>
            <div className="border-r-2 border-gray-400 my-4 px-4">
                <p className="text-gray-400 text-[13px]"> <b> LOCATION </b> </p>
                <p className="text-[20px]"> <b> {details?.location?.city}, {details?.location?.region} </b> </p>
            </div>
            <div className="border-r-2 border-gray-400 my-4 px-4">
                <p className="text-gray-400 text-[13px]"> <b> TIMEZONE </b> </p>
                <p className="text-[20px]"> <b> UTC {details?.location?.timezone} </b> </p>
            </div>
            <div className="my-4 px-4">
                <p className="text-gray-400 text-[13px]"> <b> ISP </b> </p>
                <p className="text-[20px]"> <b> {details.isp} </b> </p>
            </div>
        </div>
    )
}