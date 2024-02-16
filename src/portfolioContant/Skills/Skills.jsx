import React from 'react';
import './Skill.scss';
import BoxShadow from './BoxShadow';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'
import html from "../Skills_image/html1.png"
import css from "../Skills_image/css1.png"
import js from "../skills_image/js.png"
import react from "../skills_image/react.png"
import sass from "../skills_image/sass.png"
import vite from "../skills_image/vite.jpeg"
import c from "../skills_image/c.png"
import java from "../skills_image/java.png"


const Skills = () => {
  const source =[
    {
      src1: html,
      name: "HTML",
      know : "8/10",
      id: "1",
      per:"80%"
   },
   {
    src1: css,
    name: "CSS",
    know : "8/10",
    id: "2",
    per:"80%"
 }, {
  src1: js,
  name: "JavaScript",
  know : "7/10",
  id: "3",
  per:"70%"
}, {
  src1: react,
  name: "REACT",
  know : "6/10",
  id: "4",
  per:"60%"
}, {
  src1: sass,
  name: "SASS",
  know : "8/10",
  id: "5",
  per:"80%"
}, {
  src1: vite,
  name: "vite",
  know : "8/10",
  id: "6",
  per:"80%"
},
{
  src1: c,
  name: "c",
  know : "8/10",
  id: "7",
  per:"80%"
},
{
  src1: java,
  name: "java",
  know : "5/10",
  id: "8",
  per:"70%"
}
  ]
  const project =[
    "Dictionary App",
    "To-Do List",
    "QR code Genrator",
    "Text accuray Tester",
    "Dice Roller",
  ]
  const moreNavigate = useNavigate();
  const backNavigate = useNavigate();

  return (
    <div className='skill-container'>
        <div className='skill-content'> 
            <h3 className='skill-h2'>Skill Expertise</h3>
            <p className='skill-p'> I Like To Craft Beautiful And Scalable Web Products</p>
            <h3 className="intro">
            <div className="h-points"></div>What Skill I Have
             </h3>

             <br /> 
             <div className="outer">

             {source.map((e,id)=>{
               return(
            <BoxShadow src_url={e.src1} name={e.name} known={e.know} key={e.id} 
            style={{
              
              background: `radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(palegreen ${e.per}, #F1F0F1 0)`,
                      
            }}
            />
              )              
            })
          }
          </div>
            <h3>
              <div className='h-points'></div>Project</h3>
          <div className='skill-project'>
              <h4>
              <div className='h-points'></div>JS Projects</h4>
             {
               project.map((ele)=>{
                 return <li>{ele}</li>
              })
            }
              <h4>
              <div className='h-points'></div>React Projects</h4>

              <li>PortfoliO React</li>
           
          </div>



          <button className='about-back-btn about-btn' onClick={()=>backNavigate('/about')}><AiOutlineArrowLeft/>Back</button>
      <button className='about-more-btn about-btn' onClick={()=>moreNavigate("/contact")}>More<AiOutlineArrowRight/></button>

        </div>
    </div>
  )
}

export default Skills;
