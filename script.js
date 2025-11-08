// Language Configuration
const translations = {
  en: {
    // Navigation
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    philosophy: "Philosophy",
    contact: "Contact",
    
    // Header
    name: "Wasihun Abera",
    title: "Information Systems Student & Content Creator",
    viewWork: "View My Work",
    getInTouch: "Get In Touch",
    
    // About Section
    aboutTitle: "Building Digital Solutions for Real-World Problems",
    aboutText1: "I am <span class='highlight'>Wasihun Abera</span>, a third-year undergraduate in Information Systems at the <strong>University of Gondar</strong>. With strong skills in <strong>HTML, CSS, JavaScript</strong>, and <strong>Google Apps Script</strong>, I design and deploy web-based registration and management systems that solve real-world problems for schools, churches, and communities.",
    aboutText2: "My work emphasizes clarity, usability, and impact, ensuring that technology is both accessible and practical. Beyond academic projects, I am developing <span class='highlight'>BrightTap</span> — a smart learning access platform that empowers underserved communities through digital inclusion and low-bandwidth optimization.",
    aboutText3: "My long-term goal is to scale BrightTap into a widely used platform bridging the gap between education and technology. I am resourceful, impact-driven, and collaborative — always learning by doing and striving to make technology a tool for positive change.",
    connect: "Let's Connect",
    
    // Skills Section
    technicalSkills: "Technical Skills",
    toolsTechnologies: "Tools & Technologies",
    softSkills: "Soft Skills",
    problemSolving: "Problem Solving",
    communication: "Communication",
    teamCollaboration: "Team Collaboration",
    adaptability: "Adaptability",
    awardsCertificates: "Awards & Certificates",
    backToSkills: "Back to Skills",
    uploadImages: "Upload and Display Images",
    chooseImages: "Choose Images",
    uploadCertificates: "Upload New Certificates",
    dragDrop: "Drag & drop your certificate images here",
    orClick: "or click to browse",
    englishTest: "English Level Test",
    englishScore: "Score: 96% | Level: C2",
    englishTestOrg: "Independent test center \"English Tests Online\"",
    englishDate: "Completed: January 2023",
    mersCourse: "MERS Course",
    mersDescription: "Detection, Prevention, Response",
    mersTitle: "MERS: Detection, Prevention, Response",
    who: "World Health Organization",
    mersDate: "Completed: February 8, 2023",
    viewCertificate: "View Certificate",
    verifyCertificate: "Verify Certificate",
    
    // Projects Section
    universityPortal: "University Portal System",
    universityPortalDesc: "A comprehensive web portal for students to access course materials, grades, and university announcements with real-time updates.",
    brightTap: "BrightTap Learning Platform",
    brightTapDesc: "A smart learning access platform that empowers underserved communities through digital inclusion and low-bandwidth optimization.",
    registrationSystem: "Students Registration System",
    registrationSystemDesc: "A web-based registration system for university of gondar mahbere kidusan gbi gubae with automated data processing and reporting capabilities.",
    liveDemo: "Live Demo",
    sourceCode: "Source Code",
    inProgress: "In Progress",
    
    // Experience Section
    myJourney: "My Journey",
    infoStudent: "Information Systems Student",
    infoStudentDesc: "Currently pursuing my Bachelor's degree in Information Systems at University of Gondar, focusing on system analysis, database management, and web development.",
    freelanceDev: "Freelance Web Developer",
    freelanceDevDesc: "Developed websites and web applications for local businesses, focusing on responsive design and user experience.",
    
    // Philosophy Section
    philosophyText1: "I believe technology should be a bridge, not a barrier. My philosophy is rooted in <strong>clarity</strong>, <strong>accessibility</strong>, and <strong>impact</strong> — creating digital solutions that empower people rather than overwhelm them. Every project I build, whether a registration system or a learning platform, is guided by the principle that <span class='highlight'>simplicity drives usability</span>, and usability drives change.",
    philosophyText2: "Coding, for me, is not just a technical skill — it's a tool for <strong>community transformation</strong>. By focusing on low-bandwidth optimization and inclusive design, I aim to ensure that underserved communities have equal access to technological opportunities.",
    philosophyText3: "Collaboration, resourcefulness, and continuous learning are at the heart of my work because meaningful progress happens when knowledge is shared and solutions are built together.",
    purposeDriven: "Purpose-Driven",
    purposeDrivenDesc: "Every line of code serves a purpose - to solve real problems and create meaningful impact.",
    userCentric: "User-Centric",
    userCentricDesc: "Designing with empathy to create intuitive experiences that put users first.",
    innovation: "Innovation",
    innovationDesc: "Pushing boundaries to develop creative solutions for complex challenges.",
    
    // Contact Section
    email: "Email",
    phone: "Phone",
    location: "Location",
    gondar: "University of Gondar, Ethiopia",
    fullName: "Full Name",
    emailAddress: "Email Address",
    subject: "Subject",
    message: "Message",
    sendMessage: "Send Message",
    
    // Footer
    builtWith: "Built with passion and purpose"
  },
  am: {
    // Navigation
    about: "ስለ እኔ",
    skills: "ክህሎቶች",
    projects: "ፕሮጀክቶች",
    experience: "ልምድ",
    philosophy: "ፍልስፍና",
    contact: "አግኙን",
    
    // Header
    name: "ዋሲሁን አበራ",
    title: "የመረጃ ስርዓት ተማሪ እና የይዘት ፈጣሪ",
    viewWork: "ስራዬን ይመልከቱ",
    getInTouch: "አግኙን",
    
    // About Section
    aboutTitle: "ለእውነተኛ የዓለም ችግሮች ዲጂታል መፍትሄዎችን መገንባት",
    aboutText1: "እኔ <span class='highlight'>ዋሲሁን አበራ</span> ነኝ፣ በጎንደር ዩኒቨርሲቲ የመረጃ ስርዓት ሦስተኛ አመት ተማሪ። በ<strong>HTML፣ CSS፣ JavaScript</strong> እና <strong>Google Apps Script</strong> ጠንካራ ክህሎቶች ያሉኝ ሲሆን፣ ለትምህርት ቤቶች፣ ለቤተክርስቲያናት እና ለማህበረሰቦች እውነተኛ የዓለም ችግሮችን የሚፈቱ የድር ላይ ምዝገባ እና አስተዳደር ስርዓቶችን እንደገና እንዲጠቀሙ እያደረግሁ ነው።",
    aboutText2: "ስራዬ ግልጽነት፣ መጠቀም እና ተጽዕኖ ላይ ያተኮረ ነው፣ ቴክኖሎጂ ሁለቱም ተደራሽ እና ተግባራዊ መሆኑን ያረጋግጣል። ከአካዳሚክ ፕሮጀክቶች በላይ <span class='highlight'>BrightTap</span> እየዳበርኩ ነው - ዲጂታል ተካታችነት እና ዝቅተኛ ባንድዊድ ማመቻቸት በኩል ያልተዳሰሱ ማህበረሰቦችን የሚያጠነክር ዘመናዊ የትምህርት መዳረሻ መድረክ።",
    aboutText3: "ረጅም ጊዜ ዓላማዬ ብራይትታፕን በትምህርት እና ቴክኖሎጂ መካከል ያለውን ክፍተት የሚያጠጋ በሰፊው ጥቅም ላይ የዋለ መድረክ ማሳደግ ነው። ሀብታም፣ ተጽዕኖ የተነሳ እና ተባብሮ የሚሰራ - ሁልጊዜ በማድረግ መማር እና ቴክኖሎጂን ለአዎንታዊ ለውጥ መሳሪያ ለመሆን እየተጋ ነው።",
    connect: "እንገናኝ",
    
    // Skills Section
    technicalSkills: "ቴክኒካል ክህሎቶች",
    toolsTechnologies: "መሳሪያዎች እና ቴክኖሎጂዎች",
    softSkills: "ለስላሳ ክህሎቶች",
    problemSolving: "ችግር መፍታት",
    communication: "ግንኙነት",
    teamCollaboration: "ቡድን ትብብር",
    adaptability: "ማስተካከል",
    awardsCertificates: "ሽልማቶች እና ማረጋገጫዎች",
    backToSkills: "ወደ ክህሎቶች ተመለስ",
    uploadImages: "ምስሎችን ይጫኑ እና ያሳዩ",
    chooseImages: "ምስሎችን ይምረጡ",
    uploadCertificates: "አዳዲስ ማረጋገጫዎችን ይጫኑ",
    dragDrop: "የማረጋገጫ ምስሎችዎን እዚህ ይጎትቱ እና ይተዉ",
    orClick: "ወይም ለማሰስ ጠቅ ያድርጉ",
    englishTest: "የእንግሊዝኛ ደረጃ ፈተና",
    englishScore: "ውጤት: 96% | ደረጃ: C2",
    englishTestOrg: "ገለልተኛ የፈተና ማዕከል \"English Tests Online\"",
    englishDate: "የተጠናቀቀው: ጃንዋሪ 2023",
    mersCourse: "የMERS ኮርስ",
    mersDescription: "መገኘት፣ መከላከል፣ ምላሽ",
    mersTitle: "MERS: መገኘት፣ መከላከል፣ ምላሽ",
    who: "የዓለም ጤና ድርጅት",
    mersDate: "የተጠናቀቀው: ፌብሩዋሪ 8፣ 2023",
    viewCertificate: "ማረጋገጫውን ይመልከቱ",
    verifyCertificate: "ማረጋገጫውን ያረጋግጡ",
    
    // Projects Section
    universityPortal: "የዩኒቨርሲቲ ፖርታል ስርዓት",
    universityPortalDesc: "ፖርታላ ኢንተርኔት ሙሉ ተማሪዎች የትምህርት ቁሳቁሶችን፣ ነጥቦችን እና የዩኒቨርሲቲ ማስታወቂያዎችን በተግባር ሰዓት ማሓዲሶች የሚደርሱበት።",
    brightTap: "የBrightTap ትምህርት መድረክ",
    brightTapDesc: "ዲጂታል ተካታችነት እና ዝቅተኛ ባንድዊድ ማመቻቸት በኩል ያልተዳሰሱ ማህበረሰቦችን የሚያጠነክር ዘመናዊ የትምህርት መዳረሻ መድረክ።",
    registrationSystem: "የተማሪዎች ምዝገባ ስርዓት",
    registrationSystemDesc: "ለጎንደር ዩኒቨርሲቲ ማህበረ ቅዱሳን ግቢ ጉባኤ አውቶማቲክ የውሂብ ሂደት እና ሪፖርት አቅራቢ ችሎታዎች ያለው የድር ላይ ምዝገባ ስርዓት።",
    liveDemo: "በቀጥታ ማሳያ",
    sourceCode: "ምንጭ ኮድ",
    inProgress: "በሂደት ላይ",
    
    // Experience Section
    myJourney: "ጉዞዬ",
    infoStudent: "የመረጃ ስርዓት ተማሪ",
    infoStudentDesc: "በጎንደር ዩኒቨርሲቲ የመረጃ ስርዓት ባችለር ዲግሪ እያጠናቀቅኩ ነው፣ በስርዓት ትንተና፣ የውሂብ ጎታ አስተዳደር እና የድር አበጋጋም ላይ ትኩረት አድርጌ።",
    freelanceDev: "ፍሪላንስ የድር አበጋጋም",
    freelanceDevDesc: "ለአካባቢያዊ ንግዶች ድር ጣቢያዎችን እና የድር መተግበሪያዎችን አዘጋጅቻለሁ፣ በምላሽ ሰጪ ዲዛይን እና በተጠቃሚ ልምድ ላይ ትኩረት አድርጌ።",
    
    // Philosophy Section
    philosophyText1: "ቴክኖሎጂ ግድግዳ ሳይሆን ድልድል መሆን እንዳለበት አምናለሁ። ፍልስፍናዬ በ<strong>ግልጽነት</strong>፣ <strong>ተደራሽነት</strong> እና <strong>ተጽዕኖ</strong> ላይ የተመሠረተ ነው - ሰዎችን ከመደናበር ይልቅ የሚያጠነክሩ ዲጂታላዊ መፍትሄዎችን መፍጠር። የምገነባው እያንዳንዱ ፕሮጀክት፣ ምዝገባ ስርዓት ወይም የትምህርት መድረክ ቢሆን፣ <span class='highlight'>ቀላልነት መጠቀምን ያነሳሳል</span> እና መጠቀም ለውጥ ያስከትላል የሚለውን መርሓባ ይከተላል።",
    philosophyText2: "ኮድ ማድረግ፣ ለእኔ፣ በቀላሉ ቴክኒካል ክህሎት አይደለም - ይልቅ ለ<strong>ማህበረሰብ ለውጥ</strong> መሳሪያ ነው። በዝቅተኛ ባንድዊድ ማመቻቸት እና ተካታች ዲዛይን ላይ በመተኮር፣ ያልተዳሰሱ ማህበረሰቦች እኩል የቴክኖሎጂ እድሎች እንዲኖራቸው ማድረግ እፈልጋለሁ።",
    philosophyText3: "ትብብር፣ ሀብታምነት እና ቀጣይነት ያለው መማር በስራዬ መሃል ላይ ናቸው ምክንያቱም ትርጉም ያለው እድገት እውቀት በሚጋራበት እና መፍትሄዎች በጋራ በሚገነቡበት ጊዜ ይከሰታል።",
    purposeDriven: "ግብ ያለው",
    purposeDrivenDesc: "እያንዳንዱ የኮድ መስመር ግብ አለው - እውነተኛ ችግሮችን ለመፍታት እና ትርጉም ያለው ተጽዕኖ ለመፍጠር።",
    userCentric: "ተጠቀሚ-ማእከላይ",
    userCentricDesc: "ተጠቀሚዎችን በመጀመሪያ የሚያደርጉ ተፈጥሯዊ ልምዶችን ለመፍጠር በርኅራኄ መንደፍ።",
    innovation: "ፈጠራ",
    innovationDesc: "ለተወሳሰቡ ተግዳሮቶች ፈጠራዊ መፍትሄዎችን ለማዳበር ወሰኖችን መጨመር።",
    
    // Contact Section
    email: "ኢሜይል",
    phone: "ስልክ",
    location: "አድራሻ",
    gondar: "ዩኒቨርሲቲ ጎንደር፣ ኢትዮጵያ",
    fullName: "ሙሉ ስም",
    emailAddress: "የኢሜይል አድራሻ",
    subject: "ርዕስ",
    message: "መልእክት",
    sendMessage: "መልእክት ይላኩ",
    
    // Footer
    builtWith: "በፍቅር እና በግብ ተገንብቷል"
  }
};

// Language Management
let currentLanguage = 'en';

// Function to change language
function changeLanguage(lang) {
  currentLanguage = lang;
  
  // Update all elements with data-translate attribute
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[lang][key];
      } else {
        element.innerHTML = translations[lang][key];
      }
    }
  });
  
  // Update current language display
  document.getElementById('current-language').textContent = 
    lang === 'en' ? 'English' : 'አማርኛ';
  
  // Update active language option
  document.querySelectorAll('.language-option').forEach(option => {
    option.classList.remove('active');
    if (option.getAttribute('data-lang') === lang) {
      option.classList.add('active');
    }
  });
  
  // Save language preference
  localStorage.setItem('preferredLanguage', lang);
}

// Language selector functionality
document.addEventListener('DOMContentLoaded', function() {
  const languageBtn = document.querySelector('.language-btn');
  const languageDropdown = document.querySelector('.language-dropdown');
  
  // Toggle dropdown
  languageBtn.addEventListener('click', function() {
    languageDropdown.classList.toggle('active');
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function(event) {
    if (!languageBtn.contains(event.target) && !languageDropdown.contains(event.target)) {
      languageDropdown.classList.remove('active');
    }
  });
  
  // Language option selection
  document.querySelectorAll('.language-option').forEach(option => {
    option.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      changeLanguage(lang);
      languageDropdown.classList.remove('active');
    });
  });
  
  // Initialize language
  const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
  changeLanguage(savedLanguage);
});

// Create background particles
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 30;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random properties
    const size = Math.random() * 10 + 5;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const delay = Math.random() * 15;
    const duration = Math.random() * 10 + 15;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;
    
    particlesContainer.appendChild(particle);
  }
}

// Initialize particles
createParticles();

// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Scroll Animation
const sections = document.querySelectorAll("[data-animate]");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      
      // Animate skill bars when skills section is visible
      if (entry.target.id === 'skills') {
        animateSkillBars();
      }
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Animate Skill Bars
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  skillBars.forEach(bar => {
    const width = bar.getAttribute('data-width') || '0';
    bar.style.width = width + '%';
  });
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
  this.reset();
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Skills Navigation Functionality
const skillsNavBtns = document.querySelectorAll('.skills-nav-btn');
const skillsContent = document.getElementById('skills-content');
const certificatesContent = document.getElementById('certificates-content');
const backToSkillsBtn = document.getElementById('back-to-skills');

skillsNavBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-target');
    
    // Update active button
    skillsNavBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Show/hide content with transitions
    if (target === 'skills-content') {
      certificatesContent.classList.remove('active');
      setTimeout(() => {
        skillsContent.style.display = 'block';
        certificatesContent.style.display = 'none';
      }, 300);
    } else if (target === 'certificates-content') {
      skillsContent.style.display = 'none';
      certificatesContent.style.display = 'block';
      setTimeout(() => {
        certificatesContent.classList.add('active');
      }, 50);
    }
  });
});

// Back to skills button
backToSkillsBtn.addEventListener('click', () => {
  certificatesContent.classList.remove('active');
  setTimeout(() => {
    skillsContent.style.display = 'block';
    certificatesContent.style.display = 'none';
    
    // Update active button
    skillsNavBtns.forEach(b => b.classList.remove('active'));
    document.querySelector('[data-target="skills-content"]').classList.add('active');
  }, 300);
});

// Method 1: Simple Image Upload
document.getElementById('imageUpload').addEventListener('change', function(event) {
  const preview = document.getElementById('imagePreview');
  preview.innerHTML = '';
  
  const files = event.target.files;
  
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();
    
    reader.onload = function(e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      img.className = 'preview-image';
      preview.appendChild(img);
    }
    
    reader.readAsDataURL(file);
  }
});

// Method 2: Certificate Upload with Drag & Drop
const dropArea = document.getElementById('dropArea');
const fileInput = document.getElementById('certificateUpload');
const uploadedContainer = document.getElementById('uploadedCertificates');

// Click to upload
dropArea.addEventListener('click', () => {
  fileInput.click();
});

// Drag and drop functionality
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

['dragenter', 'dragover'].forEach(eventName => {
  dropArea.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, unhighlight, false);
});

function highlight() {
  dropArea.classList.add('dragover');
}

function unhighlight() {
  dropArea.classList.remove('dragover');
}

dropArea.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
  const dt = e.dataTransfer;
  const files = dt.files;
  handleFiles(files);
}

fileInput.addEventListener('change', function() {
  handleFiles(this.files);
});

function handleFiles(files) {
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      
      reader.onload = function(e) {
        createCertificateCard(e.target.result, file.name);
      }
      
      reader.readAsDataURL(file);
    }
  }
}

function createCertificateCard(imageSrc, fileName) {
  const certificateDiv = document.createElement('div');
  certificateDiv.className = 'uploaded-certificate';
  
  certificateDiv.innerHTML = `
    <img src="${imageSrc}" alt="${fileName}">
    <div class="certificate-content">
      <h4>${fileName}</h4>
      <button class="delete-btn" onclick="this.parentElement.parentElement.remove()">
        <i class="fas fa-trash"></i> Remove
      </button>
    </div>
  `;
  
  uploadedContainer.appendChild(certificateDiv);
}

// Load any previously uploaded certificates from localStorage
function loadSavedCertificates() {
  const savedCertificates = JSON.parse(localStorage.getItem('uploadedCertificates') || '[]');
  savedCertificates.forEach(cert => {
    createCertificateCard(cert.imageSrc, cert.fileName);
  });
}

// Save certificates to localStorage (optional)
function saveCertificate(imageSrc, fileName) {
  const savedCertificates = JSON.parse(localStorage.getItem('uploadedCertificates') || '[]');
  savedCertificates.push({ imageSrc, fileName });
  localStorage.setItem('uploadedCertificates', JSON.stringify(savedCertificates));
}

// Call this when page loads
window.addEventListener('DOMContentLoaded', loadSavedCertificates);