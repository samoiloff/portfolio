import { assetUrl } from '../data/works';

export function Profile() {
  return (
    <header className="profile">
      <div className="profile__photo">
        <img
          src={assetUrl('assets/photo.jpg')}
          alt="Damir Ismailov"
          width={200}
          height={200}
        />
      </div>

      <div className="profile__info">
        <h1 className="profile__name">Damir Ismailov</h1>
        <p className="profile__role">RIA Typescript developer</p>
        <div className="profile__actions">
          <a
            className="profile__link"
            href="https://www.linkedin.com/in/damir-ismailov-2746115/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a className="profile__contact" href="mailto:doomer.samoiloff@gmail.com">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
