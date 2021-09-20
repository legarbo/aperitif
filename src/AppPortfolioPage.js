import React from 'react';

export default function AppPorfolioPage() {
  return (
    <div className="Portfolio">
      <h1 className="title">Portfolio</h1>
      <div className="intro">
        <p>
        I have been actively working in several projects to exhibit some of the most prominent skills acquired througout the years as a self-taught software application developer.
        </p>
      </div>
      <div className="project-1">
         <p>My first project named "Aperitif"-this one- demostrate the compsumption of a third party API.</p>          
         <p>Altough It feels like an entry-level app there is a variety of data manipulation of the response object in order to present a user interface both appealing and inviting to user interaction.</p>
          <p>Aperitif is based upon React and shows important features as a Modal and a  Router that allows the user to navigate to complementary pages like this one.</p>
       </div>
       <div className="project-2">
         <p>The second project is a frontend website where the mayor emphasis is placed on
           the user interface so that its look-and-feel ensures an engaging user experience.</p>
       </div>
       <div className="project-3">
         <p>The third project is an backend E-commerce application. Here most emphasis
              is plqced on the backend to demostrate all the complexities of creating a
              secure shopping and buying E-commerce solution</p>
       </div>
       <div className="project-4">
        <p>The fourth project is my portfolio website to showcase all this projects and
           present my resume and proflie along with additonal information about my hobbies,
           my family and in general some aspects of my charater and personality that 
           hopefuly will allow you to know me a little bit better.</p>
        </div>
         <div className="project-5">
           <p>Finally I though that an important skill to showcase is the ability
              to design the user interface and the logic behind a interactive
              game subject to certain rules and goals.</p>
          </div>
    </div>
  ) 
}
