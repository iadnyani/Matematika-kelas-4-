import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // BAGIAN 1: PILIHAN GANDA (20 SOAL) — 4 Pilihan Jawaban, 1 Jawaban Benar
  // =========================================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Membaca Lambang Bilangan',
    difficulty: 'Mudah',
    visualId: 'vis_dienes_347',
    imageCaption: 'Gambar 1.1 Susunan kubus nilai tempat (ratusan, puluhan, dan satuan)',
    text: 'Perhatikan gambar susunan kubus nilai tempat di atas! Bilangan cacah yang ditunjukkan oleh seluruh kubus pada gambar tersebut adalah...',
    options: [
      { id: 'A', text: '374' },
      { id: 'B', text: '347' },
      { id: 'C', text: '437' },
      { id: 'D', text: '743' },
    ],
    correctAnswer: 'B',
    explanation:
      'Terdapat 3 lempeng ratusan (300), 4 batang puluhan (40), dan 7 kubus satuan (7).\nJadi, bilangan yang ditunjukkan adalah 300 + 40 + 7 = 347.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Membaca Nama Bilangan',
    difficulty: 'Mudah',
    text: 'Lambang bilangan cacah 709 dibaca...',
    options: [
      { id: 'A', text: 'Tujuh ratus sembilan puluh' },
      { id: 'B', text: 'Tujuh puluh sembilan' },
      { id: 'C', text: 'Tujuh ratus sembilan' },
      { id: 'D', text: 'Tujuh sembilan nol' },
    ],
    correctAnswer: 'C',
    explanation:
      'Angka 7 menempati ratusan (tujuh ratus), angka 0 menempati puluhan (tidak dibaca), dan angka 9 menempati satuan (sembilan).\nJadi, 709 dibaca "tujuh ratus sembilan".',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Menulis Lambang Bilangan',
    difficulty: 'Mudah',
    text: 'Nama bilangan "sembilan ratus empat puluh enam" jika ditulis menggunakan lambang bilangan adalah...',
    options: [
      { id: 'A', text: '964' },
      { id: 'B', text: '904' },
      { id: 'C', text: '946' },
      { id: 'D', text: '649' },
    ],
    correctAnswer: 'C',
    explanation:
      'Sembilan ratus = 900, empat puluh = 40, dan enam = 6.\nJika digabungkan menjadi 900 + 40 + 6 = 946.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Nilai Tempat Bilangan',
    difficulty: 'Mudah',
    visualId: 'vis_abacus_608',
    imageCaption: 'Gambar 1.2 Dekak-dekak (Abakus) Nilai Tempat',
    text: 'Perhatikan gambar dekak-dekak (abakus) nilai tempat di atas! Bilangan yang ditunjukkan oleh susunan manik-manik tersebut adalah...',
    options: [
      { id: 'A', text: '680' },
      { id: 'B', text: '608' },
      { id: 'C', text: '806' },
      { id: 'D', text: '860' },
    ],
    correctAnswer: 'B',
    explanation:
      'Tiang ratusan memiliki 6 manik (600), tiang puluhan kosong atau 0 manik (0), dan tiang satuan memiliki 8 manik (8).\nJadi, bilangan yang ditunjukkan adalah 608.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Nilai Tempat Bilangan',
    difficulty: 'Mudah',
    text: 'Pada bilangan 852, angka 5 menempati nilai tempat...',
    options: [
      { id: 'A', text: 'Ribuan' },
      { id: 'B', text: 'Ratusan' },
      { id: 'C', text: 'Puluhan' },
      { id: 'D', text: 'Satuan' },
    ],
    correctAnswer: 'C',
    explanation:
      'Pada bilangan 852:\n- Angka 8 menempati nilai tempat ratusan.\n- Angka 5 menempati nilai tempat puluhan.\n- Angka 2 menempati nilai tempat satuan.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Nilai Angka pada Bilangan',
    difficulty: 'Mudah',
    text: 'Nilai angka 7 pada bilangan 743 adalah...',
    options: [
      { id: 'A', text: '7' },
      { id: 'B', text: '70' },
      { id: 'C', text: '700' },
      { id: 'D', text: '740' },
    ],
    correctAnswer: 'C',
    explanation:
      'Angka 7 pada bilangan 743 berada di posisi ratusan, sehingga nilai angkanya adalah 700.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Dekomposisi Bilangan',
    difficulty: 'Mudah',
    text: 'Bentuk panjang (dekomposisi) yang tepat dari bilangan 594 adalah...',
    options: [
      { id: 'A', text: '500 + 90 + 4' },
      { id: 'B', text: '500 + 40 + 9' },
      { id: 'C', text: '50 + 90 + 4' },
      { id: 'D', text: '5 + 9 + 4' },
    ],
    correctAnswer: 'A',
    explanation:
      '594 terdiri dari 5 ratusan (500), 9 puluhan (90), dan 4 satuan (4).\nBentuk panjangnya adalah 500 + 90 + 4.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Garis Bilangan',
    difficulty: 'Mudah',
    visualId: 'vis_garis_bilangan_450',
    imageCaption: 'Gambar 1.3 Garis bilangan loncat sama',
    text: 'Perhatikan gambar garis bilangan berikut ini! Bilangan yang tepat untuk mengisi kotak bertanda tanya (?) adalah...',
    options: [
      { id: 'A', text: '435' },
      { id: 'B', text: '440' },
      { id: 'C', text: '450' },
      { id: 'D', text: '460' },
    ],
    correctAnswer: 'C',
    explanation:
      'Selisih antar titik pada garis bilangan adalah 425 - 400 = 25 (membilang loncat 25).\nMaka titik setelah 425 adalah 425 + 25 = 450.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Komposisi Bilangan',
    difficulty: 'Mudah',
    text: 'Suatu bilangan terdiri dari 6 ratusan, 3 puluhan, dan 9 satuan. Bilangan tersebut adalah...',
    options: [
      { id: 'A', text: '693' },
      { id: 'B', text: '639' },
      { id: 'C', text: '369' },
      { id: 'D', text: '936' },
    ],
    correctAnswer: 'B',
    explanation:
      '6 ratusan = 600\n3 puluhan = 30\n9 satuan = 9\nJumlah seluruhnya = 600 + 30 + 9 = 639.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Membandingkan Bilangan',
    difficulty: 'Mudah',
    text: 'Tanda perbandingan yang tepat untuk mengisi titik-titik pada 672 ... 627 adalah...',
    options: [
      { id: 'A', text: '<' },
      { id: 'B', text: '>' },
      { id: 'C', text: '=' },
      { id: 'D', text: '≤' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kedua bilangan memiliki angka ratusan sama yaitu 6. Bandingkan angka puluhannya: 7 lebih besar dari 2.\nJadi, 672 > 627.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Mengurutkan Bilangan',
    difficulty: 'Mudah',
    text: 'Urutan bilangan berikut dari yang terkecil hingga terbesar yang benar untuk bilangan 415, 389, 451, 398 adalah...',
    options: [
      { id: 'A', text: '389, 398, 415, 451' },
      { id: 'B', text: '398, 389, 415, 451' },
      { id: 'C', text: '451, 415, 398, 389' },
      { id: 'D', text: '389, 415, 398, 451' },
    ],
    correctAnswer: 'A',
    explanation:
      'Bandingkan ratusan dan puluhan:\n389 < 398 < 415 < 451.\nJadi, urutan dari terkecil hingga terbesar adalah 389, 398, 415, 451.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Membandingkan Bilangan',
    difficulty: 'Mudah',
    visualId: 'vis_keranjang_apel_compare',
    imageCaption: 'Gambar 1.4 Perbandingan isi Keranjang A dan Keranjang B',
    text: 'Perhatikan gambar dua keranjang apel di atas! Tanda perbandingan yang tepat untuk membandingkan banyak apel di Keranjang A dan Keranjang B adalah...',
    options: [
      { id: 'A', text: '>' },
      { id: 'B', text: '<' },
      { id: 'C', text: '=' },
      { id: 'D', text: '≥' },
    ],
    correctAnswer: 'B',
    explanation:
      'Keranjang A berisi 548 buah dan Keranjang B berisi 584 buah.\nKarena angka puluhan 4 lebih kecil dari 8, maka 548 < 584.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Penjumlahan Bilangan Cacah',
    difficulty: 'Mudah',
    text: 'Hasil dari penjumlahan 324 + 253 adalah...',
    options: [
      { id: 'A', text: '567' },
      { id: 'B', text: '577' },
      { id: 'C', text: '587' },
      { id: 'D', text: '677' },
    ],
    correctAnswer: 'B',
    explanation:
      'Jumlahkan sesuai nilai tempat:\nSatuan: 4 + 3 = 7\nPuluhan: 20 + 50 = 70\nRatusan: 300 + 200 = 500\nTotal = 577.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Penjumlahan dengan Menyimpan',
    difficulty: 'Mudah',
    text: 'Hasil dari 468 + 275 adalah...',
    options: [
      { id: 'A', text: '633' },
      { id: 'B', text: '733' },
      { id: 'C', text: '743' },
      { id: 'D', text: '753' },
    ],
    correctAnswer: 'C',
    explanation:
      'Satuan: 8 + 5 = 13 (tulis 3, simpan 1 puluhan).\nPuluhan: 1 + 6 + 7 = 14 puluhan (tulis 4, simpan 1 ratusan).\nRatusan: 1 + 4 + 2 = 7.\nJadi, 468 + 275 = 743.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Pengurangan Bilangan Cacah',
    difficulty: 'Mudah',
    text: 'Hasil dari pengurangan 785 - 342 adalah...',
    options: [
      { id: 'A', text: '433' },
      { id: 'B', text: '443' },
      { id: 'C', text: '453' },
      { id: 'D', text: '543' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kurangkan sesuai nilai tempat:\nSatuan: 5 - 2 = 3\nPuluhan: 8 - 4 = 4\nRatusan: 7 - 3 = 4\nHasil = 443.',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Perkalian Bilangan Cacah',
    difficulty: 'Mudah',
    visualId: 'vis_kotak_pensil_mult',
    imageCaption: 'Gambar 1.5 Enam kotak pensil warna koperasi sekolah',
    text: 'Perhatikan gambar persediaan kotak pensil di atas! Jika terdapat 6 kotak dan setiap kotak berisi 12 batang pensil warna, maka jumlah seluruh pensil warna adalah...',
    options: [
      { id: 'A', text: '60 batang' },
      { id: 'B', text: '66 batang' },
      { id: 'C', text: '72 batang' },
      { id: 'D', text: '84 batang' },
    ],
    correctAnswer: 'C',
    explanation:
      'Jumlah seluruh pensil = 6 × 12 = (6 × 10) + (6 × 2) = 60 + 12 = 72 batang.',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Pengurangan dengan Meminjam',
    difficulty: 'Mudah',
    text: 'Hasil dari 600 - 245 adalah...',
    options: [
      { id: 'A', text: '355' },
      { id: 'B', text: '365' },
      { id: 'C', text: '445' },
      { id: 'D', text: '455' },
    ],
    correctAnswer: 'A',
    explanation:
      '600 dapat dipecah menjadi 500 + 90 + 10.\nSatuan: 10 - 5 = 5\nPuluhan: 90 - 40 = 50\nRatusan: 500 - 200 = 300\nJadi, 600 - 245 = 355.',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Pembagian Bilangan Cacah',
    difficulty: 'Mudah',
    text: 'Ibu membeli 96 buah jeruk yang akan dimasukkan ke dalam 8 kantong plastik sama banyak. Banyak jeruk di setiap kantong adalah...',
    options: [
      { id: 'A', text: '10 buah' },
      { id: 'B', text: '12 buah' },
      { id: 'C', text: '14 buah' },
      { id: 'D', text: '16 buah' },
    ],
    correctAnswer: 'B',
    explanation:
      'Banyak jeruk per kantong = 96 ÷ 8 = 12 buah (karena 8 × 12 = 96).',
  },
  {
    id: 19,
    type: 'pg',
    topic: 'Penjumlahan Nilai Tempat',
    difficulty: 'Mudah',
    visualId: 'vis_penjumlahan_blok_426_153',
    imageCaption: 'Gambar 1.6 Gabungan dua wadah kelereng',
    text: 'Perhatikan gambar dua wadah kelereng di atas! Jika seluruh kelereng dari Wadah Pertama dan Wadah Kedua digabungkan, maka jumlah kelereng semuanya adalah...',
    options: [
      { id: 'A', text: '569 butir' },
      { id: 'B', text: '579 butir' },
      { id: 'C', text: '589 butir' },
      { id: 'D', text: '679 butir' },
    ],
    correctAnswer: 'B',
    explanation:
      'Wadah Pertama = 426 butir, Wadah Kedua = 153 butir.\n426 + 153 = (400 + 100) + (20 + 50) + (6 + 3) = 500 + 70 + 9 = 579 butir.',
  },
  {
    id: 20,
    type: 'pg',
    topic: 'Pola Bilangan Loncat',
    difficulty: 'Mudah',
    text: 'Perhatikan barisan bilangan berikut: 120, 140, 160, ..., 200. Bilangan yang tepat untuk mengisi titik-titik tersebut adalah...',
    options: [
      { id: 'A', text: '170' },
      { id: 'B', text: '175' },
      { id: 'C', text: '180' },
      { id: 'D', text: '190' },
    ],
    correctAnswer: 'C',
    explanation:
      'Pola barisan tersebut bertambah 20 pada setiap langkah.\nSetelah 160 adalah 160 + 20 = 180.',
  },

  // =========================================================================
  // BAGIAN 2: PILIHAN GANDA SEDANG (15 SOAL) — 4 Pilihan Jawaban, 1 Jawaban Benar
  // =========================================================================
  {
    id: 21,
    type: 'pg_sedang',
    topic: 'Operasi Hitung Campuran',
    difficulty: 'Sedang',
    text: 'Perpustakaan sekolah memiliki 450 buku cerita. Pada hari Senin dipinjam siswa sebanyak 128 buku, lalu pada hari Selasa datang sumbangan buku baru sebanyak 175 buku. Banyak buku cerita di perpustakaan sekarang adalah...',
    options: [
      { id: 'A', text: '487 buku' },
      { id: 'B', text: '497 buku' },
      { id: 'C', text: '507 buku' },
      { id: 'D', text: '597 buku' },
    ],
    correctAnswer: 'B',
    explanation:
      'Sisa setelah dipinjam = 450 - 128 = 322 buku.\nSetelah mendapat sumbangan = 322 + 175 = 497 buku.',
  },
  {
    id: 22,
    type: 'pg_sedang',
    topic: 'Membaca Data & Selisih Bilangan',
    difficulty: 'Sedang',
    visualId: 'vis_diagram_batang_perpus',
    imageCaption: 'Gambar 2.1 Diagram batang pengunjung perpustakaan SD N 2 Pendem',
    text: 'Perhatikan diagram batang pengunjung perpustakaan SD N 2 Pendem di atas! Selisih banyak pengunjung pada hari Kamis dan hari Senin adalah...',
    options: [
      { id: 'A', text: '107 orang' },
      { id: 'B', text: '117 orang' },
      { id: 'C', text: '127 orang' },
      { id: 'D', text: '147 orang' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pengunjung hari Kamis = 362 orang.\nPengunjung hari Senin = 245 orang.\nSelisih = 362 - 245 = 117 orang.',
  },
  {
    id: 23,
    type: 'pg_sedang',
    topic: 'Selisih Nilai Angka',
    difficulty: 'Sedang',
    text: 'Selisih nilai angka 8 dan nilai angka 4 pada bilangan 847 adalah...',
    options: [
      { id: 'A', text: '4' },
      { id: 'B', text: '76' },
      { id: 'C', text: '760' },
      { id: 'D', text: '840' },
    ],
    correctAnswer: 'C',
    explanation:
      'Pada bilangan 847:\nNilai angka 8 (ratusan) = 800.\nNilai angka 4 (puluhan) = 40.\nSelisih = 800 - 40 = 760.',
  },
  {
    id: 24,
    type: 'pg_sedang',
    topic: 'Perkalian Kontekstual',
    difficulty: 'Sedang',
    text: 'Pak Made menanam bibit cabai di kebun sekolah. Ia menanam dalam 14 baris dan setiap baris berisi 25 bibit cabai. Jumlah seluruh bibit cabai yang ditanam Pak Made adalah...',
    options: [
      { id: 'A', text: '300 bibit' },
      { id: 'B', text: '325 bibit' },
      { id: 'C', text: '350 bibit' },
      { id: 'D', text: '375 bibit' },
    ],
    correctAnswer: 'C',
    explanation:
      'Total bibit cabai = 14 × 25.\n14 × 25 = (10 × 25) + (4 × 25) = 250 + 100 = 350 bibit.',
  },
  {
    id: 25,
    type: 'pg_sedang',
    topic: 'Pembagian Kontekstual',
    difficulty: 'Sedang',
    text: 'Panitia lomba kelas memiliki 384 lembar kertas origami yang akan dibagikan merata kepada 8 kelompok siswa. Setiap kelompok akan menerima kertas origami sebanyak...',
    options: [
      { id: 'A', text: '44 lembar' },
      { id: 'B', text: '46 lembar' },
      { id: 'C', text: '48 lembar' },
      { id: 'D', text: '52 lembar' },
    ],
    correctAnswer: 'C',
    explanation:
      'Banyak kertas tiap kelompok = 384 ÷ 8.\n38 ÷ 8 = 4 (sisa 6), turun 4 menjadi 64 ÷ 8 = 8.\nJadi, 384 ÷ 8 = 48 lembar.',
  },
  {
    id: 26,
    type: 'pg_sedang',
    topic: 'Penjumlahan & Pengurangan Menuju 1.000',
    difficulty: 'Sedang',
    visualId: 'vis_timbangan_gram',
    imageCaption: 'Gambar 2.2 Penimbangan dua paket buah segar',
    text: 'Perhatikan gambar penimbangan dua paket buah di atas! Agar berat seluruh paket buah tepat mencapai 1.000 gram, maka masih perlu ditambahkan buah lagi seberat...',
    options: [
      { id: 'A', text: '130 gram' },
      { id: 'B', text: '150 gram' },
      { id: 'C', text: '250 gram' },
      { id: 'D', text: '850 gram' },
    ],
    correctAnswer: 'B',
    explanation:
      'Total berat buah saat ini = 485 gram + 365 gram = 850 gram.\nTambahan yang dibutuhkan = 1.000 - 850 = 150 gram.',
  },
  {
    id: 27,
    type: 'pg_sedang',
    topic: 'Penjumlahan Tiga Bilangan',
    difficulty: 'Sedang',
    text: 'Dalam kegiatan bakti sosial, kelas IV mengumpulkan 245 bungkus mi instan, kelas V mengumpulkan 318 bungkus, dan kelas VI mengumpulkan 287 bungkus. Jumlah seluruh mi instan yang terkumpul adalah...',
    options: [
      { id: 'A', text: '840 bungkus' },
      { id: 'B', text: '850 bungkus' },
      { id: 'C', text: '860 bungkus' },
      { id: 'D', text: '950 bungkus' },
    ],
    correctAnswer: 'B',
    explanation:
      '245 + 318 = 563.\n563 + 287 = 850 bungkus.',
  },
  {
    id: 28,
    type: 'pg_sedang',
    topic: 'Pembagian Bersisa',
    difficulty: 'Sedang',
    text: 'Sebanyak 150 buah kue bolu akan dimasukkan ke dalam kotak kemasan. Setiap kotak hanya dapat memuat 12 buah kue bolu. Banyak kotak penuh yang terisi dan sisa kue bolunya adalah...',
    options: [
      { id: 'A', text: '12 kotak penuh dan sisa 6 kue' },
      { id: 'B', text: '12 kotak penuh dan sisa 4 kue' },
      { id: 'C', text: '13 kotak penuh dan sisa 2 kue' },
      { id: 'D', text: '11 kotak penuh dan sisa 8 kue' },
    ],
    correctAnswer: 'A',
    explanation:
      '12 × 12 = 144 kue yang dapat masuk ke dalam 12 kotak penuh.\nSisa kue bolu = 150 - 144 = 6 kue.',
  },
  {
    id: 29,
    type: 'pg_sedang',
    topic: 'Menentukan Bilangan yang Belum Diketahui',
    difficulty: 'Sedang',
    text: 'Jika 348 + ... = 815, maka bilangan yang tepat untuk mengisi titik-titik tersebut adalah...',
    options: [
      { id: 'A', text: '457' },
      { id: 'B', text: '467' },
      { id: 'C', text: '477' },
      { id: 'D', text: '567' },
    ],
    correctAnswer: 'B',
    explanation:
      'Bilangan yang dicari = 815 - 348 = 467.\nPembuktian: 348 + 467 = 815.',
  },
  {
    id: 30,
    type: 'pg_sedang',
    topic: 'Mengurutkan Data Bilangan',
    difficulty: 'Sedang',
    visualId: 'vis_papan_skor_lomba',
    imageCaption: 'Gambar 2.3 Papan skor Lomba Cerdas Cermat Kelas IV',
    text: 'Perhatikan papan skor Lomba Cerdas Cermat Kelas IV di atas! Urutan regu dari peraih skor TERTINGGI hingga TERENDAH yang benar adalah...',
    options: [
      { id: 'A', text: 'Regu Biru, Regu Kuning, Regu Merah, Regu Hijau' },
      { id: 'B', text: 'Regu Kuning, Regu Biru, Regu Merah, Regu Hijau' },
      { id: 'C', text: 'Regu Hijau, Regu Merah, Regu Kuning, Regu Biru' },
      { id: 'D', text: 'Regu Biru, Regu Merah, Regu Kuning, Regu Hijau' },
    ],
    correctAnswer: 'A',
    explanation:
      'Perbandingan skor: 812 (Biru) > 805 (Kuning) > 745 (Merah) > 698 (Hijau).\nJadi urutan dari tertinggi ke terendah adalah Regu Biru, Regu Kuning, Regu Merah, Regu Hijau.',
  },
  {
    id: 31,
    type: 'pg_sedang',
    topic: 'Taksiran Bilangan Cacah',
    difficulty: 'Sedang',
    text: 'Di gudang koperasi terdapat 392 buku tulis dan 414 pensil. Jika dibulatkan ke ratusan terdekat terlebih dahulu, taksiran jumlah seluruh buku tulis dan pensil adalah...',
    options: [
      { id: 'A', text: '700' },
      { id: 'B', text: '800' },
      { id: 'C', text: '810' },
      { id: 'D', text: '900' },
    ],
    correctAnswer: 'B',
    explanation:
      '392 dibulatkan ke ratusan terdekat menjadi 400 (karena puluhannya 9 ≥ 5).\n414 dibulatkan ke ratusan terdekat menjadi 400 (karena puluhannya 1 < 5).\nTaksiran jumlah = 400 + 400 = 800.',
  },
  {
    id: 32,
    type: 'pg_sedang',
    topic: 'Operasi Hitung Perkalian & Penjumlahan',
    difficulty: 'Sedang',
    text: 'Dayu memiliki 18 pak stiker. Setiap pak berisi 15 lembar stiker. Jika Dayu juga mendapat hadiah 45 lembar stiker dari kakaknya, jumlah seluruh stiker Dayu sekarang adalah...',
    options: [
      { id: 'A', text: '295 lembar' },
      { id: 'B', text: '305 lembar' },
      { id: 'C', text: '315 lembar' },
      { id: 'D', text: '325 lembar' },
    ],
    correctAnswer: 'C',
    explanation:
      'Stiker dari 18 pak = 18 × 15 = 270 lembar.\nDitambah hadiah 45 lembar = 270 + 45 = 315 lembar.',
  },
  {
    id: 33,
    type: 'pg_sedang',
    topic: 'Penalaran Nilai Tempat Bilangan',
    difficulty: 'Sedang',
    text: 'Aku adalah sebuah bilangan cacah tiga angka. Angka ratusanku adalah 7, angka puluhanku 3 kurangnya dari angka ratusan, dan angka satuanku adalah bilangan genap terbesar di bawah 10. Aku adalah bilangan...',
    options: [
      { id: 'A', text: '738' },
      { id: 'B', text: '746' },
      { id: 'C', text: '748' },
      { id: 'D', text: '758' },
    ],
    correctAnswer: 'C',
    explanation:
      'Angka ratusan = 7.\nAngka puluhan = 7 - 3 = 4.\nBilangan genap terbesar di bawah 10 = 8.\nJadi bilangan tersebut adalah 748.',
  },
  {
    id: 34,
    type: 'pg_sedang',
    topic: 'Kombinasi Kartu Angka & Selisih',
    difficulty: 'Sedang',
    visualId: 'vis_kartu_angka_385',
    imageCaption: 'Gambar 2.4 Tiga kartu angka pembentuk bilangan',
    text: 'Perhatikan gambar tiga kartu angka di atas! Selisih antara bilangan terbesar dan bilangan terkecil yang dapat disusun dari ketiga kartu angka tersebut (setiap kartu digunakan tepat satu kali) adalah...',
    options: [
      { id: 'A', text: '485' },
      { id: 'B', text: '495' },
      { id: 'C', text: '505' },
      { id: 'D', text: '515' },
    ],
    correctAnswer: 'B',
    explanation:
      'Bilangan terbesar dari angka 3, 8, 5 = 853.\nBilangan terkecil dari angka 3, 8, 5 = 358.\nSelisih = 853 - 358 = 495.',
  },
  {
    id: 35,
    type: 'pg_sedang',
    topic: 'Operasi Pengurangan & Pembagian',
    difficulty: 'Sedang',
    text: 'Seorang petani memanen 640 buah jeruk. Sebanyak 160 buah jeruk dibagikan kepada tetangga, dan sisanya dimasukkan ke dalam 8 keranjang sama banyak. Banyak jeruk di dalam setiap keranjang adalah...',
    options: [
      { id: 'A', text: '50 buah' },
      { id: 'B', text: '60 buah' },
      { id: 'C', text: '70 buah' },
      { id: 'D', text: '80 buah' },
    ],
    correctAnswer: 'B',
    explanation:
      'Sisa jeruk = 640 - 160 = 480 buah.\nBanyak jeruk per keranjang = 480 ÷ 8 = 60 buah.',
  },

  // =========================================================================
  // BAGIAN 3: ISIAN SINGKAT SEDERHANA (5 SOAL) — Pernyataan yang Harus Dijawab
  // =========================================================================
  {
    id: 36,
    type: 'isian_singkat',
    topic: 'Menulis Lambang Bilangan',
    difficulty: 'Mudah',
    text: 'Bilangan "delapan ratus lima puluh tiga" jika ditulis dalam bentuk lambang angka adalah ....',
    correctAnswer: '853',
    acceptedAnswers: ['853'],
    explanation:
      'Delapan ratus = 800, lima puluh = 50, dan tiga = 3.\nJadi ditulis dengan lambang angka 853.',
  },
  {
    id: 37,
    type: 'isian_singkat',
    topic: 'Membaca Blok Nilai Tempat',
    difficulty: 'Mudah',
    visualId: 'vis_dienes_732',
    imageCaption: 'Gambar 3.1 Susunan kubus nilai tempat (ratusan, puluhan, dan satuan)',
    text: 'Perhatikan gambar blok nilai tempat di atas. Bilangan cacah yang ditunjukkan oleh seluruh kubus pada gambar tersebut adalah ....',
    correctAnswer: '732',
    acceptedAnswers: ['732'],
    explanation:
      'Terdapat 7 lempeng ratusan (700), 3 batang puluhan (30), dan 2 kubus satuan (2).\nTotal = 700 + 30 + 2 = 732.',
  },
  {
    id: 38,
    type: 'isian_singkat',
    topic: 'Pengurangan Bilangan Cacah',
    difficulty: 'Sedang',
    text: 'Hasil dari operasi pengurangan 912 - 365 adalah ....',
    correctAnswer: '547',
    acceptedAnswers: ['547'],
    explanation:
      'Dengan pengurangan bersusun meminjam:\n12 - 5 = 7 (satuan)\n10 - 6 = 4 (puluhan)\n8 - 3 = 5 (ratusan)\nJadi, 912 - 365 = 547.',
  },
  {
    id: 39,
    type: 'isian_singkat',
    topic: 'Garis Bilangan Loncat 25',
    difficulty: 'Sedang',
    visualId: 'vis_garis_bilangan_875',
    imageCaption: 'Gambar 3.2 Garis bilangan loncat 25',
    text: 'Berdasarkan gambar garis bilangan di atas, bilangan yang tepat untuk menggantikan tanda tanya (?) adalah ....',
    correctAnswer: '875',
    acceptedAnswers: ['875'],
    explanation:
      'Pola garis bilangan bertambah 25 tiap langkah (800 -> 825 -> 850 -> ...).\nBilangan setelah 850 adalah 850 + 25 = 875.',
  },
  {
    id: 40,
    type: 'isian_singkat',
    topic: 'Perkalian Bilangan Cacah',
    difficulty: 'Sedang',
    text: 'Di aula sekolah terdapat 9 baris kursi. Setiap baris terdiri dari 24 kursi. Jumlah seluruh kursi yang ada di aula sekolah tersebut adalah ....',
    correctAnswer: '216',
    acceptedAnswers: ['216', '216 kursi'],
    explanation:
      'Jumlah seluruh kursi = 9 × 24 = (9 × 20) + (9 × 4) = 180 + 36 = 216.',
  },
];
