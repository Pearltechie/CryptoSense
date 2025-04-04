// DOM Elements
 const themeToggle = document.getElementById('themeToggle');
 const body = document.body;
 const darkModeTransition = document.querySelector('.darkModeTransition');
 const loginBtn = document.getElementById('loginBtn');
 const signupBtn = document.getElementById('signupBtn');
 const loginModal = document.getElementById('loginModal');
 const signupModal = document.getElementById('signupModal');
 const closeLoginModal = document.getElementById('closeLoginModal');
 const closeSignupModal = document.getElementById('closeSignupModal');
 const switchToSignup = document.getElementById('switchToSignup');
 const switchToLogin = document.getElementById('switchToLogin');
 const voiceBtn = document.getElementById('voiceBtn');
 const chartTabs = document.querySelectorAll('.chart-tab');
 const chartContent = document.getElementById('chartContent');
 const cryptoGrid = document.getElementById('cryptoGrid');
 const newsGrid = document.getElementById('newsGrid');
 const vaultGrid = document.getElementById('vaultGrid');
 const newsFilterButtons = document.querySelectorAll('.news-filter-btn');

 // Sample data for cryptocurrencies
 const cryptoData = [
     {
         name: 'Bitcoin',
         symbol: 'BTC',
         price: 62483.21,
         change: 2.4,
         marketCap: 1208000000000,
         volume: 28500000000,
         logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
         history: [58000, 59500, 61000, 60500, 62000, 62483.21]
     },
     {
         name: 'Ethereum',
         symbol: 'ETH',
         price: 3247.89,
         change: 5.2,
         marketCap: 389000000000,
         volume: 18900000000,
         logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
         history: [3050, 3100, 3180, 3120, 3200, 3247.89]
     },
     {
         name: 'Binance Coin',
         symbol: 'BNB',
         price: 542.63,
         change: -1.3,
         marketCap: 83500000000,
         volume: 2100000000,
         logo: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png',
         history: [553, 549, 551, 545, 540, 542.63]
     },
     {
         name: 'Solana',
         symbol: 'SOL',
         price: 128.72,
         change: 8.7,
         marketCap: 53700000000,
         volume: 3900000000,
         logo: 'https://cryptologos.cc/logos/solana-sol-logo.png',
         history: [115, 118, 122, 125, 126, 128.72]
     },
     {
         name: 'Cardano',
         symbol: 'ADA',
         price: 0.5142,
         change: -2.8,
         marketCap: 18100000000,
         volume: 870000000,
         logo: 'https://cryptologos.cc/logos/cardano-ada-logo.png',
         history: [0.53, 0.525, 0.52, 0.515, 0.51, 0.5142]
     },
     {
         name: 'XRP',
         symbol: 'XRP',
         price: 0.6831,
         change: 1.5,
         marketCap: 37100000000,
         volume: 1400000000,
         logo: 'https://cryptologos.cc/logos/xrp-xrp-logo.png',
         history: [0.67, 0.675, 0.68, 0.679, 0.681, 0.6831]
     }
 ];

 // Sample news data
 const newsData = [
     {
         title: 'Bitcoin Hits New All-Time High as Institutional Adoption Grows',
         excerpt: 'Bitcoin has reached a new all-time high as more institutional investors add the cryptocurrency to their portfolios.',
         date: 'April 2, 2025',
         image: 'images/bitcoin logo.jpg',
         category: 'Bitcoin'
     },
     {
         title: 'Ethereum Completes Major Network Upgrade',
         excerpt: 'The Ethereum network has successfully implemented its latest upgrade, bringing improved scalability and lower gas fees.',
         date: 'April 1, 2025',
         image: '/api/placeholder/400/250',
         category: 'Ethereum'
     },
     {
         title: 'SEC Approves New Crypto ETF Applications',
         excerpt: 'The US Securities and Exchange Commission has approved several new cryptocurrency ETF applications, signaling growing acceptance.',
         date: 'March 30, 2025',
         image: '/api/placeholder/400/250',
         category: 'Regulation'
     },
     {
         title: 'New DeFi Protocol Reaches $1 Billion in Total Value Locked',
         excerpt: 'A new decentralized finance protocol has quickly accumulated over $1 billion in total value locked, becoming one of the fastest-growing DeFi projects.',
         date: 'March 29, 2025',
         image: '/api/placeholder/400/250',
         category: 'DeFi'
     },
     {
         title: 'NFT Market Shows Signs of Recovery After Months of Decline',
         excerpt: 'The NFT market is showing signs of recovery with increasing sales volumes and new projects gaining traction after months of declining interest.',
         date: 'March 28, 2025',
         image: '/api/placeholder/400/250',
         category: 'NFTs'
     },
     {
         title: 'Major Bank Launches Cryptocurrency Custody Service',
         excerpt: 'One of the world\'s largest banks has announced the launch of a cryptocurrency custody service for institutional clients.',
         date: 'March 27, 2025',
         image: '/api/placeholder/400/250',
         category: 'Bitcoin'
     }
 ];


 // Sample vault data
 const vaultData = [
     {
         coin: 'Bitcoin',
         symbol: 'BTC',
         amount: 0.58,
         value: 36240.26
     },
     {
         coin: 'Ethereum',
         symbol: 'ETH',
         amount: 4.32,
         value: 14030.88
     },
     {
         coin: 'Solana',
         symbol: 'SOL',
         amount: 25.6,
         value: 3295.23
     },
     {
         coin: 'XRP',
         symbol: 'XRP',
         amount: 1520,
         value: 1038.31
     }
 ];

 // Initialize the application
 function init() {
     renderCryptoCards();
     renderNewsCards();
     renderVaultCards();
     initCharts();
     setupEventListeners();
 }

 // Render crypto cards
 function renderCryptoCards() {
     cryptoGrid.innerHTML = '';
     cryptoData.forEach(coin => {
         const card = document.createElement('div');
         card.className = 'crypto-card coin-flip-container';
         card.innerHTML = `
             <div class="coin-flip">
                 <div class="crypto-card-header">
                     <div class="coin-info">
                         <div class="coin-logo">
                             <img src="images/bitcoin logo.jpg" alt="${coin.name} logo">
                         </div>
                         <div class="coin-name">
                             <h3>${coin.name}</h3>
                             <span>${coin.symbol}</span>
                         </div>
                     </div>
                     <button class="favorite-btn">
                         <i class="far fa-star"></i>
                     </button>
                 </div>
                 <div class="crypto-card-body">
                     <div class="price">$${formatNumber(coin.price)}</div>
                     <div class="price-change ${coin.change >= 0 ? 'up' : 'down'}">
                         <i class="fas fa-${coin.change >= 0 ? 'caret-up' : 'caret-down'}"></i>
                         ${Math.abs(coin.change)}%
                     </div>
                     <div class="chart-container" data-symbol="${coin.symbol}"></div>
                 </div>
             </div>
         `;
         cryptoGrid.appendChild(card);
         
         // Initialize mini charts for each card
         setTimeout(() => {
             const chartContainer = card.querySelector('.chart-container');
             createMiniChart(chartContainer, coin);
         }, 100);

         // Add flip animation on click
         card.addEventListener('click', function() {
             const coinFlip = this.querySelector('.coin-flip');
             coinFlip.classList.add('flipping');
             setTimeout(() => {
                 coinFlip.classList.remove('flipping');
             }, 1000);
         });

         // Add favorite functionality
         const favoriteBtn = card.querySelector('.favorite-btn');
         favoriteBtn.addEventListener('click', function(e) {
             e.stopPropagation();
             this.classList.toggle('active');
             const icon = this.querySelector('i');
             if (this.classList.contains('active')) {
                 icon.classList.remove('far');
                 icon.classList.add('fas');
             } else {
                 icon.classList.remove('fas');
                 icon.classList.add('far');
             }
         });
     });
 }

 // Create mini charts for crypto cards
 function createMiniChart(container, coin) {
     const canvas = document.createElement('canvas');
     container.appendChild(canvas);
     
     const ctx = canvas.getContext('2d');
     const gradient = ctx.createLinearGradient(0, 0, 0, 70);
     
     if (coin.change >= 0) {
         gradient.addColorStop(0, 'rgba(0, 255, 127, 0.7)');
         gradient.addColorStop(1, 'rgba(0, 255, 127, 0)');
     } else {
         gradient.addColorStop(0, 'rgba(255, 69, 0, 0.7)');
         gradient.addColorStop(1, 'rgba(255, 69, 0, 0)');
     }
     
     new Chart(ctx, {
         type: 'line',
         data: {
             labels: ['', '', '', '', '', ''],
             datasets: [{
                 data: coin.history,
                 borderColor: coin.change >= 0 ? '#00ff7f' : '#ff4500',
                 borderWidth: 2,
                 pointRadius: 0,
                 backgroundColor: gradient,
                 tension: 0.4,
                 fill: true
             }]
         },
         options: {
             responsive: true,
             maintainAspectRatio: false,
             plugins: {
                 legend: {
                     display: false
                 },
                 tooltip: {
                     enabled: false
                 }
             },
             scales: {
                 x: {
                     display: false
                 },
                 y: {
                     display: false
                 }
             },
             animation: {
                 duration: 1500,
                 easing: 'easeOutQuart'
             }
         }
     });
 }

 // Initialize main chart
 function initCharts() {
     createMainChart('price');
 }

 // Create main chart
 function createMainChart(type) {
     chartContent.innerHTML = '<canvas id="mainChart"></canvas>';
     const canvas = document.getElementById('mainChart');
     const ctx = canvas.getContext('2d');
     
     // Data to display based on type
     let labels, datasets;
     
     // Set up labels for X axis (dates)
     const dates = [];
     const currentDate = new Date();
     for (let i = 30; i >= 0; i--) {
         const date = new Date();
         date.setDate(currentDate.getDate() - i);
         dates.push(`${date.getMonth() + 1}/${date.getDate()}`);
     }
     
     // Different data based on chart type
     if (type === 'price') {
         labels = dates;
         datasets = cryptoData.map(coin => {
             const color = getRandomColor();
             return {
                 label: coin.name,
                 data: generateRandomData(31, coin.price * 0.7, coin.price * 1.3),
                 borderColor: color,
                 backgroundColor: color + '20',
                 tension: 0.4,
                 borderWidth: 2,
                 pointRadius: 0,
                 pointHoverRadius: 5
             };
         });
     } else if (type === 'volume') {
         labels = dates;
         datasets = cryptoData.map(coin => {
             const color = getRandomColor();
             return {
                 label: coin.name,
                 data: generateRandomData(31, coin.volume * 0.7, coin.volume * 1.3),
                 backgroundColor: color + '80',
                 borderColor: color,
                 borderWidth: 1
             };
         });
     } else if (type === 'marketcap') {
         labels = cryptoData.map(coin => coin.name);
         datasets = [{
             data: cryptoData.map(coin => coin.marketCap),
             backgroundColor: cryptoData.map(() => getRandomColor()),
             borderWidth: 1,
             hoverOffset: 20
         }];
     } else if (type === '3d') {
         // Replace with 3D chart placeholder
         chartContent.innerHTML = '<div class="threed-chart-container"><div class="threed-chart">3D Chart Placeholder - Would be implemented with Three.js</div></div>';
         return;
     }
     
     // Create chart based on type
     if (type === 'marketcap') {
         new Chart(ctx, {
             type: 'pie',
             data: {
                 labels: labels,
                 datasets: datasets
             },
             options: {
                 responsive: true,
                 maintainAspectRatio: false,
                 plugins: {
                     legend: {
                         position: 'right'
                     },
                     tooltip: {
                         callbacks: {
                             label: function(context) {
                                 let value = context.raw;
                                 value = value >= 1e9 
                                     ? `$${(value / 1e9).toFixed(2)} Billion`
                                     : `$${(value / 1e6).toFixed(2)} Million`;
                                 return `Market Cap: ${value}`;
                             }
                         }
                     }
                 }
             }
         });
     } else if (type === 'volume') {
         new Chart(ctx, {
             type: 'bar',
             data: {
                 labels: labels,
                 datasets: datasets
             },
             options: {
                 responsive: true,
                 maintainAspectRatio: false,
                 plugins: {
                     legend: {
                         position: 'top'
                     },
                     tooltip: {
                         callbacks: {
                             label: function(context) {
                                 let value = context.raw;
                                 value = value >= 1e9 
                                     ? `$${(value / 1e9).toFixed(2)} Billion`
                                     : `$${(value / 1e6).toFixed(2)} Million`;
                                 return `Volume: ${value}`;
                             }
                         }
                     }
                 },
                 scales: {
                     x: {
                         grid: {
                             display: false
                         }
                     },
                     y: {
                         ticks: {
                             callback: function(value) {
                                 return value >= 1e9 
                                     ? `$${value / 1e9}B` 
                                     : `$${value / 1e6}M`;
                             }
                         }
                     }
                 }
             }
         });
     } else {
         new Chart(ctx, {
             type: 'line',
             data: {
                 labels: labels,
                 datasets: datasets
             },
             options: {
                 responsive: true,
                 maintainAspectRatio: false,
                 plugins: {
                     legend: {
                         position: 'top'
                     }
                 },
                 scales: {
                     x: {
                         grid: {
                             display: false
                         }
                     },
                     y: {
                         ticks: {
                             callback: function(value) {
                                 return '$' + value.toLocaleString();
                             }
                         }
                     }
                 },
                 interaction: {
                     mode: 'index',
                     intersect: false
                 },
                 animation: {
                     duration: 1000,
                     easing: 'easeOutQuart'
                 }
             }
         });
     }
 }

 // Render news cards
 function renderNewsCards(filter = 'All News') {
     newsGrid.innerHTML = '';
     let filteredNews = newsData;
     
     if (filter !== 'All News') {
         filteredNews = newsData.filter(news => news.category === filter);
     }
     
     filteredNews.forEach(news => {
         const card = document.createElement('div');
         card.className = 'news-card fade-up';
         card.innerHTML = `
             <div class="news-image">
                 <img src="${news.image}" alt="${news.title}">
             </div>
             <div class="news-content">
                 <div class="news-date">${news.date}</div>
                 <h3 class="news-title">${news.title}</h3>
                 <p class="news-excerpt">${news.excerpt}</p>
                 <button class="btn btn-outline">Read More</button>
             </div>
         `;
         newsGrid.appendChild(card);
     });
 }

 // Render vault cards
 function renderVaultCards() {
     vaultGrid.innerHTML = '';
     vaultData.forEach(vault => {
         const card = document.createElement('div');
         card.className = 'vault-card fade-up';
         card.innerHTML = `
             <div class="vault-icon">
                 <i class="fab fa-${vault.symbol.toLowerCase()}"></i>
             </div>
             <h3>${vault.coin}</h3>
             <div class="vault-amount">${vault.amount} ${vault.symbol}</div>
             <div class="vault-value">$${formatNumber(vault.value)}</div>
             <button class="btn btn-outline">View Details</button>
         `;
         vaultGrid.appendChild(card);
     });
 }

 // Setup event listeners
 function setupEventListeners() {
     // Theme toggle
     themeToggle.addEventListener('click', toggleTheme);
     
     // Modal controls
     loginBtn.addEventListener('click', () => openModal(loginModal));
     signupBtn.addEventListener('click', () => openModal(signupModal));
     closeLoginModal.addEventListener('click', () => closeModal(loginModal));
     closeSignupModal.addEventListener('click', () => closeModal(signupModal));
     switchToSignup.addEventListener('click', () => {
         closeModal(loginModal);
         openModal(signupModal);
     });
     switchToLogin.addEventListener('click', () => {
         closeModal(signupModal);
         openModal(loginModal);
     });
     
     // Voice button
     voiceBtn.addEventListener('click', toggleVoiceRecognition);
     
     // Chart tabs
     chartTabs.forEach(tab => {
         tab.addEventListener('click', () => {
             chartTabs.forEach(t => t.classList.remove('active'));
             tab.classList.add('active');
             createMainChart(tab.dataset.tab);
         });
     });
     
     // News filter
     newsFilterButtons.forEach(button => {
         button.addEventListener('click', () => {
             newsFilterButtons.forEach(b => b.classList.remove('active'));
             button.classList.add('active');
             renderNewsCards(button.textContent);
         });
     });
     
     // Add fade-up animation to elements when they come into view
     const fadeElements = document.querySelectorAll('.fade-up');
     const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
             if (entry.isIntersecting) {
                 entry.target.style.opacity = 1;
                 entry.target.style.transform = 'translateY(0)';
             }
         });
     });
     
     fadeElements.forEach(element => {
         element.style.opacity = 0;
         element.style.transform = 'translateY(20px)';
         element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
         observer.observe(element);
     });
 }

 // Toggle theme (dark/light mode)
 function toggleTheme() {
    const isDarkMode = body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    
    if (isDarkMode) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        
        // Fire animation
        darkModeTransition.classList.add('fire');
        setTimeout(() => {
            darkModeTransition.classList.remove('fire');
        }, 1000);
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');             
     }
    };

 // Open modal
 function openModal(modal) {
     modal.classList.add('active');
 }

 // Close modal
 function closeModal(modal) {
     modal.classList.remove('active');
 }

 // Toggle voice recognition
 function toggleVoiceRecognition() {
     voiceBtn.classList.toggle('listening');
     
     // If Web Speech API is available
     if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
         alert('Voice command activated! Say "Show Bitcoin" or "Dark Mode" to test.');
         
         // In a real app, implement Web Speech API
         setTimeout(() => {
             voiceBtn.classList.remove('listening');
         }, 5000);
     } else {
         alert('Voice recognition not supported in your browser.');
         voiceBtn.classList.remove('listening');
     }
 }

 // Utility Functions
 function formatNumber(number) {
     if (number >= 1000) {
         return number.toLocaleString('en-US', { 
             minimumFractionDigits: 2,
             maximumFractionDigits: 2
         });
     } else {
         return number.toFixed(number < 0.1 ? 4 : 2);
     }
 }

 function getRandomColor() {
     const colors = [
         '#8a2be2', '#00bfff', '#ff4500', '#32cd32', 
         '#ff8c00', '#9370db', '#20b2aa', '#ff6347'
     ];
     return colors[Math.floor(Math.random() * colors.length)];
 }

 function generateRandomData(length, min, max) {
     const data = [];
     for (let i = 0; i < length; i++) {
         data.push(Math.random() * (max - min) + min);
     }
     return data;
 }

 // Initialize the application when DOM is loaded
 document.addEventListener('DOMContentLoaded', init);
