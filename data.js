// ============================================================
//  აქ ცვლი საიტის შიგთავსს — HTML-ში ჩარევა არ გჭირდება.
// ============================================================
//
//  გაკვეთილის დამატება:
//   platform: "youtube" ან "tiktok"
//   id: ვიდეოს ID ბმულიდან
//     YouTube:  https://www.youtube.com/watch?v=dQw4w9WgXcQ  ->  "dQw4w9WgXcQ"
//               https://youtu.be/dQw4w9WgXcQ                 ->  "dQw4w9WgXcQ"
//     TikTok:   https://www.tiktok.com/@user/video/7312345678901234567 -> "7312345678901234567"
//   level: "დამწყები" | "საშუალო" | "გამოცდილი"
//
//  ქვემოთ ID-ების ნაცვლად ცარიელი ველებია — ჩასვი შენი ვიდეოების ID.
//  ცარიელი id-ის მქონე ბარათი საიტზე "ვიდეო მალე დაემატება"-ს აჩვენებს.

window.PANDURI_DATA = {
  //  YouTube playlist-ები: id = ბმულში list=-ის შემდეგ მდგომი ტექსტი (& ნიშნამდე)
  playlists: [
    { title: "ფანდური", owner: "Zura Karaulashvili", count: 12, id: "PLJJdMPoYZ0Z4" }
  ],

  lessons: [
    { title: "პირველი აკორდები ფანდურზე", song: "საბაზისო გაკვეთილი", region: "", level: "დამწყები", platform: "youtube", id: "" },
    { title: "ცინარე — აკომპანემენტი", song: "ცინარე", region: "კახეთი", level: "დამწყები", platform: "youtube", id: "" },
    { title: "დელი-და", song: "დელი-და", region: "", level: "საშუალო", platform: "tiktok", id: "" },
    { title: "თუშური — რიტმი და ჩამოკვრა", song: "თუშური", region: "თუშეთი", level: "საშუალო", platform: "youtube", id: "" },
    { title: "ლილე", song: "ლილე", region: "სვანეთი", level: "გამოცდილი", platform: "tiktok", id: "" },
    { title: "ჩამოკვრის ტექნიკა 60 წამში", song: "ტექნიკა", region: "", level: "დამწყები", platform: "tiktok", id: "" }
  ],

  //  ოსტატი: priceFrom / priceTo ლარებში. phone სურვილისამებრ.
  //  ქვემოთ მოცემულია მაგალითები — ჩაანაცვლე ნამდვილი ოსტატებით.
  masters: [
    { name: "მაგალითი: გიორგი (ოსტატი)", city: "თბილისი", phone: "+995 5XX XX XX XX", priceFrom: 350, priceTo: 900, note: "ხელნაკეთი, ერთი ნაჭერი ხისგან; შეკეთებაც" },
    { name: "მაგალითი: ნიკო (ოსტატი)", city: "თელავი", phone: "", priceFrom: 250, priceTo: 600, note: "ტრადიციული ხის ლადები" },
    { name: "მაგალითი: დავითი (ოსტატი)", city: "ქუთაისი", phone: "", priceFrom: 500, priceTo: 1500, note: "ქრომატული ფანდური, საკონცერტო" }
  ]
};
