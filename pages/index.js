import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import TypedTitle from "../components/TypedTitle";
import styled from "styled-components";

const Home = () => (
  <div className="container">
    <Head title="Next.js demo" />

    <h1>
      <TypedTitle />
    </h1>

    <style jsx>{`
      .container {
        width: 100wh;
        height: 90vh;
        color: #fff;
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        background-size: 400% 400%;
        -webkit-animation: Gradient 15s ease infinite;
        -moz-animation: Gradient 15s ease infinite;
        animation: Gradient 15s ease infinite;
        border-bottom-right-radius: 25%;
        border-bottom-left-radius: 25%;
      }

      .container a {
        color: red;
      }

      @-webkit-keyframes Gradient {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }

      @-moz-keyframes Gradient {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }

      @keyframes Gradient {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }

      h1,
      h6 {
        font-family: "Open Sans";
        font-weight: 300;
        text-align: center;
        position: absolute;
        top: 45%;
        right: 0;
        left: 0;
      }
    `}</style>
  </div>
);

export default Home;
