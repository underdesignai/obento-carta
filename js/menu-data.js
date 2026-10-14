/* =========================================================
   OBENTO — DATOS DE LA CARTA (editable)
   -----------------------------------------------------------
   Este es el UNICO archivo que necesitas tocar para:
   - anadir / quitar / editar platos (array MENU)
   - cambiar precios
   - cambiar fotos (campo "imagen": ruta dentro de la carpeta images/)
   - cambiar categorias, subcategorias de sushi, textos de "Conocenos"
     y "Ubicacion", y los alergenos disponibles.
   No hace falta tocar css/styles.css ni js/app.js para nada de esto.
   ========================================================= */

/* =========================================================
   OBENTO — CONFIGURACIÓN EDITABLE
   -----------------------------------------------------------
   Todo lo que hay que tocar para actualizar la carta está
   aquí abajo. No hace falta editar nada más del archivo.
   - Para AÑADIR un plato: copia un objeto dentro de MENU y
     cambia sus datos (usa un "id" que no se repita).
   - Para QUITAR un plato: borra su objeto de MENU.
   - "alergenos" acepta cualquiera de estas claves:
     gluten, soja, pescado, crustaceos, huevo, frutos_secos,
     lacteos, sesamo, moluscos
   - "imagen": pega la URL de la foto del plato. Usa fotos
     cuadradas (misma proporción) para que todas se vean igual.
   - Si un plato se puede pedir en distintas cantidades (ej. un
     rollo en 4 u 8 piezas), en vez de "precio" usa "porciones":
     porciones:[{cant:4, precio:5.50},{cant:8, precio:8.90}]
     (puedes añadir tantas cantidades como quieras).
   ========================================================= */

const CATEGORIES = [
  { slug:'entrantes', label:'Entrantes' },
  { slug:'sushi', label:'Sushi' },
  { slug:'calientes', label:'Calientes' },
  { slug:'postres', label:'Postres' },
  { slug:'bebidas', label:'Bebidas' },
];

/* Subapartados internos de "Sushi" — no aparecen en el índice de arriba,
   solo dividen visualmente el desliz dentro de la propia categoría Sushi.
   Para añadir/quitar un subapartado, edita esta lista y usa su "slug"
   en el campo "sub" de cada plato de sushi dentro de MENU. */
const SUSHI_SUBCATEGORIES = [
  { slug:'nigiri', label:'Nigiri' },
  { slug:'uramaki', label:'Uramaki' },
  { slug:'futomaki', label:'Futomaki' },
  { slug:'maki', label:'Maki' },
];

/* Imagen "de espera" mientras subes tus fotos reales.
   En cuanto tengas las fotos en /images/, esta variable deja de usarse:
   cada plato ya apunta a su propia ruta images/nombre-del-plato.webp */
const PLACEHOLDER_IMG = "images/placeholder.webp";

const MENU = [
  // ---------- ENTRANTES ----------
  { id:'e7', cat:'entrantes', nombre:'Ensalada wakame', descripcion:'Alga wakame marinada en salsa aojiso, salmón y toque de sésamo.', precio:6.90, imagen:'images/ensaladawakame.webp', alergenos:['sesamo','soja','pescado'] },
  { id:'e8', cat:'entrantes', nombre:'Ebi Fry', descripcion:'Langostinos empanados crujientes con salsa Sweetchili verde (3und).', precio:5.50, imagen:'images/ebifry.webp', alergenos:['gluten','crustaceos','huevo'] },
  { id:'e1', cat:'entrantes', nombre:'Edamame', descripcion:'Vainas de soja salteadas con aceite de humo y toque de shichimi y sal en escamas.', precio:4.50, imagen:'images/edamame.webp', alergenos:['soja'] },
  { id:'e2', cat:'entrantes', nombre:'Gyozas de pollo (4und)', descripcion:'Empanadillas japonesas a la plancha, rellenas de pollo.', precio:4.50, imagen:'images/gyozaspollo.webp', alergenos:['gluten','soja'] },
  { id:'e3', cat:'entrantes', nombre:'Gyozas de verdura (4 und)', descripcion:'Empanadillas japonesas a la plancha, relleno vegetal.', precio:4.50, imagen:'images/gyozasverdura.webp', alergenos:['gluten','soja'] },
  { id:'e4', cat:'entrantes', nombre:'Gyozas de langostino', descripcion:'Empanadillas japonesas a la plancha, relleno de langostino (4 und).', precio:5.50, imagen:'images/gyozaslangostino.webp', alergenos:['gluten','soja','crustaceos'] },
  { id:'e5', cat:'entrantes', nombre:'Samosas', descripcion:'Deliciosos crujientes de hojaldre con relleno de pollo al curry y nuestra mayo buldak miel y toque de sésamo (3 und).', precio:6.50, imagen:'images/samosas.webp', alergenos:['gluten','sesamo','huevo'] },
  { id:'e6', cat:'entrantes', nombre:'Takoyaki', descripcion:'Bolitas de pulpo rebozadas, salsa takoyaki, katsuobushi y hojuelas de bonito (3 und).', precio:4.50, imagen:'images/takoyaki.webp', alergenos:['gluten','huevo','moluscos','pescado'] },
  ,

  // ---------- SUSHI · Nigiri ----------
  { id:'n1', cat:'sushi', sub:'nigiri', nombre:'Nigiri de atún', descripcion:'Atún Rojo Ricardo Fuentes (2und).', precio:6.20, imagen:'images/nigiriatun.webp', alergenos:['pescado'] },
  { id:'n2', cat:'sushi', sub:'nigiri', nombre:'Nigiri de atún con foie', descripcion:'Atún Rojo coronado con foie, sal marinada y punto de teriyaki (2und).', precio:7.80, imagen:'images/nigiriatunfoie.webp', alergenos:['pescado','soja'] },
  { id:'n3', cat:'sushi', sub:'nigiri', nombre:'Nigiri de salmón', descripcion:'Salmón (2und).', precio:5.50, imagen:'images/nigirisalmon.webp', alergenos:['pescado'] },
  { id:'n4', cat:'sushi', sub:'nigiri', nombre:'Nigiri de salmón flambeado', descripcion:'Salmón sellado al soplete, con salsa kimchi y azúcar moreno (2und).', precio:6.20, imagen:'images/nigirisalmonf.webp', alergenos:['pescado'] },
  { id:'n5', cat:'sushi', sub:'nigiri', nombre:'Nigiri de chutoro', descripcion:'Atún sellado al soplete, toque de sal en escamas, pimienta negra y cebolleta (2und).', precio:10.50, imagen:'images/nigirichutoro.webp', alergenos:['pescado'] },
  { id:'n6', cat:'sushi', sub:'nigiri', nombre:'Nigiri de vieira', descripcion:'Vieira sellada con soplete, mayo kimchi, sal en escamas, shichimi y toque de lima (2und).', precio:9.90, imagen:'images/nigirivieira.webp', alergenos:['moluscos','huevo'] },
  { id:'n7', cat:'sushi', sub:'nigiri', nombre:'Nigiri de anguila', descripcion:'Anguila glaseada en salsa teriyaki y toque de cebolleta finamente cortada (2und).', precio:7.20, imagen:'images/nigirianguila.webp', alergenos:['pescado','soja'] },
  { id:'n8', cat:'sushi', sub:'nigiri', nombre:'Nigiri de hamachi', descripcion:'Pez limón (hamachi) (2und).', precio:8.90, imagen:'images/nigirihamachi.webp', alergenos:['pescado'] },
  { id:'n9', cat:'sushi', sub:'nigiri', nombre:'Nigiri de atún toro con trufa', descripcion:'Mayo trufada, cebolleta finamente cortada y atún toro rojo (2und).', precio:10.90, imagen:'images/atuntoro.webp', alergenos:['pescado','huevo'] },

  // ---------- SUSHI · Uramaki ----------
  { id:'u1', cat:'sushi', sub:'uramaki', nombre:'Jōnetsu Tuna', descripcion:'Arroz con sésamo kimchi. Queso crema, aguacate, cebollino y pepino holandés con cobertura de atún, foie flambeado con punto de teriyaki. (8 uds)', precio:14.20, imagen:'images/rolloatun.webp', alergenos:['pescado','lacteos','sesamo','soja'] },
  { id:'u2', cat:'sushi', sub:'uramaki', nombre:'Sakura Roll', descripcion:'Queso crema, aguacate, cebollino y pepino holandés con cobertura de salmón flambeado, acabado con mayo kimchi y punto de teriyaki. (8 uds)', precio:12.50, imagen:'images/uramakisalmon.webp', alergenos:['pescado','lacteos','huevo','soja'] },
  { id:'u3', cat:'sushi', sub:'uramaki', nombre:'Chicken roll', descripcion:'Pollo karaage, queso crema, cebollino, cobertura de aguacate y nuestra salsa acebichada (8 uds).', porciones:[{cant:8, precio:11.50}], imagen:'images/uramakipollo.webp', alergenos:['gluten','soja','huevo','lacteos'] },
  { id:'u4', cat:'sushi', sub:'uramaki', nombre:'Aurora Roll (Vegetal)', descripcion:'Uramaki de micro mezclum, pepino y mango, guacamole trufado, punto de salsa Aojiso y coronado con cebolleta finamente cortada. (8 uds)', precio:10.50, imagen:'images/rollovegetal.webp', alergenos:['soja'] },
  { id:'u5', cat:'sushi', sub:'uramaki', nombre:'Black Dragon', descripcion:'Espárrago, cebollino, gamba tempurizada, cobertura de atún, mayo buldak miel, decorado con boniato crujiente.', porciones:[{cant:8, precio:15.20}], imagen:'images/rolloblack.webp', alergenos:['pescado','soja','crustaceos','gluten','huevo'] },
  { id:'u6', cat:'sushi', sub:'uramaki', nombre:'Shinigami crab', descripcion:'Arroz negro, brotes de soja, mango, cangrejo real, cobertura de lubina y salsa spicy mango.', porciones:[{cant:8, precio:11.50}], imagen:'images/uramakicangrejo.webp', alergenos:['crustaceos','huevo','pescado','soja'] },
  { id:'u7', cat:'sushi', sub:'uramaki', nombre:'Rollo Tartar de salmón', descripcion:'Aguacate, queso crema, cebollino y pepino, con tartar de salmón y salsa Aojiso.', porciones:[{cant:8, precio:11.30}], imagen:'images/rollosalmon1.webp', alergenos:['pescado','lacteos','soja'] },
  { id:'u8', cat:'sushi', sub:'uramaki', nombre:'Rollo Tartar de atún', descripcion:'Aguacate, queso crema, cebollino y pepino, con tartar de atún y mayo kimchi.', porciones:[{cant:8, precio:13.80}], imagen:'images/rolloatun1.webp', alergenos:['pescado','lacteos','huevo','soja'] },
  { id:'u9', cat:'sushi', sub:'uramaki', nombre:'Rollo Tartar de lubina', descripcion:'Aguacate, queso crema, cebollino y pepino, con tartar de lubina y salsa acebichada.', porciones:[{cant:8, precio:11.90}], imagen:'images/rollolubina.webp', alergenos:['pescado','lacteos'] },

  // ---------- SUSHI · Futomaki ----------
  { id:'f1', cat:'sushi', sub:'futomaki', nombre:'Futomaki de salmón', descripcion:'Relleno de salmón, queso crema y salsa aojiso (8 und).', precio:9.90, imagen:'images/futomaki.webp', alergenos:['pescado','lacteos','soja'] },
  { id:'f2', cat:'sushi', sub:'futomaki', nombre:'Futomaki de gamba trufada', descripcion:'Gamba en tempura, ikura, cebollino y mayonesa trufada (12 und).', precio:12.20, imagen:'images/rollogamba.webp', alergenos:['crustaceos','soja','gluten','huevo','pescado'] },
  { id:'f3', cat:'sushi', sub:'futomaki', nombre:'Futomaki karaage', descripcion:'Relleno de pollo karaage rebozado, mango, acompañado de mayo buldak miel (12 und).', precio:10.50, imagen:'images/futokara.webp', alergenos:['soja','gluten','huevo'] },

  // ---------- SUSHI · Maki ----------
  { id:'m1', cat:'sushi', sub:'maki', nombre:'Maki de salmón', descripcion:'Salmón (8 und).', precio:6.20, imagen:'images/maki2.webp', alergenos:['pescado'] },
  { id:'m2', cat:'sushi', sub:'maki', nombre:'Maki de chutoro', descripcion:'Ventresca de atún rojo Ricardo Fuentes (8 und).', precio:10.50, imagen:'images/makichu.webp', alergenos:['pescado'] },
  { id:'m3', cat:'sushi', sub:'maki', nombre:'Maki de atún', descripcion:'Atún fresco (8 und).', precio:7.20, imagen:'images/makiatun.webp', alergenos:['pescado'] },
  { id:'m4', cat:'sushi', sub:'maki', nombre:'Maki de aguacate', descripcion:'Aguacate (8 und).', precio:5.20, imagen:'images/maki4.webp', alergenos:[] },

  // ---------- CALIENTES ----------
  { id:'c3', cat:'calientes', nombre:'Arroz con ternera', descripcion:'Arroz salteado con ternera, zanahoria, pimiento verde, pimiento rojo, cebolla, espárrago y pepino.', precio:12.50, imagen:'images/arrozternera.webp', alergenos:['soja'] },
  { id:'c4', cat:'calientes', nombre:'Arroz con pollo', descripcion:'Arroz salteado con pollo, zanahoria, pimiento verde, pimiento rojo, cebolla, espárrago y pepino.', precio:11.20, imagen:'images/arrozpollo.webp', alergenos:['soja'] },
  { id:'c5', cat:'calientes', nombre:'Yakisoba de langostino', descripcion:'Fideos salteados con langostino, col, aceite de sésamo, pepino y soja.', precio:13.20, imagen:'images/yakisobalangostino.webp', alergenos:['gluten','crustaceos','soja','sesamo'],
    opciones:[ { id:'trigo', label:'Fideos de trigo' }, { id:'arroz', label:'Fideos de arroz (sin gluten)' } ] },
  { id:'c6', cat:'calientes', nombre:'Yakisoba de ternera', descripcion:'Fideos salteados con ternera, col, aceite de sésamo, pepino y soja.', precio:12.90, imagen:'images/yakisobaternera.webp', alergenos:['gluten','soja','sesamo'],
    opciones:[ { id:'trigo', label:'Fideos de trigo' }, { id:'arroz', label:'Fideos de arroz (sin gluten)' } ] },
  { id:'c7', cat:'calientes', nombre:'Yakisoba de pollo', descripcion:'Fideos salteados con pollo, col, aceite de sésamo, pepino y soja.', precio:11.90, imagen:'images/yakisobapollo.webp', alergenos:['gluten','soja','sesamo'],
    opciones:[ { id:'trigo', label:'Fideos de trigo' }, { id:'arroz', label:'Fideos de arroz (sin gluten)' } ] },

  // ---------- POSTRES ----------
  // Me dijiste que solo tienes 3 tipos de mochi: he puesto sabores habituales
  // como ejemplo. Cambia el "nombre" y el "precio" por los tuyos reales,
  // y sube la foto de cada uno con el nombre exacto del campo "imagen".
  { id:'p1', cat:'postres', nombre:'Mochi de tarta de queso', descripcion:'Masa de arroz con helado de tarta de queso.', precio:4.50, imagen:'images/mochifresa.webp', alergenos:['lacteos'] },
  { id:'p2', cat:'postres', nombre:'Mochi de mango', descripcion:'Masa de arroz de Fruta de la pasión relleno de helado de mango.', precio:4.50, imagen:'images/mochimango.webp', alergenos:['lacteos'] },
  { id:'p3', cat:'postres', nombre:'Mochi de chocolate', descripcion:'Masa de arroz relleno de helado de chocolate.', precio:4.50, imagen:'images/mochichocolate.webp', alergenos:['lacteos'] },
];

const BEBIDAS = [
  { id:'b1', cat:'bebidas', nombre:'Coca-Cola', descripcion:'', precio:2.20, alergenos:[] },
  { id:'b2', cat:'bebidas', nombre:'Coca-Cola Zero', descripcion:'', precio:2.20, alergenos:[] },
  { id:'b3', cat:'bebidas', nombre:'Aquarius', descripcion:'', precio:2.20, alergenos:[] },
  { id:'b4', cat:'bebidas', nombre:'Fanta Naranja', descripcion:'', precio:2.20, alergenos:[] },
  { id:'b5', cat:'bebidas', nombre:'Nestea', descripcion:'', precio:2.20, alergenos:[] },
  { id:'b6', cat:'bebidas', nombre:'Cerveza Asahi', descripcion:'', precio:3.50, alergenos:['gluten'] },
  { id:'b7', cat:'bebidas', nombre:'Cerveza Kirin', descripcion:'', precio:3.50, alergenos:['gluten'] },
  { id:'b8', cat:'bebidas', nombre:'Agua pequeña', descripcion:'', precio:1.20, alergenos:[] },
];
MENU.push(...BEBIDAS);

/* =========================================================
   INFORMACIÓN EDITABLE — "Conócenos" y "Ubicación"
   Cambia estos textos por los tuyos cuando quieras.
   ========================================================= */
const ABOUT_INFO = {
  lead: 'En OBENTO elaboramos cada pieza a mano, al momento, con los mejores ingredientes seleccionados y con plena pasión. Cocina de calidad, sushi hecho al momento, cortado al punto para que disfrutes cada bocado.',
  valores: [
    { titulo:'Cuidado y calidad del pescado', desc:'Seleccionamos nuestro pescado cuidadosamente y seguimos un proceso de conservación y congelación adecuado para garantizar su seguridad y mantener al máximo su calidad, sabor y textura.', ico:'<path d="M3 12c4-5 10-6 14-2 2 2 3 3 4 2-1 3-3 5-4 2-4 4-10 3-14-2z"/><circle cx="7.2" cy="11.2" r="0.8" fill="currentColor" stroke="none"/>' },
    { titulo:'Atún rojo, de Ricardo Fuentes', desc:'Trabajamos con Ricardo Fuentes para nuestro atún rojo, una garantía de origen y de la mejor calidad pieza a pieza.', ico:'<path d="M4 12c3-4 8-5 11-2 1.5 1.5 2.5 2 3.5 1.5-1 2-2 3.5-3.5 1.5-3 3-8 2-11-2z"/>' },
    { titulo:'Salmón noruego y materia prima seleccionada', desc:'Usamos salmón noruego y otros pescados de alta calidad, con un corte perfecto para disfrutar de cada bocado.', ico:'<path d="M7 12c0-4 2-7 5-7s5 3 5 7"/><path d="M4 12h16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/>' },
    { titulo:'Hecho a mano, al momento', desc:'Cada nigiri y cada maki se prepara cuando entra tu pedido, no antes.', ico:'<path d="M7 12c0-4 2-7 5-7s5 3 5 7"/><path d="M4 12h16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/>' },
    { titulo:'Arroz elaborado en casa', desc:'Cocido y aderezado siguiendo la técnica tradicional, punto clave de un buen sushi.', ico:'<circle cx="8" cy="9" r="1.4"/><circle cx="13" cy="7" r="1.4"/><circle cx="16" cy="11" r="1.4"/><circle cx="10" cy="13" r="1.4"/><circle cx="14" cy="15" r="1.4"/>' },
  ],
  direccion:'C. Amargura, 3',
  ciudad:'30830 La Ñora, Murcia',
  horario1:'Recoger en tienda: miércoles a domingo',
  horario2:'18:00–23:30',
  telefono:' 613 927 596',
  mapsUrl:'https://maps.google.com/?q=Obento+Japanese+Food',
  // Coordenadas aproximadas de C. Amargura, 3, 30830 La Ñora (Murcia),
  // usadas para calcular si un cliente está dentro del radio de reparto.
  // Si quieres más precisión, sustitúyelas por las de tu ubicación exacta
  // en Google Maps (clic derecho sobre el punto > "¿Qué hay aquí?").
  // Zonas donde se hace reparto a domicilio ("Para llevar").
  // En vez de geolocalización, el cliente elige su zona de una lista;
  // si no vive en ninguna de estas, no puede pedir para llevar.
  zonasReparto: ['La Ñora', 'Guadalupe', 'Rincón de Beniscornia', 'Jabalí Viejo', 'Jabalí Nuevo', 'Puebla de Soto'],
};

/* =========================================================
   HORARIOS DE SERVICIO, por día de la semana
   -----------------------------------------------------------
   L=Lunes M=Martes X=Miércoles J=Jueves V=Viernes S=Sábado D=Domingo
   Cada día vale [horaInicio, horaFin] o null si ese día no se
   ofrece ese servicio.
     - Recoger en tienda: miércoles a domingo, 18:00–23:30
     - Para llevar (reparto): miércoles a domingo, 20:00–23:30
   ========================================================= */
const HORARIOS = {
  recoger: {
    L: null,
    M: null,
    X: ['18:00','23:30'],
    J: ['18:00','23:30'],
    V: ['18:00','23:30'],
    S: ['18:00','23:30'],
    D: ['18:00','23:30'],
  },
  llevar: {
    L: null,
    M: null,
    X: ['20:00','23:30'],
    J: ['20:00','23:30'],
    V: ['20:00','23:30'],
    S: ['20:00','23:30'],
    D: ['20:00','23:30'],
  },
};

/* =========================================================
   Iconos de alérgenos (trazo fino, estilo propio)
   ========================================================= */
/* =========================================================
   Alérgenos — AQUÍ VA TU HUECO PARA LOS ICONOS
   -----------------------------------------------------------
   Por ahora cada alérgeno muestra un círculo con una
   abreviatura (ej. "Gl" para Gluten) a modo de marcador.
   Cuando tengas tus iconos, sustituye el valor "icono" por
   una de estas dos opciones:
     1) Una URL de imagen:      icono:'<img src="TU_URL.png">'
     2) Un SVG:                 icono:'<svg viewBox="0 0 24 24">...</svg>'
   y bórralo del campo "short" si ya no lo necesitas.
   ========================================================= */
const ALLERGENS = {
  gluten:{ label:'Gluten', short:'Gl',
    icono:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M12 6.5l3-2M12 6.5l-3-2"/><path d="M12 10l3-2M12 10l-3-2"/><path d="M12 13.5l3-2M12 13.5l-3-2"/><path d="M12 17l2.4-1.6M12 17l-2.4-1.6"/></svg>' },
  soja:{ label:'Soja', short:'So',
    icono:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4.5c-3 3-3.5 8.5-.5 11.5s8.5 2.5 11.5-.5"/><circle cx="9.6" cy="9" r="1.5"/><circle cx="12.8" cy="12" r="1.5"/><circle cx="16" cy="15.2" r="1.5"/></svg>' },
  pescado:{ label:'Pescado', short:'Pe',
    icono:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 12c4-5 11-6.5 15-2.5 2 2 3 2.5 4 2.5-1 1.5-2 2-4 2-4 4-11 2.5-15-2z"/><circle cx="7.2" cy="11.2" r="0.8" fill="currentColor" stroke="none"/></svg>' },
  crustaceos:{ label:'Crustáceos', short:'Cr',
    icono:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 17c-1.5-4 0-10 6-11 4-.7 8 2 8 6 0 2-1.3 3.2-3 3.2"/><path d="M17 11.5l3-1.2M17.5 14l3 .8"/><path d="M6.5 16.5l-2.3 1M8 18.5l-1.5 2"/><circle cx="7" cy="6.8" r="1"/></svg>' },
  huevo:{ label:'Huevo', short:'Hu',
    icono:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-4 4-6.5 9-6.5 12.5A6.5 6.5 0 0 0 12 22a6.5 6.5 0 0 0 6.5-6.5C18.5 12 16 7 12 3z"/></svg>' },
  frutos_secos:{ label:'Frutos de cáscara', short:'Fs',
    icono:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 8c0-1.6 1.3-3 3-3s3 1.4 3 3"/><path d="M7.5 8h9c0 5.5-2 9.5-4.5 12.5C9.5 17.5 7.5 13.5 7.5 8z"/><path d="M12 8v6"/></svg>' },
  lacteos:{ label:'Lácteos', short:'La',
    icono:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 3h5l1 3.2V20a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V6.2L9.5 3z"/><path d="M8.5 6.2h7"/></svg>' },
  sesamo:{ label:'Sésamo', short:'Se',
    icono:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="7.5" cy="9" rx="2.1" ry="1.1" transform="rotate(-25 7.5 9)"/><ellipse cx="13.5" cy="6.5" rx="2.1" ry="1.1" transform="rotate(15 13.5 6.5)"/><ellipse cx="17" cy="12" rx="2.1" ry="1.1" transform="rotate(-10 17 12)"/><ellipse cx="9" cy="15.5" rx="2.1" ry="1.1" transform="rotate(25 9 15.5)"/><ellipse cx="15" cy="17.5" rx="2.1" ry="1.1" transform="rotate(-20 15 17.5)"/></svg>' },
  moluscos:{ label:'Moluscos', short:'Mo',
    icono:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21a8.5 8.5 0 1 1 8.5-8.5"/><path d="M12 21a5.3 5.3 0 1 1 5.3-5.3"/><path d="M12 21a2.2 2.2 0 1 1 2.2-2.2"/></svg>' },
};

