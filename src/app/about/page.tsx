import React from 'react'
import Header from '../_components/About/Header'
import DisplayCard from '../_components/About/DisplayCards'

const page = () => {
  const data = [
    {
      title:"Our Mission",
      description:"At Bhumi NGO, our mission is to provide quality education to every child, fostering aspirations and nurturing potential through community-driven initiatives. We are committed to creating transformative educational experiences that build foundational skills, promote innovation, and inspire a lifelong love of learning. By mobilizing volunteers and leveraging local resources, we aim to deliver impactful programs that open doors to opportunities and empower children to contribute positively to society"
    },
    {
      title:"Our Vision",
      description:"Our vision is to create a world where every child has the opportunity to learn, grow, and thrive. We believe that education is the key to unlocking human potential and that every child deserves access to high-quality learning experiences that prepare them for a bright future. By working together with communities, schools, and partners, we strive to build a more equitable society where all children have the support they need to succeed."
    }
  ]
  return (
    <div>
        <Header/>
        {data.map((item) =>(
          <DisplayCard title={item.title} description={item.description}/>
        ))}
    </div>
  )
}

export default page