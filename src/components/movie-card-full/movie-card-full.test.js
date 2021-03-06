/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import TestRenderer from "react-test-renderer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "../../reducer";
import { Router } from "react-router";
import history from "../../history";

import MovieCardFull from "./movie-card-full";
import films from "../../mocks/films.json";

const initState = {
  films,
  awaitFilm: null,
  currentFilm: films[0],
  hoveredFilm: null,
  activeGenre: "",
  genresList: null,
  tk: null,
  reviews: null,
  staff: null,
  hoveredVideoData: null,
};

const store = createStore(reducer, initState);

describe("MovieCardFull component", () => {
  const props = {
    isAuth: false,
    film: films[0],
    reviews: films[0].reviews,
    staff: films[0].staff,
  };
  const Trenderer = TestRenderer.create(
    <Provider store={store}>
      <Router history={history}>
        <MovieCardFull {...props} />
      </Router>
    </Provider>
  );

  it("renders correctly", () => {
    expect(Trenderer.toJSON()).toMatchSnapshot();
  });

  it("renders section with className", () => {
    const className = "movie-card movie-card--full";

    expect(Trenderer.root.findByType("section").props.className).toEqual(
      className
    );
  });

  it("renders with title", () => {
    const className = "movie-card__title";

    expect(
      Trenderer.root.findByProps({ className: className }).props.children
    ).toEqual(props.film.nameRu);
  });

  it("renders with director", () => {
    const className = "movie-card__director";

    expect(
      Trenderer.root.findByProps({ className: className }).props.children.props
        .children[1]
    ).toEqual(props.staff[0].nameRu);
  });
});
