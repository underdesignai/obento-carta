/* =========================================================
   OBENTO — LÓGICA DE LA APP (solo carta, sin pedidos)
   -----------------------------------------------------------
   Esta web es SOLO para consultar la carta. No hay carrito, no
   hay pago, no se manda nada a ningún sitio. Los pedidos se
   hacen por teléfono — el número se coge de ABOUT_INFO.telefono
   en js/menu-data.js.
   Para cambiar platos/precios/fotos edita js/menu-data.js.
   ========================================================= */

function itemById(id){ return MENU.find(m => m.id === id); }
function fmt(n){ return n.toFixed(2).replace('.', ',') + '€'; }

/* =========================================================
   TELÉFONO — se rellena solo en todos los botones de llamar
   ========================================================= */
function telHref(tel){ return 'tel:' + tel.replace(/[^\d+]/g, ''); }

function pintarTelefonos(){
  const tel = ABOUT_INFO.telefono;
  document.querySelectorAll('#call-splash-num, #call-bar-num').forEach(el=> el.textContent = tel);
  document.querySelectorAll('#btn-call-splash, #call-bar, #btn-call-location').forEach(el=> el.href = telHref(tel));
}

/* =========================================================
   RENDER — CARTA
   ========================================================= */
const pillsRow = document.getElementById('pills-row');
const menuScroll = document.getElementById('menu-scroll');

function allergenBadges(list){
  if(!list || !list.length) return '<span class="allergen-none">Sin alérgenos destacados</span>';
  return list.map(key=>{
    const a = ALLERGENS[key];
    if(!a) return '';
    const content = a.icono && a.icono.trim() ? a.icono : a.short;
    return `<div class="allergen-badge" title="${a.label}">${content}</div>`;
  }).join('');
}

function renderDishSlide(cat, dish){
  const tienePorciones = Array.isArray(dish.porciones) && dish.porciones.length>0;
  const tieneOpciones = !tienePorciones && Array.isArray(dish.opciones) && dish.opciones.length>0;
  const precioInicial = tienePorciones ? dish.porciones[0].precio : dish.precio;

  const slide = document.createElement('div');
  slide.className = 'dish-slide';
  slide.dataset.cat = cat.slug;
  slide.innerHTML = `
    ${dish.imagen ? `
    <div class="dish-media-wrap">
      <div class="dish-media">
        <img src="${dish.imagen}" alt="${dish.nombre}" loading="lazy">
      </div>
    </div>` : ''}
    <div class="dish-info">
      <div class="dish-top">
        <div class="dish-head">
          <div class="dish-head-text">
            <h3 class="dish-name">${dish.nombre}</h3>
          </div>
          <div class="dish-head-cta">
            <div class="dish-price">${fmt(precioInicial)}</div>
          </div>
        </div>
        ${tienePorciones ? `
        <div class="portion-row" data-dish="${dish.id}" data-kind="porcion">
          ${dish.porciones.map((p,i)=>`<button class="portion-pill ${i===0?'active':''}" data-cant="${p.cant}">${p.cant} uds</button>`).join('')}
        </div>` : ''}
        ${tieneOpciones ? `
        <p class="options-text"><span class="options-label">A elegir:</span> ${dish.opciones.map(o=>o.label).join(' · ')}</p>` : ''}
        <p class="dish-desc">${dish.descripcion}</p>
        <div class="dish-rule"></div>
        <div class="allergen-row">${allergenBadges(dish.alergenos)}</div>
      </div>
    </div>
  `;
  return slide;
}

function buildMenu(){
  CATEGORIES.forEach(cat=>{
    const pill = document.createElement('button');
    pill.className = 'pill';
    pill.textContent = cat.label;
    pill.dataset.cat = cat.slug;
    pill.addEventListener('click', ()=>{
      document.getElementById('cat-title-'+cat.slug).scrollIntoView({behavior:'smooth', block:'start'});
    });
    pillsRow.appendChild(pill);

    const items = MENU.filter(m=>m.cat===cat.slug);
    const titleSlide = document.createElement('div');
    titleSlide.className = 'cat-title-slide';
    titleSlide.id = 'cat-title-'+cat.slug;
    titleSlide.dataset.cat = cat.slug;
    titleSlide.innerHTML = `
      <div class="eyebrow">Carta OBENTO</div>
      <h2>${cat.label}</h2>
      <div class="divider-orn"></div>
      <div class="count">${items.length} platos · desliza para descubrir</div>
    `;
    menuScroll.appendChild(titleSlide);

    if(cat.slug === 'sushi' && Array.isArray(SUSHI_SUBCATEGORIES)){
      SUSHI_SUBCATEGORIES.forEach(sub=>{
        const subItems = items.filter(m=>m.sub===sub.slug);
        if(!subItems.length) return;
        const subSlide = document.createElement('div');
        subSlide.className = 'subcat-title-slide';
        subSlide.dataset.cat = cat.slug;
        subSlide.innerHTML = `<h3>${sub.label}</h3><div class="divider-orn small"></div>`;
        menuScroll.appendChild(subSlide);
        subItems.forEach(dish=> menuScroll.appendChild(renderDishSlide(cat, dish)));
      });
    } else {
      items.forEach(dish=> menuScroll.appendChild(renderDishSlide(cat, dish)));
    }
  });

  pillsRow.querySelector('.pill').classList.add('active');

  /* selector de piezas (uds): solo cambia el precio mostrado, no añade a ningún sitio */
  menuScroll.addEventListener('click', e=>{
    const pill = e.target.closest('.portion-pill');
    if(!pill) return;
    const row = pill.parentElement;
    row.querySelectorAll('.portion-pill').forEach(p=>p.classList.remove('active'));
    pill.classList.add('active');

    const dishId = row.dataset.dish;
    const dish = itemById(dishId);
    const cant = pill.dataset.cant;
    const porcion = dish.porciones.find(p=> String(p.cant)===String(cant));
    const slide = row.closest('.dish-slide');
    slide.querySelector('.dish-price').textContent = fmt(porcion.precio);
  });
}

/* resaltar pill activo según scroll */
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const cat = entry.target.dataset.cat;
      pillsRow.querySelectorAll('.pill').forEach(p=>{
        p.classList.toggle('active', p.dataset.cat === cat);
      });
    }
  });
}, { root:null, threshold:0.55 });

function observeSlides(){
  document.querySelectorAll('.cat-title-slide').forEach(el=>io.observe(el));
}

/* =========================================================
   NAVEGACIÓN ENTRE VISTAS
   ========================================================= */
function showView(name){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById('view-'+name).classList.add('active');
}

document.getElementById('btn-ver-carta').addEventListener('click', ()=> showView('menu'));
document.getElementById('btn-menu-back').addEventListener('click', ()=> showView('splash'));

/* =========================================================
   RENDER — CONÓCENOS
   ========================================================= */
function renderAbout(){
  document.getElementById('about-lead').textContent = ABOUT_INFO.lead;
  document.getElementById('value-list').innerHTML = ABOUT_INFO.valores.map(v=>`
    <div class="value-item">
      <div class="value-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${v.ico}</svg></div>
      <div class="value-text">
        <div class="v-title">${v.titulo}</div>
        <div class="v-desc">${v.desc}</div>
      </div>
    </div>`).join('');
}
renderAbout();

/* =========================================================
   RENDER — UBICACIÓN
   ========================================================= */
function renderLocation(){
  document.getElementById('about-address').textContent = ABOUT_INFO.direccion;
  document.getElementById('about-city').textContent = ABOUT_INFO.ciudad;
  document.getElementById('about-hours-1').textContent = ABOUT_INFO.horario1;
  document.getElementById('about-hours-2').textContent = ABOUT_INFO.horario2;
  document.getElementById('about-phone').textContent = ABOUT_INFO.telefono;
  document.getElementById('about-maps-link').href = ABOUT_INFO.mapsUrl;
}
renderLocation();

/* navegación: recuerda desde dónde se abrieron, para volver al mismo sitio */
let aboutReturnTo = 'splash';
document.getElementById('btn-ver-about-splash').addEventListener('click', ()=>{
  aboutReturnTo = 'splash';
  showView('about');
});
document.getElementById('btn-open-about').addEventListener('click', ()=>{
  aboutReturnTo = 'menu';
  showView('about');
});
document.getElementById('btn-about-back').addEventListener('click', ()=> showView(aboutReturnTo));

let locationReturnTo = 'splash';
document.getElementById('btn-ver-location-splash').addEventListener('click', ()=>{
  locationReturnTo = 'splash';
  showView('location');
});
document.getElementById('btn-open-location').addEventListener('click', ()=>{
  locationReturnTo = 'menu';
  showView('location');
});
document.getElementById('btn-location-back').addEventListener('click', ()=> showView(locationReturnTo));

/* =========================================================
   MODAL ALÉRGENOS
   ========================================================= */
const legendList = document.getElementById('legend-list');
legendList.innerHTML = Object.entries(ALLERGENS).map(([key,a])=>`
  <div class="legend-item">
    <div class="allergen-badge">${a.icono && a.icono.trim() ? a.icono : a.short}</div>
    <span>${a.label}</span>
  </div>`).join('');

const modal = document.getElementById('allergen-modal');
document.getElementById('btn-allergen-info').addEventListener('click', ()=> modal.classList.add('show'));
document.getElementById('btn-close-modal').addEventListener('click', ()=> modal.classList.remove('show'));
modal.addEventListener('click', e=>{ if(e.target===modal) modal.classList.remove('show'); });

/* =========================================================
   INIT
   ========================================================= */
pintarTelefonos();
buildMenu();
observeSlides();
