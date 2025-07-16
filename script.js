const steps = [
  {
    title: "1. Login to CRM",
    content: \`
      <p><strong>URL:</strong> <a href="https://okayacarecrm.com" target="_blank">https://okayacarecrm.com</a></p>
      <ul>
        <li>Enter User ID and Password</li>
        <li>Click Login</li>
        <li>Dashboard shows Complaint Login, Product Registration, etc.</li>
      </ul>
    \`
  },
  {
    title: "2. Register New Complaint",
    content: \`
      <ul>
        <li>Click Complaint Login</li>
        <li>Enter Mobile Number</li>
        <li>If number exists → Details shown, else → Add New Customer</li>
      </ul>
    \`
  },
  {
    title: "3. Fill Required Details",
    content: \`
      <ul>
        <li>Mobile Number, Customer Name, Address (with Pin), Serial Number</li>
        <li>Product Name, Date of Purchase, Issue Details</li>
      </ul>
    \`
  },
  {
    title: "4. Warranty Check & Product Registration",
    content: \`
      <ul>
        <li>Use serial number to verify product warranty</li>
        <li>Register via <a href="https://www.okaya.in">Okaya Website</a> > Okaya Care > Warranty Registration</li>
      </ul>
    \`
  },
  {
    title: "5. Escalation Process",
    content: \`
      <ul>
        <li>1st Call: Engineer → 2nd: BSI → 3rd: RM → 4th: Ticket Login</li>
        <li>Raise TT in CRM under DL/TT tab</li>
      </ul>
    \`
  },
  {
    title: "6. Closure & Feedback",
    content: \`
      <ul>
        <li>Engineer shares feedback code after visit</li>
        <li>CSAT feedback collected via IVR</li>
        <li>Customer thanked for their call</li>
      </ul>
    \`
  }
];

let currentStep = 0;
const container = document.getElementById('stepsContainer');
const searchInput = document.getElementById('searchInput');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function renderStep(index) {
  const step = steps[index];
  container.innerHTML = \`
    <div class="step-card">
      <h2>\${step.title}</h2>
      \${step.content}
    </div>
  \`;
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === steps.length - 1;
}

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const matched = steps.find((s, i) => s.title.toLowerCase().includes(query));
  if (matched) {
    currentStep = steps.indexOf(matched);
    renderStep(currentStep);
  }
});

prevBtn.addEventListener('click', () => {
  if (currentStep > 0) {
    currentStep--;
    renderStep(currentStep);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    renderStep(currentStep);
  }
});

renderStep(currentStep);
