import { setloading } from "../../../redux/actions";

export function updateLoadingState(pokemons, dispatch) {
    if (pokemons.length > 0) {
      dispatch(setloading(false));
    } else {
      dispatch(setloading(true));
    }
  }