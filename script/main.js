function updateTimePassed() {
  const startDate = new Date("2024-01-01T00:00:00");
  const now = new Date();
  const diff = now - startDate; // 时间差毫秒数

  // 计算天、时、分、秒
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  // 更新页面元素显示时间
  const displayElement = document.querySelector(".time-passed-display");
  displayElement.textContent = `我们已经交往了${days}天${hours}小时${minutes}分钟${seconds}秒！`;
}

// 使用setInterval每秒调用updateTimePassed函数
setInterval(updateTimePassed, 1000);

function hideTimePassedDisplay() {
  // 直接设置元素为非可见
  const displayElement = document.querySelector(".time-passed-display");
  displayElement.style.visibility = 'hidden';
}

// Animation Timeline
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  const tl = new TimelineMax();

  tl.to(".container", 0.1, {
    visibility: "visible",
  })

    .from(".one", 0.7, {
      opacity: 0,
      y: 10,
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=2.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10,
      // scale: 0.7
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=2"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0,
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0,
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible",
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)",
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=0.7"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      transformOrigin: "right bottom",
      color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=0.5"
    )
    .to(
      ".idea-5 span",
      0.7,
      {
        rotation: 90,
        x: 8,
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0,
      },
      "+=2"
    )

    // .staggerFrom(
    //   ".idea-6xxx span",
    //   0.8,
    //   {
    //     scale: 3,
    //     opacity: 0,
    //     rotation: 15,
    //     ease: Expo.easeOut,
    //   },
    //   0.2
    // )
    // .staggerTo(
    //   ".idea-6xxx span",
    //   0.8,
    //   {
    //     scale: 3,
    //     opacity: 0,
    //     rotation: -15,
    //     ease: Expo.easeOut,
    //   },
    //   0.2,
    //   "+=1"
    // )
    .from(".six-idea-0-1", 1, ideaTextTrans)
    .to(".six-idea-0-1 strong", 0.8, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
    })
    .to(".six-idea-0-1", 1, ideaTextTransLeave, "+=1.5")
    .from(".six-idea-0-2", 1.5, ideaTextTrans)
    .to(".six-idea-0-3", 1.5, ideaTextTransLeave, "+=1.5")
    .from(".six-idea-0-3", 1.5, ideaTextTrans)
    .to(".six-idea-0-2", 1.5, ideaTextTransLeave, "+=1.5")
    .from(".six-idea-1", 0.7, ideaTextTrans)
    .to(".six-idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".six-idea-2", 0.7, ideaTextTrans)
    .to(".six-idea-2 strong", 0.8, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(70, 226, 212)",
    })
    .to(".six-idea-2", 1.5, ideaTextTransLeave, "+=1.5")
    .from(".six-idea-3", 1.5, ideaTextTrans)
    .to(".six-idea-3", 1, ideaTextTransLeave, "+=1.5")
    .from(".six-idea-4", 1.5, ideaTextTrans)
    .to(".six-idea-4", 1, ideaTextTransLeave, "+=1.5")
    .from(".six-idea-5", 1.5, ideaTextTrans)
    .to(".six-idea-5", 1, ideaTextTransLeave, "+=1.5")
    .from(".six-idea-6", 1.5, ideaTextTrans)
    .to(".six-idea-6", 1, ideaTextTransLeave, "+=1.5")
    .from(".six-idea-7", 1.5, ideaTextTrans)
    .to(".six-idea-7", 1, ideaTextTransLeave, "+=1.5")
    .from(".six-idea-8", 1.5, ideaTextTrans)
    .to(".six-idea-8", 1, ideaTextTransLeave, "+=1.5")
    .from(".six-idea-9", 1.5, ideaTextTrans)
    .to(".six-idea-9", 1, ideaTextTransLeave, "+=1.5")
    .from(".six-idea-10", 1.5, ideaTextTrans)
    .to(".six-idea-10", 1, ideaTextTransLeave, "+=1.5")
    .from(".six-idea-11", 1.5, ideaTextTrans)
    .to(".six-idea-11", 1.5, ideaTextTransLeave, "+=1.5")
    .from(".six-idea-12", 1.5, ideaTextTrans)
    .to(".six-idea-12", 1.5, ideaTextTransLeave, "+=1.5")
    .from(".six-idea-12-1", 1.5, ideaTextTrans)
    .to(".six-idea-12-1", 1.5, ideaTextTransLeave, "+=1.5")
    .from(".six-idea-12-2", 1.5, ideaTextTrans)
    .to(".six-idea-12-2", 1.5, ideaTextTransLeave, "+=1.5")
    .from(".six-idea-13", 3, ideaTextTrans)
    .fromTo(".six-idea-13 strong", 2, {
      autoAlpha: 0, // GSAP的autoAlpha会同时管理透明度和可见性，设置为0使元素不可见
      scale: 1.2,
      x: 10,
    }, {
      autoAlpha: 1, // 动画目标是使元素变得可见
      scale: 1.2,
      x: 10,
    })
    .to(".six-idea-13", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".time-passed-display", 2, ideaTextTrans)
    .to(".time-passed-display", 2, ideaTextTransLeave, "+=3")
    // .call(updateTimePassed) // 更新时间统计一次
    // .set({}, {}, "+=5") // 等待3秒
    // .call(hideTimePassedDisplay) // 调用函数来隐藏时间显示
    .from(".six-idea-14", 1.5, ideaTextTrans)
    .fromTo(".six-idea-14 strong", 2, {
      autoAlpha: 0, // GSAP的autoAlpha会同时管理透明度和可见性，设置为0使元素不可见
      scale: 1.2,
      x: 10,
    }, {
      autoAlpha: 1, // 动画目标是使元素变得可见
      scale: 1.2,
      x: 10,
    })
    .to(".six-idea-14", 1.5, ideaTextTransLeave, "+=1.5")
    .from(".six-idea-15", 1.5, ideaTextTrans)
    .fromTo(".six-idea-15 strong", 2, {
      autoAlpha: 0, // GSAP的autoAlpha会同时管理透明度和可见性，设置为0使元素不可见
      scale: 1.2,
      x: 10,
    }, {
      autoAlpha: 1, // 动画目标是使元素变得可见
      scale: 1.2,
      x: 10,
    })
    .to(".six-idea-15", 1.5, ideaTextTransLeave, "+=1.5")
    .from(".six-idea-16", 1.5, ideaTextTrans)
    .to(".six-idea-16", 1.5, ideaTextTransLeave, "+=1.5")
    .from(".six-idea-17", 1.5, ideaTextTrans)
    .to(".six-idea-17", 1.5, ideaTextTransLeave, "+=1.5")

    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )
    .from(
      ".girl-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90,
      },
      "+=1"
    );

  // tl.seek("currentStep");
  // tl.timeScale(2);

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then((data) => data.json())
    .then((data) => {
      Object.keys(data).map((customData) => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .getElementById(customData)
              .setAttribute("src", data[customData]);
          } else {
            document.getElementById(customData).innerText = data[customData];
          }
        }
      });
    });
};

// Run fetch and animation in sequence
const resolveFetch = () => {
  return new Promise((resolve, reject) => {
    fetchData();
    resolve("Fetch done!");
  });
};

resolveFetch().then(animationTimeline());
