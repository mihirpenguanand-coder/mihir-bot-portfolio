/**
 * ========================================================================
 * MIHIR BOT PORTFOLIO - MASTER CONVERSATIONS & MULTI-AGENCY STRUCTURE
 * ========================================================================
 *
 * Agencies:
 * 1. BIG FAT MARKETING (Uncle Goons, DavaIndia, Podi, Bouee, Vedic Mother, Super Sandwich, TechOwl)
 *    Folder: BRANDING (Livestream, Yappers, Rameon, Sideburn, Desi Deli, Omoi)
 * 2. GEMIUS (Scitron, Gruner, Woop, Roongta Group [Roongta Developers, RAY Group], Samaara Tea)
 *
 * Hierarchy: AGENCY -> CLIENT / PROJECT (Folder) -> CHAT (Conversation)
 */

const PORTFOLIO_CONFIG = {
    "predefinedPromptReply":  {
                                  "finalLine":  "For this kind of work, you should probably hire a professional.",
                                  "body":  "You\u0027ve reached the free version of Mihir Bot.",
                                  "firstLine":  "I\u0027m sorry."
                              },
    "promptCards":  [
                        "WHAT ARE YOUR BIGGEST WEAKNESSES?",
                        "HOW DID YOU GET INTO COPY/CONTENT WRITING?",
                        "SALARY KITNA LOGEY?"
                    ],
    "disclaimer":  {
                       "highlight":  "But a combination of AI + human doesn\u0027t.",
                       "first":  "AI can make mistakes."
                   },
    "profile":  {
                    "modelBadge":  "Mihir Bot 4o",
                    "name":  "Mihir Bot 4o",
                    "avatar":  "M",
                    "role":  "The Destroyer of Words"
                },
    "concept":  {
                    "line2":  "SO, NOW I\u0027VE BECOME AN AI.",
                    "line3":  "THE DESTROYER OF WORDS.",
                    "line1":  "AI WAS GOING TO REPLACE WRITERS."
                },
    "introductionModal":  {
                              "title":  "MIHIR BOT",
                              "paragraphs":  [
                                                 "Hello.",
                                                 "I am Mihir Bot.",
                                                 "I started my career as a content writer about five years ago.",
                                                 "What am I now?",
                                                 "Well...",
                                                 "AI came along.",
                                                 "Everyone started saying AI was going to replace writers.",
                                                 "So I thought...",
                                                 "Why wait to be replaced when I can replace myself?",
                                                 "Uno reverse.\n¯\\_(ツ)_/¯",
                                                 "So, yes.",
                                                 "I am now an AI.",
                                                 "My primary function is generating concepts, ideas, scripts, names, taglines and whatever else humans ask me to make.",
                                                 "Go through my chats.\nYou\u0027ll understand what I\u0027ve been writing.",
                                                 "Sorry.\n\nGenerating."
                                             ],
                              "image":  "images/Introduction - mihir bot.png"
                          },
    "defaultChatId":  "ug-mothers-day"
};

const SIDEBAR_STRUCTURE = [
    {
        "title":  "BIG FAT MARKETING",
        "folders":  [
                        {
                            "name":  "BRANDING",
                            "id":  "folder-branding",
                            "clients":  [
                                            {
                                                "name":  "LIVESTREAM",
                                                "id":  "client-livestream",
                                                "chats":  [
                                                              {
                                                                  "id":  "livestream-cup",
                                                                  "title":  "Coffee Cup"
                                                              }
                                                          ]
                                            },
                                            {
                                                "name":  "YAPPERS",
                                                "id":  "client-yappers",
                                                "chats":  [
                                                              {
                                                                  "id":  "yappers-naming",
                                                                  "title":  "Introduction / Naming"
                                                              },
                                                              {
                                                                  "id":  "yappers-instore",
                                                                  "title":  "In-store Branding"
                                                              },
                                                              {
                                                                  "id":  "yappers-packaging",
                                                                  "title":  "Packaging"
                                                              }
                                                          ]
                                            },
                                            {
                                                "name":  "RAMEON",
                                                "id":  "client-rameon",
                                                "chats":  [
                                                              {
                                                                  "id":  "rameon-outdoor",
                                                                  "title":  "Storefront \u0026 Outdoor"
                                                              }
                                                          ]
                                            },
                                            {
                                                "name":  "SIDEBURN",
                                                "id":  "client-sideburn",
                                                "chats":  [
                                                              {
                                                                  "id":  "sideburn-naming",
                                                                  "title":  "Naming"
                                                              }
                                                          ]
                                            },
                                            {
                                                "name":  "DESI DELI",
                                                "id":  "client-desi-deli",
                                                "chats":  [
                                                              {
                                                                  "id":  "desi-deli-tagline",
                                                                  "title":  "Tagline"
                                                              }
                                                          ]
                                            },
                                            {
                                                "name":  "OMOI",
                                                "id":  "client-omoi",
                                                "chats":  [
                                                              {
                                                                  "id":  "omoi-branding",
                                                                  "title":  "Outdoor \u0026 Washroom Branding"
                                                              }
                                                          ]
                                            }
                                        ]
                        }
                    ],
        "id":  "big-fat-marketing",
        "type":  "agency",
        "clients":  [
                        {
                            "name":  "UNCLE GOONS",
                            "id":  "client-uncle-goons",
                            "chats":  [
                                          {
                                              "id":  "ug-mothers-day",
                                              "title":  "Mother\u0027s Day"
                                          },
                                          {
                                              "id":  "ug-1000-days",
                                              "title":  "1000 Days / 1 Million Brownies"
                                          },
                                          {
                                              "id":  "ug-ahmedabad",
                                              "title":  "Ahmedabad"
                                          }
                                      ]
                        },
                        {
                            "name":  "DAVAINDIA",
                            "id":  "client-davaindia",
                            "chats":  [
                                          {
                                              "id":  "di-hero-products",
                                              "title":  "Hero Products"
                                          },
                                          {
                                              "id":  "di-festivals",
                                              "title":  "Festivals"
                                          },
                                          {
                                              "id":  "di-msd",
                                              "title":  "MSD"
                                          },
                                          {
                                              "id":  "di-suniel-shetty",
                                              "title":  "Suniel Shetty"
                                          },
                                          {
                                              "id":  "di-app-ads",
                                              "title":  "App Ads"
                                          },
                                          {
                                              "id":  "di-newspaper-ads",
                                              "title":  "Newspaper Ads"
                                          },
                                          {
                                              "id":  "di-ipl",
                                              "title":  "IPL"
                                          }
                                      ]
                        },
                        {
                            "name":  "PODI",
                            "id":  "client-podi",
                            "chats":  [
                                          {
                                              "id":  "podi-ahmedabad",
                                              "title":  "Ahmedabad Launch"
                                          },
                                          {
                                              "id":  "podi-jamnagar",
                                              "title":  "Jamnagar Launch"
                                          }
                                      ]
                        },
                        {
                            "name":  "BOUEE",
                            "id":  "client-bouee",
                            "chats":  [
                                          {
                                              "id":  "bouee-shutter",
                                              "title":  "Coming Soon / Shutters"
                                          },
                                          {
                                              "id":  "bouee-launch",
                                              "title":  "Launch Plan"
                                          },
                                          {
                                              "id":  "bouee-packaging",
                                              "title":  "Packaging \u0026 Branding"
                                          }
                                      ]
                        },
                        {
                            "name":  "VEDIC MOTHER",
                            "id":  "client-vedic-mother",
                            "chats":  [
                                          {
                                              "id":  "vedic-mother",
                                              "title":  "Vedic Mother"
                                          }
                                      ]
                        },
                        {
                            "name":  "SUPER SANDWICH",
                            "id":  "client-super-sandwich",
                            "chats":  [
                                          {
                                              "id":  "ssc-squad",
                                              "title":  "Super Sandwich Squad"
                                          },
                                          {
                                              "id":  "ssc-tray-hiring",
                                              "title":  "Tray Paper & Hiring"
                                          },
                                          {
                                              "id":  "ssc-challan",
                                              "title":  "Challan Prank"
                                          },
                                          {
                                              "id":  "ssc-valentines",
                                              "title":  "Valentine's Day"
                                          },
                                          {
                                              "id":  "ssc-fevicol",
                                              "title":  "Fevicol Style Ads"
                                          }
                                      ]
                        },
                        {
                            "name":  "TECHOWL",
                            "id":  "client-techowl",
                            "chats":  [
                                          {
                                              "id":  "techowl-stay-owlert",
                                              "title":  "Stay Owlert & Way Forward"
                                          },
                                          {
                                              "id":  "techowl-cydes",
                                              "title":  "CYDES Malaysia"
                                          },
                                          {
                                              "id":  "techowl-gisec",
                                              "title":  "GISEC Dubai"
                                          }
                                      ]
                        }
                    ]
    },
    {
        "title":  "GEMIUS",
        "id":  "gemius",
        "type":  "agency",
        "clients":  [
                        {
                            "name":  "SCITRON",
                            "id":  "client-scitron",
                            "chats":  [
                                          {
                                              "id":  "scitron-nocheating",
                                              "title":  "#NoCheating"
                                          }
                                      ]
                        },
                        {
                            "name":  "GRUNER",
                            "id":  "client-gruner",
                            "chats":  [
                                          {
                                              "id":  "gruner-effortlessly-cool",
                                              "title":  "Effortlessly Cool"
                                          }
                                      ]
                        },
                        {
                            "name":  "WOOP",
                            "id":  "client-woop",
                            "chats":  [
                                          {
                                              "id":  "woop-funcation",
                                              "title":  "Woopee Card \u0026 Funcation"
                                          }
                                      ]
                        },
                        {
                            "name":  "ROONGTA GROUP",
                            "id":  "client-roongta-group",
                            "chats":  [
                                          {
                                              "id":  "roongta-developers",
                                              "title":  "ROONGTA DEVELOPERS"
                                          },
                                          {
                                              "id":  "ray-group",
                                              "title":  "RAY GROUP"
                                          }
                                      ]
                        },
                        {
                            "name":  "SAMAARA TEA",
                            "id":  "client-samaara-tea",
                            "chats":  [
                                          {
                                              "id":  "samaara-flavours",
                                              "title":  "Flavour Launch Ads"
                                          },
                                          {
                                              "id":  "samaara-shivratri",
                                              "title":  "Mahashivratri"
                                          },
                                          {
                                              "id":  "samaara-panchayat",
                                              "title":  "Panchayat Season 3"
                                          },
                                          {
                                              "id":  "samaara-ganpati",
                                              "title":  "Ganesh Visarjan"
                                          }
                                      ]
                        }
                    ]
    }
];

const CHATS_DATA = [
    {
        "agency":  "BIG FAT MARKETING",
        "title":  "Mother\u0027s Day",
        "conversation":  [
                             {
                                 "text":  "Uncle Goons is a dessert brand that started as a food truck and slowly became one of Surat’s most loved brownie brands. It’s a brand that likes to do things differently; it is rebellious, a little playful, and not your usual dessert brand. It has 90s nostalgia, American diner influence, loud colours, and quirky humour; the brand\u0027s personality is really loud \u0026 shows up everywhere.\n\nNow, for Mother\u0027s Day, they are launching a hamper, and we want to make a small ad film based on the habits of Indian mothers; the script needs to be very fun \u0026 the CTA should be around the hampers.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "Yes. The sweet spot for Uncle Goons is not “mothers are superheroes”. That’s been done to death.\n\nI’d make the film about those weirdly universal Indian-mom habits that are annoying, hilarious, and somehow become things you miss when they’re not around.\n\nAnd the hamper becomes the Mother’s Day peace offering/survival kit.\n\nHere is an ad film that aligns with the brief:",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "UNCLE GOONS - Mother\u0027s Day - UG - Mother\u0027s Day",
                                 "type":  "VIDEO",
                                 "src":  "videos/UG - Mother\u0027s Day.mp4"
                             },
                             {
                                 "text":  "This is good, but let’s make it more memorable; let’s give something mother’s actually care about…",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "How about a chappal 😛",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "text":  "Sounds crazy, but a chappal with food doesn’t sound good…",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "True, how about a belan?",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "UNCLE GOONS - Mother\u0027s Day - UG - Mother\u0027s day Belan  pack",
                                 "alt":  "UNCLE GOONS - Mother\u0027s Day Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/UG - Mother\u0027s day Belan  pack.jpg"
                             },
                             {
                                 "text":  "Perfect, works!\n\nTo conclude this quirky campaign, how about a quirky post too?",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "name it!",
                                 "type":  "YOU"
                             },
                             {
                                 "caption":  "UNCLE GOONS - Mother\u0027s Day - UG - Mother\u0027s day wish creative",
                                 "alt":  "UNCLE GOONS - Mother\u0027s Day Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/UG - Mother\u0027s day wish creative.png"
                             }
                         ],
        "id":  "ug-mothers-day",
        "client":  "UNCLE GOONS"
    },
    {
        "agency":  "BIG FAT MARKETING",
        "title":  "1000 Days",
        "conversation":  [
                             {
                                 "text":  "Okay, now the brand is completing 1000 days and wants to introduce an offer. I\u0027m thinking of making a fun little Bollywood parody video to promote the offer.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "Absolutely. And 1000 days is a great excuse for Uncle Goons to be ridiculously dramatic about something that really isn\u0027t that dramatic.\n\nI’d avoid making it a generic “1000 days of love” anniversary film. The Bollywood parody should be nostalgic, with the CTA of the offer so clear that people get mad for a free brownie.\n\nHow about we use the scene from the movie Lagey Raho Munna Bhai?\n\nHere is a fun concept for the same:",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "UNCLE GOONS - 1000 Days - 1000 Days of UG",
                                 "type":  "VIDEO",
                                 "src":  "videos/1000 Days of UG.mp4"
                             }
                         ],
        "id":  "ug-1000-days",
        "client":  "UNCLE GOONS"
    },
    {
        "agency":  "BIG FAT MARKETING",
        "title":  "1 Million Brownies",
        "conversation":  [
                             {
                                 "text":  "UG is now close to a pretty huge milestone: they are about to sell their 1 millionth brownie. Can you suggest a campaign for the same? We would also need a fun video to announce the same.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "Oh, 1 million brownies is much bigger than a normal “milestone” post. For Uncle Goons, I’d make the brownie itself the celebrity.\n\nThe campaign shouldn\u0027t feel like “Thank you for 1 million orders.” It should feel like Surat is about to witness something ridiculously important.\n\nHere is a campaign that can actually work:",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "size":  "PDF Document",
                                 "name":  "UG_Fudgiest_Brownie_Makers_Pitch.pdf",
                                 "type":  "FILE",
                                 "src":  "files/UG_Fudgiest_Brownie_Makers_Pitch.pdf"
                             },
                             {
                                 "text":  "The announcement film\n\nI\u0027d make this a fake podcast/motivational reel, but I’d take the real banter of the founders who happen to be siblings. But let\u0027s end on a high note — the 1 millionth brownie news can also be used to break a much larger news…",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "UNCLE GOONS - 1 Million Brownies - UG - 1 millionth Brownie",
                                 "type":  "VIDEO",
                                 "src":  "videos/UG - 1 millionth Brownie.mp4"
                             }
                         ],
        "id":  "ug-1-million-brownies",
        "client":  "UNCLE GOONS"
    },
    {
        "agency":  "BIG FAT MARKETING",
        "title":  "Ahmedabad",
        "conversation":  [
                             {
                                 "text":  "At the end of the 1 millionth video announcement, there was the announcement that we are launching our new store in Ahmedabad, which will be our biggest outlet (yet). I need a fun, visual-based ad film; the message should be around \"the party never stops at Uncle Goons.\" Try to incorporate the personality of the brand: nostalgic, energetic, and street style. The film should be quirky and fun.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "Yes. I’d make the Ahmedabad announcement feel less like “we opened a new outlet” and more like Uncle Goons has accidentally taken the party to another city.\n\nThe visual language can borrow from 90s music videos + street videos + old-school Bollywood, with quick cuts, freeze frames, whip pans, VHS glitches, exaggerated reactions and a soundtrack that keeps escalating.\n\nHere’s the best I can do:",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "UNCLE GOONS - Ahmedabad - UG - Disco Dancer",
                                 "type":  "VIDEO",
                                 "src":  "videos/UG - Disco Dancer.mp4"
                             }
                         ],
        "id":  "ug-ahmedabad",
        "client":  "UNCLE GOONS"
    },
    {
        "agency":  "BIG FAT MARKETING",
        "title":  "Hero Products",
        "conversation":  [
                             {
                                 "text":  "Davaindia is India\u0027s largest generic pharmacy retail brand with over 2000 stores across India, built around the idea “Har Ghar Ki Pharmacy.” The brand provides quality generic medicines and healthcare products at affordable prices. For communication, Davaindia should feel human, approachable, trustworthy, smart, contemporary, and distinctly Indian, rather than overly clinical or pharmaceutical. Beyond selling medicines, Davaindia aims to build a brand that actively contributes to society, promotes better health awareness, supports communities, and uses its platform to make a positive difference in people’s everyday lives.\n\nNow, we want to promote 3 of their hero products, which are their sunscreen, gummies, and their kola gel spray. Can you help me with a series of ads that follow the same theme and end up promoting these products?",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "Yes. And I think there’s a stronger way to approach this than making three separate product ads.\n\nThe common thread should be everyday Indian life — the little things people do, ignore, postpone, or misunderstand when it comes to health. Davaindia then enters naturally as the brand that says: taking care of yourself doesn’t have to be complicated.\n\nA campaign thought: “Ready Humesha.”\n\nHere are the ad films for the same:",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "DAVAINDIA - Hero Products - DI - Gummies",
                                 "type":  "VIDEO",
                                 "src":  "videos/DI - Gummies.mp4"
                             },
                             {
                                 "caption":  "DAVAINDIA - Hero Products - DI - Sunscreen",
                                 "type":  "VIDEO",
                                 "src":  "videos/DI - Sunscreen.mp4"
                             }
                         ],
        "id":  "di-hero-products",
        "client":  "DAVAINDIA"
    },
    {
        "agency":  "BIG FAT MARKETING",
        "title":  "Festivals",
        "conversation":  [
                             {
                                 "text":  "Davaindia has tasked us to create a film that captures the different festivals of India; it should cover 4 festivals: Ganesh Chaturthi, Diwali, Holi \u0026 Raksha Bandhan. The message of the ad should be that our, as in Davaindia\u0027s, first objective is to serve and help India.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "Yes. I’d avoid making this a conventional “India celebrates, Davaindia celebrates with you” film. That’s too expected.\n\nThe stronger thought is: India has many festivals, but Davaindia has one celebration — being there for India.\n\nThe film can travel through the four festivals, but the emotional thread is people helping people. Davaindia isn’t the hero of the celebrations; India is. Davaindia simply makes sure it can keep going.\n\nCore thought: “HumDhyaanRakhenge”\n\nHere is an ad film for the same:",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "DAVAINDIA - Festivals - DI - festivals AD",
                                 "type":  "VIDEO",
                                 "src":  "videos/DI - festivals AD.mp4"
                             }
                         ],
        "id":  "di-festivals",
        "client":  "DAVAINDIA"
    },
    {
        "agency":  "BIG FAT MARKETING",
        "title":  "MSD",
        "conversation":  [
                             {
                                 "text":  "Davaindia has onboarded 2 new brand ambassadors, one of whom is veteran actor Suneil Shetty, while the other is India\u0027s most successful captain - Mahendra Singh Dhoni. We need ad films for both of them.\n\nLet\u0027s start with MSD, the insight is simple: the best care is the care you don’t have to ask for. Show relatable everyday moments where someone anticipates a need and quietly takes care of it, with MSD’s calm, observant, dependable personality driving the idea. Keep it warm, clever and non-preachy, naturally connecting this instinctive care to Davaindia’s “Har Ghar Ki Pharmacy” promise.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "For MSD, I’d suggest a creative route that draws a parallel between his personality and Davaindia’s approach to care. He is known for being calm, dependable, observant and selfless — someone who quietly steps in when needed without making a big deal out of it. We can use these familiar traits to tell stories around care that is instinctive, understated and comes before you ask for it, making MSD feel like a natural embodiment of Davaindia’s everyday-care promise.\n\nThese are a couple of ad films we can use:",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "DAVAINDIA - MSD - MSD - DI 1",
                                 "type":  "VIDEO",
                                 "src":  "videos/MSD - DI 1.mp4"
                             },
                             {
                                 "caption":  "DAVAINDIA - MSD - MSD - DI 2",
                                 "type":  "VIDEO",
                                 "src":  "videos/MSD - DI 2.mp4"
                             }
                         ],
        "id":  "di-msd",
        "client":  "DAVAINDIA"
    },
    {
        "agency":  "BIG FAT MARKETING",
        "title":  "Suniel Shetty",
        "conversation":  [
                             {
                                 "text":  "For Suniel Shetty, the films can take a more quirky, dramatic route, built around a familiar Indian truth: medicine bills have always been an emotionally loaded subject in Indian households. Thanks to decades of Bollywood, we’ve almost been conditioned to associate medicines with hefty bills, worried faces, and dramatic family conversations. And, true to our nature, we tend to turn even a medicine bill into a scene. Let\u0027s flip that narrative with the idea that generic medicines from Davaindia make healthcare more affordable and accessible for everyone.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "Yes — this gives Suniel Shetty a very different territory from MSD. MSD can own quiet, instinctive care; Suniel can own the dramatic Indian reaction to medicine bills.\n\nThe comedy comes from treating a normal medicine bill like a full-blown Bollywood tragedy — and then Davaindia breaks the drama because generics make quality medicines affordable.\n\nHere are some ad films we can use:",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "DAVAINDIA - Suniel Shetty - SS - DI 1",
                                 "type":  "VIDEO",
                                 "src":  "videos/SS - DI 1.mp4"
                             },
                             {
                                 "caption":  "DAVAINDIA - Suniel Shetty - SS - DI 2",
                                 "type":  "VIDEO",
                                 "src":  "videos/SS - DI 2.mp4"
                             },
                             {
                                 "caption":  "DAVAINDIA - Suniel Shetty - SS - DI 3",
                                 "type":  "VIDEO",
                                 "src":  "videos/SS - DI 3.mp4"
                             }
                         ],
        "id":  "di-suniel-shetty",
        "client":  "DAVAINDIA"
    },
    {
        "agency":  "BIG FAT MARKETING",
        "title":  "App Ads",
        "conversation":  [
                             {
                                 "text":  "The communication needs to highlight two key benefits — medicines delivered in 60 minutes and, more importantly, how customers can save on their medicine bills.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "Sure. Here are a few fun ad routes that bring both benefits together.\n\nDavaindia — MSD",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "text":  "Davaindia has now appointed MS Dhoni as their brand ambassador and we need an ad film featuring him.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "Sure. Here’s an ad film that uses MSD’s personality and naturally connects it with Davaindia.\n\nDavaindia — Newspaper ads\n\nDavaIndia has a requirement for ads around their newly launched app.\n\nThe communication needs to highlight two key benefits — medicines delivered in 60 minutes and, more importantly, how customers can save on their medicine bills.",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "text":  "Sure. Here are a few fun ad routes that bring both benefits together.",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "DAVAINDIA - App Ads - APP promotion - 1",
                                 "alt":  "DAVAINDIA - App Ads Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/APP promotion - 1.jpeg"
                             },
                             {
                                 "caption":  "DAVAINDIA - App Ads - APP promotion - 2",
                                 "alt":  "DAVAINDIA - App Ads Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/APP promotion - 2.jpeg"
                             }
                         ],
        "id":  "di-app-ads",
        "client":  "DAVAINDIA"
    },
    {
        "agency":  "BIG FAT MARKETING",
        "title":  "Newspaper Ads",
        "conversation":  [
                             {
                                 "text":  "DavaIndia has now appointed MS Dhoni as their brand ambassador and we need a newspaper ad featuring him.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "Sure. Here’s a newspaper ad that uses MSD’s personality and naturally connects it with Davaindia.",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "DAVAINDIA - Newspaper Ads - MSD announcemnt - 1",
                                 "alt":  "DAVAINDIA - Newspaper Ads Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/MSD announcemnt - 1.jpeg"
                             }
                         ],
        "id":  "di-newspaper-ads",
        "client":  "DAVAINDIA"
    },
    {
        "agency":  "BIG FAT MARKETING",
        "title":  "IPL",
        "conversation":  [
                             {
                                 "text":  "The MS Dhoni ad film will go live during the IPL season. We now need a single-line communication to accompany it.\n\nSince MSD has such a huge fan following, the line should be something his fans naturally associate with him, culturally, the number seven, Thala for a reason, Captain Cool, anything that feels instantly recognisable.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "I’d make the line feel like an MSD reference first and a DavaIndia message second.\n\nMy pick:",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "DAVAINDIA - IPL - DI IPL SZN - 1",
                                 "alt":  "DAVAINDIA - IPL Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/DI IPL SZN - 1.jpeg"
                             },
                             {
                                 "caption":  "DAVAINDIA - IPL - DI IPL SZN - 2",
                                 "alt":  "DAVAINDIA - IPL Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/DI IPL SZN - 2.jpeg"
                             }
                         ],
        "id":  "di-ipl",
        "client":  "DAVAINDIA"
    },
    {
        "agency":  "BIG FAT MARKETING",
        "title":  "Ahmedabad Launch",
        "conversation":  [
                             {
                                 "text":  "Podi cafe is a fine dining traditional South Indian cafe that stays true to the food and culture of South India, unlike the many fusion places out there. The brand is built around warmth, authenticity, culture, and trust, with Amma as the face of the brand. They use fresh ingredients, focus strongly on sustainability, and aim to give you the feeling of being in South India the moment you enter the cafe. They’ve brought a lot of flavour not just to their food, but to their marketing too, making the brand feel very true to what Podi stands for.\n\nFor Podi, the communication should feel simple, warm, human and rooted. It should have personality and emotion without becoming overly poetic, fancy or commercial. The writing should feel like it comes from a brand that genuinely understands South Indian culture and has a story behind what it does.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "Got it. Podi is a traditional South Indian fine dining brand that stays authentic to the food, culture, and flavours of South India.",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "text":  "Podi is growing and is now opening its second outlet, this time in another city. When they first launched, the ad film became a huge hit. Even the film we made for the launch of their tiffins was a killer. So, the bar is already pretty high. For Ahmedabad, we need an ad film that can outclass what we’ve done before. The expectations are high!",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "Got it. And I think we’ve got a killer concept… I think we can play with the idea of a Kathakali performer landing in Ahmedabad. He moves through the city, exploring its landmarks, trying the food Ahmedabad is known for, and experiencing the city’s culture. Basically, we see Ahmedabad through the eyes of someone who has come straight from South India. And at last, his journey leads him to Podi.\n\nSomething like…",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "PODI - Ahmedabad Launch - Podi - Ahm",
                                 "type":  "VIDEO",
                                 "src":  "videos/Podi - Ahm.mp4"
                             },
                             {
                                 "text":  "That was a killer ad film with an amazing response. I think we definitely fulfilled our mission! Moving on, Podi is now getting listed on Swiggy \u0026 Zomato and wants to replicate that response. They’ve asked us to come up with another film. What do you think we can do?",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "How about we bring the Kathakali performer back? It’ll create instant recall from the previous film, while taking the idea forward. This time, the message could be simple: whether you come to Podi or Podi comes to you, the culture, flavours, and experience stay the same.",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "PODI - Ahmedabad Launch - Podi - Zomato \u0026 Swiggy",
                                 "type":  "VIDEO",
                                 "src":  "videos/Podi - Zomato \u0026 Swiggy.mp4"
                             }
                         ],
        "id":  "podi-ahmedabad",
        "client":  "PODI"
    },
    {
        "agency":  "BIG FAT MARKETING",
        "title":  "Jamnagar Launch",
        "conversation":  [
                             {
                                 "text":  "Podi is now coming up with their third branch, and surprise surprise… based on the brand we’ve built, Vantara Hospitality has actually reached out to them for a franchise!\n\nHelp with a launch plan for the same!",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "Certainly, here is a launch plan for Podi Jamnagar",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "size":  "PDF Document",
                                 "name":  "Podi - Jamnagar .pdf",
                                 "type":  "FILE",
                                 "src":  "Documents/Podi - Jamnagar .pdf"
                             },
                             {
                                 "text":  "Good, the plan is approved. I\u0027m a little confused; should we go for another ad? Since it is a relatively small outlet, more like a QSR",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "Great, but you are right; let’s not put all our eggs (or shall I say idlis) in one basket.\n\nLet’s make a series of ads, maybe something like creating a character who has entered the city, and rather than adapting to the city, he re-adapts the city.\n\nWe can call the campaign: ‘aavo cho na tame ’. Here are the videos that can be made!",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "PODI - Jamnagar Launch - JAMNAGAR - 1",
                                 "type":  "VIDEO",
                                 "src":  "videos/JAMNAGAR - 1.mp4"
                             },
                             {
                                 "caption":  "PODI - Jamnagar Launch - Jamnagar - 2",
                                 "type":  "VIDEO",
                                 "src":  "videos/Jamnagar - 2.mp4"
                             },
                             {
                                 "caption":  "PODI - Jamnagar Launch - Jamnagar - 3",
                                 "type":  "VIDEO",
                                 "src":  "videos/Jamnagar - 3.mp4"
                             },
                             {
                                 "caption":  "PODI - Jamnagar Launch - Jamnagar - 4",
                                 "type":  "VIDEO",
                                 "src":  "videos/Jamnagar - 4.mp4"
                             },
                             {
                                 "caption":  "PODI - Jamnagar Launch - Jamnagar - 5",
                                 "type":  "VIDEO",
                                 "src":  "videos/Jamnagar - 5.mp4"
                             },
                             {
                                 "text":  "Good, we can conclude this with a good founder-led video on why we chose Jamnagar, and to continue the excitement, we will fill it with good graphical posts.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "Perfect, here is a founder-led video for the same!",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "PODI - Jamnagar Launch - Jamanagar- Founder Video",
                                 "type":  "VIDEO",
                                 "src":  "videos/Jamanagar- Founder Video.mp4"
                             },
                             {
                                 "text":  "Now, we have an HNI launch party for the outlet. In the past, we’ve noticed that people act very strangely around unfamiliar people. We need an icebreaker activity for the same… what do you think we should do here?",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "How about we place a large, beautiful traditional kuthuvilakku (a large diya) at the centre of the outlet. Instead of only 2–3 people lighting it, everyone gets a chance to be part of the lighting.\n\nEach guest lights a small diya or wick from the central flame.",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "PODI - Jamnagar Launch - Podi Jamnagar - Offline Activity",
                                 "alt":  "PODI - Jamnagar Launch Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Podi Jamnagar - Offline Activity.jpeg"
                             }
                         ],
        "id":  "podi-jamnagar",
        "client":  "PODI"
    },
    {
        "agency":  "BIG FAT MARKETING",
        "title":  "Coming Soon / Shutters",
        "conversation":  [
                             {
                                 "text":  "Introduction",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "Hey, I have a new project called Bouee; it is not just another cafe. It is Surat’s first experiential coffee roastery. While they will have a cafe as part of the space, their primary focus is coffee itself: sourcing beans from different parts of the world, roasting them in-house, and eventually supplying coffee through both B2B and B2C channels.\n\nThe bigger goal is to first make Bouee a name people in Surat know and associate with good coffee, before pushing the roastery and coffee supply side of the business.\n\nFor now, the space is still being set up. Until the opening, I want to use the shutters outside as a communication opportunity. Instead of a typical “Coming Soon” message, I want something fun and unexpected; it will be written as if a graffiti artist has left a message on the shutter.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "Sure, I can do that! Bouee is a coffee roaster, correct? How about we connect it to the other kind of roasting? And recently, only the latent controversy took place, so how about the line:\n\n‘The last time someone roasted this good, it got banned’",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "BOUEE - Coming Soon / Shutters - Bouee Shutter 1",
                                 "type":  "VIDEO",
                                 "src":  "videos/Bouee Shutter 1.jpeg"
                             },
                             {
                                 "caption":  "BOUEE - Coming Soon / Shutters - Bouee Shutter 2",
                                 "type":  "VIDEO",
                                 "src":  "videos/Bouee Shutter 2.mp4"
                             }
                         ],
        "id":  "bouee-shutter",
        "client":  "BOUEE"
    },
    {
        "agency":  "BIG FAT MARKETING",
        "title":  "Launch Plan",
        "conversation":  [
                             {
                                 "text":  "Perfect, now the interiors are almost ready. What do we do to make Bouee a household name for coffee?",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "On the basis of my research, I have 1 strong insight.\n\nThe difference between Bouee and all the other cafes is simple: the coffee sourcing. All other cafes get their beans sourced from a single distributor who gives them the ready product. Whereas Bouee roasts its own beans, and to show this, how about we shoot their videos in Chikmagalur, one of India’s best coffee estates?",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "text":  "Sure, that works; just make sure the content is not all educative, we need a sense of quirk in our brand as well, and don’t forget we are also a cafe.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "Sure, in that case… let’s roll out the campaign in 3 phases: the pre-launch, the launch, and the post-launch.\n\nThe pre-launch can be a story about a lost treasure, aka great coffee\n\nThe launch can be about how they got the lost treasure at Chikmagalaru \u0026 got it to Surat.\n\nAnd the post-launch can be about promoting the cafe side of the business, like they got this treasure but are very new to it, so they will make mistakes, but learn from them and move forward.",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "text":  "Sounds great, let’s get started!",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "(worked a great amount of time)\n\nHere are the pre-launch plan assets:",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "BOUEE - Launch Plan - Bouee Pre 1",
                                 "type":  "VIDEO",
                                 "src":  "videos/Bouee Pre 1.mp4"
                             },
                             {
                                 "caption":  "BOUEE - Launch Plan - Bouee Pre 1",
                                 "type":  "VIDEO",
                                 "src":  "videos/Bouee Pre 1.mp4"
                             },
                             {
                                 "caption":  "BOUEE - Launch Plan - Bouee Pre 2",
                                 "type":  "VIDEO",
                                 "src":  "videos/Bouee Pre 2.mp4"
                             },
                             {
                                 "caption":  "BOUEE - Launch Plan - Bouee Pre 3",
                                 "alt":  "BOUEE - Launch Plan Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Bouee Pre 3.jpeg"
                             },
                             {
                                 "text":  "Good, now give the launch plan; we have to start soon!",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "Here are the launch plan assets:",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "BOUEE - Launch Plan - Bouee Launch 1",
                                 "type":  "VIDEO",
                                 "src":  "videos/Bouee Launch 1.mp4"
                             },
                             {
                                 "caption":  "BOUEE - Launch Plan - Bouee Launch 2",
                                 "type":  "VIDEO",
                                 "src":  "videos/Bouee Launch 2.mp4"
                             },
                             {
                                 "caption":  "BOUEE - Launch Plan - Bouee Launch 3",
                                 "type":  "VIDEO",
                                 "src":  "videos/Bouee launch 3.mp4"
                             },
                             {
                                 "text":  "Now the mistake week plan:",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "Sure, here you go!",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "BOUEE - Launch Plan - Bouee Mistakes Week 1",
                                 "type":  "VIDEO",
                                 "src":  "videos/Bouee Mistakes Week 1.mp4"
                             },
                             {
                                 "caption":  "BOUEE - Launch Plan - Bouee Mistakes Week 2",
                                 "type":  "VIDEO",
                                 "src":  "videos/Bouee Mistakes Week 2.mp4"
                             },
                             {
                                 "caption":  "BOUEE - Launch Plan - Bouee Mistakes Week 3",
                                 "alt":  "BOUEE - Launch Plan Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Bouee Mistakes Week 3.jpeg"
                             }
                         ],
        "id":  "bouee-launch",
        "client":  "BOUEE"
    },
    {
        "agency":  "BIG FAT MARKETING",
        "title":  "Packaging \u0026 Branding",
        "conversation":  [
                             {
                                 "text":  "The brand has been going well; now I would require some help with the packaging. Help me with the following\n\nCoffee Cup Content\n\nPizza Box Content\n\nBurger Box Content\n\nTissue Paper Content\n\nCoaster Content\n\nCarry Bag Content\n\nRemember, we want to establish a maturely quirky brand language; think how SRK would joke. That way…",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "Here is all your packaging content:",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "BOUEE - Packaging \u0026 Branding - Bouee Branding  (1)",
                                 "alt":  "BOUEE - Packaging \u0026 Branding Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Bouee Branding  (1).jpeg"
                             },
                             {
                                 "caption":  "BOUEE - Packaging \u0026 Branding - Bouee Branding  (2)",
                                 "alt":  "BOUEE - Packaging \u0026 Branding Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Bouee Branding  (2).jpeg"
                             },
                             {
                                 "caption":  "BOUEE - Packaging \u0026 Branding - Bouee Branding  (3)",
                                 "alt":  "BOUEE - Packaging \u0026 Branding Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Bouee Branding  (3).jpeg"
                             },
                             {
                                 "caption":  "BOUEE - Packaging \u0026 Branding - Bouee Branding  (4)",
                                 "alt":  "BOUEE - Packaging \u0026 Branding Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Bouee Branding  (4).jpeg"
                             },
                             {
                                 "caption":  "BOUEE - Packaging \u0026 Branding - Bouee Branding  (5)",
                                 "alt":  "BOUEE - Packaging \u0026 Branding Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Bouee Branding  (5).jpeg"
                             },
                             {
                                 "caption":  "BOUEE - Packaging \u0026 Branding - Bouee Branding  (6)",
                                 "alt":  "BOUEE - Packaging \u0026 Branding Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Bouee Branding  (6).jpeg"
                             }
                         ],
        "id":  "bouee-packaging",
        "client":  "BOUEE"
    },
    {
        "agency":  "BIG FAT MARKETING",
        "title":  "Vedic Mother",
        "conversation":  [
                             {
                                 "text":  "Vedic Mother is a brand started by a grandmother and daughter, an Ayurvedic brand aiming to position itself as a household lifestyle brand with their range of different products such as Homemade Chyavanprash, Homemade Sitopaladi Churna, Homemade Gulkand, Raw Honey, Gut Cleanser, and Gir Cow A2 Ghee.\n\nNow, to amplify their name and positioning, they are conducting a farmers market in Surat where they are the organisers and, as a bonus, they are also going to be displaying their products in a stall.\n\nNow I want a traditional, authentic, and earthy name for the farmers market.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "I think the name should feel Indian, earthy, and authentic without sounding like a wellness festival.\n\nMy pick would be:\n\nMAATI",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "text":  "Okay, now that we have the name, what do you think should be the way forward for the brand?",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "I think Vedic Mother shouldn\u0027t just behave like an Ayurvedic products brand.\n\nThe biggest strength they have is the grandmother-daughter story and the knowledge that gets passed down at home.\n\nSo the brand should own the idea of traditional wisdom made relevant for today\u0027s home, here is a way forward for the same:",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "size":  "PDF Document",
                                 "name":  "Vedic Mother 2024 _ Way forward.pdf",
                                 "type":  "FILE",
                                 "src":  "Documents/Vedic Mother 2024 _ Way forward.pdf"
                             },
                             {
                                 "text":  "The way forward is good, but for starters, can we create an IP around how the granddaughter tells the world about her Dadi\u0027s little secrets, but in a problem-solution format?",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "Absolutely.\n\nI\u0027d call it:\n\nDadi Ke Nushke\n\nThe granddaughter brings up an everyday problem and then reveals the little nushka her Dadi has always used to solve it.\n\nIt gives us a simple recurring format where we can talk about health, habits, and Vedic Mother\u0027s products without making every piece of content feel like an ad.",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "VEDIC MOTHER - Vedic Mother - DKN  (1)",
                                 "type":  "VIDEO",
                                 "src":  "videos/DKN  (1).mp4"
                             },
                             {
                                 "caption":  "VEDIC MOTHER - Vedic Mother - DKN  (2)",
                                 "type":  "VIDEO",
                                 "src":  "videos/DKN  (2).mp4"
                             },
                             {
                                 "caption":  "VEDIC MOTHER - Vedic Mother - DKN  (3)",
                                 "type":  "VIDEO",
                                 "src":  "videos/DKN  (3).mp4"
                             },
                             {
                                 "text":  "Now I want to create a series of product cards for their hero products. Each product will have a short, clever line on the front, followed by a “turn the page” kind of curiosity hook to reveal the product\u0027s story and benefits.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "I think we can make each card feel like a little riddle about the product rather than a conventional product communication.\n\nThe line should make you curious enough to turn the card over and find out what we\u0027re talking about.\n\nHere are a few directions for the same:",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "size":  "PDF Document",
                                 "name":  "Product Cards_Final-2.pdf",
                                 "type":  "FILE",
                                 "src":  "Documents/Product Cards_Final-2.pdf"
                             },
                             {
                                 "text":  "Now I need a Women\u0027s Day campaign. Give me a plan.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "I\u0027d avoid the usual “women are superheroes” route.\n\nInstead, let\u0027s talk about the women behind Vedic Mother and tell their stories: what they do, who they take care of, and the little things that make them who they are. We’ll call the campaign: Hands that heal!\n\nHere is a plan for the same:",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "size":  "PDF Document",
                                 "name":  "_Vedic Mother _ Women\u0027s day pitch.pdf",
                                 "type":  "FILE",
                                 "src":  "Documents/_Vedic Mother _ Women\u0027s day pitch.pdf"
                             },
                             {
                                 "text":  "The budget didn\u0027t get approved.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "That doesn\u0027t really matter.\n\nLet\u0027s feature the female staff at Vedic Mother and tell their stories. With 0 BUDGET!",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "VEDIC MOTHER - Vedic Mother - Hands That Heal  (1)",
                                 "type":  "VIDEO",
                                 "src":  "videos/Hands That Heal  (1).mp4"
                             },
                             {
                                 "caption":  "VEDIC MOTHER - Vedic Mother - Hands That Heal  (2)",
                                 "type":  "VIDEO",
                                 "src":  "videos/Hands That Heal  (2).mp4"
                             },
                             {
                                 "caption":  "VEDIC MOTHER - Vedic Mother - Hands That Heal  (3)",
                                 "type":  "VIDEO",
                                 "src":  "videos/Hands That Heal  (3).mp4"
                             },
                             {
                                 "caption":  "VEDIC MOTHER - Vedic Mother - Hands That Heal  (4)",
                                 "type":  "VIDEO",
                                 "src":  "videos/Hands That Heal  (4).mp4"
                             },
                             {
                                 "text":  "Now for Mother\u0027s Day, I need a campaign for Vedic Mother. It should somehow involve all the products, but I don\u0027t want it to be just another Mother\u0027s Day offer or greeting.\n\nThe same day is also Vedic Mother\u0027s anniversary, so I\u0027d like the campaign to somehow connect the two occasions.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "I think we can use the products themselves as Mother\u0027s Day gifts.\n\nEach product can carry a little message from the child to their mother: something that says, you\u0027ve spent your life taking care of us; now take care of yourself.\n\nAnd since it\u0027s also Vedic Mother\u0027s anniversary, we can launch something around Dadi Ke Nushke on the same day.\n\nWhat if we turn the IP into a physical book.. a collection of all the little nushke and wisdom passed down by Dadi?",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "text":  "Sounds great! Let’s do it!",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "Here you go!\n\nMother’s Day assets:",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "size":  "PDF Document",
                                 "name":  "md (1).pdf",
                                 "type":  "FILE",
                                 "src":  "Documents/md (1).pdf"
                             },
                             {
                                 "size":  "PDF Document",
                                 "name":  "md (2).pdf",
                                 "type":  "FILE",
                                 "src":  "Documents/md (2).pdf"
                             },
                             {
                                 "size":  "PDF Document",
                                 "name":  "md (3).pdf",
                                 "type":  "FILE",
                                 "src":  "Documents/md (3).pdf"
                             },
                             {
                                 "text":  "Anniversary Assets:",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "VEDIC MOTHER - Vedic Mother - DKN Book Video",
                                 "type":  "VIDEO",
                                 "src":  "videos/DKN Book Video.mp4"
                             },
                             {
                                 "size":  "PDF Document",
                                 "name":  "DKN Book.pdf",
                                 "type":  "FILE",
                                 "src":  "Documents/DKN Book.pdf"
                             }
                         ],
        "id":  "vedic-mother",
        "client":  "VEDIC MOTHER"
    },
    {
        "agency":  "BIG FAT MARKETING",
        "title":  "Super Sandwich Squad",
        "conversation":  [
                             {
                                 "text":  "Super Sandwich is a QSR built around one simple thought: Make Sandwiches Super Again.\n\nThe brand wanted to make the sandwich feel like a proper meal, generously filled, flavourful, convenient, and worth the money. They were also looking at expanding to 20+ outlets in the first year, so the bigger challenge was to create a distinct identity that could make the brand memorable.\n\nThe first task is packaging content, but I also want a line that can eventually become part of the brand\u0027s identity.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "I think we shouldn\u0027t just talk about sandwiches being tasty or loaded.\n\nThe word super itself should become the hero. So for every piece of communication, we’ll be associating everything we do with SUPER!",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "text":  "I like the super thought, but I think we can take it much further. Can we do something that can become part of the brand\u0027s identity?",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "Absolutely.\n\nWhat if the sandwich wasn\u0027t just the hero, but was actually invented by superheroes?\n\nWe can create four ordinary-looking superhumans, each responsible for one part of the perfect sandwich:\n\nBreadman\n\nButter Boy\n\nCaptain Chutney\n\nBhajji Bhau\n\nAnd together, they are the people who invented:\n\nSUPER SANDWICH.",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "SUPER SANDWICH - Super Sandwich Squad - SSC Super Sandwich Squad",
                                 "alt":  "SUPER SANDWICH - Super Sandwich Squad Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/SSC Super Sandwich Squad.jpg"
                             },
                             {
                                 "caption":  "SUPER SANDWICH - Super Sandwich Squad - SSC Character video",
                                 "type":  "VIDEO",
                                 "src":  "videos/SSC Character video.mp4"
                             },
                             {
                                 "size":  "PDF Document",
                                 "name":  "Comic Book _ The Origin of the Super Squad _ SSC.pdf",
                                 "type":  "FILE",
                                 "src":  "Documents/Comic Book _ The Origin of the Super Squad _ SSC.pdf"
                             }
                         ],
        "id":  "ssc-squad",
        "client":  "SUPER SANDWICH"
    },
    {
        "agency":  "BIG FAT MARKETING",
        "title":  "Tray Paper \u0026 Hiring",
        "conversation":  [
                             {
                                 "text":  "This is great, but how do we roll this out?",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "I feel we should not make the brand all about this; we won’t be able to attract a lot of pull for this. At this moment, we can push it, and as people become more familiar with the brand, we will run the story with it. Can we start with a character story on the paper tray, maybe?\n\nThis is what I was thinking:",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "size":  "PDF Document",
                                 "name":  "SSCTray paper 14.5 X 10.5 in.pdf",
                                 "type":  "FILE",
                                 "src":  "Documents/SSCTray paper 14.5 X 10.5 in.pdf"
                             },
                             {
                                 "text":  "Okay, now that we have the universe, we also need to hire people, but I don\u0027t want it to look like a conventional “we\u0027re hiring” post. Can we do something fun with the staff itself?",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "I think we can actually make the fact that they\u0027re too busy working the joke.\n\nWe start with the idea that we\u0027re trying to shoot a hiring film with the Super Sandwich team, but every time we try to get someone in front of the camera, they\u0027re busy making sandwiches.\n\nSo the entire film becomes us failing to make the film\n\nHere is what I was thinking:",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "SUPER SANDWICH - Tray Paper \u0026 Hiring - SSC Hiring Film",
                                 "type":  "VIDEO",
                                 "src":  "videos/SSC Hiring Film.mp4"
                             }
                         ],
        "id":  "ssc-tray-hiring",
        "client":  "SUPER SANDWICH"
    },
    {
        "agency":  "BIG FAT MARKETING",
        "title":  "Challan Prank",
        "conversation":  [
                             {
                                 "text":  "I want to do a campaign for Super Sandwich that gets people of Surat, like we are getting Gen Z to interact with the brand, but I need oldies as well…",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "What if we make people think they\u0027ve received a traffic challan?\n\nWe can put a newspaper (only the oldies read it :p) insert that looks like an actual challan notice. Everything about it makes you think you\u0027ve been fined by the SMC, until you reach the penalty.\n\nExcept the penalty isn\u0027t money.\n\nONE FREE SUPER SANDWICH.\n\nIt becomes a little prank, a coupon, and a great PR activity at the same time.",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "SUPER SANDWICH - Challan Prank - CONFIDENTIAL LETTER-07",
                                 "alt":  "SUPER SANDWICH - Challan Prank Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/CONFIDENTIAL LETTER-07.jpg"
                             },
                             {
                                 "text":  "For Valentine\u0027s Day, I want to do something around exes. Something people can actually participate in, rather than just another Valentine\u0027s Day post.",
                                 "type":  "CHATGPT"
                             }
                         ],
        "id":  "ssc-challan",
        "client":  "SUPER SANDWICH"
    },
    {
        "agency":  "BIG FAT MARKETING",
        "title":  "Valentine\u0027s Day",
        "conversation":  [
                             {
                                 "text":  "Let\u0027s give people a reason to publicly get over their ex.\n\nWe put up a board where people can write their ex\u0027s name followed by:\n\nBEWAFA HAI.\n\nAnd once they do it, they get a free sandwich.",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "SUPER SANDWICH - Valentine\u0027s Day - SSC Valentines  (2)",
                                 "type":  "VIDEO",
                                 "src":  "videos/SSC Valentines  (2).mp4"
                             },
                             {
                                 "caption":  "SUPER SANDWICH - Valentine\u0027s Day - SSC Valentines  (1)",
                                 "type":  "VIDEO",
                                 "src":  "videos/SSC Valentines  (1).mp4"
                             }
                         ],
        "id":  "ssc-valentines",
        "client":  "SUPER SANDWICH"
    },
    {
        "agency":  "BIG FAT MARKETING",
        "title":  "Fevicol Style Ads",
        "conversation":  [
                             {
                                 "text":  "Now I want to make a series of ad films. I want them to have that Fevicol kind of storytelling where you don\u0027t understand what\u0027s happening until the very end.\n\nThe film should keep building curiosity and only reveal that it\u0027s actually about Super Sandwich at the end.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "I think we should completely commit to it. With no branding or anything remotely related to sandwiches, just a strange situation that keeps getting more and more ridiculous until the final reveal.\n\nThe campaign thought:\n\nTapkegi Laar, Jab Sandwich Ho Supaaaar.\n\nHere are the scripts:",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "size":  "PDF Document",
                                 "name":  "SSC AD.pdf",
                                 "type":  "FILE",
                                 "src":  "Documents/SSC AD.pdf"
                             },
                             {
                                 "text":  "These never actually went live because the client left us before the films could be released :/",
                                 "type":  "YOU"
                             }
                         ],
        "id":  "ssc-fevicol",
        "client":  "SUPER SANDWICH"
    },
    {
        "agency":  "BIG FAT MARKETING",
        "title":  "Stay Owlert \u0026 Way Forward",
        "conversation":  [
                             {
                                 "text":  "TechOwl is a cybersecurity brand operating in a category where most brands are hidden in the shadows.\n\nCybersecurity isn\u0027t exactly a category people remember. Most brands communicate in a very corporate, technical way, and unless you\u0027re actively looking for a cybersecurity solution, there isn\u0027t much reason to remember one brand over another.\n\nTechOwl ultimately wants to become a household name for cybersecurity, but that\u0027s a dream for a later stage.\n\nFor now, I think the first step is to rise above the shadows and shine where the brand already has a reason to be seen: the B2B space.\n\nI want a brand communication that feels different from the usual cybersecurity language. Something that almost feels foreign to the category.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "A simple message cybersecurity brands give is: Stay alert; how about we change it to:\n\nSTAY OWLERT\n\nA play on alert that gives the brand a communication of its own without sounding like another cybersecurity warning.",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "text":  "I like it. The communication was well received, and I think this can become the anchor communication for the brand.\n\nNow, help me with a way forward for the brand",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "The communication was well received, and I think Stay Owlert can become the anchor communication for TechOwl.\n\nNow let\u0027s start thinking about the way forward.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "I think the next step is to stop treating TechOwl like just another cybersecurity company and start treating it like a brand people can recognise even before they need its services.\n\nThe long-term goal is still to make TechOwl a household name in cybersecurity and that\u0027s not going to happen overnight, so the idea is to build a larger brand ecosystem around it. Here is the way forward:",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "size":  "PDF Document",
                                 "name":  "TECHOWL _ WAY FORWARD (1).pdf",
                                 "type":  "FILE",
                                 "src":  "Documents/TECHOWL _ WAY FORWARD (1).pdf"
                             }
                         ],
        "id":  "techowl-stay-owlert",
        "client":  "TECHOWL"
    },
    {
        "agency":  "BIG FAT MARKETING",
        "title":  "CYDES Malaysia",
        "conversation":  [
                             {
                                 "text":  "TechOwl is participating at CYDES, a cybersecurity summit in Malaysia.\n\nI want to pitch some ideas for how we can use the event to create conversations, attract the right audience and make TechOwl stand out at the summit.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "I wouldn\u0027t confine TechOwl to its stall.\n\nAt a cybersecurity summit, everyone is fighting for attention inside the same few square feet. Instead, let\u0027s make TechOwl a part of the entire CYDES experience.\n\nGo where the people are, create moments they don\u0027t expect, give them something to interact with, and ultimately become a small part of the memories they take back from the event.\n\nLet\u0027s make TechOwl impossible to miss, even outside the stall.\n\nHere are the ideas I\u0027d pitch:",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "size":  "PDF Document",
                                 "name":  "Cydes (1).pdf",
                                 "type":  "FILE",
                                 "src":  "Documents/Cydes (1).pdf"
                             },
                             {
                                 "text":  "Some ideas, such as the tissue paper, teacup, apron, kite, and water bottle, were approved…",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "Great! Here are the assets for the same!",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "TECHOWL - CYDES Malaysia - Gysec (1)",
                                 "alt":  "TECHOWL - CYDES Malaysia Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Gysec (1).jpg"
                             },
                             {
                                 "caption":  "TECHOWL - CYDES Malaysia - Gysec (2)",
                                 "alt":  "TECHOWL - CYDES Malaysia Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Gysec (2).jpeg"
                             },
                             {
                                 "caption":  "TECHOWL - CYDES Malaysia - Gysec (3)",
                                 "alt":  "TECHOWL - CYDES Malaysia Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Gysec (3).jpeg"
                             },
                             {
                                 "caption":  "TECHOWL - CYDES Malaysia - Gysec (4)",
                                 "alt":  "TECHOWL - CYDES Malaysia Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Gysec (4).jpeg"
                             },
                             {
                                 "caption":  "TECHOWL - CYDES Malaysia - Gysec (4)",
                                 "alt":  "TECHOWL - CYDES Malaysia Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Gysec (4).jpeg"
                             }
                         ],
        "id":  "techowl-cydes",
        "client":  "TECHOWL"
    },
    {
        "agency":  "BIG FAT MARKETING",
        "title":  "GISEC Dubai",
        "conversation":  [
                             {
                                 "text":  "The campaign worked really well.\n\nWe ended up generating around 370 leads at CYDES.\n\nNow we\u0027re heading to GISEC in Dubai, which is an even bigger opportunity.\n\nI want to replicate what worked in Malaysia, but I don\u0027t want it to feel like we\u0027re simply copying the same activation.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "370 leads is a pretty good reason not to start from scratch.\n\nI\u0027d take the strongest-performing ideas from CYDES and carry them into GISEC, but make them bigger, sharper, and more interactive.\n\nHere are the ideas I\u0027d take to GISEC:",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "size":  "PDF Document",
                                 "name":  "GISEC 2026 _ TechOwl .pdf",
                                 "type":  "FILE",
                                 "src":  "Documents/GISEC 2026 _ TechOwl .pdf"
                             }
                         ],
        "id":  "techowl-gisec",
        "client":  "TECHOWL"
    },
    {
        "agency":  "BRANDING",
        "title":  "Coffee Cup",
        "conversation":  [
                             {
                                 "text":  "A brand called Livestream Coffee, which is a very popular cafe in Surat, needs a line for the back of their coffee cup. I don’t need anything generic like bean there, done that; I need something that connects with the person drinking coffee, because it enables them to click a picture, because there are more than 200 cafes in Surat selling the same coffee, but if we get to be braggy enough, people will choose Livestream.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "This cup of coffee won\u0027t change your life. But it\u0027ll make today easier.",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "text":  "That\u0027s a great line.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "Glad you liked it. Let me know how the response was.",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "text":  "Have a look at it yourself.",
                                 "type":  "YOU"
                             },
                             {
                                 "caption":  "LIVESTREAM - Coffee Cup - livestream-cup",
                                 "alt":  "LIVESTREAM - Coffee Cup Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/livestream-cup.jpg"
                             }
                         ],
        "id":  "livestream-cup",
        "client":  "LIVESTREAM"
    },
    {
        "agency":  "BRANDING",
        "title":  "Introduction / Naming",
        "conversation":  [
                             {
                                 "text":  "A new cafe is coming up that is targeted towards a young, primarily Gen Z audience. It\u0027s a quick-service format with easy food, a fun atmosphere and a space where people can come, hang out and enjoy themselves.\n\nThe brand isn\u0027t trying to be premium or sophisticated. It is meant to feel young, cute, playful and approachable, with a slightly quirky personality.\n\nFor the naming, the founders don\u0027t want a typical descriptive cafe name. They want something short, single-word and memorable, almost like names such as Veronica\u0027s or Dumbo\u0027s.\n\nThere is also a naming constraint: because of Vastu, the name should ideally start with Y, K or V.\n\nCan you suggest a name that fits the personality?",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "I have one:\n\nShort, playful, and easy to remember. It feels like a name that can belong to a place, rather than a name that\u0027s trying to explain what the place sells.",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "size":  "PDF Document",
                                 "name":  "YAPPERS FINAL LOGO.pdf",
                                 "type":  "FILE",
                                 "src":  "Documents/YAPPERS FINAL LOGO.pdf"
                             }
                         ],
        "id":  "yappers-naming",
        "client":  "YAPPERS"
    },
    {
        "agency":  "BRANDING",
        "title":  "In-store Branding",
        "conversation":  [
                             {
                                 "text":  "Yappers it is.\n\nNow we need some fun lines for the in-store branding. The brand is quirky, so I want the communication to feel the same.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "Let\u0027s make the cafe talk.\n\nHere are some lines:",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "YAPPERS - In-store Branding - Yappers Store Branding (1)",
                                 "alt":  "YAPPERS - In-store Branding Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Yappers Store Branding (1).png"
                             },
                             {
                                 "caption":  "YAPPERS - In-store Branding - Yappers Store Branding (2)",
                                 "alt":  "YAPPERS - In-store Branding Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Yappers Store Branding (2).png"
                             },
                             {
                                 "caption":  "YAPPERS - In-store Branding - Yappers Store Branding (1)",
                                 "alt":  "YAPPERS - In-store Branding Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Yappers Store Branding (1).png"
                             },
                             {
                                 "caption":  "YAPPERS - In-store Branding - Yappers Store Branding (1)",
                                 "alt":  "YAPPERS - In-store Branding Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Yappers Store Branding (1).avif"
                             }
                         ],
        "id":  "yappers-instore",
        "client":  "YAPPERS"
    },
    {
        "agency":  "BRANDING",
        "title":  "Packaging",
        "conversation":  [
                             {
                                 "text":  "Now let\u0027s do the packaging \u0026 the menu. I want it to carry the same personality.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "Here are some directions:",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "YAPPERS - Packaging - Yappers Packaging  (1)",
                                 "alt":  "YAPPERS - Packaging Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Yappers Packaging  (1).jpeg"
                             },
                             {
                                 "caption":  "YAPPERS - Packaging - Yappers Packaging  (2)",
                                 "alt":  "YAPPERS - Packaging Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Yappers Packaging  (2).jpeg"
                             },
                             {
                                 "caption":  "YAPPERS - Packaging - Yappers Packaging  (3)",
                                 "alt":  "YAPPERS - Packaging Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Yappers Packaging  (3).jpeg"
                             },
                             {
                                 "caption":  "YAPPERS - Packaging - Yappers Packaging  (4)",
                                 "alt":  "YAPPERS - Packaging Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Yappers Packaging  (4).jpeg"
                             },
                             {
                                 "caption":  "YAPPERS - Packaging - Yappers Packaging  (5)",
                                 "alt":  "YAPPERS - Packaging Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Yappers Packaging  (5).jpeg"
                             },
                             {
                                 "caption":  "YAPPERS - Packaging - Yappers Packaging  (6)",
                                 "alt":  "YAPPERS - Packaging Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Yappers Packaging  (6).jpeg"
                             }
                         ],
        "id":  "yappers-packaging",
        "client":  "YAPPERS"
    },
    {
        "agency":  "BRANDING",
        "title":  "Storefront \u0026 Outdoor",
        "conversation":  [
                             {
                                 "text":  "Rameon is Surat\u0027s first DIY ramen place, where customers get to build their own ramen.\n\nThe brand has a very quirky personality and wants to bring a South Korean vibe into the experience; almost like a South Korean sister had an Indian brother.\n\nWe want the brand to feel playful, unexpected, and culturally inspired without becoming a stereotypical Korean restaurant.\n\nThe first task is the exterior. The outlet is located in a busy area, so we need the storefront to immediately grab attention and make people curious about what Rameon is.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "I think the exterior should feel like Rameon is having a conversation with everyone walking past it.\n\nLet\u0027s use the Korean-meets-Indian personality to create lines that make people stop, smile and wonder what is happening inside.\n\nHere are some exterior directions:",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "RAMEON - Storefront \u0026 Outdoor - Rameon Outdoor  (1)",
                                 "alt":  "RAMEON - Storefront \u0026 Outdoor Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Rameon Outdoor  (1).jpeg"
                             },
                             {
                                 "caption":  "RAMEON - Storefront \u0026 Outdoor - Rameon Outdoor  (2)",
                                 "alt":  "RAMEON - Storefront \u0026 Outdoor Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Rameon Outdoor  (2).jpeg"
                             },
                             {
                                 "caption":  "RAMEON - Storefront \u0026 Outdoor - Rameon Outdoor  (3)",
                                 "alt":  "RAMEON - Storefront \u0026 Outdoor Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Rameon Outdoor  (3).jpeg"
                             }
                         ],
        "id":  "rameon-outdoor",
        "client":  "RAMEON"
    },
    {
        "agency":  "BRANDING",
        "title":  "Naming",
        "conversation":  [
                             {
                                 "text":  "A rebellious perfume brand has entered the chat.\n\nThey want to become the Blue Orange of perfumes: a brand that feels culturally relevant, attracts Gen Z. The first task at hand is the name that itself becomes part of the personality.\n\nThey were initially leaning towards Still After, but it felt a little too safe and predictable for the kind of brand we wanted to build.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "I think we should go for something that doesn\u0027t immediately sound like a perfume brand.\n\nSomething with attitude. Something you can build a personality around.\n\nHere are the names I\u0027d shortlist:",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "size":  "PDF Document",
                                 "name":  "Sideburn Name Options.pdf",
                                 "type":  "FILE",
                                 "src":  "Documents/Sideburn Name Options.pdf"
                             },
                             {
                                 "text":  "We went with:",
                                 "type":  "YOU"
                             },
                             {
                                 "size":  "PDF Document",
                                 "name":  "TECHOWL _ WAY FORWARD (1).pdf",
                                 "type":  "FILE",
                                 "src":  "Documents/TECHOWL _ WAY FORWARD (1).pdf"
                             }
                         ],
        "id":  "sideburn-naming",
        "client":  "SIDEBURN"
    },
    {
        "agency":  "BRANDING",
        "title":  "Tagline",
        "conversation":  [
                             {
                                 "text":  "Desi Deli is an Indian deli in Dubai, inspired by the delis you find across the world. The idea is to take Indian flavours and culture to a global audience through a modern, contemporary format.\n\nIt\u0027s not meant to feel like a traditional Indian restaurant. We want the brand to feel culturally rooted but globally relevant.\n\nThe first task is to find a tagline that can capture this idea of bringing a little more India into everyday life.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "I think we should keep it simple, playful, and DESI. How about:\n\nAdd Masala to Your Life",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "text":  "I like it, and so did the client!",
                                 "type":  "YOU"
                             }
                         ],
        "id":  "desi-deli-tagline",
        "client":  "DESI DELI"
    },
    {
        "agency":  "BRANDING",
        "title":  "Outdoor \u0026 Washroom Branding",
        "conversation":  [
                             {
                                 "text":  "Omoi is a cafe built around the idea of a thought turning into an experience. The brand is witty, rebellious, self-aware, and playful, with a premium but understated personality.\n\nThey wanted the brand experience to feel equally quirky across every touchpoint, so the task was to create rebellious outdoor branding, quirky washroom branding, and fun brand assets across the cafe",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "I think OMOI should feel like it has an opinion everywhere you look.\n\nNot just on the menu or the walls: even the places you don\u0027t expect a cafe brand to speak.\n\nHere are the directions:",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "OMOI - Outdoor \u0026 Washroom Branding - Omoi (1)",
                                 "alt":  "OMOI - Outdoor \u0026 Washroom Branding Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Omoi (1).jpeg"
                             },
                             {
                                 "caption":  "OMOI - Outdoor \u0026 Washroom Branding - Omoi (2)",
                                 "alt":  "OMOI - Outdoor \u0026 Washroom Branding Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Omoi (2).jpeg"
                             },
                             {
                                 "caption":  "OMOI - Outdoor \u0026 Washroom Branding - Omoi (3)",
                                 "alt":  "OMOI - Outdoor \u0026 Washroom Branding Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Omoi (3).jpeg"
                             },
                             {
                                 "caption":  "OMOI - Outdoor \u0026 Washroom Branding - Omoi (4)",
                                 "alt":  "OMOI - Outdoor \u0026 Washroom Branding Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Omoi (4).jpeg"
                             },
                             {
                                 "caption":  "OMOI - Outdoor \u0026 Washroom Branding - Omoi (6)",
                                 "alt":  "OMOI - Outdoor \u0026 Washroom Branding Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Omoi (6).jpeg"
                             },
                             {
                                 "caption":  "OMOI - Outdoor \u0026 Washroom Branding - Omoi (5)",
                                 "alt":  "OMOI - Outdoor \u0026 Washroom Branding Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Omoi (5).jpeg"
                             }
                         ],
        "id":  "omoi-branding",
        "client":  "OMOI"
    },
    {
        "agency":  "GEMIUS",
        "title":  "#NoCheating",
        "conversation":  [
                             {
                                 "text":  "For a nutrition brand, Scitron, we need a campaign around the rising prices of raw whey. The prices are increasing because of the rising cost of raw materials, and naturally, this means our products will also become more expensive.\n\nWe are a brand that is completely transparent about everything we do, so the same principle should be followed here.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "Then let\u0027s not hide behind the price increase.\n\nIf Scitron has always been transparent with its customers, this is another opportunity to prove it.\n\nWe can openly tell people why the prices are going up, while making it clear that we\u0027re not going to cut corners, reduce quality or give them less protein for their money.\n\nThe communication could revolve around:\n\nPrices may go up.\n\nOur standards won\u0027t.",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "SCITRON - #NoCheating - No Cheating - Scitron (3)",
                                 "type":  "VIDEO",
                                 "src":  "videos/No Cheating - Scitron (3).mp4"
                             },
                             {
                                 "caption":  "SCITRON - #NoCheating - No Cheating - Scitron (2)",
                                 "type":  "VIDEO",
                                 "src":  "videos/No Cheating - Scitron (2).mp4"
                             },
                             {
                                 "caption":  "SCITRON - #NoCheating - No Cheating - Scitron (1)",
                                 "type":  "VIDEO",
                                 "src":  "videos/No Cheating - Scitron (1).mp4"
                             }
                         ],
        "id":  "scitron-nocheating",
        "client":  "SCITRON"
    },
    {
        "agency":  "GEMIUS",
        "title":  "Effortlessly Cool",
        "conversation":  [
                             {
                                 "text":  "Gruner is entering a crowded flavoured coffee market, with a lot of brands already competing for Gen Z\u0027s attention.\n\nWe need to find a positioning that can make Gruner feel different and give the brand a personality that Gen Z can actually relate to.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "The challenge isn\u0027t just making coffee cool. It\u0027s making Gruner feel like the coffee that already belongs in their world.\n\nI think the thought could be:\n\nEffortlessly Cool.\n\nGen Z puts a lot of effort into looking like they don\u0027t care. Coffee, on the other hand, has always had that naturally cool association.\n\nSo let\u0027s bring the two together. We can build it through ad films, influencer collaborations and social content. Here is what I was thinking…",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "GRUNER - Effortlessly Cool - Gruner ad (1)",
                                 "type":  "VIDEO",
                                 "src":  "videos/Gruner ad (1).mp4"
                             },
                             {
                                 "caption":  "GRUNER - Effortlessly Cool - Gruner ad (2)",
                                 "type":  "VIDEO",
                                 "src":  "videos/Gruner ad (2).mp4"
                             },
                             {
                                 "caption":  "GRUNER - Effortlessly Cool - Gruner Ad (3)",
                                 "type":  "VIDEO",
                                 "src":  "videos/Gruner Ad (3).mp4"
                             },
                             {
                                 "caption":  "GRUNER - Effortlessly Cool - Gruner Effortlessly Cool",
                                 "alt":  "GRUNER - Effortlessly Cool Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Gruner Effortlessly Cool.png"
                             }
                         ],
        "id":  "gruner-effortlessly-cool",
        "client":  "GRUNER"
    },
    {
        "agency":  "GEMIUS",
        "title":  "Woopee Card \u0026 Funcation",
        "conversation":  [
                             {
                                 "text":  "Woop is an entertainment and gaming destination in Surat, with multiple game zones competing for attention during the summer vacations.\n\nWe needed a campaign that could drive footfall, but the bigger challenge was to create an offer that felt exciting enough to make people choose Woop over the many other options available in the city.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "How about we launch an offer that\u0027s almost impossible to ignore?\n\nWe give people ₹300 worth of balance for just ₹30 and put it on a card that they can buy online and use at Woop.\n\nLet\u0027s call it the:\n\nWOOPEE CARD\n\nAnd since we\u0027re doing this for summer, why call it a vacation when it\u0027s really a:\n\nFUNCATION.\n\nA summer vacation, but with a lot more fun.",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "text":  "Perfect. Let\u0027s build the campaign around Funcation and make the Woopee Card the hero of the offer.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "Let\u0027s take it across social, influencers, digital ads, WhatsApp and even a jingle so the idea follows people everywhere.",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "WOOP - Woopee Card \u0026 Funcation - Woop Funcaction",
                                 "alt":  "WOOP - Woopee Card \u0026 Funcation Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Woop Funcaction.png"
                             },
                             {
                                 "text":  "We had a little problem.\n\nThe offer drove such overwhelming footfall that we had to pull it midway because the crowds and the ruckus at Woop became impossible to manage.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "That\u0027s a sweet problem to have. 😌",
                                 "type":  "CHATGPT"
                             }
                         ],
        "id":  "woop-funcation",
        "client":  "WOOP"
    },
    {
        "agency":  "GEMIUS",
        "title":  "ROONGTA DEVELOPERS",
        "conversation":  [
                             {
                                 "text":  "Roongta Developers is a real estate developer with multiple residential projects; now we have a task in hand…\n\nFor Roongta Estella, their latest residential project, we need standees for visitors to the sample flat and a hoarding to mount outside the property.\n\nFor Roongta Icon, the tallest building in the market area, we need communication that reflects that distinction.",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "Here you go!",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "ROONGTA GROUP - ROONGTA DEVELOPERS - Roongta Branding",
                                 "alt":  "ROONGTA GROUP - ROONGTA DEVELOPERS Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Roongta Branding.png"
                             }
                         ],
        "id":  "roongta-developers",
        "client":  "ROONGTA GROUP"
    },
    {
        "agency":  "GEMIUS",
        "title":  "RAY GROUP",
        "conversation":  [
                             {
                                 "text":  "Roongta Group has primarily been known as a real estate and construction company, but they are now expanding into multiple sectors and want to establish themselves as a conglomerate.\n\nThey need a new name that is just 3 letters, follows their Vastu requirements, and has a numerology total of 8.\n\nRefer the sheet below for more details…",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "What if we build the name around the relationship between the group and the people it serves?\n\nRoongta And You.\n\nIt\u0027s short, easy to remember, and gives the group a meaning beyond just the family name.\n\nAnd most importantly, it fits the Vastu and numerology requirements.",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "ROONGTA GROUP - RAY GROUP - Ray Group",
                                 "alt":  "ROONGTA GROUP - RAY GROUP Visual",
                                 "type":  "IMAGE",
                                 "src":  "images/Ray Group.png"
                             }
                         ],
        "id":  "ray-group",
        "client":  "ROONGTA GROUP"
    },
    {
        "agency":  "GEMIUS",
        "title":  "Flavour Launch Ads",
        "conversation":  [
                             {
                                 "text":  "Samaara Tea is a relatively new D2C tea brand backed by a family that has been in the tea manufacturing business for generations.\n\nThey currently have two distinctive blends: Saff Zaff, a saffron-infused tea, and Gulabo, a rose tea… both of which have already found popularity in the Middle East.\n\nNow we need to introduce these flavours to a wider audience through Meta, with ad that make the products feel as interesting as they actually are",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "I have an idea… wait, here you go:",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "SAMAARA TEA - Flavour Launch Ads - Samaara Ads (1)",
                                 "type":  "VIDEO",
                                 "src":  "videos/Samaara Ads (1).mp4"
                             },
                             {
                                 "caption":  "SAMAARA TEA - Flavour Launch Ads - Samaara Ads (2)",
                                 "type":  "VIDEO",
                                 "src":  "videos/Samaara Ads (2).mp4"
                             }
                         ],
        "id":  "samaara-flavours",
        "client":  "SAMAARA TEA"
    },
    {
        "agency":  "GEMIUS",
        "title":  "Mahashivratri",
        "conversation":  [
                             {
                                 "text":  "Okay, great. Also, Mahashivratri is coming… will you be able to help me with a good festival creative?",
                                 "type":  "YOU"
                             },
                             {
                                 "text":  "r wish is my command!",
                                 "type":  "YOU"
                             },
                             {
                                 "caption":  "SAMAARA TEA - Mahashivratri - Samaara Shivratri",
                                 "type":  "VIDEO",
                                 "src":  "videos/Samaara Shivratri.mp4"
                             },
                             {
                                 "text":  "Great, Panchayat season 3 just released; need a good moment marketing concept for the same:",
                                 "type":  "YOU"
                             }
                         ],
        "id":  "samaara-shivratri",
        "client":  "SAMAARA TEA"
    },
    {
        "agency":  "GEMIUS",
        "title":  "Panchayat Season 3",
        "conversation":  [
                             {
                                 "text":  "I feel this will go viral (it did)",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "SAMAARA TEA - Panchayat Season 3 - Panchayat Moment Marketing",
                                 "type":  "VIDEO",
                                 "src":  "videos/Panchayat Moment Marketing.mp4"
                             },
                             {
                                 "text":  "How about something emotional for Ganesh Visarjan?",
                                 "type":  "YOU"
                             }
                         ],
        "id":  "samaara-panchayat",
        "client":  "SAMAARA TEA"
    },
    {
        "agency":  "GEMIUS",
        "title":  "Ganesh Visarjan",
        "conversation":  [
                             {
                                 "text":  "I had a concept in mind; what about this:",
                                 "type":  "CHATGPT"
                             },
                             {
                                 "caption":  "SAMAARA TEA - Ganesh Visarjan - Samaara Ganpati",
                                 "type":  "VIDEO",
                                 "src":  "videos/Samaara Ganpati.mp4"
                             }
                         ],
        "id":  "samaara-ganpati",
        "client":  "SAMAARA TEA"
    }
];