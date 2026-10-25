// WA CHAT STUDIO - DATASET (Synchronized with bantu-warga-laravel categories)

// Master Categories from Laravel KategoriJasaSeeder.php
const BANTU_WARGA_CATEGORIES = [
  {
    "name": "Jasa Teknis",
    "icon": "fa-solid fa-wrench",
    "subs": [
      "Tukang Las",
      "Elektronika",
      "Peralatan Rumah tangga",
      "Mainan anak",
      "Tukang AC",
      "Tukang kunci"
    ]
  },
  {
    "name": "Building",
    "icon": "fa-solid fa-helmet-safety",
    "subs": [
      "Kuli-Kenek",
      "Tukang Pipa",
      "Tukang Kayu",
      "Tukang Kaca",
      "Arsitek",
      "Interior-Eksterior designer",
      "Tukang Cat",
      "Baja ringan"
    ]
  },
  {
    "name": "Perkebunan",
    "icon": "fa-solid fa-leaf",
    "subs": [
      "Petani",
      "Tukang kebun",
      "Ahli tanaman",
      "Pemotong rumput",
      "Pembasmi Hama"
    ]
  },
  {
    "name": "Asst Rumah tangga",
    "icon": "fa-solid fa-broom",
    "subs": [
      "ART harian",
      "Koki",
      "Cleaning service",
      "Laundry",
      "Baby sitter",
      "Perawat Orang tua"
    ]
  },
  {
    "name": "Kurir",
    "icon": "fa-solid fa-box",
    "subs": [
      "Jasa Antar-jemput",
      "Jasa Pindahan",
      "Driver tembak",
      "Belanja Harian"
    ]
  },
  {
    "name": "Mekanik",
    "icon": "fa-solid fa-gears",
    "subs": [
      "Mekanik Mesin",
      "Mekanik Motor",
      "Montir",
      "Mekanik Kelistrikan OTO"
    ]
  },
  {
    "name": "IT",
    "icon": "fa-solid fa-laptop",
    "subs": [
      "Komputer",
      "Wifi",
      "CCTV",
      "Programmer",
      "Website creator",
      "Digital marketing"
    ]
  },
  {
    "name": "Tenaga Kesehatan",
    "icon": "fa-solid fa-stethoscope",
    "subs": [
      "Tunggu pasien",
      "Rawat yang sakit",
      "Fisioterapi",
      "Ambulan",
      "Ahli Pijat urut",
      "Khitan"
    ]
  },
  {
    "name": "Media sosial",
    "icon": "fa-solid fa-mobile-screen",
    "subs": [
      "Content creator",
      "Artist",
      "Streamer",
      "Host live",
      "Admin Toko Online",
      "Copywriter"
    ]
  },
  {
    "name": "Multimedia",
    "icon": "fa-solid fa-camera",
    "subs": [
      "Photografer",
      "Videografer",
      "Editor",
      "Sound system",
      "Design grafhis"
    ]
  },
  {
    "name": "Weding Organizer",
    "icon": "fa-solid fa-ring",
    "subs": [
      "Panggung",
      "Decoration",
      "MUA",
      "Catering",
      "Juru masak"
    ]
  },
  {
    "name": "Pendidikan",
    "icon": "fa-solid fa-graduation-cap",
    "subs": [
      "Guru ngaji",
      "Les Private sekolah",
      "Kursus Bahasa",
      "Komputer",
      "Alat Musik",
      "Vokal Singer"
    ]
  },
  {
    "name": "Konsultan",
    "icon": "fa-solid fa-user-tie",
    "subs": [
      "IT",
      "Tanaman",
      "Bangunan",
      "Elektronika",
      "Teknik sipil",
      "Perpajakan",
      "Perizinan-Legalitas",
      "Bisnis UMKM"
    ]
  }
];

const PRESET_AVATARS = [
  {
    "id": "kang_asep",
    "name": "Kang Asep (Tukang)",
    "role": "Tukang & Pekerja Harian",
    "image": "avatars/kang_asep.jpg",
    "status": "online",
    "desc": "Pria lokal Indonesia usia 38 tahun, kaos oblong abu-abu, handuk leher di gang perumahan."
  },
  {
    "id": "bunda_hijab",
    "name": "Bunda Rahma",
    "role": "Ibu Rumah Tangga",
    "image": "avatars/bunda_hijab.jpg",
    "status": "online",
    "desc": "Wanita Indonesia usia 34 tahun, jilbab instan santai di ruang tamu rumah tipe 36."
  },
  {
    "id": "ayah_bapak",
    "name": "Pak Hendra (Warga Blok B)",
    "role": "Bapak-bapak Warga",
    "image": "avatars/ayah_bapak.jpg",
    "status": "online",
    "desc": "Pria Indonesia usia 45 tahun, berkacamata, kaos berkerah santai di teras tanaman pot."
  },
  {
    "id": "bu_rt",
    "name": "Bu RT Wati",
    "role": "Pengurus Lingkungan / Tetangga",
    "image": "avatars/bu_rt.jpg",
    "status": "online",
    "desc": "Ibu-ibu Indonesia usia 48 tahun, daster batik adem, jilbab santai teras rumah."
  },
  {
    "id": "pak_rt",
    "name": "Pak RT Bambang",
    "role": "Ketua RT / Tokoh Warga",
    "image": "avatars/pak_rt.jpg",
    "status": "online",
    "desc": "Pria paruh baya usia 52 tahun, peci hitam & baju koko sederhana di depan balai RT."
  },
  {
    "id": "teh_neng",
    "name": "Teh Neng / Mbak Dina",
    "role": "Anak Kos / Mahasiswi",
    "image": "avatars/teh_neng.jpg",
    "status": "online",
    "desc": "Perempuan muda Indonesia usia 22 tahun, jilbab kasual warna sage green di teras rumah."
  }
];

const SCENARIOS = {
  "rumput": {
    "title": "Potong Rumput & Kran Bocor",
    "category": "Perkebunan",
    "defaultAvatar": "kang_asep",
    "defaultName": "Kang Asep (Tukang)",
    "id": {
      "name": "Kang Asep (Tukang)",
      "slides": [
        {
          "id": 1,
          "messages": [
            {
              "id": 1,
              "sender": "other",
              "text": "Sampurasun Bu Rahma, punten ieu abdi Kang Asep tukang kebon caket pos RT.",
              "time": "08:15",
              "status": "read"
            },
            {
              "id": 2,
              "sender": "me",
              "text": "Eh iya Kang Asep! Rumput halaman samping udah tinggi banget nih, sekalian kran tempat wudhu netes terus. Bisa bantu beresin hari ini kang?",
              "time": "08:17",
              "status": "read"
            },
            {
              "id": 3,
              "sender": "other",
              "text": "Bisa pisan Bu! Jam 9 abdi langsung ka bumi nyandak arit sareng kunci pipa.",
              "time": "08:18",
              "status": "read"
            }
          ]
        },
        {
          "id": 2,
          "messages": [
            {
              "id": 4,
              "sender": "me",
              "text": "Kang, bayarnya mau via apa nih? Kemarin kata Pak RT transaksi lewat aplikasi Bantu Warga aja biar amanah dua belah pihak.",
              "time": "11:30",
              "status": "read"
            },
            {
              "id": 5,
              "sender": "other",
              "text": "Muhun leres Bu! Abdi atos daftar akun di Bantu Warga oge. Malihan langkung sae artosna ditahan heula di sistem dugi padamelan beres.",
              "time": "11:32",
              "status": "read"
            },
            {
              "id": 6,
              "sender": "me",
              "text": "Sip mantap kang! Udah saya buatkan tugas potong rumput & kran di Bantu Warga ya, dananya Rp 120.000 udah masuk rekber sistem.",
              "time": "11:35",
              "status": "read"
            }
          ]
        },
        {
          "id": 3,
          "messages": [
            {
              "id": 7,
              "sender": "other",
              "text": "Alhamdulillah parantos rengse sadayana Bu. Halaman tos resik, kran tos teu bocor deui.",
              "time": "13:40",
              "status": "read"
            },
            {
              "id": 8,
              "sender": "me",
              "text": "Wah rapih banget Kang Asep! Langsung saya klik Selesai di aplikasi ya, dananya otomatis cair ke saldo Kang Asep. Makasih banyak ya!",
              "time": "13:42",
              "status": "read"
            },
            {
              "id": 9,
              "sender": "other",
              "text": "Nuhun pisan Bu Rahma! Bingah pisan tiasa ngabantosan tatangga nyalira. Lancar teras rejekina Bu.",
              "time": "13:45",
              "status": "read"
            }
          ]
        }
      ]
    },
    "su": {
      "name": "Kang Asep (Tukang Buruan)",
      "slides": [
        {
          "id": 1,
          "messages": [
            {
              "id": 1,
              "sender": "other",
              "text": "Sampurasun Bu Rahma, punten abdi Kang Asep nu biasa ngaberesan kebon caket pos kamling.",
              "time": "08:15",
              "status": "read"
            },
            {
              "id": 2,
              "sender": "me",
              "text": "Rampes Kang Asep! Tah kabeneran pisan, jukut di buruan parantos ngajumpluk. Sareng kran solokan pengker rada ngocor wae. Tiasa dinten ieu?",
              "time": "08:17",
              "status": "read"
            },
            {
              "id": 3,
              "sender": "other",
              "text": "Mangga Bu, tabuh salapan abdi ka bumi nyandak babat jukut sareng konci solokan.",
              "time": "08:18",
              "status": "read"
            }
          ]
        },
        {
          "id": 2,
          "messages": [
            {
              "id": 4,
              "sender": "me",
              "text": "Kang, perkawis ongkosna urang anggo aplikasi Bantu Warga wae nya supados merenah tur amanah?",
              "time": "11:30",
              "status": "read"
            },
            {
              "id": 5,
              "sender": "other",
              "text": "Saé pisan Bu! Abdi ge parantos diverifikasi KTP di Bantu Warga. Artosna kasimpen aman di rekening bersama.",
              "time": "11:32",
              "status": "read"
            },
            {
              "id": 6,
              "sender": "me",
              "text": "Muhun Kang, parantos ku abdi ditransfer ka sistem Bantu Warga. Mangga dikawitan.",
              "time": "11:35",
              "status": "read"
            }
          ]
        },
        {
          "id": 3,
          "messages": [
            {
              "id": 7,
              "sender": "other",
              "text": "Alhamdulillah Bu, buruan tos beresik herang, kran oge tos teu ngeclak deui.",
              "time": "13:40",
              "status": "read"
            },
            {
              "id": 8,
              "sender": "me",
              "text": "Hatur nuhun pisan Kang Asep! Hasilna sae pisan, dana langsung ku abdi diklik release ka rekening Kang Asep.",
              "time": "13:42",
              "status": "read"
            },
            {
              "id": 9,
              "sender": "other",
              "text": "Sami-sami Bu Rahma, hatur nuhun oge pami aya padamelan sanes mangga wartosan abdi deui.",
              "time": "13:45",
              "status": "read"
            }
          ]
        }
      ]
    },
    "jv": {
      "name": "Mas Joko (Tukang Kebon)",
      "slides": [
        {
          "id": 1,
          "messages": [
            {
              "id": 1,
              "sender": "other",
              "text": "Kula nuwun Bu Rahma, niki Mas Joko ingkang griyane wingking balai RT.",
              "time": "08:15",
              "status": "read"
            },
            {
              "id": 2,
              "sender": "me",
              "text": "Nggih Mas Joko! Sukete teng latar samping sampun dhuwur sanget, sekalian kran wastafel trocoh terus. Saget tulung dinten niki?",
              "time": "08:17",
              "status": "read"
            },
            {
              "id": 3,
              "sender": "other",
              "text": "Saget sanget Bu! Jam songo kulo langsung mriku mbekta arit kaliyan kunci pipa.",
              "time": "08:18",
              "status": "read"
            }
          ]
        },
        {
          "id": 2,
          "messages": [
            {
              "id": 4,
              "sender": "me",
              "text": "Mas, mangke bayare lewat aplikasi Bantu Warga nggih, sami-sami aman lan transparan.",
              "time": "11:30",
              "status": "read"
            },
            {
              "id": 5,
              "sender": "other",
              "text": "Leres sanget Bu, kulo nggih remen nek liwat Bantu Warga. Danane aman di-rekber dados mboten sumelang.",
              "time": "11:32",
              "status": "read"
            },
            {
              "id": 6,
              "sender": "me",
              "text": "Sip Mas Joko, sampun kulo posting tugas lan depositaken 120 ewu teng aplikasi nggih.",
              "time": "11:35",
              "status": "read"
            }
          ]
        },
        {
          "id": 3,
          "messages": [
            {
              "id": 7,
              "sender": "other",
              "text": "Alhamdulillah sampun rampung sedanten Bu. Sukete resik, krane nggih mboten trocoh malih.",
              "time": "13:40",
              "status": "read"
            },
            {
              "id": 8,
              "sender": "me",
              "text": "Matur nuwun sanget Mas Joko! Karyane apik tenan, langsung kulo klik Selesai supados danane cair teng dompet mas.",
              "time": "13:42",
              "status": "read"
            },
            {
              "id": 9,
              "sender": "other",
              "text": "Matur nuwun sanget Bu Rahma, mugi-mugi rejekine tambah lancar lan berkah sedanten.",
              "time": "13:45",
              "status": "read"
            }
          ]
        }
      ]
    },
    "subCategory": "Pemotong rumput",
    "icon": "fa-solid fa-leaf"
  },
  "servis_ac": {
    "title": "Servis AC & Cuci Filter",
    "category": "Jasa Teknis",
    "defaultAvatar": "kang_asep",
    "defaultName": "Pakde Yanto (Teknisi AC)",
    "id": {
      "name": "Pakde Yanto (Teknisi AC)",
      "slides": [
        {
          "id": 1,
          "messages": [
            {
              "id": 1,
              "sender": "me",
              "text": "Halo Pakde Yanto, AC kamar tidur bunyi berisik sama cuma keluar angin doang nih panas.",
              "time": "14:10",
              "status": "read"
            },
            {
              "id": 2,
              "sender": "other",
              "text": "Halo Mas Hendra. Itu biasanya filternya mampet debu tebel atau freonnya rembes. Mau dicek sore ini jam 4?",
              "time": "14:12",
              "status": "read"
            },
            {
              "id": 3,
              "sender": "me",
              "text": "Boleh pakde, kebetulan anak-anak gak bisa tidur kalau AC-nya mati.",
              "time": "14:15",
              "status": "read"
            }
          ]
        },
        {
          "id": 2,
          "messages": [
            {
              "id": 4,
              "sender": "other",
              "text": "Siap mas, nanti transaksinya di Bantu Warga ya, biar ada rincian cuci evaporator + tambah freon jelas.",
              "time": "14:20",
              "status": "read"
            },
            {
              "id": 5,
              "sender": "me",
              "text": "Wah mantap pakde, transparan gak ada biaya siluman. Saya siapin job-nya di aplikasi.",
              "time": "14:22",
              "status": "read"
            }
          ]
        },
        {
          "id": 3,
          "messages": [
            {
              "id": 6,
              "sender": "other",
              "text": "Sudah dingin nusuk tulang mas AC-nya, amperenya juga normal lagi.",
              "time": "17:05",
              "status": "read"
            },
            {
              "id": 7,
              "sender": "me",
              "text": "Beneran dingin banget pakde! Dana di Bantu Warga sudah saya konfirmasi selesai ya. Makasih banyak pakde!",
              "time": "17:10",
              "status": "read"
            }
          ]
        }
      ]
    },
    "su": {
      "name": "Pak Yanto (Teknisi AC)",
      "slides": [
        {
          "id": 1,
          "messages": [
            {
              "id": 1,
              "sender": "me",
              "text": "Punten Pak Yanto, AC di kamar hareudang pisan, ngan kaluar angin wungkul teu tiris.",
              "time": "14:10",
              "status": "read"
            },
            {
              "id": 2,
              "sender": "other",
              "text": "Muhun Kang Hendra, jigana mah kotor lebu atawa freon bocor leutik. Bade diparios sonten ieu?",
              "time": "14:12",
              "status": "read"
            },
            {
              "id": 3,
              "sender": "me",
              "text": "Mangga Pak, sae sonten ieu supados wengi murangkalih tiasa sare tibra.",
              "time": "14:15",
              "status": "read"
            }
          ]
        },
        {
          "id": 2,
          "messages": [
            {
              "id": 4,
              "sender": "other",
              "text": "Mangga urang transaksi di Bantu Warga supados jelas rincianna sareng aya garansi rekberna.",
              "time": "14:20",
              "status": "read"
            },
            {
              "id": 5,
              "sender": "me",
              "text": "Muhun satuju pisan, langkung reugreug pami nganggo sistem Bantu Warga.",
              "time": "14:22",
              "status": "read"
            }
          ]
        },
        {
          "id": 3,
          "messages": [
            {
              "id": 6,
              "sender": "other",
              "text": "Parantos tiis nyelesep Kang, mesin oge parantos lemes deui suantenna.",
              "time": "17:05",
              "status": "read"
            },
            {
              "id": 7,
              "sender": "me",
              "text": "Alhamdulillah hatur nuhun Pak Yanto! Dana parantos ku abdi cairkeun di aplikasi.",
              "time": "17:10",
              "status": "read"
            }
          ]
        }
      ]
    },
    "jv": {
      "name": "Pakde Yanto (AC Warga)",
      "slides": [
        {
          "id": 1,
          "messages": [
            {
              "id": 1,
              "sender": "me",
              "text": "Pak Yanto, AC kamar sumuk sanget, mboten asrep babar blas cuma metu angin.",
              "time": "14:10",
              "status": "read"
            },
            {
              "id": 2,
              "sender": "other",
              "text": "Nggih Mas Hendra, biasanipun reged utawi freone entek. Kulo mriku sonten jam sekawan nggih?",
              "time": "14:12",
              "status": "read"
            },
            {
              "id": 3,
              "sender": "me",
              "text": "Nggih Pak Yanto, mangke nyuwun tulung dipun resiki sisan supados atis malih.",
              "time": "14:15",
              "status": "read"
            }
          ]
        },
        {
          "id": 2,
          "messages": [
            {
              "id": 4,
              "sender": "other",
              "text": "Mangke transaksine liwat Bantu Warga mawon mas, cetho rinciane mboten wonten biaya siluman.",
              "time": "14:20",
              "status": "read"
            },
            {
              "id": 5,
              "sender": "me",
              "text": "Cocok Pak Yanto, aman tur marem teng ati nek ngangge Bantu Warga.",
              "time": "14:22",
              "status": "read"
            }
          ]
        },
        {
          "id": 3,
          "messages": [
            {
              "id": 6,
              "sender": "other",
              "text": "Sampun atis anyep mas AC-ne, saget dipun raosaken sumilir.",
              "time": "17:05",
              "status": "read"
            },
            {
              "id": 7,
              "sender": "me",
              "text": "Matur nuwun sanget Pak Yanto, danane sampun kulo konfirmasi teng aplikasi Bantu Warga!",
              "time": "17:10",
              "status": "read"
            }
          ]
        }
      ]
    },
    "subCategory": "Tukang AC",
    "icon": "fa-solid fa-wrench"
  },
  "genteng": {
    "title": "Genteng Bocor Musim Hujan",
    "category": "Building",
    "defaultAvatar": "kang_asep",
    "defaultName": "Kang Dadan (Tukang Atap)",
    "id": {
      "name": "Kang Dadan (Tukang Atap)",
      "slides": [
        {
          "id": 1,
          "messages": [
            {
              "id": 1,
              "sender": "me",
              "text": "Kang Dadan tolong, atap ruang tamu bocor deras banget pas hujan lebat barusan! Plafon udah melendung takut jebol.",
              "time": "15:20",
              "status": "read"
            },
            {
              "id": 2,
              "sender": "other",
              "text": "Waduh siap Bu! Saya lagi di blok sebelah, bawa tangga sama lem aspal. Langsung merapat sekarang.",
              "time": "15:22",
              "status": "read"
            }
          ]
        },
        {
          "id": 2,
          "messages": [
            {
              "id": 3,
              "sender": "other",
              "text": "Ternyata ada 3 genteng morosot sama talang seng bolong bu. Untung cepat dibenerin sebelum plafon ambrol.",
              "time": "16:40",
              "status": "read"
            },
            {
              "id": 4,
              "sender": "me",
              "text": "Alhamdulillah penyelamat banget! Berapa biayanya kang?",
              "time": "16:42",
              "status": "read"
            }
          ]
        },
        {
          "id": 3,
          "messages": [
            {
              "id": 5,
              "sender": "other",
              "text": "Cukup 85rb aja bu sesuai tarif di Bantu Warga. Biar aman langsung selesaikan di aplikasi ya bu.",
              "time": "16:45",
              "status": "read"
            },
            {
              "id": 6,
              "sender": "me",
              "text": "Siap kang, dana udah cair ke dompet aplikasi akang ya. Makasih banyak penyelamat komplek!",
              "time": "16:48",
              "status": "read"
            }
          ]
        }
      ]
    },
    "su": {
      "name": "Kang Dadan (Tukang Hateup)",
      "slides": [
        {
          "id": 1,
          "messages": [
            {
              "id": 1,
              "sender": "me",
              "text": "Kang Dadan tulung! Hateup ruang tamu bocor ageung pisan, sieun jebol plafon.",
              "time": "15:20",
              "status": "read"
            },
            {
              "id": 2,
              "sender": "other",
              "text": "Waduh mangga Bu! Abdi nuju di RW tatangga, langsung meluncur mawa taraje sareng aquaproof.",
              "time": "15:22",
              "status": "read"
            }
          ]
        },
        {
          "id": 2,
          "messages": [
            {
              "id": 3,
              "sender": "other",
              "text": "Aya kenteng nu morosot tilu siki bu, teras talangna kapendet dangdaunan garing.",
              "time": "16:40",
              "status": "read"
            },
            {
              "id": 4,
              "sender": "me",
              "text": "Alhamdulillah untung aya Kang Dadan, sabaraha sadayana kang?",
              "time": "16:42",
              "status": "read"
            }
          ]
        },
        {
          "id": 3,
          "messages": [
            {
              "id": 5,
              "sender": "other",
              "text": "Saukur 85rb wae bu nurutkeun tarif Bantu Warga. Langkung gampil klik rengse di aplikasi.",
              "time": "16:45",
              "status": "read"
            },
            {
              "id": 6,
              "sender": "me",
              "text": "Muhun atos ku abdi cairkeun artosna. Hatur nuhun pisan Kang Dadan!",
              "time": "16:48",
              "status": "read"
            }
          ]
        }
      ]
    },
    "jv": {
      "name": "Kang Dadan (Tukang Payon)",
      "slides": [
        {
          "id": 1,
          "messages": [
            {
              "id": 1,
              "sender": "me",
              "text": "Kang Dadan nyuwun tulung, genteng ruang tamu bocor deres pas udan mau, plafon empuk ajeng ambrol.",
              "time": "15:20",
              "status": "read"
            },
            {
              "id": 2,
              "sender": "other",
              "text": "Waduh nggih Bu! Kulo nembe wonten RT sebelah, langsung mlayu mriku mbekta ondo kaliyan lem aspal.",
              "time": "15:22",
              "status": "read"
            }
          ]
        },
        {
          "id": 2,
          "messages": [
            {
              "id": 3,
              "sender": "other",
              "text": "Wonten genteng morot tigo bu kaliyan talange ketutupan godhong garing. Sampun kulo dandani.",
              "time": "16:40",
              "status": "read"
            },
            {
              "id": 4,
              "sender": "me",
              "text": "Matur sembah nuwun Kang Dadan, pinter tenan gercep. Pinten biayane?",
              "time": "16:42",
              "status": "read"
            }
          ]
        },
        {
          "id": 3,
          "messages": [
            {
              "id": 5,
              "sender": "other",
              "text": "Cekap 85 ewu mawon bu miturut tarif teng Bantu Warga. Monggo dipun selesaikan teng aplikasi.",
              "time": "16:45",
              "status": "read"
            },
            {
              "id": 6,
              "sender": "me",
              "text": "Sampun kulo transfer lewat aplikasi nggih mas. Matur nuwun sanget pitulungane!",
              "time": "16:48",
              "status": "read"
            }
          ]
        }
      ]
    },
    "subCategory": "Baja ringan",
    "icon": "fa-solid fa-helmet-safety"
  },
  "art_harian": {
    "title": "ART Harian & Cleaning Service",
    "category": "Asst Rumah tangga",
    "subCategory": "ART harian",
    "icon": "fa-solid fa-broom",
    "defaultAvatar": "bu_rt",
    "defaultName": "Bu RT Wati (Koordinator ART)",
    "id": {
      "name": "Mbak Sri (ART Harian)",
      "slides": [
        {
          "id": 1,
          "messages": [
            {
              "id": 1,
              "sender": "me",
              "text": "Halo Mbak Sri, dapat info dari Bu RT katanya mbak bisa bantu beberes rumah harian ya? Rumah berantakan banget habis syukuran kemarin.",
              "time": "07:30",
              "status": "read"
            },
            {
              "id": 2,
              "sender": "other",
              "text": "Halo Bu Rahma, betul bu. Hari ini saya kosong jam 9 pagi sampai jam 1 siang. Mau dibersihkan bagian mana saja bu?",
              "time": "07:32",
              "status": "read"
            },
            {
              "id": 3,
              "sender": "me",
              "text": "Sapu pel lantai 1-2, cuci piring kotor, sama lap kaca teras depan mbak.",
              "time": "07:35",
              "status": "read"
            }
          ]
        },
        {
          "id": 2,
          "messages": [
            {
              "id": 4,
              "sender": "other",
              "text": "Siap bu, nanti transaksinya order lewat Bantu Warga ya bu, biar ada rincian jam kerja dan amanah.",
              "time": "07:38",
              "status": "read"
            },
            {
              "id": 5,
              "sender": "me",
              "text": "Iya mbak, saya udah buat tugas ART Harian Rp 80.000 di Bantu Warga. Uangnya udah aman tersimpan di sistem.",
              "time": "07:40",
              "status": "read"
            }
          ]
        },
        {
          "id": 3,
          "messages": [
            {
              "id": 6,
              "sender": "other",
              "text": "Bu Rahma, rumah sudah bersih kinclong semua ya. Kunci pagar sudah saya titip Bu RT sesuai pesan.",
              "time": "12:45",
              "status": "read"
            },
            {
              "id": 7,
              "sender": "me",
              "text": "Wah wangi dan rapi banget mbak! Langsung saya klik Selesai di aplikasi, uangnya udah cair ke mbak ya. Makasih banyak!",
              "time": "12:50",
              "status": "read"
            }
          ]
        }
      ]
    },
    "su": {
      "name": "Ceu Sri (Bantu Beberes)",
      "slides": [
        {
          "id": 1,
          "messages": [
            {
              "id": 1,
              "sender": "me",
              "text": "Sampurasun Ceu Sri, saur Bu RT ceuceu tiasa ngabantos beberes rorompok dinten ieu? Pabalatak pisan saparantos salametan.",
              "time": "07:30",
              "status": "read"
            },
            {
              "id": 2,
              "sender": "other",
              "text": "Rampes Bu Rahma! Muhun tiasa pisan, tabuh salapan enjing abdi langsung meluncur ka bumi ibu.",
              "time": "07:32",
              "status": "read"
            },
            {
              "id": 3,
              "sender": "me",
              "text": "Nuhun Ceu, pangnyeuseuhkeun piring sareng ngepel kamar tamu nya.",
              "time": "07:35",
              "status": "read"
            }
          ]
        },
        {
          "id": 2,
          "messages": [
            {
              "id": 4,
              "sender": "other",
              "text": "Mangga Bu, orderna di aplikasi Bantu Warga supados langkung aman sareng aya buktosna.",
              "time": "07:38",
              "status": "read"
            },
            {
              "id": 5,
              "sender": "me",
              "text": "Muhun ceu, parantos ditransfer ka sistem rekber Bantu Warga 80 rebu.",
              "time": "07:40",
              "status": "read"
            }
          ]
        },
        {
          "id": 3,
          "messages": [
            {
              "id": 6,
              "sender": "other",
              "text": "Alhamdulillah parantos herang ngagilap sadayana Bu, konci atos disimpen di Bu RT.",
              "time": "12:45",
              "status": "read"
            },
            {
              "id": 7,
              "sender": "me",
              "text": "Hatur nuhun pisan Ceu Sri, raos pisan ningalina! Artosna parantos dicairkeun di aplikasi.",
              "time": "12:50",
              "status": "read"
            }
          ]
        }
      ]
    },
    "jv": {
      "name": "Mbak Sri (Rewang Harian)",
      "slides": [
        {
          "id": 1,
          "messages": [
            {
              "id": 1,
              "sender": "me",
              "text": "Kula nuwun Mbak Sri, jarene Bu RT sampeyan saget ngrencangi resik-resik griya nggih? Bubar slametan reget sanget.",
              "time": "07:30",
              "status": "read"
            },
            {
              "id": 2,
              "sender": "other",
              "text": "Nggih Bu Rahma, saget sanget. Jam songo kulo langsung mriku nggih, mangke kulo sapu pel sedanten.",
              "time": "07:32",
              "status": "read"
            },
            {
              "id": 3,
              "sender": "me",
              "text": "Matur nuwun Mbak, kalian wastafel piring kotor tulung dipun kumbah nggih.",
              "time": "07:35",
              "status": "read"
            }
          ]
        },
        {
          "id": 2,
          "messages": [
            {
              "id": 4,
              "sender": "other",
              "text": "Nggih bu, bayare liwat aplikasi Bantu Warga mawon supados sami-sami marem lan aman.",
              "time": "07:38",
              "status": "read"
            },
            {
              "id": 5,
              "sender": "me",
              "text": "Sip mbak, sampun kulo posting tugas teng aplikasi lan danane sampun mlebet rekber.",
              "time": "07:40",
              "status": "read"
            }
          ]
        },
        {
          "id": 3,
          "messages": [
            {
              "id": 6,
              "sender": "other",
              "text": "Sampun resik gumebyar sedanten bu, kuncen griya kulo titipaken Bu RT.",
              "time": "12:45",
              "status": "read"
            },
            {
              "id": 7,
              "sender": "me",
              "text": "Matur suwun sanget Mbak Sri, wangi lan rapi tenan! Danane sampun kulo cairaken teng aplikasi.",
              "time": "12:50",
              "status": "read"
            }
          ]
        }
      ]
    }
  },
  "kurir_pindahan": {
    "title": "Jasa Pindahan & Angkat Barang",
    "category": "Kurir",
    "subCategory": "Jasa Pindahan",
    "icon": "fa-solid fa-box",
    "defaultAvatar": "ayah_bapak",
    "defaultName": "Pak Hendra (Jasa Pindahan)",
    "id": {
      "name": "Pak Hendra (Pick-up Warga)",
      "slides": [
        {
          "id": 1,
          "messages": [
            {
              "id": 1,
              "sender": "me",
              "text": "Pak Hendra, mau tanya apa ada mobil pick up kosong siang ini? Mau angkut lemari sama kulkas ke kosan blok C.",
              "time": "10:15",
              "status": "read"
            },
            {
              "id": 2,
              "sender": "other",
              "text": "Halo Mas! Ada mobil pick up standby lengkap sama terpal dan tali tambang. Sama kenek angkut barangnya juga?",
              "time": "10:17",
              "status": "read"
            },
            {
              "id": 3,
              "sender": "me",
              "text": "Iya sekalian sama bantu angkat pak biar cepet selesai.",
              "time": "10:20",
              "status": "read"
            }
          ]
        },
        {
          "id": 2,
          "messages": [
            {
              "id": 4,
              "sender": "other",
              "text": "Bisa mas, tarif lokal komplek 100rb aja. Mas bikin tugas di Bantu Warga ya biar aman gak ribet kembalian uang.",
              "time": "10:22",
              "status": "read"
            },
            {
              "id": 5,
              "sender": "me",
              "text": "Siap pak, dana 100rb udah masuk rekening bersama Bantu Warga. Saya tunggu di rumah.",
              "time": "10:25",
              "status": "read"
            }
          ]
        },
        {
          "id": 3,
          "messages": [
            {
              "id": 6,
              "sender": "other",
              "text": "Barang sudah sampai di kosan kamar atas ya mas, mulus gak ada lecet sedikitpun.",
              "time": "12:10",
              "status": "read"
            },
            {
              "id": 7,
              "sender": "me",
              "text": "Mantap gercep banget Pak Hendra! Saldo langsung cair ke aplikasi ya pak. Makasih banyak!",
              "time": "12:12",
              "status": "read"
            }
          ]
        }
      ]
    },
    "su": {
      "name": "Pak Hendra (Angkut Barang)",
      "slides": [
        {
          "id": 1,
          "messages": [
            {
              "id": 1,
              "sender": "me",
              "text": "Pak Hendra punten, mobil bak nganggur teu siang ieu? Hoyong ngangkut lomari sareng kulkas ka rorompok anyar.",
              "time": "10:15",
              "status": "read"
            },
            {
              "id": 2,
              "sender": "other",
              "text": "Aya Kang, sayaga mobil bak sareng tambang talina. Sakantenan sareng kenekna?",
              "time": "10:17",
              "status": "read"
            },
            {
              "id": 3,
              "sender": "me",
              "text": "Muhun sakantenan ngabantosan ngangkat barang abotna pak.",
              "time": "10:20",
              "status": "read"
            }
          ]
        },
        {
          "id": 2,
          "messages": [
            {
              "id": 4,
              "sender": "other",
              "text": "Mangga Kang, tarif tatangga 100rb wae di Bantu Warga supados transparan.",
              "time": "10:22",
              "status": "read"
            },
            {
              "id": 5,
              "sender": "me",
              "text": "Muhun atos ku abdi didaftarkeun dina aplikasi Bantu Warga. Mangga ditampi.",
              "time": "10:25",
              "status": "read"
            }
          ]
        },
        {
          "id": 3,
          "messages": [
            {
              "id": 6,
              "sender": "other",
              "text": "Barang parantos dugi ka kamar luhur Kang, aman sadayana teu aya nu lecet.",
              "time": "12:10",
              "status": "read"
            },
            {
              "id": 7,
              "sender": "me",
              "text": "Alhamdulillah nuhun pisan Pak Hendra! Artosna parantos ku abdi cairkeun.",
              "time": "12:12",
              "status": "read"
            }
          ]
        }
      ]
    },
    "jv": {
      "name": "Pak Hendra (Pick-up Warga)",
      "slides": [
        {
          "id": 1,
          "messages": [
            {
              "id": 1,
              "sender": "me",
              "text": "Pak Hendra nyuwun sewu, wonten pick-up nganggur mboten awan niki? Ajeng ngangkut lemari kaliyan kulkas.",
              "time": "10:15",
              "status": "read"
            },
            {
              "id": 2,
              "sender": "other",
              "text": "Wonten Mas, mobil siap kalian terpal. Sakantenan tiyang ngangkate?",
              "time": "10:17",
              "status": "read"
            },
            {
              "id": 3,
              "sender": "me",
              "text": "Nggih sakantenan pak supados cepet rampung.",
              "time": "10:20",
              "status": "read"
            }
          ]
        },
        {
          "id": 2,
          "messages": [
            {
              "id": 4,
              "sender": "other",
              "text": "Mangke transaksine liwat Bantu Warga mawon mas, 100 ewu resik amanah.",
              "time": "10:22",
              "status": "read"
            },
            {
              "id": 5,
              "sender": "me",
              "text": "Cocok pak, sampun kulo depositaken teng aplikasi Bantu Warga nggih.",
              "time": "10:25",
              "status": "read"
            }
          ]
        },
        {
          "id": 3,
          "messages": [
            {
              "id": 6,
              "sender": "other",
              "text": "Sedanten barang sampun dugi kamar nduwur mas, mboten wonten sing lecet babar blas.",
              "time": "12:10",
              "status": "read"
            },
            {
              "id": 7,
              "sender": "me",
              "text": "Matur suwun sanget Pak Hendra, langsung kulo cairaken teng dompet aplikasi nggih!",
              "time": "12:12",
              "status": "read"
            }
          ]
        }
      ]
    }
  },
  "mekanik_motor": {
    "title": "Montir Motor Mogok Panggilan",
    "category": "Mekanik",
    "subCategory": "Mekanik Motor",
    "icon": "fa-solid fa-gears",
    "defaultAvatar": "kang_asep",
    "defaultName": "Bang Ujang (Montir Warga)",
    "id": {
      "name": "Bang Ujang (Montir Keliling)",
      "slides": [
        {
          "id": 1,
          "messages": [
            {
              "id": 1,
              "sender": "me",
              "text": "Bang Ujang tolong, motor Vario saya mati mendadak di jalan gang depan masjid, gak bisa di-starter sama sekali.",
              "time": "06:45",
              "status": "read"
            },
            {
              "id": 2,
              "sender": "other",
              "text": "Pagi mas. Kemungkinan aki tekor atau businya mati mas. Tunggu 10 menit saya meluncur bawa toolkit sama busi cadangan.",
              "time": "06:47",
              "status": "read"
            }
          ]
        },
        {
          "id": 2,
          "messages": [
            {
              "id": 3,
              "sender": "other",
              "text": "Udah ketemu penyakitnya mas, cuma cop businya kendor kena polisi tidur. Ongkos cek & servis 35rb aja.",
              "time": "07:15",
              "status": "read"
            },
            {
              "id": 4,
              "sender": "me",
              "text": "Untung bukan mesin jebol! Saya bayar lewat Bantu Warga ya bang biar praktis gak ada uang pas.",
              "time": "07:17",
              "status": "read"
            }
          ]
        },
        {
          "id": 3,
          "messages": [
            {
              "id": 5,
              "sender": "me",
              "text": "Udah cair ya bang di Bantu Warga, langsung bisa jalan lagi motornya. Makasih penyelamat!",
              "time": "07:20",
              "status": "read"
            },
            {
              "id": 6,
              "sender": "other",
              "text": "Sama-sama mas! Hati-hati di jalan ya mas, berkah selalu.",
              "time": "07:22",
              "status": "read"
            }
          ]
        }
      ]
    },
    "su": {
      "name": "Kang Ujang (Montir Caket)",
      "slides": [
        {
          "id": 1,
          "messages": [
            {
              "id": 1,
              "sender": "me",
              "text": "Kang Ujang punten tulungan, motor mogok ngadadak di payun mesjid, teu tiasa hirup.",
              "time": "06:45",
              "status": "read"
            },
            {
              "id": 2,
              "sender": "other",
              "text": "Enjing Kang, antosan 10 menit abdi nyandak obeng sareng konci busi.",
              "time": "06:47",
              "status": "read"
            }
          ]
        },
        {
          "id": 2,
          "messages": [
            {
              "id": 3,
              "sender": "other",
              "text": "Alhamdulillah ngan ukur cop busi coplok kang, ongkosna 35rb wae.",
              "time": "07:15",
              "status": "read"
            },
            {
              "id": 4,
              "sender": "me",
              "text": "Muhun nuhun Kang Ujang, dibayar liwat aplikasi Bantu Warga supados gampil.",
              "time": "07:17",
              "status": "read"
            }
          ]
        },
        {
          "id": 3,
          "messages": [
            {
              "id": 5,
              "sender": "me",
              "text": "Parantos ku abdi cairkeun artosna Kang, nuhun pisan gercep!",
              "time": "07:20",
              "status": "read"
            },
            {
              "id": 6,
              "sender": "other",
              "text": "Hatur nuhun Kang, mugia salamet dugi ka tujuan.",
              "time": "07:22",
              "status": "read"
            }
          ]
        }
      ]
    },
    "jv": {
      "name": "Mas Ujang (Montir Warga)",
      "slides": [
        {
          "id": 1,
          "messages": [
            {
              "id": 1,
              "sender": "me",
              "text": "Mas Ujang nyuwun tulung, motorku mogok neng ngarep masjid ra iso urip babar blas.",
              "time": "06:45",
              "status": "read"
            },
            {
              "id": 2,
              "sender": "other",
              "text": "Nggih mas, sedelo kulo mriku mbekta kunci-kunci lan busi anyar.",
              "time": "06:47",
              "status": "read"
            }
          ]
        },
        {
          "id": 2,
          "messages": [
            {
              "id": 3,
              "sender": "other",
              "text": "Sampun ketemu mas, cop busine coplok. Ongkose 35 ewu mawon.",
              "time": "07:15",
              "status": "read"
            },
            {
              "id": 4,
              "sender": "me",
              "text": "Alhamdulillah slamet! Kulo bayar lewat Bantu Warga nggih mas.",
              "time": "07:17",
              "status": "read"
            }
          ]
        },
        {
          "id": 3,
          "messages": [
            {
              "id": 5,
              "sender": "me",
              "text": "Sampun cair teng dompet mas nggih, matur suwun pitulungane!",
              "time": "07:20",
              "status": "read"
            },
            {
              "id": 6,
              "sender": "other",
              "text": "Matur suwun Mas, ngatos-atos teng dalan nggih.",
              "time": "07:22",
              "status": "read"
            }
          ]
        }
      ]
    }
  },
  "it_wifi_cctv": {
    "title": "Pasang Wifi & Setting CCTV",
    "category": "IT",
    "subCategory": "Wifi",
    "icon": "fa-solid fa-laptop",
    "defaultAvatar": "ayah_bapak",
    "defaultName": "Mas Andre (Teknisi IT Warga)",
    "id": {
      "name": "Mas Andre (Teknisi IT)",
      "slides": [
        {
          "id": 1,
          "messages": [
            {
              "id": 1,
              "sender": "me",
              "text": "Mas Andre, wifi rumah di kamar atas sinyalnya cuma 1 bar nih, sama mau sekalian setting CCTV biar bisa dipantau dari HP.",
              "time": "13:00",
              "status": "read"
            },
            {
              "id": 2,
              "sender": "other",
              "text": "Halo Pak! Bisa pasang wifi repeater sama setting port forwarding IP cam CCTV-nya. Nanti sore jam 4 saya mampir ya pak.",
              "time": "13:05",
              "status": "read"
            }
          ]
        },
        {
          "id": 2,
          "messages": [
            {
              "id": 3,
              "sender": "other",
              "text": "Sore pak, transaksinya via Bantu Warga ya pak, ada garansi setting 7 hari.",
              "time": "16:00",
              "status": "read"
            },
            {
              "id": 4,
              "sender": "me",
              "text": "Mantap mas, tugas setting IT udah saya buat di aplikasi Bantu Warga ya.",
              "time": "16:05",
              "status": "read"
            }
          ]
        },
        {
          "id": 3,
          "messages": [
            {
              "id": 5,
              "sender": "other",
              "text": "Wifi atas sudah tembus 50 Mbps pak, CCTV juga sudah live streaming di HP bapak lancar.",
              "time": "17:30",
              "status": "read"
            },
            {
              "id": 6,
              "sender": "me",
              "text": "Wah jos banget Mas Andre! Dana langsung saya konfirmasi selesai di Bantu Warga. Makasih banyak!",
              "time": "17:35",
              "status": "read"
            }
          ]
        }
      ]
    },
    "su": {
      "name": "Kang Andre (IT Warga)",
      "slides": [
        {
          "id": 1,
          "messages": [
            {
              "id": 1,
              "sender": "me",
              "text": "Kang Andre, sinyal wifi di tingkat luhur lemot pisan, sakantenan hoyong nyambungkeun CCTV kana HP tiasa?",
              "time": "13:00",
              "status": "read"
            },
            {
              "id": 2,
              "sender": "other",
              "text": "Tiasa pisan Kang! Sonten ieu jam 4 abdi ka bumi nyandak kabel LAN sareng repeater.",
              "time": "13:05",
              "status": "read"
            }
          ]
        },
        {
          "id": 2,
          "messages": [
            {
              "id": 3,
              "sender": "other",
              "text": "Urang anggo Bantu Warga supados aya garansi settingna nya kang.",
              "time": "16:00",
              "status": "read"
            },
            {
              "id": 4,
              "sender": "me",
              "text": "Muhun satuju pisan, parantos ku abdi ditransfer ka rekber aplikasi.",
              "time": "16:05",
              "status": "read"
            }
          ]
        },
        {
          "id": 3,
          "messages": [
            {
              "id": 5,
              "sender": "other",
              "text": "Wifi tos ngebut herang, CCTV parantos live dina HP Kang.",
              "time": "17:30",
              "status": "read"
            },
            {
              "id": 6,
              "sender": "me",
              "text": "Hatur nuhun pisan Kang Andre, artosna langsung cair dina aplikasi!",
              "time": "17:35",
              "status": "read"
            }
          ]
        }
      ]
    },
    "jv": {
      "name": "Mas Andre (Teknisi IT)",
      "slides": [
        {
          "id": 1,
          "messages": [
            {
              "id": 1,
              "sender": "me",
              "text": "Mas Andre, wifi kamar dhuwur sinyale lelet sanget, sekalian ajeng pasang CCTV saget dipantau soko HP saget?",
              "time": "13:00",
              "status": "read"
            },
            {
              "id": 2,
              "sender": "other",
              "text": "Saget sanget Mas! Mengko sonten jam sekawan kulo mrono mbekta alat nggih.",
              "time": "13:05",
              "status": "read"
            }
          ]
        },
        {
          "id": 2,
          "messages": [
            {
              "id": 3,
              "sender": "other",
              "text": "Transaksine liwat Bantu Warga mawon mas, supados wonten garansine.",
              "time": "16:00",
              "status": "read"
            },
            {
              "id": 4,
              "sender": "me",
              "text": "Sip Mas Andre, sampun kulo aturaken teng aplikasi nggih.",
              "time": "16:05",
              "status": "read"
            }
          ]
        },
        {
          "id": 3,
          "messages": [
            {
              "id": 5,
              "sender": "other",
              "text": "Wifi sampun banter tenan, CCTV nggih sampun cetha teng layar HP.",
              "time": "17:30",
              "status": "read"
            },
            {
              "id": 6,
              "sender": "me",
              "text": "Matur suwun sanget Mas Andre! Danane sampun kulo klik rampung teng aplikasi.",
              "time": "17:35",
              "status": "read"
            }
          ]
        }
      ]
    }
  }
};

const CAPTION_DATABASE = {
  "rumput": {
    "id": {
      "drama": {
        "hook": "Capek banget liat rumput liar setinggi paha & kran netes bikin tagihan PDAM bengkak... 😩💸",
        "story": "Niatnya mau ngerjain sendiri pas weekend, tapi badan udah rontok duluan. Untung inget info dari tetangga kalo sekarang di komplek kita udah ada aplikasi Bantu Warga (bantuwarga.online)!\n\nTinggal posting tugas, Kang Asep langsung datang jam 9 pagi bawa arit & perlengkapan lengkap. Dan yang paling bikin adem: UANGNYA DITAHAN DI REKENING BERSAMA (ESCROW) sistem Bantu Warga sampai kerjaan beneran beres dan rapih! Gak ada drama tukang kabur bawa uang muka.",
        "cta": "Lagi butuh bantuan tukang harian, benerin kran, atau mau cari cuan sampingan jadi freelancer warga? Yuk coba Bantu Warga sekarang!",
        "tags": [
          "#BantuWarga",
          "#CariTukang",
          "#TukangHarian",
          "#SolusiRumah",
          "#TetanggaAmanah",
          "#RekberAman",
          "#PotongRumput",
          "#KranBocor",
          "#InfoWarga",
          "#fyp",
          "#viralindonesia"
        ]
      },
      "edukasi": {
        "hook": "STOP kasih DP duluan kalau manggil tukang harian kalau gak mau kena zonk! 🛑💡",
        "story": "Banyak warga ngeluh: uang muka udah dikasih, eh sorenya tukang ngilang kerjaan gak tuntas.\n\nSekarang warga cerdas pakenya Bantu Warga:\n1. Identitas pekerja terverifikasi KTP resmi\n2. Sistem Rekening Bersama (Escrow): Uang Anda aman di sistem sampai Anda puas dengan hasilnya\n3. Tarif transparan disepakati di awal tanpa biaya siluman\n\nKerjaan beres, dompet aman, tetangga saling bantu penuh berkah.",
        "cta": "Cek daftar pekerja harian terpercaya di sekitar rumahmu lewat link di bio!",
        "tags": [
          "#TipsRumah",
          "#BantuWarga",
          "#CariJasa",
          "#SolusiHemat",
          "#TukangTerpercaya",
          "#EdukasiWarga",
          "#AplikasiWarga",
          "#FinansialCerdas",
          "#GotongRoyongDigital"
        ]
      },
      "promo": {
        "hook": "Rumah rapih kinclong tanpa mandi keringat, transaksi dijamin aman 100%! ✨🏡",
        "story": "Kran bocor? Rumput liar rimbun? Atau butuh bantuan angkat perabotan? Semuanya selesai cepat lewat Bantu Warga!\n\nTemukan ratusan tetangga & freelancer lokal terdekat yang siap membantu kebutuhan rumah tangga Anda dengan tarif hemat dan jaminan pembayaran amanah.",
        "cta": "Posting tugas pertamamu hari ini di bantuwarga.online — Cepat, Dekat, Terpercaya!",
        "tags": [
          "#BantuWarga",
          "#JasaRumahTangga",
          "#FreelancerLokal",
          "#KerjaSampingan",
          "#CariCuan",
          "#PromoWarga",
          "#KomplekHarmonis",
          "#AplikasiTerbaru"
        ]
      }
    },
    "su": {
      "drama": {
        "hook": "Kahayang teh buruan resik, tapi mun kudu macul sorangan mah asa pasiksak awak... 😅🍃",
        "story": "Untung pisan tatangga gigireun ngawartosan, ayeuna tos aya aplikasi Bantu Warga khusus silih tulungan antar baraya!\n\nTeu kedah riweuh milarian tukang, kantun posting padamelan, Kang Asep langsung dongkap nyandak babat jukut sareng konci pipa. Padamelanana sae pisan, buruan herang deui. Sareng artosna teu sieun dipaling da ditahan heula di rekening bersama sistem dugi padamelan rengse!",
        "cta": "Peryogi bantosan di bumi atanapi hoyong milarian rejeki tambahan? Hayu buka bantuwarga.online ayeuna keneh!",
        "tags": [
          "#BantuWarga",
          "#UrangSunda",
          "#WargaJabar",
          "#TukangBandung",
          "#SilihTulungan",
          "#InfoBandung",
          "#BarayaSunda",
          "#TataliWargi",
          "#JukutBuruan",
          "#fypSunda"
        ]
      },
      "edukasi": {
        "hook": "Ulah waka masihan artos DP ka tukang anu teu acan puguh! Ieu carana supados reugreug... 🛡️☕",
        "story": "Padamelan di bumi seueur nu kedah dibantos tapi sieun lepat milih jalmi? Di Bantu Warga:\n1. Sakumna warga diverifikasi KTP resmi\n2. Artos kasimpen aman dina sistem rekber\n3. Pami padamelan parantos beres nembe artosna dicairkeun ka tukang\n\nKitu carana urang Sunda silih tulungan ku cara anu modern tur amanah.",
        "cta": "Tingali lowongan sareng jasa tatangga di bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#TipsSunda",
          "#WargaSunda",
          "#SilihAsih",
          "#SilihAsah",
          "#SilihAsuh",
          "#JasaLokal",
          "#GotongRoyongModern"
        ]
      },
      "promo": {
        "hook": "Bumi beresih, manah tengtrem, artos aman! Hayu sasarengan di Bantu Warga 💚",
        "story": "Milarian padamelan sampingan atanapi peryogi tukang kebon, ngalereskeun kran, sareng ngabantos beberes? Sadayana aya di Bantu Warga!\n\nPraktis, caket ti rorompok, sareng transparan pisan.",
        "cta": "Daftar ayeuna di bantuwarga.online — Silih tulungan ngawangun lembur!",
        "tags": [
          "#BantuWarga",
          "#LokerSunda",
          "#FreelanceBandung",
          "#LemburKuring",
          "#JabarMasagi",
          "#JasaKomplek"
        ]
      }
    },
    "jv": {
      "drama": {
        "hook": "Sukete latar wes koyo alas roban, boyok wes ra kuat macul... Untung ono aplikasi iki! 🌾👨‍🌾",
        "story": "Niat ati arep resik-resik dewe pas prei, tapi pegel linu kabeh Lur. Bejane wingi pas srawung balai RT dijak karo sesepuh nggunakne aplikasi Bantu Warga!\n\nLangsung pesen Mas Joko, wonge grapyak, tandange cepet, latare dadi resik gumebyar. Sing paling mantep, duwite aman mboten wedi diapusi amargo ditahan teng sistem Rekber Bantu Warga nganti tugase rampung tenan!",
        "cta": "Butuh tulung utowo golek sampingan neng sekitar omah? Langsung jajal bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#WargaJateng",
          "#WargaJogja",
          "#GuyubRukun",
          "#SrawungWarga",
          "#TukangLokal",
          "#GolekGawean",
          "#ResikResik",
          "#SoloInfo",
          "#SemarangTerkini"
        ]
      },
      "edukasi": {
        "hook": "Aja gampang transfer DP nek durung kenal tukange! Sinau soko pengalamanku iki... ⚠️👌",
        "story": "Jaman saiki golek tukang kudu sing bener-bener amanah Lur. Nek liwat Bantu Warga penak sanget:\n1. Wargane sampun verifikasi KTP cetho\n2. Danane nganggo Rekber Resmi Bantu Warga, dadi duwitmu aman 100%\n3. Hasil kerjo marem, nembe danane dicairke\n\nGuyub rukun gotong royong nanging tetep aman lan profesional.",
        "cta": "Mangga dipun cobi sakmenika teng bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#SinauBijak",
          "#GuyubRukun",
          "#WongJowo",
          "#GolekTukang",
          "#GotongRoyong",
          "#RekberAman"
        ]
      },
      "promo": {
        "hook": "Omah resik, kran lancar, ati ayem tentrem! 🏡✨",
        "story": "Golek pitulungan neng cerak omah saiki ra sah bingung. Bantu Warga ngubungake panjenengan kaliyan warga lan pekerja lokal sing siap mbantu.\n\nAman, cetho tarif-e, lan berkah kanggo sedulur sak komplek.",
        "cta": "Gabung sakniki teng bantuwarga.online — Sak komplek tulung-tinulung!",
        "tags": [
          "#BantuWarga",
          "#LokerJogja",
          "#LokerSolo",
          "#InfoSemarang",
          "#GaweanSampingan",
          "#CariFreelancer"
        ]
      }
    }
  },
  "servis_ac": {
    "id": {
      "drama": {
        "hook": "Tengah malam AC kamar ngadat cuma keluar angin panas... Siapa yang pernah ngalamin panik begini? 🥵💨",
        "story": "Anak rewel gak bisa tidur, mau manggil teknisi luar komplek takut kemaleman & takut diketok harga selangit. Untung inget tetangga kemarin rekomendasiin teknisi lokal lewat Bantu Warga!\n\nPakde Yanto teknisi dari blok sebelah langsung konfirmasi, sorenya evaporator dicuci bersih & freon diisi pas. Harganya jelas tertera di aplikasi, gak ada tipu-tipu!",
        "cta": "Yuk simpan kontak & cari teknisi jujur di sekitarmu lewat Bantu Warga sekarang!",
        "tags": [
          "#BantuWarga",
          "#ServisAC",
          "#TeknisiAC",
          "#SolusiKeluarga",
          "#PanasEkstrim",
          "#TipsAC",
          "#TetanggaPeduli",
          "#fyp"
        ]
      },
      "edukasi": {
        "hook": "Bongkar trik oknum servis AC nakal & cara aman merawat AC rumah! ❄️🔧",
        "story": "Pernah gak niatnya cuma cuci AC 60 ribu, eh pas dicek teknisi dibilang pipa bocor, kapasitor rusak, totalnya jadi 500 ribu?\n\nHindari jebakan oknum dengan order teknisi AC lewat Bantu Warga:\n- Scope kerjaan disepakati di awal secara tertulis di sistem\n- Pembayaran via rekber Bantu Warga, dana tidak bisa ditarik sepihak\n- Teknisi warga lokal yang reputasinya dinilai langsung oleh tetangga",
        "cta": "Cari teknisi AC terverifikasi di sekitarmu di bantuwarga.online!",
        "tags": [
          "#EdukasiAC",
          "#BantuWarga",
          "#KonsumenCerdas",
          "#ServisRumah",
          "#TeknisiTerpercaya",
          "#TipsRumah"
        ]
      },
      "promo": {
        "hook": "AC adem semriwing, tidur nyenyak sekeluarga! ❄️✨",
        "story": "Cuaca lagi terik-teriknya? Jangan biarkan AC kotor bikin boros listrik dan nafas gak sehat. Panggil teknisi AC terdekat dari komplekmu lewat aplikasi Bantu Warga.\n\nCepat datang, harga ramah tetangga, pembayaran aman bergaransi!",
        "cta": "Booking jadwal cuci AC sekarang di bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#CuciACMurah",
          "#ACDingin",
          "#KomplekAdem",
          "#PromoServis"
        ]
      }
    },
    "su": {
      "drama": {
        "hook": "Tengah wengi hawa hareudang pisan, AC kaluar angin panas... 😫💨",
        "story": "Budak teu tiasa kulem, riweuh pisan. Untung di aplikasi Bantu Warga aya Pak Yanto teknisi ti blok sabeulah. Enjingna langsung diparios, disemprot dugi beresih. Hargana pas, teu aya biaya siluman!",
        "cta": "Bumi hareudang? Pilari teknisi di bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#WargaSunda",
          "#ServisACBandung",
          "#InfoCimahi",
          "#TataliWargi"
        ]
      },
      "edukasi": {
        "hook": "Ulah dugi katipu ku servis AC abal-abal! Kieu carana supados aman... ❄️🛡️",
        "story": "Di Bantu Warga, teknisi AC parantos diverifikasi KTP. Artos kasimpen dina sistem rekber dugi ka AC leres-leres tiis nyelesep. Teu kedah salempang deui!",
        "cta": "Parios teknisi caket bumi di bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#TipsSunda",
          "#KonsumenBijak",
          "#WargaJabar"
        ]
      },
      "promo": {
        "hook": "AC tiis nyelesep, sare tibra sapalih kulawarga! ❄️💚",
        "story": "Peryogi cuci AC atanapi tambah freon? Sadayana sayaga di Bantu Warga kalayan biaya anu merenah tur amanah.",
        "cta": "Pesen ayeuna di bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#SundaGeulis",
          "#JabarJuara",
          "#ServisAC"
        ]
      }
    },
    "jv": {
      "drama": {
        "hook": "Hawa sumuk, AC mung metu angin anget... Bocah nangis ra iso turu! 🥵💨",
        "story": "Waduh susah tenan nek AC trobel pas mangsa panas. Bejane liwat Bantu Warga nemu Pakde Yanto tangga dewe sing pinter servis AC. Diresiki resik, freon dipasne. Danane aman di-rekber!",
        "cta": "AC panjenengan sumuk? Mangga cek teng bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#WargaJateng",
          "#ServisACJogja",
          "#ServisACSolo",
          "#GuyubRukun"
        ]
      },
      "edukasi": {
        "hook": "Aja gampang kena apus oknum servis AC nakal! Iki carane... ❄️💡",
        "story": "Lewat Bantu Warga, biaya servis cetho wela-wela. Dana aman teng rekening bersama aplikasi, mboten bakal cair sakderenge AC adem trep karo kesepakatan.",
        "cta": "Golek teknisi jujur? Cek bantuwarga.online sakmenika!",
        "tags": [
          "#BantuWarga",
          "#TipsWongJowo",
          "#GuyubRukun",
          "#TeknisiJujur"
        ]
      },
      "promo": {
        "hook": "AC anyep semriwing, turu angler tentrem sak kulawarga! ❄️👍",
        "story": "Golek teknisi AC cedhak omah saiki gampang banget. Klik Bantu Warga, teknisi teko, garansi marem lan amanah.",
        "cta": "Pesen sakniki teng bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#InfoWarga",
          "#ServisACMurah",
          "#GotongRoyong"
        ]
      }
    }
  },
  "genteng": {
    "id": {
      "drama": {
        "hook": "Hujan badai datang, plafon ruang tamu langsung melendung bocor deras! Siapa yang gak jantungan? 😱⛈️",
        "story": "Air udah netes kayak air terjun, baskom 4 biji gak muat nampung. Cari tukang di luar pada gak mau karena udah sore dan ujan. Untung langsung posting tugas darurat di Bantu Warga!\n\nDalam 10 menit, Kang Dadan tukang atap dari gang sebelah langsung dateng pake jas hujan bawa tangga & lem aspal. Plafon terselamatkan dari ambrol! Makasih banyak Bantu Warga!",
        "cta": "Musim hujan jangan nunggu plafon roboh, siapin aplikasi Bantu Warga di HP kamu!",
        "tags": [
          "#BantuWarga",
          "#GentengBocor",
          "#DaruratRumah",
          "#MusimHujan",
          "#TukangAtap",
          "#BencanaLokal",
          "#TetanggaHebat",
          "#fyp"
        ]
      },
      "edukasi": {
        "hook": "Tanda-tanda genteng & talang rumah harus segera dicek sebelum musim hujan lebat! 🌧️🏠",
        "story": "Jangan tunggu rembesan cokelat muncul di plafon!\n1. Cek sambungan nok genteng yang retak\n2. Bersihkan sampah daun kering di talang air\n3. Pastikan ada tukang langganan terpercaya\n\nPakai Bantu Warga untuk sewa jasa perawatan atap dengan perlindungan rekber dan tukang sekitar komplek.",
        "cta": "Amankan atap rumahmu hari ini di bantuwarga.online!",
        "tags": [
          "#TipsRumahBocor",
          "#BantuWarga",
          "#RawatRumah",
          "#SolusiHujan",
          "#TukangBocor"
        ]
      },
      "promo": {
        "hook": "Bebas cemas genteng bocor pas hujan lebat! ☔🏡",
        "story": "Temukan tukang perbaikan atap, pembersih talang, dan pasang plafon darurat tercepat di sekitarmu hanya di Bantu Warga. Pembayaran aman, tukang tetangga sendiri.",
        "cta": "Posting kebutuhan perbaikan rumahmu di bantuwarga.online sekarang!",
        "tags": [
          "#BantuWarga",
          "#AtapRumah",
          "#TukangCepat",
          "#AmanahLokal",
          "#PromoHujan"
        ]
      }
    },
    "su": {
      "drama": {
        "hook": "Hujan ngagebret, hateup bocor mani ngocor kawas curug... Reuwas pisan! 🌧️😱",
        "story": "Baskom parantos pinuh, sieun plafon rubuh. Alhamdullilah posting di Bantu Warga, Kang Dadan langsung dongkap mawa taraje. Hateup dibenerkeun gancang pisan. Hatur nuhun pisan tatangga bageur!",
        "cta": "Ulah ngantosan hateup rubuh, hayu buka bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#UrangSunda",
          "#HujanBadai",
          "#TataliWargi",
          "#TukangSunda"
        ]
      },
      "edukasi": {
        "hook": "Sateuacan hujan ageung, perhatoskeun hateup sareng talang cai! 🌧️🏡",
        "story": "Talang anu pinuh ku dangdaunan garing tiasa ngabalukarkeun cai mudal kana plafon. Di Bantu Warga, seueur wargi anu tiasa ngabantos meresihan hateup kalayan aman.",
        "cta": "Pilari tukang di bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#TipsSunda",
          "#WargaJabar",
          "#GotongRoyong"
        ]
      },
      "promo": {
        "hook": "Tengtrem di bumi sanajan di luar hujan ngagebret! ☔🏠",
        "story": "Peryogi ngalereskeun kenteng bocor? Sadayana beres ku Bantu Warga. Silih tulungan sareng tatangga sakomplek.",
        "cta": "Buka bantuwarga.online ayeuna keneh!",
        "tags": [
          "#BantuWarga",
          "#BarayaSunda",
          "#InfoBandung",
          "#LemburAman"
        ]
      }
    },
    "jv": {
      "drama": {
        "hook": "Udan deres banget, genteng bocor banter nganti baskom ra amot... 🌧️😰",
        "story": "Keringet adem gemrobyos wedi plafon ambrol. Bejane langsung posting tugas teng Bantu Warga, Kang Dadan gercep mlayu mriku mbekta ondo. Sedelo wae gentenge wes rampung ditoto!",
        "cta": "Mangsa udan ojo nganti bingung, siapke bantuwarga.online neng HP-mu!",
        "tags": [
          "#BantuWarga",
          "#WargaJateng",
          "#MangsaUdan",
          "#TukangBocor",
          "#GuyubRukun"
        ]
      },
      "edukasi": {
        "hook": "Cek talang lan gentengmu sakderenge udan deres teko! 🌧️🏠",
        "story": "Aja ngenteni banyu netes neng kasur. Liwat Bantu Warga, golek tukang resik-resik talang lan dandani genteng gampang tur amanah.",
        "cta": "Cek tukang cedhak omahmu teng bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#TipsOmah",
          "#WongJowo",
          "#GuyubRukun"
        ]
      },
      "promo": {
        "hook": "Ayem tentrem senajan udan deres neng jaba! ☔🏡",
        "story": "Genteng trocoh? Talang mampet? Kabeh beres karo Bantu Warga. Bayar aman liwat rekber aplikasi.",
        "cta": "Mangga dipun cobi teng bantuwarga.online sakmenika!",
        "tags": [
          "#BantuWarga",
          "#LokerWarga",
          "#JasaRumah",
          "#InfoJateng"
        ]
      }
    }
  },
  "art_harian": {
    "id": {
      "drama": {
        "hook": "Capek banget badan remuk habis hajatan, cucian piring numpuk setinggi gunung... 😫🍽️",
        "story": "Mau bebersih sendiri rasanya udah gak sanggup. Untung tetangga ngingetin ada aplikasi Bantu Warga! Tinggal posting tugas, Mbak Sri langsung datang jam 9 pagi bantu nyapu, ngepel, dan cuci piring sampai kinclong.\n\nYang paling tenang: pembayarannya aman lewat rekber Bantu Warga, uang baru cair pas kita puas dengan hasil kerjanya!",
        "cta": "Butuh bantuan ART harian terpercaya di sekitarmu? Cek langsung di bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#ARTHarian",
          "#CleaningService",
          "#AsstRumahTangga",
          "#SolusiIbu",
          "#BeberesRumah",
          "#fyp"
        ]
      },
      "edukasi": {
        "hook": "Tips aman panggil ART harian tanpa was-was barang hilang! 🧹🛡️",
        "story": "Zaman sekarang cari ART harian harus yang jelas identitasnya. Di Bantu Warga:\n1. Seluruh pekerja terverifikasi KTP resmi\n2. Uang aman di rekening bersama sistem\n3. Ulasan dan rating dari tetangga nyata di komplek\n\nRumah bersih kinclong, hati tenang dan bebas drama.",
        "cta": "Temukan tenaga ART harian terverifikasi di sekitarmu lewat bantuwarga.online!",
        "tags": [
          "#EdukasiWarga",
          "#BantuWarga",
          "#TipsRumahTangga",
          "#AsstRumahTangga",
          "#AmanahKomplek",
          "#SolusiKeluarga"
        ]
      },
      "promo": {
        "hook": "Rumah bersih rapih tanpa mandi keringat! ✨🏡",
        "story": "Lagi butuh bantuan beres-beres rumah, setrika baju, atau cuci piring dadakan? Panggil ART harian terdekat lewat Bantu Warga. Cepat, dekat, tarif ramah tetangga!",
        "cta": "Booking ART harianmu sekarang di bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#PromoJasa",
          "#ARTRumah",
          "#KomplekHarmonis",
          "#JasaHarian"
        ]
      }
    },
    "su": {
      "drama": {
        "hook": "Awak mani asa parotong rengse salametan, piring pabalatak... Untung aya aplikasi ieu! 😅🍽️",
        "story": "Untung Ceu Sri sayaga ngabantos beberes rorompok. Kantun posting di Bantu Warga, enjingna langsung beresik sadayana. Sareng artosna aman dina rekber sistem!",
        "cta": "Peryogi ART harian di lembur? Buka bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#UrangSunda",
          "#BeberesRorompok",
          "#AsstRumahTangga",
          "#TataliWargi"
        ]
      },
      "edukasi": {
        "hook": "Ulah salempang pami meryogikeun ART harian, kieu carana supados amanah! 🛡️🧹",
        "story": "Di Bantu Warga, sakumna warga parantos diverifikasi KTP resmi. Artos kasimpen aman dina sistem rekening bersama.",
        "cta": "Parios jasa beberes di bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#TipsSunda",
          "#WargaJabar",
          "#AmanahLokal"
        ]
      },
      "promo": {
        "hook": "Rorompok resik herang, manah tengtrem! 💚🏡",
        "story": "Peryogi bantos beberes atanapi nyeuseuh? Sadayana sayaga di Bantu Warga kalayan biaya anu merenah.",
        "cta": "Daftar ayeuna di bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#JasaSunda",
          "#ARTHarian",
          "#BarayaSunda"
        ]
      }
    },
    "jv": {
      "drama": {
        "hook": "Boyok wes ra kuat, piring numpuk sak gunung bubar slametan... Bejane nemu aplikasi iki! 😫🍽️",
        "story": "Mbak Sri tanggap sanget mbantu resik-resik. Omah dadi resik gumebyar. Dhuwite aman ditahan neng sistem Rekber Bantu Warga nganti tugase rampung!",
        "cta": "Golek rewang harian cedhak omah? Cek bantuwarga.online sakniki!",
        "tags": [
          "#BantuWarga",
          "#WongJowo",
          "#RewangHarian",
          "#ResikResik",
          "#GuyubRukun"
        ]
      },
      "edukasi": {
        "hook": "Golek rewang harian sing aman lan jujur? Iki carane... 🧹👌",
        "story": "Lewat Bantu Warga, kabeh pekerja wis verifikasi KTP resmi. Pembayaran nganggo rekening bersama aplikasi, aman 100%.",
        "cta": "Cobi sakmenika teng bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#SinauBijak",
          "#RewangOmah",
          "#RekberAman"
        ]
      },
      "promo": {
        "hook": "Omah resik gumebyar tanpa sayah! ✨🏡",
        "story": "Butuh tulung sapu pel lan cuci piring? Pesen rewang harian cedhak omah liwat Bantu Warga saiki.",
        "cta": "Pesen sakniki teng bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#LokerWarga",
          "#JasaOmah",
          "#InfoJateng"
        ]
      }
    }
  },
  "kurir_pindahan": {
    "id": {
      "drama": {
        "hook": "Mau pindahan kosan tapi gak punya pick-up & gak kuat angkat kulkas sendirian? 📦🚚",
        "story": "Biasanya panggil pick-up luar suka ditembak harga mahal. Untung di Bantu Warga ada Pak Hendra tetangga komplek yang punya pick-up lengkap sama keneknya. Tarif cuma 100rb, barang aman sampai lantai 2!\n\nTransaksi aman lewat sistem Bantu Warga tanpa drama uang kembalian.",
        "cta": "Lagi butuh kurir pindahan atau angkut perabotan? Buka bantuwarga.online sekarang!",
        "tags": [
          "#BantuWarga",
          "#JasaPindahan",
          "#PickUpMurah",
          "#KurirLokal",
          "#AnakKos",
          "#fyp"
        ]
      },
      "edukasi": {
        "hook": "Cara aman angkut perabotan rumah tangga tanpa takut lecet & harga siluman! 🚚💡",
        "story": "Gunakan jasa kurir dan pick-up tetangga lewat Bantu Warga:\n- Tarif disepakati transparan di awal\n- Pembayaran ditahan di rekber sampai barang sampai dengan selamat\n- Pekerja warga lokal terverifikasi KTP resmi",
        "cta": "Cek armada pick-up terdekat di bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#TipsPindahan",
          "#KurirTerpercaya",
          "#PickUpWarga"
        ]
      },
      "promo": {
        "hook": "Pindahan lancar, barang aman, tarif tetangga bersahabat! 📦✨",
        "story": "Cari jasa antar jemput barang, pindahan kos, atau belanja kebutuhan berat? Semua ada di Bantu Warga!",
        "cta": "Pesan jasa pindahan sekarang di bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#PromoPindahan",
          "#JasaAngkut",
          "#LogistikKomplek"
        ]
      }
    },
    "su": {
      "drama": {
        "hook": "Bade ngalih rorompok tapi bingung teu aya mobil bak? 🚚📦",
        "story": "Untung di Bantu Warga aya Pak Hendra nu gaduh pick-up. Barang diangkut dugi ka lebet kamar, aman sadayana. Transaksi via rekber aplikasi merenah pisan!",
        "cta": "Peryogi mobil pick up? Buka bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#UrangSunda",
          "#NgalihBumi",
          "#KurirSunda"
        ]
      },
      "edukasi": {
        "hook": "Angkut barang amanah sareng tatangga di Bantu Warga! 📦🛡️",
        "story": "Sadayana jelas tarifna, teu aya biaya siluman. Artosna kasimpen dina rekening bersama dugi barang dugi ka tempat.",
        "cta": "Pilari di bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#TataliWargi",
          "#WargaJabar"
        ]
      },
      "promo": {
        "hook": "Ngalih rorompok janten langkung gampil! 🚚💚",
        "story": "Antar jemput barang caket sareng aman. Bayar aman liwat aplikasi.",
        "cta": "Daftar di bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#InfoBandung",
          "#JasaAngkut"
        ]
      }
    },
    "jv": {
      "drama": {
        "hook": "Arep boyongan omah bingung ra duwe pick-up? 📦🚚",
        "story": "Bejane pas bukak Bantu Warga ketemu Pak Hendra tangga dewe sing duwe pick-up. Barang diangkat aman nganti kamar nduwur. Bayare penak liwat rekber!",
        "cta": "Golek pick up cedhak omah? Cek bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#WongJowo",
          "#PindahanOmah",
          "#PickUpLokal"
        ]
      },
      "edukasi": {
        "hook": "Pindahan penak tarif cetho tanpa was-was! 🚚👌",
        "story": "Liwat Bantu Warga, tarif disepakati ing ngarep. Dhuwit aman neng rekening bersama aplikasi.",
        "cta": "Cobi sakniki teng bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#GuyubRukun",
          "#KurirAmanah"
        ]
      },
      "promo": {
        "hook": "Pindahan omah lancar lan ayem! 📦✨",
        "story": "Golek jasa angkut barang cedhak omah saiki gampang banget neng Bantu Warga.",
        "cta": "Pesen sakniki teng bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#LokerJateng",
          "#JasaPickUp"
        ]
      }
    }
  },
  "mekanik_motor": {
    "id": {
      "drama": {
        "hook": "Motor tiba-tiba mogok di tengah gang, bengkel tutup semua... Siapa yang gak panik? 🛵💨",
        "story": "Mau dorong jauh badan udah lemes. Untung langsung cari montir panggilan di Bantu Warga! Bang Ujang 10 menit langsung dateng bawa toolkit. Ternyata cuma cop busi kendor, biayanya cuma 35rb dan bayar lewat rekber aplikasi. Penyelamat banget!",
        "cta": "Simpan link Bantu Warga buat antisipasi darurat kendaraanmu di bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#MontirPanggilan",
          "#MotorMogok",
          "#MekanikMotor",
          "#DaruratMotor",
          "#fyp"
        ]
      },
      "edukasi": {
        "hook": "Waspada motor mogok mendadak! Ini cara panggil montir jujur tanpa diketok harga... 🔧💡",
        "story": "Sering denger cerita motor mogok sepele tapi dibilang harus ganti seher ratusan ribu? Di Bantu Warga, mekanik adalah warga sekitar yang terverifikasi KTP, tarif jelas dan disepakati lewat rekber.",
        "cta": "Cari montir terdekat di sekitarmu di bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#TipsMotor",
          "#MekanikJujur",
          "#EdukasiOtomotif"
        ]
      },
      "promo": {
        "hook": "Montir gercep datang ke rumah, motor sehat kembali! 🛵⚡",
        "story": "Servis rutin, ganti oli, atau mogok darurat? Panggil mekanik motor terdekat lewat Bantu Warga sekarang!",
        "cta": "Panggil montir panggilanmu di bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#ServisMotor",
          "#MekanikLokal",
          "#PromoBengkel"
        ]
      }
    },
    "su": {
      "drama": {
        "hook": "Motor ngadadak pareum di payun mesjid, riweuh pisan! 🛵😱",
        "story": "Untung aya Kang Ujang montir tatangga dina aplikasi Bantu Warga. 10 menit dugi, motor langsung hirup deui. Artosna aman dina sistem rekber!",
        "cta": "Motor mogok? Buka bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#UrangSunda",
          "#MontirSunda",
          "#TataliWargi"
        ]
      },
      "edukasi": {
        "hook": "Pilari montir motor anu jujur tur caket bumi! 🔧🛡️",
        "story": "Di Bantu Warga, montir parantos diverifikasi KTP, teu aya biaya siluman.",
        "cta": "Parios di bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#TipsSunda",
          "#WargaJabar"
        ]
      },
      "promo": {
        "hook": "Motor jagjag deui, dinten lancar deui! 🛵💚",
        "story": "Peryogi mekanik motor harian? Buka aplikasi Bantu Warga ayeuna keneh.",
        "cta": "Daftar di bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#JasaSunda",
          "#MontirKomplek"
        ]
      }
    },
    "jv": {
      "drama": {
        "hook": "Motorku mati dumadakan neng dalan, tulung tenan! 🛵😰",
        "story": "Bejane langsung mbukak Bantu Warga nemu Mas Ujang montir cedhak. Rawuh mbekta kunci, motor langsung urip malih. Dhuwite aman di-rekber!",
        "cta": "Golek montir panggilan? Cek bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#WongJowo",
          "#MontirMotor",
          "#MotorMogok"
        ]
      },
      "edukasi": {
        "hook": "Aja gampang kena getok bengkel nakal pas motor mogok! 🔧👌",
        "story": "Liwat Bantu Warga, montire tangga dewe sing wis cetho KTP-ne. Tarif transparan mboten wonten tipu-tipu.",
        "cta": "Cobi sakniki teng bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#TipsMontir",
          "#GuyubRukun"
        ]
      },
      "promo": {
        "hook": "Motor lancar, ati tenang, rejeki gumebyar! 🛵✨",
        "story": "Butuh servis motor utawa montir darurat? Klik Bantu Warga sakiki.",
        "cta": "Pesen sakniki teng bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#LokerJateng",
          "#ServisMotor"
        ]
      }
    }
  },
  "it_wifi_cctv": {
    "id": {
      "drama": {
        "hook": "Sinyal Wifi kamar lemot bikin kerjaan WFH terganggu & mau pasang CCTV biar rumah aman? 💻📶",
        "story": "Mau panggil teknisi luar suka lama nunggu jadwalnya. Untung tetangga rekomendasiin Mas Andre lewat Bantu Warga! Sorenya langsung datang setting repeater & pasang CCTV yang langsung bisa dipantau dari HP. Aman dan bergaransi!",
        "cta": "Butuh bantuan teknisi IT, wifi, atau CCTV? Cek bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#TeknisiIT",
          "#PasangWifi",
          "#PasangCCTV",
          "#SolusiRumah",
          "#WFH",
          "#fyp"
        ]
      },
      "edukasi": {
        "hook": "Tips memperkuat sinyal Wifi rumah & pasang CCTV hemat budget! 📶📹",
        "story": "Gak perlu beli router mahal ratusan ribu kalau cuma butuh setting jangkauan. Pakai jasa teknisi IT warga terdekat di Bantu Warga: bergaransi, terverifikasi KTP, pembayaran aman via rekber.",
        "cta": "Cek teknisi IT terdekat di bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#EdukasiIT",
          "#WifiRumah",
          "#TipsTeknologi"
        ]
      },
      "promo": {
        "hook": "Internet ngebut, rumah terpantau aman 24 jam! 💻✨",
        "story": "Perlu setting wifi, perbaikan laptop, atau pasang CCTV? Temukan ahlinya di sekitarmu hanya di Bantu Warga.",
        "cta": "Pesan teknisi IT sekarang di bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#JasaIT",
          "#TeknisiKomputer",
          "#PromoDigital"
        ]
      }
    },
    "su": {
      "drama": {
        "hook": "Sinyal Wifi hareudang lemotna, CCTV teu nyambung kana HP... 📶😩",
        "story": "Untung aya Kang Andre teknisi IT dina Bantu Warga. Sonten langsung diparios, ayeuna internet tos ngebut pisan. Artosna aman dina rekber!",
        "cta": "Peryogi teknisi IT? Buka bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#UrangSunda",
          "#TeknisiIT",
          "#WifiBandung"
        ]
      },
      "edukasi": {
        "hook": "Setting Wifi sareng CCTV amanah ku teknisi tatangga! 📹🛡️",
        "story": "Di Bantu Warga, teknisi diverifikasi KTP resmi sareng artos aman dina rekening bersama.",
        "cta": "Parios di bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#WargaJabar",
          "#TataliWargi"
        ]
      },
      "promo": {
        "hook": "Internet lancar herang ngagilap, kulawarga bungah! 📶💚",
        "story": "Sadayana urusan IT beres ku tatangga sakomplek di Bantu Warga.",
        "cta": "Daftar di bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#BarayaSunda",
          "#JasaIT"
        ]
      }
    },
    "jv": {
      "drama": {
        "hook": "Wifi omah lemot sanget, bocah sekolah daring ra iso sinau... 📶😰",
        "story": "Bejane langsung pesen Mas Andre teknisi IT liwat Bantu Warga. Sore teko, wifi langsung banter tur CCTV live neng HP. Danane aman di-rekber!",
        "cta": "Wifi panjenengan lelet? Cek bantuwarga.online sakiki!",
        "tags": [
          "#BantuWarga",
          "#WongJowo",
          "#TeknisiWifi",
          "#PasangCCTV"
        ]
      },
      "edukasi": {
        "hook": "Pasang wifi lan CCTV penak tarif seduluran! 📹👌",
        "story": "Lewat Bantu Warga, teknisi cetho lan profesional. Transaksi nganggo rekber resmi.",
        "cta": "Cobi sakmenika teng bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#GuyubRukun",
          "#TipsIT"
        ]
      },
      "promo": {
        "hook": "Internet banter semriwing, omah aman tentrem! 📶✨",
        "story": "Golek teknisi komputer, wifi, lan CCTV cedhak omah saiki gampang neng Bantu Warga.",
        "cta": "Pesen sakniki teng bantuwarga.online!",
        "tags": [
          "#BantuWarga",
          "#LokerJateng",
          "#TeknisiIT"
        ]
      }
    }
  }
};

// Expose to window (Browser) and exports (Node.js)
if (typeof window !== 'undefined') {
  window.BANTU_WARGA_CATEGORIES = BANTU_WARGA_CATEGORIES;
  window.PRESET_AVATARS = PRESET_AVATARS;
  window.SCENARIOS = SCENARIOS;
  window.CAPTION_DATABASE = CAPTION_DATABASE;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { BANTU_WARGA_CATEGORIES, PRESET_AVATARS, SCENARIOS, CAPTION_DATABASE };
}
