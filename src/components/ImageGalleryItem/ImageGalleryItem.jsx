export const ImageGalleryItem = ({ smallimage, bigimage, tag }) => {
  return (
    <li>
      <img src={smallimage} alt={tag} />
    </li>
  );
};
