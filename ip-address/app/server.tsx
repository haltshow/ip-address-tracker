export interface IpInformation {
  ip: string;
  location: {
    city: string;
    region: string;
    timezone: string;
    lat: number;
    lng: number;
  }
  isp: string
}

export default async function getIp(ip:string) {
  const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_IPZVXvDXjfJV8sJvaAK19HAassd9S&ipAddress=${ip}`)
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
  return res.json()
}