/**
 * WA CHAT STUDIO - BANTU WARGA DIGITAL MARKETING
 * Master Application Controller & Live Synchronizer
 */

(function () {
  'use strict';

  // --- STATE ---
  const state = {
    scenarioKey: 'rumput',
    lang: 'id',
    activeSlide: 1,
    tone: 'drama',
    platform: 'tiktok',
    avatarId: 'kang_asep',
    customAvatarUrl: null,
    hasStoryRing: true,
    contactName: 'Kang Asep (Tukang)',
    contactStatus: 'online',
    customStatusText: '',
    phoneTime: '08:18',
    batteryLevel: 84,
    showEscrowNotice: true,
    showWatermark: false,
    // Official Laravel Category System
    mainCategory: 'Perkebunan',
    subCategory: 'Pemotong rumput',
    categoryIcon: 'fa-solid fa-leaf',
    showCategoryBadge: true,
    // Deep clone of scenario data so user edits don't mutate master constants
    slidesData: []
  };

  // --- DOM ELEMENTS ---
  const el = {
    // Top Bar
    btnResetScenario: document.getElementById('btnResetScenario'),

    // Scenario & Lang & Laravel Categories (AI Generator)
    langButtons: document.querySelectorAll('#langSegmentGroup .segment-btn'),
    mainCategorySelect: document.getElementById('mainCategorySelect'),
    subCategorySelect: document.getElementById('subCategorySelect'),
    btnGenerateScenario: document.getElementById('btnGenerateScenario'),
    btnRandomizeAnother: document.getElementById('btnRandomizeAnother'),
    btnRegenerateActive: document.getElementById('btnRegenerateActive'),

    // Scenario Story Card
    scenarioStoryCard: document.getElementById('scenarioStoryCard'),
    scenarioBadgeIcon: document.getElementById('scenarioBadgeIcon'),
    scenarioBadgeText: document.getElementById('scenarioBadgeText'),
    scenarioTitleInput: document.getElementById('scenarioTitleInput'),
    scenarioSynopsisInput: document.getElementById('scenarioSynopsisInput'),
    scenarioWorkerRole: document.getElementById('scenarioWorkerRole'),
    scenarioRate: document.getElementById('scenarioRate'),

    // Avatar & Contact
    avatarPresetGrid: document.getElementById('avatarPresetGrid'),
    toggleStoryRing: document.getElementById('toggleStoryRing'),
    customAvatarInput: document.getElementById('customAvatarInput'),
    btnUploadCustomAvatar: document.getElementById('btnUploadCustomAvatar'),
    btnResetAvatar: document.getElementById('btnResetAvatar'),
    contactNameInput: document.getElementById('contactNameInput'),
    contactStatusSelect: document.getElementById('contactStatusSelect'),
    customStatusWrapper: document.getElementById('customStatusWrapper'),
    customStatusInput: document.getElementById('customStatusInput'),

    // Slides & Message Editor
    slideNavTabs: document.getElementById('slideNavTabs'),
    slideCounterBadge: document.getElementById('slideCounterBadge'),
    messageEditorList: document.getElementById('messageEditorList'),
    btnAddMessage: document.getElementById('btnAddMessage'),

    // Phone Settings
    phoneTimeInput: document.getElementById('phoneTimeInput'),
    batteryLevelInput: document.getElementById('batteryLevelInput'),
    toggleEscrowNotice: document.getElementById('toggleEscrowNotice'),
    toggleWatermark: document.getElementById('toggleWatermark'),
    toggleCategoryBadge: document.getElementById('toggleCategoryBadge'),

    // Phone Mockup (Render Target)
    phoneMockupFrame: document.getElementById('phoneMockupFrame'),
    statusBarClock: document.getElementById('statusBarClock'),
    statusBarBatteryText: document.getElementById('statusBarBatteryText'),
    statusBarBatteryIcon: document.getElementById('statusBarBatteryIcon'),
    waAvatarContainer: document.getElementById('waAvatarContainer'),
    waAvatarImg: document.getElementById('waAvatarImg'),
    waContactName: document.getElementById('waContactName'),
    waContactStatus: document.getElementById('waContactStatus'),
    waEscrowNotice: document.getElementById('waEscrowNotice'),
    waCategoryBadgeWrapper: document.getElementById('waCategoryBadgeWrapper'),
    waCategoryBadge: document.getElementById('waCategoryBadge'),
    waCategoryIcon: document.getElementById('waCategoryIcon'),
    waCategoryText: document.getElementById('waCategoryText'),
    waBubblesContainer: document.getElementById('waBubblesContainer'),
    waWatermarkBadge: document.getElementById('waWatermarkBadge'),

    // Phone Actions Dock
    btnPrevSlide: document.getElementById('btnPrevSlide'),
    btnNextSlide: document.getElementById('btnNextSlide'),
    slideDotsIndicator: document.getElementById('slideDotsIndicator'),
    btnDownloadSinglePng: document.getElementById('btnDownloadSinglePng'),
    btnDownloadAllSlides: document.getElementById('btnDownloadAllSlides'),

    // Caption & Hashtags
    platformPills: document.querySelectorAll('#platformPills .platform-pill-btn'),
    toneCards: document.querySelectorAll('#toneCards .tone-card'),
    captionHookText: document.getElementById('captionHookText'),
    captionStoryText: document.getElementById('captionStoryText'),
    captionCtaText: document.getElementById('captionCtaText'),
    captionHashtagCloud: document.getElementById('captionHashtagCloud'),

    // Copy Buttons
    btnCopyMaster: document.getElementById('btnCopyMaster'),
    btnCopyHook: document.getElementById('btnCopyHook'),
    btnCopyStory: document.getElementById('btnCopyStory'),
    btnCopyCta: document.getElementById('btnCopyCta'),
    btnCopyTags: document.getElementById('btnCopyTags'),
    btnCopyCleanTags: document.getElementById('btnCopyCleanTags'),
    btnEditCaptionMode: document.getElementById('btnEditCaptionMode'),
    editableCaptionWrapper: document.getElementById('editableCaptionWrapper'),
    editableCaptionTextarea: document.getElementById('editableCaptionTextarea'),
    btnSaveEditedCaption: document.getElementById('btnSaveEditedCaption'),

    // Toast
    toastNotification: document.getElementById('toastNotification'),
    toastMessage: document.getElementById('toastMessage')
  };

  // Robust data accessors
  function getCategories() {
    return (typeof BANTU_WARGA_CATEGORIES !== 'undefined') ? BANTU_WARGA_CATEGORIES : (window.BANTU_WARGA_CATEGORIES || []);
  }
  function getAvatars() {
    return (typeof PRESET_AVATARS !== 'undefined') ? PRESET_AVATARS : (window.PRESET_AVATARS || []);
  }
  function getScenarios() {
    return (typeof SCENARIOS !== 'undefined') ? SCENARIOS : (window.SCENARIOS || {});
  }
  function getCaptions() {
    return (typeof CAPTION_DATABASE !== 'undefined') ? CAPTION_DATABASE : (window.CAPTION_DATABASE || {});
  }

  // --- INITIALIZATION ---
  function init() {
    renderAvatarPresets();
    initCategorySelectors();
    runScenarioGeneration(false);
    bindEvents();
    renderAll();
  }

  // --- LARAVEL CATEGORY CONTROLLER ---
  function initCategorySelectors() {
    const cats = getCategories();
    if (!el.mainCategorySelect || !cats.length) return;

    el.mainCategorySelect.innerHTML = '';
    cats.forEach((cat) => {
      const opt = document.createElement('option');
      opt.value = cat.name;
      opt.textContent = `${cat.name}`;
      el.mainCategorySelect.appendChild(opt);
    });

    el.mainCategorySelect.value = state.mainCategory;
    populateSubCategories(state.mainCategory, state.subCategory);

    el.mainCategorySelect.addEventListener('change', (e) => {
      const selectedCat = e.target.value;
      populateSubCategories(selectedCat);
    });
  }

  function populateSubCategories(catName, defaultSub = null) {
    const cats = getCategories();
    const found = cats.find((c) => c.name === catName);
    if (!el.subCategorySelect) return;
    el.subCategorySelect.innerHTML = '';
    if (found && found.subs) {
      found.subs.forEach((sub) => {
        const opt = document.createElement('option');
        opt.value = sub;
        opt.textContent = sub;
        el.subCategorySelect.appendChild(opt);
      });
      if (defaultSub && found.subs.includes(defaultSub)) {
        el.subCategorySelect.value = defaultSub;
      }
    }
  }

  // --- AI SCENARIO GENERATOR ENGINE ---
  function runScenarioGeneration(randomize = false) {
    const cats = getCategories();
    let catName = el.mainCategorySelect ? el.mainCategorySelect.value : state.mainCategory;
    let subName = el.subCategorySelect ? el.subCategorySelect.value : state.subCategory;

    // If randomize is requested, pick another random subcategory or title
    if (randomize && cats.length > 0) {
      const foundCat = cats.find((c) => c.name === catName);
      if (foundCat && foundCat.subs && foundCat.subs.length > 1) {
        const otherSubs = foundCat.subs.filter((s) => s !== subName);
        subName = otherSubs[Math.floor(Math.random() * otherSubs.length)] || subName;
        if (el.subCategorySelect) el.subCategorySelect.value = subName;
      }
    }

    state.mainCategory = catName;
    state.subCategory = subName;
    const catObj = cats.find((c) => c.name === catName);
    if (catObj) state.categoryIcon = catObj.icon;

    // Call AI Generator engine from generator.js
    let generated = null;
    if (typeof generateScenario === 'function') {
      generated = generateScenario(catName, subName, state.lang);
    }

    if (!generated) {
      // Fallback
      loadScenarioData();
      return;
    }

    state.currentGenerated = generated;
    state.slidesData = JSON.parse(JSON.stringify(generated.slides || []));
    state.contactName = generated.workerRole;
    el.contactNameInput.value = state.contactName;

    if (!state.customAvatarUrl) {
      state.avatarId = generated.defaultAvatar || 'kang_asep';
    }

    // Update Story Card in left panel
    if (el.scenarioBadgeIcon) el.scenarioBadgeIcon.className = state.categoryIcon || 'fa-solid fa-tag';
    if (el.scenarioBadgeText) el.scenarioBadgeText.textContent = `${state.mainCategory} • ${state.subCategory}`;
    if (el.scenarioTitleInput) el.scenarioTitleInput.value = generated.title;
    if (el.scenarioSynopsisInput) el.scenarioSynopsisInput.value = generated.synopsis;
    if (el.scenarioWorkerRole) el.scenarioWorkerRole.textContent = generated.workerRole;
    if (el.scenarioRate) el.scenarioRate.textContent = generated.rate;

    // Update live captions
    state.generatedCaptions = generated.captions;

    renderAll();
  }

  // --- DATA LOADING ---
  function loadScenarioData() {
    const scenarios = getScenarios();
    const sc = scenarios[state.scenarioKey];
    if (!sc) return;

    // Sync categories from scenario metadata
    if (sc.category) {
      state.mainCategory = sc.category;
      state.subCategory = sc.subCategory || 'Umum';
      state.categoryIcon = sc.icon || 'fa-solid fa-tag';
      if (el.mainCategorySelect) {
        el.mainCategorySelect.value = state.mainCategory;
        populateSubCategories(state.mainCategory, state.subCategory);
      }
    }

    const langData = sc[state.lang] || sc['id'];
    // Deep clone slides
    state.slidesData = JSON.parse(JSON.stringify(langData.slides || []));
    
    // Set default contact name for this scenario/language if not custom overridden
    state.contactName = langData.name || sc.defaultName || 'Pekerja Warga';
    el.contactNameInput.value = state.contactName;

    // Set default avatar if no custom uploaded
    if (!state.customAvatarUrl) {
      state.avatarId = sc.defaultAvatar || 'kang_asep';
    }

    // Keep slide index valid
    if (state.activeSlide > state.slidesData.length) {
      state.activeSlide = 1;
    }
  }

  // --- RENDER FUNCTIONS ---

  function renderAll() {
    renderPhoneMockup();
    renderMessageEditor();
    renderSlideNavigation();
    renderCaption();
    updateAvatarSelectionHighlight();
  }

  // Render Preset Avatars Grid
  function renderAvatarPresets() {
    const avatars = getAvatars();
    if (!el.avatarPresetGrid || !avatars.length) return;
    el.avatarPresetGrid.innerHTML = '';

    avatars.forEach((av) => {
      const item = document.createElement('div');
      item.className = `avatar-item ${av.id === state.avatarId && !state.customAvatarUrl ? 'active' : ''}`;
      item.dataset.id = av.id;
      item.innerHTML = `
        <div class="avatar-thumb-wrapper">
          <img src="${av.image}" alt="${av.name}" class="avatar-thumb">
        </div>
        <div class="avatar-role-label" title="${av.name}">${av.name.split(' (')[0]}</div>
        <div class="avatar-sub-role" title="${av.role}">${av.role}</div>
      `;

      item.addEventListener('click', () => {
        state.avatarId = av.id;
        state.customAvatarUrl = null;
        state.contactName = av.name;
        el.contactNameInput.value = state.contactName;
        renderAll();
        showToast(`Avatar diubah: ${av.name}`);
      });

      el.avatarPresetGrid.appendChild(item);
    });
  }

  function updateAvatarSelectionHighlight() {
    const items = el.avatarPresetGrid.querySelectorAll('.avatar-item');
    items.forEach((item) => {
      if (item.dataset.id === state.avatarId && !state.customAvatarUrl) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  // Render Phone Mockup
  function renderPhoneMockup() {
    // 1. Status Bar
    el.statusBarClock.textContent = state.phoneTime;
    el.statusBarBatteryText.textContent = `${state.batteryLevel}%`;

    // Battery Icon
    const bat = Number(state.batteryLevel);
    el.statusBarBatteryIcon.className = 'fa-solid';
    if (bat >= 80) el.statusBarBatteryIcon.classList.add('fa-battery-full');
    else if (bat >= 55) el.statusBarBatteryIcon.classList.add('fa-battery-three-quarters');
    else if (bat >= 30) el.statusBarBatteryIcon.classList.add('fa-battery-half');
    else if (bat >= 15) el.statusBarBatteryIcon.classList.add('fa-battery-quarter');
    else el.statusBarBatteryIcon.classList.add('fa-battery-empty');

    // 2. Avatar
    let avatarSrc = 'avatars/kang_asep.jpg';
    if (state.customAvatarUrl) {
      avatarSrc = state.customAvatarUrl;
    } else {
      const avatars = getAvatars();
      const found = avatars.find((a) => a.id === state.avatarId);
      if (found) avatarSrc = found.image;
    }
    el.waAvatarImg.src = avatarSrc;

    // Story Ring
    if (state.hasStoryRing) {
      el.waAvatarContainer.classList.add('has-story-ring');
    } else {
      el.waAvatarContainer.classList.remove('has-story-ring');
    }

    // 3. Contact Info
    el.waContactName.textContent = state.contactName;

    let statusText = 'online';
    if (state.contactStatus === 'typing') statusText = 'sedang mengetik...';
    else if (state.contactStatus === 'recent') statusText = 'aktif 5 mnt lalu';
    else if (state.contactStatus === 'custom') statusText = state.customStatusText || 'online';
    el.waContactStatus.textContent = statusText;

    // 4. Escrow Notice, Category Badge & Watermark
    el.waEscrowNotice.style.display = state.showEscrowNotice ? 'block' : 'none';
    if (el.waCategoryBadgeWrapper) {
      el.waCategoryBadgeWrapper.style.display = state.showCategoryBadge ? 'flex' : 'none';
      el.waCategoryIcon.className = state.categoryIcon || 'fa-solid fa-tag';
      el.waCategoryText.textContent = `Kategori: ${state.mainCategory} • ${state.subCategory}`;
    }
    el.waWatermarkBadge.className = `wa-watermark ${state.showWatermark ? 'show' : ''}`;

    // 5. Chat Bubbles for Active Slide
    el.waBubblesContainer.innerHTML = '';
    const currentSlide = getCurrentSlide();
    const messages = currentSlide ? currentSlide.messages : [];

    messages.forEach((msg) => {
      const bubbleWrap = document.createElement('div');
      const isMe = msg.sender === 'me';
      bubbleWrap.className = `wa-bubble-wrapper ${isMe ? 'is-me' : 'is-other'}`;

      let checkmarkHtml = '';
      if (isMe) {
        if (msg.status === 'read') {
          checkmarkHtml = `<i class="fa-solid fa-check-double wa-checkmarks read" title="Dibaca"></i>`;
        } else if (msg.status === 'delivered') {
          checkmarkHtml = `<i class="fa-solid fa-check-double wa-checkmarks delivered" title="Terkirim"></i>`;
        } else {
          checkmarkHtml = `<i class="fa-solid fa-check wa-checkmarks sent" title="Terkirim (1)"></i>`;
        }
      }

      // Location Card Content inside bubble if type === 'location'
      let locationHtml = '';
      if (msg.type === 'location') {
        const mapImg = msg.mapImage || 'assets/gmaps_preview.jpg';
        locationHtml = `
          <div class="wa-location-bubble-content">
            <div class="wa-location-map-preview" style="background-image: url('${mapImg}');">
              <div class="wa-gmaps-watermark">Google</div>
            </div>
            <div class="wa-location-card-body">
              <div class="wa-location-card-title">${escapeHtml(msg.locationTitle || 'Lokasi Pekerjaan')}</div>
              <div class="wa-location-card-sub">Akurasi sampai 15 m • Ketuk untuk melihat</div>
            </div>
          </div>
        `;
      }

      bubbleWrap.innerHTML = `
        <div class="wa-bubble">
          ${locationHtml}
          <div class="wa-bubble-text">${escapeHtml(msg.text)}</div>
          <div class="wa-bubble-meta">
            <span>${msg.time || '08:18'}</span>
            ${checkmarkHtml}
          </div>
        </div>
      `;

      el.waBubblesContainer.appendChild(bubbleWrap);
    });
  }

  // Render Slide Navigation & Indicators
  function renderSlideNavigation() {
    const totalSlides = state.slidesData.length;
    el.slideCounterBadge.textContent = `Slide ${state.activeSlide} / ${totalSlides}`;

    // Update Tabs
    const tabs = el.slideNavTabs.querySelectorAll('.slide-tab-btn');
    tabs.forEach((tab) => {
      const slideNum = Number(tab.dataset.slide);
      if (slideNum === state.activeSlide) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    // Update Quick Nav Dots
    el.slideDotsIndicator.innerHTML = '';
    for (let i = 1; i <= totalSlides; i++) {
      const dot = document.createElement('div');
      dot.className = `slide-dot ${i === state.activeSlide ? 'active' : ''}`;
      dot.addEventListener('click', () => {
        state.activeSlide = i;
        renderAll();
      });
      el.slideDotsIndicator.appendChild(dot);
    }
  }

  // Render Message Editor List for Current Slide
  function renderMessageEditor() {
    el.messageEditorList.innerHTML = '';
    const currentSlide = getCurrentSlide();
    if (!currentSlide || !currentSlide.messages) return;

    currentSlide.messages.forEach((msg, idx) => {
      const isMe = msg.sender === 'me';
      const isLocation = msg.type === 'location';
      const card = document.createElement('div');
      card.className = `message-item-card ${isMe ? 'is-me' : 'is-other'}`;

      card.innerHTML = `
        <div class="msg-header-row">
          <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
            <button type="button" class="btn-icon-subtle toggle-sender" title="Ganti Pengirim (Saya / Lawan)">
              <span class="msg-sender-pill ${isMe ? 'me' : 'other'}">
                ${isMe ? 'Saya (Hijau)' : 'Lawan Bicara (Putih)'}
              </span>
            </button>
            ${isLocation ? `<span class="msg-type-pill location" title="Pesan Share Lokasi GPS"><i class="fa-solid fa-location-dot"></i> Lokasi GPS</span>` : ''}
          </div>
          
          <div class="msg-actions">
            <button type="button" class="btn-icon-subtle toggle-location ${isLocation ? 'active' : ''}" title="${isLocation ? 'Ubah ke pesan teks biasa' : 'Ubah ke tampilan Share Lokasi GPS'}">
              <i class="fa-solid fa-map-location-dot"></i>
            </button>
            <button type="button" class="btn-icon-subtle move-up" title="Geser ke Atas" ${idx === 0 ? 'disabled style="opacity:0.3"' : ''}>
              <i class="fa-solid fa-arrow-up"></i>
            </button>
            <button type="button" class="btn-icon-subtle move-down" title="Geser ke Bawah" ${idx === currentSlide.messages.length - 1 ? 'disabled style="opacity:0.3"' : ''}>
              <i class="fa-solid fa-arrow-down"></i>
            </button>
            <button type="button" class="btn-icon-subtle delete" title="Hapus Balon Pesan">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>

        ${isLocation ? `
          <div class="msg-location-edit-box">
            <label style="font-size: 0.72rem; color: #f87171; font-weight: 600;"><i class="fa-solid fa-map-pin"></i> Nama Titik Lokasi GPS:</label>
            <input type="text" class="msg-location-title-input" value="${escapeHtml(msg.locationTitle || '')}" placeholder="Contoh: Komplek Permata Blok B No. 14">
          </div>
        ` : ''}

        <textarea class="msg-text-input" rows="2" placeholder="Tulis isi pesan...">${escapeHtml(msg.text)}</textarea>

        <div class="msg-footer-row">
          <div class="msg-meta-inputs">
            <label style="font-size: 0.72rem; color: var(--text-dim);">Jam:</label>
            <input type="text" class="msg-time-input" value="${msg.time || '08:18'}">
            
            ${isMe ? `
              <label style="font-size: 0.72rem; color: var(--text-dim); margin-left: 4px;">Centang:</label>
              <select class="msg-status-select">
                <option value="read" ${msg.status === 'read' ? 'selected' : ''}>2 Biru (Dibaca)</option>
                <option value="delivered" ${msg.status === 'delivered' ? 'selected' : ''}>2 Abu (Terkirim)</option>
                <option value="sent" ${msg.status === 'sent' ? 'selected' : ''}>1 Abu (Pending)</option>
              </select>
            ` : ''}
          </div>
        </div>
      `;

      // Event Listeners for this message card
      const textInput = card.querySelector('.msg-text-input');
      textInput.addEventListener('input', (e) => {
        msg.text = e.target.value;
        renderPhoneMockup();
      });

      const locInput = card.querySelector('.msg-location-title-input');
      if (locInput) {
        locInput.addEventListener('input', (e) => {
          msg.locationTitle = e.target.value;
          renderPhoneMockup();
        });
      }

      const timeInput = card.querySelector('.msg-time-input');
      timeInput.addEventListener('input', (e) => {
        msg.time = e.target.value;
        renderPhoneMockup();
      });

      const statusSelect = card.querySelector('.msg-status-select');
      if (statusSelect) {
        statusSelect.addEventListener('change', (e) => {
          msg.status = e.target.value;
          renderPhoneMockup();
        });
      }

      const btnToggleSender = card.querySelector('.toggle-sender');
      btnToggleSender.addEventListener('click', () => {
        msg.sender = msg.sender === 'me' ? 'other' : 'me';
        if (msg.sender === 'me' && !msg.status) msg.status = 'read';
        renderAll();
      });

      const btnToggleLoc = card.querySelector('.toggle-location');
      if (btnToggleLoc) {
        btnToggleLoc.addEventListener('click', () => {
          if (msg.type === 'location') {
            delete msg.type;
            delete msg.locationTitle;
            showToast('Mode Share Lokasi dimatikan.');
          } else {
            msg.type = 'location';
            if (!msg.locationTitle) msg.locationTitle = 'Lokasi Pekerjaan Warga';
            showToast('Mode Share Lokasi GPS aktif!');
          }
          renderAll();
        });
      }

      const btnMoveUp = card.querySelector('.move-up');
      btnMoveUp.addEventListener('click', () => {
        if (idx > 0) {
          const temp = currentSlide.messages[idx];
          currentSlide.messages[idx] = currentSlide.messages[idx - 1];
          currentSlide.messages[idx - 1] = temp;
          renderAll();
        }
      });

      const btnMoveDown = card.querySelector('.move-down');
      btnMoveDown.addEventListener('click', () => {
        if (idx < currentSlide.messages.length - 1) {
          const temp = currentSlide.messages[idx];
          currentSlide.messages[idx] = currentSlide.messages[idx + 1];
          currentSlide.messages[idx + 1] = temp;
          renderAll();
        }
      });

      const btnDelete = card.querySelector('.delete');
      btnDelete.addEventListener('click', () => {
        currentSlide.messages.splice(idx, 1);
        renderAll();
        showToast('Pesan dihapus');
      });

      el.messageEditorList.appendChild(card);
    });
  }

  // Render Caption & Hashtags Generator
  function renderCaption() {
    let toneCap = null;

    if (state.generatedCaptions && state.generatedCaptions[state.tone]) {
      toneCap = state.generatedCaptions[state.tone];
    } else {
      const captions = getCaptions();
      const scCaps = captions[state.scenarioKey] || {};
      const langCaps = scCaps[state.lang] || scCaps['id'] || {};
      toneCap = langCaps[state.tone] || langCaps['drama'] || {};
    }

    if (!toneCap) return;

    // Platform-specific formatting touches
    let hook = toneCap.hook || '';
    let story = toneCap.story || '';
    let cta = toneCap.cta || '';
    let tags = [...(toneCap.tags || [])];
    // Dynamically inject active category & subcategory hashtags if not present
    const catClean = state.mainCategory.replace(/[^a-zA-Z0-9]/g, '');
    const subClean = state.subCategory.replace(/[^a-zA-Z0-9]/g, '');
    if (catClean && !tags.some(t => t.toLowerCase() === `#${catClean.toLowerCase()}`)) {
      tags.splice(1, 0, `#${catClean}`);
    }
    if (subClean && !tags.some(t => t.toLowerCase() === `#${subClean.toLowerCase()}`)) {
      tags.splice(2, 0, `#${subClean}`);
    }

    // Custom embellishments by platform
    if (state.platform === 'instagram') {
      cta = `👉 Geser slide ke samping untuk lihat proses lengkapnya!\n${cta}\n\n💾 Simpan postingan ini jika nanti butuh tukang mendadak!`;
    } else if (state.platform === 'tiktok') {
      hook = `🔥 ${hook} (Tonton sampai habis!)`;
    } else if (state.platform === 'wa_status') {
      story = story.split('\n\n')[0]; // shorter for WA status
    }

    el.captionHookText.textContent = hook;
    el.captionStoryText.textContent = story;
    el.captionCtaText.textContent = cta;

    // Render Hashtag Pills
    el.captionHashtagCloud.innerHTML = '';
    tags.forEach((tag) => {
      const pill = document.createElement('span');
      pill.className = 'hashtag-tag-pill';
      pill.textContent = tag;
      pill.title = 'Klik untuk salin tagar ini';
      pill.addEventListener('click', () => {
        copyToClipboard(tag);
        showToast(`Tagar disalin: ${tag}`);
      });
      el.captionHashtagCloud.appendChild(pill);
    });

    // Also populate full editable text
    const fullText = buildFullCaptionText(hook, story, cta, tags);
    el.editableCaptionTextarea.value = fullText;
  }

  function buildFullCaptionText(hook, story, cta, tags) {
    const tagsString = (tags || []).join(' ');
    return `${hook}\n\n${story}\n\n${cta}\n\n${tagsString}`;
  }

  function getCurrentSlide() {
    return state.slidesData.find((s) => s.id === state.activeSlide) || state.slidesData[0];
  }

  // --- EVENT BINDINGS ---
  function bindEvents() {
    // 1. Language Buttons
    el.langButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        el.langButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        state.lang = btn.dataset.lang;
        runScenarioGeneration(false);
        showToast(`Bahasa diganti: ${btn.textContent.trim()}`);
      });
    });

    // 2. AI Scenario Generator Buttons
    if (el.btnGenerateScenario) {
      el.btnGenerateScenario.addEventListener('click', () => {
        runScenarioGeneration(false);
        showToast(`✨ Skenario baru berhasil di-generate!`);
      });
    }

    if (el.btnRandomizeAnother) {
      el.btnRandomizeAnother.addEventListener('click', () => {
        runScenarioGeneration(true);
        showToast(`🎲 Skenario acak berhasil dibuat!`);
      });
    }

    if (el.btnRegenerateActive) {
      el.btnRegenerateActive.addEventListener('click', () => {
        runScenarioGeneration(false);
        showToast(`🔄 Skenario di-generate ulang!`);
      });
    }

    // Story Card Live Inputs
    if (el.scenarioTitleInput) {
      el.scenarioTitleInput.addEventListener('input', (e) => {
        if (state.currentGenerated) state.currentGenerated.title = e.target.value;
      });
    }

    if (el.scenarioSynopsisInput) {
      el.scenarioSynopsisInput.addEventListener('input', (e) => {
        if (state.currentGenerated) state.currentGenerated.synopsis = e.target.value;
      });
    }

    // 3. Reset Skenario Button
    el.btnResetScenario.addEventListener('click', () => {
      if (confirm('Kembalikan naskah cerita ke awal kategori?')) {
        state.customAvatarUrl = null;
        runScenarioGeneration(false);
        showToast('Skenario berhasil di-reset.');
      }
    });

    // 4. Story Ring Toggle
    el.toggleStoryRing.addEventListener('change', (e) => {
      state.hasStoryRing = e.target.checked;
      renderPhoneMockup();
    });

    // 5. Custom Avatar Upload
    el.btnUploadCustomAvatar.addEventListener('click', () => {
      el.customAvatarInput.click();
    });

    el.customAvatarInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (evt) {
          state.customAvatarUrl = evt.target.result;
          renderAll();
          showToast('Foto profil kustom berhasil diterapkan!');
        };
        reader.readAsDataURL(file);
      }
    });

    // 6. Reset Avatar
    el.btnResetAvatar.addEventListener('click', () => {
      state.customAvatarUrl = null;
      const scenarios = getScenarios();
      const sc = scenarios[state.scenarioKey] || {};
      state.avatarId = sc.defaultAvatar || 'kang_asep';
      renderAll();
      showToast('Foto profil dikembalikan ke default.');
    });

    // 7. Contact Name Input
    el.contactNameInput.addEventListener('input', (e) => {
      state.contactName = e.target.value;
      el.waContactName.textContent = state.contactName;
    });

    // 8. Contact Status Select
    el.contactStatusSelect.addEventListener('change', (e) => {
      state.contactStatus = e.target.value;
      if (state.contactStatus === 'custom') {
        el.customStatusWrapper.style.display = 'block';
      } else {
        el.customStatusWrapper.style.display = 'none';
      }
      renderPhoneMockup();
    });

    el.customStatusInput.addEventListener('input', (e) => {
      state.customStatusText = e.target.value;
      renderPhoneMockup();
    });

    // 9. Slide Nav Tabs
    el.slideNavTabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.slide-tab-btn');
      if (btn) {
        state.activeSlide = Number(btn.dataset.slide);
        renderAll();
      }
    });

    // 10. Prev / Next Slide
    el.btnPrevSlide.addEventListener('click', () => {
      if (state.activeSlide > 1) {
        state.activeSlide--;
        renderAll();
      }
    });

    el.btnNextSlide.addEventListener('click', () => {
      if (state.activeSlide < state.slidesData.length) {
        state.activeSlide++;
        renderAll();
      }
    });

    // 11. Add Message Button
    el.btnAddMessage.addEventListener('click', () => {
      const currentSlide = getCurrentSlide();
      if (!currentSlide) return;

      const newId = Date.now();
      const lastMsg = currentSlide.messages[currentSlide.messages.length - 1];
      const nextSender = lastMsg && lastMsg.sender === 'me' ? 'other' : 'me';

      currentSlide.messages.push({
        id: newId,
        sender: nextSender,
        text: 'Halo, ada yang bisa dibantu lagi?',
        time: state.phoneTime || '08:18',
        status: nextSender === 'me' ? 'read' : undefined
      });

      renderAll();
      showToast('Balon pesan baru ditambahkan!');

      // Scroll editor to bottom
      el.messageEditorList.scrollTop = el.messageEditorList.scrollHeight;
    });

    // 12. Phone Status Bar Inputs
    el.phoneTimeInput.addEventListener('input', (e) => {
      state.phoneTime = e.target.value;
      el.statusBarClock.textContent = state.phoneTime;
    });

    el.batteryLevelInput.addEventListener('input', (e) => {
      state.batteryLevel = e.target.value;
      renderPhoneMockup();
    });

    el.toggleEscrowNotice.addEventListener('change', (e) => {
      state.showEscrowNotice = e.target.checked;
      renderPhoneMockup();
    });

    if (el.toggleCategoryBadge) {
      el.toggleCategoryBadge.addEventListener('change', (e) => {
        state.showCategoryBadge = e.target.checked;
        renderPhoneMockup();
      });
    }

    el.toggleWatermark.addEventListener('change', (e) => {
      state.showWatermark = e.target.checked;
      renderPhoneMockup();
    });

    // 13. Platform Pills
    el.platformPills.forEach((pill) => {
      pill.addEventListener('click', () => {
        el.platformPills.forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');
        state.platform = pill.dataset.platform;
        renderCaption();
        showToast(`Format diubah untuk: ${pill.querySelector('span').textContent}`);
      });
    });

    // 14. Tone Cards
    el.toneCards.forEach((card) => {
      card.addEventListener('click', () => {
        el.toneCards.forEach((c) => c.classList.remove('active'));
        card.classList.add('active');
        state.tone = card.dataset.tone;
        renderCaption();
        showToast(`Sudut cerita (angle): ${card.querySelector('.tone-title').textContent}`);
      });
    });

    // 15. Copy Buttons
    el.btnCopyMaster.addEventListener('click', () => {
      const text = el.editableCaptionTextarea.value;
      copyToClipboard(text);
      showToast('Seluruh Deskripsi & Tagar berhasil disalin ke clipboard!');
    });

    el.btnCopyHook.addEventListener('click', () => {
      copyToClipboard(el.captionHookText.textContent);
      showToast('Hook viral disalin!');
    });

    el.btnCopyStory.addEventListener('click', () => {
      copyToClipboard(el.captionStoryText.textContent);
      showToast('Cerita disalin!');
    });

    el.btnCopyCta.addEventListener('click', () => {
      copyToClipboard(el.captionCtaText.textContent);
      showToast('CTA disalin!');
    });

    el.btnCopyTags.addEventListener('click', () => {
      const captions = getCaptions();
      const scCaps = captions[state.scenarioKey] || {};
      const langCaps = scCaps[state.lang] || scCaps['id'] || {};
      const toneCap = langCaps[state.tone] || langCaps['drama'] || {};
      const tagsStr = (toneCap.tags || []).join(' ');
      copyToClipboard(tagsStr);
      showToast('Tagar berhasil disalin!');
    });

    el.btnCopyCleanTags.addEventListener('click', () => {
      const captions = getCaptions();
      const scCaps = captions[state.scenarioKey] || {};
      const langCaps = scCaps[state.lang] || scCaps['id'] || {};
      const toneCap = langCaps[state.tone] || langCaps['drama'] || {};
      const tagsStr = (toneCap.tags || []).join(' ');
      copyToClipboard(tagsStr);
      showToast('Tagar berhasil disalin!');
    });

    // 16. Edit Caption Mode Toggle
    el.btnEditCaptionMode.addEventListener('click', () => {
      const isHidden = el.editableCaptionWrapper.style.display === 'none';
      el.editableCaptionWrapper.style.display = isHidden ? 'block' : 'none';
      if (isHidden) {
        el.editableCaptionTextarea.focus();
      }
    });

    el.btnSaveEditedCaption.addEventListener('click', () => {
      showToast('Teks editan disimpan dan siap disalin!');
    });

    // 17. Download Single Slide PNG
    el.btnDownloadSinglePng.addEventListener('click', () => {
      exportCurrentSlidePng();
    });

    // 18. Download All Slides
    el.btnDownloadAllSlides.addEventListener('click', () => {
      exportAllSlidesSequentially();
    });
  }

  // --- EXPORT FUNCTIONS (html2canvas) ---

  function exportCurrentSlidePng(slideNum = state.activeSlide) {
    if (typeof html2canvas === 'undefined') {
      alert('html2canvas belum siap. Pastikan koneksi internet aktif.');
      return;
    }

    const target = el.phoneMockupFrame;
    const btnText = el.btnDownloadSinglePng.innerHTML;
    el.btnDownloadSinglePng.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Merender Slide ${slideNum}...`;
    el.btnDownloadSinglePng.disabled = true;

    html2canvas(target, {
      scale: 2, // 2x high resolution retina quality
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      logging: false
    })
      .then((canvas) => {
        const link = document.createElement('a');
        const fileName = `bantuwarga-chat-${state.scenarioKey}-${state.lang}-slide-${slideNum}.png`;
        link.download = fileName;
        link.href = canvas.toDataURL('image/png');
        link.click();
        showToast(`Slide ${slideNum} tersimpan sebagai ${fileName}!`);
      })
      .catch((err) => {
        console.error('Export error:', err);
        alert('Gagal mendownload gambar. Coba muat ulang halaman.');
      })
      .finally(() => {
        el.btnDownloadSinglePng.innerHTML = btnText;
        el.btnDownloadSinglePng.disabled = false;
      });
  }

  async function exportAllSlidesSequentially() {
    if (typeof html2canvas === 'undefined') {
      alert('html2canvas belum siap.');
      return;
    }

    const total = state.slidesData.length;
    const originalSlide = state.activeSlide;

    const btn = el.btnDownloadAllSlides;
    const originalText = btn.innerHTML;
    btn.disabled = true;

    for (let i = 1; i <= total; i++) {
      btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Mengunduh Slide ${i} dari ${total}...`;
      state.activeSlide = i;
      renderAll();

      // Wait a moment for DOM and images to settle
      await new Promise((resolve) => setTimeout(resolve, 350));

      const target = el.phoneMockupFrame;
      try {
        const canvas = await html2canvas(target, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: null,
          logging: false
        });

        const link = document.createElement('a');
        const fileName = `bantuwarga-chat-${state.scenarioKey}-${state.lang}-slide-${i}.png`;
        link.download = fileName;
        link.href = canvas.toDataURL('image/png');
        link.click();
      } catch (err) {
        console.error(`Gagal render slide ${i}:`, err);
      }

      // Small pause between downloads
      await new Promise((resolve) => setTimeout(resolve, 200));
    }

    // Restore original slide
    state.activeSlide = originalSlide;
    renderAll();

    btn.innerHTML = originalText;
    btn.disabled = false;
    showToast(`Semua ${total} slide berhasil didownload!`);
  }

  // --- UTILITIES ---

  function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Fallback copy error:', err);
    }
    textArea.remove();
  }

  let toastTimer = null;
  function showToast(msg) {
    el.toastMessage.textContent = msg;
    el.toastNotification.classList.add('show');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      el.toastNotification.classList.remove('show');
    }, 2800);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
