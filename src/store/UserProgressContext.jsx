import React, { createContext, useState } from 'react'
const UserProgressContext = createContext({
    // progress: '',
    // showCart: () => { },
    // hideCart: () => { },
    // showCheckOut: () => { },
    // hideCheckOut: () => { }
});
// Yes, that's correct. The userProgressCts object is managing the state related to whether the user has opened the cart or the checkout process.
export const UserProgressContextProvider = ({ children }) => {
    const [userProgress, setUserProgress] = useState('');
    function showCart() {
        setUserProgress('cart');
    }
    function hideCart() {
        setUserProgress('');
    }
    function showCheckOut() {
        setUserProgress('checkout');
    }
    function hideCheckOut() {
        setUserProgress('');
    }
    const userProgressCts = {
        progress: userProgress, //state 
        showCart, hideCart, showCheckOut, hideCheckOut // methods to change the state which will change the state and then the consumers will rerender when this state is changed 
    }
    return <UserProgressContext.Provider value={userProgressCts}>{children}</UserProgressContext.Provider>
};
export default UserProgressContext;
