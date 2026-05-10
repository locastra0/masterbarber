/**
 * ZettBOT - Barber Panggilan Modern
 * Backend Script (Code.gs)
 */

function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('The Gentleman - Barber Panggilan Premium')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Mengambil seluruh data konten untuk Web App
 */
function getAppLayoutData() {
  try {
    const appData = {
      whatsappNumber: "628123456789", 
      services: [
        { id: 1, name: "Premium Haircut", price: "Best Seller", desc: "Potongan detail dengan konsultasi style dan pembersihan sisa rambut.", icon: "scissors" },
        { id: 2, name: "Beard Trim & Grooming", price: "Signature", desc: "Perapihan jenggot presisi dengan hot towel treatment.", icon: "user" },
        { id: 3, name: "Gentleman's Spa", price: "VIP Treatment", desc: "Cukur rambut, pijat kepala, dan masker wajah premium.", icon: "sparkles" },
        { id: 4, name: "Father & Son Package", price: "Special Offer", desc: "Waktu berkualitas bersama sang jagoan dalam satu sesi.", icon: "users" },
        { id: 5, name: "The Royal Grooming", price: "All-In VIP", desc: "Layanan terlengkap: Cukur, Beard, Spa, dan Hair Vitamin.", icon: "crown" },
        { id: 6, name: "Corporate Group", price: "Office Visit", desc: "Layanan cukur untuk tim kantor Anda (min. 5 orang).", icon: "briefcase" }
      ],
      testimonials: [
        { name: "Andra Ramadhan", role: "CEO Tech Startup", text: "Gak perlu macet-macetan lagi. Barbernya pro, alatnya steril banget. Hasilnya mantap dan sangat rapi! Sangat direkomendasikan untuk profesional sibuk." },
        { name: "Budi Santoso", role: "Manager", text: "Sangat membantu buat saya yang sibuk. Cukur di kantor pas jam istirahat, praktis dan hasilnya kelas dunia. Pelayanan bintang lima!" },
        { name: "Dimas Anggara", role: "Creative Director", text: "Pelayanannya benar-benar VIP. Barber mengerti struktur wajah saya dan memberikan saran style yang pas. Benar-benar personal." },
        { name: "Reza Rahadian", role: "Professional", text: "Experience yang luar biasa. Cukur di rumah tapi feel-nya seperti di barbershop mewah luar negeri. Higienitasnya jempolan." },
        { name: "Kevin Sanjaya", role: "Atlet", text: "Sangat higienis. Handuk hangatnya benar-benar bikin rileks setelah jadwal latihan yang padat. Tidak perlu keluar rumah." },
        { name: "Adrian Utama", role: "Klien Setia", text: "Sudah langganan 1 tahun. Konsistensi potongannya luar biasa, barbernya sangat ramah dan selalu tepat waktu sesuai jadwal." }
      ]
    };
    return appData;
  } catch (e) {
    return { error: e.toString() };
  }
}
