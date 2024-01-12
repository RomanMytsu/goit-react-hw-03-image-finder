import { Component } from 'react';
import { SearchForm } from './SearchForm/SearchForm';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { searchImage } from 'components/Api/Api';
// import { Button } from 'components/Button/Button';

export class Searchbar extends Component {
  state = {
    search: '',
    page: 1,
    loading: false,
    results: [],
    totalImages: 0,
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
        results:[...prevState.results, ...data.hits],
      }));
    } catch (error) {
      this.setState({
        error: error.message,
      });
    }
  }

  handleSearch = ({ search }) => {
    this.setState({
      search,
      results: [],
      page: 1,
    });
  };
  render() {
    const { handleSearch } = this;
    const { results } = this.state;
    console.log(results);
    return (
      <>
        <SearchForm onSubmit={handleSearch} />
        <ImageGallery images={results} />
        {/* <loadMoreWrapper>
          <Button type="button">LoadMore</Button>
        </loadMoreWrapper> */}
      </>
    );
  }
}
