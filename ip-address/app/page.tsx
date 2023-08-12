import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen relative max-w-[1440px] min-w-[375px] w-full">
      <div className="p-2 w-full flex flex-col items-center" style={{ backgroundImage: `url(/images/pattern-bg-desktop.png)` }}>
        {/* <Image
          src='/images/pattern-bg-desktop.png'
          alt="Background"
          className="z-0"
          layout='fill'
        /> */}

        {/* <img src="/images/pattern-bg-desktop.png" alt="Background" /> */}


        <div className="mb-4">
          <p className="text-[28px] text-white"> <b> IP Address Tracker </b> </p>
        </div>

        <div className="mb-16 bg-white rounded-lg flex justify-center items-center pl-4">
          <input type="text" name="ip" id="ip" placeholder="Search for any IP address or domain"
            className="bg-transparent text-[18px] w-[375px]"
          />
          <div className="bg-black right-0 m-auto pointer bottom-0 p-4 rounded-r-lg">
            <img src="/images/icon-arrow.svg" alt="Arrow" />
          </div>
        </div>
      </div>

      
    </main>
  )
}
