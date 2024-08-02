import React from 'react'
import Layout from '../components/Layout/Layout'
import { useAuth } from '../context/Auth'
import Accordian from '../components/Accordian';

const About = () => {
  const [auth,setAuth]=useAuth();
  return (
    <div>
      <Layout>
      <div className="container my-5">
      <div className="row">

      <div className="col-12">
                            <h2 className=" text-center mt-5 text-primary">
                                WE ARE A EVENT MANAGEMENT COMPANY
                            </h2>
                            <hr></hr>
                        </div>
                        <div className="col-md-8 mt-2">
                            <h5 className="text-primary">Our Vision :</h5>
                            <p>
                                We have long and clear vision of being the foremost organization
                                in the world event management and corporate communication, while
                                sharing our success with our team members and our achievements
                                with the society.
                            </p>
                            <p>
                                We have passion and commitment to connect brands and their
                                customers. We have vision to deliver superlative communication
                                experience to brands for their customers, associates and
                                employees. We have vision to create environments where corporate
                                can communicate with their audience and vice versa.
                            </p>
                            <h5 className="text-primary mt-4">Our Services :</h5>
                            <p>
                                We offer bespoke branding and production for your corporate
                                event with our in-house fabrication and equipment hire. We offer
                                our production services for conferences, business meet,
                                exhibitions, live events, decor and decoration. We work closely
                                with your marketing team to create fantastic branding that
                                follows your brand guidelines and project objectives.We are a
                                best event management company.
                            </p>
                        </div>
                        <div className="col-md-4 mt-2">
                          <Accordian/>
                        </div>
        {/* Private Events */}
        <div className='col-md-12 mb-2'>
          <h4 className='text-primary '> We offer two Categories of Events</h4>
        </div>
        <div className="col-md-12">
          <h3 className="text-primary mb-4">Private Events</h3>
          <p>
            Explore our range of private events designed to create unforgettable experiences for everyone. 
            Whether you're planning a wedding, celebrating a birthday, or throwing a theme party, 
            we ensure every detail is taken care of. These events are perfect for those looking to 
            share special moments in a more intimate and personalized setting.
          </p>
          <ul>
            <li><strong>Wedding Events</strong>: Celebrate your big day with a touch of elegance and style, with venues and services that cater to all your needs.</li>
            <li><strong>Birthday Events</strong>: From kids' birthday parties to milestone celebrations, we create memories that last a lifetime.</li>
            <li><strong>Theme Parties</strong>: Dive into a world of creativity with our theme parties, where every element is designed to match your chosen theme.</li>
          </ul>
        </div>

        {/* Public Events */}
        <div className="col-md-12">
          <h3 className="text-primary mb-4">Public Events</h3>
          <p>
            Our public events are exclusive experiences that are perfect for intimate gatherings and special occasions. 
            These events are ticketed, providing a unique opportunity to enjoy top-notch entertainment in a more personal setting.
          </p>
          <ul>
            <li><strong>Comedy Shows</strong>: Laugh out loud with friends at our public comedy shows, featuring some of the best stand-up comedians.</li>
            <li><strong>Music Nights</strong>: Enjoy an evening of live music, curated for those who appreciate good tunes and great company.</li>
            <li><strong>Magic Shows</strong>: Be amazed by our public magic shows, where you can witness incredible tricks and illusions up close.</li>
          </ul>
        </div>
      </div>
    </div>

       
      </Layout>
    </div>
  )
}

export default About
