// config.js
// ============================================
// LEGAL CONTEXT SIMULATOR CONFIGURATION
// ============================================
// This is your manifest file. Edit the content here to change
// the scenarios in the simulation. No need to touch index.html for this!

window.CONFIG = {
  general: {
    title: "Legal Context Simulator",
    subtitle: "How Context Determines Legal Outcomes",
    githubRepo: "https://prototypejam.github.io/ai-context/"
  },

  theme: {
    accentColor: "#D97356",
    accentColorDark: "#c85a3f",
    backgroundColor: 0xf5f5f5,
    floorColor: 0xdcdcdc,
    wallColor: 0xf8f8f8
  },

  actors: {
    bob: {
      name: "Bob",
      label: "Regular Person",
      icon: "👤",
      // Maps Alice's role to Bob's role
      roleMap: {
        lawyer: "Client",
        merchant: "Consumer",
        barber: "Customer",
        ai_provider: "User",
        spouse: "Spouse",
        doctor: "Patient"
      },
      position: { x: 2, y: 0, z: 0 }
    },
    alice: {
      name: "Alice",
      position: { x: -2, y: 0, z: 0 }
    }
  },

  roles: [
    { id: "lawyer", label: "Lawyer", icon: "⚖️" },
    { id: "merchant", label: "Merchant", icon: "🛍️" },
    { id: "barber", label: "Barber", icon: "✂️" },
    { id: "ai_provider", label: "AI Provider", icon: "🤖" },
    { id: "spouse", label: "Spouse", icon: "💍" },
    { id: "doctor", label: "Doctor", icon: "👨‍⚕️" }
  ],

  actions: [
    { id: "discuss_litigation", label: "Discuss Litigation", icon: "📑", verb: "discussing" },
    { id: "purchase_product", label: "Purchase Product", icon: "🛍️", verb: "purchasing" },
    { id: "book_appointment", label: "Book Appointment", icon: "📅", verb: "booking" },
    { id: "send_update", label: "Send Update", icon: "✉️", verb: "sending" },
    { id: "share_medical", label: "Share Medical Info", icon: "🏥", verb: "sharing" },
    { id: "provide_ai_data", label: "Provide AI Training", icon: "📤", verb: "providing" }
  ],

  topics: [
    { id: "litigation", label: "Litigation Strategy", icon: "📑", sensitivity: "privileged" },
    { id: "weather", label: "Weather Report", icon: "☁️", sensitivity: "public" },
    { id: "medical", label: "Medical Results", icon: "🧪", sensitivity: "protected" },
    { id: "purchase", label: "Product Details", icon: "📦", sensitivity: "commercial" },
    { id: "personal", label: "Personal Plans", icon: "💭", sensitivity: "private" }
  ],

  systems: [
    { id: "face_to_face", label: "Face-to-Face", icon: "👥", color: "#f0f0f0", description: "In-person conversation" },
    { id: "email", label: "Email (Gmail)", icon: "✉️", color: "#ea4335", description: "Standard email platform" },
    { id: "encrypted", label: "Signal (E2E)", icon: "🔐", color: "#2090ea", description: "End-to-end encrypted" },
    { id: "ai_platform", label: "AI Chat", icon: "🤖", color: "#6b46c1", description: "AI conversation platform" }
  ],

  // The "rules engine": keys are role-action-topic-system
  implications: {
    "lawyer-discuss_litigation-litigation-face_to_face": {
      privilege: true,
      confidentiality: "absolute",
      risks: ["Third party presence waives privilege"],
      protections: ["Attorney-Client Privilege", "Ethics Rules"]
    },
    "lawyer-discuss_litigation-litigation-ai_platform": {
      privilege: false,
      confidentiality: "none",
      risks: ["Platform logs conversations", "No legal protection", "Terms of Service apply"],
      protections: []
    },
    "barber-discuss_litigation-litigation-face_to_face": {
      privilege: false,
      confidentiality: "social",
      risks: ["No legal protection", "Can be compelled to testify"],
      protections: []
    },
    "ai_provider-discuss_litigation-litigation-ai_platform": {
      privilege: false,
      confidentiality: "contractual",
      risks: ["Platform terms apply", "Data may be used for training"],
      protections: ["Terms of Service", "Privacy Policy"]
    },
    "doctor-share_medical-medical-encrypted": {
      privilege: true,
      confidentiality: "high",
      risks: ["Breach notification required"],
      protections: ["HIPAA", "Doctor-Patient Privilege", "Encryption"]
    },
    // Add more combinations as needed...
    "default": {
      privilege: false,
      confidentiality: "standard",
      risks: ["No specific legal protections apply"],
      protections: ["General privacy laws"]
    }
  }
};
