document.getElementById("supportForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your request has been submitted. Our team will contact you soon.");
});

function chatbot() {
  const q = document.getElementById("question").value.toLowerCase().trim();
  let reply = "Sorry, I don't understand. Please ask about services, help, contact, or support.";

  if (q.includes("service") || q.includes("services")) {
    reply = "We provide basic healthcare guidance and connect patients with volunteers.";
  } 
  else if (q.includes("contact") || q.includes("reach")) {
    reply = "You can contact us by submitting the support form above.";
  } 
  else if (q.includes("help") || q.includes("support")) {
    reply = "We help patients by providing healthcare guidance and volunteer assistance.";
  } 
  else if (q.includes("timing") || q.includes("time") || q.includes("hours")) {
    reply = "Our volunteers are available from 9 AM to 6 PM, Monday to Saturday.";
  } 
  else if (q.includes("doctor") || q.includes("medical")) {
    reply = "We do not replace doctors, but we guide patients and connect them with healthcare resources.";
  }
  else if (q.includes("emergency")) {
    reply = "In case of a medical emergency, please contact the nearest hospital immediately.";
  }

  document.getElementById("botReply").innerText = reply;
}
