const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");

if (burger && mobileNav) {
  burger.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
    mobileNav.setAttribute("aria-hidden", String(!open));
  });

  mobileNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      mobileNav.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
      mobileNav.setAttribute("aria-hidden", "true");
    });
  });
}

// Simple form behavior (no backend): opens the user's email client with the content.
// Later we can switch this to Formspree / Resend / Microsoft Graph.
function handleSubmit(e){
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  const to = "ana@weworkeddit.com";
  const subject = encodeURIComponent(`[WE Work Edit] New message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`);
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

  const msg = document.getElementById("formMsg");
  if (msg) msg.textContent = "Your email app will open to send the message.";
  return false;
}
window.handleSubmit = handleSubmit;
