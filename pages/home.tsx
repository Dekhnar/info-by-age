import React from "react"
import UserInformationNameSlider from "components/user-information-name-slider"
import UserInformationNameFeed from "@components/user-information-name-feed"
import Navbar from "@components/navbar"

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col transition-colors duration-150">
        <Navbar />
        <div className="flex flex-1 pt-10">
          <UserInformationNameSlider />
          <main className="w-full lg:pl-2 xl:pl-2">
            <div className="px-8 overflow-y-auto h-full bg-white">
              <UserInformationNameFeed />
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
