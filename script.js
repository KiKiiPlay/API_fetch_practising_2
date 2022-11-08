const changePic = document.getElementsByTagName("svg");

window.onload = function () {
  for (let i = 0; i < changePic.length; i++) {
    changePic[i].innerHTML = `<svg
    class="bd-placeholder-img card-img-top"
    id="changePic"
    width="100%"
    height="225"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
    focusable="false"
    role="img"
    aria-label="Placeholder: Thumbnail"
  >
    <title>Placeholder</title>
    <img src="./avatar-1.jpg" alt="..." />
    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
      Thumbnail
    </text>
  </svg>`;
  }
};

fetch("https://api.pexels.com/v1/search?query=people", {
  headers: {
    Authorization: "563492ad6f9170000100000129a7fe8f077b4791b8773731d45ed786",
  },
})
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    console.log(data);
  });
