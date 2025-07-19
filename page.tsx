export default function HomePage() {
  return (
    <main style={{ padding: '4rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Добро пожаловать на мой сайт</h1>
      <img src="/hero.jpg" alt="Главное изображение" style={{ width: '300px', margin: '2rem auto' }} />
      <p>Это короткая одностраничная версия сайта на Vercel.</p>
      <a href="#" style={{
        display: 'inline-block',
        marginTop: '2rem',
        padding: '1rem 2rem',
        backgroundColor: '#0070f3',
        color: '#fff',
        borderRadius: '6px',
        textDecoration: 'none'
      }}>
        Подробнее
      </a>
    </main>
  );
}
