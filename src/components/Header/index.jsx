import Logo from '../../assets/img/logo.png';

const Header = ({ setPage, page }) => {
  const handleSetPage = namePage => event => {
    if (namePage !== page){
      setPage(namePage);
    }
  }

  return (
    <header className="header columns">
      <div className="column header__logo">
        <a href=".">
          <img src={Logo} alt="Lufergonn"/>
        </a>
      </div>
      <nav className="header_nav column breadcrumb is-right" aria-label="breadcrumbs">
        <ul>
          <li className={(page === 'home') ? 'is-active' : 'no-active'} onClick={handleSetPage('home')}>
            <a href="#home">
              <span className="icon is-small">
                <i className="fas fa-home" aria-hidden="true"></i>
              </span>
              <span>Home</span>
            </a>
          </li>
          <li className={(page === 'analysis') ? 'is-active' : 'no-active'} onClick={handleSetPage('analysis')}>
            <a href="#analysis">
              <span className="icon is-small">
              
                <i className="fas fa-chart-pie" aria-hidden="true"></i>
              </span>
              <span>Analysis</span>
            </a>
          </li>
          <li className={(page === 'github') ? 'is-active' : 'no-active'} onClick={handleSetPage('github')}>
            <a href="#github">
              <span className="icon is-small">
                <i className="fab fa-github" aria-hidden="true"></i>
              </span>
              <span>GitHub</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;