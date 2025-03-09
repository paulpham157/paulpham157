# Hi there! | Xin chào! <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand.png" alt="Waving Hand" width="35" height="35" />

<!-- 3D Hologram Avatar -->
<div align="center" style="margin: 20px 0;">
  <div class="hologram-container" style="position: relative; width: 200px; height: 200px; margin: 0 auto;">
    <div class="hologram" style="position: relative; width: 100%; height: 100%; transform-style: preserve-3d; animation: float 3s ease-in-out infinite;">
      <img src="https://avatars.githubusercontent.com/paulpham157" alt="Profile Avatar" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">
      <div class="hologram-ring" style="position: absolute; top: -10px; left: -10px; right: -10px; bottom: -10px; border: 2px solid rgba(47, 129, 247, 0.5); border-radius: 50%; animation: spin 10s linear infinite;"></div>
      <div class="hologram-glow" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 50% 50%, rgba(47, 129, 247, 0.2), transparent); border-radius: 50%; filter: blur(10px); animation: pulse 2s ease-in-out infinite;"></div>
    </div>
    <div class="scan-line" style="position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, #2F81F7, transparent); animation: scan 2s linear infinite;"></div>
  </div>
</div>

<!-- Header Animation -->
<div id="header-container">
  <div id="particles-js"></div>
</div>

<style>
#header-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.animated-title {
  position: relative;
  z-index: 2;
  text-align: center;
  padding-top: 20vh;
}

.typing-effect {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid;
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
}

.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 3;
}

/* Interactive Elements */
.tech-card {
  perspective: 1000px;
  transition: transform 0.6s;
}

.tech-card:hover {
  transform: rotateY(180deg);
}

.skill-bar {
  height: 20px;
  background: linear-gradient(90deg, #2F81F7 var(--progress), transparent var(--progress));
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}

.skill-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 100%);
  animation: shine 2s infinite;
}

.project-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(47, 129, 247, 0.2);
}
</style>

<script>
// Particle.js Configuration
particlesJS('particles-js', {
  particles: {
    number: { value: 80 },
    color: { value: '#2F81F7' },
    shape: { type: 'circle' },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'repulse' },
      onclick: { enable: true, mode: 'push' },
      resize: true
    }
  }
});

// Typing Animation
const text = "Xin chào, mình là Paul Pham 👋";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.querySelector(".typing-effect").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
window.addEventListener('load', typeWriter);
</script>

<!-- Matrix Rain Effect -->
<div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: -1;">
  <canvas id="matrix" style="opacity: 0.1;"></canvas>
  <script>
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const chars = 'ポケモン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#2F81F7';
      ctx.font = fontSize + 'px monospace';
      
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }
    setInterval(draw, 33);
  </script>
</div>

<div align="center">
  <!-- Particle.js Background -->
  <div id="particles-js" style="position: absolute; width: 100%; height: 100%; z-index: -1;">
    <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
    <script>
      particlesJS.load('particles-js', 'particles.json', function() {
        console.log('particles.js loaded');
      });
    </script>
  </div>

  <!-- Animated Title -->
  <div style="background: linear-gradient(45deg, #2F81F7, #238636, #FF6B6B); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 3em; font-weight: bold; margin: 20px 0;">
    <img src="https://readme-typing-svg.herokuapp.com?font=Space+Grotesk&size=35&duration=2800&pause=2000&color=2F81F7&center=true&vCenter=true&width=940&lines=Welcome+to+my+GitHub+Profile!;Chào+mừng+đến+với+GitHub+của+tôi!;Full-stack+Developer+%26+DevOps+Engineer;AI+%26+Automation+Enthusiast" alt="Typing SVG" />
  </div>

## 🚀 About Me | Về Tôi
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
  <!-- Row 1, Column 1: 3D Hologram -->
  <div>
    <div class="hologram-container" style="position: relative; width: 200px; height: 200px; margin: 0 auto;">
      <div class="hologram" style="position: relative; width: 100%; height: 100%; transform-style: preserve-3d; animation: float 3s ease-in-out infinite;">
        <img src="https://github.com/paulpham157/5DC4812A-547E-4EC0-AE96-5B12CA03B767_1_105_c.jpeg" alt="Profile Avatar" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">
        <div class="hologram-ring" style="position: absolute; top: -10px; left: -10px; right: -10px; bottom: -10px; border: 2px solid rgba(47, 129, 247, 0.5); border-radius: 50%; animation: spin 10s linear infinite;"></div>
        <div class="hologram-glow" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 50% 50%, rgba(47, 129, 247, 0.2), transparent); border-radius: 50%; filter: blur(10px); animation: pulse 2s ease-in-out infinite;"></div>
      </div>
      <div class="scan-line" style="position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, #2F81F7, transparent); animation: scan 2s linear infinite;"></div>
    </div>
  </div>

  <!-- Row 1, Column 2: Ask me about -->
  <div>
    <h3>💬 Ask me about | Hãy hỏi tôi về:</h3>
    <div>
      <span>LLMOps</span>
      <span>DevOps</span>
      <span>SecOps</span>
      <span>CI/CD Pipespanne</span>
      <span>Test Automation with BDD Framework</span>
      <span>Browser Automation</span>
    </div>
  </div>

  <!-- Row 2, Column 1: I'm interesting with -->
  <div>
    <h3>🌱 I'm interesting with | Tôi quan tâm đến:</h3>
    <div>
      <span>Large Language Models (LLM)</span>
      <span>Retrieval Augmented Generation (RAG)</span>
      <span>Deep Research</span>
      <span>Text-to-Speech (TTS)</span>
      <span>Streaming Technologies</span>
      <span>Image AI Generation</span>
      <span>Voice Cloning</span>
      <span>Video AI Generation</span>
      <span>AI Agents & Automation</span>
      <span>Workflow Optimization</span>
    </div>
  </div>
  <!-- Row 2, Column 2: Coding GIF -->
  <div>
    <img alt="Coding" width="100%" src="https://user-images.githubusercontent.com/74038190/229223263-cf2e4b07-2615-4f87-9c38-e37600f8381a.gif">
  </div>

</div>

<!-- 3D Timeline Animation -->
<div style="margin: 50px 0;">
  <h2 align="center" style="color: #2F81F7; text-shadow: 0 0 10px rgba(47, 129, 247, 0.5);">
    <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Hourglass%20Done.png" alt="Hourglass" width="25" height="25" />
    Journey & Milestones | Hành Trình & Cột Mốc
  </h2>
  
  <div class="timeline" style="position: relative; max-width: 1200px; margin: 40px auto;">
    <div style="position: absolute; width: 2px; height: 100%; background: linear-gradient(180deg, #2F81F7, #238636, #FF6B6B); left: 50%; transform: translateX(-50%);"></div>
    
    <!-- Timeline Items -->
    <div class="timeline-item" style="position: relative; margin: 40px 0; width: 50%; padding-right: 50px; transform-style: preserve-3d; perspective: 1000px;">
      <div style="background: rgba(47, 129, 247, 0.1); backdrop-filter: blur(10px); border-radius: 15px; padding: 20px; border: 1px solid rgba(47, 129, 247, 0.2); transform: rotateY(-10deg) translateZ(20px); transition: all 0.3s ease;" onmouseover="this.style.transform='rotateY(0deg) translateZ(40px)'" onmouseout="this.style.transform='rotateY(-10deg) translateZ(20px)'">
        <h3 style="color: #2F81F7; margin-bottom: 10px;">2024 - Present</h3>
        <p style="color: #E3E3E3;">Exploring AI & Automation</p>
        <ul style="color: #E3E3E3; margin-top: 10px;">
          <li>Large Language Models (LLM)</li>
          <li>AI Agents Development</li>
          <li>Workflow Automation</li>
        </ul>
      </div>
      <div style="position: absolute; right: 40px; top: 20px; width: 20px; height: 20px; background: #2F81F7; border-radius: 50%; box-shadow: 0 0 10px #2F81F7;"></div>
    </div>
    
    <div class="timeline-item" style="position: relative; margin: 40px 0; width: 50%; padding-left: 50px; left: 50%; transform-style: preserve-3d; perspective: 1000px;">
      <div style="background: rgba(35, 134, 54, 0.1); backdrop-filter: blur(10px); border-radius: 15px; padding: 20px; border: 1px solid rgba(35, 134, 54, 0.2); transform: rotateY(10deg) translateZ(20px); transition: all 0.3s ease;" onmouseover="this.style.transform='rotateY(0deg) translateZ(40px)'" onmouseout="this.style.transform='rotateY(10deg) translateZ(20px)'">
        <h3 style="color: #238636; margin-bottom: 10px;">2023</h3>
        <p style="color: #E3E3E3;">DevOps & Cloud Architecture</p>
        <ul style="color: #E3E3E3; margin-top: 10px;">
          <li>CI/CD Pipeline Implementation</li>
          <li>Cloud Infrastructure Design</li>
          <li>Microservices Architecture</li>
        </ul>
      </div>
      <div style="position: absolute; left: 40px; top: 20px; width: 20px; height: 20px; background: #238636; border-radius: 50%; box-shadow: 0 0 10px #238636;"></div>
    </div>
    
    <div class="timeline-item" style="position: relative; margin: 40px 0; width: 50%; padding-right: 50px; transform-style: preserve-3d; perspective: 1000px;">
      <div style="background: rgba(255, 107, 107, 0.1); backdrop-filter: blur(10px); border-radius: 15px; padding: 20px; border: 1px solid rgba(255, 107, 107, 0.2); transform: rotateY(-10deg) translateZ(20px); transition: all 0.3s ease;" onmouseover="this.style.transform='rotateY(0deg) translateZ(40px)'" onmouseout="this.style.transform='rotateY(-10deg) translateZ(20px)'">
        <h3 style="color: #FF6B6B; margin-bottom: 10px;">2022</h3>
        <p style="color: #E3E3E3;">Full Stack Development</p>
        <ul style="color: #E3E3E3; margin-top: 10px;">
          <li>React & Node.js Applications</li>
          <li>Test Automation Framework</li>
          <li>E-commerce Solutions</li>
        </ul>
      </div>
      <div style="position: absolute; right: 40px; top: 20px; width: 20px; height: 20px; background: #FF6B6B; border-radius: 50%; box-shadow: 0 0 10px #FF6B6B;"></div>
    </div>
  </div>
</div>

<!-- Project Showcase -->
<div style="margin: 50px 0;">
  <h2 align="center" style="color: #2F81F7; text-shadow: 0 0 10px rgba(47, 129, 247, 0.5);">
    <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Rocket.png" alt="Rocket" width="25" height="25" />
    Featured Projects | Dự Án Nổi Bật
  </h2>
  
  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 30px; margin: 40px 0;">
    <!-- Project Card 1 -->
    <div class="project-card" style="width: 350px; transform-style: preserve-3d; perspective: 1000px;">
      <div style="background: rgba(47, 129, 247, 0.1); backdrop-filter: blur(10px); border-radius: 20px; padding: 25px; border: 1px solid rgba(47, 129, 247, 0.2); transform: rotateY(0deg); transition: transform 0.5s ease;" onmouseover="this.style.transform='rotateY(10deg)'" onmouseout="this.style.transform='rotateY(0deg)'">
        <div style="position: relative;">
          <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Robot.png" alt="AI" width="40" height="40" style="margin-bottom: 15px;" />
          <h3 style="color: #2F81F7; margin-bottom: 10px;">AI Assistant Platform</h3>
          <p style="color: #E3E3E3; margin-bottom: 15px;">Advanced AI platform leveraging LLMs for automated task completion and workflow optimization.</p>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 15px;">
            <span style="background: rgba(47, 129, 247, 0.2); color: #2F81F7; padding: 5px 10px; border-radius: 15px; font-size: 0.8em;">Python</span>
            <span style="background: rgba(47, 129, 247, 0.2); color: #2F81F7; padding: 5px 10px; border-radius: 15px; font-size: 0.8em;">LangChain</span>
            <span style="background: rgba(47, 129, 247, 0.2); color: #2F81F7; padding: 5px 10px; border-radius: 15px; font-size: 0.8em;">FastAPI</span>
          </div>
          <a href="#" style="display: inline-block; background: linear-gradient(45deg, #2F81F7, #238636); color: white; padding: 8px 20px; border-radius: 20px; text-decoration: none; transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">View Project →</a>
        </div>
      </div>
    </div>
    
    <!-- Project Card 2 -->
    <div class="project-card" style="width: 350px; transform-style: preserve-3d; perspective: 1000px;">
      <div style="background: rgba(35, 134, 54, 0.1); backdrop-filter: blur(10px); border-radius: 20px; padding: 25px; border: 1px solid rgba(35, 134, 54, 0.2); transform: rotateY(0deg); transition: transform 0.5s ease;" onmouseover="this.style.transform='rotateY(10deg)'" onmouseout="this.style.transform='rotateY(0deg)'">
        <div style="position: relative;">
          <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Gear.png" alt="Automation" width="40" height="40" style="margin-bottom: 15px;" />
          <h3 style="color: #238636; margin-bottom: 10px;">DevOps Automation Suite</h3>
          <p style="color: #E3E3E3; margin-bottom: 15px;">Comprehensive DevOps toolkit for automated deployment, testing, and monitoring.</p>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 15px;">
            <span style="background: rgba(35, 134, 54, 0.2); color: #238636; padding: 5px 10px; border-radius: 15px; font-size: 0.8em;">Docker</span>
            <span style="background: rgba(35, 134, 54, 0.2); color: #238636; padding: 5px 10px; border-radius: 15px; font-size: 0.8em;">Kubernetes</span>
            <span style="background: rgba(35, 134, 54, 0.2); color: #238636; padding: 5px 10px; border-radius: 15px; font-size: 0.8em;">Terraform</span>
          </div>
          <a href="#" style="display: inline-block; background: linear-gradient(45deg, #238636, #FF6B6B); color: white; padding: 8px 20px; border-radius: 20px; text-decoration: none; transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">View Project →</a>
        </div>
      </div>
    </div>
    
    <!-- Project Card 3 -->
    <div class="project-card" style="width: 350px; transform-style: preserve-3d; perspective: 1000px;">
      <div style="background: rgba(255, 107, 107, 0.1); backdrop-filter: blur(10px); border-radius: 20px; padding: 25px; border: 1px solid rgba(255, 107, 107, 0.2); transform: rotateY(0deg); transition: transform 0.5s ease;" onmouseover="this.style.transform='rotateY(10deg)'" onmouseout="this.style.transform='rotateY(0deg)'">
        <div style="position: relative;">
          <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Shopping%20Cart.png" alt="E-commerce" width="40" height="40" style="margin-bottom: 15px;" />
          <h3 style="color: #FF6B6B; margin-bottom: 10px;">E-commerce Platform</h3>
          <p style="color: #E3E3E3; margin-bottom: 15px;">Modern e-commerce solution with AI-powered recommendations and real-time analytics.</p>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 15px;">
            <span style="background: rgba(255, 107, 107, 0.2); color: #FF6B6B; padding: 5px 10px; border-radius: 15px; font-size: 0.8em;">Next.js</span>
            <span style="background: rgba(255, 107, 107, 0.2); color: #FF6B6B; padding: 5px 10px; border-radius: 15px; font-size: 0.8em;">Node.js</span>
            <span style="background: rgba(255, 107, 107, 0.2); color: #FF6B6B; padding: 5px 10px; border-radius: 15px; font-size: 0.8em;">MongoDB</span>
          </div>
          <a href="#" style="display: inline-block; background: linear-gradient(45deg, #FF6B6B, #2F81F7); color: white; padding: 8px 20px; border-radius: 20px; text-decoration: none; transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">View Project →</a>
        </div>
      </div>
    </div>
  </div>
</div>

## 🛠️ Tech Stack | Công Nghệ

<div align="center">

### Languages & Frameworks | Ngôn Ngữ & Framework
![Java](https://img.shields.io/badge/-Java-05122A?style=flat&logo=java)&nbsp;
![Python](https://img.shields.io/badge/-Python-05122A?style=flat&logo=python)&nbsp;
![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript)&nbsp;
![HTML5](https://img.shields.io/badge/-HTML5-05122A?style=flat&logo=html5)&nbsp;
![CSS3](https://img.shields.io/badge/-CSS3-05122A?style=flat&logo=css3)&nbsp;
![PHP](https://img.shields.io/badge/-PHP-05122A?style=flat&logo=php)&nbsp;
![React](https://img.shields.io/badge/-React-05122A?style=flat&logo=react)&nbsp;
![Next.js](https://img.shields.io/badge/-Next.js-05122A?style=flat&logo=next.js)&nbsp;
![Node.js](https://img.shields.io/badge/-Node.js-05122A?style=flat&logo=node.js)&nbsp;
![React Native](https://img.shields.io/badge/-React_Native-05122A?style=flat&logo=react)&nbsp;

### Testing & Automation | Kiểm Thử & Tự Động Hóa
![Selenium](https://img.shields.io/badge/-Selenium-05122A?style=flat&logo=selenium)&nbsp;
![Playwright](https://img.shields.io/badge/-Playwright-05122A?style=flat&logo=playwright)&nbsp;
![Appium](https://img.shields.io/badge/-Appium-05122A?style=flat&logo=appium)&nbsp;
![TestNG](https://img.shields.io/badge/-TestNG-05122A?style=flat&logo=testng)&nbsp;
![Cucumber](https://img.shields.io/badge/-Cucumber-05122A?style=flat&logo=cucumber)&nbsp;
![Jenkins](https://img.shields.io/badge/-Jenkins-05122A?style=flat&logo=jenkins)&nbsp;
![n8n](https://img.shields.io/badge/-n8n-05122A?style=flat&logo=n8n)&nbsp;

### CMS & E-commerce | Hệ Thống CMS & Thương Mại Điện Tử
![WordPress](https://img.shields.io/badge/-WordPress-05122A?style=flat&logo=wordpress)&nbsp;
![Drupal](https://img.shields.io/badge/-Drupal-05122A?style=flat&logo=drupal)&nbsp;
![Magento](https://img.shields.io/badge/-Magento-05122A?style=flat&logo=magento)&nbsp;
![Shopify](https://img.shields.io/badge/-Shopify-05122A?style=flat&logo=shopify)&nbsp;

### Development Tools | Công Cụ Phát Triển
![Git](https://img.shields.io/badge/-Git-05122A?style=flat&logo=git)&nbsp;
![GitHub](https://img.shields.io/badge/-GitHub-05122A?style=flat&logo=github)&nbsp;
![Visual Studio Code](https://img.shields.io/badge/-Visual%20Studio%20Code-05122A?style=flat&logo=visual-studio-code&logoColor=007ACC)&nbsp;
![IntelliJ IDEA](https://img.shields.io/badge/-IntelliJ%20IDEA-05122A?style=flat&logo=intellij-idea)&nbsp;
![Cursor](https://img.shields.io/badge/-Cursor-05122A?style=flat&logo=cursor)&nbsp;
![Trae](https://img.shields.io/badge/-Tauri-05122A?style=flat)&nbsp;
![Winsuft](https://img.shields.io/badge/-WinSW-05122A?style=flat)&nbsp;
![Zed](https://img.shields.io/badge/-Zed%20AI-05122A?style=flat)&nbsp;

### Package Managers | Quản Lý Gói
![npm](https://img.shields.io/badge/-npm-05122A?style=flat&logo=npm)&nbsp;
![Yarn](https://img.shields.io/badge/-Yarn-05122A?style=flat&logo=yarn)&nbsp;
![Conda](https://img.shields.io/badge/-Conda-05122A?style=flat&logo=anaconda)&nbsp;
![Bun](https://img.shields.io/badge/-Bun-05122A?style=flat&logo=bun)&nbsp;

### Operating Systems & Cloud | Hệ Điều Hành & Đám Mây
![Amazon Web Services](https://img.shields.io/badge/-Amazon%20Web%20Services-05122A?style=flat&logo=amazon-aws)&nbsp;
![GCP](https://img.shields.io/badge/-Google%20Cloud-05122A?style=flat&logo=google-cloud)&nbsp;
![Azure](https://img.shields.io/badge/-Azure-05122A?style=flat&logo=microsoft-azure)&nbsp;
![GoDaddy](https://img.shields.io/badge/-GoDaddy-05122A?style=flat&logo=godaddy)&nbsp;
![CMC](https://img.shields.io/badge/-CMC-05122A?style=flat)&nbsp;
![TenTen](https://img.shields.io/badge/-TenTen-05122A?style=flat)&nbsp;
![PA Vietnam](https://img.shields.io/badge/-PA%20Vietnam-05122A?style=flat)&nbsp;
![Mat Bao](https://img.shields.io/badge/-Mat%20Bao-05122A?style=flat)&nbsp;
![Tinh Van](https://img.shields.io/badge/-Tinh%20Van-05122A?style=flat)&nbsp;

![Linux](https://img.shields.io/badge/-Linux-05122A?style=flat&logo=linux)&nbsp;
![macOS](https://img.shields.io/badge/-macOS-05122A?style=flat&logo=apple)&nbsp;
![Android](https://img.shields.io/badge/-Android-05122A?style=flat&logo=android)&nbsp;
![iOS](https://img.shields.io/badge/-iOS-05122A?style=flat&logo=ios)&nbsp;
![Windows](https://img.shields.io/badge/-Windows-05122A?style=flat&logo=windows)&nbsp;

![Ubuntu](https://img.shields.io/badge/-Ubuntu-05122A?style=flat&logo=ubuntu)&nbsp;
![Manjaro](https://img.shields.io/badge/-Manjaro-05122A?style=flat&logo=manjaro)&nbsp;
![Red Hat](https://img.shields.io/badge/-Red%20Hat-05122A?style=flat&logo=red-hat)&nbsp;
![Wear OS](https://img.shields.io/badge/-Wear%20OS-05122A?style=flat&logo=wear-os)&nbsp;
![Raspberry Pi](https://img.shields.io/badge/-Raspberry%20Pi%20OS-05122A?style=flat&logo=raspberry-pi)&nbsp;
![Debian](https://img.shields.io/badge/-Debian-05122A?style=flat&logo=debian)&nbsp;
![LineageOS](https://img.shields.io/badge/-LineageOS-05122A?style=flat&logo=lineageos)&nbsp;

### Shell Scripting | Lập Trình Shell
![Bash](https://img.shields.io/badge/-Bash-05122A?style=flat&logo=gnu-bash)&nbsp;
![Zsh](https://img.shields.io/badge/-Zsh-05122A?style=flat&logo=gnu-bash)&nbsp;
![PowerShell](https://img.shields.io/badge/-PowerShell-05122A?style=flat&logo=powershell)&nbsp;
![CMD](https://img.shields.io/badge/-CMD-05122A?style=flat&logo=windows-terminal)&nbsp;
![Shell](https://img.shields.io/badge/-Shell-05122A?style=flat&logo=shell)&nbsp;

</div>

## 📊 GitHub Analytics (Publish repositories - open source) | Phân Tích GitHub (Chỉ gồm những dự án mã nguồn mở)

  <!-- Activity Graph with Glassmorphism -->
  <div style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border-radius: 10px; padding: 20px; margin: 20px 0;">
    <img src="https://github-readme-activity-graph.vercel.app/graph?username=paulpham157&theme=react-dark&hide_border=true&area=true" width="100%" alt="activity graph">
  </div>

  <!-- Trophy with Neon Effect -->
  <div style="filter: drop-shadow(0 0 10px #2F81F7);">
    <img src="https://github-profile-trophy.vercel.app/?username=paulpham157&theme=darkhub&no-frame=true&row=1&column=7" width="100%" alt="Trophy" />
  </div>
</div>

<div align="center">
  <img height="180em" src="https://github-readme-stats.vercel.app/api?username=paulpham157&show_icons=true&theme=github_dark&hide_border=true&date_format=M%20j%5B%2C%20Y%5D" />
  <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=paulpham157&layout=compact&theme=github_dark&hide_border=true" />
</div>

<div align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=paulpham157&theme=github-dark-blue&hide_border=true" />
</div>

## 🤝 Connect with Me | Kết Nối

<div align="center">
  
<p align="center">
<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://paulpham157.github.io/" alt="Contact QR Code">
</p>

[![Portfolio](https://img.shields.io/badge/-Portfolio-05122A?style=flat&logo=google-chrome)](https://paulpham157.github.io/)

</div>

---

<!-- Easter Eggs -->
<div style="position: fixed; bottom: 20px; right: 20px; z-index: 1000;">
  <div id="easter-egg-trigger" style="width: 40px; height: 40px; background: rgba(47, 129, 247, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
    <span style="font-size: 20px;">🎮</span>
  </div>
</div>

<script>
// Easter Eggs
let easterEggCount = 0;
const easterEggTrigger = document.getElementById('easter-egg-trigger');
easterEggTrigger.addEventListener('click', () => {
  easterEggCount++;
  switch(easterEggCount) {
    case 3:
      // Matrix rain becomes colorful
      document.getElementById('matrix').style.filter = 'hue-rotate(90deg)';
      break;
    case 5:
      // Trigger a particle explosion
      createParticleExplosion();
      break;
    case 7:
      // Rainbow mode
      document.body.style.animation = 'rainbow 5s linear infinite';
      break;
    case 10:
      // Reset everything
      easterEggCount = 0;
      document.getElementById('matrix').style.filter = 'none';
      document.body.style.animation = 'none';
      break;
  }
});

function createParticleExplosion() {
  const particles = document.createElement('div');
  particles.style.position = 'fixed';
  particles.style.top = '50%';
  particles.style.left = '50%';
  particles.style.pointerEvents = 'none';
  document.body.appendChild(particles);
  
  for(let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '10px';
    particle.style.height = '10px';
    particle.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    particle.style.borderRadius = '50%';
    const angle = (i / 30) * Math.PI * 2;
    const velocity = 10;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;
    particle.style.transform = 'translate(-50%, -50%)';
    
    gsap.to(particle, {
      x: vx * 50,
      y: vy * 50,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      onComplete: () => particle.remove()
    });
    
    particles.appendChild(particle);
  }
  
  setTimeout(() => particles.remove(), 1000);
}
</script>

  <!-- Random Quote -->
  <div style="background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); border-radius: 10px; padding: 20px; margin: 20px auto; max-width: 600px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(45deg, rgba(35, 134, 54, 0.1), rgba(255, 107, 107, 0.1)); opacity: 0.5;"></div>
    <div style="position: relative;">
      <h3 style="color: #238636; margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
        <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Light%20Bulb.png" alt="Light Bulb" width="25" height="25" />
        <span>Random Tech Quote</span>
      </h3>
      <div style="text-align: center; color: #E3E3E3; font-style: italic; position: relative;">
        <div id="quote" style="margin-bottom: 10px;">Loading...</div>
        <div id="author" style="color: #238636;"></div>
      </div>
    </div>
  </div>

  <script>
    const quotes = [
      { quote: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
      { quote: "First, solve the problem. Then, write the code.", author: "John Johnson" },
      { quote: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
      { quote: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine" },
      { quote: "The best error message is the one that never shows up.", author: "Thomas Fuchs" }
    ];
    
    function updateQuote() {
      const { quote, author } = quotes[Math.floor(Math.random() * quotes.length)];
      document.getElementById('quote').textContent = `"${quote}"`;
      document.getElementById('author').textContent = `- ${author}`;
    }
    
    updateQuote();
    setInterval(updateQuote, 10000);
  </script>

<style>
@keyframes rainbow {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}

.hidden-feature {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.hidden-feature:hover {
  opacity: 1;
}
</style>

<!-- Hidden Snake Game -->
<div id="snake-game" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(0, 0, 0, 0.9); padding: 20px; border-radius: 10px; z-index: 1000;">
  <canvas id="snake-canvas" width="400" height="400" style="border: 2px solid #2F81F7; border-radius: 5px;"></canvas>
  <div style="text-align: center; color: #E3E3E3; margin-top: 10px;">
    Score: <span id="snake-score">0</span>
    <br>
    <span style="font-size: 0.8em;">Use arrow keys to play</span>
  </div>
</div>

<script>
// Snake Game Logic
let snakeGame = {
  canvas: null,
  ctx: null,
  snake: [],
  food: null,
  direction: 'right',
  score: 0,
  gameLoop: null,
  
  init() {
    this.canvas = document.getElementById('snake-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.snake = [{x: 10, y: 10}];
    this.placeFood();
    this.direction = 'right';
    this.score = 0;
    document.getElementById('snake-score').textContent = this.score;
  },
  
  placeFood() {
    this.food = {
      x: Math.floor(Math.random() * 20),
      y: Math.floor(Math.random() * 20)
    };
  },
  
  draw() {
    // Clear canvas
    this.ctx.fillStyle = '#0D1117';
    this.ctx.fillRect(0, 0, 400, 400);
    
    // Draw snake
    this.ctx.fillStyle = '#2F81F7';
    this.snake.forEach(segment => {
      this.ctx.fillRect(segment.x * 20, segment.y * 20, 18, 18);
    });
    
    // Draw food
    this.ctx.fillStyle = '#FF6B6B';
    this.ctx.fillRect(this.food.x * 20, this.food.y * 20, 18, 18);
  },
  
  move() {
    const head = {...this.snake[0]};
    
    switch(this.direction) {
      case 'up': head.y--; break;
      case 'down': head.y++; break;
      case 'left': head.x--; break;
      case 'right': head.x++; break;
    }
    
    // Check collision with walls
    if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20) {
      this.gameOver();
      return;
    }
    
    // Check collision with self
    if (this.snake.some(segment => segment.x === head.x && segment.y === head.y)) {
      this.gameOver();
      return;
    }
    
    this.snake.unshift(head);
    
    // Check if food eaten
    if (head.x === this.food.x && head.y === this.food.y) {
      this.score += 10;
      document.getElementById('snake-score').textContent = this.score;
      this.placeFood();
    } else {
      this.snake.pop();
    }
  },
  
  gameOver() {
    clearInterval(this.gameLoop);
    alert(`Game Over! Score: ${this.score}`);
    this.init();
    this.start();
  },
  
  start() {
    if (this.gameLoop) clearInterval(this.gameLoop);
    this.gameLoop = setInterval(() => {
      this.move();
      this.draw();
    }, 100);
  }
};

// Initialize game but keep it hidden
document.addEventListener('DOMContentLoaded', () => {
  snakeGame.init();
  
  // Secret key combination: Press 'S' three times quickly
  let sKeyPresses = [];
  document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 's') {
      sKeyPresses.push(Date.now());
      if (sKeyPresses.length === 3) {
        if (sKeyPresses[2] - sKeyPresses[0] < 1000) {
          // Show game
          document.getElementById('snake-game').style.display = 'block';
          snakeGame.init();
          snakeGame.start();
        }
        sKeyPresses = [];
      }
    }
  });
  
  // Game controls
  document.addEventListener('keydown', (e) => {
    if (document.getElementById('snake-game').style.display === 'block') {
      switch(e.key) {
        case 'ArrowUp':
          if (snakeGame.direction !== 'down') snakeGame.direction = 'up';
          break;
        case 'ArrowDown':
          if (snakeGame.direction !== 'up') snakeGame.direction = 'down';
          break;
        case 'ArrowLeft':
          if (snakeGame.direction !== 'right') snakeGame.direction = 'left';
          break;
        case 'ArrowRight':
          if (snakeGame.direction !== 'left') snakeGame.direction = 'right';
          break;
        case 'Escape':
          document.getElementById('snake-game').style.display = 'none';
          break;
      }
    }
  });
});
</script>

<!-- Lazy Loading Script -->
<script>
document.addEventListener("DOMContentLoaded", function() {
  const lazyImages = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => imageObserver.observe(img));
});
</script>

<!-- Responsive Design -->
<style>
/* Mobile First Base Styles */
:root {
  --container-width: 100%;
  --card-width: 100%;
  --font-size-base: 16px;
  --spacing-unit: 1rem;
}

/* Responsive Typography */
html {
  font-size: var(--font-size-base);
}

@media (min-width: 768px) {
  :root {
    --container-width: 750px;
    --card-width: 350px;
    --font-size-base: 18px;
  }
}

@media (min-width: 992px) {
  :root {
    --container-width: 970px;
    --font-size-base: 20px;
  }
}

/* Responsive Layout */
.container {
  width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--spacing-unit);
}

/* Responsive Grid System */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-unit);
}

/* Responsive Cards */
.tech-card,
.project-card {
  width: 100%;
  margin: var(--spacing-unit) 0;
}

@media (min-width: 768px) {
  .tech-card,
  .project-card {
    width: var(--card-width);
  }
}

/* Responsive Timeline */
.timeline {
  width: 100%;
  padding: 0 20px;
}

@media (min-width: 768px) {
  .timeline {
    width: 80%;
    margin: 0 auto;
  }
  
  .timeline-item {
    width: 50%;
    padding: 0 40px;
  }
  
  .timeline-item:nth-child(even) {
    margin-left: 50%;
  }
}

/* Responsive Images */
img {
  max-width: 100%;
  height: auto;
}

.responsive-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

@media (min-width: 768px) {
  .responsive-image {
    width: auto;
    max-width: 100%;
  }
}

/* Touch-friendly Elements */
.touch-target {
  min-height: 44px;
  min-width: 44px;
  padding: 12px;
}

/* Responsive Navigation */
.nav-menu {
  position: fixed;
  top: var(--header-height);
  left: -100%;
  width: 100%;
  height: calc(100vh - var(--header-height));
  background: rgba(13, 17, 23, 0.95);
  transition: left 0.3s ease;
}

.nav-menu.active {
  left: 0;
}

@media (min-width: 992px) {
  .nav-menu {
    position: static;
    width: auto;
    height: auto;
    background: none;
  }
}

/* Responsive Stats */
.stats-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-unit);
}

@media (min-width: 768px) {
  .stats-container {
    flex-direction: row;
  }
  
  .stats-item {
    flex: 1;
  }
}

/* Responsive Blog Posts */
.blog-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-unit);
}

@media (min-width: 768px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 992px) {
  .blog-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Responsive Terminal */
#terminal-container {
  width: 95%;
  height: 80vh;
}

@media (min-width: 768px) {
  #terminal-container {
    width: 80%;
    height: 70vh;
  }
}

/* Responsive Game */
#snake-game {
  width: 95%;
}

#snake-canvas {
  width: 300px;
  height: 300px;
}

@media (min-width: 768px) {
  #snake-game {
    width: auto;
  }
  
  #snake-canvas {
    width: 400px;
    height: 400px;
  }
}

/* Responsive Audio Visualizer */
#audio-visualizer {
  width: 95%;
}

#visualizer-canvas {
  width: 150px;
}

@media (min-width: 768px) {
  #audio-visualizer {
    width: auto;
  }
  
  #visualizer-canvas {
    width: 200px;
  }
}

/* Print Styles */
@media print {
  .no-print {
    display: none !important;
  }
  
  body {
    color: #000;
    background: #fff;
  }
  
  a {
    text-decoration: underline;
  }
  
  .container {
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }
}
</style>

<script>
// Responsive Navigation
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-button');
  const navMenu = document.querySelector('.nav-menu');
  
  if (menuButton && navMenu) {
    menuButton.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
});

// Responsive Image Loading
function loadResponsiveImage(img) {
  const screenWidth = window.innerWidth;
  const breakpoints = {
    small: 768,
    medium: 992,
    large: 1200
  };
  
  let srcToUse = img.dataset.src;
  
  if (screenWidth >= breakpoints.large && img.dataset.large) {
    srcToUse = img.dataset.large;
  } else if (screenWidth >= breakpoints.medium && img.dataset.medium) {
    srcToUse = img.dataset.medium;
  } else if (img.dataset.small) {
    srcToUse = img.dataset.small;
  }
  
  img.src = srcToUse;
}

// Initialize Responsive Features
function initResponsive() {
  // Handle responsive images
  const responsiveImages = document.querySelectorAll('img[data-src]');
  responsiveImages.forEach(loadResponsiveImage);
  
  // Handle touch events
  if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
  }
  
  // Update layout on orientation change
  window.addEventListener('orientationchange', () => {
    // Recalculate dimensions
    // Update layout
    // Adjust responsive elements
  });
}

// Initialize
initResponsive();
</script>

<script>
// Animate on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });
  
  elements.forEach(el => observer.observe(el));
};

// Fetch and display blog posts
const fetchBlogPosts = async () => {
  const postsContainer = document.getElementById('blog-posts');
  
  // Example blog posts (replace with actual API call)
  const posts = [
    {
      title: "Getting Started with LLMs",
      date: "2024-03-15",
      description: "A comprehensive guide to Large Language Models",
      url: "#"
    },
    {
      title: "DevOps Best Practices",
      date: "2024-03-10",
      description: "Essential DevOps practices for modern development",
      url: "#"
    },
    {
      title: "AI Automation Tips",
      date: "2024-03-05",
      description: "Automating workflows with AI",
      url: "#"
    }
  ];
  
  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.className = 'animate-on-scroll';
    postElement.style.cssText = `
      background: rgba(47, 129, 247, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 15px;
      padding: 20px;
      width: 300px;
      border: 1px solid rgba(47, 129, 247, 0.2);
      transition: transform 0.3s ease;
    `;
    
    postElement.innerHTML = `
      <h3 style="color: #2F81F7; margin-bottom: 10px;">${post.title}</h3>
      <p style="color: #E3E3E3; margin-bottom: 10px;">${post.description}</p>
      <div style="color: #238636; font-size: 0.9em;">${post.date}</div>
      <a href="${post.url}" style="color: #2F81F7; text-decoration: none; display: inline-block; margin-top: 10px;">Read more →</a>
    `;
    
    postElement.addEventListener('mouseover', () => {
      postElement.style.transform = 'translateY(-5px)';
    });
    
    postElement.addEventListener('mouseout', () => {
      postElement.style.transform = 'translateY(0)';
    });
    
    postsContainer.appendChild(postElement);
  });
};

// Initialize features
document.addEventListener('DOMContentLoaded', () => {
  animateOnScroll();
  fetchBlogPosts();
});
</script>

<!-- Interactive Terminal -->
<div id="terminal-container" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 80%; max-width: 800px; height: 60vh; background: rgba(13, 17, 23, 0.95); border-radius: 10px; padding: 20px; z-index: 1000; font-family: 'JetBrains Mono', monospace; overflow: hidden; border: 1px solid rgba(47, 129, 247, 0.3);">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
    <div style="display: flex; gap: 8px;">
      <div style="width: 12px; height: 12px; border-radius: 50%; background: #FF6B6B;"></div>
      <div style="width: 12px; height: 12px; border-radius: 50%; background: #FFD700;"></div>
      <div style="width: 12px; height: 12px; border-radius: 50%; background: #2F81F7;"></div>
    </div>
    <div style="color: #E3E3E3; font-size: 0.9em;">paulpham157@github:~</div>
  </div>
  <div id="terminal-output" style="color: #E3E3E3; height: calc(100% - 80px); overflow-y: auto; margin-bottom: 15px; line-height: 1.5;">
    Welcome to PaulPham157's Terminal! Type 'help' for available commands.
  </div>
  <div style="display: flex; align-items: center; color: #2F81F7;">
    <span>➜</span>
    <input type="text" id="terminal-input" style="flex: 1; background: transparent; border: none; color: #E3E3E3; font-family: inherit; margin-left: 10px; outline: none;" autofocus>
  </div>
</div>

<!-- Audio Visualizer -->
<div id="audio-visualizer" style="display: none; position: fixed; bottom: 20px; left: 20px; background: rgba(13, 17, 23, 0.9); border-radius: 10px; padding: 15px; z-index: 1000;">
  <div style="display: flex; align-items: center; gap: 15px;">
    <button id="play-button" style="background: none; border: none; color: #2F81F7; cursor: pointer; font-size: 24px;">▶️</button>
    <canvas id="visualizer-canvas" width="200" height="60" style="border-radius: 5px;"></canvas>
  </div>
  <div id="music-info" style="color: #E3E3E3; font-size: 0.9em; margin-top: 10px; text-align: center;">
    Lofi Coding Mix
  </div>
</div>

<script>
// Terminal Logic
const terminal = {
  commands: {
    help: () => `Available commands:
  - help: Show this help message
  - about: About me
  - skills: My technical skills
  - projects: My featured projects
  - contact: How to reach me
  - clear: Clear terminal
  - matrix: Toggle matrix rain effect
  - music: Toggle audio visualizer
  - game: Launch snake game
    
    about: () => `👋 Hi, I'm Paul Pham!
  🚀 Full-stack Developer & DevOps Engineer
  🤖 AI & Automation Enthusiast
  🌱 Currently exploring LLMs and RAG`,
    
    skills: () => `Technical Skills:
  Languages: Python (95%), JavaScript (90%), Java (85%)
  Frameworks: React (92%), Node.js (88%), Next.js (85%)
  Tools: Git (94%), Docker (89%), AWS (87%)`,
    
    projects: () => `Featured Projects:
  1. AI Assistant Platform
  2. DevOps Automation Suite
  3. E-commerce Platform
  Type 'project <number>' for details`,
    
    contact: () => `📫 How to reach me:
  - GitHub: @paulpham157
  - Portfolio: https://paulpham157.github.io/
  Scan the QR code on my profile for more!`,
    
    clear: () => '',
    
    matrix: () => {
      const matrix = document.getElementById('matrix');
      matrix.style.opacity = matrix.style.opacity === '0.1' ? '0.2' : '0.1';
      return 'Matrix rain effect toggled';
    },
    
    music: () => {
      const visualizer = document.getElementById('audio-visualizer');
      visualizer.style.display = visualizer.style.display === 'none' ? 'block' : 'none';
      return 'Audio visualizer toggled';
    },
    
    game: () => {
      document.getElementById('snake-game').style.display = 'block';
      return 'Snake game launched! Use arrow keys to play';
    },
  },
  
  init() {
    const container = document.getElementById('terminal-container');
    const input = document.getElementById('terminal-input');
    const output = document.getElementById('terminal-output');
    
    // Show terminal with 'T' key
    document.addEventListener('keydown', (e) => {
      if (e.key.toLowerCase() === 't') {
        container.style.display = container.style.display === 'none' ? 'block' : 'none';
        if (container.style.display === 'block') {
          input.focus();
        }
      }
    });
    
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = input.value.trim().toLowerCase();
        input.value = '';
        
        const response = this.execute(cmd);
        output.innerHTML += `<div style="margin-bottom: 10px;">
          <span style="color: #2F81F7;">➜</span> ${cmd}
          <div style="color: #E3E3E3; margin-top: 5px;">${response}</div>
        </div>`;
        
        output.scrollTop = output.scrollHeight;
      }
    });
  },
  
  execute(cmd) {
    if (cmd === '') return '';
    
    const [command, ...args] = cmd.split(' ');
    
    if (this.commands[command]) {
      return this.commands[command](args);
    }
    
    return `Command not found: ${command}. Type 'help' for available commands.`;
  }
};

// Audio Visualizer Logic
const audioVisualizer = {
  init() {
    const canvas = document.getElementById('visualizer-canvas');
    const ctx = canvas.getContext('2d');
    const audio = new Audio();
    audio.src = 'https://example.com/lofi-mix.mp3'; // Replace with actual music URL
    
    const playButton = document.getElementById('play-button');
    let isPlaying = false;
    
    playButton.addEventListener('click', () => {
      if (isPlaying) {
        audio.pause();
        playButton.textContent = '▶️';
      } else {
        audio.play();
        playButton.textContent = '⏸️';
      }
      isPlaying = !isPlaying;
    });
    
    // Create audio context and analyzer
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const analyzer = audioCtx.createAnalyser();
    const source = audioCtx.createMediaElementSource(audio);
    
    source.connect(analyzer);
    analyzer.connect(audioCtx.destination);
    
    analyzer.fftSize = 256;
    const bufferLength = analyzer.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    
    function draw() {
      requestAnimationFrame(draw);
      
      analyzer.getByteFrequencyData(dataArray);
      
      ctx.fillStyle = 'rgba(13, 17, 23, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const barWidth = (canvas.width / bufferLength) * 2.5;
      let barHeight;
      let x = 0;
      
      for(let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i] / 2;
        
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, '#2F81F7');
        gradient.addColorStop(1, '#238636');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        
        x += barWidth + 1;
      }
    }
    
    draw();
  }
};

// Initialize features
document.addEventListener('DOMContentLoaded', () => {
  terminal.init();
  audioVisualizer.init();
});
</script>

<style>
#terminal-output::-webkit-scrollbar {
  width: 8px;
}

#terminal-output::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

#terminal-output::-webkit-scrollbar-thumb {
  background: rgba(47, 129, 247, 0.5);
  border-radius: 4px;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

#terminal-input::after {
  content: '|';
  animation: blink 1s infinite;
}
</style>

<!-- Performance Optimizations -->
<script>
// Lazy Loading
const lazyLoad = {
  init() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    const lazyVideos = document.querySelectorAll('video[data-src]');
    const lazyIframes = document.querySelectorAll('iframe[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          element.src = element.dataset.src;
          element.removeAttribute('data-src');
          observer.unobserve(element);
        }
      });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
    lazyVideos.forEach(video => imageObserver.observe(video));
    lazyIframes.forEach(iframe => imageObserver.observe(iframe));
  }
};

// Animation Fallbacks
const animationFallbacks = {
  init() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.add('reduce-motion');
    }
    
    const reducedMotionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedMotionMediaQuery.addEventListener('change', () => {
      if (reducedMotionMediaQuery.matches) {
        document.documentElement.classList.add('reduce-motion');
      } else {
        document.documentElement.classList.remove('reduce-motion');
      }
    });
  }
};

// SVG Optimization
const svgOptimizer = {
  init() {
    const svgs = document.querySelectorAll('svg');
    svgs.forEach(svg => {
      // Remove unnecessary attributes
      svg.removeAttribute('xmlns:xlink');
      svg.removeAttribute('version');
      
      // Optimize path data
      const paths = svg.querySelectorAll('path');
      paths.forEach(path => {
        const d = path.getAttribute('d');
        path.setAttribute('d', d.replace(/\s+/g, ' ').trim());
      });
    });
  }
};

// Event Handler Optimization
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

// Performance Monitoring
const performanceMonitor = {
  init() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach(entry => {
          if (entry.duration > 100) {
            console.warn(`Performance issue detected: ${entry.name} took ${entry.duration}ms`);
          }
        });
      });
      
      observer.observe({ entryTypes: ['longtask', 'paint', 'layout-shift'] });
    }
    
    // Monitor memory usage
    if (performance.memory) {
      setInterval(() => {
        const memory = performance.memory;
        if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.9) {
          console.warn('High memory usage detected');
        }
      }, 5000);
    }
  }
};

// Initialize Performance Optimizations
document.addEventListener('DOMContentLoaded', () => {
  lazyLoad.init();
  animationFallbacks.init();
  svgOptimizer.init();
  performanceMonitor.init();
  
  // Optimize scroll and resize handlers
  const optimizedScroll = throttle(() => {
    // Update parallax effects
    // Update sticky elements
    // Update animations
  }, 100);
  
  const optimizedResize = debounce(() => {
    // Update layout
    // Recalculate dimensions
    // Adjust responsive elements
  }, 250);
  
  window.addEventListener('scroll', optimizedScroll);
  window.addEventListener('resize', optimizedResize);
});
</script>

<style>
/* Reduced Motion Styles */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

.reduce-motion * {
  animation: none !important;
  transition: none !important;
}

/* Performance Classes */
.will-change-transform {
  will-change: transform;
}

.hardware-accelerated {
  transform: translateZ(0);
  backface-visibility: hidden;
}

.content-visibility-auto {
  content-visibility: auto;
}
</style>

<style>
/* Visual Effects */
.neon-text {
  color: #2F81F7;
  text-shadow: 0 0 5px #2F81F7,
               0 0 10px #2F81F7,
               0 0 20px #2F81F7,
               0 0 40px #2F81F7;
  animation: neonPulse 1.5s ease-in-out infinite alternate;
}

@keyframes neonPulse {
  from { text-shadow: 0 0 5px #2F81F7, 0 0 10px #2F81F7, 0 0 20px #2F81F7; }
  to { text-shadow: 0 0 5px #2F81F7, 0 0 10px #2F81F7, 0 0 20px #2F81F7, 0 0 40px #2F81F7, 0 0 80px #2F81F7; }
}

.rainbow-text {
  background: linear-gradient(to right, #2F81F7, #238636, #FF6B6B, #FFD700, #FF1493);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: rainbow 8s linear infinite;
}

@keyframes rainbow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animated-icon {
  animation: iconFloat 3s ease-in-out infinite;
}

@keyframes iconFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Dynamic Content Styles */
.dynamic-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.quote-section {
  margin: 40px 0;
  text-align: center;
}

#quote-text {
  font-style: italic;
  margin-bottom: 10px;
}

#quote-author {
  color: #238636;
}
</style>

<style>
@keyframes float {
  0%, 100% { transform: translateY(0) rotateY(0); }
  50% { transform: translateY(-10px) rotateY(180deg); }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
}

@keyframes scan {
  0% { transform: translateY(0); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(200px); opacity: 0; }
}

.hologram-container:hover .hologram {
  animation-play-state: paused;
}

.hologram-container:hover .hologram-ring {
  border-color: rgba(47, 129, 247, 0.8);
  box-shadow: 0 0 20px rgba(47, 129, 247, 0.5);
}
</style>
