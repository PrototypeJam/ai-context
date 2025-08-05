// ============================================
// LEGAL CONTEXT SIMULATOR CONFIGURATION
// ============================================
const CONFIG = {
    // General Settings
    general: {
        title: "Legal Context Simulator",
        githubRepo: "https://prototypejam.github.io/ai-context/",
    },

    // Visual Theme
    theme: {
        accentColor: "#D97356",
        accentColorDark: "#c85a3f",
        backgroundColor: 0xf5f5f5,
        floorColor: 0xdcdcdc,
    },

    // --- SCENARIO MANIFEST ---
    scenario: {
        actors: {
            bob: { name: "Bob", position: { x: 3, y: 0, z: 0 } },
            alice: { name: "Alice", position: { x: -3, y: 0, z: 0 } }
        },

        roles: [
            { id: 'lawyer', name: 'Lawyer', bobRole: 'Client' },
            { id: 'merchant', name: 'Merchant', bobRole: 'Consumer' },
            { id: 'barber', name: 'Barber', bobRole: 'Customer' },
            { id: 'ai-provider', name: 'AI Provider', bobRole: 'User' }
        ],

        actions: [
            { id: 'discuss-litigation', name: 'Discuss Litigation Strategy' },
            { id: 'purchase-goods', name: 'Purchase Goods' },
            { id: 'get-haircut', name: 'Get a Haircut' },
            { id: 'provide-ai-data', name: 'Provide AI Training Data' }
        ],

        // The "Rules Engine"
        implications: {
            'lawyer-discuss-litigation': {
                privilege: { applies: true, text: "✅ Attorney-Client Privilege Applies" },
                details: "Communication is protected because it's with a licensed legal professional for the purpose of seeking legal advice."
            },
            'barber-discuss-litigation': {
                privilege: { applies: false, text: "❌ No Privilege: Wrong Context" },
                details: "The role of 'Barber' does not support legal privilege, regardless of the topic. The relationship lacks the legal foundation for confidentiality."
            },
            'ai-provider-discuss-litigation': {
                privilege: { applies: false, text: "❌ No Privilege: Critical Point" },
                details: "AI providers are not licensed fiduciaries. There is currently no legal framework that grants privilege to conversations with commercial AI services."
            },
            // <<< NEW, DEMONSTRABLE RULE >>>
            'merchant-purchase-goods': {
                privilege: { applies: null, text: "⚖️ Commercial Law Applies" },
                details: "This is a commercial transaction. Privilege is not the relevant concept; instead, consumer protection laws, warranties, and contract terms govern the interaction."
            },
            'default': {
                privilege: { applies: null, text: "❔ Unclear / No Privilege" },
                details: "The combination of role and action does not create a legally privileged relationship under standard rules."
            }
        }
    }
};
window.CONFIG = CONFIG;