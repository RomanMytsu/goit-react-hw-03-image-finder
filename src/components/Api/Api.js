import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
});

export const searchImage = (query, page) => {
  return instance.get('/', {
    params: {
      key: '41779116-ad8a281cd7d37248b60617e60',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      q: query,
      page,
    },
  });
};
