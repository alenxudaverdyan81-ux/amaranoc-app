import React, { useState } from "react";

export default function Services() {

  const [activeTab, setActiveTab] = useState("սպասարկում");

  
  const servicesData = {
    սպասարկում: [
      { id: 1, title: "Մատուցող", price: "20,000", desc: "Յուրաքանչյուր մատուցող կարող է սպասարկել 15-20 անձի։ Մատուցման արժեքը կախված է միջոցառման անցկացման վայրից...", img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80" },
      { id: 2, title: "Բարմեն", price: "25,000", desc: "Մեր պրոֆեսիոնալ բարմենները տիրապետում են տարբեր տեսակի խմիչքների պատրաստման հմտություններին...", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80" },
      { id: 3, title: "Խոհարար", price: "35,000", desc: "Արժեքը կախված է միջոցառման անձանց քանակից և ուտեստների մենյուից։ Ունենալով հարուստ փորձ...", img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80" }
    ],
    շոու: [
      { id: 4, title: "Դի-Ջեյ", price: "50,000", desc: "Դիջեյները Մեր կազմակերպած միջոցառումների աստղերն են՝ ովքեր ստեղծում են յուրահատուկ մթնոլորտ...", img: "https://images.unsplash.com/photo-1516873240891-4bf014598ab4?w=600&q=80" },
      { id: 5, title: "Երգիչ", price: "150,000", desc: "Amaranoc.am-ի երգիչները իրենց զարմանալի ձայնով և տաղանդով կստեղծեն յուրահատուկ մթնոլորտ...", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80" },
      { id: 6, title: "Կրակներով շոու", price: "50,000", desc: "Կրակներով շոուն կստեղծի վառ և հիասքանչ ժամանց, որոնք կտպավորվեն մշտապես Ձեր հիշողության մեջ...", img: "https://images.unsplash.com/photo-1513829092301-02a39e8743f9?w=600&q=80" }
    ],
    միջոցառումներ: [
      { id: 7, title: "Նշանադրության կազմակերպում", price: "500,000", desc: "Նշանադրության արարողությունը առանձնահատուկ պահ է զույգի կյանքում։ Մեր ընկերությունը կազմակերպում է...", img: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&q=80" },
      { id: 8, title: "Ծննդյան առիթների կազմակերպում", price: "150,000", desc: "«Amaranoc.am»-ը Ձեր վստահելի գործընկերն է ծննդյան տոների կազմակերպման գործում...", img: "https://images.unsplash.com/photo-1464349172961-6082435251a8?w=600&q=80" },
      { id: 9, title: "Հարսանյաց սենյակի ձևավորում", price: "80,000", desc: "Հարսանյաց սենյակի ձևավորման գործում Ձեզ կօգնի Մեր դիզայներների և ոճաբանների թիմը...", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80" }
    ],
    տեխնիկա: [
      { id: 10, title: "Ծանր ծուխ", price: "30,000", desc: "Լավագույն ծանր ծուխը, որը Ձեր միջոցառումը կդարձնի էլ ավելի գեղեցիկ և հիշարժան...", img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80" },
      { id: 11, title: "Հրավառության ծառայություն", price: "30,000", desc: "Հրավառության ծառայությունը առաջարկում է փայլուն և անպայման հիշարժան հրավառություն...", img: "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=600&q=80" }
    ],
    գույք: [
      { id: 12, title: "Սպասք", price: "100", desc: "Ձեր միջոցառումները դարձնելու համար ավելի հարմարավետ և ոճային, առաջարկում ենք օրավարձով սպասք...", img: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=600&q=80" },
      { id: 13, title: "Սեղան և աթոռներ", price: "5,000", desc: "Մեր օրավարձով կահույքի ծառայությունը հնարավորություն է տալիս վարձակալել բարձր որակի սեղաններ...", img: "https://images.unsplash.com/photo-1517502884422-41eaaced0168?w=600&q=80" }
    ],
    նկարահանում: [
      { id: 14, title: "Ֆոտո նկարահանում", price: "20,000", desc: "Մենք ուրախ ենք առաջարկել պրոֆեսիոնալ ֆոտո նկարահանման ծառայություններ։ Մեր նպատակն է...", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80" },
      { id: 15, title: "Վիդեո նկարահանում", price: "35,000", desc: "Ձեր տեսանյութերը կստանան բարձր որակ և պրոֆեսիոնալ շունչ մեր վիդեո նկարահանման միջոցով...", img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80" }
    ],
    փոխադրում: [
      { id: 16, title: "Ուղևորափոխադրում", price: "20,000", desc: "Մենք տրամադրում ենք բարձրակարգ փոխադրամիջոցներ՝ ապահովելով Ձեր ճանապարհորդության հարմարավետությունը...", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80" }
    ]
  };


  const tabs = [
    { id: "սպասարկում", label: "Սպասարկում", icon: "🍽️" },
    { id: "շոու", label: "Շոու", icon: "🪄" },
    { id: "միջոցառումներ", label: "Միջոցառումներ", icon: "🎉" },
    { id: "տեխնիկա", label: "Տեխնիկա", icon: "🚀" },
    { id: "գույք", label: "Օրավարձով գույք", icon: "🪑" },
    { id: "նկարահանում", label: "Նկարահանում", icon: "🎥" },
    { id: "փոխադրում", label: "Ուղևորափոխադրում", icon: "🚐" }
  ];

  return (
    <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "20px 24px", fontFamily: "system-ui" }}>
      
    
      <div style={{ display: "flex", gap: "30px", justifyContent: "center", borderBottom: "1px solid #e5e7eb", paddingBottom: "15px", marginBottom: "40px", overflowX: "auto" }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "none",
              border: "none",
              cursor: "pointer",
              paddingBottom: "8px",
              borderBottom: activeTab === tab.id ? "3px solid #ea580c" : "3px solid transparent",
              color: activeTab === tab.id ? "#ea580c" : "#4b5563",
              fontWeight: activeTab === tab.id ? "700" : "500",
              transition: "all 0.2s ease"
            }}
          >
            <span style={{ fontSize: "20px", marginBottom: "6px" }}>{tab.icon}</span>
            <span style={{ fontSize: "13px", whiteSpace: "nowrap" }}>{tab.label}</span>
          </button>
        ))}
      </div>

  
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: "30px 24px" }}>
        {servicesData[activeTab]?.map(item => (
          <div key={item.id} style={{ display: "flex", flexDirection: "column", background: "white" }}>
            <div style={{ height: "240px", overflow: "hidden", borderRadius: "24px", marginBottom: "12px" }}>
              <img src={item.img} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <h3 style={{ fontSize: "17px", fontWeight: "700", margin: "0 0 6px 0", color: "#111827" }}>{item.title}</h3>
            <p style={{ color: "#6b7280", fontSize: "13px", lineHeight: "1.5", margin: "0 0 16px 0", flexGrow: 1 }}>{item.desc}</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto" }}>
              <span style={{ fontSize: "16px", fontWeight: "800", color: "#111827" }}>{item.price} Դ</span>
              <button style={{ border: "1px solid #fdba74", color: "#ea580c", background: "none", padding: "6px 24px", borderRadius: "99px", fontSize: "13px", fontWeight: "700", cursor: "pointer", transition: "all 0.2s" }}>Ամրագրել</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}