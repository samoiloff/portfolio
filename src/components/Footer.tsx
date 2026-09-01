export function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Built with{' '}
        <a
          className="footer__link"
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React.js
        </a> | 2026 | Made by {' '}
          <a
              className="footer__link"
              href="https://www.linkedin.com/in/damir-ismailov-2746115/?skipRedirect=true"
              target="_blank"
              rel="noopener noreferrer"
          >
              Damir Ismailov
          </a>.
      </p>
    </footer>
  );
}
