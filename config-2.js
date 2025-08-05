// ============================================
// LEGAL CONTEXT SIMULATOR CONFIGURATION
// ============================================
// This is your "manifest" file. Edit the content here to change
// the scenarios in the simulation. No need to touch index.html for this!

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
        wallColor: 0xf8f8f8,
    },

    // --- SCENARIO MANIFEST ---
    scenario: {
        actors: {
            bob: { name: "Bob", position: { x: 2.5, y: 0, z: 0 } },
            alice: { name: "Alice", position: { x: -2.5, y: 0, z: 0 } }
        },

        // Defines the toggles for Alice's role
        roles: [
            { id: 'lawyer', name: 'Lawyer', bobRole: 'Client' },
            { id: 'merchant', name: 'Merchant', bobRole: 'Consumer' },
            { id: 'barber', name: 'Barber', bobRole: 'Customer' },
            { id: 'ai-provider', name: 'AI Provider', bobRole: 'User' }
        ],

        // Defines the toggles for the action
        actions: [
            { id: 'discuss-litigation', name: 'Discuss Litigation Strategy' },
            { id: 'purchase-goods', name: 'Purchase Goods' },
            { id: 'get-haircut', name: 'Get a Haircut' },
            { id: 'provide-ai-data', name: 'Provide AI Training Data' }
        ],

        // Defines the systems (for future use, but structured now)
        systems: [
            { id: 'private-setting', name: 'Private Setting' },
            { id: 'public-forum', name: 'Public Forum' },
            { id: 'ai-platform', name: 'AI Platform' },
            { id: 'regulated-ai-fiduciary', name: 'Regulated AI Fiduciary (Hypothetical)' }
        ],

        // The "Rules Engine": Maps scenarios to legal outcomes
        // The key is a simple string: "roleId-actionId"
        implications: {
            // --- LAWYER SCENARIOS ---
            'lawyer-discuss-litigation': {
                privilege: { applies: true, text: "✅ Attorney-Client Privilege Applies" },
                details: "Communication is protected from disclosure in legal proceedings."
            },
            'lawyer-purchase-goods': {
                privilege: { applies: false, text: "❌ Privilege Does Not Apply" },
                details: "This is a standard commercial transaction, not a request for legal advice."
            },

            // --- BARBER SCENARIOS ---
            'barber-get-haircut': {
                privilege: { applies: false, text: "❌ No Privilege" },
                details: "Standard service transaction. No expectation of legal confidentiality."
            },
            'barber-discuss-litigation': {
                privilege: { applies: false, text: "❌ No Privilege" },
                details: "Wrong context. The role of 'Barber' does not support legal privilege, regardless of topic."
            },

            // --- AI PROVIDER SCENARIOS ---
            'ai-provider-provide-ai-data': {
                privilege: { applies: false, text: "❌ No Privilege" },
                details: "You are providing data to a service. Communications are likely logged and governed by Terms of Service."
            },
            'ai-provider-discuss-litigation': {
                privilege: { applies: false, text: "❌ No Privilege" },
                details: "Crucial Point: AI providers are not lawyers. There is no legal framework for privilege here."
            },
            
            // --- DEFAULT CATCH-ALL ---
            'default': {
                privilege: { applies: false, text: "❔ Unclear / No Privilege" },
                details: "The combination of role and action does not create a legally privileged relationship."
            }
        }
    }
};

// This makes the CONFIG object available to index.html
window.CONFIG = CONFIG;