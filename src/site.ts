export {};

interface CaseStudyData {
  slug: string;
  code: string;
  title: string;
  sector: string;
  location: string;
  client: string;
  delivery: string;
  duration: string;
  contractValue: string;
  image: string;
  imageAlt: string;
  summary: string;
  challenge: string;
  execution: string;
  metrics: Array<{ label: string; value: string }>;
  deliverables: string[];
  milestones: Array<{ phase: string; window: string; detail: string }>;
}

const CASE_STUDIES: Record<string, CaseStudyData> = {
  westpark: {
    slug: 'westpark',
    code: 'IR202501',
    title: 'Westpark Intermodal Freight Hub',
    sector: 'Commercial Construction',
    location: 'Houston, Texas',
    client: 'Gulf Corridor Logistics Partners',
    delivery: 'Design Build General Contracting',
    duration: '16 Months',
    contractValue: '$64.5M',
    image: '/src/assets/images/commercial_steel_build_1795610217262.jpg',
    imageAlt: 'Ground up commercial logistics facility with steel framing and concrete tilt wall panels in Houston',
    summary: 'Ground up 480,000 square foot cross dock distribution campus constructed on stabilized Gulf Coast clay with heavy duty apron paving and elevated office mezzanine.',
    challenge: 'High regional water tables and compressed tenant occupancy targets required early soil stabilization alongside concurrent structural steel erection and concrete panel casting.',
    execution: 'Ironridge self performed 28,000 cubic yards of lime stabilization, erected 3,100 tons of structural steel ahead of schedule, and poured super flat interior warehouse slabs using laser screed crews.',
    metrics: [
      { label: 'Total Building Area', value: '480,000 SF' },
      { label: 'Concrete Slab Volume', value: '22,400 CY' },
      { label: 'Structural Steel', value: '3,100 Tons' },
      { label: 'Schedule Variance', value: '18 Days Early' }
    ],
    deliverables: [
      'Deep lime stabilized subgrade and storm detention basin across 42 acres',
      '94 cast concrete tilt wall panels with insulated thermal core construction',
      'Heavy duty 10 inch reinforced concrete truck aprons and 86 dock positions',
      'Two story administrative and dispatch suite with full backup generator yard'
    ],
    milestones: [
      { phase: 'Phase 01', window: 'Month 01 to 03', detail: 'Site clearing, storm drainage installation, and 42 acre lime stabilization.' },
      { phase: 'Phase 02', window: 'Month 04 to 07', detail: 'Drilled pier foundations, utility rough ins, and continuous slab placement.' },
      { phase: 'Phase 03', window: 'Month 08 to 11', detail: 'Tilt wall panel erection, primary steel framing, and roof deck enclosure.' },
      { phase: 'Phase 04', window: 'Month 12 to 14', detail: 'Mechanical, electrical, fire suppression, and exterior paving completion.' },
      { phase: 'Phase 05', window: 'Month 15 to 16', detail: 'Rack slab flatness verification, commissioning, and final municipal signoff.' }
    ]
  },
  bayport: {
    slug: 'bayport',
    code: 'IR202502',
    title: 'Bayport Corridor Viaduct and Drainage',
    sector: 'Heavy Civil Infrastructure',
    location: 'Pasadena, Texas',
    client: 'Port Industrial Authority',
    delivery: 'Lump Sum Heavy Civil',
    duration: '22 Months',
    contractValue: '$92.0M',
    image: '/src/assets/images/hero_civil_infrastructure_1795610216946.jpg',
    imageAlt: 'Heavy civil highway interchange and concrete bridge piers under active construction',
    summary: 'Elevated multi span freight corridor bridge, reinforced concrete piers, and underground storm trunk line built over active rail and arterial truck routes.',
    challenge: 'Maintaining uninterrupted freight rail and port truck access while driving deep concrete shaft foundations adjacent to live high pressure utility easements.',
    execution: 'Sequenced night girder picks with dual crawler cranes, installed precast concrete bridge beams over 14 spans, and coordinated phased traffic shifts with zero lost time safety incidents.',
    metrics: [
      { label: 'Bridge Deck Length', value: '3,420 LF' },
      { label: 'Drilled Shaft Depth', value: '85 FT' },
      { label: 'Precast Girders Set', value: '112 Units' },
      { label: 'Craft Safety Record', value: '0 Lost Time' }
    ],
    deliverables: [
      '14 span prestressed concrete girder viaduct with cast in place barrier walls',
      '56 reinforced drilled concrete shafts seated in dense Beaumont clay strata',
      '4,800 linear feet of dual barrel reinforced concrete box culvert storm trunk',
      'Continuous traffic control, lighting gantries, and automated drainage telemetry'
    ],
    milestones: [
      { phase: 'Phase 01', window: 'Month 01 to 04', detail: 'Utility relocations, temporary haul roads, and subterranean box culvert trenching.' },
      { phase: 'Phase 02', window: 'Month 05 to 10', detail: 'Drilled shaft foundations, footing caps, and vertical bridge column pours.' },
      { phase: 'Phase 03', window: 'Month 11 to 15', detail: 'Overnight crane mobilization and structural girder placement across rail tracks.' },
      { phase: 'Phase 04', window: 'Month 16 to 19', detail: 'Bridge deck rebar mat fabrication, continuous deck pours, and barrier walls.' },
      { phase: 'Phase 05', window: 'Month 20 to 22', detail: 'Asphalt tie ins, pavement striping, load testing, and corridor opening.' }
    ]
  },
  brazos: {
    slug: 'brazos',
    code: 'IR202503',
    title: 'Brazos Energy Equipment Complex',
    sector: 'Structural Concrete',
    location: 'Fort Bend County, Texas',
    client: 'Brazos Industrial Manufacturing',
    delivery: 'Construction Management at Risk',
    duration: '14 Months',
    contractValue: '$41.8M',
    image: '/src/assets/images/structural_concrete_site_1795610218035.jpg',
    imageAlt: 'Structural concrete foundation mat rebar grid and deep utility trenching on site',
    summary: 'High capacity crane bay manufacturing plant featuring thick isolated equipment mat foundations, deep trench utility corridors, and heavy industrial concrete slabs.',
    challenge: 'Overhead 60 ton bridge cranes and CNC machining foundations required ultra low vibration tolerances and continuous 1,400 cubic yard mass concrete pours.',
    execution: 'Deployed dual concrete pump booms with chilled mix thermal monitoring, embedded heavy anchor bolt templates to millimeter survey tolerances, and completed trench work early.',
    metrics: [
      { label: 'Mass Mat Thickness', value: '54 IN' },
      { label: 'Crane Bay Capacity', value: '60 Tons' },
      { label: 'Rebar Tonnage', value: '1,480 Tons' },
      { label: 'Concrete Strength', value: '7,000 PSI' }
    ],
    deliverables: [
      'Deep reinforced equipment mat foundations with embedded thermal sensors',
      '1,950 linear feet of covered cast in place process piping and power trenches',
      'High bay pre engineered steel structure with full bridge crane runway beams',
      'Industrial wastewater containment pit and exterior laydown yard paving'
    ],
    milestones: [
      { phase: 'Phase 01', window: 'Month 01 to 03', detail: 'Deep excavation, shoring installation, and subbase dewatering operations.' },
      { phase: 'Phase 02', window: 'Month 04 to 06', detail: 'Rebar mat assembly, anchor bolt surveying, and mass concrete pours.' },
      { phase: 'Phase 03', window: 'Month 07 to 10', detail: 'Primary steel column erection and overhead bridge crane runway installation.' },
      { phase: 'Phase 04', window: 'Month 11 to 13', detail: 'High voltage substation pad work, slab sealing, and mechanical commissioning.' },
      { phase: 'Phase 05', window: 'Month 14', detail: 'Crane load certification and client equipment rigging turnover.' }
    ]
  },
  katy: {
    slug: 'katy',
    code: 'IR202504',
    title: 'Katy Regional Medical Plaza',
    sector: 'Commercial Construction',
    location: 'Katy, Texas',
    client: 'West Houston Health System',
    delivery: 'Construction Management at Risk',
    duration: '18 Months',
    contractValue: '$53.2M',
    image: '/src/assets/images/site_engineering_team_1795610218624.jpg',
    imageAlt: 'Project engineers reviewing architectural drawings on site overlooking steel frame structure',
    summary: 'Five story clinical outpatient pavilion and structured concrete parking deck built on an active suburban healthcare campus with strict acoustic and dust controls.',
    challenge: 'Adjacent hospital emergency access roads remained fully operational throughout foundation piling, crane swings, and exterior curtainwall installation.',
    execution: 'Utilized virtual design coordination to eliminate 114 mechanical clashes before fabrication and maintained zero unplanned utility interruptions across 18 months.',
    metrics: [
      { label: 'Clinical Floor Area', value: '185,000 SF' },
      { label: 'Parking Structure', value: '620 Stalls' },
      { label: 'MEP Clashes Resolved', value: '114 Items' },
      { label: 'Campus Uptime', value: '100%' }
    ],
    deliverables: [
      'Five story structural steel and composite concrete deck outpatient pavilion',
      'Four level post tensioned concrete parking garage with covered skybridge',
      'Medical gas, redundant emergency power, and imaging suite shielding',
      'Campus loop road widening and storm retention plaza landscaping'
    ],
    milestones: [
      { phase: 'Phase 01', window: 'Month 01 to 04', detail: 'Campus traffic realignment, utility tie ins, and augercast foundation piles.' },
      { phase: 'Phase 02', window: 'Month 05 to 08', detail: 'Post tensioned garage decks and primary pavilion steel framing.' },
      { phase: 'Phase 03', window: 'Month 09 to 13', detail: 'Unitized glass curtainwall enclosure and clinical MEP rough in.' },
      { phase: 'Phase 04', window: 'Month 14 to 16', detail: 'Imaging suite lead shielding, interior finishes, and skybridge glazing.' },
      { phase: 'Phase 05', window: 'Month 17 to 18', detail: 'Life safety testing, air balance verification, and licensing inspection.' }
    ]
  }
};

function initMobileNavigation(): void {
  const toggleButton = document.querySelector<HTMLButtonElement>('[data-mobile-menu-toggle]');
  const drawer = document.querySelector<HTMLElement>('[data-mobile-menu]');
  if (!toggleButton || !drawer) return;

  const setOpen = (open: boolean) => {
    toggleButton.setAttribute('aria-expanded', open ? 'true' : 'false');
    drawer.classList.toggle('hidden', !open);
    const openIcon = toggleButton.querySelector('[data-icon-open]');
    const closeIcon = toggleButton.querySelector('[data-icon-close]');
    if (openIcon && closeIcon) {
      openIcon.classList.toggle('hidden', open);
      closeIcon.classList.toggle('hidden', !open);
    }
  };

  toggleButton.addEventListener('click', () => {
    const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
    setOpen(!isExpanded);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggleButton.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggleButton.focus();
    }
  });
}

function initActiveNavLinks(): void {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]');
  navLinks.forEach((link) => {
    const href = link.getAttribute('href') || '';
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('text-white', 'underline', 'decoration-[#B45309]', 'decoration-2', 'underline-offset-8');
      link.classList.remove('text-[#CBD2D9]');
      link.setAttribute('aria-current', 'page');
    }
  });
}

function initImageFallbacks(): void {
  const images = document.querySelectorAll<HTMLImageElement>('img[data-fallback-title]');
  images.forEach((img) => {
    const applyFallback = () => {
      const parent = img.parentElement;
      if (!parent || parent.querySelector('[data-image-fallback]')) return;
      img.classList.add('hidden');
      const fallback = document.createElement('div');
      fallback.setAttribute('data-image-fallback', 'true');
      fallback.className = 'w-full h-full bg-[#171C22] flex flex-col items-center justify-center p-6 text-center text-white border border-white/10';
      const label = document.createElement('span');
      label.className = 'font-display text-sm font-semibold tracking-wide text-white';
      label.textContent = img.dataset.fallbackTitle || 'Ironridge Civil Builders';
      const sub = document.createElement('span');
      sub.className = 'text-xs text-[#CBD2D9] mt-1';
      sub.textContent = 'Field Photography Archive';
      fallback.appendChild(label);
      fallback.appendChild(sub);
      parent.appendChild(fallback);
    };

    img.addEventListener('error', applyFallback);
    if (img.complete && img.naturalWidth === 0) {
      applyFallback();
    }
  });
}

function initFilterGroups(): void {
  const groups = document.querySelectorAll<HTMLElement>('[data-filter-group]');
  groups.forEach((group) => {
    const buttons = group.querySelectorAll<HTMLButtonElement>('[data-filter-value]');
    const targetSelector = group.getAttribute('data-filter-target');
    const countElement = document.querySelector<HTMLElement>('[data-filter-count]');
    if (!targetSelector) return;

    const cards = document.querySelectorAll<HTMLElement>(targetSelector);

    const applyFilter = (value: string) => {
      let visibleCount = 0;
      cards.forEach((card) => {
        const category = card.getAttribute('data-category') || '';
        const matches = value === 'all' || category === value;
        card.classList.toggle('hidden', !matches);
        if (matches) visibleCount += 1;
      });

      buttons.forEach((btn) => {
        const active = btn.getAttribute('data-filter-value') === value;
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
        if (active) {
          btn.classList.add('bg-[#171C22]', 'text-white', 'border-[#171C22]');
          btn.classList.remove('bg-white', 'text-[#171C22]', 'border-[#E2DFD7]', 'hover:bg-[#F7F6F2]');
        } else {
          btn.classList.remove('bg-[#171C22]', 'text-white', 'border-[#171C22]');
          btn.classList.add('bg-white', 'text-[#171C22]', 'border-[#E2DFD7]', 'hover:bg-[#F7F6F2]');
        }
      });

      if (countElement) {
        countElement.textContent = `Showing ${visibleCount} ${visibleCount === 1 ? 'record' : 'records'}`;
      }
    };

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const value = btn.getAttribute('data-filter-value') || 'all';
        applyFilter(value);
      });
    });
  });
}

function initProjectDetailSwitcher(): void {
  const container = document.querySelector<HTMLElement>('[data-project-detail-root]');
  if (!container) return;

  const switcherButtons = document.querySelectorAll<HTMLButtonElement>('[data-study-switch]');
  const elCode = container.querySelector<HTMLElement>('[data-detail-code]');
  const elSector = container.querySelector<HTMLElement>('[data-detail-sector]');
  const elTitle = container.querySelector<HTMLElement>('[data-detail-title]');
  const elLocation = container.querySelector<HTMLElement>('[data-detail-location]');
  const elSummary = container.querySelector<HTMLElement>('[data-detail-summary]');
  const elImage = container.querySelector<HTMLImageElement>('[data-detail-image]');
  const elClient = container.querySelector<HTMLElement>('[data-detail-client]');
  const elDelivery = container.querySelector<HTMLElement>('[data-detail-delivery]');
  const elDuration = container.querySelector<HTMLElement>('[data-detail-duration]');
  const elValue = container.querySelector<HTMLElement>('[data-detail-value]');
  const elChallenge = container.querySelector<HTMLElement>('[data-detail-challenge]');
  const elExecution = container.querySelector<HTMLElement>('[data-detail-execution]');
  const elMetrics = container.querySelector<HTMLElement>('[data-detail-metrics]');
  const elDeliverables = container.querySelector<HTMLElement>('[data-detail-deliverables]');
  const elMilestones = container.querySelector<HTMLElement>('[data-detail-milestones]');

  const renderStudy = (slug: string) => {
    const study = CASE_STUDIES[slug] || CASE_STUDIES.westpark;
    if (elCode) elCode.textContent = study.code;
    if (elSector) elSector.textContent = study.sector;
    if (elTitle) elTitle.textContent = study.title;
    if (elLocation) elLocation.textContent = study.location;
    if (elSummary) elSummary.textContent = study.summary;
    if (elImage) {
      elImage.src = study.image;
      elImage.alt = study.imageAlt;
      elImage.dataset.fallbackTitle = study.title;
    }
    if (elClient) elClient.textContent = study.client;
    if (elDelivery) elDelivery.textContent = study.delivery;
    if (elDuration) elDuration.textContent = study.duration;
    if (elValue) elValue.textContent = study.contractValue;
    if (elChallenge) elChallenge.textContent = study.challenge;
    if (elExecution) elExecution.textContent = study.execution;

    if (elMetrics) {
      elMetrics.innerHTML = '';
      study.metrics.forEach((metric) => {
        const box = document.createElement('div');
        box.className = 'bg-white border border-[#E2DFD7] rounded-lg p-5';
        const val = document.createElement('div');
        val.className = 'font-mono-metrics text-2xl font-bold text-[#171C22]';
        val.textContent = metric.value;
        const lbl = document.createElement('div');
        lbl.className = 'text-xs font-medium text-[#525866] mt-1';
        lbl.textContent = metric.label;
        box.appendChild(val);
        box.appendChild(lbl);
        elMetrics.appendChild(box);
      });
    }

    if (elDeliverables) {
      elDeliverables.innerHTML = '';
      study.deliverables.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'flex items-start gap-3 py-3 border-b border-[#E2DFD7] last:border-b-0';
        const num = document.createElement('span');
        num.className = 'font-mono-metrics text-xs font-semibold text-[#B45309] pt-1 shrink-0';
        num.textContent = `0${index + 1}`;
        const text = document.createElement('span');
        text.className = 'text-sm text-[#171C22]';
        text.textContent = item;
        li.appendChild(num);
        li.appendChild(text);
        elDeliverables.appendChild(li);
      });
    }

    if (elMilestones) {
      elMilestones.innerHTML = '';
      study.milestones.forEach((m) => {
        const row = document.createElement('div');
        row.className = 'bg-white border border-[#E2DFD7] rounded-lg p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6';
        const left = document.createElement('div');
        left.className = 'sm:w-44 shrink-0';
        const phase = document.createElement('div');
        phase.className = 'font-display text-sm font-bold text-[#171C22]';
        phase.textContent = m.phase;
        const win = document.createElement('div');
        win.className = 'font-mono-metrics text-xs text-[#B45309] mt-0.5';
        win.textContent = m.window;
        left.appendChild(phase);
        left.appendChild(win);
        const right = document.createElement('p');
        right.className = 'text-sm text-[#525866]';
        right.textContent = m.detail;
        row.appendChild(left);
        row.appendChild(right);
        elMilestones.appendChild(row);
      });
    }

    switcherButtons.forEach((btn) => {
      const active = btn.getAttribute('data-study-switch') === study.slug;
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      if (active) {
        btn.classList.add('bg-[#B45309]', 'text-white', 'border-[#B45309]');
        btn.classList.remove('bg-white/5', 'text-[#CBD2D9]', 'border-white/15', 'hover:bg-white/10');
      } else {
        btn.classList.remove('bg-[#B45309]', 'text-white', 'border-[#B45309]');
        btn.classList.add('bg-white/5', 'text-[#CBD2D9]', 'border-white/15', 'hover:bg-white/10');
      }
    });
  };

  switcherButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const slug = btn.getAttribute('data-study-switch') || 'westpark';
      renderStudy(slug);
    });
  });

  const params = new URLSearchParams(window.location.search);
  const initialSlug = params.get('study') || 'westpark';
  renderStudy(initialSlug);
}

function initCareerRoleSelector(): void {
  const roleButtons = document.querySelectorAll<HTMLButtonElement>('[data-apply-role]');
  const roleSelect = document.querySelector<HTMLSelectElement>('[data-career-role-select]');
  const applicationSection = document.querySelector<HTMLElement>('#career-application');
  if (!roleButtons.length || !roleSelect) return;

  roleButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const roleTitle = btn.getAttribute('data-apply-role') || '';
      if (roleTitle) {
        roleSelect.value = roleTitle;
      }
      if (applicationSection) {
        applicationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        roleSelect.focus({ preventScroll: true });
      }
    });
  });
}

function initValidatedForms(): void {
  const forms = document.querySelectorAll<HTMLFormElement>('[data-validated-form]');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  forms.forEach((form) => {
    const errorBox = form.querySelector<HTMLElement>('[data-form-error]');
    const successBox = form.querySelector<HTMLElement>('[data-form-success]');
    const successDetail = form.querySelector<HTMLElement>('[data-form-success-detail]');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (errorBox) errorBox.classList.add('hidden');
      if (successBox) successBox.classList.add('hidden');

      const requiredInputs = form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>('[required]');
      let firstInvalid: HTMLElement | null = null;
      let errorMessage = '';

      requiredInputs.forEach((field) => {
        field.classList.remove('border-[#B45309]');
        const value = field.value.trim();
        if (!value && !firstInvalid) {
          firstInvalid = field;
          const labelText = field.getAttribute('data-field-label') || 'all required fields';
          errorMessage = `Please complete ${labelText} before submitting.`;
        } else if (field.type === 'email' && value && !emailPattern.test(value) && !firstInvalid) {
          firstInvalid = field;
          errorMessage = 'Please enter a valid work email address.';
        } else if (field.type === 'tel' && value && value.replace(/\D/g, '').length < 7 && !firstInvalid) {
          firstInvalid = field;
          errorMessage = 'Please enter a valid telephone number with at least 7 digits.';
        }
      });

      if (firstInvalid) {
        (firstInvalid as HTMLElement).classList.add('border-[#B45309]');
        (firstInvalid as HTMLElement).focus();
        if (errorBox) {
          errorBox.textContent = errorMessage;
          errorBox.classList.remove('hidden');
        }
        return;
      }

      const nameField = form.querySelector<HTMLInputElement>('[name="fullName"]');
      const applicantName = nameField ? nameField.value.trim() : 'your team';
      if (successDetail) {
        successDetail.textContent = `Thank you, ${applicantName}. Our Houston estimating and coordination desk has logged your submission under reference IR202608 and will respond within one business day.`;
      }
      if (successBox) {
        successBox.classList.remove('hidden');
      }
      form.reset();
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  initActiveNavLinks();
  initImageFallbacks();
  initFilterGroups();
  initProjectDetailSwitcher();
  initCareerRoleSelector();
  initValidatedForms();
});
