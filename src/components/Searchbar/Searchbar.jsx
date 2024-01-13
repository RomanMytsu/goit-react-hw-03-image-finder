import { Component } from 'react';
import { SearchForm } from './SearchForm/SearchForm';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { searchImage } from 'components/Api/Api';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { SearchbarWrap } from './Searchbar.styled';
import { Modal } from 'components/Modal/Modal';
import { Notify } from 'notiflix';

export class Searchbar extends Component {
  state = {
    search: '',
    page: 1,
    loading: false,
    results: [],
    totalImages: 0,
    currentItem: {},
    openModal: false,
  };

  async componentDidUpdate(_, prevState) {
    const { search, page } = this.state;
    if (search && (search !== prevState.search || page !== prevState.page)) {
      this.fetchImage();
    }
  }

  async fetchImage() {
    const { search, page } = this.state;

    try {
      this.setState({
        loading: true,
      });
      const { data } = await searchImage(search, page);

      this.setState(prevState => ({
        totalImages: data.totalHits,
        results: [...prevState.results, ...data.hits],
      }));
    } catch (err) {
      Notify.error(`Error: ${err.message}`);
    } finally {
      this.setState({ loading: false });
    }
  }

  handleSearch = ({ search }) => {
    this.setState({
      search,
      results: [],
      page: 1,
    });
  };

  showModal = (largeImageURL, tags) => {
    this.setState({
      openModal: true,
      currentItem: {
        largeImageURL,
        tags,
      },
    });
  };

  closeModal = () => {
    this.setState({
      openModal: false,
      currentItem: {},
    });
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };
  render() {
    const { handleSearch, loadMore, showModal, closeModal } = this;
    const { results, loading, totalImages, openModal, currentItem } =
      this.state;
    return (
      <>
        <SearchbarWrap>
          <SearchForm onSubmit={handleSearch} />
        </SearchbarWrap>
        <ImageGallery showModal={showModal} images={results} />
        {loading && <Loader />}
        {!loading && !!totalImages && totalImages > results.length && (
          <Button onClick={loadMore} type="button">
            LoadMore
          </Button>
        )}
        {openModal && <Modal item={currentItem} close={closeModal} />}
      </>
    );
  }
}
