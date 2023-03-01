import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Mr. Morning Star</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We Custom Design Web Pages For A Variety Of Large And Small Businesses.
            We Will Build A Website That Is Easy To Use For Both You And Your Customer.
            We Will Ensure Your Business Is Presented .
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            We Custom Design Web Pages For A Variety Of Large And Small Businesses. We Will Build A Website
            That Is Easy To Use For Both You And Your Customer.We Will Ensure Your Business Is Presented
            The Way You Want To Be Seen. No Job Is Too Big Or Too Small.We Custom Design Web Pages For A
            Variety Of Large And Small Businesses. We Will Build A Website That Is Easy To Use For Both You
            That Is Easy To Use For Both You And Your Customer.We Will Ensure Your Business Is Presented
            The Way You Want To Be Seen. No Job Is Too Big Or Too Small.We Custom Design Web Pages For A
            Variety Of Large And Small Businesses. We Will Build A Website That Is Easy To Use For Both You And Your Customer.
            We Will Ensure Your Business Is Presented The Way You Want To Be Seen. No Job Is Too Big Or



          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
