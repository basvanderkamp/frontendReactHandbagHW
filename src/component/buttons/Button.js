import React from 'react';

function Button({linktext, disableBut}) {
    function clickHandler() {
        console.log(linktext)
    }
    return (
        <button
            disabled={disableBut}
            type="button"
            onClick={clickHandler}>{linktext}
        </button>

    )
}
export default Button