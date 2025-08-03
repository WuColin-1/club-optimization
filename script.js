    document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
    });


    const clubs = [
        {
            id: 1,
            name: "互教互学数理社",
            tags: ["academic", "math", "physics", "problem-solving", "tutoring"],
            description: "数学和物理爱好者的学习社区，提供同伴辅导、解题技巧分享和学科竞赛准备。适合所有热爱数理科学的学生参与。"
        },
        {
            id: 2,
            name: "造物pi创客社",
            tags: ["tech", "innovation", "robotics", "engineering", "3d-printing"],
            description: "动手实践型创客空间，专注于电子制作、3D打印和机器人开发。提供工具和资源支持创新项目实现。"
        },
        {
            id: 3,
            name: "繁星天文社",
            tags: ["science", "stargazing", "astronomy", "observation", "photography"],
            description: "探索宇宙奥秘的社团，组织天文观测活动、天文摄影和宇宙学知识讲座。配备专业天文望远镜。"
        },
        {
            id: 4,
            name: "全球胜任力模联社",
            tags: ["academic", "diplomacy", "debate", "global-issues", "politics"],
            description: "模拟联合国会议平台，培养国际视野、外交谈判技巧和全球问题分析能力。定期参加国内外模联会议。"
        },
        {
            id: 5,
            name: "商业社",
            tags: ["business", "entrepreneurship", "finance", "leadership", "marketing"],
            description: "商业思维训练营，组织商业案例分析、创业计划大赛和企业家分享会。培养未来商界领袖。"
        },
        {
            id: 6,
            name: "奇点科创社",
            tags: ["technology", "coding", "innovation", "projects", "ai"],
            description: "前沿科技创新社团，专注于人工智能、物联网和软件开发。提供技术工作坊和项目孵化支持。"
        },
        {
            id: 7,
            name: "羽毛球社",
            tags: ["sports", "badminton", "fitness", "competitive", "teamwork"],
            description: "羽毛球爱好者聚集地，组织日常训练、校内联赛和校际友谊赛。欢迎各水平选手加入。"
        },
        {
            id: 8,
            name: "流云武术社",
            tags: ["martialarts", "fitness", "self-defense", "discipline", "tradition"],
            description: "传统武术研习社团，教授太极拳、长拳等武术套路，培养身体协调性和精神专注力。"
        },
        {
            id: 9,
            name: "弈界棋类交流会",
            tags: ["strategy", "games", "critical-thinking", "social", "boardgames"],
            description: "棋类爱好者社区，涵盖围棋、国际象棋、中国象棋等多种棋类。举办棋艺讲座和比赛交流。"
        },
        {
            id: 10,
            name: "电竞社",
            tags: ["gaming", "esports", "teamwork", "strategy", "competitive"],
            description: "电子竞技专业社团，组织游戏训练、战术分析和校际电竞比赛。培养团队协作和战略思维能力。"
        },
        {
            id: 11,
            name: "街舞社",
            tags: ["dance", "performance", "hiphop", "creativity", "expression"],
            description: "街舞文化推广者，涵盖breaking、popping等多种街舞风格。定期编排舞蹈作品并参加演出。"
        },
        {
            id: 12,
            name: "纹秤民艺社",
            tags: ["art", "craft", "traditional", "hands-on", "cultural"],
            description: "传统手工艺传承社团，专注于中国结、剪纸、篆刻等民间艺术形式的学习与创作。"
        },
        {
            id: 13,
            name: "infinite摄影社",
            tags: ["photography", "art", "technology", "visual", "creativity"],
            description: "摄影艺术探索平台，涵盖人像、风景、纪实等多种摄影类型。组织外拍活动和后期处理工作坊。"
        },
        {
            id: 14,
            name: "辩论社",
            tags: ["debate", "public-speaking", "critical-thinking", "persuasion", "logic"],
            description: "思辨与表达训练营，培养逻辑思维和辩论技巧。参加各级辩论赛事，提升即兴演讲能力。"
        },
        {
            id: 15,
            name: "公益社",
            tags: ["volunteering", "community", "social-impact", "service", "charity"],
            description: "社会服务实践平台，组织社区服务、慈善募捐和公益活动策划。培养社会责任感和领导力。"
        },
        {
            id: 16,
            name: "不止艺术社",
            tags: ["art", "multimedia", "creativity", "expression", "contemporary"],
            description: "跨领域艺术创作社团，融合绘画、装置、数字艺术等多种形式。鼓励实验性艺术表达。"
        },
        {
            id: 17,
            name: "微光心理社",
            tags: ["psychology", "wellness", "support", "self-awareness", "mental-health"],
            description: "心理健康促进社团，提供心理学知识普及、压力管理技巧和心理互助支持活动。"
        },
        {
            id: 18,
            name: "书画社",
            tags: ["calligraphy", "painting", "traditional", "meditation", "cultural"],
            description: "中国传统书画研习社团，教授书法、国画技法，培养艺术修养和专注能力。"
        },
        {
            id: 19,
            name: "足球社",
            tags: ["sports", "football", "teamwork", "fitness", "competitive"],
            description: "足球运动爱好者组织，开展日常训练、战术研究和校际足球联赛。培养团队协作精神。"
        },
        {
            id: 20,
            name: "篮球社",
            tags: ["sports", "basketball", "competitive", "team-building", "fitness"],
            description: "篮球运动专业社团，组织技能训练、战术演练和校内外比赛。欢迎各级水平球员加入。"
        },
        {
            id: 21,
            name: "中国舞社",
            tags: ["dance", "traditional", "performance", "culture", "expression"],
            description: "中国传统舞蹈传承社团，学习民族舞、古典舞等舞蹈形式，参与文化演出和艺术交流活动。"
        }
    ];


    // ====== From recommendation_engine.js ======
    function getTagsFromText(text) {
        if (!text) return [];
        return text.toLowerCase().split(/[\s,]+/).filter(Boolean);
    }

    function calculateTagMatchScore(clubTags, userTags) {
        return clubTags.reduce((score, tag) => {
            return userTags.includes(tag) ? score + 1 : score;
        }, 0);
    }

    function getInitialRecommendationQueue(questionnaire, allClubs) {
        // Adjusted for new questionnaire structure
        const userTags = [
            ...(questionnaire.gender ? [questionnaire.gender.toLowerCase()] : []),
            ...(questionnaire.mbti && questionnaire.mbti !== "dont-know" ? [questionnaire.mbti.toLowerCase()] : []),
            ...(questionnaire.vibe ? [questionnaire.vibe.toLowerCase()] : [])
        ];

        const scoredClubs = allClubs.map(club => ({
            ...club,
            score: calculateTagMatchScore(club.tags, userTags)
        }));

        scoredClubs.sort((a, b) => b.score - a.score);

        return scoredClubs;
    }

    function getNextCard(state) {
        const { recommendationQueue, shownClubIds, likedClubs, allClubs } = state;

        if (likedClubs.length > 0) {
            const lastLikedClub = likedClubs[likedClubs.length - 1];
            const likedTags = new Set(lastLikedClub.tags);
            
            const potentialNext = allClubs
                .filter(c => !shownClubIds.has(c.id))
                .map(club => ({
                    club,
                    score: calculateTagMatchScore(club.tags, Array.from(likedTags))
                }))
                .filter(item => item.score > 0)
                .sort((a, b) => b.score - a.score);

            if (potentialNext.length > 0) {
                return potentialNext[0].club;
            }
        }

        return recommendationQueue.find(club => !shownClubIds.has(club.id)) || null;
    }

    function calculateFinalResults(state) {
        const { likedClubs, questionnaire } = state;

        if (!likedClubs || likedClubs.length === 0) {
            return [];
        }

        const questionnaireTags = [
            ...(questionnaire.gender ? [questionnaire.gender.toLowerCase()] : []),
            ...(questionnaire.mbti && questionnaire.mbti !== "dont-know" ? [questionnaire.mbti.toLowerCase()] : []),
            ...(questionnaire.vibe ? [questionnaire.vibe.toLowerCase()] : [])
        ];

        const scoredClubs = likedClubs.map(club => {
            const tagScore = calculateTagMatchScore(club.tags, questionnaireTags);
            let dwellTimeScore = 0;
            if (club.dwellTime !== undefined && club.dwellTime > 0) {
                dwellTimeScore = 20 / Math.max(club.dwellTime, 0.2);
            }
            const tagWeight = 1.0;
            const dwellWeight = 1.2;
            const finalScore = (tagScore * tagWeight) + (dwellTimeScore * dwellWeight);
            
            return { ...club, score: finalScore };
        });

        scoredClubs.sort((a, b) => b.score - a.score);

        return scoredClubs.slice(0, 3);
    }

    // ====== From ui_controller.js ======
    function showResultsModal(results) {
        const resultsModal = document.getElementById('results-modal');
        const resultsList = document.getElementById('results-list');
        resultsList.innerHTML = '';

        if (!results || results.length === 0) {
            resultsList.innerHTML = '<p class=\"text-slate-500 text-center\">You haven\'t liked any clubs. Swipe right on some clubs to get recommendations!</p>';
        } else {
            const rankColors = ['text-amber-400', 'text-slate-500', 'text-amber-600']; // Gold, Silver, Bronze-ish
            const resultItems = results.map((club, index) => `
                <div class=\"bg-slate-100 p-4 rounded-lg shadow-inner\">\n                <div class=\"flex items-baseline mb-2\">\n                    <span class=\"text-2xl font-bold ${rankColors[index] || 'text-slate-400'} mr-3\">#${index + 1}</span>
                <h3 class=\"text-xl font-bold text-slate-800\">${club.name}</h3>
            </div>
            <p class=\"text-slate-600 pl-9\">${club.description}</p>
        </div>
    `).join('');
            resultsList.innerHTML = resultItems;
        }

        resultsModal.classList.add('visible');
    }

    function hideModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('visible');
        }
    }

    function updateActionButtons(likedCount, dislikedCount) {
        const likedCounter = document.getElementById('liked-count');
        const dislikedCounter = document.getElementById('disliked-count');

        if (likedCount > 0) {
            likedCounter.textContent = likedCount;
            likedCounter.classList.remove('hidden');
        } else {
            likedCounter.classList.add('hidden');
        }

        if (dislikedCount > 0) {
            dislikedCounter.textContent = dislikedCount;
            dislikedCounter.classList.remove('hidden');
        } else {
            dislikedCounter.classList.add('hidden');
        }
    }

    function showScreen(screenId) {
        document.querySelectorAll('main > section').forEach(screen => {
            const isTarget = screen.id === screenId;
            if (isTarget) {
                screen.classList.remove('opacity-0', 'pointer-events-none');
            } else {
                screen.classList.add('opacity-0', 'pointer-events-none');
            }
        });
    }

    function createCardElement(club) {
        const cardContainer = document.getElementById('card-container');
        const cardElement = document.createElement('div');
        cardElement.id = `club-card-${club.id}`;
        cardElement.className = 'club-card';
        cardElement.style.touchAction = 'none';

        cardElement.innerHTML = `
            <div class=\"card-face card-front flex-col p-6 text-center justify-center\">\n            <h2 class=\"text-3xl font-bold text-slate-800 mb-4\">${club.name}</h2>
                <div class=\"flex flex-wrap justify-center gap-2\">\n                ${club.tags.map(tag => `<span class=\"bg-rose-100 text-rose-600 text-xs font-semibold px-2.5 py-1 rounded-full\">${tag}</span>`).join('')}
                </div>
                <p class=\"text-slate-400 mt-8 text-sm\">Click to flip for details</p>
            </div>
            <div class=\"card-face card-back p-6\">\n            <div class=\"card-back-content prose prose-sm max-w-none\">\n                <h3 class=\"font-bold text-slate-800\">${club.name}</h3>
                <p>${club.description}</p>
            </div>
            </div>
        `;
        cardContainer.appendChild(cardElement);
        return cardElement;
    }

    // ====== From modals_handler.js ======
    function getModal(modalId) {
        const modal = document.getElementById(modalId);
        return { modal };
    }

    function renderList(modalContent, items, isLiked, interactionCallback) {
        modalContent.innerHTML = '';
        
        if (items.length === 0) {
            modalContent.innerHTML = `<p class="text-slate-500 p-4 text-center">This list is empty.</p>`;
            return;
        }
        
        items.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'flex items-center justify-between p-3 bg-slate-50 rounded-lg animate-fade-in';
            const moveIcon = isLiked ? 'arrow-down-circle' : 'arrow-up-circle';
            const moveTooltip = isLiked ? 'Move to Disliked' : 'Move to Liked';
            itemEl.innerHTML = `
                <span class="font-semibold text-slate-700">${item.name}</span>
                <button class="text-slate-400 hover:text-rose-500 transition-colors" title="${moveTooltip}" data-club-id="${item.id}">
                    <i data-lucide="${moveIcon}" class="w-5 h-5"></i>
                </button>
            `;
            itemEl.querySelector('button').addEventListener('click', () => interactionCallback(item.id, isLiked));
            modalContent.appendChild(itemEl);
        });
        
        lucide.createIcons();
    }

    function createModalHandler(state, ui) {
        const handler = {
            show: (type) => {
                const { modal } = getModal('list-modal');
                const modalTitle = document.getElementById('list-modal-title');
                const modalContent = document.getElementById('list-modal-content');
                
                const isLiked = type === 'liked';
                const title = isLiked ? 'Liked Clubs' : 'Disliked Clubs';
                const items = isLiked ? state.likedClubs : state.dislikedClubs;

                modalTitle.textContent = title;
                renderList(modalContent, items, isLiked, handler.handleInteraction);
                
                modal.classList.add('visible');
            },

            hide: () => {
                const { modal } = getModal('list-modal');
                modal.classList.remove('visible');
            },

            handleInteraction: (clubId, currentListIsLiked) => {
                let sourceList, targetList;
                if (currentListIsLiked) {
                    sourceList = state.likedClubs;
                    targetList = state.dislikedClubs;
                } else {
                    sourceList = state.dislikedClubs;
                    targetList = state.likedClubs;
                }

                const itemIndex = sourceList.findIndex(club => club.id === clubId);
                if (itemIndex > -1) {
                    const [movedItem] = sourceList.splice(itemIndex, 1);
                    
                    if (!currentListIsLiked) {
                        delete movedItem.dwellTime;
                    }
                    
                    targetList.push(movedItem);

                    handler.show(currentListIsLiked ? 'liked' : 'disliked');
                    ui.updateActionButtons(state.likedClubs.length, state.dislikedClubs.length);
                }
            }
        };

        return handler;
    }

    // ====== From card_handler.js ======
    function createCardController(cardElement, onSwipe) {
        const clubId = parseInt(cardElement.id.split('-')[2]);
        let isFlipped = false;
        let startX, startY, offsetX = 0, offsetY = 0;
        let startTime;
        let isDragging = false;
        const dragThreshold = 10; // Minimum distance to consider it a drag

        // Flip card on click
        cardElement.addEventListener('click', (e) => {
            // Only flip if not dragging
            if (!isDragging) {
                isFlipped = !isFlipped;
                cardElement.classList.toggle('is-flipped', isFlipped);
            }
        });

        // Touch/Mouse events for dragging
        cardElement.addEventListener('touchstart', handleDragStart, { passive: false });
        cardElement.addEventListener('mousedown', handleDragStart);

        function handleDragStart(e) {
            e.preventDefault();
            startTime = Date.now();
            isDragging = false;
            
            if (e.type === 'touchstart') {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
                document.addEventListener('touchmove', handleDragMove, { passive: false });
                document.addEventListener('touchend', handleDragEnd);
            } else {
                startX = e.clientX;
                startY = e.clientY;
                document.addEventListener('mousemove', handleDragMove);
                document.addEventListener('mouseup', handleDragEnd);
            }
        }

        function handleDragMove(e) {
            let clientX, clientY;
            if (e.type === 'touchmove') {
                clientX = e.touches[0].clientX;
                clientY = e.touches[0].clientY;
            } else {
                clientX = e.clientX;
                clientY = e.clientY;
            }
            
            offsetX = clientX - startX;
            offsetY = clientY - startY;
            
            // Check if we've moved enough to consider it a drag
            if (!isDragging && (Math.abs(offsetX) > dragThreshold || Math.abs(offsetY) > dragThreshold)) {
                isDragging = true;
            }
            
            if (isDragging) {
                // Apply transformation for dragging
                const rotate = offsetX * 0.1;
                cardElement.style.transform = `translateX(${offsetX}px) translateY(${offsetY}px) rotate(${rotate}deg)`;
            }
        }

        function handleDragEnd(e) {
            // Remove event listeners
            document.removeEventListener('touchmove', handleDragMove);
            document.removeEventListener('touchend', handleDragEnd);
            document.removeEventListener('mousemove', handleDragMove);
            document.removeEventListener('mouseup', handleDragEnd);
            
            if (!isDragging) return;
            
            const velocity = Math.abs(offsetX) / (Date.now() - startTime);
            
            if (offsetX > 100 || velocity > 0.5) {
                // Swipe right (like)
                flyOff('right');
            } else if (offsetX < -100 || velocity > 0.5) {
                // Swipe left (dislike)
                flyOff('left');
            } else {
                // Return to original position
                flyBack();
            }
        }

        function flyOff(direction) {
            const x = direction === 'right' ? 500 : -500;
            
            cardElement.style.transition = 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out';
            cardElement.style.transform = `translateX(${x}px) translateY(${offsetY}px) rotate(${direction === 'right' ? 20 : -20}deg)`;
            cardElement.style.opacity = '0';
            
            setTimeout(() => {
                cardElement.remove();
                onSwipe(direction);
            }, 300);
        }

        function flyBack() {
            cardElement.style.transition = 'transform 0.5s ease-out';
            cardElement.style.transform = '';
            
            setTimeout(() => {
                cardElement.style.transition = '';
            }, 500);
        }

        // Keyboard support
        document.addEventListener('keydown', handleKeyDown);

        function handleKeyDown(e) {
            if (e.key === 'ArrowRight') {
                flyOff('right');
                return;
            }
            if (e.key === 'ArrowLeft') {
                flyOff('left');
                return;
            }

            if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                e.preventDefault();
                if (isFlipped) {
                    const cardBackContent = cardElement.querySelector('.card-back-content');
                    if (cardBackContent) {
                        const scrollAmount = 60;
                        cardBackContent.scrollTop += (e.key === 'ArrowDown' ? scrollAmount : -scrollAmount);
                    }
                }
            }
        }

        return {
            element: cardElement,
            getClubId: () => clubId,
            destroy: () => {
                document.removeEventListener('keydown', handleKeyDown);
                cardElement.removeEventListener('touchstart', handleDragStart);
                cardElement.removeEventListener('mousedown', handleDragStart);
            }
        };
    }


    // ====== From event_listeners.js ======
    function initializeEventListeners(app) {
        document.getElementById('start-matching-btn').addEventListener('click', app.startQuestionnaire);

        document.getElementById('questionnaire-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const questionnaireData = Object.fromEntries(formData.entries());
            app.startCardSession(questionnaireData);
        });

        document.getElementById('finish-btn').addEventListener('click', app.finishSession);
        document.getElementById('liked-btn').addEventListener('click', () => app.showListModal('liked'));
        document.getElementById('disliked-btn').addEventListener('click', () => app.showListModal('disliked'));

        document.getElementById('restart-btn').addEventListener('click', () => {
            hideModal('results-modal');
            app.restartApp();
        });

        document.getElementById('download-btn').addEventListener('click', app.downloadResults);

        document.getElementById('close-list-modal-btn').addEventListener('click', () => hideModal('list-modal'));

        document.getElementById('results-modal').addEventListener('click', (e) => {
            if (e.target.id === 'results-modal') {
                hideModal('results-modal');
            }
        });

        document.getElementById('list-modal').addEventListener('click', (e) => {
            if (e.target.id === 'list-modal') {
                hideModal('list-modal');
            }
        });
        
        // Custom select functionality
        const initCustomSelect = () => {
            const selects = document.querySelectorAll('.custom-select');
            
            selects.forEach(select => {
                const header = select.querySelector('.select-header');
                const options = select.querySelector('.select-options');
                const hiddenInput = select.querySelector('input[type="hidden"]');
                const valueSpan = select.querySelector('#gender-value, #mbti-value, #vibe-value');
                
                header.addEventListener('click', () => {
                    // Close other open selects
                    document.querySelectorAll('.select-options').forEach(opt => {
                        if (opt !== options) opt.style.display = 'none';
                    });
                    
                    // Toggle current select
                    if (options.style.display === 'block') {
                        options.style.display = 'none';
                        header.classList.remove('open');
                        header.querySelector('.arrow').classList.remove('open');
                    } else {
                        options.style.display = 'block';
                        header.classList.add('open');
                        header.querySelector('.arrow').classList.add('open');
                    }
                });
                
                // Handle option selection
                select.querySelectorAll('.select-option').forEach(option => {
                    option.addEventListener('click', () => {
                        // Remove selected class from all options
                        select.querySelectorAll('.select-option').forEach(opt => {
                            opt.classList.remove('selected');
                        });
                        
                        // Add selected class to clicked option
                        option.classList.add('selected');
                        
                        // Update hidden input and display value
                        const value = option.getAttribute('data-value');
                        hiddenInput.value = value;
                        
                        // Update displayed text
                        valueSpan.textContent = option.textContent;
                        
                        // Close options
                        options.style.display = 'none';
                        header.classList.remove('open');
                        header.querySelector('.arrow').classList.remove('open');
                    });
                });
            });
            
            // Close selects when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.custom-select')) {
                    document.querySelectorAll('.select-options').forEach(options => {
                        options.style.display = 'none';
                    });
                    document.querySelectorAll('.select-header').forEach(header => {
                        header.classList.remove('open');
                        header.querySelector('.arrow').classList.remove('open');
                    });
                }
            });
        };
        
        initCustomSelect();
    }


    // ====== From main.js ======
    const state = {
        currentScreen: 'home',
        questionnaire: {},
        allClubs: clubs,
        recommendationQueue: [],
        shownClubIds: new Set(),
        likedClubs: [], // { id, name, tags, dwellTime }
        dislikedClubs: [], // { id, name, tags }
        currentCard: null,
        cardStartTime: 0,
    };

    let modalHandler;

    function startQuestionnaire() {
        state.currentScreen = 'questionnaire';
        showScreen('questionnaire-screen');
    }

    function startCardSession(questionnaireData) {
        state.questionnaire = questionnaireData;
        state.currentScreen = 'cards';
        
        state.recommendationQueue = getInitialRecommendationQueue(state.questionnaire, state.allClubs);
        
        updateActionButtons(state.likedClubs.length, state.dislikedClubs.length);
        showScreen('card-screen');
        loadNextCard();
    }

    function loadNextCard() {
        if (state.currentCard) {
            state.currentCard.destroy();
            state.currentCard = null;
        }
        
        const nextClub = getNextCard(state);
        
        if (nextClub) {
            state.shownClubIds.add(nextClub.id);
            const cardElement = createCardElement(nextClub);
            state.currentCard = createCardController(cardElement, handleSwipe);
            state.cardStartTime = Date.now();
        } else {
            finishSession();
        }
    }

    function handleSwipe(direction) {
        if (!state.currentCard) return;

        const clubId = state.currentCard.getClubId();
        const club = state.allClubs.find(c => c.id === clubId);
        const dwellTime = (Date.now() - state.cardStartTime) / 1000;

        if (direction === 'right') {
            state.likedClubs.push({ ...club, dwellTime });
        } else {
            state.dislikedClubs.push({ ...club });
        }
        
        updateActionButtons(state.likedClubs.length, state.dislikedClubs.length);
        loadNextCard();
    }

    function finishSession() {
        const finalResults = calculateFinalResults(state);
        showResultsModal(finalResults);
    }

    function restartApp() {
        Object.assign(state, {
            currentScreen: 'home',
            questionnaire: {},
            recommendationQueue: [],
            shownClubIds: new Set(),
            likedClubs: [],
            dislikedClubs: [],
            currentCard: null,
            cardStartTime: 0,
        });
        
        const cardContainer = document.getElementById('card-container');
        cardContainer.innerHTML = '';
        document.getElementById('questionnaire-form').reset();
        
        // Reset custom select displays
        document.getElementById('gender-value').textContent = 'Select your gender';
        document.getElementById('mbti-value').textContent = 'Select your MBTI type';
        document.getElementById('vibe-value').textContent = 'Select club vibe';
        
        updateActionButtons(0, 0);
        showScreen('home-screen');
    }

    function downloadResults() {
const finalRecommendations = calculateFinalResults(state);
const resultsToSend = {
    userInfo: state.questionnaire,
    finalRecommendations: finalRecommendations.map(({ id, name, score }) => ({
        id,
        name,
        score: score.toFixed(2)
    })),
    likedClubs: state.likedClubs.map(({ id, name, tags, dwellTime }) => ({
        id,
        name,
        tags,
        dwellTime: dwellTime.toFixed(2) + 's'
    })),
    dislikedClubs: state.dislikedClubs.map(({ id, name, tags }) => ({ id, name, tags })),
};

// 发送数据到Flask服务器
fetch('http://localhost:5000/api/save-results', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(resultsToSend)
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    alert('结果已成功保存到服务器！');
    console.log('服务器响应:', data);
})
.catch(error => {
    console.error('错误:', error);
    alert('保存结果到服务器失败。');
});
}


    document.addEventListener('DOMContentLoaded', () => {
        modalHandler = createModalHandler(state, { updateActionButtons });

        initializeEventListeners({
            startQuestionnaire,
            startCardSession,
            finishSession,
            restartApp,
            downloadResults,
            showListModal: modalHandler.show,
            hideListModal: modalHandler.hide
        });
    });
