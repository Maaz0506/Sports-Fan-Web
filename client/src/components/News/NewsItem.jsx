import PropTypes from "prop-types"
const Newsitems=(props)=>{
    let { title, description, imageurl, uniqueurl, author, date, source } =
      props;
    return (
      <div>
        <div className="card">
          <div style={{display:"flex",right:0,justifyContent:"flex-end",position:"absolute"}}>
            <span
              className=" badge rounded-pill bg-danger" >
              {source}
            </span>
            </div>
          <img
            src={
              !imageurl
                ? "https://ichef.bbci.co.uk/news/1024/branded_news/148A8/production/_126763148_3635e83fdde85e6fe08b4226ec97b9fbd289e231.jpg"
                : imageurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>

            <p className="card-text">{description}</p>
            <div className="card-footer">
              <small className="text-muted">
                From {author} on <strong>{new Date(date).toUTCString()}</strong>
              </small>
            </div>
            <a
              href={uniqueurl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }

export default Newsitems;
Newsitems.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    imageurl: PropTypes.string,
    uniqueurl: PropTypes.string,
    source: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    
    // article:PropTypes.number
  };