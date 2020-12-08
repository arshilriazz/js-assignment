(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
const fs = require('fs')

let photos = document.getElementById('photos')

const loadNotes = ()=>{
    try {
        const dataBuffer = fs.readFileSync('data.json')
        const dataJSON = dataBuffer.toString()
        const data = JSON.parse(dataJSON)
        return data
    }
    catch(e){
        return []
    }
}

const data = loadNotes()

console.log(data)

for (let i = 0; i < data.length * 4; i++) {
    let img = document.createElement('img')
    img.setAttribute('src', data[i % data.length].imageURL)
    photos.append(img)
}

// fetch("./data.json")
// .then(response => {
//    return response.json();
// })
// .then(data => {
//     for (let i = 0; i < data.length * 4; i++) {
//         let img = document.createElement('img')
//         img.setAttribute('src', data[i % data.length].imageURL)
//         photos.append(img)
//     }
// })
// .catch(e => console.log(e))
},{"fs":1}]},{},[2]);
