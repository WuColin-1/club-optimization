document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();
        });

        // const clubInfo = {
        //     astr_club: "Astronomy Club: Explore the wonders of the universe with telescopes and space talks.",
        //     heart_club: "Heart Club: Community service and volunteer activities to make an impact.",
        //     draw_club: "Drawing Club: Improve your art skills and join creative sketch sessions.",
        //     reading_club: "Reading Club: Share and discuss books with fellow literature lovers."
        // };

        const clubs = [
            {
                id: 1,
                name: "互教互学数理社",
                tags: ["academic", "math", "physics", "problem-solving", "tutoring"],
                description: "数学和物理爱好者的学习社区，提供同伴辅导、解题技巧分享和学科竞赛准备。适合所有热爱数理科学的学生参与。",
                image: "Club Images/1.png"
            },
            {
                id: 2,
                name: "造物pi创客社",
                tags: ["tech", "innovation", "robotics", "engineering", "3d-printing"],
                description: "动手实践型创客空间，专注于电子制作、3D打印和机器人开发。提供工具和资源支持创新项目实现。",
                image: "Club Images/2.png"
            },
            {
                id: 3,
                name: "繁星天文社",
                tags: ["science", "stargazing", "astronomy", "observation", "photography"],
                description: "探索宇宙奥秘的社团，组织天文观测活动、天文摄影和宇宙学知识讲座。配备专业天文望远镜。",
                image: "Club Images/3.png"
            },
            {
                id: 4,
                name: "全球胜任力模联社",
                tags: ["diplomacy", "global", "debate", "model-un", "leadership"],
                description: "模拟联合国社团，锻炼全球视野与谈判能力，适合对国际事务和公共演讲有兴趣的学生。",
                image: "Club Images/4.png"
            },
            {
                id: 5,
                name: "商业社",
                tags: ["business", "entrepreneurship", "economics", "marketing", "finance"],
                description: "学习商业知识，模拟创业实践，举办商业竞赛，培养商业思维与领导能力。",
                image: "Club Images/5.png"
            },
            {
                id: 6,
                name: "奇点科创社",
                tags: ["technology", "innovation", "research", "STEM", "projects"],
                description: "推动科学研究与创新项目，关注前沿科技与跨学科实践。",
                image: "Club Images/6.png"
            },
            {
                id: 7,
                name: "羽毛球社",
                tags: ["sports", "badminton", "fitness", "teamwork", "competition"],
                description: "定期组织羽毛球训练与比赛，适合所有水平的羽毛球爱好者。",
                image: "Club Images/7.png"
            },
            {
                id: 8,
                name: "流云武术社",
                tags: ["sports", "martial-arts", "traditional", "fitness", "discipline"],
                description: "推广中华武术文化，进行武术套路与实战技巧训练，增强体魄与意志力。",
                image: "Club Images/8.png"
                
            },
            {
                id: 9,
                name: "弈界棋类交流会",
                tags: ["strategy", "chess", "go", "boardgames", "logic"],
                description: "围棋、国际象棋及其他棋类爱好者交流对弈的平台，提升策略思维与专注力。",
                image: "Club Images/9.png"
            },
            {
                id: 10,
                name: "电竞社",
                tags: ["esports", "gaming", "teamwork", "strategy", "competition"],
                description: "电子竞技爱好者的聚集地，组织线上线下赛事，培养协作与竞技精神。",
                image: "Club Images/10.png"
            },
            {
                id: 11,
                name: "街舞社",
                tags: ["dance", "hiphop", "performance", "fitness", "creativity"],
                description: "街舞训练与表演社团，培养舞蹈技巧与舞台表现力。",
                image: "Club Images/11.png"
            },
            {
                id: 12,
                name: "剪纸社",
                tags: ["art", "paper-cutting", "crafts", "traditional", "design"],
                description: "中国传统剪纸艺术社团，传承文化与手工美学。",
                image: "Club Images/12.png"
            },
            {
                id: 13,
                name: "Infinite摄影社",
                tags: ["photography", "art", "camera", "visual", "creativity"],
                description: "摄影爱好者的交流与实践平台，组织摄影外拍与作品分享。",
                image: "Club Images/13.png"
            },
            {
                id: 14,
                name: "辩论社",
                tags: ["debate", "public-speaking", "logic", "argumentation", "teamwork"],
                description: "培养思辨能力与演讲技巧，参与校内外辩论赛事。",
                image: "Club Images/14.png"
            },
            {
                id: 15,
                name: "公益社",
                tags: ["volunteer", "charity", "community", "service", "social-impact"],
                description: "组织志愿活动，参与公益项目，服务社会，传播正能量。",
                image: "Club Images/15.png"
            },
            {
                id: 16,
                name: "不止艺术社",
                tags: ["art", "innovation", "design", "painting", "exhibition"],
                description: "多元化艺术创作社团，鼓励跨界艺术探索与展览。",
                image: "Club Images/16.png"
            },
            {
                id: 17,
                name: "微光心理社",
                tags: ["psychology", "mental-health", "support", "counseling", "wellbeing"],
                description: "关注心理健康，举办心理讲座、互助交流与心理关怀活动。",
                image: "Club Images/17.jpg"
            },
            {
                id: 18,
                name: "中国书画社",
                tags: ["calligraphy", "painting", "traditional", "culture", "art"],
                description: "学习和传承中国书法与国画艺术，弘扬中华传统文化。",
                image: "Club Images/18.png"
            },
            {
                id: 19,
                name: "足球社",
                tags: ["sports", "football", "teamwork", "competition", "fitness"],
                description: "足球爱好者的聚集地，组织训练和友谊赛。",
                image: "Club Images/19.png"
            },
            {
                id: 20,
                name: "篮球社",
                tags: ["sports", "basketball", "teamwork", "fitness", "competition"],
                description: "篮球训练和比赛，提升球技与团队合作精神。",
                image: "Club Images/20.png"
            },
            {
                id: 21,
                name: "中国舞社",
                tags: ["dance", "chinese-dance", "performance", "culture", "fitness"],
                description: "中国舞蹈爱好者的社团，弘扬传统舞蹈艺术并参与演出。",
                image: "Club Images/21.png"
            },
            {
                id: 22,
                name: "地理社",
                tags: ["geography", "earth-science", "exploration", "nature", "mapping"],
                description: "探索地理知识与自然环境，组织实地考察和地理竞赛。",
                image: "Club Images/22.png"
            },
            {
                id: 23,
                name: "环境社",
                tags: ["environment", "sustainability", "ecology", "climate", "green"],
                description: "关注环境保护与可持续发展，倡导绿色生活方式。",
                image: "Club Images/23.png"
                
            },
            {
                id: 24,
                name: "气象社",
                tags: ["weather", "meteorology", "science", "forecasting", "climate"],
                description: "气象科学爱好者的聚集地，学习天气预报与气候知识。",
                image: "Club Images/24.png"
            },
            {
                id: 25,
                name: "阅读社",
                tags: ["reading", "literature", "discussion", "sharing", "culture"],
                description: "组织读书会和文学讨论，分享阅读心得与写作经验。",
                image: "Club Images/25.png"
            },
            {
                id: 26,
                name: "美食社",
                tags: ["food", "cooking", "tasting", "culture", "sharing"],
                description: "探索美食文化，组织烹饪与品鉴活动，交流美食体验。",
                image: "Club Images/26.png"
            },
            {
                id: 27,
                name: "音乐社",
                tags: ["music", "instrument", "performance", "band", "vocal"],
                description: "音乐爱好者的交流和表演平台，涵盖乐器、声乐等多个方向。",
                image: "Club Images/27.png"
            },
            {
                id: 28,
                name: "播音社",
                tags: ["broadcasting", "media", "communication", "speaking", "performance"],
                description: "培养播音与主持能力，提升语言表达与媒体素养。",
                image: "Club Images/28.png"
            },
            {
                id: 29,
                name: "乒乓球社",
                tags: ["sports", "table-tennis", "competition", "fitness", "skills"],
                description: "乒乓球训练和比赛，适合所有水平的乒乓球爱好者。",
                image: "Club Images/29.png"
            },
            {
                id: 30,
                name: "排球社",
                tags: ["sports", "volleyball", "teamwork", "fitness", "competition"],
                description: "排球运动爱好者的聚集地，组织训练和比赛。",
                image: "Club Images/30.png"
            }
        ];

        
    const clubDetails = {
        
        "互教互学数理社": {
            name: "互教互学数理社",
            threshold: "提交一份自创数学/物理趣味题解",
            qrCode: "QR code of each club/这里会有一个微信号.png",
            activities: [
                "跨年级“小老师”微课竞赛",
                "π节创意公式推导赛",
                "用数学建模预测食堂排队时间"
            ],
            testimonials: [
                "\"给学弟妹讲题时发现自己逻辑漏洞！\"",
                "\"和竞赛大佬组队啃掉了马尔可夫链！\""
            ]
        },
        "造物pi创客社": {
            name: "造物π创客社",
            threshold: "无",
            qrCode: "QR code of each club/这里会有一个微信号_1.png",
            activities: [
                "废旧电子产品改造工作坊",
                "校园智能垃圾桶设计赛",
                "3D打印校徽盲盒交换"
            ],
            testimonials: [
                "\"第一次焊电路板手抖成帕金森，成品居然能亮！\"",
                "\"社长用泡面桶做了个机器人！\""
            ]
        },
        "繁星天文社": {
            name: "繁星天文社",
            threshold: "夜间观测活动自愿参加",
            qrCode: "QR code of each club/这里会有一个微信号_2.png",
            activities: [
                "中秋月球摄影大赛",
                "操场躺平观流星雨",
                "用星图APP破解星座谜题寻宝"
            ],
            testimonials: [
                "\"在屋顶冻成狗但看到土星环值了！\"",
                "\"学妹用星象知识成功搭讪！\""
            ]
        },
        "全球胜任力模联社": {
            name: "全球胜任力模联社",
            threshold: "① 提交300字立场文件 ② 会基础PPT",
            qrCode: "QR code of each club/这里会有一个微信号_3.png",
            activities: [
                "模拟联合国难民署辩论",
                "跨校“碳中和”谈判",
                "用Minecraft重建国际会场"
            ],
            testimonials: [
                "\"西装革履吵架太爽了！\"",
                "\"英语渣靠手势谈判赢最佳代表！\""
            ]
        },
        "商业社": {
            name: "商业社",
            threshold: "无",
            qrCode: "QR code of each club/这里会有一个微信号_4.png",
            activities: [
                "校园二手书金融交易实验",
                "给食堂阿姨设计促销方案",
                "用乐高模拟公司并购"
            ],
            testimonials: [
                "\"倒卖校徽徽章月入奶茶钱！\"",
                "\"终于看懂爸妈股票软件了！\""
            ]
        },
        "奇点科创社": {
            name: "奇点科创社",
            threshold: "提交任意科技创意脑洞（50字）",
            qrCode: "QR code of each club/这里会有一个微信号_5.png",
            activities: [
                "用无人机航拍校运会",
                "给教室门装自动感应锁",
                "教ChatGPT写情书大赛"
            ],
            testimonials: [
                "\"做的机械臂只会比耶，但校领导鼓掌了！\"",
                "\"熬夜调代码时和社长成了兄弟！\""
            ]
        },
        "羽毛球社": {
            name: "羽毛球社",
            threshold: "无（提供公用球拍）",
            qrCode: "QR code of each club/这里会有一个微信号_6.png",
            activities: [
                "师生混合双打擂台",
                "羽毛球彩绘DIY",
                "\"一球换奶茶\"趣味赛"
            ],
            testimonials: [
                "\"社长接球摔跤视频在B站播放过万！\"",
                "\"体育课考试轻松满分！\""
            ]
        },
        "流云武术社": {
            name: "流云武术社",
            threshold: "无",
            qrCode: "QR code of each club/这里会有一个微信号_7.png",
            activities: [
                "晨练太极惊动广场舞阿姨",
                "双截棍打苹果挑战赛",
                "自创“考试必胜拳”"
            ],
            testimonials: [
                "\"体测引体向上轻松拉满！\"",
                "\"练完拳数学考了史上最高！\""
            ]
        },
        "弈界棋类交流会": {
            name: "弈界棋类交流会",
            threshold: "无",
            qrCode: "QR code of each club/这里会有一个微信号_8.png",
            activities: [
                "五子棋闪电车轮战",
                "用象棋棋子拍定格动画",
                "围棋盲下挑战赛"
            ],
            testimonials: [
                "\"靠输棋认识了女朋友！\"",
                "\"在这里悔棋不会被骂！\""
            ]
        },
        "电竞社": {
            name: "电竞社",
            threshold: "① 签署防沉迷承诺书 ② 接受老年人教学",
            qrCode: "QR code of each club/这里会有一个微信号_9.png",
            activities: [
                "公益直播赛筹款捐书",
                "电竞解说方言大赛",
                "教老师打王者上分"
            ],
            testimonials: [
                "\"和班主任双排他夸我意识好！\"",
                "\"比赛赢的奶茶甜度超标！\""
            ]
        },
        "街舞社": {
            name: "街舞社",
            threshold: "无",
            qrCode: "QR code of each club/这里会有一个微信号_10.png",
            activities: [
                "天台月光快闪舞",
                "用广播操改编街舞",
                "和广场舞团battle联谊"
            ],
            testimonials: [
                "\"社恐变社牛只需一场公演！\"",
                "\"扭伤脚时全社接力背我去医务室！\""
            ]
        },
        "剪纸社": {
            name: "剪纸社",
            threshold: "无（提供安全剪刀）",
            qrCode: "QR code of each club/这里会有一个微信号_11.png",
            activities: [
                "剪校猫肖像大赛",
                "窗花拯救丑玻璃活动",
                "剪纸动画《食堂打饭战》"
            ],
            testimonials: [
                "\"剪坏十张纸后终于有能贴冰箱的作品！\"",
                "\"送奶奶生日礼物被夸了！\""
            ]
        },
        "Infinite摄影社": {
            name: "Infinite摄影社",
            threshold: "手机可参与",
            qrCode: "QR code of each club/这里会有一个微信号_12.png",
            activities: [
                "偷拍老师表情包大赛（已授权）",
                "九宫格毕业故事征集",
                "用错位摄影假装吃月亮"
            ],
            testimonials: [
                "\"拍的教导主任微笑照卖了20元！\"",
                "\"从此朋友圈点赞翻倍！\""
            ]
         },
        "辩论社": {
            name: "辩论社",
            threshold: "① 选择“甜/咸豆腐脑”立场并说1个理由",
            qrCode: "QR code of each club/这里会有一个微信号_13.png",
            activities: [
                "奇葩说式恋爱辩题夜",
                "用鲁迅语录打辩论",
                "随机分组反方变友军"
            ],
            testimonials: [
                "\"吵架功力碾压我妈了！\"",
                "\"原神抽卡玄学被驳得体无完肤...\""
            ]
        },
        "公益社": {
            name: "公益社",
            threshold: "无",
            qrCode: "QR code of each club/这里会有一个微信号_14.png",
            activities: [
                "收集塑料瓶盖拼巨幅画",
                "给流浪猫做防寒窝",
                "写“夸夸信”塞满全校书包"
            ],
            testimonials: [
                "\"收到学妹感谢信哭成狗！\"",
                "\"撸猫时顺便做了志愿时长！\""
            ]
        },
        "不止艺术社": {
            name: "不止艺术社",
            threshold: "无",
            qrCode: "QR code of each club/这里会有一个微信号_15.png",
            activities: [
                "用粉笔灰做彩色沙画",
                "给石墩子穿毛衣",
                "在操场摆落叶阵"
            ],
            testimonials: [
                "\"涂鸦校长雕像后他没生气！\"",
                "\"作品被放进校史馆角落！\""
            ]
        },
        "微光心理社": {
            name: "微光心理社",
            threshold: "无",
            qrCode: "QR code of each club/这里会有一个微信号_16.png",
            activities: [
                "解压捏泡泡纸大赛",
                "匿名烦恼交换箱",
                "扮演树洞听陌生人故事"
            ],
            testimonials: [
                "\"知道了暗恋对象也焦虑秃头！\"",
                "\"学完催眠术室友真的睡着了！\""
            ]
        },
        "中国书画社": {
            name: "中国书画社",
            threshold: "无（提供毛笔）",
            qrCode: "QR code of each club/这里会有一个微信号_17.png",
            activities: [
                "在食堂餐盘上题诗",
                "给校服画水墨补丁",
                "用拖把写巨幅书法"
            ],
            testimonials: [
                "\"写的‘不挂科’被班主任裱起来了！\"",
                "\"磨墨时找到了冥想的感觉！\""
            ]
        },
        "足球社": {
            name: "足球社",
            threshold: "无",
            qrCode: "QR code of each club/这里会有一个微信号_18.png",
            activities: [
                "雨天泥地足球狂欢",
                "穿充气恐龙服踢球",
                "女生点球大战男队"
            ],
            testimonials: [
                "\"射门打碎校长杯子却免赔！\"",
                "\"从此体测800米能笑着跑完！\""
            ]
        },
        "篮球社": {
            name: "篮球社",
            threshold: "无",
            qrCode: "QR code of each club/这里会有一个微信号_19.png",
            activities: [
                "篮筐挂甜甜圈投篮赛",
                "蒙眼三分球挑战",
                "和老师队打赌赢免作业券"
            ],
            testimonials: [
                "\"绝杀后全班叫我流川枫！\"",
                "\"打球骨折后收到全年级签名石膏！\""
            ]
        },
        "中国舞社": {
            name: "中国舞社",
            threshold: "无",
            qrCode: "QR code of each club/这里会有一个微信号_20.png",
            activities: [
                "汉服快闪惊现小卖部",
                "用舞蹈还原《清明上河图》",
                "教外教扭秧歌"
            ],
            testimonials: [
                "\"第一次下腰时听见了腰椎惨叫...\"",
                "\"元旦晚会C位刷屏校友圈！\""
            ]
        },
        "地理社": {
            name: "地理社",
            threshold: "无",
            qrCode: "QR code of each club/这里会有一个微信号_21.png",
            activities: [
                "用奥利奥做地层模型",
                "给校园地形图画等高线",
                "预测教室PM2.5分布"
            ],
            testimonials: [
                "\"发现学校建在古河道上！\"",
                "\"靠地理知识在密室逃脱装逼！\""
            ]
        },
        "环境社": {
            name: "环境社",
            threshold: "无",
            qrCode: "QR code of each club/这里会有一个微信号_22.png",
            activities: [
                "蟑螂屋设计大赛",
                "检测奶茶店废水COD",
                "把落叶堆肥种出小番茄"
            ],
            testimonials: [
                "\"养的蚯蚓成了班宠！\"",
                "\"校长吃了我们种的番茄！\""
            ]
        },
        "气象社": {
            name: "气象社",
            threshold: "无",
            qrCode: "QR code of each club/这里会有一个微信号_23.png",
            activities: [
                "在操场放探空气球",
                "直播早高峰“带伞预警”",
                "用数据论证“萧敬腾效应”"
            ],
            testimonials: [
                "\"成功预言体育课逃雨！\"",
                "\"做的天气瓶比初恋还好看！\""
            ]
        },
        "阅读社": {
            name: "阅读社",
            threshold: "无",
            qrCode: "QR code of each club/这里会有一个微信号_24.png",
            activities: [
                "给鲁迅写微信对话",
                "在厕所贴诗歌碎片",
                "用小说角色玩剧本杀"
            ],
            testimonials: [
                "\"《红楼梦》CP吵翻全社！\"",
                "\"社长推荐网文比晋江还上头！\""
            ]
        },

        "美食社": {
            name: "美食社",
            threshold: "① 自带食材≤20元 ② 不动明火",
            qrCode: "QR code of each club/这里会有一个微信号_25.png",
            activities: [
                "化学课制冰糖实验延伸版",
                "五仁月饼保卫战",
                "测评食堂剩饭的100种改造"
            ],
            testimonials: [
                "\"煮泡面加牛奶被封神！\"",
                "\"靠焦糖布丁换到物理笔记！\""
            ]
        },

        "音乐社": {
            name: "音乐社",
            threshold: "无（可当听众）",
            qrCode: "QR code of each club/这里会有一个微信号_26.png",
            activities: [
                "午休走廊快闪合唱",
                "用饮水机做打击乐",
                "给校歌改编死亡金属版"
            ],
            testimonials: [
                "\"跑调人当上了节奏沙锤手！\"",
                "\"写的表白歌真管用！\""
            ]
        },

        "播音社": {
            name: "播音社",
            threshold: "① 朗读“红鲤鱼绿鲤鱼”",
            qrCode: "QR code of each club/这里会有一个微信号_27.png",
            activities: [
                "给校园松鼠配纪录片旁白",
                "用播音腔念网络小说",
                "悄悄代课点名"
            ],
            testimonials: [
                "\"现在听自己声音不尴尬了！\"",
                "\"模仿教导主任广播吓哭新生！\""
            ]
        },
    
        "乒乓球社": {
            name: "乒乓球社",
            threshold: "无",
            qrCode: "QR code of each club/这里会有一个微信号_28.png",
            activities: [
                "用饭盒当球拍比赛",
                "颠球绕操场S形跑",
                "开发“自习室无声打球法”"
            ],
            testimonials: [
                "\"近视度数十年首度稳定！\"",
                "\"和校长打球他夸我抽球狠！\""
            ]
        },
    
    
        "排球社": {
            name: "排球社",
            threshold: "无",
            qrCode: "QR code of each club/这里会有一个微信号_29.png",
            activities: [
                "沙滩排球进沙坑",
                "用瑜伽球打巨型排球",
                "发明“考试不挂科”击掌暗号"
            ],
            testimonials: [
                "\"扣球太猛砸晕自己但赢了！\"",
                "\"接球青紫像纹身超酷！\""
            ]
        }
    }




        

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
            } 
            else {
                const rankColors = ['text-amber-400', 'text-slate-500', 'text-amber-600']; // Gold, Silver, Bronze-ish
                const resultItems = results.map((club, index) => `
                    <div class="selectable-club block bg-slate-100 p-4 rounded-lg shadow-inner cursor-pointer transition border-2 border-transparent hover:bg-slate-200" data-club="${club.name}">
                        <div class="flex items-baseline mb-2">
                            <span class="text-2xl font-bold ${rankColors[index] || 'text-slate-400'} mr-3">#${index + 1}</span>
                            <h3 class="text-xl font-bold text-slate-800">${club.name}</h3>
                        </div>
                        <p class="text-slate-600 pl-9">${club.description}</p>
                    </div>
                `).join('');
                resultsList.innerHTML = resultItems;
                
                // Selected Clubs
                let selectedCard = null;
                setTimeout(() => {
                    const cards = document.querySelectorAll('.selectable-club');
                    const confirmBtn = document.getElementById('apply_btn');
                    

                    // 初始状态设为禁用和灰色
                    confirmBtn.disabled = true;
                    confirmBtn.classList.remove('bg-rose-500', 'cursor-pointer');
                    confirmBtn.classList.add('bg-slate-200', 'cursor-not-allowed');

                    cards.forEach(card => {
                        card.addEventListener('click', () => {
                            // 如果是重复点击：取消选择
                            if (selectedCard === card) {
                                card.classList.remove('border-rose-500');
                                selectedCard = null;

                                confirmBtn.disabled = true;
                                confirmBtn.classList.remove('bg-rose-500', 'cursor-pointer');
                                confirmBtn.classList.add('bg-slate-200', 'cursor-not-allowed');
                                return;
                            }

                            // 取消旧选择
                            cards.forEach(c => c.classList.remove('border-rose-500'));

                            // 添加新选择
                            card.classList.add('border-rose-500');
                            selectedCard = card;

                            // 按钮启用 + 高亮
                            confirmBtn.disabled = false;
                            confirmBtn.classList.remove('bg-slate-200', 'cursor-not-allowed');
                            confirmBtn.classList.add('bg-rose-500', 'cursor-pointer');
                        });
                    });
                    confirmBtn.addEventListener('click', () => {
                        if (!selectedCard) return;
        
                        const clubName = selectedCard.querySelector('h3').innerText.trim();
                        const clubInfo = clubDetails[clubName];
                        
                        if (!clubInfo) {
                            alert("Oops! No detailed info available.");
                            return;
                        }
                        
                        showClubDetailModal(clubInfo);
                        
                        // closeClubDetailModal()
                    });
                }, 100);
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
                    screen.classList.remove('opacity-0', 'pointer-events-none', 'hidden');
                } else {
                    screen.classList.add('opacity-0', 'pointer-events-none', 'hidden');
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
                        <h3 class="font-bold text-slate-800" style="font-size: x-large;"> ${club.name} </h3>
                        <p style="font-size: large" class="card-back-content"> ${club.description}</p>
                    </div>
                    <img src="${club.image}" alt="${club.name} image"
                         class="rounded-lg shadow-md w-full max-w-[700px] transition hover:scale-105">
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

            function flyBack() {
                cardElement.style.transition = 'transform 0.5s ease-out';
                cardElement.style.transform = '';
                
                setTimeout(() => {
                    cardElement.style.transition = '';
                }, 500);
            }

            // Keyboard support
            document.addEventListener('keydown', handleKeyDown);
            document.getAnimations('arrow_')
            let dislike_element = document.getElementById('arrow_dislike')

            dislike_element.onclick = () => {
                flyOff('left');
            }


            let like_element = document.getElementById('arrow_like')

            like_element.onclick = () => {
                flyOff('right');
            }
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

        // function downloadResults() {
        //     const finalRecommendations = calculateFinalResults(state);
        //     alert(`Results have been processed! Your top club is: ${finalRecommendations[0]?.name || 'None'}`);
        //     console.log('Results to be saved:', {
        //         userInfo: state.questionnaire,
        //         recommendations: finalRecommendations
        //     });
        // }

        // Show Detailed Club Description
        // After applying for the 'one club'
        function showClubDetailModal(clubInfo) {
            document.getElementById('modal-club-name').innerText = clubInfo.name;
            document.getElementById('modal-club-req').innerText = clubInfo.threshold;
            document.getElementById('modal-club-qr').src = clubInfo.qrCode;
            document.getElementById('modal-club-act').innerText = clubInfo.activities;
            document.getElementById('modal-club-feed').innerText = clubInfo.testimonials;

            document.getElementById('club-detail-modal').classList.remove('hidden');       

            document.body.classList.add('overflow-hidden');
        }
        
        // Close Button in Club Detail Modal
        function closeClubDetailModal() {
            const closeBtn = document.getElementById('club-detail-close-btn');
            const modal = document.getElementById('club-detail-modal');

            if (closeBtn && modal) {
                closeBtn.addEventListener('click', () => {
                    modal.classList.add('hidden');
                    document.body.classList.remove('overflow-hidden');
                });
            }
        }

        // Skip Club Selection
        function SkipModal() {
            const skipBtn = document.getElementById('club-skip-btn');
            const modal = document.getElementById('skip-modal');

            skipBtn.addEventListener('click', () => {
                modal.classList.remove('hidden');
                document.body.classList.add('overflow-hidden');
            })

            // Leave then Restart
            const leaveBtn = document.getElementById("skip-close-btn");

            leaveBtn.addEventListener('click', () => {
                modal.classList.add('hidden');
                document.getElementById('results-modal').classList.add('hidden');
                document.body.classList.remove('overflow-hidden');
                restartApp()
            })

        }
        

        document.addEventListener('DOMContentLoaded', () => {
            modalHandler = createModalHandler(state, { updateActionButtons });
            setupViewAllSidebar();
            closeClubDetailModal();
            SkipModal();

            initializeEventListeners({
                startQuestionnaire,
                startCardSession,
                finishSession,
                restartApp,
                showListModal: modalHandler.show,
                hideListModal: modalHandler.hide
            });

        });