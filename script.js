const changePic = document.getElementsByClassName("changeImg");
const changeBtn = document.getElementsByClassName(
  "btn btn-sm btn-outline-secondary edit_btn"
);

const generateFirstPic = function () {
  fetch("https://api.pexels.com/v1/search?query=[dog]", {
    headers: {
      Authorization: "563492ad6f9170000100000129a7fe8f077b4791b8773731d45ed786",
    },
  })
    .then((response) => response.json())
    .then((dog) => {
      console.log(dog);
      for (let i = 0; i < changePic.length; i++) {
        changePic[i].innerHTML = `
      <div class="card mb-4 shadow-sm img_change">
      <img src="${dog.photos[i].src.small}" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
      `;
      }
    })
    .catch((error) => console.error(error));
};

const generateSecondaryPic = function () {
  fetch("https://api.pexels.com/v1/search?query=[cat]", {
    headers: {
      Authorization: "563492ad6f9170000100000129a7fe8f077b4791b8773731d45ed786",
    },
  })
    .then((response) => response.json())
    .then((cat) => {
      console.log(cat);
      for (let i = 0; i < changePic.length; i++) {
        changePic[i].innerHTML = `
      <div class="card mb-4 shadow-sm img_change">
      <img src="${cat.photos[i].src.small}" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
      `;
      }
    })
    .catch((error) => console.error(error));
};

const changeButton = function (get_id) {
  changeBtn[get_id - 1].innerHTML = `Hide`;
};
