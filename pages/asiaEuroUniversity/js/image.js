const image = [
  {
    id: 1,
    imageUrl: "./images/mylogo.jpg",
  },
  {
    id: 2,
    imageUrl: "./images/finis.jpg",
  },
  {
    id: 3,
    imageUrl: "./images/img3.jpg",
  },
  {
    id: 4,
    imageUrl: "./images/library.jpg",
  },
  {
    id: 5,
    imageUrl: "./images/graduate.jpg",
  },
  {
    id: 6,
    imageUrl: "./images/img9.jpg",
  },
];

const imageScript = document.getElementById("image-script");
imageScript.innerHTML = `
                      ${image
                        ?.map((image) => {
                          return `<div class="box ${image?.id} image">
                                  <img src="${image?.imageUrl}" class="image-detail" alt="">
                                </div>`;
                        })
                        .join(" ")}`;
