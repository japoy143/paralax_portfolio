document.addEventListener("DOMContentLoaded", () => {
  const boxContainer = document.querySelector(".boxContainer");
  const saluteTextContainer = document.querySelector(".saluteTextContainer");
  const saluteImgContainer = document.querySelector(".saluteImgContainer");
  const authorName = document.querySelector(".name");
  const sunContainer = document.querySelector(".sunContainer");
  const sunImg = document.querySelector(".sunImg");

  const moonContainer = document.querySelector(".moonContainer");
  const moonImg = document.querySelector(".moonImg");
  const mountContainer1 = document.querySelector(".mountainContainer1");
  const mountContainer2 = document.querySelector(".mountainContainer2");

  const jobTitleContainers = document.querySelectorAll(".jobTitleContainer");
  const jobTitles = document.querySelectorAll(".jobTitle");
  const projectTitle = document.querySelector(".projectsTitle");
  const phone = document.querySelectorAll(".phone");
  const laptop = document.querySelectorAll(".laptop");
  const contactContainer = document.querySelector(".contactContainer");

  for (let i = 0; i < 365; i++) {
    const el = document.createElement("div");

    const list = [
      0, 1, 2, 3, 41, 42, 43, 44, 82, 83, 123, 124, 125, 126, 164, 165, 166,
      167, 205, 206, 246, 247, 287, 288, 5, 6, 46, 47, 87, 88, 128, 129, 169,
      170, 210, 211, 251, 252, 292, 293, 8, 9, 14, 15, 49, 50, 51, 90, 91, 92,
      131, 132, 133, 134, 172, 173, 213, 214, 254, 255, 295, 296, 175, 176, 217,
      177, 218, 259, 55, 56, 96, 97, 137, 138, 178, 179, 219, 220, 260, 261,
      217, 218, 259, 260, 261, 301, 302, 17, 18, 19, 58, 59, 60, 61, 99, 100,
      102, 103, 140, 141, 144, 181, 182, 185, 222, 223, 225, 226, 263, 264, 265,
      266, 304, 305, 306, 24, 25, 65, 66, 67, 106, 107, 108, 147, 148, 149, 150,
      188, 189, 229, 230, 270, 271, 311, 312, 67, 108, 149, 150, 191, 232, 192,
      233, 274, 234, 275, 316, 194, 235, 276, 154, 195, 236, 73, 114, 155, 33,
      34, 74, 75, 115, 116, 156, 157, 197, 198, 238, 239, 279, 280, 320, 321,
      36, 37, 38, 39, 77, 78, 79, 80, 118, 119, 159, 160, 161, 162, 200, 201,
      202, 203, 241, 242, 282, 283, 284, 285, 323, 324, 325, 326,
    ];
    //classname
    el.classList = list.includes(i) ? "box active" : "box";
    boxContainer.appendChild(el);
  }

  window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    let offsetY = window.scrollY;
    let maxOffsetY = document.documentElement.scrollHeight - window.innerHeight;

    let baseWidth = 100;
    let baseMoonWidth = 1300;

    // Scale the sun image based on scroll position, using a base width
    sunImg.style.height = `${baseWidth + offsetY * 0.4}px`;
    sunImg.style.width = `${baseWidth + offsetY * 0.4}px`;
    saluteTextContainer.style.transform = `translateY(${offsetY * 0.5}px)`;
    saluteImgContainer.style.transform = `translate(${offsetY * 0.2}px,${
      -offsetY * 0.4
    }px) `;
    sunContainer.style.transform = `translateY(${offsetY * 0.5}px)`;

    moonContainer.style.transform = `translateX(${-offsetY * 0.1}px)`;
    moonImg.style.height = `${baseMoonWidth - offsetY * 0.5}px`;
    moonImg.style.width = `${baseMoonWidth - offsetY * 0.5}px`;
    mountContainer1.style.transform = `translateX(${-offsetY * 0.1}px)`;
    mountContainer2.style.transform = `translateX(${offsetY * 0.1}px)`;

    authorName.style.transform = `translateX(${offsetY * 0.1}px)`;
    jobTitleContainers[0].style.backgroundPositionY = `${offsetY * 0.5}px`;
    // jobTitleContainers[1].style.backgroundPositionY = `${-offsetY * 0.5}px`;
    jobTitles[0].style.transform = `translateX(calc(200vh - ${offsetY}px))`;
    // jobTitles[1].style.transform = `translateX(calc(-300vh + ${offsetY}px))`;
    projectTitle.style.transform = `translateX(calc(-300vh + ${offsetY}px))`;
    phone[0].style.transform = `translateX(calc(-380vh + ${offsetY}px))`;
    phone[1].style.transform = `translateX(calc(-780vh + ${offsetY}px))`;
    laptop[0].style.transform = `translateX(calc(-520vh + ${offsetY}px))`;
    laptop[1].style.transform = `translateX(calc(650vh - ${offsetY}px))`;

    let lastview = maxOffsetY - 500;

    if (offsetY >= lastview) {
      contactContainer.style.display = "none";
    } else {
      contactContainer.style.display = "flex";
    }
  });
});
