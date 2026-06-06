import React, { useState } from 'react';

export default function Discounts() {
  // Պահում ենք ընտրված գինը նվեր քարտի համար
  const [selectedPrice, setSelectedPrice] = useState('50,000 ֏');

  const giftCardPrices = ['50,000 ֏', '60,000 ֏', '70,000 ֏', '80,000 ֏', '90,000 ֏', '100,000 ֏'];

  // Քո սիրուն եռանկյունաձև տնակի իրական նկարը բաններների ֆոնի համար
  const cottageBgImage = "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&auto=format&fit=crop";

  return (
    <main className="content-area container" style={{ marginTop: '40px', padding: '0 20px', minHeight: '80vh', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
      
      {/* 1. ՎԵՐՆԱԳԻՐ՝ ՀԱՏՈՒԿ ԶԵՂՉԵՐ */}
      <h2 className="section-title" style={{ 
        textAlign: 'center', 
        marginBottom: '45px', 
        fontWeight: '800', 
        fontSize: '34px', 
        letterSpacing: '0.5px',
        color: '#1a202c',
        textTransform: 'uppercase'
      }}>
        ՀԱՏՈՒԿ ԶԵՂՉԵՐ
      </h2>
      
      {/* 3 Զեղչի Բաններների Ցանց */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '25px', marginBottom: '70px' }}>
        
        {/* -15% Բաններ */}
        <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', height: '280px', boxShadow: '0 10px 25px rgba(0,0,0,0.08)' }}>
          <img src={cottageBgImage} alt="15% Զեղչ" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.55)', padding: '25px', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '50px', margin: '0', fontWeight: '900' }}>-15%</h3>
            <div>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: '700', lineHeight: '1.4' }}>Զեղչ կախված ամրագրման օրերի քանակից</h4>
              <p style={{ margin: '0', fontSize: '13px', color: '#e2e8f0', lineHeight: '1.5' }}>Ստացիր 5-15% զեղչ՝ կատարելով ամրագրում 3-ից մինչև 20 օր:</p>
            </div>
          </div>
        </div>

        {/* -10% Բաններ */}
        <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', height: '280px', boxShadow: '0 10px 25px rgba(0,0,0,0.08)' }}>
          <img src={cottageBgImage} alt="10% Զեղչ" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.55)', padding: '25px', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '50px', margin: '0', fontWeight: '900' }}>-10%</h3>
            <div>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: '700', lineHeight: '1.4' }}>Ամենահայտնի Reel-ը սոցիալական հարթակում</h4>
              <p style={{ margin: '0', fontSize: '13px', color: '#e2e8f0', lineHeight: '1.5' }}>Վիդեո տարբերակով ներկայացրու քո լավագույն օրերից մեկը amaranoc.am-ի առանձնատներից մեկում և ստացիր 10% զեղչ</p>
            </div>
          </div>
        </div>

        {/* -5% Բաններ */}
        <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', height: '280px', boxShadow: '0 10px 25px rgba(0,0,0,0.08)' }}>
          <img src={cottageBgImage} alt="5% Զեղչ" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.55)', padding: '25px', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '50px', margin: '0', fontWeight: '900' }}>-5%</h3>
            <div>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: '700', lineHeight: '1.4' }}>Ավելացրու 5% զեղչ քո յուրաքանչյուր 3-րդ այցի համար</h4>
              <p style={{ margin: '0', fontSize: '13px', color: '#e2e8f0', lineHeight: '1.5' }}>Իրականացրու բազմաթիվ ամրագրումներ և յուրաքանչյուր 3-րդ ամրագրման համար ստացիր 5% զեղչ</p>
            </div>
          </div>
        </div>
      </div>


      {/* 2. ՆՎԵՐ ՔԱՐՏԻ ՄԵԾ ԲԼՈԿ (Մուգ կապույտ ֆոնով՝ ինչպես քո դիզայնում է) */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1.1fr 0.9fr', 
        backgroundColor: '#1e2530', // Քո սիրած մուգ Navy ֆոնը
        padding: '45px 50px', 
        borderRadius: '24px', 
        marginBottom: '60px', 
        alignItems: 'center',
        gap: '40px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
      }}>
        
        {/* Ձախ մաս՝ Տեքստեր */}
        <div style={{ color: '#ffffff' }}>
          <h2 style={{ fontSize: '34px', fontWeight: '800', margin: '0 0 6px 0', color: '#ff7e42', letterSpacing: '0.5px' }}>
            ՊԱՏՎԻՐԻ՛Ր ՆՎԵՐ ՔԱՐՏ
          </h2>
          <h4 style={{ fontSize: '18px', fontWeight: '600', margin: '0 0 25px 0', color: '#cbd5e1', letterSpacing: '0.5px' }}>
            ՔՈ ԿԱՄ ԸՆԿԵՐՆԵՐԻԴ ՀԱՄԱՐ
          </h4>
          <p style={{ color: '#94a3b8', lineHeight: '1.7', fontSize: '14px', margin: '0', textAlign: 'justify' }}>
            Բաց մի թող մեր բացառիկ զեղչի քարտերը: Եթե պլանավորում ես քո հաջորդ արձակուրդը ընկերներիդ կամ ընտանիքիդ անդամների հետ, մեր զեղչային քարտերը առաջարկում են անգերազանցելի խնայողություններ ամարանոցների և ծառայությունների լայն տեսականիով:
          </p>
        </div>
        
        {/* Աջ մաս՝ Գրադիենտով Նարնջագույն Նվեր Քարտը */}
        <div style={{ 
          background: 'linear-gradient(135deg, #ff9460 0%, #ff6219 100%)', 
          padding: '40px 30px', 
          borderRadius: '20px', 
          color: '#fff', 
          textAlign: 'center',
          boxShadow: '0 10px 25px rgba(255, 98, 25, 0.25)'
        }}>
          <h3 style={{ marginBottom: '30px', letterSpacing: '3px', fontSize: '22px', fontWeight: '800' }}>
            AMARANOC.AM
          </h3>
          
          {/* 6 Գնային Կոճակների Ցանց */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '30px' }}>
            {giftCardPrices.map((price, idx) => {
              const isSelected = selectedPrice === price;
              return (
                <button 
                  key={idx} 
                  onClick={() => setSelectedPrice(price)}
                  style={{ 
                    padding: '10px 2px', 
                    border: '1px solid rgba(255,255,255,0.35)', 
                    background: isSelected ? '#ffffff' : 'rgba(255,255,255,0.08)', 
                    color: isSelected ? '#ff6219' : '#ffffff', 
                    borderRadius: '50px', 
                    fontSize: '13px',
                    fontWeight: isSelected ? '700' : '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    if(!isSelected) e.target.style.background = 'rgba(255,255,255,0.2)';
                  }}
                  onMouseOut={(e) => {
                    if(!isSelected) e.target.style.background = 'rgba(255,255,255,0.08)';
                  }}
                >
                  {price}
                </button>
              );
            })}
          </div>
          
          {/* Պատվիրել Կոճակ */}
          <button style={{ 
            backgroundColor: '#ffffff', 
            color: '#ff6219', 
            border: 'none', 
            padding: '12px 45px', 
            borderRadius: '50px', 
            fontWeight: '700', 
            fontSize: '15px', 
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s ease'
          }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.04)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          onClick={() => alert(`Պատվերը գրանցվեց՝ ${selectedPrice}`)}
          >
            Պատվիրել
          </button>
        </div>

      </div>

    </main>
  );
}