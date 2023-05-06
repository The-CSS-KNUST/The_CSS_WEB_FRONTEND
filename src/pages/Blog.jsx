import React from "react";
import Navbar from "../components/Navbar";
import "../css/Blog.css";
import blogImage from "../assets/AII.webp"

const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className="banner">
        <div className="tab">Latest</div>
        <div className="tab">Artificial Intelligence</div>
        <div className="tab">Data Science</div>
        <div className="tab">Mobile Application</div>
        <div className="tab">Machine Learning</div>
      </div>

      <div className="blogs">
        <div className="blog">
            <div className="b_img_section">
                <img src={blogImage} alt="" />
            </div>
            <div className="b_text_section">
                <div className="b_title">THE EFFECT OF AI</div>
                <div className="b_author">Osei Divine</div>
                <button>READ MORE</button>
            </div>
        </div>    
        <div className="blog">
            <div className="b_img_section">
                <img src={blogImage} alt="" />
            </div>
            <div className="b_text_section">
                <div className="b_title">THE EFFECT OF AI</div>
                <div className="b_author">Osei Divine</div>
                <button>READ MORE</button>
            </div>
        </div>
        <div className="blog">
            <div className="b_img_section">
                <img src={blogImage} alt="" />
            </div>
            <div className="b_text_section">
                <div className="b_title">THE EFFECT OF AI</div>
                <div className="b_author">Osei Divine</div>
                <button>READ MORE</button>
            </div>
        </div>
        <div className="blog">
            <div className="b_img_section">
                <img src={blogImage} alt="" />
            </div>
            <div className="b_text_section">
                <div className="b_title">THE EFFECT OF AI</div>
                <div className="b_author">Osei Divine</div>
                <button>READ MORE</button>
            </div>
        </div>
        <div className="blog">
            <div className="b_img_section">
                <img src={blogImage} alt="" />
            </div>
            <div className="b_text_section">
                <div className="b_title">THE EFFECT OF AI</div>
                <div className="b_author">Osei Divine</div>
                <button>READ MORE</button>
            </div>
        </div>
        <div className="blog">
            <div className="b_img_section">
                <img src={blogImage} alt="" />
            </div>
            <div className="b_text_section">
                <div className="b_title">THE EFFECT OF AI</div>
                <div className="b_author">Osei Divine</div>
                <button>READ MORE</button>
            </div>
        </div>
        <div className="blog">
            <div className="b_img_section">
                <img src={blogImage} alt="" />
            </div>
            <div className="b_text_section">
                <div className="b_title">THE EFFECT OF AI</div>
                <div className="b_author">Osei Divine</div>
                <button>READ MORE</button>
            </div>
        </div>  
        
        </div>
      
      
    </div>
  );
};

export default Blog;
