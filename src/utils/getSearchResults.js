import { getPossibleContents } from 'store/matchContent/thunk';

const getSearchResults = async (contentTitle, contents, dispatch) => {
  const possibleContents = Object.values(contents).flat().filter((({
    title,
  }) => title.toLowerCase() === contentTitle.toLowerCase()));

  if (possibleContents.length) return possibleContents;
  const { payload } = await dispatch(getPossibleContents(contentTitle));
  return payload;
};

export default getSearchResults;
