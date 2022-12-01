
const BOOKMARKTRUE = 'bookmark/BOOKMARKTRUE'
const BOOKMARKFALSE = 'bookmark/BOOKMARKFALSE'

export const bookmarkTrue = (id) => ({
    type: BOOKMARKTRUE,
    id: id,
});

export const bookmarkFalse = (id) => ({
    type: BOOKMARKFALSE,
    id: id,
});

const initialID = {
    trueID: [],
  };

function bookmark(state=initialID, action){
    switch (action.type) {
        case BOOKMARKTRUE : 
        return {
            ...state,
            trueID: state.trueID.concat(action.id),
        };
        case BOOKMARKFALSE:
        return {
          ...state,
          trueID: state.trueID.filter((id) => id !== action.id),
        };
        default:
        return state;
    }
  }

  export default bookmark;