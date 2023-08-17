import { toast } from 'react-toastify'

export interface IpInformation {
  ip: string;
  location: {
    city: string;
    region: string;
    timezone: string;
    lat: number;
    lng: number;
  }
  isp: string;
}

export default async function getIp(ip:string) {
  try {
    const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_IPZVXvDXjfJV8sJvaAK19HAassd9S&ipAddress=${ip}`)
    const data = await res.json()

    if (!res.ok) {
      throw new ReferenceError(data.messages)
    }

    return data
  } catch (err : any) {
    console.log(err.message)
    toast.warning(err.message, {
      position: "top-left",
      autoClose: 7500
    })
  }
  
}