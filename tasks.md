# HearMe — Geliştirme Görev Listesi

Bu liste `prd.md` ürün gereksinim belgesine göre uygulamayı adım adım inşa etmek için sıralanmıştır. Görevleri üstten alta doğru tamamlamak mantıklı bir akış sağlar.

---

## Faz 0 — Proje temeli

1. **Teknoloji seçimi ve iskelet**
   - SPA için framework kararı (ör. Vite + React, veya vanilla HTML/JS) ve repo klasör yapısı.
   - Geliştirme ortamı: `package.json`, bağımlılıklar, yerel çalıştırma komutları.

2. **Tek sayfa yapısı**
   - Tek HTML giriş noktası veya router’sız tek view; sayfa geçişi yok (PRD: tek ekran).

---

## Faz 1 — Ana arayüz (Deaf-first UX)

3. **İkiye bölünmüş ana ekran**
   - **Üst bölüm:** “Söylenenler” başlığı ve konuşma metninin gösterileceği alan (büyük, okunabilir tipografi).
   - **Alt bölüm:** “Cevap Yaz” başlığı, çok satırlı metin kutusu, “Seslendir” butonu.

4. **Erişilebilir ve yüksek kontrast tasarım**
   - Büyük font boyutları, yüksek kontrast renk paleti (zıt arka plan / metin).
   - “Seslendir” ve diğer ana butonlar için yeterli dokunma / tıklama alanı (minimum hedef boyutu).

5. **Hızlı yanıtlar alanı (yer tutucu)**
   - Ekranın en altında yatay veya kaydırılabilir bir şerit: hazır cevap butonları için alan (metinler sonra bağlanacak).

---

## Faz 2 — Konuşmayı metne (Speech-to-Text)

6. **Mikrofon izni ve ses kaynağı**
   - Tarayıcıda `getUserMedia` veya seçilen STT API’sinin gerektirdiği akış; kullanıcıya net izin / hata mesajları.

7. **STT entegrasyonu**
   - Seçilen servis (Web Speech API, veya bulut STT) ile gerçek zamanlı veya düşük gecikmeli transkripsiyon.
   - Gelen metni üst bölüme “anında” veya kısa gecikmeyle yazdırma; kaydırma / son satırın görünür kalması.

8. **STT durumları**
   - Dinliyor / durduruldu / hata durumları için basit görsel veya metin geri bildirimi (işitme engelli kullanıcı için yazılı netlik).

---

## Faz 3 — Metni sese (Text-to-Speech)

9. **TTS tetikleme**
   - “Seslendir” ile alt bölümdeki metnin okunması; boş metin için uyarı veya sessiz geçiş (ürün kararı).

10. **TTS motoru**
    - Tarayıcı `speechSynthesis` veya API tabanlı TTS; Türkçe / dil seçimi gerekiyorsa yapılandırma.
    - Sesin kesintisiz ve anlaşılır olması için hız / ton ayarları (isteğe bağlı, PRD: “doğal ses”).

---

## Faz 4 — Hızlı yanıtlar ve yapay zeka

11. **Varsayılan hazır cevaplar**
    - PRD örneği: “Merhaba, işitme engelliyim. Lütfen konuşun, telefonum sizi yazıya çevirecek” ve birkaç genel şablon butonu.

12. **Hazır cevap davranışı**
    - Butona basınca metnin “Cevap Yaz” alanına yazılması veya doğrudan TTS ile seslendirilmesi (tercih ürün kararı; tutarlı tek davranış seçilmeli).

13. **Yapay zeka ile dinamik hazır cevaplar (isteğe bağlı geliştirme)**
    - Kullanıcı bağlamı veya seçilen ortam (ör. hastane, banka) ile API üzerinden kısa öneri metinleri üretme; güvenlik ve gecikme sınırları.

---

## Faz 5 — Birleştirme ve kalite

14. **Çift yönlü akış testi**
    - Karşı taraf konuşurken üstte metin güncellenirken alt bölümde cevap yazılıp seslendirilebildiğinin uçtan uca denenmesi.

15. **Performans ve gecikme**
    - STT/TTS zincirinde gereksiz beklemelerin azaltılması; mümkünse basit yükleme / bağlantı göstergeleri.

16. **Erişilebilirlik ekleri**
    - Odak sırası, klavye ile kullanım, ekran okuyucu için anlamlı etiketler (`aria-*`) — Deaf-first ile uyumlu şekilde.

17. **Dağıtım**
    - Statik hosting veya seçilen platform; HTTPS (mikrofon için gerekli).

---

## Özet bağımlılık sırası

```
Faz 0 → Faz 1 (layout + UX) → Faz 2 (STT) + Faz 3 (TTS) (paralel mümkün)
    → Faz 4 (hızlı yanıtlar, sonra AI) → Faz 5 (test + deploy)
```

---

## Notlar

- PRD’de “yapay zeka” hem STT/TTS kalitesi hem hazır cevaplar için geçer; ilk çalışan sürümde tarayıcı / ücretsiz API’lerle başlanıp sonra AI özellikleri sıkılaştırılabilir.
- Başarı ölçütü (`idea.md`): işitme engelli kullanıcının ~1 dakika içinde kopukluk yaşamadan iletişimi tamamlayabilmesi — Faz 5’te bu senaryoyla doğrulanmalı.
