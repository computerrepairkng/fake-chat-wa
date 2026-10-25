/**
 * WA CHAT STUDIO - SMART SCENARIO GENERATOR (AI ENGINE)
 * Pola Transaksi Asli Bantu Warga:
 * 1. Checkout Pembayaran di Bantu Warga -> Chat WA Otomatis masuk ke Pekerja bahwa pembayaran sudah diterima di Rekber.
 * 2. Pekerja merespons & meminta Share Lokasi.
 * 3. Warga menshare lokasi (WhatsApp Location Card) + patokan & sentuhan unik khas warga (agar tidak monoton).
 * 4. Pekerja konfirmasi "Baik bu, lokasi diterima. Saya langsung OTW!".
 * 5. Pengerjaan di lokasi dengan keramahan tetangga & edukasi Rekber Escrow Bantu Warga.
 * 6. Pekerjaan tuntas, warga puas, klik konfirmasi Selesai di aplikasi, dana cair instan ke dompet pekerja.
 */

(function () {
  'use strict';

  // Bank Data Unik Patokan Rumah & Obrolan Khas Tetangga
  const UNIQUE_ELEMENTS = {
    id: {
      locations: [
        { title: "Komplek Permata Blok B No. 14", clue: "Rumah cat putih pagar hitam, ada pohon mangga lebat di teras." },
        { title: "Gang Mawar 2 No. 8 (Dekat Pos RT)", clue: "Depan balai RW samping warung Bu Joko. Pagar gak dikunci langsung masuk aja." },
        { title: "Komplek Melati Indah Blok C No. 7", clue: "Rumah tingkat cat abu-abu minimalis. Di tiang pagar ada bel wireless warna putih." },
        { title: "Jl. Dahlia Raya No. 25 (Samping Masjid)", clue: "Pagar hijau terbuka. Kucing anggora tidur di teras jangan kaget ya pak, jinak kok." },
        { title: "Gang Kancil Blok D No. 11", clue: "Rumah ujung jalan dekat pos kamling. Kalau anjing tetangga sebelah gonggong diabaikan aja pak, udah dirantai aman." }
      ],
      hospitalities: [
        "Kopi hitam panas sama pisang goreng tanduk udah saya sediain di meja teras ya pak.",
        "Teh manis anget sama biskuit kaleng udah standby di teras pak, silakan dinikmati.",
        "Kopi tubruk manis udah ready di meja pak, santai aja kerjanya jangan buru-buru.",
        "Ada es sirup dingin di meja teras pak, cuaca lagi terik banget biar seger."
      ],
      checkoutNotes: [
        "Pembayaran sudah saya selesaikan via Rekening Bersama Bantu Warga.",
        "Dana sudah resmi masuk ke rekber sistem Bantu Warga, amanah dua belah pihak.",
        "Sudah saya checkout lewat Bantu Warga ya pak, dana ditahan aman di sistem sampai beres."
      ]
    },
    su: {
      locations: [
        { title: "Gang Kancra No. 12 (Caket Pos Kamling)", clue: "Rorompok pager héjo payuneun tangkal pelem gedong. Langsung lebet wae Kang teu dikonci." },
        { title: "Komplek Pasir Layung Blok B No. 4", clue: "Caket tajug Al-Barokah rorompok cét bodas. Pager muka sakedik." },
        { title: "Gang Hj. Umayah No. 19", clue: "Pengkeureun balé désa. Upami aya ucing orén di teras tong diusir nya Kang, ucing bageur hehe." },
        { title: "Jl. Sukagalih Blok C No. 9", clue: "Rorompok ujung caket lapang badminton. Pager dibuka langsung ka buruan wae." }
      ],
      hospitalities: [
        "Kopi hideung sareng bala-bala haneut parantos sayaga dina méja teras Kang, mangga dihartos.",
        "Cai entéh haneut sareng kulub sampeu parantos nyampak di teras Kang.",
        "Kopi pait sareng goréng pisang parantos sayaga dina méja, ngarah jagjag damelna."
      ],
      checkoutNotes: [
        "Artosna parantos ku abdi dicekout dina rekening bersama aplikasi Bantu Warga.",
        "Dana parantos kasimpen aman dina sistem rekber Bantu Warga.",
        "Atos ku abdi dibayar liwat Bantu Warga supados sami-sami merenah tur amanah."
      ]
    },
    jv: {
      locations: [
        { title: "Komplek Griya Asri Blok D No. 12", clue: "Griya pager ijo ngajeng wit pelem ageng. Lawang pager mboten dikancing langsung mlebet mawon." },
        { title: "Gang Melati 3 Kulon Balai RT", clue: "Caket pos ronda omah cat krem. Nek wonten asu tangga sebelah ngoyak mboten sah wedi mas sampun ditaleni." },
        { title: "Jl. Cendrawasih No. 15 (Kidul Masjid)", clue: "Griya pojokan pager ireng. Wonten bel neng cagak pager." },
        { title: "Gang Sawo Blok B No. 6", clue: "Omah tingkat loro cat abu-abu. Montor utowo pick-up saget parkir pas neng ngarep garasi." }
      ],
      hospitalities: [
        "Kopi tubruk kaliyan pisang goreng anget sampun cumepak teng méja teras mas, monggo dipun unjuk.",
        "Teh anget kaliyan cemilan sampun wonten teras mas, santai mawon mboten sah kesusu.",
        "Kopi ireng legi sampun cumepak mas supados seger tenagane."
      ],
      checkoutNotes: [
        "Danane sampun kulo checkout liwat rekening bersama aplikasi Bantu Warga nggih.",
        "Pembayarane sampun mlebet sistem rekber Bantu Warga, aman 100%.",
        "Sampun kulo aturaken liwat Bantu Warga supados sami-sami marem lan cetha."
      ]
    }
  };

  // Master Data Template Spesifik 13 Kategori Laravel
  const CATEGORY_DETAILS = {
    "Jasa Teknis": {
      "Tukang AC": {
        role: "Pakde Yanto (Teknisi AC)",
        avatar: "kang_asep",
        rate: "Rp 75.000",
        taskName: "Servis Cuci AC & Tambah Freon",
        workDetailId: "cuci filter evaporator AC kamar tidur yang cuma keluar angin panas",
        workDetailSu: "ngumbah filter AC kamar nu ngan kaluar angin hareudang",
        workDetailJv: "ngumbah saringan AC kamar sing mung metu angin sumuk"
      },
      "Tukang kunci": {
        role: "Pak Sugeng (Ahli Kunci)",
        avatar: "kang_asep",
        rate: "Rp 50.000",
        taskName: "Cabut Patahan Kunci & Duplikat",
        workDetailId: "cabut anak kunci patah di dalam silinder pintu kamar utama",
        workDetailSu: "nyabut konci nu potong dina silinder panto kamar",
        workDetailJv: "njupuk anak kunci sing tugel neng njero bolongan kunci lawang"
      },
      "Tukang Las": {
        role: "Kang Didi (Tukang Las)",
        avatar: "kang_asep",
        rate: "Rp 90.000",
        taskName: "Perbaikan Las Pagar Anjlok",
        workDetailId: "las engsel pagar besi dorong yang anjlok lepas dari tembok",
        workDetailSu: "ngelas engsel pager beusi nu anjlok lesot ti témbok",
        workDetailJv: "ngelas engsel pager wesi sing anjlok ucul soko témbok"
      },
      "Elektronika": {
        role: "Mas Bayu (Servis Elektronik)",
        avatar: "ayah_bapak",
        rate: "Rp 65.000",
        taskName: "Servis Mesin Cuci Mampet",
        workDetailId: "periksa mesin cuci 1 tabung yang airnya gak mau buang dan gak muter",
        workDetailSu: "marios mesin nyeuseuh nu teu kersa muter",
        workDetailJv: "ndandosi mesin cuci sing mboten purun muter"
      }
    },
    "Building": {
      "Baja ringan": {
        role: "Kang Dadan (Tukang Atap)",
        avatar: "kang_asep",
        rate: "Rp 85.000",
        taskName: "Perbaikan Genteng & Atap Bocor",
        workDetailId: "benerin genteng morosot dan tambal bocor talang air ruang tamu",
        workDetailSu: "ngalereskeun kenteng nu morosot sareng talang bocor",
        workDetailJv: "ndandosi genteng trocoh kaliyan talang buntu"
      },
      "Tukang Pipa": {
        role: "Pak Slamet (Tukang Pipa)",
        avatar: "kang_asep",
        rate: "Rp 70.000",
        taskName: "Pelancaran Pipa Wastafel Buntu",
        workDetailId: "lancarkan pipa saluran wastafel cuci piring yang tersumbat lemak",
        workDetailSu: "ngalancarkeun pipa solokan wastafel nu kapendet",
        workDetailJv: "nglancaraken pipa wastafel sing mampet lemak"
      },
      "Tukang Cat": {
        role: "Kang Nanang (Tukang Cat)",
        avatar: "kang_asep",
        rate: "Rp 120.000",
        taskName: "Cat Dinding Ruang Tamu & Teras",
        workDetailId: "pengecatan rapi tembok ruang tamu dan teras depan rumah",
        workDetailSu: "ngécét témbok kamar tamu sareng buruan",
        workDetailJv: "ngecét témbok ruang tamu kaliyan teras ngajeng"
      }
    },
    "Perkebunan": {
      "Pemotong rumput": {
        role: "Kang Asep (Tukang Kebun)",
        avatar: "kang_asep",
        rate: "Rp 80.000",
        taskName: "Babat Rumput Liar & Kebun",
        workDetailId: "potong rumput ilalang tinggi di halaman samping dan bersihkan selokan",
        workDetailSu: "ngababat jukut ngajumpluk di buruan sareng meresihan solokan",
        workDetailJv: "mbabat suket dhuwur teng latar samping lan resik-resik kalenan"
      },
      "Pembasmi Hama": {
        role: "Pak RT Bambang (Pawang Hama)",
        avatar: "pak_rt",
        rate: "Rp 85.000",
        taskName: "Evakuasi Sarang Tawon Vespa",
        workDetailId: "evakuasi sarang tawon vespa di atap garasi yang membahayakan anak-anak",
        workDetailSu: "ngévakuasi sayang tawon vespa dina hateup garasi",
        workDetailJv: "nyingkiraken susuh tawon vespa teng genteng garasi"
      }
    },
    "Asst Rumah tangga": {
      "ART harian": {
        role: "Mbak Sri (ART Harian)",
        avatar: "bu_rt",
        rate: "Rp 75.000",
        taskName: "Beberes Rumah & Cuci Piring",
        workDetailId: "bantu sapu pel lantai 1-2, cuci piring kotor, dan lap kaca jendela",
        workDetailSu: "ngabantos nyapukeun, ngepel, sareng nyeuseuh piring pabalatak",
        workDetailJv: "ngrencangi nyapu ngepel jogan lan ngumbah piring numpuk"
      },
      "Cleaning service": {
        role: "Teh Neng Dina (Cleaning Service)",
        avatar: "teh_neng",
        rate: "Rp 90.000",
        taskName: "Deep Cleaning Kamar Mandi",
        workDetailId: "kerak kuning kamar mandi disikat bersih tuntas sampai mengkilap",
        workDetailSu: "meresihan kerak kamar mandi dugi ka herang ngagilap",
        workDetailJv: "ngresiki kerak kamar mandi nganti resik gumebyar"
      }
    },
    "Kurir": {
      "Jasa Pindahan": {
        role: "Pak Hendra (Pick-up Warga)",
        avatar: "ayah_bapak",
        rate: "Rp 120.000",
        taskName: "Angkut Lemari & Kulkas Pindahan",
        workDetailId: "angkut kulkas 2 pintu, kasur busa, dan lemari pakaian ke kosan baru",
        workDetailSu: "ngangkut lomari sareng kulkas ka rorompok anyar mawa mobil bak",
        workDetailJv: "ngangkut lemari kaliyan kulkas teng griya anyar mbekta pick-up"
      },
      "Belanja Harian": {
        role: "Kang Asep (Kurir Belanja)",
        avatar: "kang_asep",
        rate: "Rp 35.000",
        taskName: "Jasa Titip Belanja Pasar Subuh",
        workDetailId: "belanjakan sayur mayur, daging ayam, dan bumbu dapur di pasar tradisional",
        workDetailSu: "pangmélPastikeun sayur sareng bumbu ka pasar subuh",
        workDetailJv: "titip blonjo sayur lan bumbu teng pasar enjang"
      }
    },
    "Mekanik": {
      "Mekanik Motor": {
        role: "Bang Ujang (Montir Panggilan)",
        avatar: "kang_asep",
        rate: "Rp 40.000",
        taskName: "Servis Motor Mogok Panggilan",
        workDetailId: "periksa motor Vario mati mendadak di jalan gang gak bisa distarter",
        workDetailSu: "mariksa motor mogok ngadadak di jalan gang teu kersa hirup",
        workDetailJv: "ndandosi motor mogok neng dalan ra iso distarter"
      }
    },
    "IT": {
      "Wifi": {
        role: "Mas Andre (Teknisi IT)",
        avatar: "ayah_bapak",
        rate: "Rp 60.000",
        taskName: "Setting Wifi & Pasang Repeater",
        workDetailId: "setting repeater penguat sinyal wifi lantai 2 biar lancar WFH",
        workDetailSu: "nyetél wifi tingkat luhur supados sinyalna ngebut",
        workDetailJv: "nyetel wifi kamar ndhuwur supados sinyale banter"
      },
      "CCTV": {
        role: "Mas Andre (Teknisi CCTV)",
        avatar: "ayah_bapak",
        rate: "Rp 85.000",
        taskName: "Pasang & Setting CCTV HP",
        workDetailId: "pasang 2 kamera CCTV teras dan hubungkan live streaming ke HP",
        workDetailSu: "masang CCTV teras sareng nyambungkeun kana HP",
        workDetailJv: "masang CCTV teras lan nyambungaken live streaming teng HP"
      }
    },
    "Tenaga Kesehatan": {
      "Ahli Pijat urut": {
        role: "Kang Maman (Pijat Kebugaran)",
        avatar: "kang_asep",
        rate: "Rp 70.000",
        taskName: "Pijat Urut Capek & Pinggang Pegal",
        workDetailId: "pijat refleksi urut capek tradisional badan pegal linu sehabis lembur",
        workDetailSu: "ngurut awak pating pegel cangkeul saparantos damel lembur",
        workDetailJv: "pijat urut awak pegel linu lan boyok kaku bubar lembur"
      }
    },
    "Pendidikan": {
      "Guru ngaji": {
        role: "Teh Neng Dina (Guru Ngaji)",
        avatar: "teh_neng",
        rate: "Rp 50.000",
        taskName: "Bimbingan Ngaji Iqro Anak",
        workDetailId: "bimbingan privat mengaji Iqro dan tajwid dasar anak usia 6 tahun di rumah",
        workDetailSu: "ngawulang ngaji Iqro sareng tajwid murangkalih di rorompok",
        workDetailJv: "ngrencangi sinau ngaji Iqro lare alit teng griya"
      }
    },
    "Multimedia": {
      "Sound system": {
        role: "Pak Hendra (Audio RT)",
        avatar: "ayah_bapak",
        rate: "Rp 150.000",
        taskName: "Sewa Sound System & Mic Wireless",
        workDetailId: "sewa 2 unit speaker aktif 15 inch dan 2 mic wireless pengajian warga",
        workDetailSu: "nyéwa 2 unit sound aktif sareng mic wireless kanggo pangaosan",
        workDetailJv: "nyewa 2 unit sound system aktif kaliyan mic wireless pengaosan"
      }
    }
  };

  /**
   * Mengambil detail kategori atau membuat fallback dinamis
   */
  function getCategoryDetail(category, subCategory) {
    const catObj = CATEGORY_DETAILS[category];
    if (catObj && catObj[subCategory]) {
      return catObj[subCategory];
    }
    // Jika tidak ada subkategori spesifik, ambil salah satu dari kategori tsb
    if (catObj) {
      const keys = Object.keys(catObj);
      if (keys.length > 0) return catObj[keys[0]];
    }
    // Generic fallback
    return {
      role: `Pak Joko (Jasa ${subCategory || category})`,
      avatar: "kang_asep",
      rate: "Rp 75.000",
      taskName: `Jasa Bantuan ${subCategory || category}`,
      workDetailId: `pengerjaan ${subCategory || category} di rumah warga dengan amanah`,
      workDetailSu: `padamelan ${subCategory || category} di rorompok kalayan amanah`,
      workDetailJv: `garapan ${subCategory || category} teng griya kanthi amanah`
    };
  }

  /**
   * Main AI Scenario Generator
   */
  function generateScenario(categoryName, subCategoryName, lang = 'id') {
    const catName = categoryName || "Perkebunan";
    const subName = subCategoryName || "Pemotong rumput";
    const detail = getCategoryDetail(catName, subName);

    // Ambil elemen unik acak agar TIDAK PERNAH MONOTON
    const uniqueBank = UNIQUE_ELEMENTS[lang] || UNIQUE_ELEMENTS['id'];
    const locItem = uniqueBank.locations[Math.floor(Math.random() * uniqueBank.locations.length)];
    const hospItem = uniqueBank.hospitalities[Math.floor(Math.random() * uniqueBank.hospitalities.length)];

    const rate = detail.rate || "Rp 75.000";
    const workerName = detail.role.split(' (')[0] || "Pekerja";

    let slides = [];
    let synopsis = "";
    let title = "";

    // ==========================================
    // 1. BAHASA INDONESIA
    // ==========================================
    if (lang === 'id') {
      title = `${detail.taskName} (${workerName})`;
      synopsis = `Warga checkout pesanan ${detail.taskName} sebesar ${rate} di aplikasi Bantu Warga. Pembayaran masuk rekber, pekerja langsung meminta share lokasi. Warga mengirimkan patokan rumah unik di ${locItem.title}, pekerja konfirmasi OTW dan menyelesaikan tugas sampai dana cair.`;

      slides = [
        {
          id: 1,
          title: "Slide 1: Checkout Rekber & Share Lokasi OTW",
          messages: [
            {
              id: 1,
              sender: "me",
              text: `Halo ${workerName}, saya sudah checkout & bayar tugas ${detail.taskName} sebesar ${rate} di aplikasi Bantu Warga ya. Pembayaran sudah diterima sistem rekber. Silakan bisa mulai bekerja pak.`,
              time: "08:15",
              status: "read"
            },
            {
              id: 2,
              sender: "other",
              text: `Halo Bu! Siap, notifikasi pembayaran Bantu Warga sudah masuk ke HP saya. Mohon share lokasi atau patokan rumahnya ya bu biar saya langsung meluncur bawa peralatan.`,
              time: "08:17",
              status: "read"
            },
            {
              id: 3,
              sender: "me",
              type: "location",
              locationTitle: locItem.title,
              text: `Ini share lokasinya ya pak: ${locItem.title}. Patokannya: ${locItem.clue}`,
              time: "08:19",
              status: "read"
            },
            {
              id: 4,
              sender: "other",
              text: `Baik bu, lokasi sudah saya kunci di GPS. Alat-alat lengkap sudah saya siapin di motor. Sekarang saya langsung OTW ke rumah ibu ya!`,
              time: "08:21",
              status: "read"
            }
          ]
        },
        {
          id: 2,
          title: "Slide 2: Tiba di Lokasi & Pengerjaan Rapi",
          messages: [
            {
              id: 5,
              sender: "other",
              text: `Punten bu, saya sudah sampai di depan pagar rumah bawa peralatan lengkap.`,
              time: "08:50",
              status: "read"
            },
            {
              id: 6,
              sender: "me",
              text: `Iya pak, masuk aja pintunya gak dikunci! ${hospItem} Langsung tolong bantu beresin ${detail.workDetailId} ya pak.`,
              time: "08:52",
              status: "read"
            },
            {
              id: 7,
              sender: "other",
              text: `Siap bu, terima kasih banyak kopinya! Langsung saya kerjakan rapi sesuai standar Bantu Warga. Untung transaksinya lewat Bantu Warga ya bu, tarif transparan dan identitas pekerja sudah terverifikasi KTP, jadi ibu tenang gak was-was.`,
              time: "08:55",
              status: "read"
            },
            {
              id: 8,
              sender: "me",
              text: `Betul pak, kemarin tetangga rekomen sistem rekber Bantu Warga katanya sangat amanah untuk dua belah pihak.`,
              time: "08:58",
              status: "read"
            }
          ]
        },
        {
          id: 3,
          title: "Slide 3: Pekerjaan Tuntas & Pencairan Dana",
          messages: [
            {
              id: 9,
              sender: "other",
              text: `Alhamdulillah bu, pengerjaan ${detail.taskName} sudah beres tuntas dan rapi semuanya. Area sekitar juga sudah saya bersihkan kembali. Silakan dicek bu.`,
              time: "11:30",
              status: "read"
            },
            {
              id: 10,
              sender: "me",
              text: `Wah hasilnya rapi dan memuaskan banget ${workerName}! Langsung saya klik Selesai di aplikasi Bantu Warga ya, dananya ${rate} otomatis detik ini juga cair ke saldo dompet bapak. Makasih banyak ya!`,
              time: "11:33",
              status: "read"
            },
            {
              id: 11,
              sender: "other",
              text: `Alhamdulillah notifikasi dana cair ${rate} sudah langsung masuk ke saldo dompet Bantu Warga saya bu. Cepat dan amanah banget. Terima kasih banyak ya bu, semoga rezeki sekeluarga lancar dan berkah selalu!`,
              time: "11:36",
              status: "read"
            }
          ]
        }
      ];
    }

    // ==========================================
    // 2. BASA SUNDA
    // ==========================================
    else if (lang === 'su') {
      title = `${detail.taskName} (${workerName})`;
      synopsis = `Wargi parantos nyekout tugas ${detail.taskName} ${rate} dina aplikasi Bantu Warga. Artos lebet rekber, pagawe nyuhunkeun sharelok, wargi masihan patokan rorompok di ${locItem.title}, pagawe OTW dugi ka artosna cair.`;

      slides = [
        {
          id: 1,
          title: "Slide 1: Cekout Rekber & Sharelok OTW",
          messages: [
            {
              id: 1,
              sender: "me",
              text: `Sampurasun ${workerName}, perkawis tugas ${detail.taskName} parantos ku abdi dicekout sareng dibayar ${rate} dina aplikasi Bantu Warga nya. Artosna parantos katampi ku sistem rekber. Mangga tiasa dikawitan pak.`,
              time: "08:15",
              status: "read"
            },
            {
              id: 2,
              sender: "other",
              text: `Rampes Bu! Muhun leres, notifikasi ti Bantu Warga parantos lebet kana HP abdi. Punten tiasa nyuhunkeun sharelok atanapi patokan rorompokna supados abdi enggal meluncur nyandak alat?`,
              time: "08:17",
              status: "read"
            },
            {
              id: 3,
              sender: "me",
              type: "location",
              locationTitle: locItem.title,
              text: `Ieu lokasina nya pak: ${locItem.title}. Patokanana: ${locItem.clue}`,
              time: "08:19",
              status: "read"
            },
            {
              id: 4,
              sender: "other",
              text: `Mangga Bu, lokasi parantos kacatet dina GPS. Parabot lengkep parantos sayaga dina motor. Ayeuna keneh abdi langsung OTW ka bumi ibu!`,
              time: "08:21",
              status: "read"
            }
          ]
        },
        {
          id: 2,
          title: "Slide 2: Dugi ka Rorompok & Pagawean Beresik",
          messages: [
            {
              id: 5,
              sender: "other",
              text: `Punten bu, abdi parantos dugi di payuneun pager rorompok mawa alat lengkep.`,
              time: "08:50",
              status: "read"
            },
            {
              id: 6,
              sender: "me",
              text: `Muhun pak mangga lebet wae teu dikonci! ${hospItem} Nyuhunkeun tulung panglereskeun ${detail.workDetailSu} nya.`,
              time: "08:52",
              status: "read"
            },
            {
              id: 7,
              sender: "other",
              text: `Mangga Bu hatur nuhun pisan kopina! Langsung ku abdi dikerjakeun sae nurutkeun standar Bantu Warga. Reugreug nganggo Bantu Warga mah da sakumna padamel parantos diverifikasi KTP resmi sareng artosna kasimpen dina rekber.`,
              time: "08:55",
              status: "read"
            },
            {
              id: 8,
              sender: "me",
              text: `Muhun leres pisan, tatangga gigireun oge nyarankeun Bantu Warga wireh langkung amanah silih tulungan antar baraya.`,
              time: "08:58",
              status: "read"
            }
          ]
        },
        {
          id: 3,
          title: "Slide 3: Padamelan Rengse & Dana Cair",
          messages: [
            {
              id: 9,
              sender: "other",
              text: `Alhamdulillah Bu, padamelan ${detail.taskName} parantos rengse beresik sadayana. Buruan oge parantos ku abdi disapukeun deui. Mangga diparios heula Bu.`,
              time: "11:30",
              status: "read"
            },
            {
              id: 10,
              sender: "me",
              text: `Wah sae pisan herang ngagilap ${workerName}! Langsung ku abdi diklik Rengse dina aplikasi Bantu Warga nya, artosna ${rate} otomatis detik ieu keneh cair ka saldo dompet bapak. Nuhun pisan nya!`,
              time: "11:33",
              status: "read"
            },
            {
              id: 11,
              sender: "other",
              text: `Alhamdulillah notifikasi dana cair ${rate} parantos lebet kana dompet aplikasi Bantu Warga abdi Bu. Gancang tur amanah pisan. Hatur nuhun pisan Bu, mugia rejeki sakulawarga lancar tur barokah salamina!`,
              time: "11:36",
              status: "read"
            }
          ]
        }
      ];
    }

    // ==========================================
    // 3. BASA JAWA
    // ==========================================
    else {
      title = `${detail.taskName} (${workerName})`;
      synopsis = `Warga checkout tugas ${detail.taskName} ${rate} liwat aplikasi Bantu Warga. Dhuwit mlebet rekber, pekerja nyuwun sharelok, warga ngirim ancer-ancer griya teng ${locItem.title}, pekerja OTW nganti danane cair.`;

      slides = [
        {
          id: 1,
          title: "Slide 1: Checkout Rekber & Sharelok OTW",
          messages: [
            {
              id: 1,
              sender: "me",
              text: `Kula nuwun ${workerName}, tugas ${detail.taskName} sampun kulo checkout lan bayar ${rate} liwat aplikasi Bantu Warga nggih. Pembayarane sampun ditampi sistem rekber. Monggo saget dipun kawiti pak.`,
              time: "08:15",
              status: "read"
            },
            {
              id: 2,
              sender: "other",
              text: `Nggih Bu! Notifikasi pembayaran saking Bantu Warga sampun mlebet teng HP kulo. Nyuwun tulung share lokasi utawi ancer-ancer griyane nggih supados kulo langsung mrono mbekta piranti?`,
              time: "08:17",
              status: "read"
            },
            {
              id: 3,
              sender: "me",
              type: "location",
              locationTitle: locItem.title,
              text: `Niki share lokasine nggih pak: ${locItem.title}. Ancer-ancere: ${locItem.clue}`,
              time: "08:19",
              status: "read"
            },
            {
              id: 4,
              sender: "other",
              text: `Nggih Bu, lokasi sampun kulo kunci teng GPS. Piranti jangkep sampun siap teng motor. Sakmenika kulo langsung OTW teng griya panjenengan!`,
              time: "08:21",
              status: "read"
            }
          ]
        },
        {
          id: 2,
          title: "Slide 2: Dugang Teng Griya & Garapan Alus",
          messages: [
            {
              id: 5,
              sender: "other",
              text: `Nyuwun sewu bu, kulo sampun dugi ngajeng pager griya mbekta piranti sedanten.`,
              time: "08:50",
              status: "read"
            },
            {
              id: 6,
              sender: "me",
              text: `Nggih pak mangga mlebet mawon lawang mboten dikancing! ${hospItem} Nyuwun tulung dipun dandosi ${detail.workDetailJv} nggih.`,
              time: "08:52",
              status: "read"
            },
            {
              id: 7,
              sender: "other",
              text: `Siap bu matur suwun sanget kopine! Langsung kulo garap alus trep standar Bantu Warga. Ayem nek liwat Bantu Warga nggih bu, tarif cetho lan identitas pekerja sampun verifikasi KTP resmi, dados mboten was-was.`,
              time: "08:55",
              status: "read"
            },
            {
              id: 8,
              sender: "me",
              text: `Leres sanget pak, wingi tangga sebelah nggih remen nggunakne rekber Bantu Warga amargi amanah lan transparan.`,
              time: "08:58",
              status: "read"
            }
          ]
        },
        {
          id: 3,
          title: "Slide 3: Garapan Rampung & Pencairan Dana",
          messages: [
            {
              id: 9,
              sender: "other",
              text: `Alhamdulillah Bu, garapan ${detail.taskName} sampun rampung sedanten alus lan resik. Panggenane nggih sampun kulo saponi malih. Monggo dipun pirsani rumiyin bu.`,
              time: "11:30",
              status: "read"
            },
            {
              id: 10,
              sender: "me",
              text: `Wah garapane sae tenan ${workerName}! Langsung kulo klik Rampung teng aplikasi Bantu Warga nggih, danane ${rate} otomatis detik niki cair teng saldo dompet panjenengan. Matur suwun sanget nggih!`,
              time: "11:33",
              status: "read"
            },
            {
              id: 11,
              sender: "other",
              text: `Alhamdulillah notifikasi dana cair ${rate} sampun langsung mlebet teng dompet aplikasi Bantu Warga kulo Bu. Cepet lan amanah sanget. Matur nuwun sanget nggih Bu, mugi-mugi rejeki sakulawarga tambah lancar lan barokah sedanten!`,
              time: "11:36",
              status: "read"
            }
          ]
        }
      ];
    }

    // Hashtags & Captions Synchronized
    const tagCat = catName.replace(/[^a-zA-Z0-9]/g, '');
    const tagSub = subName.replace(/[^a-zA-Z0-9]/g, '');

    const captions = {
      drama: {
        hook: `Baru checkout di aplikasi, gak nyangka tukang langsung OTW bawa alat ke rumah! 🚀🏡`,
        story: `Gak perlu drama nunggu berjam-jam atau tawar-menawar alot di pinggir jalan!\n\nDi Bantu Warga (bantuwarga.online):\n1. Pas kita checkout tugas, chat konfirmasi otomatis masuk ke WhatsApp pekerja\n2. Cukup kirim shareloc, pekerja langsung gas OTW bawa peralatan lengkap\n3. Uangnya AMAN DITAHAN DI REKENING BERSAMA (ESCROW) sistem sampai kerjaan beres tuntas dan kita puas!\n\nKerjaan rapih, dompet aman, tetangga saling bantu penuh berkah.`,
        cta: `Lagi butuh pekerja harian terdekat di sekitarmu? Buka bantuwarga.online sekarang!`,
        tags: [`#BantuWarga`, `#${tagCat}`, `#${tagSub}`, `#RekberAman`, `#CariTukang`, `#SolusiRumah`, `#TetanggaAmanah`, `#fyp`, `#viralindonesia`]
      },
      edukasi: {
        hook: `Begini alur transaksi aman cari tukang harian lewat sistem Bantu Warga! 💡🛡️`,
        story: `Biar gak kena zonk tukang kabur bawa DP:\n1. Warga checkout tugas di platform Bantu Warga\n2. Pembayaran ditahan di Rekening Bersama resmi & pekerja menerima notifikasi pengerjaan\n3. Warga shareloc alamat, pekerja langsung OTW ke lokasi\n4. Pekerjaan selesai & dicek langsung oleh warga, dana baru dicairkan otomatis ke dompet pekerja\n\nIdentitas pekerja terverifikasi KTP resmi, transaksi 100% transparan dan terlindungi.`,
        cta: `Temukan pekerja terverifikasi di sekitarmu di bantuwarga.online!`,
        tags: [`#BantuWarga`, `#EdukasiWarga`, `#${tagCat}`, `#${tagSub}`, `#RekberEscrow`, `#TipsRumah`, `#KonsumenCerdas`]
      },
      promo: {
        hook: `Checkout tugas sekarang, pekerja terdekat langsung OTW ke rumahmu! ⚡✨`,
        story: `Butuh ${detail.taskName}? Gak perlu pusing cari kesana kemari. Di Bantu Warga, ratusan tetangga dan pekerja harian lokal siap meluncur ke rumah Anda dengan tarif ramah dan jaminan rekber terpercaya.`,
        cta: `Posting kebutuhanmu sekarang di bantuwarga.online — Cepat, Dekat, Terpercaya!`,
        tags: [`#BantuWarga`, `#PromoJasa`, `#${tagCat}`, `#${tagSub}`, `#JasaLokal`, `#KomplekHarmonis`]
      }
    };

    return {
      title: title,
      category: catName,
      subCategory: subName,
      synopsis: synopsis,
      workerRole: detail.role,
      defaultAvatar: detail.avatar || "kang_asep",
      rate: rate,
      slides: slides,
      captions: captions
    };
  }

  // Expose to window / exports
  if (typeof window !== 'undefined') {
    window.generateScenario = generateScenario;
    window.CATEGORY_DETAILS = CATEGORY_DETAILS;
    window.UNIQUE_ELEMENTS = UNIQUE_ELEMENTS;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generateScenario, CATEGORY_DETAILS, UNIQUE_ELEMENTS };
  }
})();
