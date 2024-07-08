import image from '../assets/pexels-brotin-biswas-158640-518543.jpg';

const NewsItem = ({ title, description, src, url }) => {

    const defaultMessage = "No description available for this news article. Please click 'Read More' to access the full story.";
    

    return (
      <div className="card bg-dark text-light md-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
        <img src={src?src:image} style={{height:"200px",width:"325px"}} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,50)}</h5>
          <p className="card-text">{description?description.slice(0,90):defaultMessage}</p>
          <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      </div>
    );
  };
  
  export default NewsItem;
  