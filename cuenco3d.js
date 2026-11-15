/* Cuenco 3D de NVR Studio · se carga solo al abrir «Personalizar» en Cuencos.
   Medidas reales del cuenco grande (mm), sacadas del archivo GRANDE_PLANTILLA. */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const P = {"zs": [-42.49, -42.0, -41.5, -41.0, -40.5, -40.0, -39.5, -39.0, -38.5, -38.0, -37.5, -37.0, -36.5, -36.0, -35.5, -35.0, -34.5, -34.0, -33.5, -33.0, -32.5, -32.0, -31.5, -31.0, -30.5, -30.0, -29.5, -29.0, -28.5, -28.0, -27.5, -27.0, -26.5, -26.0, -25.5, -25.0, -24.5, -24.0, -23.5, -23.0, -22.5, -22.0, -21.5, -21.0, -20.5, -20.0, -19.5, -19.0, -18.5, -18.0, -17.5, -17.0, -16.5, -16.0, -15.5, -15.0, -14.5, -14.0, -13.5, -13.0, -12.5, -12.0, -11.5, -11.0, -10.5, -10.0, -9.5, -9.0, -8.5, -8.0, -7.5, -7.0, -6.5, -6.0, -5.5, -5.0, -4.5, -4.0, -3.5, -3.0, -2.5, -2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0, 10.5, 11.0, 11.5, 12.0, 12.5, 13.0, 13.5, 14.0, 14.5, 15.0, 15.5, 16.0, 16.5, 17.0, 17.5, 18.0, 18.5, 19.0, 19.5, 20.0, 20.5, 21.0, 21.5, 22.0, 22.5, 23.0, 23.5, 24.0, 24.5, 25.0, 25.5, 26.0, 26.5, 27.0, 27.5, 28.0, 28.5, 29.0, 29.5, 30.0, 30.5, 31.0, 31.5, 32.0, 32.5, 33.0, 33.5, 34.0, 34.5, 35.0, 35.5, 36.0, 36.5, 37.0, 37.5, 38.0, 38.5, 39.0, 39.5, 40.0, 40.5, 41.0, 41.5, 42.0, 42.49], "G": [110.04, 110.75, 111.43, 112.08, 112.69, 113.26, 113.81, 114.32, 114.81, 115.28, 115.72, 116.14, 116.54, 116.91, 117.28, 117.62, 117.95, 118.26, 118.55, 118.84, 119.11, 119.36, 119.6, 119.84, 120.06, 120.26, 120.46, 120.65, 120.83, 121.0, 121.16, 121.31, 121.45, 121.59, 121.71, 121.83, 121.95, 122.05, 122.15, 122.24, 122.33, 122.4, 122.48, 122.54, 122.6, 122.66, 122.71, 122.76, 122.8, 122.83, 122.86, 122.89, 122.91, 122.92, 122.94, 122.94, 122.95, 122.95, 122.94, 122.94, 122.93, 122.91, 122.89, 122.87, 122.85, 122.82, 122.79, 122.76, 122.72, 122.68, 122.64, 122.59, 122.55, 122.5, 122.45, 122.39, 122.33, 122.28, 122.22, 122.15, 122.09, 122.02, 121.95, 121.88, 121.81, 121.74, 121.67, 121.59, 121.51, 121.43, 121.35, 121.26, 121.18, 121.09, 121.0, 120.91, 120.82, 120.73, 120.63, 120.53, 120.43, 120.33, 120.23, 120.13, 120.02, 119.91, 119.81, 119.69, 119.58, 119.47, 119.35, 119.24, 119.12, 119.0, 118.88, 118.75, 118.63, 118.5, 118.37, 118.24, 118.11, 117.98, 117.85, 117.71, 117.58, 117.44, 117.3, 117.16, 117.02, 116.87, 116.73, 116.58, 116.43, 116.29, 116.14, 115.98, 115.83, 115.68, 115.52, 115.37, 115.21, 115.05, 114.89, 114.73, 114.57, 114.4, 114.24, 114.07, 113.91, 113.74, 113.57, 113.4, 113.23, 113.06, 112.89, 112.72, 112.54, 112.37, 112.19, 112.01, 111.84, 111.66, 111.48, 111.3, 111.12, 110.94, 110.76, 110.57, 110.39, 110.21, 110.03], "T": [114.97, 115.51, 116.05, 116.56, 117.04, 117.5, 117.95, 118.37, 118.77, 119.16, 119.52, 119.88, 120.22, 120.54, 120.85, 121.14, 121.43, 121.7, 121.96, 122.2, 122.44, 122.67, 122.88, 123.09, 123.28, 123.47, 123.65, 123.82, 123.98, 124.14, 124.28, 124.42, 124.55, 124.67, 124.79, 124.9, 125.0, 125.1, 125.19, 125.28, 125.36, 125.43, 125.5, 125.56, 125.62, 125.67, 125.71, 125.76, 125.8, 125.83, 125.86, 125.88, 125.9, 125.92, 125.93, 125.94, 125.94, 125.94, 125.94, 125.93, 125.92, 125.9, 125.89, 125.87, 125.84, 125.82, 125.79, 125.76, 125.72, 125.68, 125.64, 125.6, 125.56, 125.51, 125.46, 125.4, 125.35, 125.29, 125.23, 125.17, 125.11, 125.04, 124.97, 124.91, 124.84, 124.76, 124.69, 124.61, 124.54, 124.46, 124.38, 124.3, 124.21, 124.13, 124.04, 123.95, 123.86, 123.77, 123.68, 123.58, 123.48, 123.38, 123.28, 123.18, 123.08, 122.97, 122.87, 122.76, 122.65, 122.54, 122.42, 122.31, 122.19, 122.08, 121.96, 121.83, 121.71, 121.59, 121.46, 121.34, 121.21, 121.08, 120.95, 120.81, 120.68, 120.54, 120.41, 120.27, 120.13, 119.99, 119.84, 119.7, 119.55, 119.41, 119.26, 119.11, 118.96, 118.81, 118.66, 118.5, 118.35, 118.19, 118.03, 117.87, 117.71, 117.55, 117.39, 117.23, 117.06, 116.9, 116.73, 116.56, 116.39, 116.22, 116.05, 115.88, 115.71, 115.54, 115.36, 115.19, 115.01, 114.84, 114.66, 114.48, 114.27, 114.02, 113.69, 113.27, 112.7, 111.89, 110.13], "I": [[74.36404723686329, -42.49], [74.60767414383022, -41.49], [74.85005365299918, -40.49], [75.09311471406131, -39.49], [75.33615936769422, -38.49], [75.57922299190287, -37.49], [75.82227847755107, -36.49], [76.06532638867344, -35.49], [76.30838829621749, -34.49], [76.5514458435113, -33.49], [76.79449428780262, -32.49], [77.03756048603839, -31.49], [77.28061253102683, -30.49], [77.52366357461297, -29.49], [77.76673018206326, -28.49], [78.00978707921529, -27.49], [78.252840852529, -26.49], [78.49589794001935, -25.49], [78.73895557299521, -24.49], [78.98200983903146, -23.49], [79.22506579251474, -22.49], [79.46812176328612, -21.49], [79.71117798337947, -20.49], [79.95423408592436, -19.49], [80.19729003910074, -18.49], [80.44034625868132, -17.49], [80.68339990646938, -16.49], [80.92645669962786, -15.49], [81.16951267485541, -14.49], [81.41256893133185, -13.49], [81.65562457883102, -12.49], [81.89868094326073, -11.49], [82.14173689950478, -10.49], [82.38479327520095, -9.49], [82.62784923502387, -8.49], [82.87090516765916, -7.49], [83.11395860731334, -6.49], [83.35701520380775, -5.49], [83.6000734538852, -4.49], [83.84312738182773, -3.49], [84.08618366941445, -2.49], [84.32923970966694, -1.49], [84.57229647558847, -0.49], [84.81535336675768, 0.51], [85.05841933303081, 1.51], [85.3014700232081, 2.51], [85.54452048831197, 3.51], [85.78758805692868, 4.51], [86.03063800702175, 5.51], [86.27369161690217, 6.51], [86.5167567469869, 7.51], [86.75980225327793, 8.51], [87.00285892487298, 9.51], [87.24592385645921, 10.51], [87.48896915575017, 11.51], [87.73203098542042, 12.51], [87.97508872373035, 13.51], [88.21813412510588, 14.51], [88.4612010930687, 15.51], [88.70425591238657, 16.51], [88.94730237481926, 17.51], [89.19036636098473, 18.51], [89.43342241110281, 19.51], [89.67647174615269, 20.51], [89.91953770808557, 21.51], [90.16258910295701, 22.51], [90.4056395248913, 23.51], [90.64870548736685, 24.51], [90.89176273551104, 25.51], [91.13481889188074, 26.51], [91.3778744176261, 27.51], [91.62092990009704, 28.51], [91.86398658268646, 29.51], [92.10704311532928, 30.51], [92.35009842360158, 31.51], [92.59315313586673, 32.51], [92.83620955982026, 33.51], [93.07926486800184, 34.51], [93.32329136121464, 35.51], [93.5791210197545, 36.51], [94.02012157493216, 37.51], [94.78511050638026, 38.51], [96.18853967007891, 39.51], [96.17, 39.5], [96.79, 39.75], [98.34, 40.0], [105.91, 40.0], [105.91, 41.5], [105.95, 41.75], [106.25, 42.25], [106.91, 42.5]], "rib": {"n": 100, "period": 3.6, "toothW": 2.0, "toothStart": 2.71}, "plaque": {"theta": 270, "z": 2.5, "halfW": 30.5, "halfH": 19.5, "n": 5, "raise": 0.25}};

/* Cómo se ve cada filamento en 3D (los ids son los de COLORES de la web) */
const C3D = {
  "blanco":{hex:"#E5E4E1"}, "gris-perla":{hex:"#B6BFCF", brillo:"perla"}, "beige":{hex:"#E0C397"}, "madera":{hex:"#F2DDB0"},
  "dorado":{hex:"#F2C12E", brillo:"seda"}, "amarillo":{hex:"#F6D736"}, "verde":{hex:"#D5EAC0"}, "verde-lima":{hex:"#D1E932"},
  "turquesa":{hex:"#14C79E"}, "azul-pastel":{hex:"#9ADBF4"}, "morado-pastel":{hex:"#B99AF5"}, "rosa-pastel":{hex:"#F6C8DE"},
  "rojo":{hex:"#ED3C2B"}, "cobre":{hex:"#B4502F", brillo:"metal"}, "marron-chocolate":{hex:"#D68E60"},
  "rojo-negro":{hex:"#2E2D35", hex2:"#B84B68", camaleon:true}, "negro":{hex:"#3A3E40"},
};
const POR_DEFECTO = "turquesa";
const ESCALAS = { "Pequeño":0.80, "Mediano":0.90, "Grande":1.00 };
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

let caja, canvas, renderer, scene, camera, controls, pieza, textoMesh, plastico, U, hint, aviso;
let vivo = false, ultimo = 0, nombreActual = null, colorActual = null, reanudar;
const muelle = { x:1, v:0, objetivo:1 };
const tweens = new Set();

/* ===== Montaje ===== */
export async function montar(contenedor){
  caja = contenedor; canvas = caja.querySelector('canvas'); hint = caja.querySelector('.v3d-hint'); aviso = caja.querySelector('.v3d-aviso');
  if(!document.querySelector('link[data-cinzel]')){
    const l = document.createElement('link'); l.rel='stylesheet'; l.dataset.cinzel='1';
    l.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@600&display=block'; document.head.append(l);
  }
  renderer = new THREE.WebGLRenderer({ canvas, antialias:true, alpha:true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.toneMapping = THREE.NeutralToneMapping;
  scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture; scene.environmentIntensity = 0.85;
  const sol = new THREE.DirectionalLight(0xffffff, 1.5); sol.position.set(-4, 3.2, 1.6); scene.add(sol);
  const relleno = new THREE.DirectionalLight(0xffffff, 0.35); relleno.position.set(3, 1, 4); scene.add(relleno);
  camera = new THREE.PerspectiveCamera(26, 1, 0.1, 100); camera.position.set(0, 2.1, 5.6);
  controls = new OrbitControls(camera, canvas);
  Object.assign(controls, { enableDamping:true, dampingFactor:0.08, enablePan:false, minDistance:3.4, maxDistance:8.5, minPolarAngle:0.25, maxPolarAngle:1.62, rotateSpeed:0.7, autoRotate:!reduce, autoRotateSpeed:0.9 });
  controls.target.set(0, 0.02, 0);
  controls.addEventListener('start', () => { pausaAuto(); hint && hint.classList.add('off'); });

  const raiz = new THREE.Group(); raiz.scale.setScalar(0.01); scene.add(raiz);
  pieza = new THREE.Group(); raiz.add(pieza);
  U = { uA:{value:new THREE.Color()}, uB:{value:new THREE.Color()}, uMix:{value:0} };
  plastico = new THREE.MeshStandardMaterial({ roughness:0.6, metalness:0, side:THREE.DoubleSide });
  plastico.onBeforeCompile = s => {
    Object.assign(s.uniforms, U);
    s.vertexShader = s.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vP;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvP = position;');
    s.fragmentShader = s.fragmentShader.replace('#include <common>', '#include <common>\nuniform vec3 uA; uniform vec3 uB; uniform float uMix; varying vec3 vP;')
      .replace('vec4 diffuseColor = vec4( diffuse, opacity );', 'vec4 diffuseColor = vec4( uA, opacity );')
      .replace('#include <normal_fragment_maps>', '#include <normal_fragment_maps>\n' +
        'float fr = pow(1.0 - clamp(abs(dot(normal, normalize(vViewPosition))), 0.0, 1.0), 2.6);\n' +
        'float grano = fract(sin(dot(floor(vP*2.2), vec3(12.9898,78.233,37.719))) * 43758.5453);\n' +
        'diffuseColor.rgb = mix(diffuseColor.rgb, uB, clamp(fr*0.95 + (grano-0.5)*0.12, 0.0, 1.0) * uMix);');
  };
  const acero = new THREE.MeshStandardMaterial({ color:0xd9dcdf, metalness:1, roughness:0.22, side:THREE.DoubleSide });
  pieza.add(new THREE.Mesh(cuerpoExterior(), plastico));
  pieza.add(new THREE.Mesh(cuerpoInterior(), plastico));
  pieza.add(new THREE.Mesh(cuencoAcero(), acero));
  raiz.add(sombra());

  aplicarColor(POR_DEFECTO, true);
  new ResizeObserver(ajustar).observe(canvas);
  try { await document.fonts.load('600 64px Cinzel'); } catch(e){}
  construirNombre('');
  ajustar();
  caja.querySelector('.v3d-frente')?.addEventListener('click', verDeFrente);
  caja.classList.add('listo');
  activar();
}

/* ===== API para la web ===== */
export function activar(){ if(!renderer) return; if(!vivo){ vivo = true; ultimo = performance.now(); requestAnimationFrame(bucle); } }
export function actualizar({ color, nombre, tam, placeholder }){
  if(!renderer) return;
  const id = C3D[color] ? color : POR_DEFECTO;
  if(id !== colorActual) aplicarColor(id);
  if(aviso) aviso.hidden = !!C3D[color];
  const n = (nombre||'').trim() || placeholder || 'LUNA';
  if(n !== nombreActual) construirNombre(n);
  muelle.objetivo = ESCALAS[tam] || 1; if(reduce){ muelle.x = muelle.objetivo; muelle.v = 0; }
  activar();
}
export function verDeFrente(){
  if(!camera) return;
  pausaAuto();
  const off = camera.position.clone().sub(controls.target);
  const sph = new THREE.Spherical().setFromVector3(off);
  const a0 = sph.theta, p0 = sph.phi, p1 = 1.2;
  let dA = -a0; dA = Math.atan2(Math.sin(dA), Math.cos(dA));
  if(Math.abs(dA) < 0.05 && Math.abs(p1-p0) < 0.05) return;
  tween(650, k => { sph.theta = a0 + dA*k; sph.phi = p0 + (p1-p0)*k; camera.position.copy(controls.target).add(new THREE.Vector3().setFromSpherical(sph)); }, easeInOut);
  activar();
}
export function mirandoDeLado(){ if(!camera) return false; const o = camera.position.clone().sub(controls.target); return Math.abs(Math.atan2(o.x, o.z)) > 0.6; }

/* ===== Geometría a partir de las medidas ===== */
const ZS = P.zs, NR = ZS.length, PL = P.plaque;
const lerpRow = (arr, z) => { if(z <= ZS[0]) return arr[0]; if(z >= ZS[NR-1]) return arr[NR-1]; const f = (z-ZS[0])/(ZS[NR-1]-ZS[0])*(NR-1), i = Math.floor(f), t = f-i; return arr[i]*(1-t) + arr[i+1]*t; };
const enPlaca = (th, z) => { const d = ((th - PL.theta + 540) % 360) - 180; return Math.pow(Math.abs(d/PL.halfW), PL.n) + Math.pow(Math.abs((z-PL.z)/PL.halfH), PL.n) <= 1; };
const toXYZ = (r, th, z, o, k) => { const a = th*Math.PI/180; o[k] = r*Math.cos(a); o[k+1] = z; o[k+2] = -r*Math.sin(a); };
function cuerpoExterior(){
  const R = P.rib, cols = [];
  for(let k=0;k<R.n;k++){ const s = R.toothStart + k*R.period, e = s + R.toothW, g = R.period - R.toothW;
    cols.push([s,1],[s,1],[s+R.toothW/2,1],[e,1],[e,1],[e,0],[e,0],[e+g/2,0],[s+R.period,0],[s+R.period,0]); }
  cols.push([R.toothStart+360,1]);
  const NC = cols.length, pos = new Float32Array(NC*NR*3);
  for(let c=0;c<NC;c++){ const [th, d] = cols[c];
    for(let j=0;j<NR;j++){ const z = ZS[j]; let r = d ? P.T[j] : P.G[j]; if(enPlaca(th, z)) r = P.T[j] + PL.raise; toXYZ(r, th, z, pos, (c*NR+j)*3); } }
  const idx = new Uint32Array((NC-1)*(NR-1)*6); let n = 0;
  for(let c=0;c<NC-1;c++) for(let j=0;j<NR-1;j++){ const a=c*NR+j, b=(c+1)*NR+j, cc=b+1, d=a+1; idx[n++]=a; idx[n++]=b; idx[n++]=d; idx[n++]=b; idx[n++]=cc; idx[n++]=d; }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos,3)); g.setIndex(new THREE.BufferAttribute(idx,1)); g.computeVertexNormals(); return g;
}
function cuerpoInterior(){
  const zb = ZS[0], zt = ZS[NR-1];
  return new THREE.LatheGeometry([[P.T[0], zb], [P.I[0][0], zb], ...P.I, [P.G[NR-1], zt]].map(([r,z]) => new THREE.Vector2(r,z)), 240);
}
function cuencoAcero(){
  const pts = [[105.55,40.05],[105.7,40.55],[105.3,41.05],[98.6,41.1],[97.4,40.7],[96.4,39.9]];
  for(let i=P.I.length-1;i>=0;i--){ const [r,z] = P.I[i]; if(z < 39.4 && z > -38) pts.push([r-0.45, z]); }
  pts.push([75.2,-39.8],[73.6,-41.1],[71,-41.6],[0,-41.6]); pts.reverse();
  return new THREE.LatheGeometry(pts.map(([r,z]) => new THREE.Vector2(r,z)), 160);
}
function sombra(){
  const cv = document.createElement('canvas'); cv.width = cv.height = 256; const x = cv.getContext('2d');
  const gr = x.createRadialGradient(128,128,40,128,128,128); gr.addColorStop(0,'rgba(40,30,30,.42)'); gr.addColorStop(.55,'rgba(40,30,30,.16)'); gr.addColorStop(1,'rgba(40,30,30,0)');
  x.fillStyle = gr; x.fillRect(0,0,256,256);
  const m = new THREE.Mesh(new THREE.PlaneGeometry(330,330), new THREE.MeshBasicMaterial({ map:new THREE.CanvasTexture(cv), transparent:true, depthWrite:false }));
  m.rotation.x = -Math.PI/2; m.position.y = -42.6; return m;
}

/* ===== Nombre en relieve, generado en directo ===== */
const TXT = { halfTh:25, halfZ:13, NU:520, NV:150, relieve:1.9 };
const mascara = document.createElement('canvas');
function construirNombre(nombre){
  nombreActual = nombre;
  const texto = (nombre || 'LUNA').toUpperCase();
  const W = TXT.NU+1, H = TXT.NV+1, S = 2;
  mascara.width = W*S; mascara.height = H*S;
  const x = mascara.getContext('2d', { willReadFrequently:true });
  x.fillStyle = '#000'; x.fillRect(0,0,W*S,H*S);
  const rMed = lerpRow(P.T, PL.z) + PL.raise, mmW = 2*TXT.halfTh*Math.PI/180*rMed, mmH = 2*TXT.halfZ;
  x.save(); x.scale(W*S/mmW, H*S/mmH);
  const track = 0.14, anchoMax = mmW*0.86; let fs = 15/0.7;
  const medir = f => { x.font = `600 ${f}px Cinzel`; let w = 0; for(const ch of texto) w += x.measureText(ch).width; return w + track*f*(texto.length-1); };
  let w = medir(fs); if(w > anchoMax){ fs *= anchoMax/w; w = medir(fs); }
  x.fillStyle = '#fff'; let cx = mmW/2 - w/2; const base = mmH/2 + fs*0.35;
  for(const ch of texto){ x.fillText(ch, cx, base); cx += x.measureText(ch).width + track*fs; }
  x.restore();
  const d = x.getImageData(0,0,W*S,H*S).data; let m = new Float32Array(W*H);
  for(let j=0;j<H;j++) for(let i=0;i<W;i++){ let s=0; for(let b=0;b<S;b++) for(let a=0;a<S;a++) s += d[((j*S+b)*W*S + (i*S+a))*4]; m[j*W+i] = s/(255*S*S); }
  for(let pasada=0;pasada<2;pasada++){ const o = new Float32Array(W*H);
    for(let j=0;j<H;j++) for(let i=0;i<W;i++){ let s=0,n=0; for(let b=-1;b<=1;b++) for(let a=-1;a<=1;a++){ const ii=i+a, jj=j+b; if(ii>=0&&jj>=0&&ii<W&&jj<H){ s+=m[jj*W+ii]; n++; } } o[j*W+i] = s/n; }
    m = o; }
  const pos = new Float32Array(W*H*3), alto = new Float32Array(W*H);
  for(let j=0;j<H;j++){ const z = PL.z + TXT.halfZ - (j/(H-1))*2*TXT.halfZ, rB = lerpRow(P.T, z) + PL.raise - 0.06;
    for(let i=0;i<W;i++){ const th = PL.theta - TXT.halfTh + (i/(W-1))*2*TXT.halfTh, t = Math.min(1, Math.max(0, (m[j*W+i]-0.12)/0.76)), h = t*t*(3-2*t)*TXT.relieve;
      alto[j*W+i] = h; toXYZ(rB + h, th, z, pos, (j*W+i)*3); } }
  const idx = [];
  for(let j=0;j<H-1;j++) for(let i=0;i<W-1;i++){ const a=j*W+i, b=a+1, c=a+W, e=c+1; if(alto[a]+alto[b]+alto[c]+alto[e] < 0.004) continue; idx.push(a,c,b, b,c,e); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos,3));
  g.setIndex(idx.length > 65535 ? new THREE.Uint32BufferAttribute(idx,1) : new THREE.Uint16BufferAttribute(idx,1)); g.computeVertexNormals();
  if(textoMesh){ textoMesh.geometry.dispose(); textoMesh.geometry = g; } else { textoMesh = new THREE.Mesh(g, plastico); pieza.add(textoMesh); }
}

/* ===== Color, animaciones y bucle ===== */
const easeInOut = t => t<.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2,3)/2;
const ease = t => t*t*(3-2*t);
function tween(ms, fn, curve){ if(reduce){ fn(1); return; } tweens.add({ t0:performance.now(), ms, fn, curve }); }
function aplicarColor(id, instant){
  colorActual = id; const c = C3D[id];
  const fA = U.uA.value.clone(), fB = U.uB.value.clone(), fM = U.uMix.value, fR = plastico.roughness, fMe = plastico.metalness;
  const tA = new THREE.Color(c.hex), tB = new THREE.Color(c.hex2 || c.hex), tM = c.camaleon ? 1 : 0;
  const tR = c.brillo==='perla' ? 0.32 : c.brillo==='seda' ? 0.3 : c.brillo==='metal' ? 0.34 : c.camaleon ? 0.52 : 0.6;
  const tMe = c.brillo==='perla' ? 0.25 : c.brillo==='seda' ? 0.42 : c.brillo==='metal' ? 0.55 : c.camaleon ? 0.12 : 0;
  const set = k => { U.uA.value.copy(fA).lerp(tA,k); U.uB.value.copy(fB).lerp(tB,k); U.uMix.value = fM+(tM-fM)*k; plastico.roughness = fR+(tR-fR)*k; plastico.metalness = fMe+(tMe-fMe)*k; };
  if(instant) set(1); else tween(260, set, ease);
}
function pausaAuto(){ controls.autoRotate = false; clearTimeout(reanudar); if(!reduce) reanudar = setTimeout(() => { controls.autoRotate = true; activar(); }, 9000); }
function ajustar(){
  const w = canvas.clientWidth, h = canvas.clientHeight; if(!w || !h) return;
  renderer.setSize(w, h, false); camera.aspect = w/h; camera.zoom = Math.min(1, (w/h)/1.55); camera.updateProjectionMatrix(); activar();
}
function bucle(ahora){
  /* Solo dibuja mientras la hoja de Cuencos está abierta y visible */
  if(!caja || caja.hidden || !caja.closest('.sheet-bg')?.classList.contains('open') || document.hidden){ vivo = false; return; }
  const dt = Math.min(0.05, (ahora - ultimo)/1000); ultimo = ahora;
  for(const t of tweens){ const k = Math.min(1, (ahora - t.t0)/t.ms); t.fn(t.curve(k)); if(k >= 1) tweens.delete(t); }
  const f = -170*(muelle.x - muelle.objetivo) - 22*muelle.v; muelle.v += f*dt; muelle.x += muelle.v*dt;
  pieza.scale.setScalar(muelle.x); pieza.position.y = -42.6*(1 - muelle.x);
  controls.update(dt); renderer.render(scene, camera);
  requestAnimationFrame(bucle);
}
