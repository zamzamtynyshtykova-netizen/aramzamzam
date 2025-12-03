// Football clubs data
const footballClubs = [
    {
        id: 1,
        name: "Реал Мадрид",
        country: "Испания",
        league: "La Liga",
        founded: 1902,
        stadium: "Сантьяго Бернабеу",
        capacity: 81044,
        trophies: 98,
        championsLeague: 14,
        description: "Самый титулованный клуб в истории футбола. Основан в 1902 году группой студентов из Мадрида. Известен своей белой формой и статусом одного из самых богатых клубов мира.",
        image: "https://upload.wikimedia.org/wikipedia/ru/thumb/5/56/Real_Madrid_CF.svg/800px-Real_Madrid_CF.svg.png",
        color: "#004170",
        category: "spain"
    },
    {
        id: 2,
        name: "Барселона",
        country: "Испания",
        league: "La Liga",
        founded: 1899,
        stadium: "Камп Ноу",
        capacity: 99354,
        trophies: 95,
        championsLeague: 5,
        description: "Каталонский клуб с уникальным стилем игры 'тики-така'. Символ каталонской идентичности и один из самых популярных клубов в мире.",
        image: "https://upload.wikimedia.org/wikipedia/ru/thumb/4/47/FC_Barcelona_%28crest%29.svg/800px-FC_Barcelona_%28crest%29.svg.png",
        color: "#a50044",
        category: "spain"
    },
    {
        id: 3,
        name: "Манчестер Юнайтед",
        country: "Англия",
        league: "Premier League",
        founded: 1878,
        stadium: "Олд Траффорд",
        capacity: 74310,
        trophies: 66,
        championsLeague: 3,
        description: "Один из самых популярных футбольных клубов в мире. Известен как 'Красные дьяволы' и имеет одну из самых больших фан-баз.",
        image: "https://upload.wikimedia.org/wikipedia/ru/thumb/7/7a/Manchester_United_FC_crest.svg/800px-Manchester_United_FC_crest.svg.png",
        color: "#DA291C",
        category: "england"
    },
    {
        id: 4,
        name: "Манчестер Сити",
        country: "Англия",
        league: "Premier League",
        founded: 1880,
        stadium: "Этихад",
        capacity: 53400,
        trophies: 32,
        championsLeague: 1,
        description: "Современный футбольный проект, превратившийся в одну из сильнейших команд Европы под руководством Пеп Гвардиолы.",
        image: "https://upload.wikimedia.org/wikipedia/ru/thumb/b/b4/Manchester_City_FC_badge.svg/800px-Manchester_City_FC_badge.svg.png",
        color: "#6CABDD",
        category: "england"
    },
    {
        id: 5,
        name: "Бавария Мюнхен",
        country: "Германия",
        league: "Bundesliga",
        founded: 1900,
        stadium: "Альянц Арена",
        capacity: 75000,
        trophies: 80,
        championsLeague: 6,
        description: "Самый успешный клуб в истории немецкого футбола. Доминирует в Бундеслиге на протяжении десятилетий.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/800px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png",
        color: "#DC052D",
        category: "europe"
    },
    {
        id: 6,
        name: "Ювентус",
        country: "Италия",
        league: "Serie A",
        founded: 1897,
        stadium: "Альянц Стадиум",
        capacity: 41507,
        trophies: 70,
        championsLeague: 2,
        description: "Самый титулованный клуб Италии с рекордными 36 скудетто. Известен как 'Старая синьора'.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juventus_FC_2017_icon_%28black%29.svg/800px-Juventus_FC_2017_icon_%28black%29.svg.png",
        color: "#000000",
        category: "europe"
    },
    {
        id: 7,
        name: "Ливерпуль",
        country: "Англия",
        league: "Premier League",
        founded: 1892,
        stadium: "Энфилд",
        capacity: 53394,
        trophies: 68,
        championsLeague: 6,
        description: "Клуб с богатой историей и легендарными европейскими успехами. Известен своей песней 'You'll Never Walk Alone'.",
        image: "https://upload.wikimedia.org/wikipedia/ru/thumb/0/0a/FC_Liverpool.svg/800px-FC_Liverpool.svg.png",
        color: "#C8102E",
        category: "england"
    },
    {
        id: 8,
        name: "Челси",
        country: "Англия",
        league: "Premier League",
        founded: 1905,
        stadium: "Стэмфорд Бридж",
        capacity: 40343,
        trophies: 34,
        championsLeague: 2,
        description: "Лондонский клуб, добившийся значительных успехов в XXI веке. Известен как 'Синие'.",
        image: "https://upload.wikimedia.org/wikipedia/ru/thumb/c/cc/Chelsea_FC.svg/800px-Chelsea_FC.svg.png",
        color: "#034694",
        category: "england"
    },
    {
        id: 9,
        name: "Арсенал",
        country: "Англия",
        league: "Premier League",
        founded: 1886,
        stadium: "Эмирейтс",
        capacity: 60704,
        trophies: 47,
        championsLeague: 0,
        description: "Лондонский клуб с традициями атакующего футбола. Единственная команда, завершившая сезон Премьер-лиги без поражений.",
        image: "https://upload.wikimedia.org/wikipedia/ru/thumb/0/02/Arsenal_FC.svg/800px-Arsenal_FC.svg.png",
        color: "#EF0107",
        category: "england"
    },
    {
        id: 10,
        name: "ПСЖ",
        country: "Франция",
        league: "Ligue 1",
        founded: 1970,
        stadium: "Парк де Пренс",
        capacity: 47929,
        trophies: 46,
        championsLeague: 0,
        description: "Парижский клуб, ставший доминирующей силой во французском футболе после покупки катарскими инвесторами.",
        image: "https://upload.wikimedia.org/wikipedia/ru/thumb/a/a7/Paris_Saint-Germain_F.C..svg/800px-Paris_Saint-Germain_F.C..svg.png",
        color: "#004170",
        category: "other"
    }
];

// DOM Elements
const clubsGrid = document.getElementById('clubsGrid');
const clubModal = document.getElementById('clubModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const themeToggle = document.getElementById('themeToggle');
const filterButtons = document.querySelectorAll('.filter-btn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderClubs('all');
    setupEventListeners();
    loadTheme();
});

// Render clubs
function renderClubs(filter = 'all') {
    clubsGrid.innerHTML = '';
    
    const filteredClubs = filter === 'all' 
        ? footballClubs 
        : footballClubs.filter(club => club.category === filter);
    
    filteredClubs.forEach(club => {
        const clubCard = createClubCard(club);
        clubsGrid.appendChild(clubCard);
    });
}

// Create club card
function createClubCard(club) {
    const card = document.createElement('div');
    card.className = 'club-card';
    card.dataset.id = club.id;
    
    card.innerHTML = `
        <div class="club-header">
            <div class="club-country">${club.country} • ${club.league}</div>
            <h3 class="club-name">${club.name}</h3>
            <div class="club-year">Основан в ${club.founded}</div>
        </div>
        <img src="${club.image}" alt="${club.name}" class="club-image" loading="lazy">
        <div class="club-stats">
            <div class="club-stat">
                <span class="stat-value">${club.trophies}</span>
                <span class="stat-label">Трофеи</span>
            </div>
            <div class="club-stat">
                <span class="stat-value">${club.championsLeague}</span>
                <span class="stat-label">ЛЧ</span>
            </div>
            <div class="club-stat">
                <span class="stat-value">${club.capacity.toLocaleString()}</span>
                <span class="stat-label">Вместимость</span>
            </div>
            <div class="club-stat">
                <span class="stat-value">${club.league}</span>
                <span class="stat-label">Лига</span>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => openClubModal(club));
    return card;
}

// Open club modal
function openClubModal(club) {
    modalBody.innerHTML = `
        <div class="modal-header">
            <div class="modal-country">${club.country} • ${club.league}</div>
            <h2 class="modal-title">${club.name}</h2>
            <div class="modal-subtitle">Основан в ${club.founded}</div>
        </div>
        
        <img src="${club.image}" alt="${club.name}" class="modal-image">
        
        <p class="modal-description">${club.description}</p>
        
        <div class="modal-details">
            <div class="detail-item">
                <span class="detail-value">${club.stadium}</span>
                <span class="detail-label">Стадион</span>
            </div>
            <div class="detail-item">
                <span class="detail-value">${club.capacity.toLocaleString()}</span>
                <span class="detail-label">Вместимость</span>
            </div>
            <div class="detail-item">
                <span class="detail-value">${club.trophies}</span>
                <span class="detail-label">Трофеи</span>
            </div>
            <div class="detail-item">
                <span class="detail-value">${club.championsLeague}</span>
                <span class="detail-label">Лига Чемпионов</span>
            </div>
        </div>
        
        <div class="club-stats">
            <div class="club-stat">
                <span class="stat-value">${club.league}</span>
                <span class="stat-label">Лига</span>
            </div>
            <div class="club-stat">
                <span class="stat-value">${club.founded}</span>
                <span class="stat-label">Год основания</span>
            </div>
        </div>
    `;
    
    clubModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    clubModal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Theme management
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update theme icon
    const themeIcon = themeToggle.querySelector('.theme-icon');
    themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const themeIcon = themeToggle.querySelector('.theme-icon');
    themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

// Setup event listeners
function setupEventListeners() {
    // Modal close
    modalClose.addEventListener('click', closeModal);
    clubModal.addEventListener('click', (e) => {
        if (e.target === clubModal) closeModal();
    });
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Apply filter
            const filter = button.dataset.filter;
            renderClubs(filter);
        });
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && clubModal.classList.contains('show')) {
        closeModal();
    }
});
