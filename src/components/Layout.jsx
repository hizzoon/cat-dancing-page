import '../styles/layout.css';

export default function Layout({ children }) {
  return (
    <div className="page">
      <header className="header">
        <h1>🐱 춤추는 고양이</h1>
        <p>고양이와 함께 춤을 춰요!</p>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <p>Made with 💖 and lots of catnip</p>
      </footer>
    </div>
  );
}
