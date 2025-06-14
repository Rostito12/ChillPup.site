import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-200 text-gray-900 p-6">
      <Head>
        <title>ChillPup Coin</title>
      </Head>
      <header className="text-center py-12">
        <h1 className="text-5xl font-extrabold mb-4 flex justify-center items-center gap-2">
          🐾 ChillPup Coin 🐾
        </h1>
        <p className="text-xl max-w-xl mx-auto">
          The chillest memecoin in the cryptosphere. Community powered. Doggo approved.
        </p>
        <div className="mt-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-6 py-3 rounded-2xl shadow-lg">
            Join the Chill
          </button>
        </div>
        <div className="flex justify-center mt-8">
          <Image src="/chillpup-mascot.png" alt="ChillPup Mascot" width={200} height={200} />
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto py-8">
        <div className="rounded-2xl shadow-xl bg-white p-6">
          <h2 className="text-2xl font-semibold mb-2">🐶 What is ChillPup Coin?</h2>
          <p>
            ChillPup Coin (CHPU) is a meme token built on community vibes and good doggo energy. Stake, chill, and earn.
          </p>
        </div>

        <div className="rounded-2xl shadow-xl bg-white p-6">
          <h2 className="text-2xl font-semibold mb-2">✨ Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Community staking rewards</li>
            <li>Zen-times NFT drops</li>
            <li>Doggo Days charity fund</li>
            <li>Meme contests & giveaways</li>
          </ul>
        </div>

        <div className="rounded-2xl shadow-xl bg-white p-6 col-span-2">
          <h2 className="text-2xl font-semibold mb-2">📖 Tokenomics</h2>
          <p>
            Max Supply: 1,000,000,000 CHPU <br />
            50% Public Launch, 25% Staking Rewards, 15% NFT Ecosystem, 10% Charity Fund
          </p>
        </div>

        <div className="rounded-2xl shadow-xl bg-white p-6 col-span-2 text-center">
          <h2 className="text-2xl font-semibold mb-2">🌍 Join Our Pack</h2>
          <p className="mb-4">
            Be part of a movement that combines chill energy with meme innovation. Follow us and help unleash the chill!
          </p>
          <div className="flex justify-center gap-4 mb-4">
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg">Telegram</button>
            <button className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg">Twitter</button>
            <button className="bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded-lg">Discord</button>
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-xl text-lg">
            Connect Wallet
          </button>
        </div>
      </main>

      <footer className="text-center text-sm text-gray-500 mt-12">
        &copy; 2025 ChillPup Coin. All rights reserved.
      </footer>
    </div>
  );
}
