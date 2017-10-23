import MovieIndex from '../../containers/MovieIndex/MovieIndex';
import * as actions from '../../actions/MovieIndexActions';

describe(`MOVIE INDEX`, () => {
  it(`should create an action to display movies`, () => {
    const movieArray = [{name: 'Wall-E'}, {name: 'Mulan'}, {name: 'Up'}];
    const expectedAction = {
      type: `DISPLAY_MOVIES`,
      movieArray
    };
    const expectation = actions.displayMovies(movieArray);

    expect(expectation).toEqual(expectedAction);
  });
});
