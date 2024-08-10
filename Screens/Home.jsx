import React from 'react';
import Intro from '../components/Intro';
import Chapters from '../components/Chapters';
import { Link } from 'react-router-dom';
import '../src/App.css'

export default function Home() {
  const books = [
    "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/ch1.jpg",
    "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/intasab.jpg",
    "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/preface.jpg",
    "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/ch4.jpg",
    "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/ch3.jpg",
    "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/ch2.jpg",
    "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/ch7.jpg",
    "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/ch6.jpg",
    "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/ch5.jpg",
    "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/ch10.jpg",
    "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/ch9.jpg",
    "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/ch8.jpg",
    "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/ch13.jpg",
    "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/ch12.jpg",
    "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/ch11.jpg",
    "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/ch16.jpg",
    "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/ch15.jpg",
    "https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/ch14.jpg"
  ];

  return (
    <>
    <div className='home-img-container'>
        <img className='home-img' src="https://thechildrengreenbook.net/assets/images/banners/banner-02.jpeg" alt="" />
      </div>

    {/* <div className='home-container'> */}

      <div className="intro-container">
        <Intro />
      </div>

      <div className="order">
        <div className="b-heading"><h2>GET A COPY</h2></div>
        <p>If you wish to get a hard copy of The Children's Green Book,<br /> please click the button below:</p>
        <Link to={'/order'} type="button"> Get a Copy </Link>
      </div>

      <div className='chapters-container'>
        <div className='c-heading'>
          <h2>Green Book Chapters</h2>
        </div>

        <div className='book1'>
          <Chapters image="https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/preface.jpg" />
        </div>

        <div className="books">
          <div className="book">
            {books.map((book, index) => (
              <Chapters key={index} image={book} />
            ))}
          </div>
        </div>
      </div>
    {/* </div> */}
    </>
    
  );
}
