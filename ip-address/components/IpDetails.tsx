import { IpInformation } from "@/app/server"

export default function IpDetails({ details } : {details: IpInformation}) {
    return (
        <div className="bg-white text-black grid grid-cols-4 rounded-lg gap-4">
            <div className="border-r-2 border-gray-400 p-4">
                <p className="text-gray-400 text-[14px]"> <b> IP ADDRESS </b> </p>
                <p className="text-[24px]"> {details?.ip} </p>
            </div>
            <div className="border-r-2 border-gray-400 p-4">
                <p className="text-gray-400 text-[14px]"> Location </p>
                <p className="text-[24px]"> {details?.location?.city}, {details?.location?.region} </p>
            </div>
            <div className="border-r-2 border-gray-400 p-4">
                <p className="text-gray-400 text-[14px]"> Timezone </p>
                <p className="text-[24px]"> {details?.location?.timezone} </p>
            </div>
            <div className="p-4">
                <p className="text-gray-400 text-[14px]"> ISP </p>
                <p className="text-[24px]"> {details.isp} </p>
            </div>
        </div>
    )
}