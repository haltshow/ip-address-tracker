"use client"
import IpDetails from '@/components/IpDetails'
import Map from '@/components/MapSSR'
import getIp, {IpInformation} from './server'
import React, {useState, useEffect} from 'react'

export default function Home() {
  async function actionGetIp() {
    const res: IpInformation = await getIp(ip);

    console.log("res: ", res);

    setIpDetails(res)
  }
  const [ipDetails, setIpDetails] = useState<IpInformation>({} as IpInformation)
  const [ip, setIp] = useState<string>('')
  return (
    <main className="min-h-screen relative max-w-[1440px] min-w-[375px] w-full">
      <div className="p-2 w-full flex flex-col items-center pb-32 relative" style={{ backgroundImage: `url(/images/pattern-bg-desktop.png)` }}>

        <div className="mb-4">
          <p className="text-[28px] text-white"> <b> IP Address Tracker </b> </p>
        </div>

        <div className="bg-white rounded-lg flex justify-center items-center pl-4">
          <input type="text" name="ip" id="ip" placeholder="Search for any IP address or domain"
            className="bg-transparent text-[18px] w-[375px] border-none outline-0"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
          />
          <div className="bg-black right-0 m-auto cursor-pointer bottom-0 p-4 rounded-r-lg" onClick={actionGetIp}>
            <img src="/images/icon-arrow.svg" alt="Arrow" />
          </div>
        </div>

        <div className="absolute bottom-[-40px] z-10">
          <IpDetails details={ipDetails} />
        </div>
      </div>

      <div className="relative z-0">
        <Map />
      </div>

    </main>
  )
}