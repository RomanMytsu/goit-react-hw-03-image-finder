import { Image, ImageItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  showModal,
}) => {
  return (
    <ImageItem>
      <Image
        src={webformatURL}
        alt={tags}
        onClick={() => showModal(largeImageURL, tags)}
      />
    </ImageItem>
  );
};
