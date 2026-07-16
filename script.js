// Состояние
let state = {
    os: null,
    color1: '#000000',
    color2: '#ffffff',
    search: ''
};

// 📁 Здесь ты добавляешь все свои обои
// Просто дописывай новые файлы в нужные массивы
const wallpaperFiles = {
    windows: [
        // Чёрно-белые
        'черный белый 1.png',
        'черный белый 2.png',
        'черный белый 3.png',
        'черный белый 4.png',
        'черный белый 5.png',
        'черный серый 1.png',
        'белый серый 1.png',
        'белый черный 1.png',
        'серый черный 1.png',
        
        // Сине-зелёные
        'синий зеленый 1.png',
        'синий зеленый 2.png',
        'синий зеленый 3.png',
        'синий бирюзовый 1.png',
        'темно-синий зеленый 1.png',
        'голубой зеленый 1.png',
        
        // Красно-жёлтые
        'красный желтый 1.png',
        'красный желтый 2.png',
        'красный оранжевый 1.png',
        'желтый оранжевый 1.png',
        'алый золотой 1.png',
        
        // Фиолетово-розовые
        'фиолетовый розовый 1.png',
        'фиолетовый розовый 2.png',
        'сиреневый розовый 1.png',
        'пурпурный розовый 1.png',
        
        // Зелёно-синие
        'зеленый синий 1.png',
        'зеленый синий 2.png',
        'изумрудный синий 1.png',
        'мятный синий 1.png',
        
        // Оранжево-красные
        'оранжевый красный 1.png',
        'оранжевый красный 2.png',
        'терракотовый красный 1.png',
        
        // Другие комбинации
        'розовый голубой 1.png',
        'голубой розовый 1.png',
        'желтый зеленый 1.png',
        'зеленый желтый 1.png',
        'красный синий 1.png',
        'синий красный 1.png',
        'черный золотой 1.png',
        'золотой черный 1.png',
        'белый голубой 1.png',
        'голубой белый 1.png',
        'серый синий 1.png',
        'синий серый 1.png',
        
        // Монохромные
        'черный моно 1.png',
        'белый моно 1.png',
        'серый моно 1.png',
        'темный моно 1.png',
        'светлый моно 1.png'
    ],
    linux: [
        // Чёрно-белые
        'черный белый 1.png',
        'черный белый 2.png',
        'черный белый 3.png',
        'белый серый 1.png',
        'серый черный 1.png',
        
        // Сине-зелёные
        'синий зеленый 1.png',
        'синий зеленый 2.png',
        'темно-синий зеленый 1.png',
        'голубой зеленый 1.png',
        
        // Красно-жёлтые
        'красный желтый 1.png',
        'красный оранжевый 1.png',
        'алый золотой 1.png',
        
        // Фиолетово-розовые
        'фиолетовый розовый 1.png',
        'фиолетовый розовый 2.png',
        'сиреневый розовый 1.png',
        
        // Зелёно-синие
        'зеленый синий 1.png',
        'изумрудный синий 1.png',
        'мятный синий 1.png',
        
        // Оранжево-красные
        'оранжевый красный 1.png',
        'терракотовый красный 1.png',
        
        // Другие
        'розовый голубой 1.png',
        'желтый зеленый 1.png',
        'красный синий 1.png',
        'черный золотой 1.png',
        'белый голубой 1.png',
        'серый синий 1.png'
    ]
};

// 🎨 Цветовая карта (можно добавлять новые цвета)
const colorMap = {
    'черный': ['#000000', '#1a1a1a', '#2d2d2d', '#0a0a0a', '#111111'],
    'белый': ['#ffffff', '#f0f0f0', '#e8e8e8', '#fafafa', '#f5f5f5'],
    'серый': ['#9e9e9e', '#616161', '#424242', '#757575', '#bdbdbd', '#888888'],
    'синий': ['#0000ff', '#1a237e', '#0d47a1', '#1976d2', '#1565c0', '#283593', '#303f9f'],
    'голубой': ['#00bcd4', '#26c6da', '#4dd0e1', '#80deea', '#03a9f4', '#29b6f6'],
    'зеленый': ['#00ff00', '#1b5e20', '#2e7d32', '#43a047', '#388e3c', '#2e7d32', '#4caf50'],
    'бирюзовый': ['#00897b', '#26a69a', '#4db6ac', '#80cbc4', '#00695c'],
    'изумрудный': ['#00c853', '#69f0ae', '#00e676', '#1de9b6'],
    'мятный': ['#b2dfdb', '#80cbc4', '#a5d6a7', '#c8e6c9'],
    'красный': ['#ff0000', '#b71c1c', '#c62828', '#e53935', '#d32f2f', '#f44336'],
    'алый': ['#ff1744', '#d50000', '#ff5252', '#ff8a80'],
    'желтый': ['#ffff00', '#f9a825', '#fdd835', '#ffeb3b', '#fbc02d'],
    'золотой': ['#ffd700', '#ffc107', '#ffb300', '#ffa000', '#ff6f00'],
    'оранжевый': ['#ff6f00', '#e65100', '#f57c00', '#fb8c00', '#ff9800'],
    'терракотовый': ['#d84315', '#bf360c', '#e64a19', '#ff5722'],
    'фиолетовый': ['#9c27b0', '#7b1fa2', '#6a1b9a', '#ab47bc', '#8e24aa'],
    'розовый': ['#e91e63', '#ad1457', '#d81b60', '#ec407a', '#f06292'],
    'сиреневый': ['#ce93d8', '#ba68c8', '#ab47bc', '#9c27b0'],
    'пурпурный': ['#6a1b9a', '#4a148c', '#7b1fa2', '#9c27b0'],
    'моно': ['#000000', '#ffffff', '#808080', '#333333', '#cccccc']
};

// 👤 Имя автора (твоё имя!)
const AUTHOR_NAME = 'Кирилл';

// DOM элементы
const osBtns = document.querySelectorAll('.os-btn');
const color1Input = document.getElementById('color1');
const color2Input = document.getElementById('color2');
const searchInput = document.getElementById('searchInput');
const findBtn = document.getElementById('findBtn');
const resultsDiv = document.getElementById('results');
const presetBtns = document.querySelectorAll('.preset-btn');

// События
osBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        osBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.os = btn.dataset.os;
        setTimeout(findWallpapers, 100);
    });
});

color1Input.addEventListener('input', (e) => {
    state.color1 = e.target.value;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(findWallpapers, 300);
});

color2Input.addEventListener('input', (e) => {
    state.color2 = e.target.value;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(findWallpapers, 300);
});

searchInput.addEventListener('input', (e) => {
    state.search = e.target.value.toLowerCase();
    clearTimeout(timeoutId);
    timeoutId = setTimeout(findWallpapers, 300);
});

presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const c1 = btn.dataset.c1;
        const c2 = btn.dataset.c2;
        color1Input.value = c1;
        color2Input.value = c2;
        state.color1 = c1;
        state.color2 = c2;
        setTimeout(findWallpapers, 100);
    });
});

findBtn.addEventListener('click', findWallpapers);

// Основная функция поиска
function findWallpapers() {
    if (!state.os) {
        showEmpty('⚠️', 'Выберите операционную систему', 'Нажмите на Windows или Linux');
        return;
    }

    const files = wallpaperFiles[state.os] || [];
    
    if (files.length === 0) {
        showEmpty('📂', 'Нет обоев для этой системы', 'Добавьте файлы в папку wallpapers/');
        return;
    }

    const color1Name = getColorName(state.color1);
    const color2Name = getColorName(state.color2);
    
    let filtered = files.filter(file => {
        const fileName = file.toLowerCase();
        
        const hasColor1 = color1Name ? fileName.includes(color1Name.toLowerCase()) : true;
        const hasColor2 = color2Name ? fileName.includes(color2Name.toLowerCase()) : true;
        
        if (color1Name && color2Name) {
            return hasColor1 && hasColor2;
        }
        if (color1Name) {
            return hasColor1;
        }
        if (color2Name) {
            return hasColor2;
        }
        return true;
    });

    if (state.search) {
        filtered = filtered.filter(file => 
            file.toLowerCase().includes(state.search)
        );
    }

    if (filtered.length === 0) {
        showEmpty('🔍', 'Ничего не найдено', 'Попробуйте другие цвета или поиск');
    } else {
        renderResults(filtered);
    }
}

// Получить название цвета из hex
function getColorName(hex) {
    const rgb = hexToRgb(hex);
    if (!rgb) return null;
    
    let bestMatch = null;
    let bestDistance = Infinity;
    
    for (const [name, colors] of Object.entries(colorMap)) {
        for (const color of colors) {
            const targetRgb = hexToRgb(color);
            if (!targetRgb) continue;
            
            const distance = getColorDistance(rgb, targetRgb);
            if (distance < bestDistance) {
                bestDistance = distance;
                bestMatch = name;
            }
        }
    }
    
    return bestDistance < 160 ? bestMatch : null;
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function getColorDistance(c1, c2) {
    return Math.sqrt(
        Math.pow(c1.r - c2.r, 2) +
        Math.pow(c1.g - c2.g, 2) +
        Math.pow(c1.b - c2.b, 2)
    );
}

// Рендер результатов
function renderResults(files) {
    const osName = state.os === 'windows' ? 'Windows' : 'Linux';
    const osPath = state.os;
    
    let html = `
        <div class="results-header" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;flex-wrap:wrap;gap:10px;">
            <h3 style="color:rgba(255,255,255,0.7);font-weight:400;">
                Найдено <strong style="color:#fff;">${files.length}</strong> обоев для <strong style="color:#667eea;">${osName}</strong>
                ${state.search ? `по запросу «${state.search}»` : ''}
            </h3>
            <div style="display:flex;align-items:center;gap:8px;font-size:0.85rem;color:rgba(255,255,255,0.3);">
                <span>👤</span>
                <span>Автор: <strong style="color:rgba(255,255,255,0.6);">${AUTHOR_NAME}</strong></span>
            </div>
        </div>
        <div class="wallpaper-grid">
    `;
    
    files.forEach((file, index) => {
        const colors = file.replace('.png', '').split(' ');
        const color1 = colors[0] || '';
        const color2 = colors[1] || '';
        const displayName = file.replace('.png', '');
        
        html += `
            <div class="wallpaper-card" style="animation-delay: ${index * 0.05}s">
                <img src="wallpapers/${osPath}/${file}" alt="${displayName}" 
                     onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22%3E%3Crect width=%22300%22 height=%22200%22 fill=%22%231a1a2e%22/%3E%3Ctext x=%2250%25%22 y=%2245%25%22 text-anchor=%22middle%22 fill=%22%23667eea%22 font-family=%22sans-serif%22 font-size=%2220%22 font-weight=%22bold%22%3E🖼️%3C/text%3E%3Ctext x=%2250%25%22 y=%2270%25%22 text-anchor=%22middle%22 fill=%22%23666%22 font-family=%22sans-serif%22 font-size=%2212%22%3E${displayName}%3C/text%3E%3C/svg%3E'">
                <div class="info">
                    <h4>${displayName}</h4>
                    <div class="path">📁 wallpapers/${osPath}/${file}</div>
                    <div class="badges">
                        <span class="badge os">${osName}</span>
                        ${color1 ? `<span class="badge">🎨 ${color1}</span>` : ''}
                        ${color2 ? `<span class="badge">🎨 ${color2}</span>` : ''}
                        <span class="badge">👤 ${AUTHOR_NAME}</span>
                    </div>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    resultsDiv.innerHTML = html;
}

// Показать пустое состояние
function showEmpty(icon, title, desc) {
    resultsDiv.innerHTML = `
        <div class="empty-state">
            <div class="empty-icon">${icon}</div>
            <h3>${title}</h3>
            <p>${desc}</p>
            <div style="margin-top:15px;font-size:0.8rem;color:rgba(255,255,255,0.2);">
                👤 Автор: ${AUTHOR_NAME}
            </div>
        </div>
    `;
}

// Таймаут для автопоиска
let timeoutId;

// Инициализация
showEmpty('🖼️', 'Выберите параметры и нажмите "Найти обои"', 'Я покажу все подходящие обои из моей коллекции');

console.log(`🎨 Wallpaper Catalog by ${AUTHOR_NAME} загружен!`);
console.log(`📁 Всего обоев: Windows — ${wallpaperFiles.windows.length}, Linux — ${wallpaperFiles.linux.length}`);
