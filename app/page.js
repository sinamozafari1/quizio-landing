import Image from "next/image";
import { Button } from "@/components/ui/button";
import PhoneSlider from "@/components/PhoneSlider";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto p-6">
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6">
          <h1 className="text-5xl font-bold">
            Quizio - <span className="font-black">v1.0</span>
          </h1>
          {/* Features List */}
          <ul className="text-2xl space-y-2">
            <li>✔️ Tailwind Css</li>
            <li>✔️ PWA Ready</li>
            <li>✔️ Modern and Stylish</li>
            <li>✔️ Application Look Designed</li>
            <li>✔️ Easy to Customize</li>
          </ul>
          {/* Buttons */}
          <div className="flex space-x-4">
            <Button>Buy Now</Button>
            <Button variant="secondary">How to install</Button>
          </div>
          {/* QR Code */}
          <div className="flex flex-col items-center">
            {/* You can use a placeholder for now, or use a real QR code image */}
            <div className="border-4 border-pink-400 p-2 rounded">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://softivuslab.com/html/quizio/"
                alt="QR Code"
                className="w-36 h-36"
              />
            </div>
            <span className="mt-2 text-sm">Scan to view on your mobile device</span>
          </div>
        </div>
        {/* Right Column (Phone mockup) */}
        <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
          <PhoneSlider />
        </div>
      </div>
    </main>
  );
}
