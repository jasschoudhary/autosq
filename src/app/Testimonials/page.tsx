'use client'
import Image from 'next/image'
import React from 'react'

const testimonials = [
  {
    name: 'Brad Jenkins III',
    text: 'Extremely pleased with my experience at this online auto parts store. Excellent product selection and a user-friendly website interface. The order processing was quick, and the delivery was right on time. The quality of the parts is top-notch. The staff is professional and responsive. I highly recommend this store to all car enthusiasts!',
  },
  {
    name: 'Dr. Jim Parker',
    text: 'Extremely pleased with my experience at this online auto parts store.',
  },
  {
    name: 'Raymond Rippin DVM',
    text: 'Extremely pleased with my experience at this online auto parts store. Excellent product selection and a user-friendly website interface.',
  },
  {
    name: 'Isabel D’Amore',
    text: 'Extremely pleased with my experience at this online auto parts store. Excellent product selection and a user-friendly website interface.',
  },
  {
    name: 'Virgil Shields',
    text: 'Extremely pleased with my experience at this online auto parts store. Excellent product selection and a user-friendly website interface. The order processing was quick, and the delivery was right on time. The quality of the parts is top-notch. The staff is professional and responsive. I highly recommend this store to all car enthusiasts!',
  },
  {
    name: 'Santiago Beer',
    text: 'Extremely pleased with my experience at this online auto parts store. Excellent product selection and a user-friendly website interface. The order processing was quick, and the delivery was right on time. The quality of the parts is top-notch. The staff is professional and responsive. I highly recommend this store to all car enthusiasts!',
  },
  {
    name: 'Nettie Oberbrunner',
    text: 'Extremely pleased with my experience at this online auto parts store. Excellent product selection and a user-friendly website interface. The order processing was quick, and the delivery was right on time. The quality of the parts is top-notch.',
  },
  {
    name: 'Sandra Wehner',
    text: 'Extremely pleased with my experience at this online auto parts store. Excellent product selection and a user-friendly website interface. The order processing was quick, and the delivery was right on time. The quality of the parts is top-notch. The staff is professional and responsive. I highly recommend this store to all car enthusiasts!',
  },
]

const categories = [
  'All',
  'This month',
  'Last month',
  'This year',
  'Last year',
]

export default function TestimonialsPage() {
  return (
    <div className="relative min-h-screen bg-[#0A1621] pb-32">
      {/* Banner */}
      <div className="w-full h-64 relative">
        <Image
          src="/images/banner.png"
          alt="Banner"
          fill
          className="object-cover"
          priority
        />
        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-white drop-shadow-lg tracking-widest">
          Testimonials
        </h1>
      </div>

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 px-8 py-6">
        <Image src="/images/HouseLine.png" alt="Home" width={24} height={24} />
        <Image src="/images/arrows (1).svg" alt="Arrow" width={16} height={16} />
        <span className="text-white/70 text-lg">Testimonials</span>
      </div>

      {/* Category Buttons */}
      <div className="flex gap-4 px-8 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            className="px-6 py-2 rounded-full bg-[#1B2A3A] text-white/80 hover:bg-[#2A3B4D] transition"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Testimonials Grid */}
      <div className="relative z-10 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`rounded-xl border border-blue-400 bg-[#12263A] p-6 flex flex-col gap-4 shadow-lg
                ${i % 3 === 0 ? 'min-h-[260px]' : i % 3 === 1 ? 'min-h-[320px]' : 'min-h-[380px]'}
              `}
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/images/title (2).png"
                  alt="User"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <span className="text-lg font-semibold text-white">{t.name}</span>
              </div>
              <p className="text-white/80 text-base">{t.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-12 z-20 relative">
        <button className="bg-[#1B6CF6] text-white px-12 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#1558b0] transition">
          View more
        </button>
      </div>

      {/* Blue Gradient Shade */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-64 z-0"
        style={{
          background: 'linear-gradient(0deg, #0A1621 0%, rgba(10,22,33,0.0) 100%)'
        }}
      />
    </div>
  )
}