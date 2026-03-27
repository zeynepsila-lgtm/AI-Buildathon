# PRD (Ürün Gereksinim Belgesi): HearMe Uygulaması

## 1. Projenin Amacı
HearMe, işitme engelli bireyler ile işaret dili bilmeyen kişilerin kamusal ve günlük alanlarda anlık, akıcı ve çift yönlü iletişim kurmasını sağlayan bir web uygulamasıdır.

## 2. Kullanıcı Akışı ve Deneyimi
Kullanıcı uygulamayı açtığında karşısına çok sade, ikiye bölünmüş bir ana ekran çıkar:
* **Üst Bölüm (Söylenenler):** Karşı taraf konuştuğunda yapay zeka sesi algılar ve anında büyük, okunabilir metinler halinde bu alana yazar.
* **Alt Bölüm (Cevap Yaz):** İşitme engelli kullanıcı bu alandaki metin kutusuna cevabını yazar. "Seslendir" butonuna bastığında, uygulama bu metni karşı tarafın duyabileceği doğal bir sese dönüştürür.
* **Hızlı Yanıtlar:** Ekranın en altında kullanıcının yazma süresini kısaltmak için "Merhaba, işitme engelliyim. Lütfen konuşun, telefonum sizi yazıya çevirecek" gibi yapay zeka destekli hazır cevap butonları bulunur.

## 3. Yapay Zekanın (AI) Rolü
* **Speech-to-Text (Sesten Metne):** Karşı tarafın konuşmalarını anında yazıya dökmek.
* **Text-to-Speech (Metinden Sese):** İşitme engelli kullanıcının yazdığı cevapları akıcı bir şekilde seslendirmek.
* Yapay zeka bu işlemleri arka planda hızlıca yaparak kesintisiz bir sohbet deneyimi sunar.

## 4. Teknik Hedefler ve Ekranlar
* **Tek Ekranlı Yapı:** Uygulama tek bir sayfadan (Single Page Application) oluşacak, sayfalar arası geçişle kullanıcı yorulmayacak.
* **Deaf-first UX (İşitme Engelli Dostu Tasarım):** Yazı tipleri büyük, zıt (yüksek kontrastlı) renkler kullanılacak ve butonlar kolay basılabilir boyutta olacak.