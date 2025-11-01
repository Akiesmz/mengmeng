window.addEventListener("DOMContentLoaded", () => {
    const confirmBtn = document.getElementById("confirm-btn");
    const backdrop = document.getElementById("start-backdrop");
    const popupLayer = document.getElementById("popup-layer");
    const bgMusic = document.getElementById("bgMusic");
  
    // 祝福语列表
    const messages = [
        "你超棒的 ✨",
        "记得好好休息 🌙",
        "每一刻都闪耀 💎",
        "保持活力状态 💪",
        "今天也要开心呀 🌸",
        "梦想成真 🌈",
        "学会爱自己 ❤️",
        "我爱你 ❤️",
        "我喜欢你 💕",
        "你是我最珍贵的礼物 🎁",
        "注意身体，别太累了 🌙",
        "我想你了 💭",
        "有你在身边真好 🌹",
        "你是我的小幸运 🍀",
        "愿你每天都笑得很甜 😘",
        "你是我心里最亮的星 ⭐",
        "和你在一起的每一刻都很幸福 💖",
        "你是我永远的宝贝 🐻",
        "愿你一生平安喜乐 🌸",
        "我会一直陪着你，不离不弃 🤝",
        "你是我最温柔的牵挂 🌷",
        "愿你每天都被爱包围 💞",
        "你是我心中最美的风景 🌈",
        "我想把全世界的温柔都给你 🌎"
      ];
      
  
    // 主题样式
    const themes = [
      "theme-blue","theme-green","theme-pink","theme-purple",
      "theme-yellow","theme-cyan","theme-red","theme-indigo",
      "theme-sky","theme-rose"
    ];
  
    // 动画方向
    const animations = [
      "anim-top","anim-bottom","anim-left","anim-right",
      "anim-topleft","anim-topright","anim-bottomleft","anim-bottomright"
    ];
  
    let count = 0; // 已生成的弹窗数量
    let timer = null;
  
// 点击“确定”按钮
confirmBtn.addEventListener("click", () => {
    backdrop.style.display = "none";
    bgMusic.play().catch(() => {});
  
    // 开始生成弹窗
    timer = setInterval(() => {
      if (count >= 1000) {
        clearInterval(timer);
        return;
      }
      createPopup();
      count++;
    }, 50);
  
    // 开始生成爱心
    setInterval(() => {
      createHeart();
    }, 200); // 每 200ms 出现一个爱心
  });
  
  // 生成爱心
  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤";
  
    // 随机位置和大小
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 12 + Math.random() * 24 + "px";
    heart.style.color = ["#ff4d6d", "#ff85a2", "#ffb3c6", "#ff3366"][Math.floor(Math.random() * 4)];
  
    document.body.appendChild(heart);
  
    // 动画结束后移除
    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
  
  
    function createPopup() {
      const message = messages[Math.floor(Math.random() * messages.length)];
      const theme = themes[Math.floor(Math.random() * themes.length)];
      const anim = animations[Math.floor(Math.random() * animations.length)];
  
      const popup = document.createElement("div");
      popup.className = `popup ${theme} ${anim}`;
      popup.innerHTML = `
        <div class="header">
          <span class="icon">🎁</span>
          <span class="title">惊喜礼物</span>
        </div>
        <div class="content">${message}</div>
      `;
  
      // 随机位置（允许堆叠）
      popup.style.position = "absolute";
      popup.style.top = Math.random() * 80 + "%";   // 0% ~ 80% 高度
      popup.style.left = Math.random() * 80 + "%";  // 0% ~ 80% 宽度
  
      // 不会消失，直接堆叠
      popupLayer.appendChild(popup);
    }
  });
  