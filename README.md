# HearMe

## Problem
İşitme engelli bireyler, işaret dili bilmeyen kişilerle günlük hayatta (hastane, banka, alışveriş vb.) iletişim kurarken büyük zorluklar yaşamaktadır. Geleneksel yöntemlerle kağıda veya telefona uzun uzun yazı yazarak anlaşmaya çalışmak hem vakit kaybettirmekte hem de doğal sohbetin akıcılığını ve anlık tepkileri yok etmektedir.

## Çözüm
HearMe, bu iletişim bariyerini anında ortadan kaldıran akıllı bir köprü uygulamasıdır. Tarayıcı üzerinden karşı tarafın konuşmasını eşzamanlı olarak dinler ve yazıya döker. Asıl sihir burada başlar: **Yapay Zeka (Gemini AI)**, dökülen bu metnin bağlamını saniyeler içinde analiz ederek işitme engelli kullanıcının o an verebileceği 3 kısa, mantıklı ve duruma uygun cevabı butonlar halinde sunar. Kullanıcı uzun uzun yazmak yerine sadece bir butona dokunur ve uygulama bu cevabı karşı tarafa sesli olarak okur. Böylece iletişim hızlı, akıcı ve çift yönlü hale gelir.

## Canlı Demo
- **Yayın Linki:** https://mind-bridge-relay.lovable.app
- **Demo Video:** https://loom.com/share/[video-id]

*(Not: Demo video linkini eklerken `[video-id]` kısmını kendi kaydettiğin videonun linkiyle değiştirmeyi unutma!)*

## Kullanılan Teknolojiler
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Yapay Zeka:** Google Gemini API (`gemini-2.5-flash-lite` modeli)
- **Ses İşleme:** Web Speech API (SpeechRecognition ile sesi yazıya, SpeechSynthesis ile yazıyı sese çevirme)
- **Yayın/Deploy:** Lovable platformu

## Nasıl Çalıştırılır?
Projeyi kendi bilgisayarınızda (yerel ortamda) çalıştırmak için şu adımları izleyebilirsiniz:

1. Proje dosyalarını indirin veya bilgisayarınıza klonlayın.
2. [Google AI Studio](https://aistudio.google.com/app/apikey) adresinden ücretsiz bir Gemini API Anahtarı alın.
3. Proje klasöründeki `main.js` dosyasını açın ve en üstteki `GEMINI_API_KEY` değişkeninin içine kendi anahtarınızı yapıştırın.
4. Güvenlik politikaları (mikrofon erişimi) gereği projeyi doğrudan çift tıklayarak değil, bir yerel sunucu ile başlatın (Örn: VS Code "Live Server" eklentisi veya terminalden `npm run dev` komutu ile).
5. Tarayıcınızda açılan sekmede mikrofon kullanımına izin verin ve "Dinlemeyi Başlat" butonuna tıklayarak uygulamayı deneyimleyin!
