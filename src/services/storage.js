const QUOTE_KEY = 'QUOTE';

export const storageService = {
    setQuote : (quote) => {
        localStorage.setItem(QUOTE_KEY, quote)
    },
    getQuote: () => {
        return localStorage.getItem(QUOTE_KEY)
    }
}