import "../../style/Faq.css";

export default function Faq() {
  return (
    <section className="her mt-5">
      <div id="faqs" class="cards">
        <div class="card-header text-center">FAQ</div>
        <div class="card-body">
          <h1 className="garis-bawah text-center mt-5 mb-5 fw-bold">
            Setelah Mendaftar
          </h1>
          {/* <h1 className="garis-bawah text-center"></h1> */}
          {/* <h3 className="garis-bawah"></h3> */}
          <h3>
            1. Minsa, kapan kami akan mendapatkan LoA dan invoice kami ?
            Dikirimnya kemana sih?
          </h3>
          <p class="card-text">
            Panitia akan mengirimkan LoA dan Invoice selambatnya 14 hari kerja
            setelah kamu mendaftar. LoA dan Invoice akan kami kirimkan ke email
            ketua tim, jadi pastikan kamu mencantumkan alamat email yang aktif
            dan benar ya!
          </p>
          <h3>
            2. Minsa, aku sudah daftar satu minggu yang lalu, tapi kok aku belum
            terima LoA dan Invoicenya ya ?
          </h3>
          <p class="card-text">
            Coba deh cek folder spam di email ketua tim kamu, mungkin email dari
            tim IYSA masuk ke folder spam.
          </p>
          <h3>3. Upload berkas lomba di mana sih Minsa ?</h3>
          <p class="card-text">
            Upload berkas yang diminta oleh panitia ke link google drive yang
            sudah kami cantumkan di LoA kamu, pastikan kamu membaca LoA dengan
            teliti ya!
          </p>
          <h3>
            4. Aku mau bayar biaya registrasi nih tapi kok aku tidak bisa
            menemukan Invoicenya ya ? dan pembayarannya di transfer kemana sih ?
          </h3>
          <p class="card-text">
            Hayo kamu sudah baca LoA sampai tuntas belum? Karena Invoice kami
            kirimkan bersama LoA tim kamu, pastikan kamu sudah membaca email
            dari kami hingga tuntas yaa! Untuk pembayaran, kamu bisa transfer ke
            rekening yang tertera di dalam invoice ya. Pastikan kamu membayar
            sesuai dengan nominal yang tertera di invoice, oke!
          </p>
          <h3>
            5. Minsa, aku sudah bayar registrasinya nih, upload bukti
            pembayarannya kemana ya ?
          </h3>
          <p class="card-text">
            Jika sudah melakukan pembayaran, kamu bisa upload buktinya ke link
            yang tercantum di invoice, dan pastikan kamu mengisi dan mengupload
            bukti transfer dengan benar agar panitia dapat mendatanya dengan
            benar juga.
          </p>
          <h3>6. Kalau kuitansinya kapan di kirimkan ke kami ?</h3>
          <p class="card-text">
            Kuitansi pembayaran akan kami kirimkan maksimal 7 hari kerja ke
            email ketua tim, setelah kamu upload bukti pembayaran ya!
          </p>
          <h3>
            7. Minsa, satu minggu lagi penjurian nih kok aku belum terima jadwal
            presentasi tim aku ya?
          </h3>
          <p class="card-text">
            Jadwal presentasi peserta online akan kami kirimkan selambatnya 2
            hari sebelum penjurian berlangsung ke whatsapp grup dan juga email
            ketua tim. Pastikan kamu rajin cek informasi yang kami berikan di
            whatsapp grup dan juga email ya!
          </p>
          {/* <a href="#" class="btn btn-primary">
          Go somewhere
        </a> */}
          <h1 className="garis-bawah text-center mt-5 mb-5 fw-bold">
            Selama event berlangsung
          </h1>
          <h3>1. Kapan jadwal presentasi akan diberikan oleh panitia?</h3>
          <p class="card-text">
            Jadwal presentasi akan kami berikan selambatnya 2 hari sebelum
            penjurian berlangsung atau bisa juga lebih cepat, dan kami kirimkan
            melalui WA grup dan juga e-mail ketua tim.
          </p>
          <h3>
            2. Presentasi online menggunakan aplikasi apa? Zoom,Google meet atau
            yg lainnya?
          </h3>
          <p class="card-text">
            Untuk penjurian online kami selalu memakai aplikasi Zoom ya
            teman-teman, dan pastikan aplikasi Zoom kamu sudah yang terbaru yaa.
          </p>
          <h3>3. Kapan link zoom akan di berikan oleh panitia?</h3>
          <p class="card-text">
            Link Zoom akan kami berikan dihari penjurian, dan akan kami kirim
            berkala di grup sesuai jam presentasi tim kalian
          </p>
          <h3>
            4. Berapa banyak akun zoom yang bisa join dan penamaannya seperti
            apa?
          </h3>
          <p class="card-text">
            Teman-teman bisa masuk ke Zoom maksimal dengan 5 akun untuk peserta,
            dan semua akun Zoom harus mengikuti format nama yang sudah kami
            berikan yaitu "Nomor ruangan_Nama Ketua Tim_Nama Institusi”.
          </p>
          <h3>5. Berapa durasi peserta melakukan presentasi?</h3>
          <p class="card-text">
            Teman-teman akan diberikan waktu 15 menit untuk 1 sesi presentasi
            yang akan dibagi 2 yaitu 7 menit awal untuk presentasi dan 8 menit
            akhir untuk sesi tanya jawab dengan juri
          </p>
          <h3>6. Berapa juri yang akan datang ke booth peserta offline kak?</h3>
          <p class="card-text">
            Sama seperti penjurian online, akan ada 2 juri yang menjurikan
            setiap tim. Dan setelah selesai dijurikan kamu akan diberikan stiker
            sebagai tanda booth kamu sudah dijurikan, pastikan kamu mendapatkan
            2 stiker ya
          </p>
          <h3>
            7. Apakah setelah dijurikan kami bisa langsung merapikan booth kami?
          </h3>
          <p class="card-text">
            Kamu bisa mulai merapikan booth ketika semua tim sudah selesai
            dijurikan ya, jadi kalau kamu sudah selesai dijurikan kamu bisa
            berkunjung dulu ke booth peserta lain
          </p>
          {/* <a href="#" class="btn btn-primary">
          Go somewhere
        </a> */}
          <h1 className="garis-bawah text-center mt-5 mb-5 fw-bold">
            Setelah Acara
          </h1>
          <h3>1. Kapan pemngumuman pemenang?</h3>
          <p class="card-text">
            Pengumuman pemenang dilaksanakan pada hari terakhir disetiap event,
            kamu bisa cek tanggalnya di jadwal yang tertera di Guide Book.
          </p>
          <h3>2. Di mana kami bisa melihat hasil pemenang </h3>
          <p class="card-text">
            Kamu bisa cek hasil pemenang di official website dari event yang
            kamu ikuti
          </p>
          <h3>3. Kapan E-certificate akan dikirmkan</h3>
          <p class="card-text">
            IYSA TIDAK mengirimkan E-Certificate untuk peserta Nasional atau
            Peserta Indonesia yang mengikuti event secara online. Peserta
            Nasional Online hanya akan mendapatkan sertifikat dalam bentuk
            TERCETAK/Hard yang nantinya akan dikirimkan bersama dengan medali
            melalui ekspedisi JNE
          </p>
          <h3>4. Kapan pengiriman sertifikat peserta online?</h3>
          <p class="card-text">
            Sertifikat akan dikirimkan selambatnya satu bulan setelah pengumuman
            pemenang. Kamu bisa cek secara berkala resi pengiriman yang kami
            kirimkan di Whatsapp grup apakah sertifikat kamu sudah dikirim atau
            belum.
          </p>
          <h3>
            5. Dimana kami bisa mendapatkan sertifikat supervisor/pembimbing?
          </h3>
          <p class="card-text">
            Kamu bisa melihat dan mengunduh sertifikat supervisor/pembimbing di
            official website dari event yang kamu ikuti
          </p>
          <h3>6. Bagaimana cara melakukan penggandaan medali?</h3>
          <p class="card-text">
            Untuk peserta offline kamu bisa langsung melakukan penggandaan
            medali di tempat setelah pengumuman pemenang berlangsung. Dan untuk
            peserta online kamu bisa melakukan penggandaan medali melalui link
            yang kami kirimkan di Whatsapp grup, kami akan mengirimkan informasi
            penggandaan di Whatsapp grup selambatnya 2 hari setelah pengumuman
            pemenang.
          </p>
        </div>
      </div>
    </section>
  );
};

