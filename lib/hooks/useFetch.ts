import useSWR from "swr";

export function useFetch<Data = any>(url: string) {
	const { data, error } = useSWR<Data>(url, async (url) => {
		const response = await fetch(url);
		const data = await response.json();

		return data;
	});

	return { data, error };
}

export function useFetchHeaders<Data = any>(url: string) {
	const myHeaders = new Headers({
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "98357c457c1836ad2dca64924ef3b857",
	});
	const myInit = { method: "GET", headers: myHeaders };

	const { data, error } = useSWR<Data>(url, async (url) => {
		const response = await fetch(url, myInit);
		const data = await response.json();

		return data;
	});

	return { data, error };
}
