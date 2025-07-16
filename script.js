const steps = [
  {
    title: "Login to CRM",
    content: `
      <p><strong>URL:</strong> <a href="https://okayacarecrm.com" target="_blank">https://okayacarecrm.com</a></p>
      <ul>
        <li>Enter User ID and Password</li>
        <li>Click Login</li>
        <li>Dashboard shows Complaint Login, Product Registration, etc.</li>
      </ul>
    `,
    category: "Login"
  },
  {
    title: "Register New Complaint",
    content: `
      <ul>
        <li>Click Complaint Login</li>
        <li>Enter Mobile Number</li>
        <li>If number exists → Details shown, else → Add New Customer</li>
      </ul>
    `,
    category: "Complaint"
  },
  {
    title: "Fill Required Details",
    content: `
      <ul>
        <li>Mobile Number, Customer Name, Address, Product Serial</li>
        <li>Date of Purchase, Product Issue</li>
      </ul>
    `,
    category: "Complaint"
  },
  {
    title: "Product Registration Process",
    content: `
      <ul>
        <li>Go to: www.okaya.in → Warranty Registration</li>
        <li>Enter serial number and upload Invoice</li>
      </ul>
    `,
    category: "Registration"
  },
  {
    title: "Escalation Matrix",
    content: `
      <ul>
        <li>1st Call: Engineer → 2nd: BSI → 3rd: RM → 4th: Raise TT</li>
        <li>Follow escalation if no response at each level</li>
      </ul>
    `,
    category: "Escalation"
  },
  {
    title: "Warranty Check",
    content: `
      <ul>
        <li>Use CRM → Enter Serial No. → See Validity</li>
        <li>Check Paperless rejection reasons</li>
      </ul>
    `,
    category: "Warranty"
  },
  {
    title: "Closure & CSAT Feedback",
    content: `
      <ul>
        <li>Engineer closes ticket</li>
        <li>Customer receives IVR for CSAT</li>
        <li>Call center thanks customer</li>
      </ul>
    `,
    category: "Closure"
  }
];

let currentStep = 0;
let filteredSteps = [...steps];

const container = document.getElementById('stepsContainer');
const searchInput = document.getElementById('searchInput');
const categorySelect = document.getElementById('categorySelect');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function renderStep(index) {
  if (!filteredSteps[index]) {
    container.innerHTML = "<p>No SOP steps found.</p>";
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    return;
  }

  const step = filteredSteps[index];
  container.innerHTML = `
    <div class="step-card">
      <h2>${step.title}</h2>
      ${step.content}
    </div>
  `;

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === filteredSteps.length - 1;
}

function filterSteps() {
  const category = categorySelect.value;
  const query = searchInput.value.toLowerCase();

  filteredSteps = steps.filter(step => {
    const matchesCategory = category === "All" || step.category === category;
    const matchesSearch = step.title.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  currentStep = 0;
  renderStep(currentStep);
}

searchInput.addEventListener('input', filterSteps);
categorySelect.addEventListener('change', filterSteps);

prevBtn.addEventListener('click', () => {
  if (currentStep > 0) {
    currentStep--;
    renderStep(currentStep);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentStep < filteredSteps.length - 1) {
    currentStep++;
    renderStep(currentStep);
  }
});

// Initial render
filterSteps();
