const Header = ({ tabs }) => {
  return (
    <div className="container container-menu">
      <div className="bloc-tabs">
        {tabs.pages.map((page) => (
          <button
            className={
              tabs.toggleState === page.id ? "tabs active-tabs" : "tabs"
            }
            key={page.id}
            onClick={() => tabs.toggleTab(page.id)}
          >
            {page.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
