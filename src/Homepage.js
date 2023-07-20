import React from 'react';
import {useRef} from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import "./main.css"
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import bed from './bed.jpg';
import hospital from './hospital.jpg';
import office from './office.jpg';
import classs from './classs.jpg';
import resturant from './resturant.jpg';
import person1 from './person1.jpg';
import person2 from './person2.jpg';
import person3 from './person3.jpg';



const Homepage = () => {
  return (
    <body>
    <header>
    <nav>
    <h1>Interior <span className="blue">Hub</span></h1>
         <ul id="navbar">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </nav>

    <div className="center01">
      <h1>premium Interior</h1>
      <h1>design service</h1>
      <p>Transform Your Space With Professional Interior Design Services Senter Create A Personalized And Stylish Environment With Our Expert</p>
  
    </div>
      
      </header>

      <div className="hanging_row">
        <h1>Award-Winning Solutions</h1>
        <p>Our Unique Offers</p>
        <h1>Modern Interior Design</h1>
        <p>See Our Work</p>
        <h1>Get a personal Estimate</h1>
        <p>Fill The Form</p>
      </div>


      <div className="about_us">
      <div className="image01">

      </div>
       <h1>About Us</h1>
       <div className="content01">
      <p>We Create Functional, Beautiful Interiors For Our Clients Since 1987.</p>
      </div>
        <div className="image02">
        
      </div>
      <div className="content02">
        <p>
        When An Unknown Printer Took A Gallery Of Type And Scrambled It To Make A Type Specimen Book.It Has Survived Not Only Five Centuaries.When An Unknown Printer Took A Gallery Of Type And Scrambled It To Make A Type.
      </p>
      </div>
  
      </div>

      <div className="gallery_01">
      <div className="name">
             <h3>Our Gallery</h3>
      </div>

      <div className="main">
        <div className="design">
        <img src={bed} style={{ width: '500px', height: '350px' }}/>
          <h1>Bed Room Interior Design</h1>
          <p>Private Modern House</p>
        </div>

        <div className="design">
        <img src={hospital} style={{ width: '500px', height: '350px' }}/>
          <h1>Hospital Interior Design</h1>
          <p>Commerciial House</p>
        </div>

        <div className="design">
        <img src={resturant} style={{ width: '500px', height: '350px' }}/>
          <h1>Resturant Interior</h1>
          <p>Commercial house</p>
        </div>

         <div className="design">
         <img src={office} style={{ width: '500px', height: '350px' }}/>
           <h1>Office Room Interior Design</h1>
           <p>Commercial House</p>
         </div>

          <div className="design">
          <img src={classs}style={{ width: '500px', height: '350px' }}/>
            <h1>Class Room Interior Design</h1>
            <p>Commercial House</p>
          </div>

           <div className="design">
           <img src={bed} style={{ width: '500px', height: '350px' }}/>
             <h1>Hospital Interior Design</h1>
             <p>Commercial House</p>
           </div>
      </div>
        

           <h3>Load More</h3>
      </div>

      <div className="reviews">
        <p>2,157 people have said how good Rareblocks</p>
        <h2>Our Happpy Clients Say About Us</h2>

      <div className="allreviews">
            <div className="review">
            <p>"You made it so simple.My site is so much faster and easier to work with than my old site.I just choose the page,make the change</p>
            <div className="wrapper">
            <div className="closer">
            <img className="pics" src={person1} />
            </div>
            <div className="details">
            <h3>Lesile Alexander</h3>
            <h5>Freelancer React Developer</h5>
            </div>
            </div>  
          </div>

          <div className="review">
            <p>"Simply yhe best.Better than all the rest.I'd reccomend this product to beginners and advanced users"</p>
            <div className="wrapper">
            <div className="closer">
            <img className="pics" src={person2} style={{ width: '90px', height: '90px' }} />
            </div>
            <div className="details">
            <h3>Jacob Jones</h3>
            <h5>Digital Marketer</h5>
            </div>
            </div>  
          </div>

          <div className="review">
            <p>"I cannot believe that i have got a brand new landing page after gettin Omega.It was super easy and fast to edit and publish"</p>
            <div className="wrapper">
            <div className="closer">
            <img className="pics" src={person3} style={{ width: '90px', height: '90px' }} />
            </div>
            <div className="details">
            <h3>Jenny Wilson</h3>
            <h5>Graphic Designer</h5>
            </div>
            </div>  
          </div>


      </div>


          <h4>Check all 3,157 reviews</h4>

      </div>

      <div className="reviews01">

    <h1>What our customers are saying</h1>

      <div className="says">
         <div className="review">
            <p>"Simply yhe best.Better than all the rest.I'd reccomend this product to beginners and advanced users"</p>
            <div className="wrapper">
            <div className="closer">
            <img className="pics" src={person2} style={{ width: '90px', height: '90px' }} />
            </div>
            <div className="details">
            <h3>Jonathan Dass</h3>
            <h5>Medical Assitant</h5>
            </div>
            </div>  
          </div>

         <div className="review">
            <p>"Simply yhe best.Better than all the rest.I'd reccomend this product to beginners and advanced users"</p>
            <div className="wrapper">
            <div className="closer">
            <img className="pics" src={person2} style={{ width: '90px', height: '90px' }} />
            </div>
            <div className="details">
            <h3>Mike Dew</h3>
            <h5>Marketing Coordinator</h5>
            </div>
            </div>  
          </div>

      </div>
      </div>

      <div className="midpage">
        <p>Your Best Choice</p>
        <h1>Let's Start Your Project</h1>
        <h1>New Dream Project</h1>
        <button>Get A Quote</button>
      </div>

      <div className="partners">
        <div className="  trusties">

          <h1>1000+ Big brands trust us</h1>
        </div>

         <div className="  trusties01">
          <h1>Vertex</h1>
        </div>

         <div className="  trusties01">
          <h1>SquareStone</h1>
        </div>

         <div className="  trusties01">
          <h1>martino</h1>
        </div>

         <div className="  trusties01">
          <h1>WAIVER</h1>
        </div>
      </div>

      <div className="faq">
        <div className="box1">
          <h1>Discover the most common questions.</h1>
          <p>
            How do I choose the right color scheme for my space?
Choosing the right color scheme for your space can greatly impact its overall look and feel. Consider factors such as the room's purpose, natural light, existing furniture, and personal preferences. Look for complementary or analogous colors that create a harmonious atmosphere. Don't hesitate to experiment and seek professional advice if needed.
          </p>
        </div>
        <div className="megabox">

           <div className="box2">
          <h1>What are some popular interior design styles?</h1>
          <p>
            There are numerous interior design styles to explore, such as contemporary, minimalist, Scandinavian, industrial, bohemian, traditional, and mid-century modern, among others. Each style has its unique characteristics and aesthetic elements. Research different styles and find the one that resonates with your personal taste and complements your space.
          </p>
        </div>
         <div className="box3">
         <h1>How can I make a small room appear larger?</h1>
         <p>
      To make a small room appear larger, consider using light and neutral colors for the walls and furniture. Maximize natural light by using sheer curtains or blinds. Implementing mirrors strategically can create an illusion of space and depth. Additionally, choose furniture that is proportional to the room's size and utilize multi-functional pieces to optimize functionality.
         </p>
          
        </div>
        </div>
      </div>

      <div className="video_01">
        <h2>Exotic Designs In Reviews</h2>
        <p>Hear comments from our trusted clients</p>
        <div className="major">
          <div className="bor1">
          <video src="video-file.mp4" width="440" height="360" controls autoplay loop muted poster="video-poster.jpg">
  Your browser does not support the video tag.
</video>

          </div>
          <div className="bor2">
            <video src="video-file.mp4" width="440" height="360" controls autoplay loop muted poster="video-poster.jpg">
  Your browser does not support the video tag.
</video>

          </div>
          <div className="bor3">
            <video src="video-file.mp4" width="440" height="360" controls autoplay loop muted poster="video-poster.jpg">
  Your browser does not support the video tag.
</video>

          </div>
        </div>
      </div>

      <footer>
        <div className="cube1">
          <h1>Interior <span className="blue">Hub</span></h1>

        </div>
        <div className="cube2">
          <h1>About Us</h1>
          <li>Service</li>
          <li>Blog</li>
          <li>Testimonials</li>
          <li>Customer FeedBack</li>
          <li>Brands</li>
        </div>
        <div className="cube3">
           <h1>Services</h1>
          <li>Morder Funiture</li>
          <li>Interior Design</li>
          <li>Floor Planing</li>
          <li>Led Lighting</li>
          <li>Kitchen Interior</li>
        </div>
         <div className="cube4">
           <h1>Contact Us</h1>
           <li>interiorsdeco1@decor.com</li>
          <li>+2547123456789</li>
          <li>23 Ngala Avenue Kibaki,TM 49834</li>
        </div>
      </footer>

    </body>
  );
}

export default Homepage;
