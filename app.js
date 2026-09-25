/**
 * ==========================================================================
 * MIHIR BOT 4o | CHATGPT PORTFOLIO - APPLICATION CONTROLLER
 * ==========================================================================
 * 
 * Source of Truth: PORTFOLIO _ MIHIR ANAND FINAL.docx
 * Agency Header: BIG FAT MARKETING
 * Concept: "AI was going to replace writers. So, now I've become an AI."
 * 
 * Manages:
 * 1. Opening Screen (Page 0) with interactive prompt cards
 * 2. Conversational Introduction Pop-up Modal (Mihir Bot Origin)
 * 3. Projects -> Chats collapsible sidebar (BRANDING, ADVERTISING, ROONGTA GROUP)
 * 4. Distinct User (You) vs AI (Mihir Bot) messages with campaign thought highlights
 * 5. Multi-campaign sub-topic navigation bar (DavaIndia, Bouee, Uncle Goons, etc.)
 * 6. Responsive inline video cards, uncropped image lightbox, and PDF cards
 * 7. Natural Mihir Bot fallback response for free version prompt inputs
 * 8. Responsive mobile drawer & keyboard navigation
 */

document.addEventListener("DOMContentLoaded", () => {
  // Application State
  let activeChatId = PORTFOLIO_CONFIG.defaultChatId || "ug-mothers-day";
  let currentView = "landing"; // "landing" | "chat"
  const expandedClients = new Set(["client-uncle-goons"]); // Default open folder
  const expandedFolders = new Set(); // Default open agency folders (e.g. folder-branding)

  // DOM Elements - Views & Navigation
  const landingView = document.getElementById("landing-view");
  const chatView = document.getElementById("chat-view");
  const messagesContainer = document.getElementById("messages-container");
  const chatScrollArea = document.getElementById("chat-scroll-area");
  const navChatTitle = document.getElementById("nav-chat-title");
  const chatTopicBar = document.getElementById("chat-topic-bar");
  const topicPillsContainer = document.getElementById("topic-pills-container");

  // DOM Elements - Inputs
  const landingInput = document.getElementById("landing-text-input");
  const landingSendBtn = document.getElementById("landing-send-btn");
  const landingInputBox = document.getElementById("landing-input-box");
  const chatInput = document.getElementById("chat-text-input");
  const chatSendBtn = document.getElementById("chat-send-btn");
  const promptCardsContainer = document.getElementById("prompt-cards-container");

  // Navigation Controls
  const newChatBtn = document.getElementById("new-chat-btn");
  const btnToggleHome = document.getElementById("btn-toggle-home");
  const btnOpenIntroModal = document.getElementById("btn-open-intro-modal");
  const sidebarContent = document.getElementById("sidebar-content");

  // Profile Elements
  const sidebarName = document.getElementById("sidebar-name");
  const sidebarRole = document.getElementById("sidebar-role");
  const sidebarAvatar = document.getElementById("sidebar-avatar");
  const btnSidebarProfile = document.getElementById("btn-sidebar-profile");

  // Mobile Drawer Elements
  const sidebar = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebar-overlay");
  const sidebarOpenBtn = document.getElementById("sidebar-open-btn");
  const sidebarCloseBtn = document.getElementById("sidebar-close-btn");

  // Lightbox Modal Elements
  const lightboxModal = document.getElementById("image-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxBackdrop = document.getElementById("lightbox-backdrop");

  // Introduction Pop-up Modal Elements
  const introModalOverlay = document.getElementById("intro-modal-overlay");
  const introModalBackdrop = document.getElementById("intro-modal-backdrop");
  const introCloseBtn = document.getElementById("intro-close-btn");
  const introConversationContainer = document.getElementById("intro-conversation-container");

  /* ==========================================================================
     1. INITIALIZATION
     ========================================================================== */
  function init() {
    // Populate profile info
    if (PORTFOLIO_CONFIG.profile) {
      if (sidebarName) sidebarName.textContent = PORTFOLIO_CONFIG.profile.name;
      if (sidebarRole) sidebarRole.textContent = PORTFOLIO_CONFIG.profile.role;
      if (sidebarAvatar) sidebarAvatar.textContent = PORTFOLIO_CONFIG.profile.avatar || "M";
    }

    // Default expanded client for default chat
    ensureClientExpandedForChat(activeChatId);

    // Populate Sidebar Hierarchy
    renderSidebarChats();

    // Populate Introduction Pop-up
    initIntroModal();

    // Setup Model Selector Dropdown
    setupModelSelector();

    // Setup All Event Listeners
    setupEventListeners();

    // Opening Flow:
    // 1. If deep-linked directly to a chat (#chat=...), load that conversation.
    // 2. Otherwise, show a brief intro moment before settling into the portfolio.
    const hashMatch = window.location.hash.match(/chat=([a-zA-Z0-9\-_]+)/);
    if (hashMatch && hashMatch[1]) {
      openChatView(hashMatch[1], false);
    } else if (!window.location.hash.includes("no-intro")) {
      setTimeout(() => {
        openChatView(PORTFOLIO_CONFIG.defaultChatId || "ug-mothers-day", false);
      }, 1200);
    }
  }

  /* ==========================================================================
     2. SIDEBAR RENDERING (MULTI-AGENCY & CLIENT FOLDERS TREE)
     ========================================================================== */
  function renderSidebarChats() {
    sidebarContent.innerHTML = "";

    // 1. Top-Level Standalone Chat (Introduction Modal Origin)
    const introBtn = document.createElement("button");
    introBtn.className = "chat-item standalone-chat";
    introBtn.id = "sidebar-intro-item";
    introBtn.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
      <span class="chat-item-title">Introduction</span>
    `;
    introBtn.addEventListener("click", () => {
      openIntroModal();
      closeMobileSidebar();
    });
    sidebarContent.appendChild(introBtn);

    // 2. Multi-Agency Structure (BIG FAT MARKETING and GEMIUS)
    SIDEBAR_STRUCTURE.forEach((agency, agencyIdx) => {
      // Divider separating agencies
      if (agencyIdx > 0) {
        const divider = document.createElement("div");
        divider.className = "agency-divider";
        sidebarContent.appendChild(divider);
      }

      const agencySec = document.createElement("div");
      agencySec.className = "agency-section";
      agencySec.setAttribute("data-agency-id", agency.id);

      // Agency Section Header
      const agencyHeader = document.createElement("div");
      agencyHeader.className = "agency-header";
      agencyHeader.innerHTML = `<span class="agency-name">${escapeHtml(agency.title)}</span>`;
      agencySec.appendChild(agencyHeader);

      // Direct clients under agency (UNCLE GOONS, DAVAINDIA, PODI, BOUEE, VEDIC MOTHER, SUPER SANDWICH, TECHOWL, etc.)
      if (agency.clients && agency.clients.length > 0) {
        agency.clients.forEach(client => {
          agencySec.appendChild(createClientFolderElement(client));
        });
      }

      // Expandable Folders under agency (e.g. BRANDING under BIG FAT MARKETING)
      if (agency.folders && agency.folders.length > 0) {
        agency.folders.forEach(folder => {
          agencySec.appendChild(createFolderElement(folder));
        });
      }

      // Sub-sections under agency (if any)
      if (agency.sections && agency.sections.length > 0) {
        agency.sections.forEach(sec => {
          const subHeader = document.createElement("div");
          subHeader.className = "section-sub-header";
          subHeader.textContent = sec.title;
          agencySec.appendChild(subHeader);

          if (sec.clients && sec.clients.length > 0) {
            sec.clients.forEach(client => {
              agencySec.appendChild(createClientFolderElement(client));
            });
          }
        });
      }

      sidebarContent.appendChild(agencySec);
    });
  }

  function createClientFolderElement(client) {
    const isExpanded = expandedClients.has(client.id);
    const clientGroup = document.createElement("div");
    clientGroup.className = `client-group ${isExpanded ? "expanded" : "collapsed"}`;
    clientGroup.setAttribute("data-client-id", client.id);

    // Client Folder Header Button
    const clientHeader = document.createElement("button");
    clientHeader.className = "client-header";
    clientHeader.type = "button";
    clientHeader.innerHTML = `
      <div class="client-header-left">
        <svg class="client-folder-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
        </svg>
        <span class="client-name">${escapeHtml(client.name)}</span>
      </div>
      <svg class="client-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    `;

    clientHeader.addEventListener("click", () => {
      toggleClient(client.id);
    });

    clientGroup.appendChild(clientHeader);

    // Child Chats Container
    const clientChats = document.createElement("div");
    clientChats.className = "client-chats";

    (client.chats || []).forEach(childChat => {
      const childBtn = document.createElement("button");
      childBtn.className = `chat-item client-chat-item ${currentView === 'chat' && childChat.id === activeChatId ? "active" : ""}`;
      childBtn.setAttribute("data-chat-id", childChat.id);
      childBtn.innerHTML = `
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <span class="chat-item-title">${escapeHtml(childChat.title)}</span>
      `;

      childBtn.addEventListener("click", () => {
        openChatView(childChat.id);
        closeMobileSidebar();
      });

      clientChats.appendChild(childBtn);
    });

    clientGroup.appendChild(clientChats);
    return clientGroup;
  }

  function createFolderElement(folder) {
    const isExpanded = expandedFolders.has(folder.id);
    const folderGroup = document.createElement("div");
    folderGroup.className = `folder-group ${isExpanded ? "expanded" : "collapsed"}`;
    folderGroup.setAttribute("data-folder-id", folder.id);

    // Folder Header Button (e.g. BRANDING)
    const folderHeader = document.createElement("button");
    folderHeader.className = "folder-header";
    folderHeader.type = "button";
    folderHeader.innerHTML = `
      <div class="folder-header-left">
        <svg class="client-folder-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
        </svg>
        <span class="client-name">${escapeHtml(folder.name)}</span>
      </div>
      <svg class="client-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    `;

    folderHeader.addEventListener("click", () => {
      toggleFolder(folder.id);
    });

    folderGroup.appendChild(folderHeader);

    // Sub-items Container
    const folderContent = document.createElement("div");
    folderContent.className = "folder-content branding-subclients-container";

    (folder.clients || []).forEach(subClient => {
      if (subClient.chats && subClient.chats.length > 1) {
        // Multi-chat brand (e.g. YAPPERS)
        folderContent.appendChild(createClientFolderElement(subClient));
      } else if (subClient.chats && subClient.chats.length === 1) {
        // Single-chat brand (e.g. LIVESTREAM, RAMEON, SIDEBURN, DESI DELI, OMOI)
        const chat = subClient.chats[0];
        const brandBtn = document.createElement("button");
        brandBtn.className = `chat-item client-chat-item ${currentView === 'chat' && chat.id === activeChatId ? "active" : ""}`;
        brandBtn.setAttribute("data-chat-id", chat.id);
        brandBtn.innerHTML = `
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span class="chat-item-title">${escapeHtml(subClient.name)}</span>
        `;
        brandBtn.addEventListener("click", () => {
          openChatView(chat.id);
          closeMobileSidebar();
        });
        folderContent.appendChild(brandBtn);
      }
    });

    folderGroup.appendChild(folderContent);
    return folderGroup;
  }

  function toggleClient(clientId) {
    const isExpanded = expandedClients.has(clientId);
    expandedClients.clear();
    expandedFolders.clear();

    if (!isExpanded) {
      expandedClients.add(clientId);
    }
    updateClientExpansionDOM();
  }

  function toggleFolder(folderId) {
    const isExpanded = expandedFolders.has(folderId);
    expandedFolders.clear();
    expandedClients.clear();

    if (!isExpanded) {
      expandedFolders.add(folderId);
    }
    updateClientExpansionDOM();
  }

  function updateClientExpansionDOM() {
    const clientGroups = sidebarContent.querySelectorAll(".client-group");
    clientGroups.forEach(group => {
      const cId = group.getAttribute("data-client-id");
      const isExp = expandedClients.has(cId);
      group.classList.toggle("expanded", isExp);
      group.classList.toggle("collapsed", !isExp);
    });
    updateFolderExpansionDOM();
  }

  function updateFolderExpansionDOM() {
    const folderGroups = sidebarContent.querySelectorAll(".folder-group");
    folderGroups.forEach(group => {
      const fId = group.getAttribute("data-folder-id");
      const isExp = expandedFolders.has(fId);
      group.classList.toggle("expanded", isExp);
      group.classList.toggle("collapsed", !isExp);
    });
  }

  function ensureClientExpandedForChat(chatId) {
    expandedClients.clear();
    expandedFolders.clear();

    SIDEBAR_STRUCTURE.forEach(agency => {
      if (agency.clients) {
        agency.clients.forEach(cl => {
          if (cl.chats && cl.chats.some(c => c.id === chatId)) {
            expandedClients.add(cl.id);
          }
        });
      }
      if (agency.folders) {
        agency.folders.forEach(folder => {
          if (folder.clients) {
            folder.clients.forEach(cl => {
              if (cl.chats && cl.chats.some(c => c.id === chatId)) {
                expandedFolders.add(folder.id);
                expandedClients.add(cl.id);
              }
            });
          }
        });
      }
      if (agency.sections) {
        agency.sections.forEach(sec => {
          if (sec.clients) {
            sec.clients.forEach(cl => {
              if (cl.chats && cl.chats.some(c => c.id === chatId)) {
                expandedClients.add(cl.id);
              }
            });
          }
        });
      }
    });
  }

  /* ==========================================================================
     3. VIEW TRANSITIONS (LANDING <-> CHAT)
     ========================================================================== */
  function openChatView(chatId = "ug-mothers-day", updateHash = true) {
    currentView = "chat";
    activeChatId = chatId;

    if (updateHash && window.location.hash !== "#chat=" + chatId) {
      history.replaceState(null, null, "#chat=" + chatId);
    }

    // Ensure parent client folder is expanded
    ensureClientExpandedForChat(chatId);
    updateClientExpansionDOM();

    // Update active highlight in sidebar
    updateSidebarActiveState();

    // Transition animation
    landingView.classList.add("fade-out");

    setTimeout(() => {
      landingView.classList.add("hidden");
      chatView.classList.remove("hidden");
      
      // Load conversation
      loadConversation(chatId);
    }, 180);
  }

  function openLandingView(updateHash = true) {
    currentView = "landing";
    if (updateHash && window.location.hash) {
      history.replaceState(null, null, window.location.pathname);
    }
    updateSidebarActiveState();

    chatView.classList.add("hidden");
    landingView.classList.remove("hidden");
    
    setTimeout(() => {
      landingView.classList.remove("fade-out");
    }, 20);

    navChatTitle.textContent = "Home";
    if (landingInput) landingInput.value = "";
    if (chatInput) chatInput.value = "";
    const homeThread = document.getElementById("home-chat-thread");
    if (homeThread) homeThread.innerHTML = "";
  }

  function updateSidebarActiveState() {
    const allChatItems = sidebarContent.querySelectorAll(".chat-item");
    allChatItems.forEach(btn => {
      const isCurrent = currentView === 'chat' && btn.getAttribute("data-chat-id") === activeChatId;
      btn.classList.toggle("active", isCurrent);
      if (isCurrent) {
        setTimeout(() => {
          btn.scrollIntoView({ block: "nearest", behavior: "smooth" });
        }, 50);
      }
    });
  }

  /* ==========================================================================
     4. LOAD & RENDER CONVERSATION
     ========================================================================== */
  function buildMediaMessageRow(msg, index) {
    const msgType = (msg.type || msg.sender || "").toUpperCase();
    const row = document.createElement("div");
    row.id = `msg-${index}`;
    row.style.animationDelay = `${Math.min(index * 0.02, 0.4)}s`;

    if (msgType === "IMAGE") {
      const normalizedSrc = normalizePath(msg.src);
      row.className = "message-row image-message";
      row.innerHTML = `
        <div class="media-message-wrapper">
          <div class="chat-image-card" data-img-src="${normalizedSrc}" data-img-caption="${escapeHtml(msg.caption || '')}">
            <img 
              src="${normalizedSrc}" 
              alt="${escapeHtml(msg.alt || 'Portfolio visual')}" 
              class="chat-image-element"
              loading="lazy"
              onerror="handleImageFallback(this)"
            />
            <div class="image-zoom-overlay">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
              <span>Click to zoom</span>
            </div>
            ${msg.caption ? `<div class="image-caption-text">${escapeHtml(msg.caption)}</div>` : ''}
          </div>
        </div>
      `;
      return row;
    }

    if (msgType === "VIDEO") {
      const normalizedSrc = normalizePath(msg.src);
      const isImageAsset = /\.(jpe?g|png|gif|webp|avif|svg)$/i.test(normalizedSrc || "");

      if (isImageAsset) {
        row.className = "message-row image-message";
        row.innerHTML = `
          <div class="media-message-wrapper">
            <div class="chat-image-card" data-img-src="${normalizedSrc}" data-img-caption="${escapeHtml(msg.caption || '')}">
              <img 
                src="${normalizedSrc}" 
                alt="${escapeHtml(msg.alt || msg.caption || 'Portfolio visual')}" 
                class="chat-image-element"
                loading="lazy"
                onerror="handleImageFallback(this)"
              />
              <div class="image-zoom-overlay">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
                <span>Click to zoom</span>
              </div>
              ${msg.caption ? `<div class="image-caption-text">${escapeHtml(msg.caption)}</div>` : ''}
            </div>
          </div>
        `;
        return row;
      }

      row.className = "message-row video-message";
      row.innerHTML = `
        <div class="media-message-wrapper">
          <div class="chat-video-card">
            <video controls playsinline preload="metadata" class="chat-video-element" data-orientation="auto">
              <source src="${normalizedSrc}" type="video/mp4">
              Your browser does not support video playback.
            </video>
            ${msg.caption ? `<div class="image-caption-text">${escapeHtml(msg.caption)}</div>` : ''}
          </div>
        </div>
      `;

      const video = row.querySelector("video");
      if (video) {
        video.addEventListener("loadedmetadata", () => {
          const card = video.closest(".chat-video-card");
          if (!card) return;
          const isPortrait = video.videoHeight > video.videoWidth;
          card.classList.toggle("portrait-video", isPortrait);
          card.classList.toggle("landscape-video", !isPortrait);
          video.dataset.orientation = isPortrait ? "portrait" : "landscape";
        });
      }

      return row;
    }

    return row;
  }

  function loadConversation(chatId) {
    const chat = CHATS_DATA.find(c => c.id === chatId);
    if (!chat) return;

    activeChatId = chatId;
    navChatTitle.textContent = chat.title;
    updateSidebarActiveState();

    messagesContainer.innerHTML = "";
    const conversation = chat.conversation || chat.messages || [];

    const topics = [];
    conversation.forEach((msg, idx) => {
      if (msg.type === "TOPIC" && msg.title) {
        topics.push({ title: msg.title, targetId: `topic-marker-${idx}` });
      }
    });

    renderTopicBar(topics);

    let mediaBuffer = [];
    const flushMediaBuffer = () => {
      if (!mediaBuffer.length) return;

      const galleryRow = document.createElement("div");
      galleryRow.className = "message-row media-gallery-row";
      const gallery = document.createElement("div");
      gallery.className = "media-gallery";

      mediaBuffer.forEach(item => gallery.appendChild(item));
      galleryRow.appendChild(gallery);
      messagesContainer.appendChild(galleryRow);
      mediaBuffer = [];
    };

    const renderGroupedMessage = (group, index) => {
      const row = document.createElement("div");
      row.id = `msg-${index}`;
      row.style.animationDelay = `${Math.min(index * 0.02, 0.4)}s`;

      if (group.type === "USER") {
        row.className = "message-row user-message";
        const mergedText = group.items.map(item => String(item.text || "")).filter(Boolean).join("\n\n");
        row.innerHTML = `<div class="user-bubble">${formatParagraphs(mergedText)}</div>`;
      } else if (group.type === "ASSISTANT") {
        row.className = "message-row assistant-message";
        const mergedText = group.items.map(item => String(item.text || "")).filter(Boolean).join("\n\n");
        row.innerHTML = `
          <div class="assistant-content">
            <div class="message-text">${formatAssistantParagraphs(mergedText)}</div>
          </div>
        `;
      } else if (group.type === "TOPIC") {
        row.className = "message-row topic-divider";
        row.id = `topic-marker-${index}`;
        row.innerHTML = `
          <div class="topic-badge">— ${escapeHtml(group.item.title)} —</div>
        `;
      } else if (group.type === "FILE") {
        row.className = "message-row file-message";
        const msg = group.item;
        const normalizedSrc = normalizePath(msg.src || msg.url || "#");
        row.innerHTML = `
          <div class="media-message-wrapper">
            <a href="${normalizedSrc}" target="_blank" class="chat-file-card">
              <div class="file-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
              </div>
              <div class="file-details">
                <span class="file-name">${escapeHtml(msg.name || 'Project Deck')}</span>
                <span class="file-size">${escapeHtml(msg.size || 'PDF Document')}</span>
              </div>
              <span class="file-action-badge">View PDF</span>
            </a>
          </div>
        `;
      }

      messagesContainer.appendChild(row);
    };

    let activeGroup = null;
    const flushActiveGroup = () => {
      if (!activeGroup) return;
      renderGroupedMessage(activeGroup, activeGroup.index);
      activeGroup = null;
    };

    conversation.forEach((msg, index) => {
      const msgType = (msg.type || msg.sender || "").toUpperCase();
      const isMedia = msgType === "IMAGE" || msgType === "VIDEO";

      if (isMedia) {
        flushActiveGroup();
        const mediaRow = buildMediaMessageRow(msg, index);
        messagesContainer.appendChild(mediaRow);
        return;
      }

      if (msgType === "TOPIC") {
        flushActiveGroup();
        renderGroupedMessage({ type: "TOPIC", item: msg, index }, index);
        return;
      }

      if (msgType === "FILE") {
        flushActiveGroup();
        renderGroupedMessage({ type: "FILE", item: msg, index }, index);
        return;
      }

      const logicalType = (msgType === "YOU" || msgType === "USER") ? "USER" : (msgType === "CHATGPT" || msgType === "ASSISTANT" || msgType === "MIHIR BOT" || msgType === "BOT") ? "ASSISTANT" : null;

      if (!logicalType) {
        flushActiveGroup();
        const row = document.createElement("div");
        row.id = `msg-${index}`;
        row.style.animationDelay = `${Math.min(index * 0.02, 0.4)}s`;
        row.className = "message-row";
        row.innerHTML = `<div class="message-text">${escapeHtml(msg.text || "")}</div>`;
        messagesContainer.appendChild(row);
        return;
      }

      if (!activeGroup || activeGroup.type !== logicalType) {
        flushActiveGroup();
        activeGroup = { type: logicalType, items: [msg], index };
      } else {
        activeGroup.items.push(msg);
      }
    });

    flushActiveGroup();

    flushMediaBuffer();

    chatScrollArea.scrollTop = 0;
    attachMediaListeners();
  }

  /* ==========================================================================
     5. TOPIC FILTER BAR RENDERING
     ========================================================================== */
  function renderTopicBar(topics) {
    if (!chatTopicBar || !topicPillsContainer) return;

    if (!topics || topics.length === 0) {
      chatTopicBar.classList.add("hidden");
      topicPillsContainer.innerHTML = "";
      return;
    }

    chatTopicBar.classList.remove("hidden");
    topicPillsContainer.innerHTML = "";

    // "All" Pill
    const allPill = document.createElement("button");
    allPill.className = "topic-pill active";
    allPill.textContent = "All";
    allPill.addEventListener("click", () => {
      topicPillsContainer.querySelectorAll(".topic-pill").forEach(p => p.classList.remove("active"));
      allPill.classList.add("active");
      chatScrollArea.scrollTo({ top: 0, behavior: "smooth" });
    });
    topicPillsContainer.appendChild(allPill);

    topics.forEach(t => {
      const pill = document.createElement("button");
      pill.className = "topic-pill";
      pill.textContent = t.title;
      pill.addEventListener("click", () => {
        topicPillsContainer.querySelectorAll(".topic-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        const el = document.getElementById(t.targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
      topicPillsContainer.appendChild(pill);
    });
  }

  /* ==========================================================================
     6. INTRODUCTION MODAL POP-UP
     ========================================================================== */
  function initIntroModal() {
    if (!introConversationContainer || !PORTFOLIO_CONFIG.introductionModal) return;

    const data = PORTFOLIO_CONFIG.introductionModal;
    const bubble = document.createElement("div");
    bubble.className = "intro-chat-bubble";

    let html = "";
    (data.paragraphs || []).forEach(p => {
      html += `<p>${escapeHtml(p).replace(/\n/g, '<br>')}</p>`;
    });

    bubble.innerHTML = html;
    introConversationContainer.innerHTML = "";
    introConversationContainer.appendChild(bubble);
  }

  function openIntroModal() {
    if (introModalOverlay) {
      introModalOverlay.classList.add("active");
      introModalOverlay.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
  }

  function closeIntroModal() {
    if (introModalOverlay) {
      introModalOverlay.classList.remove("active");
      introModalOverlay.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  }

  /* ==========================================================================
     7. IMAGE LIGHTBOX MODAL
     ========================================================================== */
  function attachMediaListeners() {
    const imageCards = messagesContainer.querySelectorAll(".chat-image-card");
    imageCards.forEach(card => {
      card.addEventListener("click", () => {
        const src = card.getAttribute("data-img-src");
        const caption = card.getAttribute("data-img-caption") || "";
        openLightbox(src, caption);
      });
    });
  }

  function openLightbox(src, caption) {
    lightboxImg.src = src;
    lightboxCaption.textContent = caption;
    lightboxModal.classList.add("active");
    lightboxModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightboxModal.classList.remove("active");
    lightboxModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    setTimeout(() => {
      lightboxImg.src = "";
    }, 200);
  }

  /* ==========================================================================
     8. MODEL SELECTOR (VERSIONS / ERAS DROPDOWN)
     ========================================================================== */
  function setupModelSelector() {
    const modelBadge = document.getElementById("model-badge");
    const modelDropdown = document.getElementById("model-dropdown-menu");
    const currentModelName = document.getElementById("current-model-name");
    const currentModelSubtitle = document.getElementById("current-model-subtitle");
    const versionNote = document.getElementById("version-note");

    if (!modelBadge || !modelDropdown) return;

    function toggleDropdown() {
      const isHidden = modelDropdown.classList.contains("hidden");
      if (isHidden) {
        modelDropdown.classList.remove("hidden");
        modelBadge.setAttribute("aria-expanded", "true");
      } else {
        closeDropdown();
      }
    }

    function closeDropdown() {
      modelDropdown.classList.add("hidden");
      modelBadge.setAttribute("aria-expanded", "false");
    }

    modelBadge.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleDropdown();
    });

    const items = modelDropdown.querySelectorAll(".model-dropdown-item");
    items.forEach(item => {
      item.setAttribute("aria-disabled", "true");
      item.style.pointerEvents = "none";
      item.style.cursor = "default";
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest("#model-selector-wrapper")) {
        closeDropdown();
      }
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeDropdown();
      }
    });
  }

  /* ==========================================================================
     9. EVENT LISTENERS
     ========================================================================== */
  function setupEventListeners() {
    // 1. Landing Input (Responses Stay On The Same Page)
    if (landingInputBox) {
      landingInputBox.addEventListener("click", () => landingInput.focus());
    }

    if (landingSendBtn) {
      landingSendBtn.addEventListener("click", () => {
        handleLandingPromptSubmit(landingInput ? landingInput.value.trim() : "");
      });
    }

    if (landingInput) {
      landingInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          handleLandingPromptSubmit(landingInput.value.trim());
        }
      });
    }

    // 2. Chat Input
    if (chatSendBtn) {
      chatSendBtn.addEventListener("click", () => {
        handleChatPromptSubmit(chatInput ? chatInput.value.trim() : "");
      });
    }

    if (chatInput) {
      chatInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          handleChatPromptSubmit(chatInput.value.trim());
        }
      });
    }

    // 3. Prompt Cards on Opening Screen (STAYS ON THE SAME PAGE)
    if (promptCardsContainer) {
      const cards = promptCardsContainer.querySelectorAll(".prompt-card");
      cards.forEach(card => {
        card.addEventListener("click", () => {
          const promptText = card.getAttribute("data-prompt");
          if (promptText) {
            handleLandingPromptSubmit(promptText);
          }
        });
      });
    }

    // 4. Navigation Controls
    newChatBtn.addEventListener("click", () => {
      openLandingView();
      closeMobileSidebar();
    });

    btnToggleHome.addEventListener("click", () => {
      openLandingView();
    });

    if (btnOpenIntroModal) {
      btnOpenIntroModal.addEventListener("click", openIntroModal);
    }

    if (btnSidebarProfile) {
      btnSidebarProfile.addEventListener("click", openIntroModal);
    }

    // 5. Mobile Sidebar Drawer
    sidebarOpenBtn.addEventListener("click", openMobileSidebar);
    sidebarCloseBtn.addEventListener("click", closeMobileSidebar);
    sidebarOverlay.addEventListener("click", closeMobileSidebar);

    // 6. Lightbox Controls
    lightboxClose.addEventListener("click", closeLightbox);
    lightboxBackdrop.addEventListener("click", closeLightbox);

    // 7. Introduction Modal Controls
    if (introCloseBtn) introCloseBtn.addEventListener("click", closeIntroModal);
    if (introModalBackdrop) introModalBackdrop.addEventListener("click", closeIntroModal);

    // 8. Global Keyboard Listener (Escape)
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (lightboxModal.classList.contains("active")) {
          closeLightbox();
        } else if (introModalOverlay && introModalOverlay.classList.contains("active")) {
          closeIntroModal();
        }
      }
    });
  }

  function normalizePromptText(promptText) {
    return String(promptText || "")
      .replace(/\u2019|\u2018/g, "'")
      .replace(/\s+/g, " ")
      .trim()
      .toUpperCase();
  }

  function buildPromptReplyMarkup(promptText) {
    const normalized = normalizePromptText(promptText);
    const compact = normalized.replace(/[^A-Z0-9\s]/g, "").replace(/\s+/g, " ").trim();

    if (normalized === "HOME" || normalized === "TAKE ME HOME") {
      return `
        <div class="assistant-content">
          <div class="message-text">
            <p class="chat-p response-emphasis-first">Home is where the Wi‑Fi is weak, the jokes are stronger, and the portfolio still insists on being memorable.</p>
            <p class="chat-p">This is the part where the bot tries to act casual.</p>
            <p class="chat-p response-emphasis-final">And somehow, it still ends up being the weirdest part of the whole website.</p>
            <div class="think-outside-bot">THINK OUTSIDE THE BOT</div>
          </div>
        </div>
      `;
    }

    if (compact === "CLICK ON THE SIDEBAR TO VIEW MY WORK") {
      return `
        <div class="assistant-content">
          <div class="message-text">
            <p class="chat-p response-emphasis-first">I told you to click on the sidebar 😡😡😡</p>
          </div>
        </div>
      `;
    }

    if (compact === "I COULDNT AFFORD ACTUAL AI INTEGRATION SO DONT EXPECT ANY ANSWERS FROM THE CHATBOT") {
      return `
        <div class="assistant-content">
          <div class="message-text">
            <p class="chat-p response-emphasis-first">This is not an actual ai, this is just the most creative 😉 way to show off my portfolio</p>
          </div>
        </div>
      `;
    }

    if (compact === "IF YOU STILL WISH TO ASK ANY QUESTIONS GIVE IT A TRY") {
      return `
        <div class="assistant-content">
          <div class="message-text">
            <p class="chat-p response-emphasis-first">think outside the bot</p>
            <p class="chat-p call-human-message">Call the original human.</p>
          </div>
        </div>
      `;
    }

    return `
      <div class="assistant-content">
        <div class="message-text">
          <p class="chat-p response-emphasis-first">think outside the bot</p>
          <p class="chat-p call-human-message">Call the original human.</p>
        </div>
      </div>
    `;
  }

  // Handle prompt submit on Landing Page (STAYS ON THE SAME PAGE)
  function handleLandingPromptSubmit(promptText) {
    if (!promptText) return;
    if (landingInput) landingInput.value = "";

    const homeThread = document.getElementById("home-chat-thread");
    if (!homeThread) return;

    const normalizedText = String(promptText).trim();

    // 1. Append user prompt bubble
    const userRow = document.createElement("div");
    userRow.className = "home-msg-row user-message";
    userRow.innerHTML = `<div class="user-bubble">${formatParagraphs(normalizedText)}</div>`;
    homeThread.appendChild(userRow);

    // Scroll smoothly within landing view
    setTimeout(() => {
      userRow.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 40);

    // 2. Append Mihir Bot response
    setTimeout(() => {
      const assistantRow = document.createElement("div");
      assistantRow.className = "home-msg-row assistant-message";
      assistantRow.innerHTML = buildPromptReplyMarkup(normalizedText);
      homeThread.appendChild(assistantRow);
      setTimeout(() => {
        assistantRow.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 50);
    }, 380);
  }

  // Handle prompt submit inside Chat View
  function handleChatPromptSubmit(promptText) {
    if (!promptText) return;
    if (chatInput) chatInput.value = "";
    appendLiveConversationBubble(promptText);
  }

  function appendLiveConversationBubble(userPrompt) {
    // 1. Append user prompt
    const userRow = document.createElement("div");
    userRow.className = "message-row user-message";
    userRow.innerHTML = `<div class="user-bubble">${formatParagraphs(userPrompt)}</div>`;
    messagesContainer.appendChild(userRow);

    // Scroll to bottom
    chatScrollArea.scrollTo({ top: chatScrollArea.scrollHeight, behavior: "smooth" });

    // 2. Append Mihir Bot response
    setTimeout(() => {
      const assistantRow = document.createElement("div");
      assistantRow.className = "message-row assistant-message";
      assistantRow.innerHTML = buildPromptReplyMarkup(userPrompt);

      messagesContainer.appendChild(assistantRow);
      chatScrollArea.scrollTo({ top: chatScrollArea.scrollHeight, behavior: "smooth" });
    }, 380);
  }

  function openMobileSidebar() {
    sidebar.classList.add("open");
    sidebarOverlay.classList.add("active");
  }

  function closeMobileSidebar() {
    sidebar.classList.remove("open");
    sidebarOverlay.classList.remove("active");
  }

  /* ==========================================================================
     9. TYPOGRAPHY & CAMPAIGN THOUGHT HIGHLIGHTS
     ========================================================================== */
  const CAMPAIGN_THOUGHTS = [
    "MAATI",
    "DADI KE NUSHKE",
    "STAY OWLERT",
    "RAY",
    "YAPPERS",
    "FUNCATION",
    "FUNCATION.",
    "#NO CHEATING",
    "#NOCHEATING",
    "EFFORTLESSLY COOL",
    "EFFORTLESSLY COOL.",
    "WOOPEE CARD",
    "SUPER SANDWICH.",
    "SUPER SANDWICH",
    "ONE FREE SUPER SANDWICH.",
    "ONE FREE SUPER SANDWICH",
    "BEWAFA HAI.",
    "TAPKEGI LAAR, JAB SANDWICH HO SUPAAAAR.",
    "ADD MASALA TO YOUR LIFE",
    "HUMDHYAANRAKHENGE",
    "READY HUMESHA.",
    "READY HUMESHA",
    "THIS CUP OF COFFEE WON'T CHANGE YOUR LIFE. BUT IT'LL MAKE TODAY EASIER."
  ];

  function formatParagraphs(text) {
    if (!text) return "";
    const cleanText = String(text).trim().replace(/\r\n/g, "\n");
    return `<p class="chat-p">${escapeHtml(cleanText).replace(/\n/g, '<br>')}</p>`;
  }

  function formatAssistantParagraphs(text) {
    if (!text) return "";

    const normalized = String(text).trim().replace(/\r\n/g, "\n");
    const segments = normalized.split(/\n+/).map(segment => segment.trim()).filter(Boolean);

    return segments
      .map(segment => {
        const trimmed = segment.trim();
        const upper = trimmed.toUpperCase();

        // Check for campaign thought headline
        if (CAMPAIGN_THOUGHTS.some(thought => upper === thought || upper === thought + "." || upper === thought + "!" || upper === '"' + thought + '"' || upper === '“' + thought + '”')) {
          return `<div class="campaign-thought-highlight">${escapeHtml(trimmed)}</div>`;
        }

        // Highlight character team names in Super Sandwich
        if (trimmed === "Breadman" || trimmed === "Butter Boy" || trimmed === "Captain Chutney" || trimmed === "Bhajji Bhau") {
          return `<div class="campaign-thought-highlight" style="font-size: 1em; margin: 4px 0;">⚡ ${escapeHtml(trimmed)}</div>`;
        }

        // Highlight creative quote lines
        if ((trimmed.startsWith('“') || trimmed.startsWith('"') || trimmed.startsWith("'")) && 
            (trimmed.endsWith('”') || trimmed.endsWith('"') || trimmed.endsWith("'")) && 
            trimmed.length < 180) {
          return `<div class="creative-quote">${escapeHtml(trimmed)}</div>`;
        }

        return `<p class="chat-p">${escapeHtml(trimmed).replace(/\n/g, '<br>')}</p>`;
      })
      .join('');
  }

  function normalizePath(path) {
    if (!path) return "";

    let cleanPath = String(path).trim().replace(/\\/g, "/");

    if (cleanPath.startsWith("http://") || cleanPath.startsWith("https://") || cleanPath.startsWith("data:") || cleanPath.startsWith("#")) {
      return cleanPath;
    }

    cleanPath = cleanPath.replace(/^\.\//, "");
    cleanPath = cleanPath.replace(/^\/+/, "");
    cleanPath = cleanPath.split("/").map(segment => encodeURI(segment)).join("/");

    return `/${cleanPath}`;
  }

  // Fallback handler if JPG not found
  window.handleImageFallback = function(img) {
    const src = img.getAttribute("src");
    if (src && (src.endsWith(".jpg") || src.endsWith(".jpeg"))) {
      const pngFallback = src.replace(/\.(jpeg|jpg)$/, ".png");
      img.onerror = null;
      img.src = pngFallback;
      const card = img.closest(".chat-image-card");
      if (card) card.setAttribute("data-img-src", pngFallback);
    }
  };

  function escapeHtml(text) {
    if (!text) return "";
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Run initialization
  init();
});
