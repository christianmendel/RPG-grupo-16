const Content = ({ tabs }) => {
  return (
    <div className="container container-tab">
      <div className="content-tabs">
        {tabs.pages.map((page) => (
          <div
            className={
              tabs.toggleState === page.id
                ? "content  active-content"
                : "content"
            }
            key={page.id}
          >
            {page.body}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Content;
