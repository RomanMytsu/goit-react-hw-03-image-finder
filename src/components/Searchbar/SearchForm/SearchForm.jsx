import { Component } from 'react';
import { Form, Input, LabelBtn, SearchBtn } from './SearchForm.styled';
import { GoSearch } from 'react-icons/go';

export class SearchForm extends Component {
  state = {
    search: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState({
      search: '',
    });
  };
  render() {
    const { handleChange, handleSubmit } = this;
    const { search } = this.state;
    return (
      <Form onSubmit={handleSubmit}>
        <SearchBtn type="submit">
          <GoSearch />
          <LabelBtn>Search</LabelBtn>
        </SearchBtn>

        <Input
          value={search}
          onChange={handleChange}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          required
        />
      </Form>
    );
  }
}
