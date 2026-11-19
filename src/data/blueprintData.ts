import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase B (Kelas IV) Mata Pelajaran Matematika
 * Lingkup Materi: Bilangan Cacah Sampai 1.000
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 40 butir soal Kurikulum Merdeka (20 PG, 15 PG Sedang, 5 Isian Singkat)
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat membaca dan menentukan nilai bilangan cacah sampai 1.000 melalui representasi konkret.',
    indikatorSoal:
      'Disajikan gambar blok nilai tempat (ratusan, puluhan, satuan), peserta didik dapat menentukan lambang bilangan cacah yang sesuai.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat membaca lambang bilangan cacah sampai 1.000 dengan benar.',
    indikatorSoal:
      'Disajikan lambang bilangan tiga angka yang memuat nol di tengah, peserta didik dapat menentukan cara membacanya dengan tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menuliskan lambang bilangan cacah sampai 1.000 dari nama bilangannya.',
    indikatorSoal:
      'Disajikan nama bilangan tiga angka dalam kata-kata, peserta didik dapat menuliskannya ke dalam lambang bilangan yang benar.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan bilangan cacah sampai 1.000 menggunakan model dekak-dekak (abakus).',
    indikatorSoal:
      'Disajikan gambar dekak-dekak nilai tempat ratusan, puluhan, dan satuan, peserta didik dapat menentukan bilangan yang terbentuk.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi nilai tempat suatu angka pada bilangan cacah sampai 1.000.',
    indikatorSoal:
      'Disajikan bilangan cacah tiga angka, peserta didik dapat menentukan nilai tempat dari salah satu angka penyusunnya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan nilai angka berdasarkan posisi nilai tempatnya.',
    indikatorSoal:
      'Disajikan bilangan tiga angka, peserta didik dapat menentukan nilai angka pada posisi ratusan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menguraikan (mendekomposisi) bilangan cacah sampai 1.000 menjadi bentuk panjang.',
    indikatorSoal:
      'Disajikan satu bilangan cacah tiga angka, peserta didik dapat memilih bentuk penjumlahan nilai tempat yang sesuai.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat melengkapi urutan bilangan cacah pada garis bilangan.',
    indikatorSoal:
      'Disajikan gambar garis bilangan loncat 25 dengan satu titik rumpang, peserta didik dapat menentukan bilangan pengisi yang tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyusun (mengomposisi) bilangan cacah berdasarkan rincian nilai tempat.',
    indikatorSoal:
      'Disajikan jumlah ratusan, puluhan, dan satuan, peserta didik dapat menyusunnya menjadi satu lambang bilangan tiga angka.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat membandingkan dua bilangan cacah sampai 1.000 menggunakan tanda perbandingan.',
    indikatorSoal:
      'Disajikan dua bilangan dengan angka ratusan yang sama, peserta didik dapat menentukan tanda perbandingan (<, >, atau =) yang tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat mengurutkan sekumpulan bilangan cacah sampai 1.000 dari terkecil hingga terbesar.',
    indikatorSoal:
      'Disajikan empat bilangan cacah tiga angka secara acak, peserta didik dapat mengurutkannya dari yang terkecil ke terbesar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat membandingkan dua kuantitas bilangan cacah dalam konteks gambar sehari-hari.',
    indikatorSoal:
      'Disajikan gambar dua keranjang buah berlabel jumlah sampai 1.000, peserta didik dapat memilih tanda perbandingan yang tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat melakukan operasi penjumlahan bilangan cacah sampai 1.000 tanpa menyimpan.',
    indikatorSoal:
      'Disajikan dua bilangan cacah tiga angka, peserta didik dapat menghitung hasil penjumlahannya dengan tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat melakukan operasi penjumlahan bilangan cacah sampai 1.000 dengan teknik menyimpan.',
    indikatorSoal:
      'Disajikan penjumlahan dua bilangan tiga angka yang memerlukan teknik menyimpan, peserta didik dapat menentukan hasilnya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat melakukan operasi pengurangan bilangan cacah sampai 1.000 tanpa meminjam.',
    indikatorSoal:
      'Disajikan pengurangan dua bilangan tiga angka, peserta didik dapat menghitung selisihnya dengan tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan perkalian bilangan cacah menggunakan ilustrasi pengelompokan.',
    indikatorSoal:
      'Disajikan gambar 6 kotak berisi masing-masing 12 pensil warna, peserta didik dapat menghitung jumlah seluruh pensil.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat melakukan operasi pengurangan bilangan cacah sampai 1.000 dengan teknik meminjam.',
    indikatorSoal:
      'Disajikan pengurangan bilangan ratusan genap dengan bilangan tiga angka, peserta didik dapat menentukan hasil pengurangannya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat melakukan operasi pembagian bilangan cacah sampai 100 dalam soal cerita sederhana.',
    indikatorSoal:
      'Disajikan narasi pembagian buah ke dalam beberapa kantong sama banyak, peserta didik dapat menghitung isi setiap kantong.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menjumlahkan dua bilangan cacah sampai 1.000 berdasarkan pengelompokan nilai tempat.',
    indikatorSoal:
      'Disajikan gambar dua wadah kelereng lengkap dengan uraian nilai tempatnya, peserta didik dapat menghitung total keseluruhan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi dan melengkapi pola bilangan cacah membesar.',
    indikatorSoal:
      'Disajikan barisan bilangan loncat 20 sampai 200 dengan satu bagian kosong, peserta didik dapat melengkapinya dengan tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah kontekstual yang melibatkan penjumlahan dan pengurangan bilangan cacah sampai 1.000.',
    indikatorSoal:
      'Disajikan cerita stok buku perpustakaan yang dipinjam lalu mendapat tambahan sumbangan, peserta didik dapat menghitung jumlah buku akhir.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Analisis Data dan Peluang',
    tujuanPembelajaran:
      'Peserta didik dapat menafsirkan diagram batang bilangan cacah sampai 1.000 dan menentukan selisih datanya.',
    indikatorSoal:
      'Disajikan diagram batang jumlah pengunjung perpustakaan selama 4 hari, peserta didik dapat menghitung selisih pengunjung dua hari tertentu.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung selisih nilai angka pada bilangan cacah tiga angka.',
    indikatorSoal:
      'Disajikan sebuah bilangan cacah tiga angka, peserta didik dapat menentukan selisih nilai angka ratusan dan puluhannya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah perkalian bilangan cacah dua angka dengan hasil sampai 1.000.',
    indikatorSoal:
      'Disajikan konteks penanaman bibit dalam beberapa baris yang sama banyak, peserta didik dapat menghitung total bibit.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah pembagian bilangan cacah tiga angka oleh bilangan satu angka.',
    indikatorSoal:
      'Disajikan jumlah kertas origami ratusan lembar yang dibagikan merata ke beberapa kelompok, peserta didik dapat menghitung jatah tiap kelompok.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah penjumlahan dan pengurangan bilangan cacah menuju bilangan 1.000.',
    indikatorSoal:
      'Disajikan gambar dua paket buah di atas timbangan dalam satuan gram, peserta didik dapat menentukan tambahan berat agar mencapai 1.000 gram.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung penjumlahan tiga bilangan cacah dengan hasil sampai 1.000.',
    indikatorSoal:
      'Disajikan data sumbangan barang dari tiga kelas berbeda, peserta didik dapat menentukan jumlah keseluruhan barang.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah pembagian bilangan cacah yang menghasilkan sisa.',
    indikatorSoal:
      'Disajikan banyak kue yang dikemas ke dalam kotak berkapasitas tetap, peserta didik dapat menentukan banyak kotak penuh dan sisa kuenya.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Aljabar',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan nilai bilangan yang belum diketahui dalam kalimat matematika penjumlahan sampai 1.000.',
    indikatorSoal:
      'Disajikan persamaan penjumlahan dengan satu suku rumpang, peserta didik dapat menentukan bilangan pengisi yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat membandingkan dan mengurutkan bilangan cacah sampai 1.000 berdasarkan data gambar.',
    indikatorSoal:
      'Disajikan gambar papan skor lomba empat regu, peserta didik dapat mengurutkan regu dari peraih skor tertinggi hingga terendah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  31: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat melakukan penaksiran hasil penjumlahan dengan pembulatan ke ratusan terdekat.',
    indikatorSoal:
      'Disajikan dua kuantitas barang di gudang koperasi, peserta didik dapat menaksir jumlah total setelah membulatkan ke ratusan terdekat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  32: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah sehari-hari yang melibatkan perkalian dan penjumlahan bilangan cacah.',
    indikatorSoal:
      'Disajikan jumlah pak stiker beserta isi tiap pak dan tambahan stiker hadiah, peserta didik dapat menghitung total stiker.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  33: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat memecahkan teka-teki bilangan cacah tiga angka berdasarkan hubungan nilai tempat.',
    indikatorSoal:
      'Disajikan petunjuk mengenai angka ratusan, puluhan, dan satuan suatu bilangan, peserta didik dapat menemukan bilangan yang dimaksud.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  34: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyusun bilangan terbesar dan terkecil dari tiga kartu angka serta menghitung selisihnya.',
    indikatorSoal:
      'Disajikan gambar tiga kartu angka berbeda, peserta didik dapat menentukan selisih bilangan terbesar dan terkecil yang dapat dibentuk.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  35: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah dua langkah yang melibatkan pengurangan dan pembagian bilangan cacah.',
    indikatorSoal:
      'Disajikan hasil panen buah yang sebagian dibagikan dan sisanya dimasukkan ke beberapa keranjang sama banyak, peserta didik dapat menghitung isi tiap keranjang.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  36: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menuliskan lambang bilangan cacah sampai 1.000 secara mandiri dalam bentuk isian singkat.',
    indikatorSoal:
      'Disajikan pernyataan rumpang nama bilangan cacah tiga angka, peserta didik dapat menuliskan lambang bilangannya dengan tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  37: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menuliskan bilangan cacah sampai 1.000 dari representasi blok nilai tempat.',
    indikatorSoal:
      'Disajikan gambar susunan kubus nilai tempat (ratusan, puluhan, satuan), peserta didik dapat menuliskan bilangannya secara singkat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  38: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung pengurangan bilangan cacah sampai 1.000 dengan teknik meminjam.',
    indikatorSoal:
      'Disajikan pernyataan operasi pengurangan dua bilangan tiga angka, peserta didik dapat menuliskan hasil akhirnya secara singkat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  39: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan bilangan rumpang pada garis bilangan loncat 25.',
    indikatorSoal:
      'Disajikan gambar garis bilangan di atas 800 dengan satu titik bertanda tanya, peserta didik dapat menuliskan bilangan yang tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  40: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan soal cerita perkalian bilangan cacah sampai 1.000 dalam isian singkat.',
    indikatorSoal:
      'Disajikan pernyataan jumlah baris dan isi kursi per baris di aula sekolah, peserta didik dapat menuliskan total kursi dengan tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pg_sedang':
      return 'Pilihan Ganda Sedang';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    case 'isian_singkat':
      return 'Isian Singkat Sederhana';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg' || q.type === 'pg_sedang') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'isian_singkat') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : '-';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu menerapkan konsep materi ${q.topic} dalam menyelesaikan permasalahan matematika.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus masalah tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('pola') || t.includes('belum diketahui')) {
    return 'Aljabar';
  }
  if (t.includes('diagram') || t.includes('data')) {
    return 'Analisis Data dan Peluang';
  }
  if (t.includes('timbangan') || t.includes('gram')) {
    return 'Pengukuran';
  }
  return 'Bilangan';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  const elemenCountMap: Record<string, number> = {};
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  const typeCountMap: Record<string, number> = {
    pg: 0,
    pg_sedang: 0,
    isian_singkat: 0,
    pgk: 0,
    pgk_kategori: 0,
  };

  blueprints.forEach((bp, idx) => {
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const allTypeCandidates = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pg_sedang',
      label: 'Pilihan Ganda Sedang',
      count: typeCountMap.pg_sedang,
      percentage: total > 0 ? Math.round((typeCountMap.pg_sedang / total) * 100) : 0,
    },
    {
      type: 'isian_singkat',
      label: 'Isian Singkat Sederhana',
      count: typeCountMap.isian_singkat,
      percentage: total > 0 ? Math.round((typeCountMap.isian_singkat / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  const typeDistribution = allTypeCandidates.filter((t) => t.count > 0);

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
