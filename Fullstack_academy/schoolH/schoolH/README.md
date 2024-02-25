# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Redux is a state management

store
has all the states

slice/reducer
controls the logic to give to the states

actions
are the fucionts

action > reducer > state


1. Players.jsx ->useDispatch //makes annoucment
2. PlayersSlice.jsx
3. PlayersSlice.jsx -> builder
4. Store.jsx
5. Players.jsx ->useSelector() //selects from the store