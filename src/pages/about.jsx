import React from 'react';

export default function About() {
  const reviews = [
    { id: 1, name: "Gurgen", stars: 5, text: "Thanks for providing great service 👍🔥" },
    { id: 2, name: "Armine", stars: 5, text: "Очень довольна. Они очень помогли мне с выбором дома, и дом был просто замечательным." },
    { id: 3, name: "Aghajanyan Zara", stars: 5, text: "Ավելի իդեալական չէր կարա լիներ!!!" },
    { id: 4, name: "Ani Arzumanyan", stars: 5, text: "Сдали наш дом имеем отличный результат, очень довольны :)" }
  ];

  return (
    <main style={{ backgroundColor: '#fff', color: '#1a202c', fontFamily: '"Segoe UI", Roboto, sans-serif' }}>
      
      {}
      <section style={{ width: '100%', height: '70vh', position: 'relative', overflow: 'hidden' }}>
        <img 
          src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1600&auto=format&fit=crop" 
          alt="Amaranoc Hero" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5))',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <h1 style={{ color: '#fff', fontSize: '48px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px' }}>
            Մեր Մասին
          </h1>
        </div>
      </section>

      <div className="container" style={{ padding: '60px 20px' }}>
        
        {}
        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center', marginBottom: '80px' }}>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop" 
              alt="Luxury Mansion" 
              style={{ width: '100%', borderRadius: '24px', boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}
            />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <span style={{ width: '30px', height: '2px', backgroundColor: '#1a202c' }}></span>
              <h2 style={{ fontSize: '32px', fontWeight: '800', margin: 0, textTransform: 'uppercase' }}>Մեր Մասին</h2>
            </div>
            <p style={{ color: '#4a5568', fontSize: '16px', lineHeight: '1.8', textAlign: 'justify' }}>
              Amaranoc.am-ը վստահության, հավատարմության և գերազանցության ձգտման պատմություն է: Հանդիսանալով ամառանոցների վարձակալության ոլորտում առաջատար մեկ ընկերություն, մենք ձեզ առաջարկում ենք շքեղ առանձնատների, քոթեջների, վիլլաների և ամառանոցների լայն ու բազմազան ընտրություն: Մեր հիմնական առաքելությունն է սպասարկել մեր հաճախորդներին ամենաբարձր մակարդակով՝ ստեղծելով հարմարավետության և շքեղության մթնոլորտ մեր յուրաքանչյուր առանձնատանը: Մեր նվիրվածությունը և մանրուքների հանդեպ ուշադրությունը երաշխավորում է հիշարժան հանգիստ Հայաստանի ամենահիասքանչ ամառանոցներում:
            </p>
          </div>
        </section>

        {}
        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center', marginBottom: '80px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <span style={{ width: '30px', height: '2px', backgroundColor: '#1a202c' }}></span>
              <h2 style={{ fontSize: '32px', fontWeight: '800', margin: 0, textTransform: 'uppercase' }}>Մեր Թիմը</h2>
            </div>
            <p style={{ color: '#4a5568', fontSize: '16px', lineHeight: '1.8', textAlign: 'justify' }}>
              Շուրջ 20 մասնագետներից բաղկացած մեր պրոֆեսիոնալ թիմն իր աշխատանքն իրականացնում է փայլուն հմտությամբ՝ բավարարելու անգամ ամենապահանջկոտ հաճախորդի կարիքները: Շնորհիվ ոլորտում ունեցած մեր անգնահատելի փորձի, մեր նպատակն է անմոռանալի պահեր ստեղծել մեր հյուրերի համար: Մենք պարզապես չենք ստեղծում ժամանց, մենք ստեղծում ենք պատմություններ, և յուրաքանչյուր առանձնատուն (որոնք դուք տեսնում եք մեր կայքում) այդ պատմության մի մասն է: Օրեցօր ընդլայնվելով՝ մենք ձգտում ենք նորագույն չափանիշներ սահմանել ոլորտում և որ ամենակարևորն է` մենք օր օրի հստակ ու կայուն քայլերով շարժվում ենք առաջ՝ բարելավելով մեր երկրում սպասարկման ոլորտը՝ շքեղ առանձնատները հասանելի դարձնելով բոլորին:
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop" 
              alt="Team and Interior" 
              style={{ width: '100%', borderRadius: '24px', boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}
            />
          </div>
        </section>

        {}
        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center', marginBottom: '80px' }}>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&auto=format&fit=crop" 
              alt="Pool Area" 
              style={{ width: '100%', borderRadius: '24px', boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}
            />
          </div>
          <div>
            <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px', textTransform: 'uppercase', lineHeight: '1.3' }}>
              Ինչու համագործակցել Amaranoc.am-ի հետ
            </h2>
            <p style={{ color: '#4a5568', fontSize: '16px', lineHeight: '1.8', textAlign: 'justify' }}>
              Amaranoc.am-ի ընտրությունը երաշխավորում է շքեղության, անհատականացված սպասարկման բարձր մակարդակ և իհարկե վստահության հիմքի վրա կառուցված կայուն համագործակցություն: Գերազանցության հանդեպ մեր բարձր ձգտումը և հավատարմությունը, էքսկլյուզիվ առաջարկների լայն ընտրությունը և մեր յուրաքանչյուր հյուրի նախասիրությունների նկատմամբ մանրակրկիտ ուշադրությունը մեզ առանձնացնում են ոլորտում՝ բոլորից դարձնելով առաջատար: Մենք առաջարկում ենք որակ և ստեղծում ենք հարմարավետության բարձր զգացում, որոնք գերազանցում են ձեր բոլոր սպասելիքները: Մենք բարձր ենք գնահատում ձեր գործընկերության և մեր հաճախորդների վստահությունը: Այդ վստահությունը մեր ընկերության հիմքն է: Մենք խորապես հակված ենք այն գաղափարին, որ մեր առանձնատներում...
            </p>
          </div>
        </section>

        {}
        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center', marginBottom: '80px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <span style={{ width: '30px', height: '2px', backgroundColor: '#1a202c' }}></span>
              <h2 style={{ fontSize: '32px', fontWeight: '800', margin: 0, textTransform: 'uppercase' }}>Մարկետինգ</h2>
            </div>
            <p style={{ color: '#4a5568', fontSize: '16px', lineHeight: '1.8', textAlign: 'justify' }}>
              Amaranoc.am-ում մենք գիտակցում ենք մարկետինգի առանցքային դերը ամառանոցների վարձակալության ոլորտում: Մեր ռազմավարական մարկետինգային նախաձեռնությունները ներառում են էքսկլյուզիվ համագործակցություններ և շեշտադրում են մեր ամառանոցների եզակի առանձնահատկությունները: 10 մասնագետից բաղկացած մեր պրոֆեսիոնալ մարկետինգի թիմը աշխատում է բարձր պատասխանատվությամբ և նվիրումով, որպեսզի դուք միշտ առաջինը տեղեկացված լինեք լավագույն առաջարկների մասին:
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop" 
              alt="Sauna Lounge" 
              style={{ width: '100%', borderRadius: '24px', boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}
            />
          </div>
        </section>

        {}
        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center', marginBottom: '80px' }}>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop" 
              alt="Modern Villa View" 
              style={{ width: '100%', borderRadius: '24px', boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}
            />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <span style={{ width: '30px', height: '2px', backgroundColor: '#1a202c' }}></span>
              <h2 style={{ fontSize: '32px', fontWeight: '800', margin: 0, textTransform: 'uppercase' }}>Մեր Պատմությունը</h2>
            </div>
            <p style={{ color: '#4a5568', fontSize: '16px', lineHeight: '1.8', textAlign: 'justify' }}>
              Amaranoc.am - ը հիմնադրվել է 2023 թվականի հուլիսի 1-ին և հենց այդ օրվանից սկսած մինչ օրս մենք չենք դադարում զարմացնել մեր հաճախորդներին և գոհացնել մեր գործընկերներին: Մենք հպարտ ենք, որ այս նախագիծը մեր ողջ թիմի համատեղ ջանքերի արդյունքն է և հանդիսանում է Hasce.am անշարժ գույքի ընկերության ամենակարևոր մաս: Յուրաքանչյուր քայլ ամրապնդել է մեր հիմնադիր սկզբունքները և առաջ է մղել մեզ ձեռք բերել անուն, որին վստահում են բոլորը: Եվ եթե դուք այստեղ եք, հավատացած եղեք, որ ամեն ինչ դեռ առջևում է:
            </p>
          </div>
        </section>

        {}
        <section style={{ width: '100%', height: '50vh', borderRadius: '24px', overflow: 'hidden', marginBottom: '80px' }}>
          <img 
            src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=1600&auto=format&fit=crop" 
            alt="Photographer Showcase" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </section>

        {}
        <section style={{ marginBottom: '40px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontSize: '14px', fontWeight: '700', color: '#ff7e42', letterSpacing: '2px', textTransform: 'uppercase' }}>Կարծիքներ</span>
            <h2 style={{ fontSize: '36px', fontWeight: '800', margin: '5px 0 0 0', textTransform: 'uppercase' }}>Ինչ են ասում մեր հաճախորդները</h2>
            <div style={{ width: '50px', height: '3px', backgroundColor: '#ff7e42', margin: '15px auto 0 auto' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '20px' }}>
            {reviews.map((review) => (
              <div 
                key={review.id}
                style={{
                  backgroundColor: '#f7fafc',
                  padding: '25px',
                  borderRadius: '20px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                    <div style={{
                      width: '35px', height: '35px', borderRadius: '50%', 
                      backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <i className="fa-solid fa-user" style={{ color: '#718096', fontSize: '14px' }}></i>
                    </div>
                    <span style={{ fontWeight: '700', fontSize: '14px', color: '#2d3748' }}>{review.name}</span>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '2px', marginBottom: '15px' }}>
                    {[...Array(review.stars)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star" style={{ color: '#ffb800', fontSize: '12px' }}></i>
                    ))}
                  </div>

                  <p style={{ color: '#4a5568', fontSize: '14px', lineHeight: '1.6', margin: 0, fontStyle: 'italic' }}>
                    "{review.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <button style={{
              backgroundColor: '#ff7e42', color: '#fff', border: 'none', padding: '12px 30px', 
              borderRadius: '50px', fontWeight: '700', fontSize: '14px', cursor: 'pointer', boxShadow: '0 4px 15px rgba(255,126,66,0.3)'
            }}>
              Թողնել կարծիք
            </button>
            <button style={{
              backgroundColor: 'transparent', color: '#718096', border: '1px solid #e2e8f0', padding: '12px 30px', 
              borderRadius: '50px', fontWeight: '700', fontSize: '14px', cursor: 'pointer'
            }}>
              Տեսնել բոլորը
            </button>
          </div>
        </section>

      </div>
    </main>
  );
}