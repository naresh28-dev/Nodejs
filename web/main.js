let B = document.getElementById("x");

let imageEl = document.getElementById("img");
let pTag = document.getElementById("p-tag");

B.onclick = function () {
  fetch("https://cryptovkm.onrender.com/crypto")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let imageurl = data[4].img;
      console.log(imageurl);
      imageEl.src = imageurl;
      pTag.textContent = imageurl;
    });
};
