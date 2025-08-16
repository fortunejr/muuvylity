import React from 'react'
import { img10, img7 } from '../../imports'

const About = () => {
  return (
    <div className="bg-customBlue">
  <div className="container mx-auto px-4 py-10 fade-in-bottom">
    <div className="flex flex-col lg:flex-row items-center gap-10">
      
      {/* Image */}
      <div className="w-full lg:w-1/2">
        <img className="rounded-3xl w-full h-auto object-cover" src={img10} alt="LumiGrid Panel" />
      </div>

      {/* Text */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-5xl lg:text-5xl text-white font-bold mb-5">Who are we</h2>
        <p className="text-white text-sm lg:text-base leading-relaxed">
          Omphoenix Limited is a dynamic, forward-thinking company specializing in providing comprehensive solutions to the oil and gas industry and allied sectors. We are committed to delivering excellence, innovation, and measurable value to our clients through a blend of technical expertise, strategic insight, and an unwavering focus on safety and quality.
          <br></br><br></br>
          Our services span multiple disciplines, enabling us to act as a trusted partner to organizations seeking to improve operational efficiency, enhance productivity, and achieve sustainable growth. With a team of seasoned professionals who bring diverse backgrounds in engineering, project management, data and artificial intelligence, health and safety, and quality control, Omphoenix Limited is positioned at the forefront of industry transformation.
        </p>
      </div>

    </div>
  </div>
</div>
  )
}

export default About