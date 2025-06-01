import { useState, useEffect, useCallback } from "react";

function useExchangeRate(fromCurrency, toCurrency) {
    const [rate, setRate] = useState(null);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);

    const fetchRate = useCallback(async () => {
        if (!fromCurrency || !toCurrency) return;
        setLoading(true);
        setErr(null);

        try {
            const res = await fetch(
                `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency.toLowerCase()}.json`
            );
            const data = await res.json();
            const rate = data[fromCurrency.toLowerCase()][toCurrency.toLowerCase()];
            setRate(rate);
        }
        catch (err) {
            setErr(`Failed to fetch exchange rate: ${err.message}`);
            setErr(null);
        }
        finally {
            setLoading(false)
        }
    }, [fromCurrency, toCurrency]);

    useEffect(() => {
        fetchRate();
    }, [fetchRate]);

    return { rate, loading, err }
}

export default useExchangeRate;