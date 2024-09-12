/* 
  Assuming this is in a React project where styles.css is in the same directory as this file
  and this function can be imported and used <App />
*/
import './styles.css';

export function App() {
  return (
    <div className="app-container">
      <header className="header">Header</header>

      <div className="content-wrapper">
        <aside className="sidebar-wrapper">
          <section className="hero">Hero</section>
          <nav className="sidebar-nav">Sidebar</nav>
        </aside>

        <main className="main-content-wrapper">
          <section className="main-content">Main Content</section>
          <section className="extra-content">Extra Content</section>
        </main>
      </div>

      <aside className="related-content-wrapper">
        <section className="related-images">Related Images</section>
        <section className="related-posts">Related Posts</section>
      </aside>

      <footer className="footer">Footer</footer>
    </div>
  );
}
