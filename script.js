document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();
        });

        const clubInfo = {
            astr_club: "Astronomy Club: Explore the wonders of the universe with telescopes and space talks.",
            heart_club: "Heart Club: Community service and volunteer activities to make an impact.",
            draw_club: "Drawing Club: Improve your art skills and join creative sketch sessions.",
            reading_club: "Reading Club: Share and discuss books with fellow literature lovers."
        };

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
                tags: ["diplomacy", "global", "debate", "model-un", "leadership"],
                description: "模拟联合国社团，锻炼全球视野与谈判能力，适合对国际事务和公共演讲有兴趣的学生。"
            },
            {
                id: 5,
                name: "商业社",
                tags: ["business", "entrepreneurship", "economics", "marketing", "finance"],
                description: "学习商业知识，模拟创业实践，举办商业竞赛，培养商业思维与领导能力。"
            },
            {
                id: 6,
                name: "奇点科创社",
                tags: ["technology", "innovation", "research", "STEM", "projects"],
                description: "推动科学研究与创新项目，关注前沿科技与跨学科实践。"
            },
            {
                id: 7,
                name: "羽毛球社",
                tags: ["sports", "badminton", "fitness", "teamwork", "competition"],
                description: "定期组织羽毛球训练与比赛，适合所有水平的羽毛球爱好者。"
            },
            {
                id: 8,
                name: "流云武术社",
                tags: ["sports", "martial-arts", "traditional", "fitness", "discipline"],
                description: "推广中华武术文化，进行武术套路与实战技巧训练，增强体魄与意志力。"
            },
            {
                id: 9,
                name: "弈界棋类交流会",
                tags: ["strategy", "chess", "go", "boardgames", "logic"],
                description: "围棋、国际象棋及其他棋类爱好者交流对弈的平台，提升策略思维与专注力。"
            },
            {
                id: 10,
                name: "电竞社",
                tags: ["esports", "gaming", "teamwork", "strategy", "competition"],
                description: "电子竞技爱好者的聚集地，组织线上线下赛事，培养协作与竞技精神。"
            },
            {
                id: 11,
                name: "街舞社",
                tags: ["dance", "hiphop", "performance", "fitness", "creativity"],
                description: "街舞训练与表演社团，培养舞蹈技巧与舞台表现力。"
            },
            {
                id: 12,
                name: "剪纸社",
                tags: ["art", "paper-cutting", "crafts", "traditional", "design"],
                description: "中国传统剪纸艺术社团，传承文化与手工美学。"
            },
            {
                id: 13,
                name: "Infinite摄影社",
                tags: ["photography", "art", "camera", "visual", "creativity"],
                description: "摄影爱好者的交流与实践平台，组织摄影外拍与作品分享。"
            },
            {
                id: 14,
                name: "辩论社",
                tags: ["debate", "public-speaking", "logic", "argumentation", "teamwork"],
                description: "培养思辨能力与演讲技巧，参与校内外辩论赛事。"
            },
            {
                id: 15,
                name: "公益社",
                tags: ["volunteer", "charity", "community", "service", "social-impact"],
                description: "组织志愿活动，参与公益项目，服务社会，传播正能量。"
            },
            {
                id: 16,
                name: "不止艺术社",
                tags: ["art", "innovation", "design", "painting", "exhibition"],
                description: "多元化艺术创作社团，鼓励跨界艺术探索与展览。"
            },
            {
                id: 17,
                name: "微光心理社",
                tags: ["psychology", "mental-health", "support", "counseling", "wellbeing"],
                description: "关注心理健康，举办心理讲座、互助交流与心理关怀活动。"
            },
            {
                id: 18,
                name: "中国书画社",
                tags: ["calligraphy", "painting", "traditional", "culture", "art"],
                description: "学习和传承中国书法与国画艺术，弘扬中华传统文化。"
            },
            {
                id: 19,
                name: "足球社",
                tags: ["sports", "football", "teamwork", "competition", "fitness"],
                description: "足球爱好者的聚集地，组织训练和友谊赛。"
            },
            {
                id: 20,
                name: "篮球社",
                tags: ["sports", "basketball", "teamwork", "fitness", "competition"],
                description: "篮球训练和比赛，提升球技与团队合作精神。"
            },
            {
                id: 21,
                name: "中国舞社",
                tags: ["dance", "chinese-dance", "performance", "culture", "fitness"],
                description: "中国舞蹈爱好者的社团，弘扬传统舞蹈艺术并参与演出。"
            },
            {
                id: 22,
                name: "地理社",
                tags: ["geography", "earth-science", "exploration", "nature", "mapping"],
                description: "探索地理知识与自然环境，组织实地考察和地理竞赛。"
            },
            {
                id: 23,
                name: "环境社",
                tags: ["environment", "sustainability", "ecology", "climate", "green"],
                description: "关注环境保护与可持续发展，倡导绿色生活方式。"
            },
            {
                id: 24,
                name: "气象社",
                tags: ["weather", "meteorology", "science", "forecasting", "climate"],
                description: "气象科学爱好者的聚集地，学习天气预报与气候知识。"
            },
            {
                id: 25,
                name: "阅读社",
                tags: ["reading", "literature", "discussion", "sharing", "culture"],
                description: "组织读书会和文学讨论，分享阅读心得与写作经验。"
            },
            {
                id: 26,
                name: "美食社",
                tags: ["food", "cooking", "tasting", "culture", "sharing"],
                description: "探索美食文化，组织烹饪与品鉴活动，交流美食体验。"
            },
            {
                id: 27,
                name: "音乐社",
                tags: ["music", "instrument", "performance", "band", "vocal"],
                description: "音乐爱好者的交流和表演平台，涵盖乐器、声乐等多个方向。"
            },
            {
                id: 28,
                name: "播音社",
                tags: ["broadcasting", "media", "communication", "speaking", "performance"],
                description: "培养播音与主持能力，提升语言表达与媒体素养。"
            },
            {
                id: 29,
                name: "乒乓球社",
                tags: ["sports", "table-tennis", "competition", "fitness", "skills"],
                description: "乒乓球训练和比赛，适合所有水平的乒乓球爱好者。"
            },
            {
                id: 30,
                name: "排球社",
                tags: ["sports", "volleyball", "teamwork", "fitness", "competition"],
                description: "排球运动爱好者的聚集地，组织训练和比赛。"
            }
        ];

        // ====== Recommendation Engine ======
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

        // ====== UI Controller ======
        function showResultsModal(results) {
            const resultsModal = document.getElementById('results-modal');
            const resultsList = document.getElementById('results-list');
            resultsList.innerHTML = '';

            if (!results || results.length === 0) {
                resultsList.innerHTML = '<p class="text-slate-500 text-center">You haven\'t liked any clubs. Swipe right on some clubs to get recommendations!</p>';
            } else {
                const rankColors = ['text-amber-400', 'text-slate-500', 'text-amber-600']; // Gold, Silver, Bronze-ish
                const resultItems = results.map((club, index) => `
                    <div class="bg-slate-100 p-4 rounded-lg shadow-inner">
                        <div class="flex items-baseline mb-2">
                            <span class="text-2xl font-bold ${rankColors[index] || 'text-slate-400'} mr-3">#${index + 1}</span>
                            <h3 class="text-xl font-bold text-slate-800">${club.name}</h3>
                        </div>
                        <p class="text-slate-600 pl-9">${club.description}</p>
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
                <div class="card-face card-front flex-col p-6 text-center justify-center">
                    <h2 class="text-3xl font-bold text-slate-800 mb-4">${club.name}</h2>
                    <div class="flex flex-wrap justify-center gap-2">
                        ${club.tags.map(tag => `<span class="bg-rose-100 text-rose-600 text-xs font-semibold px-2.5 py-1 rounded-full">${tag}</span>`).join('')}
                    </div>
                    <p class="text-slate-400 mt-8 text-sm">Click to flip for details</p>
                </div>
                <div class="card-face card-back p-6">
                    <div class="card-back-content prose prose-sm max-w-none">
                        <h3 class="font-bold text-slate-800">${club.name}</h3>
                        <p>${club.description}</p>
                    </div>
                </div>
            `;
            cardContainer.appendChild(cardElement);
            return cardElement;
        }

        // ====== Modals Handler ======
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

        // ====== Card Handler ======
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

        // ====== View All Sidebar ======
        function setupViewAllSidebar() {
            const viewBtn = document.getElementById('view-btn');
            const sidebar = document.getElementById('view-all-sidebar');
            const closeBtn = document.querySelector('.close-sidebar');
            const overlay = document.getElementById('sidebar-overlay');
            const clubListContainer = document.getElementById('club-list-container');
            
            // Populate club list
            clubs.forEach(club => {
                const clubItem = document.createElement('div');
                clubItem.className = 'club-item';
                clubItem.innerHTML = `
                    <h3>${club.name}</h3>
                    <p>${club.description}</p>
                `;
                clubListContainer.appendChild(clubItem);
            });
            
            // Toggle sidebar
            viewBtn.addEventListener('click', () => {
                sidebar.classList.add('visible');
                overlay.classList.add('visible');
            });
            
            closeBtn.addEventListener('click', () => {
                sidebar.classList.remove('visible');
                overlay.classList.remove('visible');
            });
            
            overlay.addEventListener('click', () => {
                sidebar.classList.remove('visible');
                overlay.classList.remove('visible');
            });
        }

        // ====== Event Listeners ======
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

            document.getElementById('apply_btn').addEventListener('click', app.downloadResults);

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


        // ====== Main Application ======
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
            alert(`Results have been processed! Your top club is: ${finalRecommendations[0]?.name || 'None'}`);
            console.log('Results to be saved:', {
                userInfo: state.questionnaire,
                recommendations: finalRecommendations
            });
        }

        document.addEventListener('DOMContentLoaded', () => {
            modalHandler = createModalHandler(state, { updateActionButtons });
            setupViewAllSidebar();

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
