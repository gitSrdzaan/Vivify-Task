import React from 'react';
import PropTypes from 'prop-types';

const width = 110;

const styles = {
  starsInner: {
    width: `${width}px`,
  },
  starsEmptyInner: {
    position: 'absolute',
    width: `${width}px`,
  },
  starsOuter: {
    overflow: 'hidden',
  },
  star: {
    padding: '1px',
  },
};

const cropWidth = rating => {
  return Math.floor((rating * width) / 5);
};

const StarRating = ({ rating, ratingMovie, movieId }) => {
  const containerStyle = { width: `${cropWidth(rating)}px` };

  let handleClick = (e)=>{
    //console.log(e.target.getAttribute('star-id'));

    let star =e.target.getAttribute('star-id');
    console.log('star',star);

    if(star){
      ratingMovie(star,movieId);
    }

  }

  return (
    <div>
      <div style={styles.starsOuter}>
        <div style={containerStyle} onClick={handleClick}>
          <div style={styles.starsEmptyInner}>
            <i star-id="1" className="fa fa-star-o fa-lg" style={styles.star}></i>
            <i star-id="2" className="fa fa-star-o fa-lg" style={styles.star}></i>
            <i star-id="3" className="fa fa-star-o fa-lg" style={styles.star}></i>
            <i star-id="4" className="fa fa-star-o fa-lg" style={styles.star}></i>
            <i star-id="5" className="fa fa-star-o fa-lg" style={styles.star}></i>
          </div>
          <div style={styles.starsInner}>
            <i star-id="1" className="fa fa-star fa-lg" style={styles.star}></i>
            <i star-id="2" className="fa fa-star fa-lg" style={styles.star}></i>
            <i star-id="3" className="fa fa-star fa-lg" style={styles.star}></i>
            <i star-id="4" className="fa fa-star fa-lg" style={styles.star}></i>
            <i star-id="5" className="fa fa-star fa-lg" style={styles.star}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

StarRating.defaultProps = {
  rating: 0,
};

StarRating.propTypes = {
  rating: PropTypes.number,
};

export default StarRating;
