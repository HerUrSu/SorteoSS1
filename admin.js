// admin.js
const ADMIN_USER = "admin";
const ADMIN_PASS = "admin";

function applySavedBackgrounds() {
  const isSorteo = window.location.href.toLowerCase().includes('sorteo');
  const bg = localStorage.getItem(isSorteo ? 'sorteoBg' : 'ruletaBg');
  if (bg) {
    document.body.style.backgroundImage = `url(${bg})`;
  }

  // Lógica de Temas (Claro / Oscuro)
  if (!document.getElementById('lightThemeStyle')) {
    const style = document.createElement('style');
    style.id = 'lightThemeStyle';
    style.innerHTML = `
      body.light-theme {
        color: #334155 !important;
      }
      body.light-theme .navbar {
        background: rgba(255, 255, 255, 0.95) !important;
        border-color: rgba(0, 0, 0, 0.1) !important;
        box-shadow: 0 4px 15px rgba(0,0,0,0.05) !important;
      }
      body.light-theme .navbar .nav-item:not(.active) {
        color: #334155 !important;
      }
      body.light-theme .navbar .nav-item:not(.active):hover {
        background: rgba(0,0,0,0.05) !important;
        color: #334155 !important;
      }
      body.light-theme .wrap .card, 
      body.light-theme .wrap .glass-panel, 
      body.light-theme .drawer,
      body.light-theme .wrap .layout {
        background: rgba(255, 255, 255, 0.85) !important;
        border-color: rgba(255, 255, 255, 0.6) !important;
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12) !important;
        backdrop-filter: blur(5px) !important;
        -webkit-backdrop-filter: blur(5px) !important;
      }
      
      body.light-theme .wrap h1, 
      body.light-theme .wrap h2, 
      body.light-theme .wrap h3, 
      body.light-theme .wrap label, 
      body.light-theme .wrap p, 
      body.light-theme .drawer h3,
      body.light-theme .drawer label,
      body.light-theme .file-drop-area span,
      body.light-theme .custom-radio span,
      body.light-theme .status-text {
        color: #334155 !important;
        text-shadow: none !important;
      }
      
      body.light-theme .wrap .section-title {
        color: #ea1f27 !important; /* Red titles on light theme look premium */
        border-bottom-color: rgba(0, 0, 0, 0.1) !important;
      }
      
      body.light-theme .wrap strong, 
      body.light-theme .wrap b,
      body.light-theme .wrap span[style*="ffffff"] { 
        color: #334155 !important; 
      }
      
      body.light-theme .wrap div[style*="rgba(255,255,255,0.05)"] {
        background: rgba(0,0,0,0.03) !important;
        border-color: rgba(0,0,0,0.1) !important;
      }
      
      body.light-theme .wrap input, 
      body.light-theme .drawer textarea, 
      body.light-theme .wrap .result-box, 
      body.light-theme .wrap .result, 
      body.light-theme .wrap .file-drop-area, 
      body.light-theme .wrap .custom-radio,
      body.light-theme .drawer .item {
        background: #f8fafc !important;
        border: 1px solid rgba(0, 0, 0, 0.15) !important;
        color: #334155 !important;
        font-weight: 600;
        transition: all 0.2s ease;
      }
      
      /* Active states for inputs */
      body.light-theme .wrap input:focus,
      body.light-theme .drawer textarea:focus {
        background: #ffffff !important;
        border-color: #ea1f27 !important;
        box-shadow: 0 0 0 3px rgba(234, 31, 39, 0.1) !important;
      }

      body.light-theme .wrap .custom-radio .checkmark {
        border-color: rgba(0,0,0,0.3) !important;
        background: #ffffff !important;
      }
      body.light-theme .wrap .custom-radio input:checked + .checkmark {
        background: #ea1f27 !important;
        border-color: #ea1f27 !important;
      }
      
      body.light-theme .wrap table {
        background: rgba(0,0,0,0.02) !important;
      }
      body.light-theme .wrap table tr {
        background: transparent !important;
      }
      body.light-theme .wrap table tr[style*="0.1"] {
        background: rgba(0,0,0,0.04) !important;
      }
      body.light-theme .wrap table th, 
      body.light-theme .wrap table td {
        color: #334155 !important;
      }
      
      body.light-theme .wrap .ghost,
      body.light-theme .drawer .ghost {
        color: #334155 !important;
        border: 1px solid rgba(0,0,0,0.2) !important;
        background: #f1f5f9 !important;
        box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      }
      body.light-theme .wrap .ghost:hover,
      body.light-theme .drawer .ghost:hover {
        background: #e2e8f0 !important;
      }

      body.light-theme .wrap #btnExtraer {
        background: #ea1f27 !important;
        color: #ffffff !important;
        box-shadow: 0 4px 10px rgba(234, 31, 39, 0.2) !important;
      }
      body.light-theme .wrap #btnExtraer:hover {
        background: #c90017 !important;
      }
      
      body.light-theme .wrap .success-text {
        color: #059669 !important; /* Emerald green for readable success state */
      }
      
      body.light-theme .wrap .page-title {
        color: #ea1f27 !important;
        text-shadow: 0 4px 15px rgba(255, 255, 255, 0.7) !important;
      }
      
      body.light-theme .winner-board {
        background: rgba(234, 31, 39, 0.05) !important;
        border-color: rgba(234, 31, 39, 0.2) !important;
      }
    `;
    document.head.appendChild(style);
  }

  const theme = localStorage.getItem(isSorteo ? 'sorteoTheme' : 'ruletaTheme') || 'dark';
  if (theme === 'light') {
    document.body.classList.add('light-theme');
  } else {
    document.body.classList.remove('light-theme');
  }
}

function initAdmin() {
  if (document.getElementById('adminBtnFab')) return; // Evitar duplicados

  const style = document.createElement('style');
  style.innerHTML = `
    .admin-modal-overlay {
      position: fixed; inset: 0; background: rgba(0,0,0,0.8);
      z-index: 10000; display: none; place-items: center;
      backdrop-filter: blur(8px);
      animation: fadeInDown 0.3s ease-out;
    }
    .admin-modal {
      background: rgba(10, 14, 30, 0.95);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 16px; padding: 25px; width: 450px; max-width: 90vw;
      color: white; font-family: 'Santander Micro Text', sans-serif;
      box-shadow: 0 20px 50px rgba(0,0,0,0.5);
      max-height: 90vh; overflow-y: auto;
    }
    .admin-modal h2 { margin: 0 0 20px; font-family: 'Santander Condensed', sans-serif; text-align: center; font-size: 28px; }
    
    .admin-section {
      background: rgba(255,255,255,0.05); padding: 15px; border-radius: 12px; margin-bottom: 20px;
      border: 1px solid rgba(255,255,255,0.05);
    }
    
    .admin-modal label { display: block; margin-bottom: 8px; font-size: 15px; font-family: 'Santander Condensed', sans-serif; letter-spacing: 0.5px;}
    
    .admin-modal input[type="file"], .admin-modal select { 
      margin-bottom: 10px; width: 100%; 
      background: rgba(0,0,0,0.3); border: 1px dashed rgba(255,255,255,0.3); 
      padding: 10px; border-radius: 8px; color: white; cursor: pointer;
      font-family: inherit; font-size: 14px;
      position: relative !important; height: auto !important; opacity: 1 !important;
      top: auto !important; left: auto !important;
    }
    .admin-modal select { border-style: solid; }
    .admin-modal select option { background: #0b1022; color: white; }
    
    .preview-box {
      width: 100%; height: 220px; border-radius: 8px; background-color: rgba(0,0,0,0.3);
      background-size: cover; background-position: center; border: 1px solid rgba(255,255,255,0.1);
      display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.5);
      font-size: 14px; margin-bottom: 10px; font-weight: bold; position: relative; overflow: hidden;
    }
    .mock-nav {
      position:absolute; top:8px; left:8px; width:45px; height:12px; background:rgba(10,14,30,0.6); 
      border-radius:10px; backdrop-filter:blur(5px); transition: all 0.3s;
    }
    .mock-card {
      position:absolute; background:rgba(10, 14, 30, 0.15); border:1px solid rgba(255,255,255,0.18); 
      border-radius:12px; backdrop-filter:blur(5px); transition: all 0.3s;
    }
    .light-preview .mock-nav {
      background:rgba(255,255,255,0.95); border:1px solid rgba(0,0,0,0.1);
    }
    .light-preview .mock-card {
      background:rgba(255,255,255,0.85); border-color:rgba(255,255,255,0.6);
    }
    .preview-text {
       position:absolute; z-index:2; text-shadow:0 2px 4px #000; font-weight:bold; pointer-events:none;
       color: #fff;
    }
    .light-preview .preview-text {
       color: #334155; text-shadow: none; font-weight: 800; background:rgba(255,255,255,0.6); padding:2px 8px; border-radius:4px;
    }

    .admin-modal button {
      background: #EA1F27; color: white; border: none; padding: 14px; width: 100%; border-radius: 8px;
      font-weight: bold; cursor: pointer; font-size: 18px; font-family: 'Santander Condensed', sans-serif;
      transition: background 0.2s;
    }
    .admin-modal button:hover { background: #C90017; }
    .btn-close-admin { background: transparent !important; border: 1px solid rgba(255,255,255,0.2) !important; margin-top: 10px; font-size: 16px !important;}
    .btn-close-admin:hover { background: rgba(255,255,255,0.1) !important; }
    
    #adminBtnFab {
       position: fixed; bottom: 20px; right: 20px; background: rgba(10,14,30,0.8); 
       border: 1px solid rgba(255,255,255,0.2); padding: 12px 20px; border-radius: 50px;
       color: white; cursor: pointer; font-size: 15px; font-weight: bold; z-index: 9999;
       backdrop-filter: blur(8px); display: flex; align-items: center; gap: 8px;
       transition: all 0.2s; font-family: 'Santander Condensed', sans-serif;
       box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    }
    #adminBtnFab:hover {
       background: #EA1F27; border-color: #EA1F27;
       box-shadow: 0 5px 20px rgba(234, 31, 39, 0.5);
    }
  `;
  document.head.appendChild(style);

  const btn = document.createElement('button');
  btn.id = 'adminBtnFab';
  btn.innerHTML = '🔒 ADMIN';
  btn.title = "Panel de Administrador";
  document.body.appendChild(btn);

  const overlay = document.createElement('div');
  overlay.className = 'admin-modal-overlay';
  overlay.id = 'adminOverlay';
  overlay.innerHTML = `
    <div class="admin-modal" onclick="event.stopPropagation()">
      <h2 style="margin-bottom: 30px;">Panel de Control Central</h2>

      <div class="admin-section">
        <h3 style="color: #EA1F27; margin: 0 0 10px 0; font-family: 'Santander Condensed', sans-serif;">⚙️ RULETA (Vista principal)</h3>
        
        <label>Modo de color (Cajas transparentes):</label>
        <select id="themeSelectRuleta" style="margin-bottom: 20px;">
          <option value="dark">Modo Oscuro (Cristal oscuro)</option>
          <option value="light">Modo Claro (Cristal claro)</option>
        </select>

        <label>Nuevo Fondo de Pantalla:</label>
        <div id="previewRuleta" class="preview-box">
          <div class="mock-nav"></div>
          <div class="mock-card" style="top:25px; bottom:25px; left:50%; width:60%; transform:translate(-50%, 0); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:8px;">
             <!-- Wheel mock -->
             <div style="width:70px; height:70px; border-radius:50%; background:conic-gradient(#EA1F27 0 90deg, #41c3d2 90deg 180deg, #f8d34c 180deg 270deg, #b15291 270deg 360deg); border:2px solid rgba(255,255,255,0.3); position:relative;">
               <div style="position:absolute; top:50%; left:50%; width:16px; height:16px; background:#EA1F27; border-radius:50%; transform:translate(-50%,-50%); border:1px solid #fff;"></div>
             </div>
             <!-- Result Box Mock -->
             <div style="width: 70%; height: 15%; background: rgba(255,255,255,0.1); border-radius: 6px;"></div>
          </div>
          <span class="preview-text">Sin fondo</span>
        </div>
        <input type="file" id="bgRuleta" accept="image/*">
      </div>
      
      <div class="admin-section">
        <h3 style="color: #EA1F27; margin: 0 0 10px 0; font-family: 'Santander Condensed', sans-serif;">⚙️ SORTEO</h3>
        
        <label>Modo de color (Cajas transparentes):</label>
        <select id="themeSelectSorteo" style="margin-bottom: 20px;">
          <option value="dark">Modo Oscuro (Cristal oscuro)</option>
          <option value="light">Modo Claro (Cristal claro)</option>
        </select>

        <label>Nuevo Fondo de Pantalla:</label>
        <div id="previewSorteo" class="preview-box">
          <div class="mock-nav"></div>
          
          <div style="position:absolute; top:35px; bottom:10px; width:70%; left:50%; transform:translate(-50%, 0); display:flex; flex-direction:column; gap:8px;">
            <div style="display:flex; gap:8px; height: 60%; width: 100%;">
              <div class="mock-card" style="position:relative; flex:1;">
                 <div style="width:80%; height:10%; background:rgba(255,255,255,0.2); margin:10% 10% 0; border-radius:2px;"></div>
                 <div style="width:60%; height:40%; border:1px dashed rgba(255,255,255,0.4); margin:10% 10%; border-radius:4px;"></div>
              </div>
              <div class="mock-card" style="position:relative; flex:1;">
                 <div style="width:80%; height:10%; background:rgba(255,255,255,0.2); margin:10% 10% 0; border-radius:2px;"></div>
                 <div style="width:90%; height:15%; background:rgba(255,255,255,0.1); margin:10% 5%; border-radius:4px;"></div>
                 <div style="width:90%; height:15%; background:rgba(255,255,255,0.1); margin:10% 5%; border-radius:4px;"></div>
              </div>
            </div>
            <!-- Botón Grande Sorteo -->
            <div style="background:#EA1F27; height: 20%; width: 60%; margin: 0 auto; border-radius:6px; margin-top:2%;"></div>
          </div>
          <span class="preview-text">Sin fondo</span>
        </div>
        <input type="file" id="bgSorteo" accept="image/*">
      </div>
      
      <button id="btnSaveAdmin">✅ APLICAR Y GUARDAR TODO</button>
      <button id="btnCloseAdmin" class="btn-close-admin">Cerrar</button>
    </div>
  `;
  document.body.appendChild(overlay);

  // Cargar las previsualizaciones iniciales si ya hay algún fondo guardado
  const savedRuleta = localStorage.getItem('ruletaBg');
  if (savedRuleta) {
    document.getElementById('previewRuleta').style.backgroundImage = `url(${savedRuleta})`;
    document.getElementById('previewRuleta').querySelector('.preview-text').textContent = '';
  }
  const savedSorteo = localStorage.getItem('sorteoBg');
  if (savedSorteo) {
    document.getElementById('previewSorteo').style.backgroundImage = `url(${savedSorteo})`;
    document.getElementById('previewSorteo').querySelector('.preview-text').textContent = '';
  }

  btn.addEventListener('click', () => {
    // Si quieres saltarte la contraseña para probar sin molestia durante el desarrollo,
    // puedes comentar las siguientes 4 líneas.
    const user = prompt("Usuario Administrador:");
    if (user !== ADMIN_USER) return alert("Usuario incorrecto.");
    const pass = prompt("Contraseña Administrador:");
    if (pass !== ADMIN_PASS) return alert("Contraseña incorrecta.");
    
    // Al abrir de nuevo el modál, mantener la selección actual por si hubieron cambios.
    document.getElementById('themeSelectRuleta').value = localStorage.getItem('ruletaTheme') || 'dark';
    document.getElementById('themeSelectSorteo').value = localStorage.getItem('sorteoTheme') || 'dark';

    overlay.style.display = 'grid';
    document.getElementById('themeSelectRuleta').dispatchEvent(new Event('change'));
    document.getElementById('themeSelectSorteo').dispatchEvent(new Event('change'));
  });

  document.getElementById('btnCloseAdmin').addEventListener('click', () => {
    overlay.style.display = 'none';
  });

  overlay.addEventListener('click', () => {
    overlay.style.display = 'none'; // cerrar si tocan afuera
  });

  // Mostrar previsualización instantánea al elegir archivo
  const setupPreview = (inputId, previewId) => {
    document.getElementById(inputId).addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          document.getElementById(previewId).style.backgroundImage = `url(${e.target.result})`;
          document.getElementById(previewId).querySelector('.preview-text').textContent = '';
        };
        reader.readAsDataURL(file);
      }
    });
  };

  setupPreview('bgRuleta', 'previewRuleta');
  setupPreview('bgSorteo', 'previewSorteo');

  const themeSelR = document.getElementById('themeSelectRuleta');
  themeSelR.addEventListener('change', () => {
    document.getElementById('previewRuleta').className = themeSelR.value === 'light' ? 'preview-box light-preview' : 'preview-box';
  });
  
  const themeSelS = document.getElementById('themeSelectSorteo');
  themeSelS.addEventListener('change', () => {
    document.getElementById('previewSorteo').className = themeSelS.value === 'light' ? 'preview-box light-preview' : 'preview-box';
  });

  // Lógica de guardado final
  document.getElementById('btnSaveAdmin').addEventListener('click', async () => {
    // 1. Theme Configuration
    localStorage.setItem('ruletaTheme', document.getElementById('themeSelectRuleta').value);
    localStorage.setItem('sorteoTheme', document.getElementById('themeSelectSorteo').value);

    // 2. Background Upload Configuration
    const rFile = document.getElementById('bgRuleta').files[0];
    const sFile = document.getElementById('bgSorteo').files[0];

    const btnSave = document.getElementById('btnSaveAdmin');
    btnSave.textContent = 'Procesando...';

    const saveFile = (file, key) => {
      return new Promise(resolve => {
        if (!file) return resolve();
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            localStorage.setItem(key, e.target.result);
          } catch(err) {
            alert('Aviso técnico: Una imagen es demasiado pesada para la memoria (límite de ~5MB superado). Usa archivos JPG optimizados.');
          }
          resolve();
        }
        reader.readAsDataURL(file);
      });
    };

    if (rFile) await saveFile(rFile, 'ruletaBg');
    if (sFile) await saveFile(sFile, 'sorteoBg');

    // 3. Implements Backgrounds and themes immediately
    applySavedBackgrounds();
    
    setTimeout(() => {
      overlay.style.display = 'none';
      if(rFile) document.getElementById('bgRuleta').value = '';
      if(sFile) document.getElementById('bgSorteo').value = '';
      btnSave.textContent = '✅ APLICAR Y GUARDAR TODO';
      alert("¡Configuraciones registradas y aplicadas de inmediato!");
    }, 400);
  });
}

// Empezar ejecución
applySavedBackgrounds();
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAdmin);
} else {
  initAdmin();
}
