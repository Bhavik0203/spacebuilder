"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import EnquireModal from "../../components/enquire-modal";

const stats = [
  { label: "Status", value: "Ongoing" },
  { label: "Location", value: "Baner, Pune" },
  { label: "Price", value: "2 BHK: 55 Lakhs | 3 BHK: 75 Lakhs" },
  { label: "Possession", value: "October 2023" },
  { label: "Typology", value: "2 & 3 Bed Residences" },
];

export default function MeridienPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-[#f3f6fb] min-h-screen">
      {/* First Banner Section */}
      <section className="relative bg-gradient-to-r from-[#0b1b33] via-[#13294b] to-[#1a3b6b] text-white pt-32 pb-16">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/64-meridien/11.jpg"
            alt="64 Meridien banner background"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 lg:px-0 space-y-10">
          <div className="space-y-3">
          
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              64 Meridien
            </h1>
            <p className="max-w-2xl text-sm md:text-base text-blue-100/80">
              2 & 3 Bed Residences at Baner, Pune with contemporary lifestyle solutions.
              Starting @ 55 & 75 Lakhs (all incl.)
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-5">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-xl bg-white/10 backdrop-blur-md border border-white/15 shadow-sm px-4 py-3 md:py-4"
              >
                <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-blue-100/80">
                  {item.label}
                </p>
                <p className="mt-1 text-sm md:text-base font-medium">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Section – Text + Image */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 lg:px-0 grid gap-8 md:grid-cols-2 items-start">
          <div className="space-y-5 md:space-y-6">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-400">
              About Us
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
              64 Meridien
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-slate-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-slate-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="relative w-full h-60 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.35)]">
            <Image
              src="/images/64-meridien/22.jpg"
              alt="64 Meridien tower view"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Amenities – Recreation Floor */}
      <section className="bg-[#f3f6fb] py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-0">
          {/* Top: big image + text */}
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-start">
            <div className="relative w-full h-64 md:h-80 lg:h-[320px] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.25)]">
              <Image
                src="/images/64-meridien/33.jpg"
                alt="Recreation floor amenities"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-4 md:space-y-5">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#4a77b5]">
                Amenities
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
                Recreation Floor
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-slate-600 max-w-md">
                Lorem Ipsum is simply dummy text of the printing &amp; typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it.
              </p>
            </div>
          </div>

          {/* Bottom: thumbnails */}
          <div className="mt-8 md:mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "/images/64-meridien/44.jpg",
              "/images/64-meridien/55.jpg",
              "/images/64-meridien/11.jpg",
              "/images/64-meridien/22.jpg",
            ].map((src, index) => (
              <div
                key={src}
                className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-[0_10px_30px_rgba(15,23,42,0.25)]"
              >
                <Image
                  src={src}
                  alt={`Recreation amenity ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Plans – Plans and Configuration */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-0">
          {/* Section heading */}
          <div className="mb-8 md:mb-10">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-[#c8d6ea]" />
              <p className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#163455]/70">
                Floor Plans
              </p>
            </div>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-[#163455]">
              Plans and Configuration
            </h2>
          </div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                tag: "2 BHK",
                title: "2 BHK",
                carpet: "Carpet: 1235 Sq ft",
                price: "₹ 55 Lakhs*",
                image: "/images/64-meridien/2bhk-daimond-3d.jpg"
              },
              {
                tag: "3 BHK",
                title: "3 BHK",
                carpet: "Carpet: 1533 Sq ft",
                price: "₹ 75 Lakhs*",
                image: "/images/64-meridien/2bhk-emerald-3d.jpg"
              },
              {
                tag: "Typical Floor Plan",
                title: "Typical Floor Plan",
                carpet: "",
                price: "",
                image: "/images/64-meridien/2bhk-rubby-3d.jpg"
              },
            ].map((plan, index) => (
              <article
                key={plan.title + index}
                className="bg-white rounded-lg shadow-[0_18px_45px_rgba(15,23,42,0.08)] overflow-hidden flex flex-col"
              >
                {/* Image area */}
                <div className="relative h-40 sm:h-44 bg-slate-300/70">
                  <Image
                    src={plan.image}
                    alt={`${plan.title} floor plan`}
                    fill
                    className="object-cover mix-blend-multiply"
                  />

                  {/* Tag */}
                  <span className="absolute top-3 left-3 inline-flex items-center rounded-sm bg-white/95 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-900">
                    {plan.tag}
                  </span>

                  {/* Enquire button */}
                  <button className="absolute left-1/2 cursor-pointer top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1f59a8] text-white text-xs md:text-sm font-semibold px-6 py-2 rounded-sm shadow-md hover:bg-[#174481] transition-colors">
                    Enquire Now
                  </button>
                </div>

                {/* Content */}
                <div className="px-4 md:px-5 py-4 md:py-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <p className="text-sm md:text-base font-semibold text-slate-900">
                      {plan.title}
                    </p>
                    {plan.carpet && (
                      <p className="text-xs md:text-sm text-slate-500">
                        {plan.carpet}
                      </p>
                    )}
                  </div>

                  {plan.price && (
                    <p className="mt-3 text-xs md:text-sm font-semibold text-[#1f59a8] text-right">
                      {plan.price}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Gallery */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-0">
          {/* Heading */}
          <div className="mb-8 md:mb-10">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-[#c8d6ea]" />
              <p className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#163455]/70">
                Our Gallery
              </p>
            </div>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-[#163455]">
              Gallery
            </h2>
          </div>

          {/* Gallery strip */}
          <div className="flex items-center justify-center gap-4 md:gap-6">
            {/* Left arrow */}
            <button className="flex cursor-pointer items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#255b9e] text-white shadow-md hover:bg-[#18447a] transition-colors">
              <span className="-translate-x-[1px] text-lg">&#8249;</span>
            </button>

            {/* Images */}
            <div className="flex items-center gap-4 md:gap-6 w-full max-w-4xl">
              <div className="relative flex-1 h-40 md:h-56 lg:h-64 rounded-sm overflow-hidden shadow-[0_12px_35px_rgba(15,23,42,0.18)]">
                <Image
                  src="/images/64-meridien/11.jpg"
                  alt="Living room view"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative flex-[1.5] h-48 md:h-64 lg:h-72 rounded-sm overflow-hidden shadow-[0_16px_45px_rgba(15,23,42,0.22)]">
                <Image
                  src="/images/64-meridien/22.jpg"
                  alt="Project aerial view"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="relative flex-1 h-40 md:h-56 lg:h-64 rounded-sm overflow-hidden shadow-[0_12px_35px_rgba(15,23,42,0.18)]">
                <Image
                  src="/images/64-meridien/33.jpg"
                  alt="Bedroom interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right arrow */}
            <button className="flex items-center cursor-pointer justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#255b9e] text-white shadow-md hover:bg-[#18447a] transition-colors">
              <span className="translate-x-[1px] text-lg">&#8250;</span>
            </button>
          </div>
        </div>
      </section>

      {/* Location + Subscribe strip */}
      <section className="bg-[#f3f6fb] py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 lg:px-0">
          {/* Top subscribe banner */}
          <div className="rounded-t-lg bg-[#2c63a8] text-white px-6 md:px-10 py-4 md:py-5 flex items-center justify-between gap-4">
            <p className="text-xs md:text-sm font-medium">
              Are you interested in staying informed about this property?
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="border border-white/70 bg-transparent cursor-pointer px-5 py-2 text-xs md:text-sm font-semibold tracking-wide uppercase rounded-sm hover:bg-white hover:text-[#2c63a8] transition-colors"
            >
              Enquire Now
            </button>
          </div>

          {/* Bottom content */}
          <div className="bg-white rounded-b-lg shadow-[0_18px_45px_rgba(15,23,42,0.08)] overflow-hidden">
            <div className="grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
              {/* Map iframe */}
              <div className="relative min-h-[260px] md:min-h-[300px] lg:min-h-[340px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.4222008860543!2d73.78988307416915!3d18.506812169596397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfda4827d38d%3A0x7f568457213c459d!2sGrazia!5e1!3m2!1sen!2sin!4v1772196445868!5m2!1sen!2sin" 
                  width="600" 
                  height="450" 
                  style={{border:0}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full rounded-t-lg"
                ></iframe>
              </div>

              {/* Location list */}
              <div className="bg-[#f5f7fb] px-5 md:px-7 py-6 md:py-7 flex flex-col gap-4">
                <h3 className="text-lg md:text-xl font-semibold text-[#163455] mb-2">
                  The Location
                </h3>

                <div className="space-y-3">
                  {[
                    "26 minutes from Pune Airport",
                    "34 minutes from Pune Financial Centre",
                    "22 minutes from The Dubai Frame",
                    "26 minutes from Pune Airport",
                    "26 minutes from Pune Airport",
                    "26 minutes from Pune Airport",
                  ].map((text, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 bg-white rounded-sm px-3 py-3 shadow-[0_4px_15px_rgba(15,23,42,0.05)]"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#e4edfb] text-[#2c63a8]">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <p className="text-xs md:text-sm text-slate-700">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Register Your Interest */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-0">
          {/* Heading */}
          <div className="mb-8 md:mb-10">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-[#c8d6ea]" />
              <p className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#163455]/70">
                Contact Us
              </p>
            </div>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-[#163455]">
              Register Your Interest
            </h2>
          </div>

          {/* Form */}
          <form className="space-y-5 md:space-y-6">
            {/* Row 1 – 3 fields */}
            <div className="grid gap-4 md:grid-cols-3">
              <input
                type="text"
                placeholder="First Name*"
                className="w-full border border-[#c7d5ea] rounded-[2px] px-3 py-2.5 text-xs md:text-sm text-[#163455] placeholder:text-[#7b8caf] focus:outline-none focus:border-[#2c63a8]"
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="w-full border border-[#c7d5ea] rounded-[2px] px-3 py-2.5 text-xs md:text-sm text-[#163455] placeholder:text-[#7b8caf] focus:outline-none focus:border-[#2c63a8]"
              />
              <input
                type="email"
                placeholder="Email Address*"
                className="w-full border border-[#c7d5ea] rounded-[2px] px-3 py-2.5 text-xs md:text-sm text-[#163455] placeholder:text-[#7b8caf] focus:outline-none focus:border-[#2c63a8]"
              />
            </div>

            {/* Row 2 – 3 fields (phone + 2 selects) */}
            <div className="grid gap-4 md:grid-cols-3">
              <div className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-2">
                <div className="flex items-center justify-between border border-[#c7d5ea] rounded-[2px] px-3 py-2 text-xs md:text-sm text-[#163455]">
                  <span className="flex items-center gap-2">
                    <span className="text-lg leading-none">🇮🇳</span>
                    <span>+91</span>
                  </span>
                  <span className="text-[10px] text-[#7b8caf]">&#9662;</span>
                </div>
                <input
                  type="tel"
                  placeholder="000 000 0000"
                  className="w-full border border-[#c7d5ea] rounded-[2px] px-3 py-2.5 text-xs md:text-sm text-[#163455] placeholder:text-[#7b8caf] focus:outline-none focus:border-[#2c63a8]"
                />
              </div>
              <select className="w-full border border-[#c7d5ea] rounded-[2px] px-3 py-2.5 text-xs md:text-sm text-[#163455] bg-white focus:outline-none focus:border-[#2c63a8]">
                <option>Country of Residence</option>
              </select>
              <select className="w-full border border-[#c7d5ea] rounded-[2px] px-3 py-2.5 text-xs md:text-sm text-[#163455] bg-white focus:outline-none focus:border-[#2c63a8]">
                <option>No Of Bedrooms</option>
              </select>
            </div>

            {/* Row 3 – 3 fields (remaining selects) */}
            <div className="grid gap-4 md:grid-cols-3">
              <select className="w-full border border-[#c7d5ea] rounded-[2px] px-3 py-2.5 text-xs md:text-sm text-[#163455] bg-white focus:outline-none focus:border-[#2c63a8]">
                <option>How Soon Are You Looking To Buy?</option>
              </select>
              <select className="w-full border border-[#c7d5ea] rounded-[2px] px-3 py-2.5 text-xs md:text-sm text-[#163455] bg-white focus:outline-none focus:border-[#2c63a8]">
                <option>What The Purpose Of Buying?</option>
              </select>
              <select className="w-full border border-[#c7d5ea] rounded-[2px] px-3 py-2.5 text-xs md:text-sm text-[#163455] bg-white focus:outline-none focus:border-[#2c63a8]">
                <option>I Am Assisted By A Broker</option>
              </select>
            </div>

            {/* Checkbox + reCAPTCHA placeholder */}
            <div className="flex flex-col gap-4 mt-4">
            

              <label className="flex items-start gap-2 text-[11px] md:text-xs text-[#7b8caf] max-w-3xl">
                <input type="checkbox" className="mt-[3px] h-3.5 w-3.5 border border-[#c7d5ea]" />
                <span>
                  By accepting and providing my personal information I am consenting to Space builder Privacy Policy, as well as the
                  applicable data protection laws.*
                </span>
              </label>
            </div>

            {/* Submit button */}
            <div className="mt-4 flex justify-end">
              <button className="bg-[#2c63a8] cursor-pointer text-white text-xs md:text-sm font-semibold tracking-wide uppercase px-6 md:px-8 py-2.5 rounded-[2px] hover:bg-[#1f4b83] transition-colors">
                Register Your Interest
              </button>
            </div>
          </form>
        </div>
      </section>

      <EnquireModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}

