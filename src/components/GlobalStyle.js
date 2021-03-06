import { createGlobalStyle } from "styled-components";

import { BLUE, ORANGE, GREEN, YELLOW, FONT_FAMILY } from "@constants/style";

const GlobalStyle = createGlobalStyle`
    &::-webkit-scrollbar {
        width: 7px;
    }

    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${BLUE};
        outline: 1px solid ${BLUE};
    }

    body {
        font-family: ${FONT_FAMILY};
        color:${BLUE};
      


        @media only screen and (max-width: 767px) {
            background-image: url('/backgroundWaveMobile.png');
            background-repeat: no-repeat;
            background-position: left top;
            background-size: 100% auto ;
        }
        @media only screen and (min-width: 768px) {
            background-color: white;
            background-image: url('/backgroundWave.png');
            background-size: auto 100%;
            background-repeat: no-repeat;
            background-position: left top;
            height:100%;
            overflow:hidden;
        }
    }

    .ant-layout{
        background:none;
    }

    .ant-layout-content{
        padding:0;
    }

    h1 {
        font-size: 45px;
        line-height: 27px;
    }

    h2 {
        font-size: 30px;
        line-height: 27px;
    }

    h3 {
        font-size: 23px;
        line-height: 27px;
    }

    p {
        font-size: 15px;
        line-height: 27px;
    }

    a {
        color:${BLUE};
    }

    a:hover{
        color:${ORANGE};
    }

    .text-uppercase {
        text-transform: uppercase;
    }

    .text-center {
        text-align: center;
    }

    .cursor-pointer {
        cursor: pointer;
    }

    /* Theme */

    .bg-blue {
        background-color: ${BLUE};
    }
    
    .text-blue {
        color: ${BLUE};
    }

    .bg-orange {
        background-color: ${ORANGE};
    }
    
    .text-orange {
        color: ${ORANGE};
    }
    .text-white {
        color: white !important;
    }

    .bg-green {
        background-color: ${GREEN};
    }
    
    .text-green {
        color: ${GREEN};
    }

    .bg-yellow {
        background-color: ${YELLOW};
    }
    
    .text-yellow {
        color: ${YELLOW};
    }


    /* NProgress */

    #nprogress {
        pointer-events: none;

        .bar {
            background: ${BLUE};
            position: fixed;
            z-index: 1031;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
        }

        .peg {
            display: block;
            position: absolute;
            right: 0;
            width: 100px;
            height: 100%;
            box-shadow: 0 0 10px ${BLUE}, 0 0 5px ${BLUE};
            opacity: 1;
            -webkit-transform: rotate(3deg) translate(0px, -4px);
            -ms-transform: rotate(3deg) translate(0px, -4px);
            transform: rotate(3deg) translate(0px, -4px);
        }

        .spinner {
            display: block;
            position: fixed;
            z-index: 1031;
            top: 15px;
            right: 15px;
        }

        .spinner-icon {
            width: 18px;
            height: 18px;
            box-sizing: border-box;
            border: solid 2px transparent;
            border-top-color: ${BLUE};
            border-left-color: ${BLUE};
            border-radius: 50%;
            -webkit-animation: nprogress-spinner 400ms linear infinite;
            animation: nprogress-spinner 400ms linear infinite;
        }
    }

    .nprogress-custom-parent {
        overflow: hidden;
        position: relative;

        #nprogress {
            .spinner,
            .bar {
                position: absolute;
            }
        }
    }

    @-webkit-keyframes nprogress-spinner {
        0% {
            -webkit-transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
        }
    }

    @keyframes nprogress-spinner {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export default GlobalStyle;
