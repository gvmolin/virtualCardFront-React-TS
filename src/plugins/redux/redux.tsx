import { ReactElement } from "react";
import store from './store';
import { Provider } from 'react-redux';

export default function ReduxComponent(props:{children:ReactElement}){
    return(
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}