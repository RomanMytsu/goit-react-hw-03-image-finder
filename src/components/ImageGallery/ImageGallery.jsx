import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          smallimage={webformatURL}
          bigimage={largeImageURL}
          tag={tags}
        />
      ))}
    </ul>
  );
};
