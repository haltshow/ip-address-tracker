"use client"
import IpDetails from '@/components/IpDetails'
import Map from '@/components/MapSSR'
import getIp, {IpInformation} from './server'
import React, {useState, useEffect} from 'react'

export default function Home() {
  async function actionGetIp() {
    const res : IpInformation = await getIp(ip);

    if (res) {
      setIpDetails(res);
    }
  }

  const [ipDetails, setIpDetails] = useState<IpInformation>({
    ip: '192.212.174.101',
    location: {
      city: 'Brooklyn',
      region: 'NY',
      timezone: '-05:00',
      lat: 40.666471,
      lng: -73.904829
    },
    isp: 'SpaceX Starlink'
  } as IpInformation)
  const [ip, setIp] = useState<string>('')

  return (
    <main className="min-h-screen relative max-w-[1440px] min-w-[375px] w-full">
      <div className="p-2 w-full flex flex-col items-center lg:pb-32 pb-56 relative" style={{ backgroundImage: `url(/images/pattern-bg-desktop.png)` }}>

        <div className="mb-4 p-4">
          <p className="text-[28px] text-white font-medium"> IP Address Tracker </p>
        </div>

        <div className="bg-white flex justify-center items-center pl-4 rounded-xl">
          <input type="text" name="ip" id="ip" placeholder="Search for any IP address or domain"
            className="bg-transparent text-[18px] w-[300px] lg:w-[450px] rounded-full border-none outline-0"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
          />
          <div className="bg-black right-0 m-auto cursor-pointer bottom-0 p-6 rounded-r-xl text-[18px]" onClick={actionGetIp}>
            <img src="/images/icon-arrow.svg" alt="Arrow" />
          </div>
        </div>

        <div className="absolute z-10 w-[370px] lg:w-[1000px]
          lg:bottom-[-23%]
          bottom-[-65%]"
        >
          <IpDetails details={ipDetails} />
        </div>
      </div>

      <div className="relative z-0">
        <Map details={ipDetails} />
      </div>

    </main>
  )
}