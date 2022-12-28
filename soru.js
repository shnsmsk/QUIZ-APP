function Soru(soruMetni,cevapSecenekleri,dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap===this.dogruCevap;
}


let sorular = [
    new Soru("1-Hangisi javascript paket yonetim uygulamasidir?",{a : "Node.js",b : "Typescript",c : "Npm",d : "Nuget" },"c"),
    new Soru("2-Hangisi frontend kapsaminda degerlendirilmez?",{a : "Css",b : "HTML",c : "Javascript",d : "sql" },"d"),
    new Soru("3-Hangisi backend kapsaminda degerlendirilir?",{a : "Node.js",b : "Typescript",c : "angular",d : "react" },"a"),
    new Soru("4-Hangisi javascript programlama dilini kullanmaz?",{a : "React",b : "angular",c : "vue.js" ,d : "asp.net"},"d")
];