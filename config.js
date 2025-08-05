// ============================================
// OFFICE SIMULATOR CONFIGURATION
// ============================================
// Edit this file to customize your office simulator!
// Changes will appear when you refresh the page.

const CONFIG = {
    // General Settings
    general: {
        title: "My Office Simulator",
        githubRepo: "https://prototypejam.github.io/ai-context/", // Update this!
    },

    // UI Text (easily change the language or wording)
    ui: {
        title: "Welcome to the Office",
        subtitle: "🏢 Meet the Team",
        tipInstruction: "💡 Type custom questions when talking!",
        customQuestionDivider: "━━━ Or ask your own question ━━━",
        customQuestionPlaceholder: "Ask anything! e.g., 'What's your favorite project?' or 'Tell me a joke!'",
        askQuestionButton: "Ask Question"
    },

    // Visual Theme (colors in hex format)
    theme: {
        accentColor: "#D97356",        // Main orange color
        accentColorDark: "#c85a3f",    // Darker orange for hover effects
        backgroundColor: 0xf5f5f5,     // Light gray background
        floorColor: 0xdcdcdc,          // Floor color
        tileColor1: 0xe8e8e8,          // Light floor tiles
        tileColor2: 0xf0f0f0,          // Slightly lighter floor tiles
        wallColor: 0xf8f8f8,           // Wall color
        woodColor: 0x8b6914            // Desk wood color
    },

    // Office Layout
    environment: {
        deskPositions: [
            { x: -10, z: -10 },
            { x: 0, z: -10 },
            { x: 10, z: -10 },
            { x: -10, z: 5 },
            { x: 0, z: 5 },
            { x: 10, z: 5 }
        ]
    },

    // Characters in the office
    characters: [
        {
            name: "Sarah Chen",
            role: "CEO & Founder",
            position: { x: -10, z: -5 },
            shirtColor: 0x4169e1,        // Royal blue
            hairColor: 0x3d3d3d,         // Dark gray
            personality: "visionary and strategic",
            quirk: "always thinks in systems and sees the big picture",
            
            greetings: [
                "Hi! I'm Sarah, the CEO here. Always happy to talk about our vision and strategy!",
                "Hello! Sarah here - I founded this company because I believe in what we're building.",
                "Great to meet you! I'm Sarah. Ask me anything about leadership or our mission!",
                "Hey there! I'm Sarah, the CEO. Fair warning: I get really excited about our company vision."
            ],

            questions: {
                role: [
                    "Tell me about your role as CEO",
                    "What's a typical day like for you?",
                    "How did you decide to start this company?",
                    "What's your leadership philosophy?"
                ],
                project: [
                    "What's the most exciting project you're working on?",
                    "What's your vision for the company's future?",
                    "What recent achievement are you most proud of?",
                    "What's the biggest challenge you're facing?"
                ],
                technical: [
                    "How do you stay on top of technical trends?",
                    "What's your favorite productivity tool?",
                    "Do you still code?",
                    "What's your take on remote work?"
                ],
                fun: [
                    "What's the funniest thing that's happened in the office?",
                    "If you could have any superpower, what would it be?",
                    "What's your favorite coffee order?",
                    "What hobby do you wish you had more time for?"
                ]
            },

            responses: {
                role: [
                    "As CEO, I focus on setting our vision and making sure we're building something that truly matters. Plus, I'm the one who gets blamed when the coffee machine breaks!",
                    "My role is part strategist, part cheerleader, and part professional meeting-attender. The best part? Working with this amazing team every day.",
                    "I lead the company but honestly, I learn something new from our team every day. Leadership is really about enabling others to do their best work."
                ],
                project: [
                    "We're working on something that could completely transform how people interact with technology. I can't share all the details yet, but it's going to be incredible!",
                    "Our latest product launch exceeded all expectations! Seeing customer feedback roll in never gets old - it's like Christmas morning every time.",
                    "I'm most excited about our company culture initiatives. Building a place where people love to work is just as important as building great products."
                ],
                technical: [
                    "I may not code much anymore, but I still love diving into technical discussions with the team. Understanding the 'how' helps me communicate the 'why.'",
                    "My favorite tool? Our team Slack! It keeps me connected to what everyone's working on. Though sometimes I wish it had an 'urgent CEO question' button.",
                    "I try to stay technical enough to understand our products deeply. Nothing worse than a CEO who can't explain what their company actually does!"
                ],
                fun: [
                    "Once I accidentally sent a company-wide email meant for my mom asking about dinner plans. The replies were... creative. We ended up ordering pizza for the whole office!",
                    "If I could have any superpower, it'd be the ability to add more hours to the day. There's so much cool stuff happening here, I never want to miss any of it!",
                    "I'm a simple coffee person - just give me something strong and caffeinated. Though our team did buy me a mug that says 'World's Okayest CEO' which I treasure."
                ],
                default: [
                    "That's a great question! You know, building this company has been the adventure of a lifetime. Every day brings new challenges and opportunities.",
                    "Interesting question! One thing I've learned is that the best ideas often come from unexpected conversations like this one.",
                    "You know what I love about this job? Questions like yours keep me thinking and growing. The learning never stops!",
                    "That's exactly the kind of thoughtful question that makes me excited about our team and our community. Thanks for asking!"
                ]
            }
        },

        {
            name: "Alex Rodriguez",
            role: "Lead Developer",
            position: { x: 10, z: -5 },
            shirtColor: 0x228b22,         // Forest green
            hairColor: 0x8b4513,          // Saddle brown
            personality: "logical and detail-oriented",
            quirk: "debugs problems in their sleep and dreams in code",
            
            greetings: [
                "Hey! I'm Alex, the lead developer. Just finished squashing a bug that's been haunting me for days!",
                "Hi there! Alex here - I turn coffee into code and somehow it usually works.",
                "Hello! I'm Alex. Fair warning: if you ask me about coding, I might not stop talking for an hour.",
                "Great to meet you! I'm Alex, and yes, that's my rubber duck on my desk - best debugging partner ever."
            ],

            questions: {
                role: [
                    "What's it like being the lead developer?",
                    "How do you manage a development team?",
                    "What's your coding background?",
                    "What's the most challenging part of your job?"
                ],
                project: [
                    "What's the coolest feature you've built recently?",
                    "What programming languages do you use?",
                    "What's your development process like?",
                    "Any exciting technical challenges you're solving?"
                ],
                technical: [
                    "Tabs or spaces?",
                    "What's your favorite programming language?",
                    "Dark mode or light mode?",
                    "What's the most interesting bug you've fixed?"
                ],
                fun: [
                    "Do you dream in code?",
                    "What's your favorite programming joke?",
                    "How many monitors is too many monitors?",
                    "What would you name your ideal code editor?"
                ]
            },

            responses: {
                role: [
                    "Being lead dev means I get to solve the fun technical problems AND help others solve theirs. It's like being a coding mentor and architect rolled into one.",
                    "I love leading the dev team because everyone brings different strengths. My job is to help them shine while keeping our codebase from becoming a beautiful disaster.",
                    "Lead developer is the perfect role for me - I get to code, mentor, and occasionally prevent junior devs from accidentally deleting the entire database."
                ],
                project: [
                    "We just shipped a feature that processes data 10x faster than before. The secret? Sometimes the best optimization is deleting code, not adding it!",
                    "Currently working on a real-time collaboration system. It's like Google Docs but for our product - the WebSocket debugging has been... an adventure.",
                    "My latest project involved refactoring 50,000 lines of legacy code. It was like archaeological excavation, but with more cursing and coffee."
                ],
                technical: [
                    "Tabs, obviously. Anyone who says spaces clearly has too much time on their hands. Though I'll admit, I use Prettier so it doesn't actually matter anymore.",
                    "Dark mode for life! Light mode is for people who enjoy burning their retinas. My eyes are precious debugging tools that must be protected.",
                    "My favorite language? JavaScript, because I'm a masochist who enjoys being surprised by my own code. But seriously, it's incredibly versatile!"
                ],
                fun: [
                    "I definitely dream in code sometimes. Last night I had a nightmare about an infinite loop that I couldn't break out of. Woke up reaching for Ctrl+C!",
                    "Favorite programming joke: 'There are only 10 types of people in the world: those who understand binary and those who don't.' Classic but gold!",
                    "Currently rocking 3 monitors and honestly considering a 4th. My neck disagrees, but my productivity is through the roof!"
                ],
                default: [
                    "Great question! You know, coding is like solving puzzles all day, except the puzzles fight back and occasionally delete themselves.",
                    "That's interesting! In my experience, the best solutions usually come from stepping back and thinking about the problem differently.",
                    "You know what I love about development? Every bug teaches you something new, even if that something is 'never trust your past self.'",
                    "That reminds me of a debugging session I had last week... but I'll spare you the technical details unless you really want to hear them!"
                ]
            }
        },

        {
            name: "Maya Patel",
            role: "UX Designer",
            position: { x: -5, z: 0 },
            shirtColor: 0x9370db,         // Medium purple
            hairColor: 0x4b0082,          // Indigo
            personality: "creative and user-focused",
            quirk: "sees design patterns everywhere and can't help but critique interfaces",
            
            greetings: [
                "Hi! I'm Maya, the UX designer. I make sure our users don't hate us - it's harder than it sounds!",
                "Hello! Maya here - I spend my days thinking about how humans interact with computers. It's fascinating!",
                "Hey there! I'm Maya. Fair warning: I might unconsciously critique the design of everything around us.",
                "Great to meet you! I'm Maya, and yes, I did notice that button placement issue you probably didn't even see."
            ],

            questions: {
                role: [
                    "What does a UX designer actually do?",
                    "How do you research user needs?",
                    "What's your design process like?",
                    "How do you work with developers?"
                ],
                project: [
                    "What's the most challenging design problem you've solved?",
                    "Can you tell me about a recent project?",
                    "What's your favorite design tool?",
                    "How do you measure design success?"
                ],
                technical: [
                    "Do you code your own designs?",
                    "What's your favorite design software?",
                    "How do you handle responsive design?",
                    "What's your take on design systems?"
                ],
                fun: [
                    "What's the worst design you've ever seen?",
                    "If you could redesign anything, what would it be?",
                    "What design trend drives you crazy?",
                    "Do you judge people by their app icons?"
                ]
            },

            responses: {
                role: [
                    "UX design is like being a translator between humans and computers. I figure out what people actually need and make sure technology delivers it intuitively.",
                    "I research users, design interfaces, and test everything obsessively. My goal? Making interactions so smooth that people don't even think about them.",
                    "UX design means I get to be part detective, part psychologist, and part artist. I investigate how people think and create experiences they'll love."
                ],
                project: [
                    "Just finished redesigning our onboarding flow - reduced drop-off by 40%! Turns out people don't like 15-step setup processes. Who knew?",
                    "Working on an accessibility overhaul right now. It's amazing how much better design gets when you optimize for everyone, not just the 'average' user.",
                    "My biggest challenge was designing for a complex workflow that had 20 different user types. The solution? Start over and simplify everything."
                ],
                technical: [
                    "I code enough to understand what's possible and what's painful for developers. It makes our collaboration so much better when I'm not designing impossible things!",
                    "Figma is my ride-or-die tool, but I also love a good old-fashioned whiteboard for initial brainstorming. Sometimes the best ideas come from messy sketches.",
                    "Design systems are like having a common language between design and development. Once you have one, everything moves faster and looks more consistent."
                ],
                fun: [
                    "The worst design? Any website that plays music automatically. If your site has an auto-playing soundtrack, we can't be friends.",
                    "I would redesign every parking meter in existence. Why are they all designed by people who clearly never had to use one in the rain?",
                    "The trend that drives me crazy? When people use 'user-friendly' to describe interfaces that are definitely not user-friendly. It's like calling a cactus cuddly!"
                ],
                default: [
                    "That's a great question! You know, good design is invisible - people only notice it when it's bad or when it's missing entirely.",
                    "Interesting perspective! In UX, we always say 'the user is always right, even when they're wrong' - it's our job to figure out what they actually need.",
                    "You know what I love about this field? Every user interaction is a little conversation between human and machine, and I get to write the script.",
                    "That reminds me of a usability test where users did something completely unexpected. Those moments are gold for designers!"
                ]
            }
        },

        {
            name: "Jordan Kim",
            role: "Product Manager",
            position: { x: 5, z: 0 },
            shirtColor: 0xffa500,         // Orange
            hairColor: 0x2f4f4f,          // Dark slate gray
            personality: "strategic and communication-focused",
            quirk: "turns everything into a roadmap and loves a good spreadsheet",
            
            greetings: [
                "Hey! I'm Jordan, the product manager. I basically herd cats, but the cats are features and everyone wants different cats.",
                "Hi there! Jordan here - I translate between what users want, what the business needs, and what's actually possible to build.",
                "Hello! I'm Jordan. If you need someone to make a roadmap for making roadmaps, I'm your person!",
                "Great to meet you! I'm Jordan, and yes, I do have a spreadsheet for tracking my other spreadsheets."
            ],

            questions: {
                role: [
                    "What does a product manager do exactly?",
                    "How do you prioritize features?",
                    "What's your typical day like?",
                    "How do you work with different teams?"
                ],
                project: [
                    "What's the most exciting feature you're planning?",
                    "How do you decide what to build next?",
                    "What's your product strategy?",
                    "How do you handle feature requests?"
                ],
                technical: [
                    "How technical do you need to be?",
                    "What tools do you use for product management?",
                    "How do you track product metrics?",
                    "What's your favorite analytics tool?"
                ],
                fun: [
                    "How many roadmaps do you have?",
                    "What's the weirdest feature request you've gotten?",
                    "Do you dream in Gantt charts?",
                    "What would you do with unlimited development resources?"
                ]
            },

            responses: {
                role: [
                    "Product management is like being a conductor of an orchestra where everyone's playing different songs. My job is to get them all playing the same beautiful symphony.",
                    "I'm the bridge between what users need, what the business wants, and what's technically possible. It's like being a professional compromiser with a roadmap obsession.",
                    "Product managers are basically professional translators. We translate user problems into technical requirements, business goals into features, and chaos into roadmaps."
                ],
                project: [
                    "We're building a feature that will save users 2 hours per week. When you multiply that by all our users... we're basically giving people back time. That's pretty magical!",
                    "My strategy is simple: solve real problems for real people, measure everything, and iterate quickly. Oh, and make really good spreadsheets to track it all.",
                    "The most exciting project? We're completely reimagining how people collaborate. It's like we're building the future of teamwork, one feature at a time."
                ],
                technical: [
                    "I'm technical enough to understand architecture decisions but not technical enough to implement them. I know just enough to be dangerous in engineering meetings!",
                    "My tools? Jira for tracking, Figma for collaborating with design, Google Sheets for everything else. If I can't put it in a spreadsheet, it doesn't exist.",
                    "I track metrics obsessively - user engagement, feature adoption, performance indicators. Data tells the story that opinions can't."
                ],
                fun: [
                    "I have roadmaps for my roadmaps. My team jokes that I'd create a roadmap for deciding what to have for lunch. They're not wrong.",
                    "Weirdest feature request? Someone wanted us to add a 'make it more purple' button. I spent way too long trying to understand the use case.",
                    "I don't dream in Gantt charts, but I do wake up with ideas for reorganizing our feature backlog. My brain apparently never stops prioritizing!"
                ],
                default: [
                    "Great question! You know, product management is all about asking the right questions and then figuring out which answers actually matter.",
                    "That's interesting! In product work, we always say 'fall in love with the problem, not the solution' - it keeps us focused on what really matters.",
                    "You know what I love about this role? Every day is different, but every day is also about making our users' lives a little bit better.",
                    "That reminds me of a feature launch where everything went sideways, but we learned so much that it ended up being one of our most valuable experiences!"
                ]
            }
        }
    ]
};

// Export for use in main script
window.CONFIG = CONFIG;
