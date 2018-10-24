import { LANG_ACTION } from '.';
import languages from '../data/languages';

// FETCH DATA
export const fetchLanguages = dispatch => {
    dispatch(fetchLanguagesSuccess(languages));
    return true;
}

export const switchLanguage = lang => {
    return {
        type: LANG_ACTION.SWITCH_LANGUAGE,
        lang
    }
}

export const fetchLanguagesSuccess = languages => {
    return {
        type: LANG_ACTION.FETCH_LANGUAGES,
        lang : languages
    }
}