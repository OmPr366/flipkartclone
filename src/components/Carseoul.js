import React, { useState } from "react";
import "./Carseoul.css";

const Carseoul = () => {
  //   const [ok, setok] = useState(initialState)
  const [None1, setNone1] = useState("block");
  const [none2, setNone2] = useState("none");
  const [none3, setNone3] = useState("none");
  const [curr, setcurr] = useState(1);

  let plusSlides = ()=>{
      let x = curr;
      if (x==3) {
          setcurr(1);
      }else
      setcurr(x+1);
      if (curr==1) {
          setNone1("block")
          setNone2("none");
          setNone3("none");
      } else if (curr==2) {
        setNone2("block")
        setNone1("none");
        setNone3("none");
    } else if (curr==3) {
        setNone3("block")
        setNone2("none");
        setNone1("none");
    }
    console.log("opp");
    
    
    
  }

  return (
    <>
      <div className="slideshow-container w-30 m-1 mx-2 bg-black">
        {/* <!-- Full-width images with number and caption text --> */}
        <div className="mySlides fade"  style={{ display: None1 }}>
          <img
            src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg"
            style={{ width: "100%" }}
          />
          <div className="text">"Caption Text"</div>
        </div>

        <div className="mySlides fade"  style={{ display: none2 }}>
          <img
            src="https://images3.alphacoders.com/823/thumb-1920-82317.jpg"
            style={{ width: "100%" }}
          />
          <div className="text">"Caption Two"</div>
        </div>

        <div className="mySlides fade" style={{ display: none3 }}>
          <img
            src="https://media.istockphoto.com/photos/colorful-background-picture-id1280385511?b=1&k=20&m=1280385511&s=170667a&w=0&h=4-KMkIqgyw2gTBMTBbYZVZoidwRsWZzr3q0xyUDYhas="
            style={{ width: "100%" }}
          />
          <div className="text">"Caption Three"</div>
        </div>

        {/* <!-- Next and previous buttons --> */}
        <button className="prev cursor-not-allowed "  onClick="plusSlides(-1)">
          &#10094;
        </button>
        <button className="next" disabled onClick={plusSlides}>
          &#10095;
        </button>
      </div>
      <br />

      {/* <!-- The dots/circles --> */}
      <div style={{ textAlign: "center" }}>
        <span className="dot" onClick="currentSlide(1)"></span>
        <span className="dot" onClick="currentSlide(2)"></span>
        <span className="dot" onClick="currentSlide(3)"></span>
      </div>
      

    </>
  );
};

export default Carseoul;