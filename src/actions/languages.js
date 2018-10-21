import { LANG_ACTION } from '.';
import languages from '../data/languages';

export const switchLanguage = lang => {
    return {
        type: LANG_ACTION.SWITCH_LANGUAGE,
        lang
    }
}

export const get = () => {
    return {
        type: LANG_ACTION.FETCH_LANGUAGES,
        lang : languages
    }
}