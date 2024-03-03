import Image from 'next/image';
import React from 'react'

const Footer = () => {

  return (
    <section className="bg-custom-black-900 py-8 mt-10">
      <div className="container bg-white flex flex-col md:flex-row justify-between items-start md:items-center rounded-lg p-6 md:p-8">
        <h1 className="text-lg md:text-2xl">
          Download our mobile app <br /> now for a better experience.
        </h1>
        <div className="flex gap-2 py-2">
          <Image
            src="/assets/footer/apple.svg"
            height={100}
            width={120}
            alt=""
          />
          <Image
            src="/assets/footer/android.svg"
            height={100}
            width={120}
            alt=""
          />
        </div>
      </div>

      <div className="container text-white flex justify-around flex-col md:flex-row py-4">
        <div className="mt-4">
          <h1 className="text-lg md:text-xl">BOOKING.APP</h1>
          <div className='flex flex-col gap-2 mt-4'>
            <p className="text-xs md:text-sm">About</p>
            <p className="text-xs md:text-sm">Features</p>
            <p className="text-xs md:text-sm">Works</p>
            <p className="text-xs md:text-sm">Career</p>
          </div>
        </div>

        <div className="mt-4">
          <h1 className="text-lg md:text-xl">Help</h1>
          <div className='flex flex-col gap-2 mt-4'>
            <p className="text-xs md:text-sm">Customer Support</p>
            <p className="text-xs md:text-sm">Terms & Condition</p>
            <p className="text-xs md:text-sm">Privac Policy</p>
          </div>
        </div>

        <div className="mt-4">
          <h1 className="text-lg md:text-xl">Contact & Address</h1>
          <div className='flex flex-col gap-2 mt-4'>
            <p className="text-xs md:text-sm">017XXXXXXXXX</p>
            <p className="text-xs md:text-sm">Dhaka, Bangladesh</p>
          </div>
        </div>

        <div className="mt-4">
          <h1 className="text-lg md:text-xl">Logo</h1>
          <div className='flex flex-col gap-2 mt-4'>
            <div className="flex gap-4">
              <Image
                src="/assets/footer/facebook.svg"
                width={10}
                height={10}
                alt=""
              />
              <p className="text-xs md:text-sm">Facebook</p>
            </div>

            <div className="flex gap-4">
              <Image
                src="/assets/footer/instagram.svg"
                width={10}
                height={10}
                alt=""
              />
              <p className="text-xs md:text-sm">Instagram</p>
            </div>

            <div className="flex gap-4">
              <Image
                src="/assets/footer/linkedin.svg"
                width={10}
                height={10}
                alt=""
              />
              <p className="text-xs md:text-sm">Linkedin</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-white py-4">
        <hr className="text-white bg-white" />

        <p className="text-xs text-center mt-4">
          Copyright © 2022-2023 Take Tour Company All rights reserved
        </p>
      </div>
    </section>
  );

}

export default Footer