import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {

  return (
    <>
    <div className='Wrapper'>
      <section className='Intro'>
        <div className="Intro-Text display">
          <span>Hi, I’m Muzammil,</span>
          <img loading='lazy' className='Intro-img' src="/me.webp" alt="image"/>
          <p>a Full-Stack Web Developer</p>
        </div>
      </section>
      <section className='recent-works'>
        <div className="section-header">
          <h1 className="display">Recent Works</h1>
        </div>
        <div className="section-body">
          <div className="card-container">
            <Card title={"silverskincoffee.ie"} details={"2024 / Development"} desc={"E-Commerce website that sells coffee beans. WordPress, Woocommerce."}></Card>
            <Card title={"silverskincoffee.ie"} details={"2024 / Development"} desc={"E-Commerce website that sells coffee beans. WordPress, Woocommerce."}></Card>
            <Card title={"silverskincoffee.ie"} details={"2024 / Development"} desc={"E-Commerce website that sells coffee beans. WordPress, Woocommerce."}></Card>
            <Card title={"silverskincoffee.ie"} details={"2024 / Development"} desc={"E-Commerce website that sells coffee beans. WordPress, Woocommerce."}></Card>
          </div>
        </div>
      </section>
      <section className='my-projcts'>
        <div className="section-header">
          <h1 className="display">Personal Projects</h1>
        </div>
        <div className="section-body">
          <div className="card-container">
            <div className="project-card border">
              <div className="project-cover">
                <img className='w-full h-full' src="./project-glowy.webp" alt="project-image" />
              </div>
              <div className="project-details">
                <div className="project-title display">Glowy Icons</div>
                <div className="project-desc">Colorful and bright vector icons with slight shadows</div>
                <a href="#"><button className="project-btn bg-gray-200 hover:bg-gray-300">Figma Link <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></button></a>
              </div>
            </div>
            <div className="project-card bg-red-500 ">
                <div className="project-cover">
                  <div className="cover">
                    <div className="absolute w-35 h-35">
                      <div className="absolute inset-0 rounded-full border border-gray-300 animate-ping"></div>
                    </div>
                    <img className='Intro-img object-cover z-10' src="./Code nest logo.png" alt="image" />
                  </div>
                </div>
                <div className="project-details text-white">
                  <div className="project-title display">Watch me on YouTube</div>
                  <div className="project-desc text-white">I talk about WebDev & stuff...</div>
                  <a href="#"><button className="project-btn border border-neutral-300 hover:border-white">YouTube Channel <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></button></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='contact'>
        <div className="section-header">
          <h1 className="display sm:text-6xl text-4xl text-neutral-400 font-medium">Telegram:</h1>
        </div>
        <div className="section-body">
          <h2 className="display sm:text-7xl text-5xl font-medium"><a href="#">@muzammil</a></h2>
        </div>
      </section>
    </div>
    </>
  )
}

export default App
