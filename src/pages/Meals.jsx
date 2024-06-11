import MealBox from "../components/Meals/MealBox";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../hooks/useAxiosCommon";
import { useState } from "react";
import Loader from "../components/shared/Loader";
import SearchIcon from "@mui/icons-material/Search";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  TextField,
} from "@mui/material";

const Meals = () => {
  const axiosCommon = useAxiosCommon();
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");

  console.log(searchText);

  const { data, isLoading: mealsLoading } = useQuery({
    queryFn: async () => {
      const { data } = await axiosCommon(
        `/meals?filter=${filter}&search=${search}&sort=${sort}`
      );
      return data;
    },
    queryKey: ["meals", filter, search, sort],
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
  };

  const handleReset = () => {
    setFilter("");
    setSort("");
    setSearch("");
    setSearchText("");
  };

  if (mealsLoading) return <Loader />;
  const meals = data.items;

  return (
    <div className="my-10">
      <Helmet>
        <title>Meals</title>
      </Helmet>
      <form
        className="px-5 flex items-center gap-4 lg:w-3/4 md:w-3/4 mx-auto"
        onSubmit={handleSearch}
      >
        <SearchIcon />
        <TextField
          label="Search"
          variant="outlined"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          fullWidth
          margin="normal"
        />

        <button
          type="submit"
          className="px-6 py-3 text-white sm:text-sm hover:bg-blue-600 rounded border bg-blue-500 border-blue-500"
        >
          Search
        </button>
      </form>
      <div className="w-full flex justify-center flex-col gap-5 sm:flex-row sm:justify-center sm:items-center sm:gap-5 p-5">
        <Box sx={{ minWidth: 200 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Filter By Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filter}
              label="Filter By Category"
              onChange={(e) => {
                setFilter(e.target.value);
              }}
            >
              <MenuItem value="Breakfast">Breakfast</MenuItem>
              <MenuItem value="Lunch">Lunch</MenuItem>
              <MenuItem value="Dinner">Dinner</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 200 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sort By Price</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sort}
              label="Sort By Price"
              onChange={(e) => {
                setSort(e.target.value);
              }}
            >
              <MenuItem value="asc">Ascending Price</MenuItem>
              <MenuItem value="dsc">Descending Price</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <div className="lg:w-auto text-center">
          <button
            onClick={handleReset}
            className="lg:w-auto px-8 py-3 md:rounded text-xs font-medium transition-colors duration-200 sm:text-sm bg-blue-500 hover:bg-blue-600 uppercase text-white"
          >
            Reset All
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-8">
        {meals?.map((meal) => (
          <MealBox
            key={meal._id}
            image={
              "https://opencart.dostguru.com/FD01/flavoro_02/image/cache/catalog/product/27-543x543.jpg"
            }
            meal={meal}
          />
        ))}
      </div>
    </div>
  );
};

export default Meals;
