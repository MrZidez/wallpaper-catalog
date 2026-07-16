* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', -apple-system, sans-serif;
    background: #0a0a1a;
    min-height: 100vh;
    color: #fff;
    padding: 30px 20px;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

/* Header */
header {
    text-align: center;
    margin-bottom: 50px;
}

.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
}

.logo span:first-child {
    font-size: 2.5rem;
}

.logo h1 {
    font-size: 2.8rem;
    font-weight: 900;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.logo h1 span {
    font-weight: 300;
    background: none;
    -webkit-text-fill-color: rgba(255, 255, 255, 0.3);
}

.subtitle {
    color: rgba(255, 255, 255, 0.5);
    font-size: 1.1rem;
    margin-top: 8px;
}

/* Filters */
.filters {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 30px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    margin-bottom: 40px;
}

.filter-group {
    margin-bottom: 25px;
}

.filter-group:last-of-type {
    margin-bottom: 20px;
}

.filter-group label {
    display: block;
    font-weight: 600;
    font-size: 0.95rem;
    margin-bottom: 12px;
    color: rgba(255, 255, 255, 0.8);
}

/* OS Selector */
.os-selector {
    display: flex;
    gap: 12px;
}

.os-btn {
    flex: 1;
    padding: 14px 20px;
    background: rgba(255, 255, 255, 0.05);
    border: 2px solid rgba(255, 255, 255, 0.08);
    border-radius: 14px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-family: inherit;
}

.os-btn:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
}

.os-btn.active {
    background: rgba(102, 126, 234, 0.15);
    border-color: #667eea;
    color: #fff;
    box-shadow: 0 0 30px rgba(102, 126, 234, 0.1);
}

/* Color Inputs */
.color-inputs {
    display: flex;
    gap: 30px;
    align-items: center;
}

.color-field {
    display: flex;
    align-items: center;
    gap: 12px;
}

.color-field span {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.5);
    font-weight: 500;
}

.color-field input[type="color"] {
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    background: none;
    padding: 0;
    border: 2px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
}

.color-field input[type="color"]::-webkit-color-swatch-wrapper {
    padding: 0;
}

.color-field input[type="color"]::-webkit-color-swatch {
    border: none;
    border-radius: 10px;
}

.color-field input[type="color"]:hover {
    transform: scale(1.05);
    border-color: #667eea;
}

/* Presets */
.presets {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.preset-btn {
    padding: 8px 16px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 50px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
}

.preset-btn:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.15);
    color: #fff;
    transform: translateY(-2px);
}

/* Search */
.search-input {
    width: 100%;
    padding: 14px 20px;
    background: rgba(255, 255, 255, 0.05);
    border: 2px solid rgba(255, 255, 255, 0.06);
    border-radius: 14px;
    color: #fff;
    font-size: 1rem;
    font-family: inherit;
    transition: all 0.3s ease;
}

.search-input::placeholder {
    color: rgba(255, 255, 255, 0.3);
}

.search-input:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.08);
}

/* Find Button */
.find-btn {
    width: 100%;
    padding: 16px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: none;
    border-radius: 14px;
    color: #fff;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
    letter-spacing: 0.5px;
}

.find-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);
}

.find-btn:active {
    transform: translateY(0);
}

.find-btn span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

/* Results */
.results {
    min-height: 300px;
}

.empty-state {
    text-align: center;
    padding: 80px 20px;
}

.empty-icon {
    font-size: 4rem;
    margin-bottom: 20px;
    opacity: 0.3;
}

.empty-state h3 {
    font-size: 1.3rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 8px;
}

.empty-state p {
    color: rgba(255, 255, 255, 0.3);
}

/* Wallpaper Grid */
.wallpaper-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 24px;
}

.wallpaper-card {
    background: rgba(255, 255, 255, 0.03);
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.06);
    transition: all 0.4s ease;
    animation: slideUp 0.5s ease;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.wallpaper-card:hover {
    transform: translateY(-8px);
    border-color: rgba(102, 126, 234, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.wallpaper-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
}

.wallpaper-card .info {
    padding: 16px 20px 20px;
}

.wallpaper-card .info h4 {
    font-size: 0.95rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 4px;
}

.wallpaper-card .info .path {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.3);
    font-family: monospace;
    margin-bottom: 10px;
}

.wallpaper-card .info .badges {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
}

.wallpaper-card .info .badge {
    padding: 4px 12px;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 50px;
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.04);
}

.wallpaper-card .info .badge.os {
    background: rgba(102, 126, 234, 0.15);
    color: #667eea;
    border-color: rgba(102, 126, 234, 0.2);
}

/* Footer */
footer {
    text-align: center;
    margin-top: 50px;
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.04);
}

footer p {
    color: rgba(255, 255, 255, 0.2);
    font-size: 0.85rem;
}

footer code {
    background: rgba(255, 255, 255, 0.05);
    padding: 2px 10px;
    border-radius: 4px;
    font-size: 0.8rem;
}

/* Responsive */
@media (max-width: 768px) {
    .logo h1 {
        font-size: 2rem;
    }
    
    .os-selector {
        flex-direction: column;
    }
    
    .color-inputs {
        flex-direction: column;
        align-items: stretch;
        gap: 15px;
    }
    
    .color-field {
        justify-content: center;
    }
    
    .filters {
        padding: 20px;
    }
    
    .wallpaper-grid {
        grid-template-columns: 1fr;
    }
}
