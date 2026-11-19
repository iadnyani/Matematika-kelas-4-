/**
 * Utilitas Pembuat Gambar / Ilustrasi Matematis (SVG)
 * untuk Soal Bilangan Cacah Sampai 1.000 (Kelas IV SD)
 */

export interface QuestionVisualAsset {
  svg: string;
  alt: string;
  width: number;
  height: number;
}

function buildDienesSvg(
  hundreds: number,
  tens: number,
  ones: number,
  title: string
): string {
  const w = 580;
  const h = 210;

  // Render ratusan plates (biru)
  let hSvg = '';
  for (let i = 0; i < hundreds; i++) {
    const col = i % 4;
    const row = Math.floor(i / 4);
    const x = 24 + col * 42;
    const y = 44 + row * 46;
    hSvg += `
      <g transform="translate(${x},${y})">
        <rect x="0" y="0" width="36" height="36" rx="3" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.4"/>
        <line x1="9" y1="0" x2="9" y2="36" stroke="#93c5fd" stroke-width="0.7"/>
        <line x1="18" y1="0" x2="18" y2="36" stroke="#93c5fd" stroke-width="0.7"/>
        <line x1="27" y1="0" x2="27" y2="36" stroke="#93c5fd" stroke-width="0.7"/>
        <line x1="0" y1="9" x2="36" y2="9" stroke="#93c5fd" stroke-width="0.7"/>
        <line x1="0" y1="18" x2="36" y2="18" stroke="#93c5fd" stroke-width="0.7"/>
        <line x1="0" y1="27" x2="36" y2="27" stroke="#93c5fd" stroke-width="0.7"/>
        <text x="18" y="22" font-family="Arial,sans-serif" font-size="10" font-weight="bold" fill="#1e3a8a" text-anchor="middle">100</text>
      </g>
    `;
  }

  // Render puluhan rods (hijau)
  let tSvg = '';
  for (let i = 0; i < tens; i++) {
    const x = 228 + i * 24;
    const y = 48;
    tSvg += `
      <g transform="translate(${x},${y})">
        <rect x="0" y="0" width="16" height="92" rx="2.5" fill="#d1fae5" stroke="#047857" stroke-width="1.4"/>
        <line x1="0" y1="23" x2="16" y2="23" stroke="#6ee7b7" stroke-width="0.8"/>
        <line x1="0" y1="46" x2="16" y2="46" stroke="#6ee7b7" stroke-width="0.8"/>
        <line x1="0" y1="69" x2="16" y2="69" stroke="#6ee7b7" stroke-width="0.8"/>
        <text x="8" y="106" font-family="Arial,sans-serif" font-size="9" font-weight="bold" fill="#065f46" text-anchor="middle">10</text>
      </g>
    `;
  }

  // Render satuan cubes (kuning/amber)
  let oSvg = '';
  for (let i = 0; i < ones; i++) {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 420 + col * 34;
    const y = 52 + row * 34;
    oSvg += `
      <g transform="translate(${x},${y})">
        <rect x="0" y="0" width="24" height="24" rx="3" fill="#fef3c7" stroke="#b45309" stroke-width="1.4"/>
        <text x="12" y="16" font-family="Arial,sans-serif" font-size="10" font-weight="bold" fill="#92400e" text-anchor="middle">1</text>
      </g>
    `;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
    <rect width="${w}" height="${h}" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="${w / 2}" y="22" font-family="Arial,sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">${title}</text>
    <rect x="14" y="34" width="190" height="145" rx="8" fill="#ffffff" stroke="#e2e8f0"/>
    <text x="109" y="196" font-family="Arial,sans-serif" font-size="11" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Kelompok Ratusan</text>
    ${hSvg}
    <rect x="214" y="34" width="180" height="145" rx="8" fill="#ffffff" stroke="#e2e8f0"/>
    <text x="304" y="196" font-family="Arial,sans-serif" font-size="11" font-weight="bold" fill="#047857" text-anchor="middle">Kelompok Puluhan</text>
    ${tSvg}
    <rect x="404" y="34" width="162" height="145" rx="8" fill="#ffffff" stroke="#e2e8f0"/>
    <text x="485" y="196" font-family="Arial,sans-serif" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">Kelompok Satuan</text>
    ${oSvg}
  </svg>`;
}

function buildAbacusSvg(hundreds: number, tens: number, ones: number): string {
  const w = 460;
  const h = 210;

  const drawBeads = (cx: number, count: number, color: string, stroke: string) => {
    let beads = '';
    for (let i = 0; i < count; i++) {
      const cy = 148 - i * 12;
      beads += `<ellipse cx="${cx}" cy="${cy}" rx="20" ry="5.2" fill="${color}" stroke="${stroke}" stroke-width="1.4"/>`;
    }
    return beads;
  };

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
    <rect width="${w}" height="${h}" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="${w / 2}" y="22" font-family="Arial,sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Dekak-Dekak (Abakus) Nilai Tempat</text>
    <rect x="55" y="160" width="350" height="14" rx="4" fill="#92400e"/>
    <!-- Tiang -->
    <rect x="122" y="42" width="6" height="118" rx="3" fill="#64748b"/>
    <rect x="227" y="42" width="6" height="118" rx="3" fill="#64748b"/>
    <rect x="332" y="42" width="6" height="118" rx="3" fill="#64748b"/>
    ${drawBeads(125, hundreds, '#3b82f6', '#1d4ed8')}
    ${drawBeads(230, tens, '#10b981', '#047857')}
    ${drawBeads(335, ones, '#f59e0b', '#b45309')}
    <text x="125" y="193" font-family="Arial,sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Ratusan</text>
    <text x="230" y="193" font-family="Arial,sans-serif" font-size="12" font-weight="bold" fill="#065f46" text-anchor="middle">Puluhan</text>
    <text x="335" y="193" font-family="Arial,sans-serif" font-size="12" font-weight="bold" fill="#92400e" text-anchor="middle">Satuan</text>
  </svg>`;
}

function buildNumberLineSvg(
  values: (number | string)[],
  title: string
): string {
  const w = 560;
  const h = 140;
  const startX = 48;
  const endX = 512;
  const step = (endX - startX) / (values.length - 1);

  let ticks = '';
  values.forEach((val, idx) => {
    const x = startX + idx * step;
    const isUnknown = typeof val === 'string';
    ticks += `
      <line x1="${x}" y1="64" x2="${x}" y2="82" stroke="#1e293b" stroke-width="2.2"/>
      ${
        isUnknown
          ? `<rect x="${x - 22}" y="88" width="44" height="28" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
             <text x="${x}" y="107" font-family="Arial,sans-serif" font-size="15" font-weight="bold" fill="#b45309" text-anchor="middle">${val}</text>`
          : `<text x="${x}" y="106" font-family="Arial,sans-serif" font-size="14" font-weight="bold" fill="#0f172a" text-anchor="middle">${val}</text>`
      }
    `;
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
    <rect width="${w}" height="${h}" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="${w / 2}" y="26" font-family="Arial,sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">${title}</text>
    <line x1="28" y1="73" x2="532" y2="73" stroke="#1e40af" stroke-width="3"/>
    <polygon points="538,73 526,67 526,79" fill="#1e40af"/>
    <polygon points="22,73 34,67 34,79" fill="#1e40af"/>
    ${ticks}
  </svg>`;
}

export const QUESTION_VISUALS: Record<string, QuestionVisualAsset> = {
  vis_dienes_347: {
    width: 580,
    height: 210,
    alt: 'Gambar blok nilai tempat: 3 lempeng ratusan, 4 batang puluhan, dan 7 kubus satuan',
    svg: buildDienesSvg(3, 4, 7, 'Susunan Kubus Nilai Tempat (Blok Dienes)'),
  },
  vis_abacus_608: {
    width: 460,
    height: 210,
    alt: 'Gambar dekak-dekak dengan 6 manik pada ratusan, 0 pada puluhan, dan 8 pada satuan',
    svg: buildAbacusSvg(6, 0, 8),
  },
  vis_garis_bilangan_450: {
    width: 560,
    height: 140,
    alt: 'Garis bilangan dengan titik 400, 425, tanda tanya, 475, 500, dan 525',
    svg: buildNumberLineSvg([400, 425, '?', 475, 500, 525], 'Garis Bilangan Loncat Sama'),
  },
  vis_keranjang_apel_compare: {
    width: 520,
    height: 170,
    alt: 'Dua keranjang apel: Keranjang A berisi 548 buah dan Keranjang B berisi 584 buah',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 170" width="520" height="170">
      <rect width="520" height="170" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="260" y="24" font-family="Arial,sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Perbandingan Banyak Apel di Dua Keranjang</text>
      <rect x="28" y="42" width="180" height="106" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
      <text x="118" y="68" font-family="Arial,sans-serif" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">Keranjang A</text>
      <circle cx="88" cy="96" r="10" fill="#ef4444"/><circle cx="110" cy="92" r="10" fill="#dc2626"/><circle cx="132" cy="96" r="10" fill="#ef4444"/><circle cx="148" cy="94" r="9" fill="#b91c1c"/>
      <rect x="52" y="114" width="132" height="26" rx="6" fill="#1d4ed8"/>
      <text x="118" y="132" font-family="Arial,sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">548 buah</text>

      <circle cx="260" cy="95" r="24" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="260" y="102" font-family="Arial,sans-serif" font-size="20" font-weight="bold" fill="#b45309" text-anchor="middle">...</text>

      <rect x="312" y="42" width="180" height="106" rx="10" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
      <text x="402" y="68" font-family="Arial,sans-serif" font-size="13" font-weight="bold" fill="#065f46" text-anchor="middle">Keranjang B</text>
      <circle cx="372" cy="96" r="10" fill="#ef4444"/><circle cx="394" cy="92" r="10" fill="#dc2626"/><circle cx="416" cy="96" r="10" fill="#ef4444"/><circle cx="432" cy="94" r="9" fill="#b91c1c"/>
      <rect x="336" y="114" width="132" height="26" rx="6" fill="#047857"/>
      <text x="402" y="132" font-family="Arial,sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">584 buah</text>
    </svg>`,
  },
  vis_kotak_pensil_mult: {
    width: 540,
    height: 175,
    alt: '6 kotak pensil yang masing-masing berisi 12 batang pensil',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 175" width="540" height="175">
      <rect width="540" height="175" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="270" y="24" font-family="Arial,sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Persediaan Kotak Pensil Koperasi Sekolah (6 Kotak)</text>
      ${[0, 1, 2, 3, 4, 5]
        .map((i) => {
          const col = i % 3;
          const row = Math.floor(i / 3);
          const x = 32 + col * 164;
          const y = 40 + row * 62;
          return `<g transform="translate(${x},${y})">
            <rect width="148" height="50" rx="8" fill="#ffffff" stroke="#3b82f6" stroke-width="1.8"/>
            <rect x="10" y="12" width="26" height="26" rx="4" fill="#dbeafe"/>
            <text x="23" y="29" font-family="Arial,sans-serif" font-size="11" font-weight="bold" fill="#1d4ed8" text-anchor="middle">#${i + 1}</text>
            <text x="90" y="24" font-family="Arial,sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">12 batang</text>
            <text x="90" y="39" font-family="Arial,sans-serif" font-size="10" fill="#64748b" text-anchor="middle">pensil warna</text>
          </g>`;
        })
        .join('')}
    </svg>`,
  },
  vis_penjumlahan_blok_426_153: {
    width: 560,
    height: 165,
    alt: 'Penjumlahan kartu nilai tempat 426 ditambah 153',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 165" width="560" height="165">
      <rect width="560" height="165" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="280" y="24" font-family="Arial,sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Gabungan Kumpulan Kelereng dalam Dua Wadah</text>
      <rect x="24" y="42" width="210" height="102" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="1.8"/>
      <text x="129" y="64" font-family="Arial,sans-serif" font-size="12" font-weight="bold" fill="#1e40af" text-anchor="middle">Wadah Pertama</text>
      <text x="129" y="96" font-family="Arial,sans-serif" font-size="26" font-weight="bold" fill="#0f172a" text-anchor="middle">426</text>
      <text x="129" y="122" font-family="Arial,sans-serif" font-size="11" fill="#475569" text-anchor="middle">4 Ratusan + 2 Puluhan + 6 Satuan</text>

      <circle cx="280" cy="93" r="18" fill="#1d4ed8"/>
      <text x="280" y="100" font-family="Arial,sans-serif" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">+</text>

      <rect x="326" y="42" width="210" height="102" rx="10" fill="#ecfdf5" stroke="#059669" stroke-width="1.8"/>
      <text x="431" y="64" font-family="Arial,sans-serif" font-size="12" font-weight="bold" fill="#065f46" text-anchor="middle">Wadah Kedua</text>
      <text x="431" y="96" font-family="Arial,sans-serif" font-size="26" font-weight="bold" fill="#0f172a" text-anchor="middle">153</text>
      <text x="431" y="122" font-family="Arial,sans-serif" font-size="11" fill="#475569" text-anchor="middle">1 Ratusan + 5 Puluhan + 3 Satuan</text>
    </svg>`,
  },
  vis_diagram_batang_perpus: {
    width: 560,
    height: 230,
    alt: 'Diagram batang jumlah pengunjung perpustakaan SD N 2 Pendem: Senin 245, Selasa 318, Rabu 275, Kamis 362',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 230" width="560" height="230">
      <rect width="560" height="230" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="280" y="24" font-family="Arial,sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Data Pengunjung Perpustakaan SD N 2 Pendem</text>
      <!-- Sumbu -->
      <line x1="65" y1="44" x2="65" y2="190" stroke="#475569" stroke-width="2"/>
      <line x1="65" y1="190" x2="520" y2="190" stroke="#475569" stroke-width="2"/>
      <line x1="65" y1="154" x2="520" y2="154" stroke="#e2e8f0" stroke-dasharray="4"/>
      <line x1="65" y1="118" x2="520" y2="118" stroke="#e2e8f0" stroke-dasharray="4"/>
      <line x1="65" y1="82" x2="520" y2="82" stroke="#e2e8f0" stroke-dasharray="4"/>
      <line x1="65" y1="46" x2="520" y2="46" stroke="#e2e8f0" stroke-dasharray="4"/>
      <text x="58" y="194" font-family="Arial,sans-serif" font-size="10" fill="#64748b" text-anchor="end">0</text>
      <text x="58" y="158" font-family="Arial,sans-serif" font-size="10" fill="#64748b" text-anchor="end">100</text>
      <text x="58" y="122" font-family="Arial,sans-serif" font-size="10" fill="#64748b" text-anchor="end">200</text>
      <text x="58" y="86" font-family="Arial,sans-serif" font-size="10" fill="#64748b" text-anchor="end">300</text>
      <text x="58" y="50" font-family="Arial,sans-serif" font-size="10" fill="#64748b" text-anchor="end">400</text>
      <!-- Batang: skala 400 = 144px => 0.36px per orang -->
      <rect x="105" y="101.8" width="60" height="88.2" rx="4" fill="#3b82f6"/>
      <text x="135" y="96" font-family="Arial,sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">245</text>
      <text x="135" y="210" font-family="Arial,sans-serif" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">Senin</text>

      <rect x="210" y="75.5" width="60" height="114.5" rx="4" fill="#10b981"/>
      <text x="240" y="70" font-family="Arial,sans-serif" font-size="12" font-weight="bold" fill="#065f46" text-anchor="middle">318</text>
      <text x="240" y="210" font-family="Arial,sans-serif" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">Selasa</text>

      <rect x="315" y="91" width="60" height="99" rx="4" fill="#f59e0b"/>
      <text x="345" y="85" font-family="Arial,sans-serif" font-size="12" font-weight="bold" fill="#92400e" text-anchor="middle">275</text>
      <text x="345" y="210" font-family="Arial,sans-serif" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">Rabu</text>

      <rect x="420" y="59.7" width="60" height="130.3" rx="4" fill="#6366f1"/>
      <text x="450" y="54" font-family="Arial,sans-serif" font-size="12" font-weight="bold" fill="#3730a3" text-anchor="middle">362</text>
      <text x="450" y="210" font-family="Arial,sans-serif" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">Kamis</text>
    </svg>`,
  },
  vis_timbangan_gram: {
    width: 520,
    height: 175,
    alt: 'Dua kotak buah di atas timbangan: Kotak Mangga 485 gram dan Kotak Jeruk 365 gram',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 175" width="520" height="175">
      <rect width="520" height="175" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="260" y="24" font-family="Arial,sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Penimbangan Dua Paket Buah Segar (Target 1.000 gram)</text>
      <rect x="75" y="122" width="370" height="14" rx="4" fill="#475569"/>
      <rect x="235" y="136" width="50" height="22" rx="4" fill="#334155"/>
      <rect x="195" y="155" width="130" height="10" rx="3" fill="#1e293b"/>
      <rect x="95" y="52" width="150" height="68" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="170" y="78" font-family="Arial,sans-serif" font-size="12" font-weight="bold" fill="#92400e" text-anchor="middle">Kotak Mangga</text>
      <text x="170" y="102" font-family="Arial,sans-serif" font-size="18" font-weight="bold" fill="#b45309" text-anchor="middle">485 gram</text>
      <rect x="275" y="52" width="150" height="68" rx="8" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
      <text x="350" y="78" font-family="Arial,sans-serif" font-size="12" font-weight="bold" fill="#9a3412" text-anchor="middle">Kotak Jeruk</text>
      <text x="350" y="102" font-family="Arial,sans-serif" font-size="18" font-weight="bold" fill="#c2410c" text-anchor="middle">365 gram</text>
    </svg>`,
  },
  vis_papan_skor_lomba: {
    width: 540,
    height: 165,
    alt: 'Papan Skor Lomba: Regu Merah 745, Regu Biru 812, Regu Hijau 698, Regu Kuning 805',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 165" width="540" height="165">
      <rect width="540" height="165" rx="12" fill="#0f172a" stroke="#334155" stroke-width="2"/>
      <text x="270" y="28" font-family="Arial,sans-serif" font-size="13" font-weight="bold" fill="#f8fafc" text-anchor="middle">PAPAN SKOR LOMBA CERDAS CERMAT KELAS IV</text>
      <rect x="24" y="46" width="114" height="96" rx="8" fill="#7f1d1d" stroke="#ef4444" stroke-width="1.5"/>
      <text x="81" y="72" font-family="Arial,sans-serif" font-size="12" font-weight="bold" fill="#fecaca" text-anchor="middle">Regu Merah</text>
      <text x="81" y="114" font-family="Arial,sans-serif" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">745</text>

      <rect x="150" y="46" width="114" height="96" rx="8" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="207" y="72" font-family="Arial,sans-serif" font-size="12" font-weight="bold" fill="#bfdbfe" text-anchor="middle">Regu Biru</text>
      <text x="207" y="114" font-family="Arial,sans-serif" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">812</text>

      <rect x="276" y="46" width="114" height="96" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>
      <text x="333" y="72" font-family="Arial,sans-serif" font-size="12" font-weight="bold" fill="#a7f3d0" text-anchor="middle">Regu Hijau</text>
      <text x="333" y="114" font-family="Arial,sans-serif" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">698</text>

      <rect x="402" y="46" width="114" height="96" rx="8" fill="#78350f" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="459" y="72" font-family="Arial,sans-serif" font-size="12" font-weight="bold" fill="#fde68a" text-anchor="middle">Regu Kuning</text>
      <text x="459" y="114" font-family="Arial,sans-serif" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">805</text>
    </svg>`,
  },
  vis_kartu_angka_385: {
    width: 440,
    height: 150,
    alt: 'Tiga kartu angka bertuliskan angka 3, 8, dan 5',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 150" width="440" height="150">
      <rect width="440" height="150" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="220" y="24" font-family="Arial,sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Tiga Kartu Angka Pembentuk Bilangan</text>
      <rect x="70" y="42" width="80" height="88" rx="10" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2.5"/>
      <text x="110" y="102" font-family="Arial,sans-serif" font-size="42" font-weight="bold" fill="#1e3a8a" text-anchor="middle">3</text>
      <rect x="180" y="42" width="80" height="88" rx="10" fill="#d1fae5" stroke="#047857" stroke-width="2.5"/>
      <text x="220" y="102" font-family="Arial,sans-serif" font-size="42" font-weight="bold" fill="#065f46" text-anchor="middle">8</text>
      <rect x="290" y="42" width="80" height="88" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
      <text x="330" y="102" font-family="Arial,sans-serif" font-size="42" font-weight="bold" fill="#b45309" text-anchor="middle">5</text>
    </svg>`,
  },
  vis_dienes_732: {
    width: 580,
    height: 210,
    alt: 'Gambar blok nilai tempat: 7 lempeng ratusan, 3 batang puluhan, dan 2 kubus satuan',
    svg: buildDienesSvg(7, 3, 2, 'Susunan Kubus Nilai Tempat (Blok Dienes)'),
  },
  vis_garis_bilangan_875: {
    width: 560,
    height: 140,
    alt: 'Garis bilangan dengan titik 800, 825, 850, tanda tanya, dan 900',
    svg: buildNumberLineSvg([800, 825, 850, '?', 900], 'Garis Bilangan Loncat 25'),
  },
};

export function svgToDataUri(svg: string): string {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export function getQuestionVisualDataUri(visualId?: string): {
  src: string;
  alt: string;
  width: number;
  height: number;
} | null {
  if (!visualId) return null;
  const asset = QUESTION_VISUALS[visualId];
  if (!asset) return null;
  return {
    src: svgToDataUri(asset.svg),
    alt: asset.alt,
    width: asset.width,
    height: asset.height,
  };
}

/**
 * Mengonversi gambar soal (visualId atau imageUrl) menjadi PNG Data URL untuk disematkan ke PDF (jsPDF)
 */
export async function renderQuestionImageToPng(
  visualId?: string,
  imageUrl?: string
): Promise<{ dataUrl: string; width: number; height: number } | null> {
  if (typeof document === 'undefined') return null;

  const asset = visualId ? QUESTION_VISUALS[visualId] : undefined;
  const src = asset ? svgToDataUri(asset.svg) : imageUrl;
  if (!src) return null;

  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      try {
        const w = asset?.width || img.naturalWidth || 520;
        const h = asset?.height || img.naturalHeight || 200;
        const scale = 2;
        const canvas = document.createElement('canvas');
        canvas.width = w * scale;
        canvas.height = h * scale;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(null);
          return;
        }
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve({
          dataUrl: canvas.toDataURL('image/png'),
          width: w,
          height: h,
        });
      } catch {
        resolve(null);
      }
    };
    img.onerror = () => resolve(null);
    img.src = src;
  });
}
