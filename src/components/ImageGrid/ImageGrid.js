import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import { loadImages } from '../../actions';
import Button from '../Button';
import Stats from '../Stats';

class ImageGrid extends Component {
  componentDidMount() {
    const { loadImages } = this.props;
    loadImages();
  }

  render() {
    const { isLoading, images, error, loadImages, imageStats } = this.props;
    return (
      <div className="content">
        <section className="grid">
          {images.map(image => (
            <div
              key={image.id}
              className={`item item-${Math.ceil(image.height / image.width)}`}
            >
              <Stats stats={imageStats[image.id]} />
              <img src={image.urls.small} alt={image.user.username} />
            </div>
          ))}
        </section>
        {error && <div className="error">{JSON.stringify(error)}</div>}
        <Button onClick={() => !isLoading && loadImages()} loading={isLoading}>
          Load More
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading.isLoading,
  images: state.images,
  error: state.error.error,
  imageStats: state.imageStats,
});

export default connect(
  mapStateToProps,
  { loadImages },
)(ImageGrid);
