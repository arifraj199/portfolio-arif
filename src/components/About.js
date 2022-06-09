import React from "react";

const About = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content px-4 text-left flex-col lg:flex-row-reverse">
        <div>
          <div className="mb-8">
            <div
              class="radial-progress mr-4 text-center"
              style={{
                "--value": "80",
                "--size": "12rem",
                "--thickness": "2px",
              }}
              // style={{'--value:70', '--size:12rem', '--thickness: 2px'}}
            >
              80% <br />
              <span className="text-green-500">Developing Skill</span>
            </div>
            <div
              class="radial-progress text-center"
              style={{
                "--value": "70",
                "--size": "12rem",
                "--thickness": "2px",
              }}
              // style="--value:70; --size:12rem; --thickness: 2px;"
            >
              70% <br />
              <span className="text-yellow-500">Design Process</span>
              
            </div>
          </div>
          <div>
            <div
              class="radial-progress mr-4 text-center"
              style={{
                "--value": "65",
                "--size": "12rem",
                "--thickness": "2px",
              }}
              // style={{'--value:70', '--size:12rem', '--thickness: 2px'}}
            >
              65% <br />
              
              <span className="text-blue-500">UX Thinking</span>
            </div>
            <div
              class="radial-progress text-center"
              style={{
                "--value": "60",
                "--size": "12rem",
                "--thickness": "2px",
              }}
              // style="--value:70; --size:12rem; --thickness: 2px;"
            >
              60% <br />
              <span className="text-teal-500">Creative Work</span>
              
            </div>
          </div>
        </div>
        <div className="lg:w-2/4">
          <h1 class="text-lg font-bold">About Me</h1>
          <hr className="w-10 mt-2 mb-4" />
          <h1 class="text-6xl font-bold">Why Hire Me?</h1>
          <p class="py-6">
            Hi,I'm Arif Hossain. <br />
            I'm a junior front end developer.I want to build my career on web development and want to learn new technology.My passion is to become a quality developer and want to make my skill stronger. <br /><br />
            My job is to build website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch in project and make sure that it is eye-catching and easy to use. My aim is to bring perfection in the most creative way.
          </p>
          <button class="btn btn-outline text-white rounded-3xl">Download Resume</button>
        </div>
      </div>
    </div>
  );
};

export default About;