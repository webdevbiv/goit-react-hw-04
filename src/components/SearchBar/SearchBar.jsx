import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const query = form.elements[0].value.trim();
    if (query === "") {
      toast.error("Please enter a search term");
      return;
    }

    onSubmit(query);
    form.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
