/* ============================================
   HMPS INF — Floating Contact Button v3 (Speed Dial)
   ============================================ */

const CONTACT_DATA = [
  {
    id:    'wa',
    href:  'https://wa.me/6283866273495?text=Halo%20HMPS%20INF%2C%20saya%20ingin%20bertanya.',
    label: 'WhatsApp',
    color: '#25D366',
    target: '_blank',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>`,
  },
  {
    id:    'ig',
    href:  'https://instagram.com/hmpsinformatikaa',
    label: 'Instagram',
    color: '#E1306C',
    target: '_blank',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  },
  {
    id:    'email',
    href:  'mailto:hmpsinformatikauinbanten@gmail.com',
    label: 'Email',
    color: '#6366F1',
    target: '',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  },
]

function buildFloatingBtn() {
  if (document.getElementById('floatingContact')) return

  const el = document.createElement('div')
  el.id = 'floatingContact'
  el.className = 'floating-contact'
  el.setAttribute('role', 'complementary')
  el.setAttribute('aria-label', 'Hubungi Kami')

  el.innerHTML = `
    <button class="floating-contact__trigger" id="floatingTrigger"
            aria-label="Hubungi kami" aria-expanded="false" aria-controls="floatingItems">
      ${iconContact()}
      ${iconClose()}
    </button>

    <div class="floating-contact__items" id="floatingItems" role="list">
      ${CONTACT_DATA.map(c => `
        <a href="${c.href}"
           ${c.target ? `target="${c.target}" rel="noopener"` : ''}
           class="floating-contact__item"
           aria-label="${c.label}"
           style="--item-color: ${c.color}"
           role="listitem">
          ${c.icon}
          <span class="floating-contact__item-label">${c.label}</span>
        </a>
      `).join('')}
    </div>
  `

  document.body.appendChild(el)
}

export function initFloatingBtn() {
  buildFloatingBtn()

  const trigger = document.getElementById('floatingTrigger')
  const contact = document.getElementById('floatingContact')
  if (!trigger || !contact) return

  trigger.addEventListener('click', () => {
    const isOpen = contact.classList.toggle('open')
    trigger.setAttribute('aria-expanded', isOpen)
  })

  document.addEventListener('click', e => {
    if (!e.target.closest('#floatingContact')) {
      contact.classList.remove('open')
      trigger.setAttribute('aria-expanded', 'false')
    }
  })

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && contact.classList.contains('open')) {
      contact.classList.remove('open')
      trigger.setAttribute('aria-expanded', 'false')
      trigger.focus()
    }
  })
}

function iconContact() {
  return `<svg class="icon-contact" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
  </svg>`
}

function iconClose() {
  return `<svg class="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>`
}
