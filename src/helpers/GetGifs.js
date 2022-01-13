export const GetGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?limit=10&api_key=dEmhNP4LiC5o6zXaKrvQdJNV9GgUrglH&q=${encodeURI(
    category
  )}`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    };
  });

  return gifs;
};
