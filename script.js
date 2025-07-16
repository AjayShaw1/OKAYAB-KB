
const stepsData = {
  "Battery-Complaint": [
    {
      title: "Battery Complaint Login",
      content: "<ul><li>Login to CRM</li><li>Click Complaint Login</li><li>Select Battery tab</li></ul>"
    },
    {
      title: "Verify Customer Details",
      content: "<ul><li>Check mobile number</li><li>Verify serial number</li></ul>"
    }
  ],
  "Battery-Replacement": [
    {
      title: "Replacement Approval",
      content: "<ul><li>Check battery condition</li><li>Upload images</li><li>Request HO approval</li></ul>"
    }
  ],
  "Inverter-Login": [
    {
      title: "Login to Inverter CRM",
      content: "<ul><li>Enter User ID and Password</li><li>Click Login</li></ul>"
    }
  ],
  "Inverter-Issues": [
    {
      title: "Inverter Issue Types",
      content: "<ul><li>No output</li><li>Buzzing sound</li><li>Switch failure</li></ul>"
    }
  ],
  "Nasaka-Install": [
    {
      title: "Nasaka RO Installation",
      content: "<ul><li>Confirm address</li><li>Schedule technician visit</li></ul>"
    }
  ],
  "Nasaka-Escalation": [
    {
      title: "Nasaka Escalation Flow",
      content: "<ul><li>1st: FSE</li><li>2nd: BSI</li><li>3rd: TT</li></ul>"
    }
  ]
};

function loadCategory(categoryKey) {
  const container = document.getElementById("stepsContainer");
  const steps = stepsData[categoryKey];
  if (!steps || steps.length === 0) {
    container.innerHTML = "<p>No SOPs available for this category.</p>";
    return;
  }

  container.innerHTML = steps.map(step => `
    <div class="step-card">
      <h2>${step.title}</h2>
      ${step.content}
    </div>
  `).join('');
}
