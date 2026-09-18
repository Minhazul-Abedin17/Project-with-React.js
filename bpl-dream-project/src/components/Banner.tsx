

import React from "react";

const Banner = () => {
  return (
    <section className="mt-3">
      <div
        className="relative overflow-hidden bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1600&q=90')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031F15]/95 via-[#063D27]/75 to-[#031F15]/35"></div>

        {/* Decorative Glow */}
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#F5C542]/20 blur-3xl"></div>

        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#00A86B]/20 blur-3xl"></div>

        {/* Content */}
        <div className="relative z-10 flex min-h-[480px] items-center px-6 py-12 md:px-12 lg:px-16">

          <div className="max-w-2xl">

            {/* Small Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-[#F5C542] shadow-[0_0_10px_#F5C542]"></span>

              <span className="text-sm font-semibold tracking-wide text-white">
                BPL PLAYER AUCTION
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
              Build Your
              <span className="block bg-gradient-to-r from-[#F5C542] to-[#FFE58A] bg-clip-text text-transparent">
                Dream BPL XI
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-xl text-base leading-7 text-white/80 md:text-lg">
              Choose your favorite players, manage your budget and create
              your ultimate Bangladesh Premier League squad.
            </p>

            {/* Stats */}
            <div className="mt-7 flex flex-wrap gap-3">

              <div className="rounded-xl border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-md">
                <p className="text-xs text-white/60">PLAYERS</p>
                <p className="mt-1 text-lg font-bold text-white">
                  50+
                </p>
              </div>

              <div className="rounded-xl border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-md">
                <p className="text-xs text-white/60">BUDGET</p>
                <p className="mt-1 text-lg font-bold text-[#F5C542]">
                  $5000
                </p>
              </div>

              <div className="rounded-xl border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-md">
                <p className="text-xs text-white/60">SQUAD</p>
                <p className="mt-1 text-lg font-bold text-white">
                  YOUR XI
                </p>
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <button className="rounded-xl bg-[#F5C542] px-7 py-3.5 font-bold text-[#062E1F] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-[#FFD75A]">
                Explore Players →
              </button>

              <button className="rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white/20">
                How It Works
              </button>

            </div>

          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
    </section>
  );
};

export default Banner;

