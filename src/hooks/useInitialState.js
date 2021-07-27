import { useState } from "react";
import initialState from "../context/initialState";

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const toggleLoading = () => {
    setState((state) => ({
      ...state,
      loading: !state.loading,
    }));
  };
};
