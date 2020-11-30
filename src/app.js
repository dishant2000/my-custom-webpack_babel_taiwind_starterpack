import anime from 'animejs/lib/anime.es.js';
import '../dist/tailwind.css'
import './css/index.css'
import $ from 'jquery'


// anime({
//     targets:'.my-wrapper .box',
//
// });
//helper functions

const boxAnimation = anime({
    targets:'.my-wrapper .box',
    translateY:[
        {value : 200, duration: 200},
        {value:0 , duration: 800}
    ],
    rotate:{
        value:'1turn', easing: 'easeInOutSine'
    },
    delay:function (el, i , t) {
        console.log("el = " + el + "i = " + i + "t = " + t + '\n');
        return i * 1000;
    },
    borderRadius:[{value: "50%"},{value:"3px"}],
    autoplay:false,

});



$('.initButton').on('click',boxAnimation.play);



