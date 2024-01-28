
import * as actionTypes from "./constants"

async function fetchTranslation() {

    // this is just that might be language tranlation need api call but for now importing from files only
    try {
      //let translation = await import('@/locale/translation/translation');
      let translation = await import('../../locale/translation/translation')
      return translation.default;
    } catch (error) {
      console.error(
        'NOT ABle to fetch the language translation For now using English BY Default',
        error
      );
    }
  }

export const translateAction={
        resetstate:()=>(dispatch)=>{
            dispatch({
                type:actionTypes.RESET_STATE
            })
        },
        translate: (value) => async (dispatch) => {
            dispatch({
              type: actionTypes.REQUEST_LOADING,
            });
            const translation = await fetchTranslation(); 
            let data = await translation[value];
    
            const LANG_STATE = {
              result: data,
              langCode: value,
              isLoading: false,
              isSuccess: false,
            };
            window.localStorage.setItem('translate', JSON.stringify(LANG_STATE));
            if (data) {
              dispatch({
                type: actionTypes.REQUEST_SUCCESS,
                payload: data,
                langCode: value,
              });
            } else {
              dispatch({
                type: actionTypes.REQUEST_FAILED,
              });
            }
          },
}