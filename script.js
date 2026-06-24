/* ==========================================
   PROJECTS METADATA DATABASE
   ========================================== */
const projectsData = {
    planet: {
        title: "Dream Planet Space Website",
        image: "assets/cover_planet.png",
        tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Scroll Magic"],
        desc: "Dream Planet is a beautifully crafted astronomical website dedicated to space exploration. It features high-fidelity stellar backgrounds, smooth scroll animations, celestial image layouts, and detailed solar system information hubs. Built with HTML5, CSS3, JavaScript, and Bootstrap for layout structures.",
        features: [
            "Smooth kinetic scroll transitions and floating galaxy components.",
            "Interactive planet profile panels showcasing astronomy data.",
            "Responsive grids using Bootstrap for alignment and layout.",
            "Modern dark-mode space aesthetic featuring vibrant nebula styling."
        ],
        github: "https://github.com/Naveena-460/Planet",
        live: "https://naveena-460.github.io/Planet/zyra/home.html"
    },
    tracker: {
        title: "Subscription Tracking System",
        image: "assets/cover_tracker.png",
        tech: ["React.js", "JavaScript ES6+", "HTML5", "CSS3 Modules", "State Management"],
        desc: "A highly interactive dashboard built to manage and track user subscriptions, payment cycles, monthly fees, and service categories. It aggregates overall expenses, presents intuitive color-coded charts representing platform weights, and triggers alert notifications for upcoming payment renewals.",
        features: [
            "Dynamic card listings for popular service plans (Netflix, Spotify, AWS, etc.).",
            "Real-time expense calculations for monthly and annual spending forecasts.",
            "Reactive state management allowing instant subscription adds/deletes.",
            "Mobile-optimized dashboard grid featuring glassmorphic charts."
        ],
        github: "https://github.com/Naveena-460/TRACKING_SYSTEM",
        live: "https://tracking-system-blond.vercel.app/"
    },
    decor: {
        title: "Decor Dreamz - Furniture Web",
        image: "assets/cover_furniture.png",
        tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Flexbox/Grid"],
        desc: "Decor Dreamz is an elegant e-commerce design showcase displaying minimalist furniture catalogs, cozy interior inspirations, and custom design quote requests. The focus is on clean typographic spacing, smooth fade-in cards, Bootstrap grid integrations, and micro-interactions.",
        features: [
            "Filterable product grid dividing items by category (Living Room, Bedroom, Office).",
            "Smooth hover zoom cards and detailed catalog pop-ups.",
            "Fully responsive navbar with slider drawers for smaller screens.",
            "Beautiful glass-panel quote submission forms for customized designs."
        ],
        github: "https://github.com/Naveena-460/decor_dreamz",
        live: "https://naveena-460.github.io/decor_dreamz/"
    },
    chatbot: {
        title: "InfoHive College Chatbot Database Helper",
        image: "assets/cover_chatbot.png",
        tech: ["PHP", "MySQL", "XAMPP", "HTML5/CSS3", "JavaScript", "SQL Queries"],
        desc: "InfoHive is a chatbot helper system connecting frontend inputs to a relational MySQL college database schema served locally via XAMPP. It queries and processes database tables to output student attendance percentages, exam marks, pending fee status, and course timetables.",
        features: [
            "SQL query builder responding to conversational chat input choices.",
            "Responsive chatting interface bubble mockup styling.",
            "XAMPP backend server integration for database query services.",
            "Relational database structure containing student, grade, and course tables."
        ],
        github: "https://github.com/Naveena-460",
        live: "#" // No live demo link, will be hidden or set as disabled
    }
};

/* ==========================================
   DOCUMENT LOAD INITIALIZER
   ========================================== */
document.addEventListener("DOMContentLoaded", () => {
    initTypewriter();
    initMobileMenu();
    initScrollTracker();
    initProjectFilters();
    initScrollReveal();
    initWindowCloseEasterEgg();
});

/* ==========================================
   MOBILE MENU CONTROLS
   ========================================== */
function initMobileMenu() {
    const menuBtn = document.getElementById("mobile-menu-btn");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll("nav a");

    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("show");
            const icon = menuBtn.querySelector("i");
            if (navMenu.classList.contains("show")) {
                icon.className = "bx bx-x";
            } else {
                icon.className = "bx bx-menu";
            }
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("show");
                menuBtn.querySelector("i").className = "bx bx-menu";
            });
        });
    }
}

/* ==========================================
   TYPEWRITER EFFECT ANIMATION
   ========================================== */
function initTypewriter() {
    const textTarget = document.getElementById("typewriter-text");
    if (!textTarget) return;

    const words = [
        "interactive reality.",
        "responsive UI layouts.",
        "clean developer code.",
        "dynamic web solutions."
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 2000; // static wait before deletion

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            textTarget.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textTarget.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === currentWord.length) {
            // Finished typing word, trigger delay
            typeSpeed = delay;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Finished deleting, load next word
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 300; // brief delay before typing new word
        }

        setTimeout(type, typeSpeed);
    }

    setTimeout(type, 1000);
}

/* ==========================================
   SCROLL TRACKING (ACTIVE LINKS & NAVIGATION)
   ========================================== */
function initScrollTracker() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        // Sticky Header scroll styling
        if (window.scrollY > 50) {
            header.style.padding = "12px 8%";
            header.style.backgroundColor = "rgba(3, 7, 18, 0.92)";
        } else {
            header.style.padding = "16px 8%";
            header.style.backgroundColor = "rgba(3, 7, 18, 0.7)";
        }

        // Highlight active nav item
        let currentSectionId = "";
        sections.forEach(sec => {
            const top = window.scrollY;
            const offset = sec.offsetTop - 180;
            const height = sec.offsetHeight;
            const id = sec.getAttribute("id");

            if (top >= offset && top < offset + height) {
                currentSectionId = id;
            }
        });

        if (currentSectionId) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${currentSectionId}`) {
                    link.classList.add("active");
                }
            });
        }
    });
}

/* ==========================================
   PROJECTS FILTER ENGINE
   ========================================== */
function initProjectFilters() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card-window");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Toggle active state
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            projectCards.forEach(card => {
                const category = card.getAttribute("data-category");
                
                // Hide/show animations using scale & opacity
                if (filterValue === "all" || category === filterValue) {
                    card.style.display = "flex";
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "scale(1)";
                    }, 50);
                } else {
                    card.style.opacity = "0";
                    card.style.transform = "scale(0.95)";
                    setTimeout(() => {
                        card.style.display = "none";
                    }, 300); // match transition speed
                }
            });
        });
    });
}

/* ==========================================
   DYNAMIC PROJECT DETAIL MODAL MANAGERS
   ========================================== */
window.openProjectModal = function(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    const modal = document.getElementById("project-modal");
    
    // Populate Modal Content
    document.getElementById("modal-window-title").textContent = `${projectId}.exe`;
    document.getElementById("modal-project-name").textContent = project.title;
    document.getElementById("modal-project-img").src = project.image;
    document.getElementById("modal-project-desc").textContent = project.desc;

    // Tech Tags
    const techBox = document.getElementById("modal-project-tech-tags");
    techBox.innerHTML = "";
    project.tech.forEach(t => {
        const span = document.createElement("span");
        span.textContent = t;
        techBox.appendChild(span);
    });

    // Features List
    const featuresList = document.getElementById("modal-project-features-list");
    featuresList.innerHTML = "";
    project.features.forEach(f => {
        const li = document.createElement("li");
        li.textContent = f;
        featuresList.appendChild(li);
    });

    // Action Links
    const githubLink = document.getElementById("modal-github-link");
    githubLink.href = project.github;

    const liveLink = document.getElementById("modal-live-link");
    if (project.live && project.live !== "#") {
        liveLink.href = project.live;
        liveLink.style.display = "inline-flex";
    } else {
        liveLink.style.display = "none";
    }

    // Launch Modal
    modal.classList.add("open");
    document.body.style.overflow = "hidden"; // Prevent background scrolling
};

window.closeProjectModal = function() {
    const modal = document.getElementById("project-modal");
    modal.classList.remove("open");
    document.body.style.overflow = ""; // Re-enable background scrolling
};

window.closeProjectModalOnBackdrop = function(event) {
    const modalWindow = document.querySelector(".modal-window");
    if (event.target.classList.contains("modal-overlay")) {
        closeProjectModal();
    }
};

// Keyboard listener for ESC key to close modal
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeProjectModal();
    }
});

/* ==========================================
   SCROLL REVEAL ANIMATIONS (INTELLIGENT FADE-IN)
   ========================================== */
function initScrollReveal() {
    // Dynamically add reveal class to windows and sections for seamless fade-up
    const itemsToReveal = document.querySelectorAll(
        "section, .window-container:not(.modal-window)"
    );
    
    itemsToReveal.forEach(item => {
        item.classList.add("reveal");
    });

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Stop observing once active to keep the fade fixed
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    itemsToReveal.forEach(item => {
        revealObserver.observe(item);
    });
}

/* ==========================================
   WINDOW CLOSE EASTER EGG (SATISFYING SHRINK)
   ========================================== */
function initWindowCloseEasterEgg() {
    // Select close buttons of main windows (not the modal window close)
    const closeButtons = document.querySelectorAll(
        ".window-container:not(.modal-window) .window-controls .control-dot.close"
    );

    closeButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation(); // prevent card clicks
            
            // Find parent window container
            const windowContainer = btn.closest(".window-container");
            if (windowContainer) {
                // Apply shrink animation
                windowContainer.classList.add("closed-window");
                
                // Add a small console warning as a fun dev detail
                console.warn(`[SYSTEM] Closed container module: ${windowContainer.querySelector(".window-title")?.textContent || "window.exe"}`);
            }
        });
    });
}
