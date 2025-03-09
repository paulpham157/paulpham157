
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

  particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js loaded');
  });

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
  - game: Launch snake game`,
    
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
  
// Initialize features
document.addEventListener('DOMContentLoaded', () => {
    terminal.init();
    audioVisualizer.init();
  });

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
  