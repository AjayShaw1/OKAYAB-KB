
const steps = {
  Battery: [
    { title: "Battery Complaint", content: "Login to CRM and go to Battery tab to register complaint." },
    { title: "Battery Replacement", content: "Check for bulge/damage. Get HO approval if under warranty." }
  ],
  Inverter: [
    { title: "Inverter Login", content: "Use your ID/password at https://okayacarecrm.com" },
    { title: "Assign Call", content: "Assign to Okaya or Microtek FSE based on brand." }
  ],
  Nasaka: [
    { title: "RO Installation", content: "Confirm address, schedule visit, collect details." }
  ],
  Script: [
    { title: "Call Opening", content: "Namaskar! My name is ___, how may I help you?" }
  ],
  Escalation: [
    { title: "Escalation Matrix", content: "1st - Engineer, 2nd - BSI, 3rd - RM, 4th - TT" }
  ],
  Warranty: [
    { title: "Check Warranty", content: "Use CRM → Job Search → Enter Serial → View status" }
  ],
  CRM: [
    { title: "CRM Login", content: "Visit https://okayacarecrm.com and enter your credentials." }
  ],
  Contact: [
    { title: "Support Info", content: "Email: care@okaya.in | Phone: +91 9818 909090" }
  ]
};

let currentSteps = [];
let currentIndex = 0;

const contentArea = document.getElementById('contentArea');
const searchInput = document.getElementById('searchInput');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function renderStep() {
  if (!currentSteps.length) {
    contentArea.innerHTML = '<p class="default-msg">No SOP steps available.</p>';
    return;
  }
  const step = currentSteps[currentIndex];
  contentArea.innerHTML = `
    <div class="step-card">
      <h2>${step.title}</h2>
      <p>${step.content}</p>
    </div>
  `;
}

function loadCategory(category) {
  currentSteps = steps[category] || [];
  currentIndex = 0;
  renderStep();
}

searchInput.addEventListener('input', () => {
  const q = searchInput.value.toLowerCase();
  const filtered = currentSteps.filter(s => s.title.toLowerCase().includes(q));
  if (filtered.length) {
    currentSteps = filtered;
    currentIndex = 0;
    renderStep();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderStep();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < currentSteps.length - 1) {
    currentIndex++;
    renderStep();
  }
});

renderStep();
