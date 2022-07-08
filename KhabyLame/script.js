let khabyImages = [
    "https://www.tubefilter.com/wp-content/uploads/2022/06/khaby-lame-shrug-1400x825.jpg",
    "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2022/06/khaby-lame-1-1656044819.jpg",
    "https://i.kym-cdn.com/photos/images/facebook/002/094/500/7c3",
    "https://i.playboard.app/p/a49eca2c9d9a2e55e40a5053d85769f8/default.jpg"   
];

const imgs = document.querySelectorAll("img");

for(let i=0; i<imgs.length; i++){
    const randomImg = Math.floor(Math.random() * khabyImages.length)
    imgs[i].src = khabyImages[randomImg]
}