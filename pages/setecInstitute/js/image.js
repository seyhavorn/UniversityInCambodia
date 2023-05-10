const image = [
  {
    id: 1,
    imageUrl: "./image/a1.jpeg",
  },
  {
    id: 2,
    imageUrl: "./image/s2.jpeg",
  },
  {
    id: 3,
    imageUrl: "./image/s3.jpeg",
  },
  {
    id: 4,
    imageUrl: "./image/a2.jpeg",
  },
  {
    id: 5,
    imageUrl: "./image/s5.jpeg",
  },
  {
    id: 6,
    imageUrl: "./image/s6.jpeg",
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
