/* ============================================
   HMPS INF — Floating Contact Button
   ============================================ */

const CONTACT_DATA = {
  wa:    { href: 'https://wa.me/6283866273495', label: 'WhatsApp', color: '#25D366' },
  email: { href: 'mailto:hmpsinformatikauinbanten@gmail.com', label: 'Email', color: '#6C63FF' },
  ig:    { href: 'https://instagram.com/hmpsinformatikaa', label: 'Instagram', color: '#E1306C' },
}

function buildFloatingBtn() {
  const existing = document.getElementById('floatingContact')
  if (existing) return

  const el = document.createElement('div')
  el.id = 'floatingContact'
  el.className = 'floating-contact'
  el.innerHTML = `
    <!-- Contact items -->
    <div class="floating-contact__items" id="floatingItems">
      <a href="${CONTACT_DATA.ig.href}"
         target="_blank" rel="noopener"
         class="floating-contact__item"
         aria-label="Instagram HMPS INF"
         style="--item-color: ${CONTACT_DATA.ig.color}">
        <span class="floating-contact__item-label">Instagram</span>
        ${iconIG()}
      </a>
      <a href="${CONTACT_DATA.email.href}"
         class="floating-contact__item"
         aria-label="Email HMPS INF"
         style="--item-color: ${CONTACT_DATA.email.color}">
        <span class="floating-contact__item-label">Email</span>
        ${iconEmail()}
      </a>
      <a href="${CONTACT_DATA.wa.href}"
         target="_blank" rel="noopener"
         class="floating-contact__item"
         aria-label="WhatsApp HMPS INF"
         style="--item-color: ${CONTACT_DATA.wa.color}">
        <span class="floating-contact__item-label">WhatsApp</span>
        ${iconWA()}
      </a>
    </div>

    <!-- Trigger button -->
    <button class="floating-contact__trigger" id="floatingTrigger" aria-label="Hubungi kami" aria-expanded="false">
      ${iconContact()}
      ${iconClose()}
    </button>
  `

  document.body.appendChild(el)
}

function initFloatingBtn() {
  buildFloatingBtn()

  const trigger = document.getElementById('floatingTrigger')
  const items   = document.getElementById('floatingItems')
  const contact = document.getElementById('floatingContact')
  if (!trigger || !items) return

  trigger.addEventListener('click', () => {
    const isOpen = contact.classList.toggle('open')
    trigger.setAttribute('aria-expanded', isOpen)
  })

  // Close on outside click
  document.addEventListener('click', e => {
    if (!e.target.closest('#floatingContact')) {
      contact.classList.remove('open')
      trigger.setAttribute('aria-expanded', 'false')
    }
  })
}

/* ── Icons ── */
function iconContact() {
  return `<svg class="icon-contact" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>`
}

function iconClose() {
  return `<svg class="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>`
}

function iconWA() {
  return `<svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>`
}

function iconEmail() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>`
}

function iconIG() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>`
}

export { initFloatingBtn }
