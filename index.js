const github = require('simple-icons/icons/github');
const twitter = require('simple-icons/icons/twitter');
const instagram = require('simple-icons/icons/instagram');
const linkedin = require('simple-icons/icons/linkedin');
const medium = require('simple-icons/icons/medium');

const social = [
    { alt: 'github', icon: github.svg, link: 'https://github.com/weswhite'},
    { alt: 'linkedin', icon: linkedin.svg, link: 'https://www.linkedin.com/in/wes-white-98702188/'},
    { alt: 'twitter', icon: twitter.svg, link: 'https://twitter.com/WesTealWhite' },
    { alt: 'instagram', icon: instagram.svg, link: 'https://www.instagram.com/wes_white/' },
    { alt: 'medium,', icon: medium.svg, link: 'https://medium.com/@weswhite' }
];

const skills = [];

const list = document.querySelector('#icon-list');
list.innerHTML = social.map(s => {
    return `<li><a href="${s.link}">${s.icon}</a></li>`
}).join("");