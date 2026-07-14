import React from 'react'
import SectionHeader from '../reusableComp/SectionHeader'
const AboutUs = () => {
  return (
<div className='max-w-6xl text-center m-auto text-left'>
      <SectionHeader title="Who We Are" />
    
      {/* Header */}
     
      {/* Introduction */}
      <div className="space-y-6 text-white-800 text-lg leading-relaxed ">
        <p>
          <strong>Manara Organization</strong> is a non-profit, non-governmental organization committed to improving the quality of life of rural communities across Nepal through sustainable and community-driven development.
        </p>
        <p>
          Established in 2017, MRDS Nepal works closely with local communities, schools, local governments, and national and international partners to design and implement practical solutions that address local needs. Our work focuses on strengthening education, improving access to technology, promoting health and hygiene, protecting the environment, empowering women and children, supporting livelihoods, and building resilient communities. Through these initiatives, we aim to create lasting opportunities that enable people to lead healthier, more prosperous, and self-reliant lives.
        </p>
        <p>As a trusted implementation partner of Menschen im Dialog e.V. (Germany), MRDS Nepal believes that sustainable development is achieved through collaboration, local ownership, innovation, and mutual respect. We work hand in hand with communities to ensure that every project delivers meaningful, long-term impact and contributes to a more inclusive and sustainable future for Nepal.</p>
      </div>
</div>
)}

export default AboutUs