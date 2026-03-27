# Disleksi Dostu Okuma Asistanı (DyslexiaBuddy)

## Problem 
Üniversite öğrencilerinin her gün okumak zorunda kaldığı uzun ve karmaşık dijital akademik metinler, disleksi veya odaklanma problemi (DEHB) yaşayan öğrenciler için görsel ve bilişsel olarak oldukça yorucudur. Mevcut okuma araçları genellikle sadece fontu değiştirir ancak metnin "anlamsal ağırlığını" ve karmaşıklığını çözmekte yetersiz kalır.

## Çözüm 
Bu web uygulaması, zorlu metinleri öğrencinin bilişsel ihtiyacına göre anında özetleyen, basitleştiren ve okumayı interaktif hale getiren bir yapay zeka asistanıdır. Uygulamaya entegre edilen Google Gemini API (Yapay Zeka); kullanıcının yapıştırdığı uzun metinleri analiz eder, kısa ve anlaşılır bir özete dönüştürür. Ayrıca metnin ana fikrini pekiştirmek için kullanıcıya anında okuma-anlama soruları (quiz) üretir. Tüm bu süreç, göz yormayan pastel arka planlar ve disleksi dostu bir arayüzde gerçekleşir.

## Canlı Demo 
Yayın Linki: https://mind-bridge-relay.lovable.app/ 
Demo Video: *[Video hazırlık aşamasında - Yakında eklenecek]*

## Kullanılan Teknolojiler 
- HTML5, CSS3, JavaScript (Frontend ve Arayüz Tasarımı)
- Google Gemini API (Yapay Zeka Özetleme ve Soru Üretimi)
- Lovable (Canlı Ortam Yayınlama / Deployment)

## Nasıl Çalıştırılır? 
1. Bu projeyi bilgisayarınıza klonlayın veya `.zip` olarak indirin.
2. Proje klasörünün içindeki `index.html` dosyasını kullandığınız herhangi bir modern web tarayıcısında (Chrome, Safari, Edge vb.) çift tıklayarak açın.
3. Uygulamanın çalışabilmesi için geçerli bir Google Gemini API anahtarına ihtiyacınız vardır. (Eğer geliştirici modundaysanız, `main.js` veya ilgili script dosyasındaki `API_KEY` değişkenine kendi anahtarınızı eklemeyi unutmayın).
4. Ekranda açılan büyük metin kutusuna okumakta zorlandığınız akademik bir makaleyi yapıştırın ve butona basarak asistanı test edin!
