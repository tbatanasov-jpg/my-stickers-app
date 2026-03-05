// --- ГЛОБАЛНИ ДАННИ И КОНСТАНТИ ---

// Глобална променлива за картата (използва се във stickers_map.html)
let map;

function initMap() {
    console.log("!!! ИНИЦИАЛИЗИРАМ КАРТАТА СЕГА !!!");
    
    const mapElement = document.getElementById('map-canvas');
    if (!mapElement) {
        console.log("Грешка: Не намерих елемента map-canvas!");
        return;
    }

    map = new google.maps.Map(mapElement, {
        center: { lat: 42.6977, lng: 23.3219 },
        zoom: 7,
    });
    
    renderStickerMarkers();

    // --- НОВИЯТ КОД ЗА БУТОНА ЗАПОЧВА ТУК ---
    const showObjectsBtn = document.getElementById('show-objects-btn');

    if (showObjectsBtn) {
        showObjectsBtn.addEventListener('click', () => {
            if (navigator.geolocation) {
                showObjectsBtn.textContent = "Търся те...";

                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const userPos = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };

                        // Центрираме картата върху теб
                        map.setCenter(userPos);
                        map.setZoom(14); 
                        showObjectsBtn.textContent = "Покажи обектите в района";

                        // Опционално: Малък маркер за теб (синя точка)
                        new google.maps.Marker({
                            position: userPos,
                            map: map,
                            title: "Ти си тук",
                            icon: {
                                path: google.maps.SymbolPath.CIRCLE,
                                scale: 8,
                                fillColor: "#4285F4",
                                fillOpacity: 1,
                                strokeWeight: 2,
                                strokeColor: "white",
                            }
                        });
                    },
                    (error) => {
                        showObjectsBtn.textContent = "Покажи обектите в района";
                        alert("Не можахме да открием местоположението ти. Провери GPS настройките.");
                        console.error("Грешка при локация:", error);
                    }
                );
            } else {
                alert("Твоят браузър не поддържа геолокация.");
            }
        });
    }
    // --- НОВИЯТ КОД ЗАВЪРШВА ТУК ---
}

// Дефиниране на цветове за статусите
const STATUS_COLORS = {
    collected: '#fddf97', // Имам я (жълто-оранжево)
    wanted: '#c8e4bc',    // Искам я (зелено)
    missing: '#f9bd99'    // Нямам я (светло оранжево)
};

// Примерни координати за Плевен (за демо)
const PANO_PLEVEN_LOCATION = {
    lat: '43.4002', 
    lon: '24.6341',
    address: 'Панорама "Плевенска епопея 1877", Плевен'
};

// 🚨 КЛЮЧ: КЛЮЧЪТ, КОЙТО ИЗПОЛЗВАМЕ ЗА LOCAL STORAGE
const STICKERS_DATA_KEY = 'stickerCollection'; 



// 2. ПОМОЩНИ ФУНКЦИИ
function determineStatusKey(stickerId) {
    // Сега allBooks вече е дефиниран и достъпен!
    const sticker = allBooks.find(s => s.id === stickerId); 

    if (!sticker) return 'missing'; 

    if (sticker.isCollected) {
        return 'collected';
    } else if (sticker.isWanted) {
        return 'wanted'; 
    } else {
        return 'missing';
    }
}

function saveStickersToLocalStorage() {
    // ...
}
// ...
// app.js

// 3. ОСНОВНИ ФУНКЦИИ (Рендиране и логика)
function renderStickers(stickers) {
    // ...
}






// --- ФУНКЦИИ ЗА РАБОТА С LOCAL STORAGE (ПЕРСИСТЕНТНОСТ) ---

/** * Запазва текущото състояние на allBooks в localStorage.
 */
function saveStickers() {
    try {
        localStorage.setItem(STICKERS_DATA_KEY, JSON.stringify(allBooks));
        // console.log("Данните за лепенките са запазени успешно!");
    } catch (e) {
        console.error("Грешка при запазване в localStorage:", e);
    }
}

/** * Зарежда статусите от localStorage и ги слива с глобалния масив allBooks.
 * ИЗВИКВА СЕ ПРИ ЗАРЕЖДАНЕ НА ВСЯКА СТРАНИЦА.
 */
function loadStickers() {
    const savedData = localStorage.getItem(STICKERS_DATA_KEY);
    
    if (savedData) {
        const savedStickers = JSON.parse(savedData);
        
        // Преминаваме през всички лепенки в глобалния масив
        for (let i = 0; i < allBooks.length; i++) {
            const stickerId = allBooks[i].id;
            // Намираме съответната лепенка в запазените данни по ID
            const savedSticker = savedStickers.find(s => s.id === stickerId);
            
            if (savedSticker) {
                // Слива данни: обновяваме статусите на оригиналния обект
                allBooks[i].isCollected = savedSticker.isCollected;
                allBooks[i].isWanted = savedSticker.isWanted;
            }
        }
        // console.log("Статусите на лепенките са заредени от localStorage.");
    } else {
        // Ако няма данни, запазваме началния масив като база за първи път
        saveStickers();
        // console.log("Няма запазени данни. Използвани са началните стойности.");
    }
}

// В app.js, във функцията handleStatusChange(stickerId, newStatus)
function handleStatusChange(stickerId, newStatus) {
    const sticker = allBooks.find(s => s.id === stickerId);
    if (!sticker) return;

    // 1. Нулиране на всички статуси
    sticker.isCollected = false;
    sticker.isWanted = false;

    // 2. Задаване на новия статус
    if (newStatus === 'collected') {
        sticker.isCollected = true;
        // НОВО: Ако е събран, записваме днешната дата
        sticker.collectedDate = new Date().toLocaleDateString('bg-BG'); 
    } else if (newStatus === 'wanted') {
        sticker.isWanted = true;
        // НОВО: Ако не е събран, нулираме датата
        sticker.collectedDate = null; 
    } else { // missing
        // НОВО: Ако е missing, нулираме датата
        sticker.collectedDate = null; 
    }
    
    
    // ... (съществуващият код за запазване в Local Storage) ...
    saveStickersToLocalStorage(); 
    
    // ... (останалата част от функцията) ...
    if (window.location.pathname.includes('books_details.html')) {
        renderStickerDetails(stickerId);
    }

  }


// --- ФУНКЦИИ ЗА ВХОД/РЕГИСТРАЦИЯ ---
// ... (Твоите функции handleLogin, handleRegister, handleForgotPassword) ...
function handleLogin(event) {
    event.preventDefault();
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
        // Заместваме alert() с console.error/log
        console.error('Моля, въведете и имейл, и парола.'); 
        return;
    }
    const loginData = { email: email, password: password };

    console.log('--- Изпращане на данни към сървър ---');
    console.log('Данни за вход:', loginData);

    // Симулация на пренасочване след успешен вход
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'home.html'; 
}

function handleRegister(event) {
    event.preventDefault();
    const email = document.getElementById('reg-email').value.trim();
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (!email || !password || !confirmPassword) {
        console.error('Моля, попълнете всички полета.');
        return;
    }
    if (password.length < 6) {
        console.error('Паролата трябва да бъде поне 6 символа.');
        return;
    }
    if (password !== confirmPassword) {
        console.error('Паролите не съвпадат!');
        return;
    }
    
    const registrationData = { email: email, password: password };
    console.log('--- Симулация на регистрация ---');
    console.log('Данни за регистрация:', registrationData);

    // Симулация на успешна регистрация
    window.location.href = 'login.html'; 
}

function handleForgotPassword(event) {
    event.preventDefault();
    const email = document.getElementById('reset-email').value.trim();

    if (!email) {
        console.error('Моля, въведете Вашия имейл адрес.');
        return;
    }
    
    console.log('--- Симулация: Изпращане на линк за възстановяване ---');
    console.log('Имейл за възстановяване:', email);

    // Симулация на пренасочване
    window.location.href = 'login.html'; 
}


// --- ЛОГИКА ЗА СПИСЪК (stickers_list.html) ---

/**
 * Генерира HTML елементите на списъка с лепенки в Grid.
 */
function renderBookGrid(stickersToRender = allBooks) {
    const gridElement = document.getElementById('books-grid');
    if (!gridElement) return;

    gridElement.innerHTML = ''; 

    

    stickersToRender.forEach(sticker => {
        const displayId = sticker.id.toString().replace(/b/gi, '');
        const card = document.createElement('div');
        card.className = 'sticker-card';
        card.setAttribute('data-id', sticker.id);
        
        // Определяне на статуса и цвета от актуалния обект
        let status = 'missing';
        if (sticker.isCollected) {
            status = 'collected';
        } else if (sticker.isWanted) {
            status = 'wanted';
        }
        const backgroundColor = STATUS_COLORS[status];

        
        
        // Прилагане на стила директно в HTML
      card.innerHTML = `
        <div class="sticker-image-placeholder" style="background-color: ${backgroundColor};">
            <img src="Images/Books/${sticker.id}.png" alt="${sticker.title}" class="sticker-img">
        </div>
        
        <div class="sticker-action-row">
            <p class="sticker-number">№${displayId}</p>
            <button class="open-button" data-id="${sticker.id}">Отвори</button>
        </div>
    `;

        // Слушател 1: За клик върху цялата картичка (за детайли), освен бутона
        card.addEventListener('click', (e) => {
            // Този блок навигира, ако кликът не е върху бутон
            if (e.target.tagName !== 'BUTTON') { 
                const stickerId = card.getAttribute('data-id');
                window.location.href = `books_details.html?id=${stickerId}`;
            }
        });

        // Слушател 2: За клик само върху бутона "Отвори".
        const openButton = card.querySelector('.open-button');
        if (openButton) {
            openButton.addEventListener('click', (e) => {
                // Спираме разпространението на събитието, за да не се задейства
                // и слушателят на родителската картичка (card)
                e.stopPropagation(); 
                const stickerId = e.currentTarget.getAttribute('data-id');
                window.location.href = `books_details.html?id=${stickerId}`;
            });
        }

        gridElement.appendChild(card);
    });
}

/**
 * Изчислява и попълва статистиката в горната част на екрана.
 */
function updateStickerStats() {
    // Изчислява се на база allBooks, който вече е обновен от loadStickers()
    const collectedCount = allBooks.filter(s => s.isCollected).length;
    // Wanted са тези, които искам, но НЕ съм събрал
    const wantedCount = allBooks.filter(s => s.isWanted && !s.isCollected).length; 
    const missingCount = allBooks.length - collectedCount; // Липсват = Общо - Имам

    // Попълване на данните в HTML за екрана СПИСЪК
    const haveEl = document.getElementById('stat-have-count');
    const wantEl = document.getElementById('stat-want-count');
    const missingEl = document.getElementById('stat-missing-count');

    if (haveEl) haveEl.textContent = collectedCount;
    if (wantEl) wantEl.textContent = wantedCount;
    if (missingEl) missingEl.textContent = missingCount;

    // Попълване на данните в HTML за екрана КАРТА
    const haveElMap = document.getElementById('stat-have-count-map');
    const wantElMap = document.getElementById('stat-want-count-map');
    const missingElMap = document.getElementById('stat-missing-count-map');

    if (haveElMap) haveElMap.textContent = collectedCount;
    if (wantElMap) wantElMap.textContent = wantedCount;
    if (missingElMap) missingElMap.textContent = missingCount;

    // Попълване на данните в HTML за началния екран (home.html)
    const collectedHomeEl = document.getElementById('home-stat-collected');
    const wantedHomeEl = document.getElementById('home-stat-wanted');
    const missingHomeEl = document.getElementById('home-stat-missing');

    if (collectedHomeEl) collectedHomeEl.textContent = collectedCount;
    if (wantedHomeEl) wantedHomeEl.textContent = wantedCount;
    if (missingHomeEl) {
        // Можем да добавим и процент завършеност
        const percentage = ((collectedCount / allBooks.length) * 100).toFixed(1);
        missingHomeEl.textContent = missingCount;
    }
}

/**
 * Добавя логика за търсене.
 */
function setupSearchLogic() {
    const searchInput = document.getElementById('sticker-search-input');
    const searchButton = document.getElementById('search-button');

    if (!searchInput || !searchButton) return;

    const performSearch = () => {
        const query = searchInput.value.toLowerCase().trim();
        const filteredStickers = allBooks.filter(sticker => 
            sticker.title.toLowerCase().includes(query) || sticker.id.includes(query)
        );
        renderBookGrid(filteredStickers);
    };

    searchButton.addEventListener('click', performSearch);
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

/**
 * Свързва падащото меню за филтриране с логиката applyFilter.
 */
function setupFilterControls() {
    // Търсим елемента по ID: 'sticker-filter'
    const filterSelect = document.getElementById('sticker-filter');

    if (filterSelect) {
        console.log("SUCCESS: Елементът за филтър е намерен."); // Тест за успешно намиране
        
        filterSelect.addEventListener('change', (e) => {
            const selectedValue = e.target.value;
            // КЛЮЧОВО: Извикваме applyFilter с избраната стойност
            applyFilter(selectedValue); 
            console.log("Филтриране по:", selectedValue); // Тест за изпълнение
        });
        
    } else {
        console.error("ГРЕШКА: Падащото меню 'sticker-filter' не е намерено.");
    }
}

// app.js (Добавете този блок след setupSearchLogic)

/**
 * Прилага филтър по статус и рендира списъка.
 * @param {string} filterStatus - Статус ('all', 'collected', 'wanted', 'missing').
 */
/**
 * Прилага филтър по статус ('all', 'collected', 'wanted', 'missing') и рендира списъка.
 */
function applyFilter(filterStatus) {
    let filteredStickers = allBooks; // Започваме с пълния списък
    
    if (filterStatus !== 'all') {
        filteredStickers = allBooks.filter(sticker => {
            // determineStatusKey е Вашата функция, която връща 'collected', 'wanted' или 'missing'
            const currentStatus = determineStatusKey(sticker.id); 
            
            // Филтриране по съвпадение на статуса
            return currentStatus === filterStatus;
        });
    }
    
    // Изчиства стария списък и показва новия
    renderBookGrid(filteredStickers);
}

/**
 * Маркира кой филтър бутон е активен (ако имате такива бутони в HTML).
 * @param {string} filterStatus 
 */
function highlightFilterButton(filterStatus) {
    // Ако имате бутони за филтриране в HTML (например: #filter-all, #filter-collected)
    // бихте искали да добавите/премахнете клас 'active' към тях.
    // Пример: document.querySelectorAll('.stat-filter-button').forEach(btn => btn.classList.remove('active'));
    // document.getElementById('filter-' + filterStatus).classList.add('active');
}


// --- ЛОГИКА ЗА ДЕТАЙЛИ (sticker_details.html) ---

/**
 * Актуализира статуса на дадена лепенка в масиваallBooks и запазва данните.
 * @param {string} stickerId - ID на лепенката.
 * @param {string} newStatus - Новият статус ('collected', 'wanted', 'missing').
 */
function updateStickerStatusInArray(stickerId, newStatus) {
    // Намиране на оригиналния обект в масива allBooks
    const index = allBooks.findIndex(s => s.id === stickerId);
    
    if (index !== -1) {
        // Зануляваме всички статуси
        allBooks[index].isCollected = false;
        allBooks[index].isWanted = false;

        // Поставяме новия статус
        if (newStatus === 'collected') {
            allBooks[index].isCollected = true;
        } else if (newStatus === 'wanted') {
            allBooks[index].isWanted = true;
        } 
        
        // 🚨 ЗАПАЗВАНЕ: Запазваме променения масив в localStorage
        saveStickers();
        
        // След запазването, актуализираме и статистиката на всички екрани
        updateStickerStats();
    }
}

/**
 * Функцията, която се грижи за зареждането на детайлите на лепенката.
 */
function renderStickerDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const stickerId = urlParams.get('id'); 
    
    // 🚨 ТУК ИЗПОЛЗВАМЕ АКТУАЛИЗИРАНИЯ allBooks, благодарение на loadStickers()
    const sticker = allBooks.find(s => s.id === stickerId);

    // Махаме "b" от ID-то за показване
    const displayId = sticker.id.toString().replace('b', '');

    // Попълваме в HTML-а
    const idElem = document.getElementById('detail-id');
    if (idElem) {
        idElem.textContent = `Книжка №${displayId}`;
    }
    
    // Ако искаш и в заглавието на таба да е само числото:
    document.title = `Книжка №${displayId} | Детайли`;
    
    if (!sticker) {
         console.error(`Лепенка с ID ${stickerId} не е намерена!`);
         // Връщаме се към списъка, ако ID-то е невалидно
         window.location.href = 'books_list.html';
         return;

         // Чак сега обработваме ID-то за показване
    // Използваме /b/gi, което е регулярен израз за "намери всички 'b' без значение малки или големи"
    const displayId = sticker.id.toString().replace(/b/gi, '');

    // Попълваме в HTML-а
    const idElem = document.getElementById('detail-id');
    if (idElem) {
        idElem.textContent = `Книжка №${displayId}`;
    }
    
    // Актуализиране на заглавието на таба
    document.title = `Книжка №${displayId} | Детайли`;

    // Тук продължава останалата част от кода ти за заглавие, описание и т.н.
    // ...
    }

    
    
    // Попълване на голямата снимка
    const imagePlaceholderEl = document.getElementById('large-image-placeholder');
    if (imagePlaceholderEl) {
        imagePlaceholderEl.innerHTML = `<img src="${sticker.imagePath || 'placeholder.png'}" alt="${sticker.title}" class="detail-img">`;
    }
    
    document.getElementById('detail-full-title').textContent = `№ ${sticker.id} ${sticker.title}`;
    document.getElementById('detail-description-text').textContent = sticker.description;
    const additionalInfoEl = document.getElementById('detail-additional-info');
   additionalInfoEl.innerHTML = sticker.additionalInfo || ''; // Използваме || '' за да предотвратим грешки, ако полето липсва
    
    // Взимане на елементите за смяна на цвят и статус
    const backgroundWrapper = document.getElementById('image-background-wrapper');
    const statusButtons = document.querySelectorAll('.status-btn');
    
    // Взимаме текущия статус, за да покажем правилния цвят при зареждане
    let currentStatus = sticker.isCollected ? 'collected' : (sticker.isWanted ? 'wanted' : 'missing'); 
    
    // 1. ЗАДАВАМЕ НАЧАЛНИЯ ЦВЯТ НА КОНТЕЙНЕРА:
    if (backgroundWrapper) {
        backgroundWrapper.style.backgroundColor = STATUS_COLORS[currentStatus];
    }
    
    // Активираме правилния бутон при зареждане и закачаме слушатели
    statusButtons.forEach(button => {
        const buttonStatus = button.getAttribute('data-status');

        // Проверяваме дали бутонът съвпада с текущия статус на лепенката
        if (buttonStatus === currentStatus) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }

        button.addEventListener('click', (e) => {
            const newStatus = e.currentTarget.getAttribute('data-status');
            
            // 2. ПРОМЯНА НА ЦВЕТА НА МЕСТО
            if (backgroundWrapper) {
                backgroundWrapper.style.backgroundColor = STATUS_COLORS[newStatus];
            }
            
            // 3. АКТУАЛИЗИРАНЕ НА ДАННИТЕ В allBooks И LOCAL STORAGE
            updateStickerStatusInArray(sticker.id, newStatus);
            // 4. updateStickerStats() се извиква вътре в updateStickerStatusInArray

            // Визуален ефект за активен бутон
            statusButtons.forEach(btn => btn.classList.remove('active'));
            e.currentTarget.classList.add('active');
            
            console.log(`Статусът за ${sticker.title} е променен на: ${newStatus}`);
        });
    });

    // Добавяме слушател за бутона за маршрут
    const routeButton = document.getElementById('show-route-btn');
    if (routeButton && sticker.coords) {
        routeButton.addEventListener('click', () => {
            handleShowRoute(sticker.coords);
        });
    } else if (routeButton) {
        // Скриваме бутона, ако няма координати
        routeButton.style.display = 'none';
    }
}


/**
 * Обработва заявката за показване на маршрута с геолокация.
 * (Сега използва Google Maps URL с координати)
 */
function handleShowRoute(destinationCoords) {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLat = position.coords.latitude;
                const userLon = position.coords.longitude;
                
                // URL за Google Maps, който създава маршрут от текущата позиция до дестинацията
                const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLon}&destination=${destinationCoords.lat},${destinationCoords.lng}`;
                
                console.log('Отваряне на маршрута:', mapsUrl);
                window.open(mapsUrl, '_blank');
            },
          (error) => {
        console.log("Грешка код:", error.code, "Съобщение:", error.message);
        showObjectsBtn.textContent = "Покажи обектите в района";
        alert("Грешка при локация: " + error.message);
    },
    {
        enableHighAccuracy: true, // Използвай GPS, не само Wi-Fi
        timeout: 10000,           // Чакай 10 секунди максимум
        maximumAge: 0             // Не използвай стари (кеширани) координати
    }
    );
    } else {
        console.error('Вашият браузър не поддържа геолокация.');
    }
}


// --- ЛОГИКА ЗА КАРТА (stickers_map.html) ---



/**
 * Добавя маркери за всички лепенки, които имат координати.
 */
function renderStickerMarkers() {
    if (!map) return;

    let activeInfoWindow = null;
    const markers = []; // Тук ще събираме обектите за клъстеризатора

    allBooks.forEach(sticker => {
        if (sticker.coords && sticker.coords.lat && sticker.coords.lng) {
            
            // 1. Твоята оригинална логика за статуса
            let markerColor = 'missing';
            if (sticker.isCollected) {
                markerColor = 'collected';
            } else if (sticker.isWanted) {
                markerColor = 'wanted';
            }
            
            const iconFile = markerColor === 'collected' ? 'green' : (markerColor === 'wanted' ? 'yellow' : 'red');
            // Оправено на https и правилен синтаксис
            const iconUrl = `https://maps.google.com/mapfiles/ms/icons/${iconFile}-dot.png`;

            // 2. Създаваме маркера (забележи: махаме map: map, за да го контролира клъстеризатора)
            const marker = new google.maps.Marker({
                position: { lat: parseFloat(sticker.coords.lat), lng: parseFloat(sticker.coords.lng) },
                title: sticker.title,
                icon: iconUrl
            });
            
            // 3. Твоят оригинален Info Window (със снимката и стиловете)
            const infoWindow = new google.maps.InfoWindow({
                content: `
                    <div style="font-size: 0.9em; color: #333; padding: 5px;">
                        <b>№${sticker.id} ${sticker.title}</b>
                        <div style="margin: 8px 0;">
                            <img src="${sticker.imagePath}" 
                                 alt="${sticker.title}" 
                                 style="width: 100%; height: auto; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
                        </div>
                        <p style="margin: 5px 0 0;">Статус: ${markerColor}</p>
                        <a href="books_details.html?id=${sticker.id}" target="_self">Виж детайли</a>
                    </div>
                `
            });

            // Твоят Listener за затваряне на стария прозорец
            marker.addListener("click", () => {
                if (activeInfoWindow) {
                    activeInfoWindow.close();
                }
                infoWindow.open(map, marker);
                activeInfoWindow = infoWindow;
            });

            // 4. ДОБАВЯМЕ МАРКЕРА В СПИСЪКА
            markers.push(marker);
        }
    });

    // 5. ИНИЦИАЛИЗИРАМЕ КЛЪСТЕРИТЕ (СЪС ЗАЩИТА)
    if (typeof markerClusterer !== 'undefined' && markers.length > 0) {
        new markerClusterer.MarkerClusterer({
            map: map,
            markers: markers
        });
    } else {
        // Ако нещо се обърка с библиотеката, ги показваме по стария начин
        markers.forEach(m => m.setMap(map));
    }
}

/**
 * Обработва заявката за позициониране на картата спрямо текущото местоположение.
 */
function handleGeoLocationRequest() {
    const mapElement = document.getElementById('map-canvas');

    if (!map) {
        if (mapElement) mapElement.textContent = 'Картата все още се зарежда...';
        return;
    }

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLat = position.coords.latitude;
                const userLon = position.coords.longitude;
                const userLocation = new google.maps.LatLng(userLat, userLon);
                
                // 1. Позициониране на картата
                map.setCenter(userLocation);
                map.setZoom(13); // Увеличаваме, за да покажем района около потребителя

                // 2. Добавяне на маркер за потребителя
                new google.maps.Marker({
                    position: userLocation,
                    map: map,
                    title: 'Вашето местоположение',
                    icon: { 
                        path: google.maps.SymbolPath.CIRCLE, 
                        scale: 7,
                        fillColor: '#4285F4', // Синьо
                        fillOpacity: 1,
                        strokeWeight: 0
                    }
                });

                console.log(`Картата е центрирана на: ${userLat}, ${userLon}.`);
            },
            (error) => {
                // Избягваме alert()
                let errorMessage = 'Неуспешно извличане на Вашето местоположение. Проверете настройките на телефона си.';
                if (error.code === error.PERMISSION_DENIED) {
                    errorMessage = 'За да видим обектите в района, моля, активирайте услугите за местоположение (Location) на Вашия телефон.';
                }
                console.error(errorMessage);
            }
        );
    } else {
        console.error('Вашият браузър или устройство не поддържа геолокация.');
    }
}


// --- ИНИЦИАЛИЗАЦИЯ (ПРИ ЗАРЕЖДАНЕ НА СТРАНИЦАТА) ---

document.addEventListener('DOMContentLoaded', () => {

    console.log("Данните за книжки:", typeof allBooks !== 'undefined' ? allBooks.length : "липсват");
    
    const grid = document.getElementById('books-grid');
    console.log("Контейнерът на екрана:", grid ? "намерен" : "НЕ Е НАМЕРЕН");

    // 1. Първо зареждаме данните от Local Storage, за да обновим allBooks
    loadStickers();
    
    
    // 2. Логика за формите за вход/регистрация
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    const registerForm = document.querySelector('.register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
    const forgotPasswordForm = document.querySelector('.forgot-password-form');
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', handleForgotPassword);
    }

    if (window.location.pathname.includes('books_details.html')) {
    renderBookDetails(); // Извикваме новата функция
}
  // БЛОК ЗА СТРАНИЦАТА СЪС СПИСЪКА (stickers_list.html)
if (window.location.pathname.includes('books_list.html')) {
    
    // 1. Рендиране на списъка и закачане на слушатели за търсене/филтриране
    renderBooksList(); 
    
    // 2. Настройка на логиката за търсене и филтриране
    setupFilterControls();
    
    // 3. 🔑 ИЗВИКВАНЕ НА ФУНКЦИЯТА ЗА СКРОЛВАНЕ ТУК
    setupScrollFooterToggle(); 
}



    // app.js (Вътре в DOMContentLoaded или основния setup)

/**
 * Свързва падащото меню за филтриране с логиката applyFilter.
 */
function setupFilterControls() {
    // Търсим елемента по правилното ID: 'sticker-filter'
    const filterSelect = document.getElementById('sticker-filter');

    if (filterSelect) {
        console.log("SUCCESS: Елементът за филтър е намерен."); // Тест за успешно намиране
        
        filterSelect.addEventListener('change', (e) => {
            const selectedValue = e.target.value;
            // КЛЮЧОВО: Извикваме applyFilter с избраната стойност
            applyFilter(selectedValue); 
            console.log("Филтриране по:", selectedValue); // Тест за изпълнение
        });
        
        // Допълнително: При зареждане на страницата, прилагаме текущия филтър (All)
        applyFilter(filterSelect.value);
        
    } else {
        console.error("ГРЕШКА: Падащото меню 'sticker-filter' не е намерено.");
    }
}

// Уверете се, че setupFilterControls() се извиква:
document.addEventListener('DOMContentLoaded', () => {
    
    // Първо зареждаме статусите от Local Storage
    loadStickers(); 
    
    // Актуализираме статистиката (броя Имам/Искам/Нямам)
    updateStickerStats();
    
    // ... Друга логика ...
    
    // 💡 ТУК ТРЯБВА ДА Е ИЗВИКВАНЕТО!
    if (window.location.pathname.includes('stickers_list.html')) {
        setupSearchLogic(); // Вашата функция за търсене
        setupFilterControls(); // <-- ДОБАВЕТЕ ТОВА ИЗВИКВАНЕ
    }
    
    // ...
});

    // --- ЛОГИКА ЗА ФИЛТРИРАНЕ ПО СТАТУС (stickers_list.html) ---

// Намиране на всички елементи от статистиката, които са бутони/линкове
const statElements = document.querySelectorAll('.stat-box'); 
statElements.forEach(el => {
    // Взимане на типа филтър от data-attribute (трябва да го добавите в HTML!)
    const filterType = el.getAttribute('data-filter'); 
    
    if (filterType) {
        el.addEventListener('click', () => {
            // ИЗВИКВАНЕ на новата филтрираща логика
            applyFilter(filterType); 
        });
    }
});

// Добавяне на филтър за всички лепенки (ако имате отделен бутон/линк)
const allButton = document.getElementById('filter-all-button');
if (allButton) {
    allButton.addEventListener('click', () => {
        applyFilter('all');
    });
}

    // 3. Логика за началния екран (home.html)
    if (window.location.pathname.includes('home.html')) {
        updateStickerStats();
        
        const userNameEl = document.getElementById('user-name');
        if (userNameEl) {
            // Тук би се заредило истинското име на потребителя
            userNameEl.textContent = 'Георги'; 
        }
        
        const logoutButton = document.getElementById('logout-button');
        if (logoutButton) {
            logoutButton.addEventListener('click', () => {
                // Приемаме, че логването се контролира от булева стойност в localStorage
                localStorage.setItem('isLoggedIn', 'false');
                // Пренасочване към екрана за вход
                window.location.href = 'login.html'; 
            });
        }
    } 
    
    // 4. Логика за СПИСЪКА (stickers_list.html)
    if (document.getElementById('stickers-grid')) {
        updateStickerStats();
        renderBookGrid(); // renderBookGrid вече ще използва обновените allBooks!
        setupSearchLogic();
    }
    
    // 5. Логика за ДЕТАЙЛИТЕ (sticker_details.html)
    if (document.querySelector('.details-container')) {
        renderStickerDetails();
    }

    // 6. Логика за КАРТАТА (stickers_map.html)
    if (document.querySelector('.map-container')) {
        updateStickerStats();
        
        const textButton = document.getElementById('show-objects-btn');
        const iconButton = document.getElementById('recenter-location-btn');
        
        if (textButton) {
            textButton.addEventListener('click', handleGeoLocationRequest);
        }
        if (iconButton) {
            iconButton.addEventListener('click', handleGeoLocationRequest);
        }
    }
});
// app.js (добавете този код)

// ... Вашият съществуващ код ...

// Инициализира логиката за профилната снимка
function initProfilePictureLogic() {
    const profilePicEl = document.getElementById('profile-picture');
    const fileInputEl = document.getElementById('file-input');

    if (!profilePicEl || !fileInputEl) return; 

    // 1. При клик върху снимката, задействаме клик върху скрития input file
    profilePicEl.addEventListener('click', () => {
        fileInputEl.click();
    });

    // 2. При промяна във file input-а (избран нов файл)
    fileInputEl.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (!file) return;

        // 3. Използваме FileReader, за да прочетем файла като Base64 data URL
        const reader = new FileReader();
        reader.onload = (e) => {
            const imageDataUrl = e.target.result;

            // Показваме новата снимка
            profilePicEl.src = imageDataUrl;

            // 4. Запазваме снимката в Local Storage
            localStorage.setItem('userProfilePic', imageDataUrl);
        };
        reader.readAsDataURL(file);
    });

    // 5. Зареждаме снимката от Local Storage при зареждане на страницата
    loadProfilePicture();
}

// Зарежда снимката от Local Storage, ако има такава
function loadProfilePicture() {
    const profilePicEl = document.getElementById('profile-picture');
    const savedPicData = localStorage.getItem('userProfilePic');

    if (profilePicEl && savedPicData) {
        profilePicEl.src = savedPicData;
    }
}


// Уверете се, че извиквате тази функция при зареждане на home.html:
if (window.location.pathname.includes('home.html')) {
    // ... Вашите съществуващи функции за зареждане ...
    initProfilePictureLogic(); // <-- НОВА ФУНКЦИЯ
}

// app.js

const GOOGLE_CLIENT_ID = "ВАШИЯТ_CLIENT_ID_ОТ_GOOGLE"; // <-- СМЕНЕТЕ ТОВА!
const GOOGLE_REDIRECT_URI = "http://localhost:8080/home.html"; // Сменете с Вашия redirect URL

function handleGoogleLogin() {
    // 1. Конфигуриране на Auth Request
    const client = google.accounts.oauth2.initCodeClient({
        client_id: GOOGLE_CLIENT_ID,
        scope: 'email profile', // Искаме достъп до имейла и профила
        ux_mode: 'popup', // Използваме изскачащ прозорец
        redirect_uri: GOOGLE_REDIRECT_URI,
        
        // 2. Callback функция, която се извиква след успешен вход
        callback: (response) => {
            // response.code съдържа кода за достъп (Authorization Code).
            // В РЕАЛНО ПРИЛОЖЕНИЕ: Този код трябва да се изпрати към Вашия сървър,
            // за да се обмени за токен и да се потвърди самоличността.
            
            // В този PWA пример, ние просто ще симулираме вход:
            console.log('Успешен вход с Google. Код за достъп:', response.code);
            
            // СИМУЛАЦИЯ: Пренасочване към home.html
            window.location.href = 'home.html'; 
        },
    });

    // 3. Извикване на Google Login Flow
    client.requestCode();
}

// Свързване на функцията с бутона при зареждане на страницата
document.addEventListener('DOMContentLoaded', () => {
    const googleButton = document.querySelector('.google-login-button');
    
    if (googleButton) {
        // Променяме бутона да бъде standard HTML button (ако не е)
        googleButton.addEventListener('click', (e) => {
            e.preventDefault(); // Предотвратяваме стандартното поведение
            
            // Проверяваме дали SDK е зареден
            if (typeof google !== 'undefined' && google.accounts && google.accounts.oauth2) {
                handleGoogleLogin();
            } else {
                console.error("Google Identity Services SDK не е зареден.");
                alert("Моля, опитайте отново след малко. Има проблем с Google услугите.");
            }
        });
        
    }

    
});

document.addEventListener('DOMContentLoaded', () => {
    
    // Първо зареждаме статусите от Local Storage (ТРЯБВА ДА Е ВИНАГИ ПЪРВО)
    loadStickers(); 
    
    // Ако сме на страницата за Вход/Регистрация/Забравена парола
    if (window.location.pathname.includes('login.html')) {
        document.getElementById('login-form')?.addEventListener('submit', handleLogin);
    } else if (window.location.pathname.includes('register.html')) {
        document.getElementById('register-form')?.addEventListener('submit', handleRegister);
    } else if (window.location.pathname.includes('forgot_password.html')) {
        document.getElementById('reset-form')?.addEventListener('submit', handleForgotPassword);
    } 
    
    // Ако сме на страницата за СПИСЪК с лепенки (stickers_list.html)
    if (window.location.pathname.includes('stickers_list.html')) {
        updateStickerStats();
        renderBookGrid(allBooks); // Показваме всички лепенки при зареждане
        setupSearchLogic();
        setupFilterControls(); // <-- ИЗВИКВАНЕ НА НОВАТА ФУНКЦИЯ!
    }
    
    // Ако сме на началната страница (home.html)
    if (window.location.pathname.includes('home.html')) {
        updateStickerStats();
    }
    
    // Ако сме на страницата за ДЕТАЙЛИ (books_details.html)
   if (window.location.pathname.includes('books_details.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const stickerId = urlParams.get('id');
    
    // 🔑 МЕСТОПОЛОЖЕНИЕ 1: Вътре в if(stickerId)
    if (stickerId) {
        
        // 1. РЕНДИРАНЕ: Тук се създава <img> елементът
        renderStickerDetails(stickerId);
        
        // ----------------------------------------------------
        // 🔑 МЕСТОПОЛОЖЕНИЕ 2: ТУК ТРЯБВА ДА Е КОДЪТ
        // ----------------------------------------------------
        
        const imageElement = document.getElementById('sticker-image');
        
        if (imageElement) {
            imageElement.addEventListener('contextmenu', (event) => {
                event.preventDefault(); // Забранява показването на контекстното меню
            });
        }
        
    }
}
    

});

function setupScrollFooterToggle() {
    // Дефинираме фуутъра с клас .tab-bar
    const footer = document.querySelector('.tab-bar'); 
    if (!footer) return;

    let lastScrollTop = 0; 
    const scrollThreshold = 10; // По-малък праг за по-бърза реакция

    window.addEventListener('scroll', () => {
        let currentScroll = window.scrollY || document.documentElement.scrollTop;

        // 1. Скролване надолу (Скрий)
        // Скриваме фуутъра само ако скролваме надолу и сме по-далеч от върха от прага
        if (currentScroll > lastScrollTop && currentScroll > scrollThreshold) {
            // Скрива фуутъра: Добавя клас 'hidden' (ако използвате CSS, за да го скриете)
            // ИЛИ: footer.classList.remove('show'); (ако използвате CSS за показване)
            footer.classList.add('hidden'); // Препоръчвам този клас
            footer.classList.remove('show'); // Ако ползвате 'show'
        } 
        // 2. Скролване нагоре (Покажи)
        else if (currentScroll < lastScrollTop) {
            // Показва фуутъра
            // footer.classList.remove('hidden'); // Премахва класа 'hidden'
            footer.classList.add('show'); // Добавя класа 'show'
        }

        // Обновяване на предишната позиция
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
}

function updateHomeStats() {
    // Използваме точните ID-та от твоя home.html
    const haveElem = document.getElementById('home-stat-collected');
    const wantElem = document.getElementById('home-stat-wanted');
    const missingElem = document.getElementById('home-stat-missing');

    // Ако не сме на началната страница, спираме
    if (!haveElem) return;

    let have = 0;
    let want = 0;
    let missing = 0;

    // Броим лепенките от allBooks (която идва от data.js)
   allBooks.forEach(sticker => {
        if (sticker.isCollected) {
            have++;
        } else if (sticker.isWanted) {
            want++;
        } else {
            missing++;
        }
    });

    // Записваме резултатите
    haveElem.textContent = have;
    wantElem.textContent = want;
    missingElem.textContent = missing;
    
    console.log("Статистиката за Home е обновена успешно!");
}

// Извикваме я при зареждане
document.addEventListener('DOMContentLoaded', () => {
    loadStickers(); // Зареждаме състоянието (Имам/Нямам)
    
    const path = window.location.pathname;

    // Проверка за страница СПИСЪК
    if (path.includes('books_list.html')) {

        const urlParams = new URLSearchParams(window.location.search);
    const stickerId = urlParams.get('id');
    
    console.log("Търся детайли за книга с ID:", stickerId); // Проверка в конзолата

    if (stickerId) {
        // Увери се, че тук викаш правилната функция!
        renderStickerDetails(stickerId); 
    } else {
        console.error("Не е намерено ID в URL адреса!");
    }
        updateStickerStats(); 
        renderBookGrid(allBooks); 
        setupSearchLogic();
        setupFilterControls();
        setupScrollFooterToggle();
    }

    // Проверка за страница ДЕТАЙЛИ
   if (path.includes('books_details.html')) { // Увери се, че файлът ти се казва точно така
    const urlParams = new URLSearchParams(window.location.search);
    const stickerId = urlParams.get('id');
    
    if (stickerId) {
        updateStickerStats(); 
        renderStickerDetails(stickerId); // Тази функция ще попълни данните за конкретната книга
    }
    }

    // Проверка за НАЧАЛО
    if (path.includes('home_books.html')) {
        updateHomeStats();
    }
});

/**
 * Основна функция за показване на детайлите на книгата
 */
function renderBookDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('id'); 
    
    // Търсим в allBooks (увери се, че това е името в data_books.js)
    const book = allBooks.find(b => b.id === bookId);

    if (!book) {
        console.error("Книгата не е намерена!");
        return;
    }

    // --- ЗАГЛАВИЕ ---
    const titleElem = document.getElementById('detail-full-title');
    if (titleElem) {
        const cleanId = book.id.toString().replace(/b/gi, ''); 
        titleElem.innerHTML = `№ ${cleanId} <b>${book.title}</b>`;
    }

    // --- 2. СНИМКА И ЦВЯТ (Ползваме оригиналното ID 'b001' за файла) ---
    const imagePlaceholder = document.getElementById('large-image-placeholder');
    if (imagePlaceholder) {
        // Проверка за статус (оцветяване)
        const isCollected = book.collected || false; 
        const bgColor = isCollected ? '#e8f5e9' : '#f5f5f5';

        imagePlaceholder.innerHTML = `
            <div style="width: 100%; display: flex; justify-content: center; align-items: center;">
                <img src="Images/Books/${book.id}.png" 
                     id="sticker-image" 
                     style="max-width: 100%; max-height: 250px; width: auto; height: auto; object-fit: contain; display: block;"
                     onerror="console.error('Липсва файл: ' + this.src)">
            </div>
        `;
    }

// --- ОПИСАНИЕ И ИНФО ---
    const descElem = document.getElementById('detail-description-text');
if (descElem) {
    // Променяме .textContent на .innerHTML
    descElem.innerHTML = book.description || "Няма описание.";
}

    
}

// 2. Инициализация при зареждане на страницата
document.addEventListener('DOMContentLoaded', () => {
    // Проверяваме дали сме в страницата с детайли
    if (document.getElementById('detail-full-title')) {
        renderBookDetails();
    }
    
    // Ако имаш и логика за списъка в същия файл, добави я тук
});

